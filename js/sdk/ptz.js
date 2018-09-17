"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
class PTZ {
    constructor() {
    }
    static instance() {
        return PTZ.singleton;
    }
    ptzStop() {
        return native_1.native.BCSDK_PTZStop(0, 0);
    }
}
PTZ.singleton = new PTZ();
exports.ptz = PTZ.instance();
//# sourceMappingURL=ptz.js.map