"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi_1 = require("ffi");
const ref = require("ref");
const native_1 = require("./native");
const T = require("../types");
const _T = require("./_struct");
const _callback_1 = require("./_callback");
class LIVE {
    constructor() {
    }
    static instance() {
        return LIVE.singleton;
    }
    handleSDKCallback(handle, cmdData) {
        new Promise((resolve) => {
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
                                    description: "live sdk callback ...",
                                    data: cmdData
                                });
                            }
                        }
                    });
                    break;
                }
            }
            resolve();
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
                reject({ code: ret });
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
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    liveOpen(handle, channel, stream, callback) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveOpen2(handle, channel, stream, LIVE.liveCallback, null);
            if (0 === ret) {
                let cb = {
                    sdkResolve: resolve,
                    sdkReject: reject
                };
                _callback_1.PROMISE_CBS.addCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0, cb);
                let cb2 = {
                    sdkCallback: callback,
                };
                _callback_1.COMMON_CBS.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0, cb2);
            }
            else {
                reject({ code: ret, description: 'live open error ...' });
            }
        });
    }
    liveClose(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveClose(handle, channel);
            if (0 > ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    liveMute(handle, channel, mute) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveMute(handle, channel, mute);
            if (0 > ret) {
                reject({ code: ref });
                return;
            }
            resolve();
        });
    }
}
LIVE.singleton = new LIVE();
LIVE.liveCallback = ffi_1.Callback('void', ['int', 'int', _T.P_DATA_FRAME_DESC, _T.pointer('void')], function (handle, channel, frameDes, userData) {
    new Promise((resolve, reject) => {
        if (!frameDes) {
            reject({ code: T.ERROR.E_WRONG_FORMAT, description: 'live callback error format ...' });
            return;
        }
        var buf = ref.reinterpret(frameDes, _T.DATA_FRAME_DESC.size);
        var des = ref.get(buf, 0, _T.DATA_FRAME_DESC);
        // find the callback function
        let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0);
        if (!callback
            || !callback.sdkCallback
            || !callback.sdkCallback.onData) {
            reject({ code: T.ERROR.E_NOT_FOUND, description: 'live callback function error ...' });
            return;
        }
        let callbackData = {
            handle: handle,
            channel: channel,
            dataDesc: {
                version: des.version,
                type: des.type,
                length: des.length,
                media: ref.reinterpret(des.media, des.length),
                pts: des.pts,
                videoInfo: {
                    width: des.videoInfo.width,
                    height: des.videoInfo.height,
                    frameRate: des.videoInfo.frameRate
                },
                audioInfo: {
                    hasAAC: des.audioInfo.hasAAC,
                    sampleRate: des.audioInfo.sampleRate,
                    profile: des.audioInfo.profile,
                    channels: des.audioInfo.channels
                }
            }
        };
        // callback                
        callback.sdkCallback.onData(callbackData);
        resolve();
    })
        .catch(reason => {
        console.log(reason);
    });
});
exports.live = LIVE.instance();
//# sourceMappingURL=live.js.map