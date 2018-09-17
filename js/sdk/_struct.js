"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffiFunc = require('ffi').Function;
const ref = require('ref');
const refStruct = require('ref-struct');
const refArray = require('ref-array');
exports.pointer = ref.refType;
exports.DEVICE_STATE_CHANGE_DESC = refStruct({
    eStateFrom: ref.types.int,
    eStateTo: ref.types.int
});
exports.P_DEVICE_STATE_CHANGE_DESC = exports.pointer(exports.DEVICE_STATE_CHANGE_DESC);
exports.BC_CMD_DATA = refStruct({
    bcCmd: ref.types.int,
    cmdIdx: ref.types.int,
    bcRspCode: ref.types.int,
    handleId: ref.types.int,
    pRspData: exports.pointer('byte'),
    dataLen: ref.types.ulong
});
exports.P_BC_CMD_DATA = exports.pointer(exports.BC_CMD_DATA);
exports.DEVICE_LOGIN_DESC = refStruct({
    name: refArray('byte', 256),
    useP2P: ref.types.bool,
    port: ref.types.int,
    uidPort: ref.types.int,
    host: refArray('byte', 1024),
    uid: refArray('byte', 128),
    username: refArray('byte', 32),
    password: refArray('byte', 32)
});
exports.P_DEVICE_LOGIN_DESC = exports.pointer(exports.DEVICE_LOGIN_DESC);
exports.DEVICE_CALLBACK_DESC = refStruct({
    func: ffiFunc('int', ['int', exports.BC_CMD_DATA, exports.pointer('void')]),
    userData: exports.pointer('void')
});
exports.P_DEVICE_CALLBACK_DESC = exports.pointer(exports.DEVICE_CALLBACK_DESC);
exports.DEVICE_ABILITY_ABOUT = refStruct({
    isBattery: ref.types.bool,
    qrCode: ref.types.bool,
    type: ref.types.int
});
exports.P_DEVICE_ABILITY_ABOUT = exports.pointer(exports.DEVICE_ABILITY_ABOUT);
// callback frame data
exports.RENDER_VIDEO_PLANE_DESC = refStruct({
    address: exports.pointer(ref.types.uint8) // plane base address of the picture
    ,
    width: ref.types.uint32 // The plane width of pixel
    ,
    height: ref.types.uint32 // The plane height of pixel
    ,
    stride: ref.types.uint32 // The plane stride of pixel
});
exports.P_RENDER_VIDEO_PLANE_DESC = exports.pointer(exports.RENDER_VIDEO_PLANE_DESC);
exports.RENDER_VIDEO_FRAME_DESC = refStruct({
    format: ref.types.int,
    width: ref.types.uint32 // The width of output picture in pixel
    ,
    height: ref.types.uint32 // The height of output picture in pixel
    ,
    frameRate: ref.types.uint32 // Render frameRate
    ,
    plane: refArray(exports.RENDER_VIDEO_PLANE_DESC, 3) // YUV plane of the picture
});
exports.P_RENDER_VIDEO_FRAME_DESC = exports.pointer(exports.RENDER_VIDEO_FRAME_DESC);
exports.RENDER_AUDIO_FRAME_DESC = refStruct({
    media: exports.pointer(ref.types.uint8),
    length: ref.types.uint32,
    hasAAC: ref.types.uint8,
    sampleRate: ref.types.uint32,
    profile: ref.types.uint8,
    channels: ref.types.uint8
});
exports.P_RENDER_AUDIO_FRAME_DESC = exports.pointer(exports.RENDER_AUDIO_FRAME_DESC);
exports.RENDER_FRAME_DESC = refStruct({
    version: ref.types.int,
    type: ref.types.uint32,
    pts: ref.types.uint64,
    delay: ref.types.uint64 /*ms*/,
    video: exports.RENDER_VIDEO_FRAME_DESC,
    audio: exports.RENDER_AUDIO_FRAME_DESC
});
exports.P_RENDER_FRAME_DESC = exports.pointer(exports.RENDER_FRAME_DESC);
//# sourceMappingURL=_struct.js.map