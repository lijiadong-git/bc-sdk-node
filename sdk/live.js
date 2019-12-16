"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi_1 = require("ffi");
const ref = require("ref");
const native_1 = require("./native");
const T = require("../types");
const _T = require("./_struct");
const _callback_1 = require("./_callback");
class LengthBuf {
    constructor(len) {
        this.len = len;
        this.buf = Buffer.alloc(len);
    }
    get buffer() { return this.buf; }
    get length() { return this.len; }
    set(buffer, length) {
        if (length > this.len) {
            this.len = length;
            this.buf = Buffer.alloc(length);
        }
        this.buf.set(buffer);
    }
}
class LIVE {
    constructor() {
    }
    static instance() {
        return LIVE.singleton;
    }
    handleSDKCallback(handle, cmdData) {
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        switch (cmdData.bcCmd) {
            default: {
                _callback_1.PROMISE_CBS.handleCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx, callback => {
                    if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode) {
                        if (callback.sdkResolve) {
                            callback.sdkResolve(cmdData.bcRspCode);
                        }
                    }
                    else {
                        if (callback.sdkReject) {
                            callback.sdkReject({
                                code: cmdData.bcRspCode,
                                description: "live sdk callback ..."
                            });
                        }
                    }
                });
                break;
            }
        }
    }
    getFrameCallback(func) {
        return ffi_1.Callback('void', ['int', 'int', _T.P_RENDER_FRAME_DESC, ref.types.size_t], function (handle, channel, frameDes, userData) {
            if (!frameDes) {
                // error format ...
                return;
            }
            let key = 'handle:' + handle + 'channel' + channel;
            let cache = LIVE.frameCallbcks.get(key);
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
    getLiveStreamType(handle, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, T.BC_STREAM_TYPE_E.E_BC_STREAM_SUB);
            if (!buf) {
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetLiveStreamType(handle, channel, buf);
            if (0 > ret) {
                reject({ code: ret, description: 'get live stream type' });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    getIsLiveOpen(handle, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.bool, false);
            if (!buf) {
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetIsLiveOpen(handle, channel, buf);
            if (0 > ret) {
                reject({ code: ret, description: 'get is live open' });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    liveOpen(handle, channel, stream, callback) {
        return new Promise((resolve, reject) => {
            let frameCallback = this.getFrameCallback(callback);
            let ret = native_1.native.BCSDK_LiveOpen(handle, channel, stream, frameCallback, null);
            if (0 === ret) {
                let cb = {
                    sdkResolve: resolve,
                    sdkReject: reject
                };
                _callback_1.PROMISE_CBS.addCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0, cb);
                _callback_1.COMMON_CBS.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0, { sdkCallback: callback });
                // save callback
                let key = 'handle:' + handle + 'channel' + channel;
                LIVE.frameCallbcks.set(key, {
                    useful: true,
                    func: frameCallback,
                    bufVideo: [new LengthBuf(460800), new LengthBuf(460800), new LengthBuf(460800)],
                    bufAudio: new LengthBuf(4096)
                });
            }
            else {
                reject({ code: ret, description: 'live open' });
            }
        });
    }
    liveClose(handle, channel) {
        return new Promise((resolve, reject) => {
            // clean frame callback
            let key = 'handle:' + handle + 'channel' + channel;
            let cb = LIVE.frameCallbcks.get(key);
            if (cb) {
                cb.useful = false;
                setTimeout(() => {
                    let cb2 = LIVE.frameCallbcks.get(key);
                    if (cb2 && !cb2.useful) {
                        LIVE.frameCallbcks.delete(key);
                    }
                }, 10000);
            }
            //
            let ret = native_1.native.BCSDK_LiveClose(handle, channel);
            if (0 > ret) {
                reject({ code: ret, description: 'live close' });
                return;
            }
            resolve();
        });
    }
    liveMute(handle, channel, mute) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveMute(handle, channel, mute);
            if (0 > ret) {
                reject({ code: ret, description: 'live mute' });
                return;
            }
            resolve();
        });
    }
}
LIVE.singleton = new LIVE();
LIVE.frameCallbcks = new Map();
exports.live = LIVE.instance();
//# sourceMappingURL=live.js.map