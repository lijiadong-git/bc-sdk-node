"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi_1 = require("ffi");
const ref = require("ref");
const native_1 = require("./native");
const T = require("../types");
const _T = require("./_struct");
const _callback_1 = require("./_callback");
class PLAYBACK {
    constructor() {
    }
    static instance() {
        return PLAYBACK.singleton;
    }
    handleSDKCallback(handle, cmdData) {
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        switch (cmdData.bcCmd) {
            case T.BC_CMD_E.E_BC_CMD_SEARCH_ALARM_VIDEOS:
            case T.BC_CMD_E.E_BC_CMD_SEARCH_RECFILES: {
                if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode) {
                    const filesCallback = _callback_1.COMMON_CBS.getCallback(handle, cmdData.handleId, cmdData.bcCmd, cmdData.cmdIdx);
                    if (filesCallback && filesCallback.sdkCallback) {
                        let buf = ref.reinterpret(cmdData.pRspData, cmdData.dataLen);
                        let des = ref.get(buf, 0, _T.BC_FIND_REC_FILES);
                        let files = {
                            seq: des.seq,
                            fileNum: des.fileNum,
                            recFile: []
                        };
                        for (let i = 0; i < des.fileNum; i++) {
                            const file = des.recFile[i];
                            files.recFile.push({
                                iChannel: file.iChannel,
                                cFileName: ref.readCString(file.cFileName.buffer, 0),
                                startTime: {
                                    iYear: file.struStartTime.iYear,
                                    iMonth: file.struStartTime.iMonth,
                                    iDay: file.struStartTime.iDay,
                                    iHour: file.struStartTime.iHour,
                                    iMinute: file.struStartTime.iMinute,
                                    iSecond: file.struStartTime.iSecond
                                },
                                stopTime: {
                                    iYear: file.struStopTime.iYear,
                                    iMonth: file.struStopTime.iMonth,
                                    iDay: file.struStopTime.iDay,
                                    iHour: file.struStopTime.iHour,
                                    iMinute: file.struStopTime.iMinute,
                                    iSecond: file.struStopTime.iSecond
                                },
                                iFileSize: file.iFileSize,
                                iFileSizeH: file.iFileSizeH,
                                recordType: file.recordType,
                                eStreamType: file.eStreamType,
                                eFileType: file.eFileType,
                                iContainsAudio: file.iContainsAudio
                            });
                        }
                        filesCallback.sdkCallback(des.seq, files);
                        if (des.fileNum < 40) {
                            delete filesCallback.sdkCallback;
                            if (0 === Object.keys(filesCallback).length) {
                                _callback_1.PROMISE_CBS.clearCallback(handle, cmdData.handleId, -cmdData.bcCmd, cmdData.cmdIdx);
                            }
                        }
                    }
                }
                _callback_1.PROMISE_CBS.handleCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx, callback => {
                    if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode) {
                        if (callback.sdkResolve) {
                            callback.sdkResolve(cmdData.bcRspCode);
                        }
                    }
                    else {
                        if (callback.sdkReject) {
                            callback.sdkReject({ code: cmdData.bcRspCode });
                        }
                    }
                });
                break;
            }
            default: {
                _callback_1.PROMISE_CBS.handleCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx, callback => {
                    if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode) {
                        if (callback.sdkResolve) {
                            callback.sdkResolve(cmdData.bcRspCode);
                        }
                    }
                    else {
                        if (callback.sdkReject) {
                            callback.sdkReject({
                                code: cmdData.bcRspCode,
                                description: 'playback callback faild ...',
                                data: cmdData
                            });
                        }
                    }
                });
                break;
            }
        }
    }
    recordFilesSearch(handle, channel, start, end, type, streamType, seq, callback) {
        return new Promise((resolve, reject) => {
            const tstart = new _T.BC_TIME(start);
            const tend = new _T.BC_TIME(end);
            let ret = native_1.native.BCSDK_RecordFilesSearch(handle, channel, tstart, tend, type, streamType, seq);
            if (0 == ret) {
                let sdkResolve = {
                    sdkResolve: resolve,
                    sdkReject: reject
                };
                _callback_1.PROMISE_CBS.addCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_SEARCH_RECFILES, 0, sdkResolve);
                let sdkCallback = {
                    sdkCallback: callback
                };
                _callback_1.COMMON_CBS.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_SEARCH_RECFILES, 0, sdkCallback);
            }
            else {
                reject({ code: ret, description: 'BCSDK_RecordFilesSearch error ...' });
            }
        });
    }
    alarmVideosSearch(handle, channel, start, end, streamType, seq, callback) {
        return new Promise((resolve, reject) => {
            const tstart = new _T.BC_TIME(start);
            const tend = new _T.BC_TIME(end);
            let ret = native_1.native.BCSDK_AlarmVideosSearch(handle, channel, tstart, tend, streamType, seq);
            if (0 == ret) {
                let cb = {
                    sdkResolve: resolve,
                    sdkReject: reject
                };
                _callback_1.PROMISE_CBS.addCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_SEARCH_ALARM_VIDEOS, 0, cb);
                let sdkCallback = {
                    sdkCallback: callback
                };
                _callback_1.COMMON_CBS.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_SEARCH_ALARM_VIDEOS, 0, sdkCallback);
            }
            else {
                reject({ code: ret, description: 'BCSDK_AlarmVideosSearch error ...' });
            }
        });
    }
    seek(handle, time) {
        return new Promise((resolve, reject) => {
            let tt = new _T.BC_TIME(time);
            let ret = native_1.native.BCSDK_PlaybackSeek(handle, tt.ref());
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    openStatus(handle, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, T.BCSDK_MEDIA_STATE_E.BCSDK_MEDIA_STATE_NONE);
            let ret = native_1.native.BCSDK_GetPlaybackState(handle, channel, buf);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    isOpen(handle, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.bool, false);
            let ret = native_1.native.BCSDK_GetIsPlaybackOpen(handle, channel, buf);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    streamType(handle, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, T.BC_STREAM_TYPE_E.E_BC_STREAM_MAIN);
            let ret = native_1.native.BCSDK_GetPlaybackState(handle, channel, buf);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    open(handle, channel, fileNam, cacheFile, subStream, speed, callback) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackOpen(handle, channel, '', fileNam, cacheFile, subStream, speed, PLAYBACK.playbackCallback, null);
            if (0 === ret) {
                let cb = {
                    sdkResolve: resolve,
                    sdkReject: reject
                };
                _callback_1.PROMISE_CBS.addCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_PLAYBACKBYTIME, 0, cb);
                let cb2 = {
                    sdkCallback: callback,
                };
                _callback_1.COMMON_CBS.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_PLAYBACKBYTIME, 0, cb2);
            }
            else {
                reject({ code: ret });
            }
        });
    }
    close(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackClose(handle, channel);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    start(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackStart(handle, channel);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    pause(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackPause(handle, channel);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    stop(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackStop(handle, channel);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    nextStep(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackStep(handle, channel);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
}
PLAYBACK.singleton = new PLAYBACK();
PLAYBACK.playbackCallback = ffi_1.Callback('void', ['int', 'int', _T.P_DATA_FRAME_DESC, _T.pointer('void')], function (handle, channel, frameDes, userData) {
    if (!frameDes) {
        // playback callback error format ...
        return;
    }
    var buf = ref.reinterpret(frameDes, _T.DATA_FRAME_DESC.size);
    var des = ref.get(buf, 0, _T.DATA_FRAME_DESC);
    if (!des.media || 0 === des.length) {
        return;
    }
    // find the callback function
    let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_PLAYBACKBYTIME, 0);
    if (!callback
        || !callback.sdkCallback
        || !callback.sdkCallback.onData) {
        // live callback function error ...;
        return;
    }
    let callbackData = {
        handle: handle,
        channel: channel,
        dataDesc: {
            version: des.version,
            type: des.type,
            length: des.length,
            media: ref.reinterpret(des.media, des.length),
            pts: des.pts,
            videoInfo: {
                width: des.videoInfo.width,
                height: des.videoInfo.height,
                frameRate: des.videoInfo.frameRate
            },
            audioInfo: {
                hasAAC: des.audioInfo.hasAAC,
                sampleRate: des.audioInfo.sampleRate,
                profile: des.audioInfo.profile,
                channels: des.audioInfo.channels
            }
        }
    };
    // callback                
    callback.sdkCallback.onData(callbackData);
});
exports.playback = PLAYBACK.instance();
//# sourceMappingURL=playback.js.map