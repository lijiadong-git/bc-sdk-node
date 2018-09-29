"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffiCallback = require('ffi').Callback;
const ref = require('ref');
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
    recordFilesSearch(handle, channel, start, end, type, streamType, seq, callback) {
        return new Promise((resolve, reject) => {
            const tstart = new _T.BC_TIME({
                iYear: start.iYear,
                iMonth: start.iMonth,
                iDay: start.iDay,
                iHour: start.iHour,
                iMinute: start.iMinute,
                iSecond: start.iSecond
            });
            const tend = new _T.BC_TIME({
                iYear: end.iYear,
                iMonth: end.iMonth,
                iDay: end.iDay,
                iHour: end.iHour,
                iMinute: end.iMinute,
                iSecond: end.iSecond
            });
            let ret = native_1.native.BCSDK_RecordFilesSearch(handle, channel, tstart, tend, type, streamType, seq);
            if (0 == ret) {
                let sdkResolve = {
                    sdkResolve: resolve
                };
                _callback_1.CB.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_SEARCH_RECFILES, 0, sdkResolve);
                let sdkCallback = {
                    sdkCallback: callback
                };
                _callback_1.CB.setCallback(handle, channel, -T.BC_CMD_E.E_BC_CMD_SEARCH_RECFILES, 0, sdkCallback);
            }
            else {
                reject('live open error code: ' + ret);
            }
        });
    }
    alarmVideosSearch(handle, channel, start, end, streamType, seq, callback) {
        return new Promise((resolve, reject) => {
            const tstart = new _T.BC_TIME({
                iYear: start.iYear,
                iMonth: start.iMonth,
                iDay: start.iDay,
                iHour: start.iHour,
                iMinute: start.iMinute,
                iSecond: start.iSecond
            });
            const tend = new _T.BC_TIME({
                iYear: end.iYear,
                iMonth: end.iMonth,
                iDay: end.iDay,
                iHour: end.iHour,
                iMinute: end.iMinute,
                iSecond: end.iSecond
            });
            let ret = native_1.native.BCSDK_AlarmVideosSearch(handle, channel, tstart, tend, streamType, seq);
            if (0 == ret) {
                let cb = {
                    sdkResolve: resolve
                };
                _callback_1.CB.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_SEARCH_ALARM_VIDEOS, 0, cb);
                let sdkCallback = {
                    sdkCallback: callback
                };
                _callback_1.CB.setCallback(handle, channel, -T.BC_CMD_E.E_BC_CMD_SEARCH_ALARM_VIDEOS, 0, sdkCallback);
            }
            else {
                reject('live open error code: ' + ret);
            }
        });
    }
    seek(handle, time) {
        return new Promise((resolve, reject) => {
            let tt = new _T.BC_TIME({
                iYear: time.iYear,
                iMonth: time.iMonth,
                iDay: time.iDay,
                iHour: time.iHour,
                iMinute: time.iMinute,
                iSecond: time.iSecond
            });
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
            let value = buf.deref();
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
            let value = buf.deref();
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
            let value = buf.deref();
            resolve(value);
        });
    }
    open(handle, channel, fileNam, cacheFile, subStream, speed, callback) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_PlaybackOpen(handle, channel, fileNam, cacheFile, subStream, speed, PLAYBACK.playbackCallback, null);
            if (0 === ret) {
                let cb = {
                    sdkResolve: resolve
                };
                _callback_1.CB.setCallback(handle, channel, T.BC_CMD_E.E_BC_CMD_PLAYBACKBYNAME, 0, cb);
                let cb2 = {
                    sdkCallback: callback,
                };
                _callback_1.CB.setCallback(handle, channel, -T.BC_CMD_E.E_BC_CMD_PLAYBACKBYNAME, 0, cb2);
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
PLAYBACK.playbackCallback = ffiCallback('void', ['int', 'int', _T.pointer(_T.RENDER_FRAME_DESC), _T.pointer('void')], function (handle, channel, frameDes, userData) {
    new Promise((resolve, reject) => {
        if (!frameDes) {
            reject('live callback error format ...');
        }
        var buf = ref.reinterpret(frameDes, _T.RENDER_FRAME_DESC.size);
        var des = ref.get(buf, 0, _T.RENDER_FRAME_DESC);
        if (des.type & 1) {
            // find the callback function
            let callback = _callback_1.CB.getCallback(handle, channel, -T.BC_CMD_E.E_BC_CMD_PLAYBACKBYTIME, 0);
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