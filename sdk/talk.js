"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const T = require("../types");
const ref = require("ref");
const _callback_1 = require("./_callback");
class TALK {
    constructor() {
    }
    static instance() {
        return TALK.singleton;
    }
    handleSDKCallback(handle, cmdData) {
        const bcCmd = cmdData.bcCmd;
        const cmdIdx = cmdData.cmdIdx;
        const bcRspCode = cmdData.bcRspCode;
        const pRspData = cmdData.pRspData;
        const dataLen = cmdData.dataLen;
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        switch (bcCmd) {
            default: {
                setImmediate(() => {
                    _callback_1.PROMISE_CBS.handleCallback(handle, channel, bcCmd, cmdIdx, callback => {
                        if (T.BC_RSP_CODE_E.E_BC_RSP_OK == bcRspCode) {
                            if (callback.sdkResolve) {
                                callback.sdkResolve(bcRspCode);
                            }
                        }
                        else {
                            if (callback.sdkReject) {
                                callback.sdkReject({
                                    code: bcRspCode,
                                    description: "talk sdk callback ..."
                                });
                            }
                        }
                    });
                });
                break;
            }
        }
    }
    open(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_AudioTalkOpen(handle, channel);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret, description: 'talk open' });
                return;
            }
            let cb = {
                sdkResolve: resolve,
                sdkReject: reject
            };
            _callback_1.PROMISE_CBS.addCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_TALK_OPEN, 0, cb);
        });
    }
    close(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_AudioTalkClose(handle, channel);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret, description: 'talk close' });
                return;
            }
            resolve();
        });
    }
    state(handle, channel) {
        return new Promise((resolve, reject) => {
            let value = -1;
            let buf = ref.alloc(ref.types.int, value);
            let ret = native_1.native.BCSDK_GetAudioTalkState(handle, channel, buf);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret, description: 'talk state' });
                return;
            }
            value = ref.deref(buf);
            resolve(value);
        });
    }
}
TALK.singleton = new TALK();
exports.talk = TALK.instance();
//# sourceMappingURL=talk.js.map