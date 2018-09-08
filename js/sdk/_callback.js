"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CALLBACK {
    constructor() {
    }
    static instance() {
        return CALLBACK.singleton;
    }
    getCallback(handle, channel, cmd, cmdIndex) {
        let callback_handle = CALLBACK.callbacks[handle];
        if (!callback_handle) {
            return null;
        }
        let callback_channel = callback_handle[channel];
        if (!callback_channel) {
            return null;
        }
        let callback_cmd = callback_channel[cmd];
        if (!callback_cmd) {
            return null;
        }
        return callback_cmd[cmdIndex];
    }
    setCallback(handle, channel, cmd, cmdIndex, callback) {
        let callback_handle = CALLBACK.callbacks[handle];
        if (!callback_handle) {
            CALLBACK.callbacks[handle] = new Object();
            callback_handle = CALLBACK.callbacks[handle];
        }
        let callback_channel = callback_handle[channel];
        if (!callback_channel) {
            callback_handle[channel] = new Object();
            callback_channel = callback_handle[channel];
        }
        let callback_cmd = callback_channel[cmd];
        if (!callback_cmd) {
            callback_channel[cmd] = new Object();
            callback_cmd = callback_channel[cmd];
        }
        callback_cmd[cmdIndex] = callback;
        if (!callback_cmd[cmdIndex]) {
            delete callback_cmd[cmdIndex];
        }
        if (0 === Object.keys(callback_cmd).length) {
            callback_channel[cmd] = null;
            delete callback_channel[cmd];
            if (0 === Object.keys(callback_channel).length) {
                callback_handle[channel] = null;
                delete callback_handle[channel];
                if (0 === Object.keys(callback_handle).length) {
                    CALLBACK.callbacks[handle] = null;
                    delete CALLBACK.callbacks[handle];
                }
            }
        }
    }
}
CALLBACK.singleton = new CALLBACK();
CALLBACK.callbacks = new Object();
;
exports.CB = CALLBACK.instance();
;
//# sourceMappingURL=_callback.js.map