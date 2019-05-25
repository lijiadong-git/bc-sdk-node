"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const ffi_1 = require("ffi");
const ref = require("ref");
const T = require("../types");
const _T = require("./_struct");
const _cast_1 = require("./_cast");
class SEARCH {
    constructor() {
    }
    static instance() {
        return SEARCH.singleton;
    }
    addCallback(callback) {
        return new Promise((resolve, reject) => {
            if (-1 == SEARCH.callbacks.indexOf(callback)) {
                SEARCH.callbacks.push(callback);
                if (1 == SEARCH.callbacks.length) {
                    let ret = native_1.native.BCSDK_AddSearchCallback(SEARCH.deviceFoundCallback, null);
                    if (ret != T.ERROR.E_NONE) {
                        reject({ code: ret });
                        return;
                    }
                }
            }
            resolve();
        });
    }
    removeCallback(callback) {
        return new Promise((resolve, reject) => {
            let index = SEARCH.callbacks.indexOf(callback);
            if (-1 == index) {
                reject({ code: T.ERROR.E_NOT_FOUND, description: 'search callback not found ...' });
                return;
            }
            SEARCH.callbacks.splice(index, 1);
            if (0 == SEARCH.callbacks.length) {
                native_1.native.BCSDK_RemoveSearchCallback(SEARCH.deviceFoundCallback, null);
            }
            resolve();
        });
    }
    /* start device search loop with loop time
     *
     * @param time              [2,10]
     *
     * @return                  E_NONE, success
     *                          E_ILLEGAL, time is out of [2,10]
     */
    startLoop(time) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StartDeviceSearchLoop(time);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    /* stop device search loop
     *
     */
    stopLoop() {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StopDeviceSearchLoop();
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    /* start device search once immediately
     *
     * @return                  E_NONE, success
     *                          E_UND, failed
     */
    deviceSearchOnce() {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_DeviceSearchOnce();
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    /* start Song P2P device search once immediately
     *
     * @return                  E_NONE, success
     *                          E_UND, failed
     */
    songP2PDeviceSearchOnce() {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SongP2PDeviceSearchOnce();
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
}
SEARCH.singleton = new SEARCH();
SEARCH.callbacks = [];
SEARCH.deviceFoundCallback = ffi_1.Callback('void', [_T.P_DEVICE_LOCATION_DESC, _T.pointer('void')], function (pdesc, userData) {
    new Promise((resolve, reject) => {
        if (!pdesc) {
            reject({ code: T.ERROR.E_WRONG_FORMAT, description: 'search callback error format ...' });
            return;
        }
        let buf = ref.reinterpret(pdesc, _T.DEVICE_LOCATION_DESC.size);
        let desc = ref.get(buf, 0, _T.DEVICE_LOCATION_DESC);
        let param = _cast_1.derefCast(desc, _T.DEVICE_LOCATION_DESC);
        SEARCH.callbacks.forEach(callback => {
            callback(param);
        });
        resolve();
    })
        .catch(reason => {
        console.log(reason);
    });
});
exports.search = SEARCH.instance();
//# sourceMappingURL=search.js.map