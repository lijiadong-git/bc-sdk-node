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
    setLivePlayer(handle, channel, hPlayer) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetLivePlayer(handle, channel, hPlayer);
            if (0 > ret) {
                reject({ code: ret });
                return;
            }
            resolve();
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
            let ret = native_1.native.BCSDK_LiveOpen2(handle, channel, stream, LIVE.frameDescCallback, ref.NULL);
            if (0 === ret) {
                let cb = {
                    sdkResolve: resolve,
                    sdkReject: reject
                };
                _callback_1.PROMISE_CBS.addCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0, cb);
                _callback_1.COMMON_CBS.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0, { sdkCallback: callback });
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
}
LIVE.singleton = new LIVE();
LIVE.liveCallback = ffi_1.Callback('void', ['int', 'int', _T.P_DATA_FRAME_DESC, _T.pointer('void')], function (handle, channel, frameDes, userData) {
    if (!frameDes) {
        // live callback error format ...;
        return;
    }
    var buf = ref.reinterpret(frameDes, _T.DATA_FRAME_DESC.size);
    var des = ref.get(buf, 0, _T.DATA_FRAME_DESC);
    if (!des.media || 0 === des.length) {
        return;
    }
    // find the callback function
    let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0);
    if (!callback
        || !callback.sdkCallback
        || !callback.sdkCallback.onData) {
        // live callback function error ...;
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
});
LIVE.frameDescCallback = ffi_1.Callback('void', ['int', 'int', _T.P_COMMON_FRAME_DESC, _T.pointer('void')], function (handle, channel, frameDes, userData) {
    if (!frameDes) {
        return;
    }
    var buf = ref.reinterpret(frameDes, _T.COMMON_FRAME_DESC.size);
    var des = ref.get(buf, 0, _T.COMMON_FRAME_DESC);
    // find the callback function
    let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0);
    if (!callback || !callback.sdkCallback) {
        // live callback function error ...;
        return;
    }
    let type = (des.type & T.DEFINDE.MEDIA_FRAME_TYPE_VIDEO) ? 'video' :
        (des.type & T.DEFINDE.MEDIA_FRAME_TYPE_AUDIO) ? 'audio' : 'unknow';
    let callbackData = {
        version: des.version,
        type: type,
        pts: des.pts,
        delay: des.delay
    };
    // callback                
    callback.sdkCallback(callbackData);
});
exports.live = LIVE.instance();
//# sourceMappingURL=live.js.map