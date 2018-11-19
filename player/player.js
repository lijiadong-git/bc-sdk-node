"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const ffi_1 = require("ffi");
const ref = require("ref");
const _T = require("../sdk/_struct");
class PLAYER {
    constructor() {
    }
    static instance() {
        return PLAYER.singleton;
    }
    create() {
        return new Promise(resolve => {
            resolve(native_1.native.BC_MediaPlayerCreate());
        });
    }
    release(hPlayer) {
        return new Promise(resolve => {
            native_1.native.BC_MediaPlayerRelease(hPlayer);
            resolve();
        });
    }
    start(hPlayer, stream, callback) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BC_MediaPlayerStart(hPlayer, stream, PLAYER.playerCallback);
            if (0 === ret) {
                console.log('BC_MediaPlayerStart success ---');
                PLAYER.frameCallbck = callback;
                resolve();
            }
            else {
                reject('BC_MediaPlayerStart error code: ' + ret);
            }
        });
    }
    feed(hPlayer, data) {
        return new Promise((resolve, reject) => {
            let desc = new _T.DATA_FRAME_DESC({
                version: data.version,
                type: data.type,
                length: data.length,
                media: data.media,
                pts: data.pts,
                videoInfo: {
                    width: data.videoInfo.width,
                    height: data.videoInfo.height,
                    frameRate: data.videoInfo.frameRate
                },
                audioInfo: {
                    hasAAC: data.audioInfo.hasAAC,
                    sampleRate: data.audioInfo.sampleRate,
                    profile: data.audioInfo.profile,
                    channels: data.audioInfo.channels
                }
            });
            let ret = native_1.native.BC_MediaPlayerFeed(hPlayer, desc.ref());
            if (0 == ret) {
                resolve();
            }
            else {
                reject(new Error('feed data error !!!!!!!!!!!!!!!!!!!!!! --- ' + ret));
            }
        });
    }
    stop(hPlayer) {
        return new Promise(resolve => {
            native_1.native.BC_MediaPlayerStop(hPlayer);
            resolve();
        });
    }
}
PLAYER.singleton = new PLAYER();
PLAYER.playerCallback = ffi_1.Callback('void', [_T.P_RENDER_FRAME_DESC, _T.pointer('void')], function (frameDes, userData) {
    new Promise((resolve, reject) => {
        if (!frameDes) {
            reject('live callback error format ...');
            return;
        }
        var buf = ref.reinterpret(frameDes, _T.RENDER_FRAME_DESC.size);
        var des = ref.get(buf, 0, _T.RENDER_FRAME_DESC);
        if (des.type & 1) {
            // find the callback function
            let plane0 = {
                width: des.video.plane[0].width,
                height: des.video.plane[0].height,
                stride: des.video.plane[0].stride,
                data: des.video.plane[0].stride * des.video.plane[0].height > 0 ?
                    new Uint8Array(ref.reinterpret(des.video.plane[0].address, des.video.plane[0].stride * des.video.plane[0].height)) : null
            };
            let plane1 = {
                width: des.video.plane[1].width,
                height: des.video.plane[1].height,
                stride: des.video.plane[1].stride,
                data: des.video.plane[1].stride * des.video.plane[1].height > 0 ?
                    new Uint8Array(ref.reinterpret(des.video.plane[1].address, des.video.plane[1].stride * des.video.plane[1].height)) : null
            };
            let plane2 = {
                width: des.video.plane[2].width,
                height: des.video.plane[2].height,
                stride: des.video.plane[2].stride,
                data: des.video.plane[2].stride * des.video.plane[2].height > 0 ?
                    new Uint8Array(ref.reinterpret(des.video.plane[2].address, des.video.plane[2].stride * des.video.plane[2].height)) : null
            };
            let callbackData = {
                pts: des.pts,
                width: des.video.width,
                height: des.video.height,
                format: des.video.format,
                plane0: plane0,
                plane1: plane1,
                plane2: plane2
            };
            if (PLAYER.frameCallbck) {
                PLAYER.frameCallbck.onVieoData(callbackData);
            }
        }
        resolve();
    })
        .catch(reason => {
        console.log(reason);
    });
});
exports.player = PLAYER.instance();
//# sourceMappingURL=player.js.map