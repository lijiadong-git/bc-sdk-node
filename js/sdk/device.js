"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffiCallback = require('ffi').Callback;
const ref = require('ref');
const native_1 = require("./native");
const T = require("../types");
const _T = require("./_struct");
const _callback_1 = require("./_callback");
class DEVICE {
    constructor() {
    }
    static instance() {
        return DEVICE.singleton;
    }
    add(loginDes, callback) {
        return new Promise((resolve, reverse) => {
            var tloginDes = new _T.DEVICE_LOGIN_DESC({
                name: loginDes.name.split(''),
                useP2P: loginDes.useP2P,
                port: loginDes.port,
                uidPort: loginDes.uidPort,
                host: loginDes.host.split(''),
                uid: loginDes.uid.split(''),
                username: loginDes.username.split(''),
                password: loginDes.password.split('')
            });
            let callbackDes = new _T.DEVICE_CALLBACK_DESC({
                func: DEVICE.deviceCallback,
                userData: null
            });
            let handle = native_1.default.BCSDK_AddDevice(tloginDes.ref(), callbackDes.ref());
            if (handle >= 0) {
                let tcallback = {
                    sdkCallback: callback,
                };
                _callback_1.CB.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_CONNECTION_STATE_CHANGE, 0, tcallback);
                resolve(handle);
            }
            else {
                reverse(Error("Error code: " + handle));
            }
        });
    }
    open(handle, callback) {
        return new Promise(function (resolve, reject) {
            let tcallback = {
                sdkResolve: resolve,
                sdkReject: reject
            };
            let ret = -1;
            if (handle >= 0) {
                ret = native_1.default.BCSDK_DeviceForceOpen(handle, true);
                if (ret < 0) {
                    tcallback = null;
                }
            }
            else {
                tcallback = null;
            }
            _callback_1.CB.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_LOGIN, 0, tcallback);
            if (0 > ret) {
                reject(Error('' + ret));
            }
        });
    }
}
DEVICE.singleton = new DEVICE();
DEVICE.deviceCallback = ffiCallback('void', ['int', _T.BC_CMD_DATA, _T.pointer('void')], function (handle, cmdData, userData) {
    new Promise(function (resolve, reject) {
        if (!cmdData /*_T.BC_CMD_DATA*/
            || 'undefined' === typeof cmdData.bcCmd
            || 'undefined' === typeof cmdData.cmdIdx
            || 'undefined' === typeof cmdData.cmdIdx
            || 'undefined' === typeof cmdData.bcRspCode
            || 'undefined' === typeof cmdData.dataLen
            || 'undefined' === typeof cmdData.handleId) {
            reject(Error('sdk callback format !!!!!!! ' + cmdData));
            return;
        }
        let callback = _callback_1.CB.getCallback(handle, cmdData.handleId, cmdData.bcCmd, cmdData.cmdIdx);
        if (callback) {
            switch (cmdData.bcCmd) {
                case T.BC_CMD_E.E_BC_CMD_CONNECTION_STATE_CHANGE: {
                    if (_T.DEVICE_STATE_CHANGE_DESC.size === cmdData.dataLen) {
                        var buf = ref.reinterpret(cmdData.pRspData, cmdData.dataLen);
                        var des = ref.get(buf, 0, _T.DEVICE_STATE_CHANGE_DESC);
                        if (callback.sdkCallback && callback.sdkCallback.stateCallback) {
                            callback.sdkCallback.stateCallback(handle, des.eStateFrom, des.eStateTo);
                        }
                    }
                    break;
                }
                default:
                    break;
            }
            if (callback.sdkResolve) {
                callback.sdkResolve(cmdData.bcRspCode);
            }
            resolve();
        }
        else {
            reject(Error("no callback !!!!!!!!!"
                + "\n - handle: " + handle
                + "\n - channel: " + cmdData.handleId
                + "\n - cmd: " + T.BC_CMD_E[cmdData.bcCmd]
                + "\n - cmd index: " + cmdData.cmdIdx));
        }
    })
        .catch(reason => {
        console.log(reason);
    });
});
exports.device = DEVICE.instance();
//# sourceMappingURL=device.js.map