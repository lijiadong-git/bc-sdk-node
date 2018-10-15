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
                                callback.sdkReject(Error("Error code: " + cmdData.bcRspCode));
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
                ref;
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetLiveStreamType(handle, channel, buf);
            if (0 > ret) {
                reject(Error('error code: ' + ret));
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
                reject(Error('error code: ' + ret));
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    liveOpen(handle, channel, stream, callback) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveOpen(handle, channel, stream, LIVE.liveCallback, null);
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
                reject('live open error code: ' + ret);
            }
        });
    }
    liveClose(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveClose(handle, channel);
            if (0 > ret) {
                reject(Error('error code: ' + ret));
                return;
            }
            resolve();
        });
    }
    liveMute(handle, channel, mute) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveMute(handle, channel, mute);
            if (0 > ret) {
                reject(Error('error code: ' + ret));
                return;
            }
            resolve();
        });
    }
}
LIVE.singleton = new LIVE();
LIVE.liveCallback = ffi_1.Callback('void', ['int', 'int', _T.pointer(_T.RENDER_FRAME_DESC), _T.pointer('void')], function (handle, channel, frameDes, userData) {
    new Promise((resolve, reject) => {
        if (!frameDes) {
            reject('live callback error format ...');
        }
        var buf = ref.reinterpret(frameDes, _T.RENDER_FRAME_DESC.size);
        var des = ref.get(buf, 0, _T.RENDER_FRAME_DESC);
        if (des.type & 1) {
            // find the callback function
            let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_REALPLAY, 0);
            if (!callback
                || !callback.sdkCallback
                || !callback.sdkCallback.onVieoData) {
                reject('live callback function error ...');
                return;
            }
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
                handle: handle,
                channel: channel,
                pts: des.pts,
                width: des.video.width,
                height: des.video.height,
                format: des.video.format,
                plane0: plane0,
                plane1: plane1,
                plane2: plane2
            };
            // callback                
            callback.sdkCallback.onVieoData(callbackData);
            resolve();
        }
    })
        .catch(reason => {
        console.log(reason);
    });
});
exports.live = LIVE.instance();
//# sourceMappingURL=live.js.map