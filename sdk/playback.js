"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi_1 = require("ffi");
const ref = require("ref");
const native_1 = require("./native");
const T = require("../types");
const _T = require("./_struct");
const _callback_1 = require("./_callback");
class LengthBuf {
    constructor(len) {
        this.len = len;
        this.buf = Buffer.alloc(len);
    }
    get buffer() { return this.buf; }
    get length() { return this.len; }
    set(buffer, length) {
        if (length > this.len) {
            this.len = length;
            this.buf = Buffer.alloc(length);
        }
        this.buf.set(buffer);
    }
}
class PLAYBACK {
    constructor() {
    }
    static instance() {
        return PLAYBACK.singleton;
    }
    handleSDKCallback(handle, cmdData) {
        const bcCmd = cmdData.bcCmd;
        const cmdIdx = cmdData.cmdIdx;
        const bcRspCode = cmdData.bcRspCode;
        const pRspData = cmdData.pRspData;
        const dataLen = cmdData.dataLen;
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        switch (bcCmd) {
            case T.BC_CMD_E.E_BC_CMD_SEARCH_RECFILES: {
                const filesCallback = _callback_1.COMMON_CBS.getCallback(handle, channel, bcCmd, cmdIdx);
                if (T.BC_RSP_CODE_E.E_BC_RSP_OK == bcRspCode) {
                    let buf = ref.reinterpret(pRspData, dataLen);
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
                    setImmediate(() => {
                        if (filesCallback && filesCallback.sdkCallback) {
                            filesCallback.sdkCallback(files.seq, files);
                        }
                        if (files.fileNum < 40) {
                            _callback_1.PROMISE_CBS.handleCallback(handle, channel, bcCmd, cmdIdx, callback => {
                                if (callback.sdkResolve) {
                                    callback.sdkResolve(bcRspCode);
                                }
                                if (filesCallback && filesCallback.sdkCallback) {
                                    delete filesCallback.sdkCallback;
                                    if (0 === Object.keys(filesCallback).length) {
                                        _callback_1.PROMISE_CBS.clearCallback(handle, channel, bcCmd, cmdIdx);
                                    }
                                }
                            });
                        }
                    });
                }
                else {
                    setImmediate(() => {
                        _callback_1.PROMISE_CBS.handleCallback(handle, channel, bcCmd, cmdIdx, callback => {
                            if (callback.sdkReject) {
                                callback.sdkReject({ code: bcRspCode, description: T.BC_CMD_E[bcCmd] });
                            }
                        });
                    });
                }
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_SEARCH_ALARM_VIDEOS: {
                const filesCallback = _callback_1.COMMON_CBS.getCallback(handle, channel, bcCmd, cmdIdx);
                if (T.BC_RSP_CODE_E.E_BC_RSP_OK == bcRspCode) {
                    let buf = ref.reinterpret(pRspData, dataLen);
                    let des = ref.get(buf, 0, _T.BC_ALARM_VIDEOS_INFO);
                    let files = {
                        seq: des.seq,
                        iFinished: des.iFinished,
                        iItemSize: des.iItemSize,
                        alarmItems: []
                    };
                    for (let i = 0; i < des.iItemSize; i++) {
                        const file = des.alarmItems[i];
                        files.alarmItems.push({
                            cFileName: ref.readCString(file.cFileName.buffer, 0),
                            startTime: {
                                iYear: file.startTime.iYear,
                                iMonth: file.startTime.iMonth,
                                iDay: file.startTime.iDay,
                                iHour: file.startTime.iHour,
                                iMinute: file.startTime.iMinute,
                                iSecond: file.startTime.iSecond
                            },
                            endTime: {
                                iYear: file.endTime.iYear,
                                iMonth: file.endTime.iMonth,
                                iDay: file.endTime.iDay,
                                iHour: file.endTime.iHour,
                                iMinute: file.endTime.iMinute,
                                iSecond: file.endTime.iSecond
                            }
                        });
                    }
                    setImmediate(() => {
                        if (filesCallback && filesCallback.sdkCallback) {
                            filesCallback.sdkCallback(files.seq, files);
                        }
                        if (files.iFinished) {
                            _callback_1.PROMISE_CBS.handleCallback(handle, channel, bcCmd, cmdIdx, callback => {
                                if (callback.sdkResolve) {
                                    callback.sdkResolve(bcRspCode);
                                }
                                if (filesCallback && filesCallback.sdkCallback) {
                                    delete filesCallback.sdkCallback;
                                    if (0 === Object.keys(filesCallback).length) {
                                        _callback_1.PROMISE_CBS.clearCallback(handle, channel, bcCmd, cmdIdx);
                                    }
                                }
                            });
                        }
                    });
                }
                else {
                    setImmediate(() => {
                        _callback_1.PROMISE_CBS.handleCallback(handle, channel, bcCmd, cmdIdx, callback => {
                            if (callback.sdkReject) {
                                callback.sdkReject({ code: bcRspCode, description: T.BC_CMD_E[bcCmd] });
                            }
                        });
                    });
                }
                break;
            }
            default: {
                setImmediate(() => {
                    _callback_1.PROMISE_CBS.handleCallback(handle, channel, bcCmd, cmdIdx, callback => {
                        if (T.BC_RSP_CODE_E.E_BC_RSP_OK == bcRspCode) {
                            if (callback.sdkResolve) {
                                callback.sdkResolve(bcRspCode);
                            }
                        }
                        else {
                            if (callback.sdkReject) {
                                callback.sdkReject({
                                    code: bcRspCode,
                                    description: 'playback callback faild ...'
                                });
                            }
                        }
                    });
                });
                break;
            }
        }
    }
    recordFilesSearch(handle, channel, start, end, type, streamType, seq, callback) {
        return new Promise((resolve, reject) => {
            const tstart = new _T.BC_TIME(start);
            const tend = new _T.BC_TIME(end);
            let ret = native_1.native.BCSDK_RecordFilesSearch(handle, channel, '', tstart, tend, type, streamType, seq);
            if (0 == ret) {
                let sdkResolve = {
                    sdkResolve: resolve,
                    sdkReject: reject,
                    timeout: 30
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
                    sdkReject: reject,
                    timeout: 30
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
            let ret = native_1.native.BCSDK_PlaybackOpen(handle, channel, '', fileNam, cacheFile, subStream, speed, PLAYBACK.SDK_FRAME_CALLBACK, ref.NULL);
            if (0 === ret) {
                let cb = {
                    sdkResolve: resolve,
                    sdkReject: reject
                };
                _callback_1.PROMISE_CBS.addCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_PLAYBACKBYTIME, 0, cb);
                _callback_1.COMMON_CBS.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_PLAYBACKBYTIME, 0, { sdkCallback: callback });
                // save callback
                let key = 'handle:' + handle + 'channel' + channel;
                PLAYBACK.frameCallbcks.set(key, {
                    bufVideo: [new LengthBuf(460800), new LengthBuf(460800), new LengthBuf(460800)],
                    bufAudio: new LengthBuf(4096),
                    callback: callback
                });
            }
            else {
                reject({ code: ret });
            }
        });
    }
    close(handle, channel) {
        return new Promise((resolve, reject) => {
            // clean frame callback
            let key = 'handle:' + handle + 'channel' + channel;
            let cb = PLAYBACK.frameCallbcks.get(key);
            if (cb) {
                let cb2 = PLAYBACK.frameCallbcks.get(key);
                if (cb2) {
                    delete cb2.bufVideo;
                    delete cb2.bufAudio;
                    delete cb2.callback;
                }
            }
            //
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
    mute(handle, channel, mute) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackMute(handle, channel, mute);
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
}
PLAYBACK.singleton = new PLAYBACK();
PLAYBACK.frameCallbcks = new Map();
PLAYBACK.SDK_FRAME_CALLBACK = ffi_1.Callback('void', ['int', 'int', _T.P_RENDER_FRAME_DESC, ref.types.size_t], function (handle, channel, frameDes, userData) {
    if (!frameDes) {
        // error format ...
        return;
    }
    let key = 'handle:' + handle + 'channel' + channel;
    let cache = PLAYBACK.frameCallbcks.get(key);
    if (!cache || !cache.callback || !cache.bufVideo || !cache.bufAudio) {
        return;
    }
    let buf = ref.reinterpret(frameDes, _T.RENDER_FRAME_DESC.size);
    let des = ref.get(buf, 0, _T.RENDER_FRAME_DESC);
    if (des.type & T.DEFINDE.MEDIA_FRAME_TYPE_VIDEO) {
        let planes = [];
        for (let i = 0; i < 3; i++) {
            let len = des.video.plane[i].stride * des.video.plane[i].height;
            if (len > 0) {
                cache.bufVideo[i].set(ref.reinterpret(des.video.plane[i].address, len), len);
            }
            planes.push({
                width: des.video.plane[i].width,
                height: des.video.plane[i].height,
                stride: des.video.plane[i].stride,
                data: len > 0 ? cache.bufVideo[i].buffer : null
            });
        }
        let callbackData = {
            pts: des.pts,
            width: des.video.width,
            height: des.video.height,
            format: des.video.format,
            plane0: planes[0],
            plane1: planes[1],
            plane2: planes[2]
        };
        let func = cache.callback;
        setImmediate(() => {
            func.onVieoData(callbackData);
        });
    }
    else if (des.type & T.DEFINDE.MEDIA_FRAME_TYPE_AUDIO) {
        let len = des.audio.length;
        cache.bufAudio.set(ref.reinterpret(des.audio.media, len), len);
        let callbackData = {
            media: cache.bufAudio.buffer,
            length: des.audio.length,
            hasAAC: des.audio.hasAAC,
            sampleRate: des.audio.sampleRate,
            profile: des.audio.profile,
            channels: des.audio.channels
        };
        let func = cache.callback;
        setImmediate(() => {
            func.onAudioData(callbackData);
        });
    }
});
exports.playback = PLAYBACK.instance();
//# sourceMappingURL=playback.js.map