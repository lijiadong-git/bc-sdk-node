"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const ref = require("ref-napi");
const T = require("../types");
const _T = require("./_struct");
const _cast_1 = require("./_cast");
class TOOLS {
    constructor() {
    }
    static instance() {
        return TOOLS.singleton;
    }
    getTotalBitrates() {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.longlong, 0);
            let ret = native_1.native.BCSDK_GetTotalBitrates(buf);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    reInitP2p() {
        return new Promise(resolve => {
            native_1.native.BCSDK_ReInitP2p();
            resolve();
        });
    }
    getP2PType(uid) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, T.BC_P2P_TYPE_E.BC_P2P_TYPE_UNKNOW);
            let ret = native_1.native.BCSDK_GetP2PType(uid, buf);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    getSongP2PType(uid) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, T.BC_SONG_P2P_TYPE_E.BC_SONG_P2P_TYPE_UNKNOW);
            let ret = native_1.native.BCSDK_GetSongP2PType(uid, buf);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    getSongDeviceInfo(uid) {
        return new Promise((resolve, reject) => {
            let data = new _T.BC_P2P_DEVICE_INFO();
            let ret = native_1.native.BCSDK_GetSongDeviceInfo(uid, data.ref());
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = _cast_1.derefCast(data, _T.BC_P2P_DEVICE_INFO);
            resolve(value);
        });
    }
    songP2PGetDebug() {
        return new Promise((resolve, reject) => {
            let data = new _T.BC_P2P_DEBUG_INFO();
            let ret = native_1.native.BCSDK_SongP2PGetDebug(data.ref());
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = _cast_1.derefCast(data, _T.BC_P2P_DEBUG_INFO);
            resolve(value);
        });
    }
    XCUID2SongUID(uid) {
        return new Promise((resolve, reject) => {
            let data = new _T.BC_P2P_UID_INFO();
            let ret = native_1.native.BCSDK_XCUID2SongUID(uid, data.ref());
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = _cast_1.derefCast(data, _T.BC_P2P_UID_INFO);
            resolve(value);
        });
    }
    songP2PGetDetail() {
        return new Promise((resolve, reject) => {
            let data = new _T.BC_P2P_DETAIL_INFO();
            let ret = native_1.native.BCSDK_SongP2PGetDetail(data.ref());
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = _cast_1.derefCast(data, _T.BC_P2P_DETAIL_INFO);
            resolve(value);
        });
    }
    getDiagnoseLogs() {
        return new Promise((resolve, reject) => {
            let data = new _T.BC_DIAGNOSE_LOGS_LIST();
            let ret = native_1.native.BCSDK_GetDiagnoseLogs(data.ref());
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = _cast_1.derefCast(data, _T.BC_DIAGNOSE_LOGS_LIST);
            resolve(value);
        });
    }
    encrypt(enc) {
        return new Promise((resolve, reject) => {
            let data = new _T.BC_CRYPT_BUF({
                buffer: enc.split(''),
                len: enc.length
            });
            let ret = native_1.native.BCSDK_Encrypt(data.ref());
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.readCString(data.buffer.buffer, 0);
            resolve(value);
        });
    }
    decrypt(dec) {
        return new Promise((resolve, reject) => {
            let data = new _T.BC_CRYPT_BUF({
                buffer: dec.split(''),
                len: dec.length
            });
            let ret = native_1.native.BCSDK_Decrypt(data.ref());
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.readCString(data.buffer.buffer, 0);
            resolve(value);
        });
    }
    setSpeakerVolume(volume) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetSpeakerVolume(volume);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    getSpeakerVolume() {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, 100);
            let ret = native_1.native.BCSDK_GetSpeakerVolume(buf);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    getDiskFree(path) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.ulonglong, 0);
            let ret = native_1.native.BCSDK_GetDiskFreeSize(path, buf);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    hasWritePermission(path) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.bool, false);
            let ret = native_1.native.BCSDK_GetHasWritePermission(path, buf);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    saveYUVToDisk(path, yuv) {
        return new Promise((resolve, reject) => {
            let plane0 = new _T.RENDER_VIDEO_PLANE_DESC({
                address: yuv.plane0.data,
                width: yuv.plane0.width,
                height: yuv.plane0.height,
                stride: yuv.plane0.stride
            });
            let plane1 = new _T.RENDER_VIDEO_PLANE_DESC({
                address: yuv.plane1.data,
                width: yuv.plane1.width,
                height: yuv.plane1.height,
                stride: yuv.plane1.stride
            });
            let plane2 = new _T.RENDER_VIDEO_PLANE_DESC({
                address: yuv.plane2.data,
                width: yuv.plane2.width,
                height: yuv.plane2.height,
                stride: yuv.plane2.stride
            });
            let ret = native_1.native.BCSDK_SaveYUVToDisk(path, yuv.width, yuv.height, yuv.format, plane0.ref(), plane1.ref(), plane2.ref());
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
}
TOOLS.singleton = new TOOLS();
exports.tools = TOOLS.instance();
//# sourceMappingURL=tools.js.map