"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffiCallback = require('ffi').Callback;
const ref = require('ref');
const native_1 = require("./native");
const T = require("../types");
const _T = require("./_struct");
const _callback_1 = require("./_callback");
class LIVE {
    constructor() {
    }
    static instance() {
        return LIVE.singleton;
    }
    getLiveStreamType(handle, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, T.BC_STREAM_TYPE_E.E_BC_STREAM_SUB);
            if (!buf) {
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetLiveStreamType(handle, channel, buf);
            if (0 > ret) {
                reject(Error('error code: ' + ret));
                return;
            }
            resolve(buf.deref());
        });
    }
    getIsLiveOpen(handle, channel) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.bool, false);
            if (!buf) {
                reject(Error('alloc buffer error !!!'));
                return;
            }
            let ret = native_1.native.BCSDK_GetIsLiveOpen(handle, channel, buf);
            if (0 > ret) {
                reject(Error('error code: ' + ret));
                return;
            }
            resolve(buf.deref());
        });
    }
    liveOpen(handle, channel, stream, callback) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveOpen(handle, channel, stream, LIVE.liveCallback, null);
            if (0 === ret) {
                let tcallback = {
                    sdkCallback: callback,
                };
                _callback_1.CB.setCallback(handle, channel, -T.BC_CMD_E.E_BC_CMD_REALPLAY, 0, tcallback);
            }
            else {
                reject('live open error code: ' + ret);
            }
        });
    }
    liveClose(handle, channel) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveClose(handle, channel);
            if (0 > ret) {
                reject(Error('error code: ' + ret));
                return;
            }
            resolve();
        });
    }
    liveMute(handle, channel, mute) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_LiveMute(handle, channel, mute);
            if (0 > ret) {
                reject(Error('error code: ' + ret));
                return;
            }
            resolve();
        });
    }
}
LIVE.singleton = new LIVE();
LIVE.liveCallback = ffiCallback('void', ['int', 'int', _T.pointer(_T.RENDER_FRAME_DESC), _T.pointer('void')], function (handle, channel, frameDes, userData) {
    new Promise((resolve, reject) => {
        if (!frameDes) {
            reject('live callback error format ...');
        }
        var buf = ref.reinterpret(frameDes, _T.RENDER_FRAME_DESC.size);
        var des = ref.get(buf, 0, _T.RENDER_FRAME_DESC);
        if (des.type & 1) {
            // find the callback function
            let callback = _callback_1.CB.getCallback(handle, channel, -T.BC_CMD_E.E_BC_CMD_REALPLAY, 0);
            if (!callback
                || !callback.sdkCallback
                || !callback.sdkCallback.onVieoData) {
                reject('live callback function error ...');
                return;
            }
            // callback
            let pixel_size = des.video.width * des.video.height;
            callback.sdkCallback.onVieoData(handle, channel, des.pts, des.video.width, des.video.height, new Uint8Array(ref.reinterpret(des.video.plane[0].address, pixel_size)), new Uint8Array(ref.reinterpret(des.video.plane[1].address, pixel_size / 4)), new Uint8Array(ref.reinterpret(des.video.plane[2].address, pixel_size / 4)));
            resolve();
        }
    })
        .catch(reason => {
        console.log(reason);
    });
});
exports.live = LIVE.instance();
//# sourceMappingURL=live.js.map