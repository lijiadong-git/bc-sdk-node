"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const ref = require("ref");
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
    songP2PGetLog() {
        return new Promise((resolve, reject) => {
            let data = new _T.BC_P2P_LOG();
            let ret = native_1.native.BCSDK_SongP2PGetLog(data.ref());
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            let buf = ref.reinterpret(data.content, data.length);
            let value = ref.readCString(buf, 0);
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
}
TOOLS.singleton = new TOOLS();
exports.tools = TOOLS.instance();
//# sourceMappingURL=tools.js.map