"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("./native");
const ffi_1 = require("ffi");
const ref = require("ref");
const T = require("../types");
const _T = require("./_struct");
const _cast_1 = require("./_cast");
class RECORD {
    constructor() {
    }
    static instance() {
        return RECORD.singleton;
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Record Callback
    addCallback(callback) {
        native_1.native.BCSDK_SetRecordCallback(RECORD.recordStatusCallback, null);
        return new Promise((resolve, reject) => {
            if (-1 == RECORD.recordCallbacks.indexOf(callback)) {
                RECORD.recordCallbacks.push(callback);
            }
            resolve();
        });
    }
    removeCallback(callback) {
        return new Promise((resolve, reject) => {
            let index = RECORD.recordCallbacks.indexOf(callback);
            if (-1 == index) {
                reject({ code: T.ERROR.E_NOT_FOUND, description: 'record callback not found ...' });
                return;
            }
            RECORD.recordCallbacks.splice(index, 1);
            resolve();
        });
    }
    addDiskCallback(callback) {
        native_1.native.BCSDK_SetDiskCallbacks(RECORD.diskStatusCallback, null);
        return new Promise((resolve, reject) => {
            if (-1 == RECORD.diskCallbacks.indexOf(callback)) {
                RECORD.diskCallbacks.push(callback);
            }
            resolve();
        });
    }
    removeDiskCallback(callback) {
        return new Promise((resolve, reject) => {
            let index = RECORD.diskCallbacks.indexOf(callback);
            if (-1 == index) {
                reject({ code: T.ERROR.E_NOT_FOUND, description: 'disk callback not found ...' });
                return;
            }
            RECORD.diskCallbacks.splice(index, 1);
            resolve();
        });
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Record Folder
    setRecordFolder(tempFolder, folder, folderMaxSize /*Byte*/, sizeForWarning /*Byte*/) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetRecordFolder(tempFolder, folder, folderMaxSize, sizeForWarning);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Set Channel Record File Prefixion
    // Default is "DeviceName"CH"ChannelIndex"
    setRecordFilePrefixion(hDevice, channel, prefixion) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetRecordFilePrefixion(hDevice, channel, prefixion);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Local Record Schedule
    setLocalRecordSchedule(scheduleTable, streamType, fileDuration /*second*/, postDuration /*second*/) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetLocalRecordSchedule(scheduleTable, streamType, fileDuration, postDuration);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    openLocalRecordSchedule() {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_OpenLocalRecordSchedule();
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    closeLocalRecordSchedule() {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_CloseLocalRecordSchedule();
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Device should record with schedule
    // Default is false
    setDeviceAcceptLocalRecordSchedule(hDevice, accept) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetDeviceAcceptLocalRecordSchedule(hDevice, accept);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Recording
    getIsRecording(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.bool, false);
            if (!buf) {
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetIsRecording(hDevice, channel, buf);
            if (0 > ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Manual Record
    getIsManualRecordOpened(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.bool, false);
            if (!buf) {
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetIsManualRecordOpened(hDevice, channel, buf);
            if (0 > ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    openManualRecord(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_OpenManualRecord(hDevice, channel);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    closeManualRecord(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_CloseManualRecord(hDevice, channel);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Local Record
    getLocalRecordState(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, 0);
            if (!buf) {
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetLocalRecordState(hDevice, channel, buf);
            if (0 > ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Live Record
    startLiveRecord(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StartLiveRecord(hDevice, channel);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    getLiveRecordState(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, 0);
            if (!buf) {
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetLiveRecordState(hDevice, channel, buf);
            if (0 > ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    cutLiveRecord(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_CutLiveRecord(hDevice, channel);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    stopLiveRecord(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StopLiveRecord(hDevice, channel);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Playback Record
    startPlaybackRecord(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StartPlaybackRecord(hDevice, channel);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    getPlaybackRecordState(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, 0);
            if (!buf) {
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetPlaybackRecordState(hDevice, channel, buf);
            if (0 > ret) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    cutPlaybackRecord(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_CutPlaybackRecord(hDevice, channel);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    stopPlaybackRecord(hDevice, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_StopPlaybackRecord(hDevice, channel);
            if (T.ERROR.E_NONE != ret) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
}
RECORD.singleton = new RECORD();
RECORD.diskCallbacks = [];
RECORD.diskStatusCallback = ffi_1.Callback('void', [_T.P_BC_DISK_WARNINIG_DESC, _T.pointer('void')], function (pdesc, userData) {
    if (!pdesc) {
        // disk callback error format ...
        return;
    }
    let buf = ref.reinterpret(pdesc, _T.BC_DISK_WARNINIG_DESC.size);
    let desc = ref.get(buf, 0, _T.BC_DISK_WARNINIG_DESC);
    let param = _cast_1.derefCast(desc, _T.BC_DISK_WARNINIG_DESC);
    setImmediate(() => {
        RECORD.diskCallbacks.forEach(callback => {
            callback(param);
        });
    });
});
RECORD.recordCallbacks = [];
RECORD.recordStatusCallback = ffi_1.Callback('void', [_T.P_BC_REC_EVENT_DESC, _T.pointer('void')], function (pdesc, userData) {
    if (!pdesc) {
        // record status callback error format ...
        return;
    }
    let buf = ref.reinterpret(pdesc, _T.BC_REC_EVENT_DESC.size);
    let desc = ref.get(buf, 0, _T.BC_REC_EVENT_DESC);
    let param = _cast_1.derefCast(desc, _T.BC_REC_EVENT_DESC);
    setImmediate(() => {
        RECORD.recordCallbacks.forEach(callback => {
            callback(param);
        });
    });
});
exports.record = RECORD.instance();
//# sourceMappingURL=record.js.map