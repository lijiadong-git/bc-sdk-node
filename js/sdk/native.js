"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi = require('ffi');
const T = require("./_struct");
const native = ffi.Library(__dirname + '/../../native/libs/libBCSDKWrapper', {
    BCSDK_PTZStop: ['int', ['int', 'int']],
    BCSDK_AddDevice: ['int', [T.P_DEVICE_LOGIN_DESC, T.P_DEVICE_CALLBACK_DESC]],
    BCSDK_DeviceForceOpen: ['int', ['int', 'bool']],
    BCSDK_GetDeviceState: ['int', ['int', T.pointer('int')]],
    BCSDK_GetDeviceLoginMessage: ['int', ['int', T.P_DEVICE_LOGIN_DESC]],
    BCSDK_LiveOpen: ['int', ['int', 'int', 'int', ffi.Function('void', ['int', 'int', T.RENDER_FRAME_DESC, T.pointer('void')]), T.pointer('void')]]
});
exports.default = native;
//# sourceMappingURL=native.js.map