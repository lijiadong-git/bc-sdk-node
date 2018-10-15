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
        new Promise((resolve) => {
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
                                    cFileName: String.fromCharCode.apply(null, file.cFileName),
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
                                callback.sdkReject(Error("Error code: " + cmdData.bcRspCode));
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
                                callback.sdkReject(Error("Error code: " + cmdData.bcRspCode));
                            }
                        }
                    });
                    break;
                }
            }
            resolve();
        });
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
                reject('live open error code: ' + ret);
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
                reject('live open error code: ' + ret);
            }
        });
    }
    seek(handle, time) {
        return new Promise((resolve, reject) => {
            let tt = new _T.BC_TIME(time);
            let ret = native_1.native.BCSDK_PlaybackSeek(handle, tt.ref());
            if (ret < 0) {
                reject(Error("Error code: " + ret));
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
                reject(Error("Error code: " + ret));
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
                reject(Error("Error code: " + ret));
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
                reject(Error("Error code: " + ret));
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    open(handle, channel, fileNam, cacheFile, subStream, speed, callback) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackOpen(handle, channel, fileNam, cacheFile, subStream, speed, PLAYBACK.playbackCallback, null);
            if (0 === ret) {
                let cb = {
                    sdkResolve: resolve,
                    sdkReject: reject
                };
                _callback_1.PROMISE_CBS.addCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_PLAYBACKBYNAME, 0, cb);
                let cb2 = {
                    sdkCallback: callback,
                };
                _callback_1.COMMON_CBS.setCallback(handle, channel, -T.BC_CMD_E.E_BC_CMD_PLAYBACKBYNAME, 0, cb2);
            }
            else {
                reject(Error('Error code: ' + ret));
            }
        });
    }
    close(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackClose(handle, channel);
            if (ret < 0) {
                reject(Error("Error code: " + ret));
                return;
            }
            resolve();
        });
    }
    start(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackStart(handle, channel);
            if (ret < 0) {
                reject(Error("Error code: " + ret));
                return;
            }
            resolve();
        });
    }
    pause(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackPause(handle, channel);
            if (ret < 0) {
                reject(Error("Error code: " + ret));
                return;
            }
            resolve();
        });
    }
    stop(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackStop(handle, channel);
            if (ret < 0) {
                reject(Error("Error code: " + ret));
                return;
            }
            resolve();
        });
    }
    nextStep(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackStep(handle, channel);
            if (ret < 0) {
                reject(Error("Error code: " + ret));
                return;
            }
            resolve();
        });
    }
    mute(handle, channel, mute) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackMute(handle, channel, mute);
            if (ret < 0) {
                reject(Error("Error code: " + ret));
                return;
            }
            resolve();
        });
    }
}
PLAYBACK.singleton = new PLAYBACK();
PLAYBACK.playbackCallback = ffi_1.Callback('void', ['int', 'int', _T.pointer(_T.RENDER_FRAME_DESC), _T.pointer('void')], function (handle, channel, frameDes, userData) {
    new Promise((resolve, reject) => {
        if (!frameDes) {
            reject('live callback error format ...');
        }
        var buf = ref.reinterpret(frameDes, _T.RENDER_FRAME_DESC.size);
        var des = ref.get(buf, 0, _T.RENDER_FRAME_DESC);
        if (des.type & 1) {
            // find the callback function
            let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, -T.BC_CMD_E.E_BC_CMD_PLAYBACKBYTIME, 0);
            if (!callback
                || !callback.sdkCallback
                || !callback.sdkCallback.onVieoData) {
                reject('live callback function error ...');
                return;
            }
            let plane0 = {
                width: des.video.plane[0].width,
                height: des.video.plane[0].height,
                stride: des.video.plane[0].stride,
                data: des.video.plane[0].stride * des.video.plane[0].height > 0 ?
                    new Uint8Array(ref.reinterpret(des.video.plane[0].address, des.video.plane[0].stride * des.video.plane[0].height)) : null
            };
            let plane1 = {
                width: des.video.plane[1].width,
                height: des.video.plane[1].height,
                stride: des.video.plane[1].stride,
                data: des.video.plane[1].stride * des.video.plane[1].height > 0 ?
                    new Uint8Array(ref.reinterpret(des.video.plane[1].address, des.video.plane[1].stride * des.video.plane[1].height)) : null
            };
            let plane2 = {
                width: des.video.plane[2].width,
                height: des.video.plane[2].height,
                stride: des.video.plane[2].stride,
                data: des.video.plane[2].stride * des.video.plane[2].height > 0 ?
                    new Uint8Array(ref.reinterpret(des.video.plane[2].address, des.video.plane[2].stride * des.video.plane[2].height)) : null
            };
            let callbackData = {
                handle: handle,
                channel: channel,
                pts: des.pts,
                width: des.video.width,
                height: des.video.height,
                format: des.video.format,
                plane0: plane0,
                plane1: plane1,
                plane2: plane2
            };
            // callback                
            callback.sdkCallback.onVieoData(callbackData);
            resolve();
        }
    })
        .catch(reason => {
        console.log(reason);
    });
});
exports.playback = PLAYBACK.instance();
//# sourceMappingURL=playback.js.map