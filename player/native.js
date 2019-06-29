"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi = require("ffi");
//const bindings = require('bindings')
const path = require('path');
const ref = require("ref");
const _T = require("../sdk/_struct");
exports.pointer = ref.refType;
exports.renderCallbackFunc = ffi.Function('void', [_T.P_RENDER_FRAME_DESC, ref.types.size_t]);
const folder = process.env.NODE_ENV === "development" ? process.env.VUE_APP_DIR_PLATFORM_EXTERNALS : __dirname;
const libPath = path.join(folder, 'libMediaPlayer');
console.log('load library: ' + libPath);
if (process.platform === "win32") {
    ffi.Library(path.join(folder, 'D3DX9_42'));
    ffi.Library(path.join(folder, 'avutil-55'));
    ffi.Library(path.join(folder, 'swresample-2'));
    ffi.Library(path.join(folder, 'swscale-4'));
    ffi.Library(path.join(folder, 'avcodec-57'));
    ffi.Library(path.join(folder, 'avformat-57'));
}
const MFFI = ffi.Library(libPath, {
    BC_MediaPlayerCreate: ['int', []],
    BC_MediaPlayerRelease: ['int', ['int']],
    BC_MediaPlayerStart: ['int', ['int', 'int', 'int', 'string', exports.renderCallbackFunc]],
    BC_MediaPlayerFeed: ['int', ['int', _T.P_DATA_FRAME_DESC]],
    BC_MediaPlayerMute: ['int', ['int', 'bool']],
    BC_MediaPlayerStop: ['int', ['int']]
});
class NativeDelegate {
    constructor() {
        /****************************************************************
         *
         *  Methods for Device
         *
         ****************************************************************/
        this.BC_MediaPlayerCreate = MFFI.BC_MediaPlayerCreate;
        this.BC_MediaPlayerRelease = MFFI.BC_MediaPlayerRelease;
        this.BC_MediaPlayerStart = MFFI.BC_MediaPlayerStart;
        this.BC_MediaPlayerFeed = MFFI.BC_MediaPlayerFeed;
        this.BC_MediaPlayerMute = MFFI.BC_MediaPlayerMute;
        this.BC_MediaPlayerStop = MFFI.BC_MediaPlayerStop;
    }
    static instance() {
        return NativeDelegate.singleton;
    }
}
NativeDelegate.singleton = new NativeDelegate();
exports.native = NativeDelegate.instance();
//# sourceMappingURL=native.js.map