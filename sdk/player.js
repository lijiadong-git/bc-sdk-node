"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const ref = require("ref");
// -----------------------------------------------------------------------------
//                          Player
// -----------------------------------------------------------------------------
class PLAYER {
    constructor() {
    }
    static instance() {
        return PLAYER.singleton;
    }
    create(hWndBuf, x, y, w, h) {
        let hwnd = ref.get(hWndBuf, 0, ref.types.long);
        return native_1.native.BCSDK_PlayerCreate(hwnd, x, y, w, h);
    }
    release(hPlayer) {
        return native_1.native.BCSDK_PlayerRelease(hPlayer);
    }
    resize(hPlayer, x, y, w, h) {
        return native_1.native.BCSDK_PlayerResize(hPlayer, x, y, w, h);
    }
    show(hPlayer) {
        return native_1.native.BCSDK_PlayerShow(hPlayer);
    }
    hide(hPlayer) {
        return native_1.native.BCSDK_PlayerHide(hPlayer);
    }
    clear(hPlayer, r, g, b) {
        return native_1.native.BCSDK_PlayerClear(hPlayer, r, g, b);
    }
    forceClear(hPlayer, r, g, b) {
        return native_1.native.BCSDK_PlayerForceClear(hPlayer, r, g, b);
    }
    capture(hPlayer, path) {
        return native_1.native.BCSDK_PlayerCapture(hPlayer, path);
    }
}
PLAYER.singleton = new PLAYER();
exports.player = PLAYER.instance();
//# sourceMappingURL=player.js.map