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
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        switch (cmdData.bcCmd) {
            case T.BC_CMD_E.E_BC_CMD_DOWNLOAD_PROGRESS: {
                var buf = ref.reinterpret(cmdData.pRspData, _T.BC_DOWNLOAD_BY_NAME_INFO.size);
                var info = ref.get(buf, 0, _T.BC_DOWNLOAD_BY_NAME_INFO);
                if (!info.fileSize || !info.curSize) {
                    return;
                }
                // find the callback function
                let callback = _callback_1.COMMON_CBS.getCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD_PROGRESS, 0);
                if (!callback || !callback.sdkCallback) {
                    return;
                }
                // callback
                let progress = info.curSize / info.fileSize;
                callback.sdkCallback(progress);
                break;
            }
            default: {
                _callback_1.PROMISE_CBS.handleCallback(handle, 0, cmdData.bcCmd, cmdData.cmdIdx, callback => {
                    if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode) {
                        if (callback.sdkResolve) {
                            callback.sdkResolve(cmdData.bcRspCode);
                        }
                    }
                    else {
                        if (callback.sdkReject) {
                            callback.sdkReject({
                                code: cmdData.bcRspCode,
                                description: "download sdk callback ..."
                            });
                        }
                    }
                });
                break;
            }
        }
    }
    startDownloadFile(handle, fileName, subStream, type, tempFolder, dstFile, callback) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StartDownloadFile(handle, '', fileName, subStream, type, tempFolder, dstFile);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            let cb = {
                sdkResolve: resolve,
                sdkReject: reject
            };
            _callback_1.PROMISE_CBS.addCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD, 0, cb);
            _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD_PROGRESS, 0, { sdkCallback: callback });
        });
    }
    stopDownload(handle) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StopDownload(handle, 0);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            let cb = {
                sdkResolve: resolve,
                sdkReject: reject
            };
            _callback_1.PROMISE_CBS.addCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD_STOP, 0, cb);
            _callback_1.COMMON_CBS.clearCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_DOWNLOAD_PROGRESS, 0);
        });
    }
}
DOWNLOAD.singleton = new DOWNLOAD();
exports.download = DOWNLOAD.instance();
//# sourceMappingURL=download.js.map