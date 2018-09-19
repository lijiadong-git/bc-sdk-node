"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffiCallback = require('ffi').Callback;
const ref = require('ref');
const native_1 = require("./native");
const T = require("../types");
const _T = require("./_struct");
const _callback_1 = require("./_callback");
const deviceCallback = ffiCallback('void', ['int', _T.BC_CMD_DATA, _T.pointer('void')], function (handle, cmdData, userData) {
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
                        let buf = ref.reinterpret(cmdData.pRspData, cmdData.dataLen);
                        let des = ref.get(buf, 0, _T.DEVICE_STATE_CHANGE_DESC);
                        if (callback.sdkCallback && callback.sdkCallback.stateCallback) {
                            callback.sdkCallback.stateCallback(handle, des.eStateFrom, des.eStateTo);
                        }
                    }
                    break;
                }
                case T.BC_CMD_E.E_BC_CMD_GET_ABILITY: {
                    if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode) {
                        if (callback.sdkCallback && callback.sdkCallback.abilityChangeCallback) {
                            callback.sdkCallback.abilityChangeCallback(handle);
                        }
                    }
                    break;
                }
                default:
                    break;
            }
            if (callback.sdkResolve) {
                callback.sdkResolve(cmdData.bcRspCode);
                delete callback.sdkResolve;
                if (0 === Object.keys(callback).length) {
                    _callback_1.CB.clearCallback(handle, cmdData.handleId, cmdData.bcCmd, cmdData.cmdIdx);
                }
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
// -----------------------------------------------------------------------------
//                          DEVICE
// -----------------------------------------------------------------------------
class DEVICE {
    constructor() {
    }
    static instance() {
        return DEVICE.singleton;
    }
    add(loginDes, callback) {
        return new Promise((resolve, reject) => {
            let tloginDes = new _T.DEVICE_LOGIN_DESC({
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
                func: deviceCallback,
                userData: null
            });
            let perror = ref.alloc(ref.types.int, 0);
            let handle = native_1.native.BCSDK_AddDevice(tloginDes.ref(), callbackDes.ref(), perror);
            if (handle >= 0 && 0 == perror.deref()) {
                let tcallback = {
                    sdkCallback: callback,
                };
                _callback_1.CB.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_CONNECTION_STATE_CHANGE, 0, tcallback);
                _callback_1.CB.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_GET_ABILITY, 0, tcallback);
                resolve(handle);
            }
            else {
                reject(Error("Error code: " + perror.deref()));
            }
        });
    }
    remove(handle) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_RemoveDevice(handle);
            if (ret < 0) {
                reject(Error("Error code: " + ret));
                return;
            }
            _callback_1.CB.clearCallbackForHandle(handle);
            resolve();
        });
    }
    removeAll() {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_RemoveAllDevices();
            if (ret < 0) {
                reject(Error("Error code: " + ret));
                return;
            }
            _callback_1.CB.clearAll();
            resolve();
        });
    }
    modify(handle, loginDes) {
        return new Promise((resolve, reject) => {
            let tloginDes = new _T.DEVICE_LOGIN_DESC({
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
                func: deviceCallback,
                userData: null
            });
            let perror = ref.alloc(ref.types.int, 0);
            let thandle = native_1.native.BCSDK_ModifyDevice(handle, tloginDes.ref(), callbackDes.ref(), perror);
            if (thandle >= 0 && 0 == perror.deref()) {
                if (handle != thandle) {
                    _callback_1.CB.modifyCallbackHandle(handle, thandle);
                }
                resolve(thandle);
            }
            else {
                reject(Error("Error code: " + perror.deref()));
            }
        });
    }
    getDevicesCount() {
        return new Promise((resolve, reject) => {
            let count = native_1.native.BCSDK_GetDeviceCount();
            resolve(count);
        });
    }
    getDeviceAtIndex(index) {
        return new Promise((resolve, reject) => {
            let handle = native_1.native.BCSDK_GetDevice(index);
            if (handle < 0) {
                reject(Error("Error code: " + handle));
                return;
            }
            resolve(handle);
        });
    }
    open(handle) {
        return new Promise((resolve, reject) => {
            let tcallback = {
                sdkResolve: resolve
            };
            let ret = -1;
            if (handle >= 0) {
                ret = native_1.native.BCSDK_DeviceForceOpen(handle, true);
                if (ret < 0) {
                    tcallback = null;
                }
            }
            else {
                tcallback = null;
            }
            _callback_1.CB.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_LOGIN, 0, tcallback);
            // resolve will be called after callback
            if (0 > ret) {
                reject(Error("Error code: " + ret));
            }
        });
    }
    getLoginDescription(handle) {
        return new Promise((resolve, reject) => {
            let des = new _T.DEVICE_LOGIN_DESC();
            let ret = native_1.native.BCSDK_GetDeviceLoginMessage(handle, des.ref());
            if (ret < 0) {
                reject(Error('code: ' + ret + ' details: BCSDK_GetDeviceLoginMessage failed for ' + handle));
                return;
            }
            resolve({
                name: String.fromCharCode.apply(null, des.name),
                useP2P: des.useP2P,
                port: des.port,
                uidPort: des.uidPort,
                host: String.fromCharCode.apply(null, des.host),
                uid: String.fromCharCode.apply(null, des.uid),
                username: String.fromCharCode.apply(null, des.username),
                password: String.fromCharCode.apply(null, des.password),
            });
        });
    }
    getChannelCount(handle) {
        let buf = ref.alloc(ref.types.int, 0);
        native_1.native.BCSDK_GetDeviceChannelCount(handle, buf);
        let value = buf.deref();
        return value;
    }
}
DEVICE.singleton = new DEVICE();
exports.device = DEVICE.instance();
//# sourceMappingURL=device.js.map