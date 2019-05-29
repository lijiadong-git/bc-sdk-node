"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const ffi_1 = require("ffi");
const ref = require("ref");
const T = require("../types");
const _T = require("../sdk/_struct");
class PLAYER {
    constructor() {
    }
    static instance() {
        return PLAYER.singleton;
    }
    getPlayerCallback(func) {
        return ffi_1.Callback('void', [_T.P_RENDER_FRAME_DESC, _T.pointer('void')], function (frameDes, userData) {
            new Promise((resolve, reject) => {
                if (!frameDes) {
                    reject({ code: T.ERROR.E_WRONG_FORMAT, description: 'live callback error format ...' });
                    return;
                }
                let buf = ref.reinterpret(frameDes, _T.RENDER_FRAME_DESC.size);
                let des = ref.get(buf, 0, _T.RENDER_FRAME_DESC);
                if (des.type & T.DEFINDE.MEDIA_FRAME_TYPE_VIDEO) {
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
                    if (func) {
                        func.onVieoData(callbackData);
                    }
                }
                else if (des.type & T.DEFINDE.MEDIA_FRAME_TYPE_AUDIO) {
                    let callbackData = {
                        media: new Uint8Array(ref.reinterpret(des.audio.media, des.audio.length)),
                        length: des.audio.length,
                        hasAAC: des.audio.hasAAC,
                        sampleRate: des.audio.sampleRate,
                        profile: des.audio.profile,
                        channels: des.audio.channels
                    };
                    if (func) {
                        func.onAudioData(callbackData);
                    }
                }
                resolve();
            })
                .catch(reason => {
                console.log(reason);
            });
        });
    }
    create() {
        return new Promise(resolve => {
            resolve(native_1.native.BC_MediaPlayerCreate());
        });
    }
    release(hPlayer) {
        return new Promise(resolve => {
            native_1.native.BC_MediaPlayerRelease(hPlayer);
            setTimeout(() => {
                PLAYER.frameCallbcks.delete(hPlayer);
            }, 10000);
            resolve();
        });
    }
    start(hPlayer, stream, callback) {
        return new Promise((resolve, reject) => {
            let playerCallback = this.getPlayerCallback(callback);
            let ret = native_1.native.BC_MediaPlayerStart(hPlayer, stream, playerCallback);
            if (0 === ret) {
                console.log('BC_MediaPlayerStart success --- ' + hPlayer);
                PLAYER.frameCallbcks.set(hPlayer, playerCallback);
                resolve();
            }
            else {
                reject({ code: ret, description: 'BC_MediaPlayerStart error ...' });
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
    mute(hPlayer, mute) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BC_MediaPlayerMute(hPlayer, mute);
            if (0 == ret) {
                resolve();
            }
            else {
                reject({ code: ret, description: 'BC_MediaPlayerMute error ...' });
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
PLAYER.frameCallbcks = new Map();
exports.player = PLAYER.instance();
//# sourceMappingURL=player.js.map