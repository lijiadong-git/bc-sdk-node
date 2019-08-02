"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
class TALK {
    constructor() {
    }
    static instance() {
        return TALK.singleton;
    }
    getTotalBitrates() {
        return new Promise((resolve, reject) => {
            resolve(1);
        });
    }
    reInitP2p() {
        return new Promise(resolve => {
            native_1.native.BCSDK_ReInitP2p();
            resolve();
        });
    }
}
TALK.singleton = new TALK();
exports.talk = TALK.instance();
//# sourceMappingURL=talk.js.map