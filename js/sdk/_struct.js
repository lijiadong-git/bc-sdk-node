"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffiFunc = require('ffi').Function;
const ref = require('ref');
const refStruct = require('ref-struct');
const refArray = require('ref-array');
const types_1 = require("../types");
exports.pointer = ref.refType;
exports.cString = ref.types.CString;
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
    name: refArray('byte', types_1.DEFINDE.SDK_MAX_NORMAL_STR_LEN),
    useP2P: ref.types.bool,
    port: ref.types.int,
    uidPort: ref.types.int,
    host: refArray('byte', types_1.DEFINDE.SDK_MAX_HOSTNAME_LEN),
    uid: refArray('byte', types_1.DEFINDE.SDK_MAX_UID_STR_LEN),
    username: refArray('byte', types_1.DEFINDE.SDK_MAX_NAME_LEN),
    password: refArray('byte', types_1.DEFINDE.SDK_MAX_PASSWD_LEN)
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
exports.renderCallbackFunc = ffiFunc('void', ['int', 'int', exports.RENDER_FRAME_DESC, exports.pointer('void')]);
exports.BC_RESO_PROFILE = refStruct({
    eResolution: ref.types.int,
    iWidth: ref.types.int,
    iHigh: ref.types.int,
    cResolutionName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    lDefFrameRate: ref.types.long,
    lDefBitRate: ref.types.long,
    lFrameRate: refArray('long', types_1.DEFINDE.BC_MAX_FRAME_RATE_NUM),
    lBitRate: refArray('long', types_1.DEFINDE.BC_MAX_BIT_RATE_NUM)
});
exports.P_BC_RESO_PROFILE = exports.pointer(exports.BC_RESO_PROFILE);
exports.BC_ENC_PROFILE = refStruct({
    iChnBits: ref.types.int,
    mainstream: exports.BC_RESO_PROFILE,
    substream: exports.BC_RESO_PROFILE,
    extendstream: exports.BC_RESO_PROFILE
});
exports.P_BC_ENC_PROFILE = exports.pointer(exports.BC_ENC_PROFILE);
exports.BC_ENC_PROFILE_TABLE = refStruct({
    profileNum: ref.types.int,
    profile: refArray(exports.BC_ENC_PROFILE, types_1.DEFINDE.BC_MAX_ENC_PROFILE_NUM)
});
exports.P_BC_ENC_PROFILE_TABLE = exports.pointer(exports.BC_ENC_PROFILE_TABLE);
exports.BC_TIME = refStruct({
    iYear: ref.types.int,
    iMonth: ref.types.int,
    iDay: ref.types.int,
    iHour: ref.types.int,
    iMinute: ref.types.int,
    iSecond: ref.types.int
});
exports.P_BC_TIME = exports.pointer(exports.BC_TIME);
exports.BC_FIND_REC_FILE = refStruct({
    iChannel: ref.types.int,
    cFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    struStartTime: exports.BC_TIME,
    struStopTime: exports.BC_TIME,
    iFileSize: ref.types.uint32,
    iFileSizeH: ref.types.uint32,
    cCardNum: refArray('byte', 32),
    cLocked: 'byte',
    cSupportNum: 'byte',
    cRes: refArray('byte', 2),
    recordType: ref.types.int,
    eStreamType: ref.types.int,
    eFileType: ref.types.int,
    iContainsAudio: ref.types.int
});
exports.P_BC_FIND_REC_FILE = exports.pointer(exports.BC_FIND_REC_FILE);
exports.BC_FIND_REC_FILES = refStruct({
    seq: ref.types.int,
    fileNum: ref.types.int,
    recFile: refArray(exports.BC_FIND_REC_FILE, 40)
});
exports.P_BC_FIND_REC_FILES = exports.pointer(exports.BC_FIND_REC_FILES);
//# sourceMappingURL=_struct.js.map