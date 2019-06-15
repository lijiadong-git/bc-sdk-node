"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const ffi_1 = require("ffi");
const ref = require("ref");
const T = require("../types");
const _T = require("../sdk/_struct");
class LengthBuf {
    constructor(len) {
        this.len = len;
        this.buf = new Uint8Array(len);
    }
    get buffer() { return this.buf; }
    get length() { return this.len; }
    set(buffer, length) {
        if (length > this.len) {
            this.len = length;
            this.buf = new Uint8Array(length);
        }
        this.buf.set(buffer);
    }
}
class PLAYER {
    constructor() {
    }
    static instance() {
        return PLAYER.singleton;
    }
    getPlayerCallback(func) {
        return ffi_1.Callback('void', [_T.P_RENDER_FRAME_DESC, ref.types.size_t], function (frameDes, userData) {
            if (!frameDes) {
                // error format ...
                return;
            }
            let hPlayer = userData;
            let cache = PLAYER.frameCallbcks.get(hPlayer);
            if (!cache) {
                return;
            }
            let buf = ref.reinterpret(frameDes, _T.RENDER_FRAME_DESC.size);
            let des = ref.get(buf, 0, _T.RENDER_FRAME_DESC);
            if (des.type & T.DEFINDE.MEDIA_FRAME_TYPE_VIDEO) {
                let planes = [];
                for (let i = 0; i < 3; i++) {
                    let len = des.video.plane[i].stride * des.video.plane[i].height;
                    if (len > 0) {
                        cache.bufVideo[i].set(ref.reinterpret(des.video.plane[i].address, len), len);
                    }
                    planes.push({
                        width: des.video.plane[i].width,
                        height: des.video.plane[i].height,
                        stride: des.video.plane[i].stride,
                        data: len > 0 ? cache.bufVideo[i].buffer : null
                    });
                }
                let callbackData = {
                    pts: des.pts,
                    width: des.video.width,
                    height: des.video.height,
                    format: des.video.format,
                    plane0: planes[0],
                    plane1: planes[1],
                    plane2: planes[2]
                };
                if (func) {
                    func.onVieoData(callbackData);
                }
            }
            else if (des.type & T.DEFINDE.MEDIA_FRAME_TYPE_AUDIO) {
                let len = des.audio.length;
                cache.bufAudio.set(ref.reinterpret(des.audio.media, len), len);
                let callbackData = {
                    media: cache.bufAudio.buffer,
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
                PLAYER.frameCallbcks.set(hPlayer, {
                    func: playerCallback,
                    bufVideo: [new LengthBuf(460800), new LengthBuf(460800), new LengthBuf(460800)],
                    bufAudio: new LengthBuf(4096)
                });
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