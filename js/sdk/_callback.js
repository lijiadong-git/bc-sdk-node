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
    modifyCallbackHandle(oldHandle, handle) {
        let callback_old_handle = CALLBACK.callbacks[oldHandle];
        if (!callback_old_handle) {
            return;
        }
        CALLBACK.callbacks[handle] = callback_old_handle;
        CALLBACK.callbacks[oldHandle] = null;
        delete CALLBACK.callbacks[oldHandle];
    }
    clearCallbackForHandle(handle) {
        CALLBACK.callbacks[handle] = null;
        delete CALLBACK.callbacks[handle];
    }
    clearCallbackForChannel(handle, channel) {
        let callback_handle = CALLBACK.callbacks[handle];
        if (!callback_handle) {
            return;
        }
        let callback_channel = callback_handle[channel];
        if (!callback_channel) {
            return;
        }
        callback_handle[channel] = null;
        delete callback_handle[channel];
        if (0 === Object.keys(callback_handle).length) {
            CALLBACK.callbacks[handle] = null;
            delete CALLBACK.callbacks[handle];
        }
    }
    clearCallbackForCommond(handle, channel, cmd) {
        let callback_handle = CALLBACK.callbacks[handle];
        if (!callback_handle) {
            return;
        }
        let callback_channel = callback_handle[channel];
        if (!callback_channel) {
            return;
        }
        let callback_cmd = callback_channel[cmd];
        if (!callback_cmd) {
            return;
        }
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
    clearCallback(handle, channel, cmd, cmdIndex) {
        this.setCallback(handle, channel, cmd, cmdIndex, null);
    }
}
CALLBACK.singleton = new CALLBACK();
CALLBACK.callbacks = new Object();
;
exports.CB = CALLBACK.instance();
;
//# sourceMappingURL=_callback.js.map