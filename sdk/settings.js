"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
// -----------------------------------------------------------------------------
//                          CONFIG
// -----------------------------------------------------------------------------
class SETTINGS {
    constructor() {
    }
    static instance() {
        return SETTINGS.singleton;
    }
    setIsInBackground(background) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetIsInBackground(background);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    setNetworkType(type) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetNetworkType(type);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    startDevicesAutoOpen(time) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StartDevicesAutoOpen(time);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    stopDevicesAutoOpen(logout) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StopDevicesAutoOpen(logout);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
}
SETTINGS.singleton = new SETTINGS();
exports.settings = SETTINGS.instance();
//# sourceMappingURL=settings.js.map