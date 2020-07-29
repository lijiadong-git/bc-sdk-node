"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const T = require("../types");
const _T = require("./_struct");
const ref = require("ref");
const _callback_1 = require("./_callback");
class DOWNLOAD {
    constructor() {
    }
    static instance() {
        return DOWNLOAD.singleton;
    }
    handleSDKCallback(handle, cmdData) {
        const bcCmd = cmdData.bcCmd;
        const cmdIdx = cmdData.cmdIdx;
        const bcRspCode = cmdData.bcRspCode;
        const pRspData = cmdData.pRspData;
        const dataLen = cmdData.dataLen;
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        switch (bcCmd) {
            case T.BC_CMD_E.E_BC_CMD_DOWNLOAD_PROGRESS: {
                // find the callback function
                let callback = _callback_1.COMMON_CBS.getCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD_PROGRESS, 0);
                if (!callback || !callback.sdkCallback) {
                    break;
                }
                if (_T.BC_DOWNLOAD_BY_NAME_INFO.size !== dataLen) {
                    break;
                }
                var buf = ref.reinterpret(pRspData, dataLen);
                var info = ref.get(buf, 0, _T.BC_DOWNLOAD_BY_NAME_INFO);
                if (!info.fileSize || !info.curSize) {
                    break;
                }
                let progress = info.curSize / info.fileSize;
                setImmediate(() => {
                    callback.sdkCallback(bcRspCode, progress);
                });
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_DOWNLOAD_STOP: {
                setImmediate(() => {
                    _callback_1.PROMISE_CBS.handleCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD, cmdIdx, callback => {
                        if (callback.sdkReject) {
                            callback.sdkReject({
                                code: T.BC_RSP_CODE_E.E_BC_RSP_CONNECT_FAILED,
                                description: "download stoped ..."
                            });
                        }
                    });
                });
                // no break here !!!!
            }
            default: {
                setImmediate(() => {
                    _callback_1.PROMISE_CBS.handleCallback(handle, 0, bcCmd, cmdIdx, callback => {
                        if (T.BC_RSP_CODE_E.E_BC_RSP_OK == bcRspCode) {
                            if (callback.sdkResolve) {
                                callback.sdkResolve(bcRspCode);
                            }
                        }
                        else {
                            if (callback.sdkReject) {
                                callback.sdkReject({
                                    code: bcRspCode,
                                    description: "download sdk callback ..."
                                });
                            }
                        }
                    });
                });
                break;
            }
        }
    }
    startDownloadFile(handle, identity, fileName, subStream, type, tempFolder, dstFile, callback) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StartDownloadFile(handle, '', identity, fileName, subStream, type, tempFolder, dstFile);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret, description: 'start download file' });
                return;
            }
            let cb = {
                sdkResolve: resolve,
                sdkReject: reject,
                timeout: 30 * 60,
            };
            _callback_1.PROMISE_CBS.addCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD, 0, cb);
            _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD_PROGRESS, 0, { sdkCallback: callback });
        });
    }
    stopDownload(handle) {
        return new Promise((resolve, reject) => {
            _callback_1.COMMON_CBS.clearCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD_PROGRESS, 0);
            let ret = native_1.native.BCSDK_StopDownload(handle, 0);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret, description: 'stop download' });
                return;
            }
            let cb = {
                sdkResolve: resolve,
                sdkReject: reject
            };
            _callback_1.PROMISE_CBS.addCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD_STOP, 0, cb);
        });
    }
}
DOWNLOAD.singleton = new DOWNLOAD();
exports.download = DOWNLOAD.instance();
//# sourceMappingURL=download.js.map