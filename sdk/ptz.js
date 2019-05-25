"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const T = require("../types");
class PTZ {
    constructor() {
    }
    static instance() {
        return PTZ.singleton;
    }
    handleSDKCallback(handle, cmdData) {
        new Promise(function (resolve, reject) {
            resolve();
        });
    }
    stop(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZStop(handle, channel);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    up(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZUp(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    down(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZDown(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    left(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZLeft(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    right(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZRight(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    upLeft(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZUpLeft(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    upRight(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZUpRight(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    downLeft(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZDownLeft(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    downRight(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZDownRight(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    zoomIn(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZZoomIn(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    zoomOut(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZZoomOut(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    focusFar(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZFocusFar(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    focusNear(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZFocusNear(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    irisOpen(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZIrisOpen(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    irisClose(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZIrisClose(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    scanAuto(handle, channel, speed) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PTZScanAuto(handle, channel, speed);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
}
PTZ.singleton = new PTZ();
exports.ptz = PTZ.instance();
//# sourceMappingURL=ptz.js.map