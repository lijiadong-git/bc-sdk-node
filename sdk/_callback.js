"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class PromiseCallbacks {
    constructor() {
    }
    static instance() {
        return PromiseCallbacks.singleton;
    }
    getCallbacks(handle, channel, cmd, cmdIndex) {
        let callback_handle = PromiseCallbacks.callbacks[handle];
        if (!callback_handle) {
            return [];
        }
        let callback_channel = callback_handle[channel];
        if (!callback_channel) {
            return [];
        }
        let callback_cmd = callback_channel[cmd];
        if (!callback_cmd) {
            return [];
        }
        return callback_cmd[cmdIndex];
    }
    addCallback(handle, channel, cmd, cmdIndex, callback) {
        let callback_handle = PromiseCallbacks.callbacks[handle];
        if (!callback_handle) {
            PromiseCallbacks.callbacks[handle] = new Object();
            callback_handle = PromiseCallbacks.callbacks[handle];
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
        if (!callback_cmd[cmdIndex]) {
            callback_cmd[cmdIndex] = [];
        }
        callback.timer = setTimeout(() => {
            if (callback.sdkReject) {
                callback.sdkReject({
                    code: -1004,
                    description: "js sdk promise callback timeout ... " + cmd
                });
            }
        }, callback.timeout ? callback.timeout * 1000 : 10000);
        callback_cmd[cmdIndex].push(callback);
    }
    modifyCallbackHandle(oldHandle, handle) {
        let callback_old_handle = PromiseCallbacks.callbacks[oldHandle];
        if (!callback_old_handle) {
            return;
        }
        PromiseCallbacks.callbacks[handle] = callback_old_handle;
        PromiseCallbacks.callbacks[oldHandle] = null;
        delete PromiseCallbacks.callbacks[oldHandle];
    }
    clearCallbackForHandle(handle) {
        PromiseCallbacks.callbacks[handle] = null;
        delete PromiseCallbacks.callbacks[handle];
    }
    clearCallbackForChannel(handle, channel) {
        let callback_handle = PromiseCallbacks.callbacks[handle];
        if (!callback_handle) {
            return;
        }
        let callback_channel = callback_handle[channel];
        if (!callback_channel) {
            return;
        }
        callback_handle[channel] = null;
        delete callback_handle[channel];
    }
    clearCallbackForCommond(handle, channel, cmd) {
        let callback_handle = PromiseCallbacks.callbacks[handle];
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
    }
    clearCallback(handle, channel, cmd, cmdIndex) {
        let callback_handle = PromiseCallbacks.callbacks[handle];
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
        callback_cmd[cmdIndex] = [];
    }
    clearAll() {
        PromiseCallbacks.callbacks = new Object();
    }
    handleCallback(handle, channel, cmd, cmdIndex, func) {
        let callback_handle = PromiseCallbacks.callbacks[handle];
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
        let callbacks = callback_cmd[cmdIndex];
        callbacks.forEach(callback => {
            if (callback.timer) {
                clearTimeout(callback.timer);
            }
            func(callback);
        });
        callback_cmd[cmdIndex] = [];
    }
}
PromiseCallbacks.singleton = new PromiseCallbacks();
PromiseCallbacks.callbacks = new Object();
;
exports.PROMISE_CBS = PromiseCallbacks.instance();
class CommonCallbacks {
    constructor() {
    }
    static instance() {
        return CommonCallbacks.singleton;
    }
    getCallback(handle, channel, cmd, cmdIndex) {
        let callback_handle = CommonCallbacks.callbacks[handle];
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
        let callback_handle = CommonCallbacks.callbacks[handle];
        if (!callback_handle) {
            CommonCallbacks.callbacks[handle] = new Object();
            callback_handle = CommonCallbacks.callbacks[handle];
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
                    CommonCallbacks.callbacks[handle] = null;
                    delete CommonCallbacks.callbacks[handle];
                }
            }
        }
    }
    modifyCallbackHandle(oldHandle, handle) {
        let callback_old_handle = CommonCallbacks.callbacks[oldHandle];
        if (!callback_old_handle) {
            return;
        }
        CommonCallbacks.callbacks[handle] = callback_old_handle;
        CommonCallbacks.callbacks[oldHandle] = null;
        delete CommonCallbacks.callbacks[oldHandle];
    }
    clearCallbackForHandle(handle) {
        CommonCallbacks.callbacks[handle] = null;
        delete CommonCallbacks.callbacks[handle];
    }
    clearCallbackForChannel(handle, channel) {
        let callback_handle = CommonCallbacks.callbacks[handle];
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
            CommonCallbacks.callbacks[handle] = null;
            delete CommonCallbacks.callbacks[handle];
        }
    }
    clearCallbackForCommond(handle, channel, cmd) {
        let callback_handle = CommonCallbacks.callbacks[handle];
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
                CommonCallbacks.callbacks[handle] = null;
                delete CommonCallbacks.callbacks[handle];
            }
        }
    }
    clearCallback(handle, channel, cmd, cmdIndex) {
        this.setCallback(handle, channel, cmd, cmdIndex, null);
    }
    clearAll() {
        CommonCallbacks.callbacks = new Object();
    }
}
CommonCallbacks.singleton = new CommonCallbacks();
CommonCallbacks.callbacks = new Object();
;
exports.COMMON_CBS = CommonCallbacks.instance();
//# sourceMappingURL=_callback.js.map