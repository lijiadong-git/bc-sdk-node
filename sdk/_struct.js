"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi_1 = require("ffi");
const ref = require("ref");
const refStruct = require("ref-struct");
const refArray = require("ref-array");
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
    pRspData: exports.pointer('uint8'),
    dataLen: ref.types.ulong
});
exports.P_BC_CMD_DATA = exports.pointer(exports.BC_CMD_DATA);
exports.DEVICE_LOGIN_DESC = refStruct({
    name: refArray('byte', types_1.DEFINDE.SDK_MAX_NORMAL_STR_LEN),
    port: ref.types.int,
    uidPort: ref.types.int,
    host: refArray('byte', types_1.DEFINDE.SDK_MAX_HOSTNAME_LEN),
    uid: refArray('byte', types_1.DEFINDE.SDK_MAX_UID_STR_LEN),
    username: refArray('byte', types_1.DEFINDE.SDK_MAX_NAME_LEN),
    password: refArray('byte', types_1.DEFINDE.SDK_MAX_PASSWD_LEN)
});
exports.P_DEVICE_LOGIN_DESC = exports.pointer(exports.DEVICE_LOGIN_DESC);
exports.DEVICE_CALLBACK_DESC = refStruct({
    func: ffi_1.Function('int', ['int', exports.BC_CMD_DATA, exports.pointer('void')]),
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
exports.BC_AI_AREA = refStruct({
    x: ref.types.uint16,
    y: ref.types.uint16,
    w: ref.types.uint16,
    h: ref.types.uint16,
    score: ref.types.uint8
});
exports.BC_AI_AREA.alignment = 1;
exports.P_BC_AI_AREA = exports.pointer(exports.BC_AI_AREA);
exports.BC_AI_DATA = refStruct({
    length: ref.types.uint16,
    areas: refArray(exports.BC_AI_AREA, types_1.DEFINDE.BC_MAX_AI_AREA_LEN)
});
exports.P_BC_AI_DATA = exports.pointer(exports.BC_AI_DATA);
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
    audio: exports.RENDER_AUDIO_FRAME_DESC,
    faceSet: exports.BC_AI_DATA,
    peopleSet: exports.BC_AI_DATA
});
exports.P_RENDER_FRAME_DESC = exports.pointer(exports.RENDER_FRAME_DESC);
exports.DATA_VIDEO_FRAME_DESC = refStruct({
    width: ref.types.uint32,
    height: ref.types.uint32,
    frameRate: ref.types.uint32
});
exports.P_DATA_VIDEO_FRAME_DESC = exports.pointer(exports.DATA_VIDEO_FRAME_DESC);
exports.DATA_AUDIO_FRAME_DESC = refStruct({
    hasAAC: ref.types.uint8,
    sampleRate: ref.types.uint32,
    profile: ref.types.uint8,
    channels: ref.types.uint8
});
exports.P_DATA_AUDIO_FRAME_DESC = exports.pointer(exports.DATA_AUDIO_FRAME_DESC);
exports.DATA_FRAME_DESC = refStruct({
    version: ref.types.int,
    type: ref.types.uint32,
    length: ref.types.uint32,
    media: exports.pointer(ref.types.uint8),
    pts: ref.types.uint64,
    videoInfo: exports.DATA_VIDEO_FRAME_DESC,
    audioInfo: exports.DATA_AUDIO_FRAME_DESC
});
exports.P_DATA_FRAME_DESC = exports.pointer(exports.DATA_FRAME_DESC);
exports.BC_DAY_NIGHT_THRESHOLD_CFG = refStruct({
    eMode: ref.types.int,
    eCurStat: ref.types.int
});
exports.P_BC_DAY_NIGHT_THRESHOLD_CFG = exports.pointer(exports.BC_DAY_NIGHT_THRESHOLD_CFG);
exports.BC_RESO_PROFILE = refStruct({
    eResolution: ref.types.int,
    iWidth: ref.types.int,
    iHigh: ref.types.int,
    cResolutionName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    lDefFrameRate: ref.types.long,
    lDefBitRate: ref.types.long,
    lFrameRate: refArray(ref.types.long, types_1.DEFINDE.BC_MAX_FRAME_RATE_NUM),
    lBitRate: refArray(ref.types.long, types_1.DEFINDE.BC_MAX_BIT_RATE_NUM)
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
    cIdentity: refArray('byte', types_1.DEFINDE.BC_MAX_REC_FILE_ID),
    cFileName: refArray('byte', types_1.DEFINDE.BC_MAX_REC_FILE_NAME),
    struStartTime: exports.BC_TIME,
    struStopTime: exports.BC_TIME,
    iFileSize: ref.types.uint32,
    iFileSizeH: ref.types.uint32,
    cCardNum: refArray('byte', 32),
    cLocked: ref.types.uint8,
    cSupportNum: ref.types.uint8,
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
exports.BC_DEL_REC_FILE = refStruct({
    cIdentity: refArray('byte', types_1.DEFINDE.BC_MAX_REC_FILE_ID)
});
exports.P_BC_DEL_REC_FILE = exports.pointer(exports.BC_DEL_REC_FILE);
exports.BC_DEL_REC_FILES = refStruct({
    iSize: ref.types.int,
    items: refArray(exports.BC_DEL_REC_FILE, 40)
});
exports.P_BC_DEL_REC_FILES = exports.pointer(exports.BC_DEL_REC_FILES);
exports.BC_ALARM_VIDEO_ITEM = refStruct({
    cIdentity: refArray('byte', types_1.DEFINDE.BC_MAX_REC_FILE_ID),
    cFileName: refArray('byte', types_1.DEFINDE.BC_MAX_REC_FILE_NAME),
    alarmType: ref.types.int,
    startTime: exports.BC_TIME,
    endTime: exports.BC_TIME
});
exports.P_BC_ALARM_VIDEO_ITEM = exports.pointer(exports.BC_ALARM_VIDEO_ITEM);
exports.BC_ALARM_VIDEOS_INFO = refStruct({
    seq: ref.types.int // the times of this alarm video find
    ,
    iFinished: ref.types.int,
    iItemSize: ref.types.int,
    alarmItems: refArray(exports.BC_ALARM_VIDEO_ITEM, 60)
});
exports.P_BC_ALARM_VIDEOS_INFO = exports.pointer(exports.BC_ALARM_VIDEOS_INFO);
exports.BC_SYS_GENERAL_CFG = refStruct({
    /* validField, used for only set some params.
     * "iYear, iMonth, iDay, iHour, iMin, iSecond" is independent.
     */
    validField: refArray('byte', 128),
    eTS: ref.types.int,
    iTimeZone: ref.types.int // Example: For GMT +8:00, lTimeZone = -8*3600
    ,
    eDateFormat: ref.types.int,
    eTimeFormat: ref.types.int,
    iYear: ref.types.int,
    iMonth: ref.types.int,
    iDay: ref.types.int,
    iHour: ref.types.int,
    iMin: ref.types.int,
    iSecond: ref.types.int,
    iDeviceId: ref.types.int,
    iLanguage: ref.types.int,
    cDeviceName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN)
});
exports.P_BC_SYS_GENERAL_CFG = exports.pointer(exports.BC_SYS_GENERAL_CFG);
exports.BC_DEVICE_NAME_CFG = refStruct({
    cDeviceName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN)
});
exports.P_BC_DEVICE_NAME_CFG = exports.pointer(exports.BC_DEVICE_NAME_CFG);
exports.BC_AUTOREBOOT_CFG = refStruct({
    bEnable: ref.types.bool,
    eDay: ref.types.int,
    iHour: ref.types.int,
    iMin: ref.types.int,
    iSecond: ref.types.int
});
exports.P_BC_AUTOREBOOT_CFG = exports.pointer(exports.BC_AUTOREBOOT_CFG);
exports.BC_RESTORE_CFG = refStruct({
    bDisplay: ref.types.bool,
    bRecording: ref.types.bool,
    bNetwork: ref.types.bool,
    bAlarm: ref.types.bool,
    bDevice: ref.types.bool,
    bSystem: ref.types.bool,
    bIPC: ref.types.bool,
    bWifi: ref.types.bool
});
exports.P_BC_RESTORE_CFG = exports.pointer(exports.BC_RESTORE_CFG);
exports.BC_RECORD_TIME_LIST = refStruct({
    iSize: ref.types.int,
    durationTime: refArray(ref.types.int, 32)
});
exports.P_BC_RECORD_TIME_LIST = exports.pointer(exports.BC_RECORD_TIME_LIST);
exports.BC_RECORD_GENERAL_CFG = refStruct({
    /* validField, used for only set some params.
     * for example, validField = "<iOverWrite><iPackageTime>", only set  bOverWrite, iPackageTime"
     */
    validField: refArray('byte', 128),
    iOverWrite: ref.types.int,
    iPackageTime: ref.types.int // 30 45 60 MIN
    ,
    iPostRecordTime: ref.types.int // 60 120 300 600 Second
    ,
    bPreRecord: ref.types.bool,
    timeList: exports.BC_RECORD_TIME_LIST,
    overWriteList: exports.BC_RECORD_TIME_LIST
});
exports.P_BC_RECORD_GENERAL_CFG = exports.pointer(exports.BC_RECORD_GENERAL_CFG);
exports.BC_EMAIL_SENDER = refStruct({
    byAccount: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN),
    iSenderMaxLen: ref.types.int // readonly, max len of byAccount
    ,
    byPassword: refArray('byte', types_1.DEFINDE.BC_MAX_PWD_LEN_128),
    iPwdMaxLen: ref.types.int
});
exports.P_BC_EMAIL_SENDER = exports.pointer(exports.BC_EMAIL_SENDER);
exports.BC_EMAIL_RECEIVER = refStruct({
    byAddress: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN)
});
exports.P_BC_EMAIL_RECEIVER = exports.pointer(exports.BC_EMAIL_RECEIVER);
exports.BC_EMAIL_CFG = refStruct({
    sender: exports.BC_EMAIL_SENDER,
    receiver: refArray(exports.BC_EMAIL_RECEIVER, 3),
    bySmtpServer: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN),
    bSSL: ref.types.bool,
    iSmtpPort: ref.types.int,
    iAttachment: ref.types.int // 0:disable; 1:Attach Picture; 2:Attach Video
    ,
    bSupportVideo: ref.types.bool,
    bSupportTextType: ref.types.bool,
    iWithText: ref.types.int // 0:without text,  1:with text
    ,
    iMailInterval: ref.types.int // 3: 30S, 6: 60S, 30: 300S, 60: 600S
    ,
    cSendNickname: refArray('byte', types_1.DEFINDE.BC_MAX_NICKNAME_LEN)
});
exports.P_BC_EMAIL_CFG = exports.pointer(exports.BC_EMAIL_CFG);
exports.BC_RESOLUTION_INFO = refStruct({
    reso: ref.types.int // BC_RESOLUTION_E 
    ,
    cName: refArray('byte', 32) //name of resolution
    ,
    width: ref.types.int,
    height: ref.types.int
});
exports.BC_RESOLUTION_LIST = refStruct({
    lValidNum: ref.types.long,
    cur: exports.BC_RESOLUTION_INFO,
    list: refArray(exports.BC_RESOLUTION_INFO, types_1.DEFINDE.BC_MAX_RESOLUTION_NUM)
});
exports.BC_UI_TRANS = refStruct({
    lMax: ref.types.long,
    lMin: ref.types.long,
    lCur: ref.types.long
});
exports.P_BC_UI_TRANS = exports.pointer(exports.BC_UI_TRANS);
exports.BC_MOUSE_SENSE = refStruct({
    lMax: ref.types.long,
    lMin: ref.types.long,
    lCur: ref.types.long
});
exports.P_BC_MOUSE_SENSE = exports.pointer(exports.BC_MOUSE_SENSE);
exports.BC_DWELL_TABLE = refStruct({
    lValidNum: ref.types.long,
    lCurrentValue: ref.types.long,
    lList: refArray(ref.types.long, types_1.DEFINDE.BC_MAX_DWELL_NUM)
});
exports.P_BC_DWELL_TABLE = exports.pointer(exports.BC_DWELL_TABLE);
exports.BC_OUTPUT_CFG = refStruct({
    reso: exports.BC_RESOLUTION_LIST,
    trans: exports.BC_UI_TRANS,
    mouseSense: exports.BC_MOUSE_SENSE,
    dwell: exports.BC_DWELL_TABLE,
    bAudio: ref.types.bool
});
exports.P_BC_OUTPUT_CFG = exports.pointer(exports.BC_OUTPUT_CFG);
exports.BC_HDD = refStruct({
    iNumber: ref.types.int // iNumber > 100 ? eSATA : iNumber;
    ,
    iCapacityG: ref.types.int // Unit:GB
    ,
    iCapacityM: ref.types.int // Unit:GB      -1: no support
    ,
    bFormat: ref.types.bool,
    bMount: ref.types.bool,
    iRemainSizeG: ref.types.int // Unit:GB
    ,
    iRemainSizeM: ref.types.int,
    eStorageType: ref.types.int // BC_STORAGE_TYPE_E 
    ,
    bIsInUse: ref.types.bool
});
exports.P_BC_HDD = exports.pointer(exports.BC_HDD);
exports.BC_HDD_CFG = refStruct({
    iTotal: ref.types.int,
    hdd: refArray(exports.BC_HDD, types_1.DEFINDE.BC_MAX_DISKNUM)
});
exports.P_BC_HDD_CFG = exports.pointer(exports.BC_HDD_CFG);
exports.BC_HDD_INIT_CFG = refStruct({
    iTotal: ref.types.int,
    iInitId: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DISKNUM),
    eStorageType: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DISKNUM) // BC_STORAGE_TYPE_E
});
exports.P_BC_HDD_INIT_CFG = exports.pointer(exports.BC_HDD_INIT_CFG);
exports.BC_ALARM_OUT = refStruct({
    iType: ref.types.int // BC_ALARM_OUT_NONE  ~  BC_ALARM_OUT_SCREEN
    ,
    bAlarmout: refArray(ref.types.bool, types_1.DEFINDE.BC_MAX_ALARMOUT) // alarmout channel, 0: disable, 1: enable
});
exports.P_BC_ALARM_OUT = exports.pointer(exports.BC_ALARM_OUT);
exports.BC_EXCEPTION_CFG = refStruct({
    alarmOut: exports.BC_ALARM_OUT
});
exports.P_BC_EXCEPTION_CFG = exports.pointer(exports.BC_EXCEPTION_CFG);
exports.BC_LOCAL_CFG = refStruct({
    eIpObtain: ref.types.int // dhcp or static
    ,
    eAutodns: ref.types.int // get dns automaticaly or static configure
    ,
    cIp: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN) //ip configure
    ,
    cMask: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN),
    cGateway: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN),
    cMac: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN),
    cDns1: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN) //dns1 configure
    ,
    cDns2: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN) //dns2 configure
});
exports.P_BC_LOCAL_CFG = exports.pointer(exports.BC_LOCAL_CFG);
exports.BC_NET_NORMAL_PORT = refStruct({
    iSurvPort: ref.types.int,
    iHttpPort: ref.types.int,
    iHttpsPort: ref.types.int // -1: no support
});
exports.P_BC_NET_NORMAL_PORT = exports.pointer(exports.BC_NET_NORMAL_PORT);
exports.BC_NET_ADVANCED_PORT = refStruct({
    iOnvifPort: ref.types.int,
    iRtspPort: ref.types.int,
    iRtmpPort: ref.types.int
});
exports.P_BC_NET_ADVANCED_PORT = exports.pointer(exports.BC_NET_ADVANCED_PORT);
exports.BC_UPNP_CFG = refStruct({
    iEnable: ref.types.int
});
exports.P_BC_UPNP_CFG = exports.pointer(exports.BC_UPNP_CFG);
exports.BC_UID_INFO = refStruct({
    cUid: refArray('byte', types_1.DEFINDE.BC_MAX_UID_LEN)
});
exports.P_BC_UID_INFO = exports.pointer(exports.BC_UID_INFO);
exports.BC_P2P_CFG = refStruct({
    iEnable: ref.types.int,
    iPort: ref.types.int,
    serverDomainName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN)
});
exports.P_BC_P2P_CFG = exports.pointer(exports.BC_P2P_CFG);
exports.BC_HANDLEEXCEPTION = refStruct({
    iHandleType: ref.types.int,
    byRelAlarmOut: refArray('byte', 96)
});
exports.P_BC_HANDLEEXCEPTION = exports.pointer(exports.BC_HANDLEEXCEPTION);
exports.BC_ALARM_IN_CFG = refStruct({
    iInputId: ref.types.int,
    bCopyTo: ref.types.bool,
    sAlarmInName: refArray('byte', 32),
    byAlarmType: ref.types.uint8,
    byAlarmInHandle: ref.types.uint8,
    struAlarmHandleType: exports.BC_HANDLEEXCEPTION,
    iInvalid: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT),
    byRelRecordChannel: refArray(ref.types.uint8, types_1.DEFINDE.BC_MAX_CHANNEL) // 0: not set, 1:set
    ,
    byEnablePreset: refArray(ref.types.uint8, 64),
    byPresetNo: refArray(ref.types.uint8, 64),
    byEnableCruise: refArray(ref.types.uint8, 16),
    byCruiseNo: refArray(ref.types.uint8, 16),
    byEnablePtzTrack: refArray(ref.types.uint8, 16),
    byPTZTrack: refArray(ref.types.uint8, 16)
});
exports.P_BC_ALARM_IN_CFG = exports.pointer(exports.BC_ALARM_IN_CFG);
exports.BC_ALARM_OUT_CFG = refStruct({
    iOutputId: ref.types.int,
    cAlarmOutName: refArray('byte', 32),
    iAlarmOutDelay: ref.types.int,
    iInvalid: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT)
});
exports.P_BC_ALARM_OUT_CFG = exports.pointer(exports.BC_ALARM_OUT_CFG);
exports.BC_RF_ALARM_CFG = refStruct({
    /* validField, used for only set some params.
     * for example, validField = "<bEnable><eSensitivity>", only set  bEnable, eSensitivity"
     * iRfId is required. "iInvalid, iTimeTable" and "channelNum, triggeredHandleType" are independent.
     */
    validField: refArray('byte', 128),
    isCopyTo: ref.types.bool,
    iRfId: ref.types.int,
    bEnable: ref.types.bool,
    iSupportSensitivity: ref.types.bool,
    eSensitivity: ref.types.int,
    iSensitivityValue: ref.types.int // 1 ~ 100
    ,
    iReduceFalseAlarm: ref.types.int // 0:disable 1:enable
    ,
    iInvalid: ref.types.int,
    channelNum: ref.types.int,
    triggeredHandleType: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_CHANNEL),
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT)
});
exports.P_BC_RF_ALARM_CFG = exports.pointer(exports.BC_RF_ALARM_CFG);
exports.BC_RF_ALARM_STATUS = refStruct({
    iRfId: ref.types.int,
    bEnable: ref.types.bool
});
exports.P_BC_RF_ALARM_STATUS = exports.pointer(exports.BC_RF_ALARM_STATUS);
exports.BC_RF_TEST_START = refStruct({
    iRfId: ref.types.int // request
    ,
    iSensitivityValue: ref.types.int // request, rf sensitivity: 0-100
    ,
    iReduceErr: ref.types.int // request, 0: not reduce  1: reduce
});
exports.P_BC_RF_TEST_START = exports.pointer(exports.BC_RF_TEST_START);
exports.BC_RF_TEST_STOP = refStruct({
    iRfId: ref.types.int // request
    ,
    iFalseCnt: ref.types.int // response, return rf false count when test stop
});
exports.P_BC_RF_TEST_STOP = exports.pointer(exports.BC_RF_TEST_STOP);
exports.BC_DST_CFG = refStruct({
    /* validField, used for only set some params.
     * "iStartMonth, iStartIndex, iStartWeekday, iStartHour, iStartMinute, iStartSecond" is independent.
     * "iEndMonth, iEndIndex, iEndWeekday, iEndHour, iEndMinute, iEndSecond" is independent.
     */
    validField: refArray('byte', 128),
    bEnable: ref.types.bool,
    iOffset: ref.types.int // hours offset of timezone
    ,
    iStartMonth: ref.types.int // 1~12
    ,
    iStartIndex: ref.types.int // 1~5, 5: last week
    ,
    iStartWeekday: ref.types.int // 0: sunday
    ,
    iStartHour: ref.types.int,
    iStartMinute: ref.types.int,
    iStartSecond: ref.types.int,
    iEndMonth: ref.types.int,
    iEndIndex: ref.types.int,
    iEndWeekday: ref.types.int,
    iEndHour: ref.types.int,
    iEndMinute: ref.types.int,
    iEndSecond: ref.types.int,
    iVersion: ref.types.int // bit0: 1 support weekday cfg
});
exports.P_BC_DST_CFG = exports.pointer(exports.BC_DST_CFG);
exports.BC_DDNS_CFG = refStruct({
    bEnable: ref.types.bool,
    eType: ref.types.int,
    cDomainName: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN),
    cUserName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    cPassword: refArray('byte', types_1.DEFINDE.BC_MAX_PWD_LEN_128)
});
exports.P_BC_DDNS_CFG = exports.pointer(exports.BC_DDNS_CFG);
exports.BC_NTP_CFG = refStruct({
    bEnable: ref.types.bool,
    cServer: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN),
    iInterval: ref.types.int // 60 ~65535 MIN,0 for synchronize
    ,
    iPort: ref.types.int
});
exports.P_BC_NTP_CFG = exports.pointer(exports.BC_NTP_CFG);
exports.BC_PPPOE_CFG = refStruct({
    cName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    cPassword: refArray('byte', types_1.DEFINDE.BC_MAX_PWD_LEN)
});
exports.P_BC_PPPOE_CFG = exports.pointer(exports.BC_PPPOE_CFG);
exports.BC_UDID = refStruct({
    udid: refArray('byte', 128),
    iSignal: ref.types.int,
    iSupportEncrypt: ref.types.int,
    iEncrypt: ref.types.int,
    eType: ref.types.int
});
exports.P_BC_UDID = exports.pointer(exports.BC_UDID);
exports.BC_UDID_LIST = refStruct({
    size: ref.types.int,
    udids: refArray(exports.BC_UDID, types_1.DEFINDE.BC_WIFI_UDID_MAX_NUM)
});
exports.P_BC_UDID_LIST = exports.pointer(exports.BC_UDID_LIST);
exports.BC_WIFI_CFG = refStruct({
    mode: ref.types.int,
    essid: refArray('byte', 128) /* ssid */,
    channel: ref.types.int /* 1~13 */,
    authmod: ref.types.int,
    enccrypttype: ref.types.int,
    key: refArray('byte', 128),
    udidList: exports.BC_UDID_LIST
});
exports.P_BC_WIFI_CFG = exports.pointer(exports.BC_WIFI_CFG);
exports.BC_SIM_MODULE_INFO = refStruct({
    cIMEI: refArray('byte', 128) // International Mobile Equipment Identity
    ,
    cICCID: refArray('byte', 128) // Integrate circuit card identity
    ,
    cPhoneNum: refArray('byte', 128) // phone number
});
exports.P_BC_SIM_MODULE_INFO = exports.pointer(exports.BC_SIM_MODULE_INFO);
exports.BC_BIND_CLOUD = refStruct({
    cAuthToken: refArray('byte', types_1.DEFINDE.BC_MAX_AUTH_TOKEN_LEN),
    iForceAutoUpload: ref.types.int
});
exports.P_BC_BIND_CLOUD = exports.pointer(exports.BC_BIND_CLOUD);
exports.BC_CLOUD_INFO = refStruct({
    isBinded: ref.types.bool
});
exports.P_BC_CLOUD_INFO = exports.pointer(exports.BC_CLOUD_INFO);
exports.BC_CLOUD_STREAM_TYPE_LIST = refStruct({
    iSize: ref.types.int,
    streamType: refArray(ref.types.int, 8) // -1:invalid 0:main 1:extend 2:sub
});
exports.P_BC_CLOUD_STREAM_TYPE_LIST = exports.pointer(exports.BC_CLOUD_STREAM_TYPE_LIST);
exports.BC_CLOUD_CFG = refStruct({
    /* validField, used for only set some params.
     * for example, validField = "<iAutoUpload><streamCfg>", only set iAutoUpload and streamCfg"
     */
    validField: refArray('byte', 128),
    iAutoUpload: ref.types.int,
    iSupportMultiStream: ref.types.int,
    streamAbility: exports.BC_CLOUD_STREAM_TYPE_LIST,
    streamCfg: exports.BC_CLOUD_STREAM_TYPE_LIST
});
exports.P_BC_CLOUD_CFG = exports.pointer(exports.BC_CLOUD_CFG);
exports.BC_RECORD_FILE_DAYS = refStruct({
    iUsed: ref.types.int,
    cUID: refArray('byte', types_1.DEFINDE.BC_MAX_UID_LEN) // for NAS
    ,
    iRecType: refArray(ref.types.int, 32) //  0:none, 1:normal, 2:alarm
});
exports.P_BC_RECORD_FILE_DAYS = exports.pointer(exports.BC_RECORD_FILE_DAYS);
exports.BC_RECORD_FILE_DAYS_BY_CHN = refStruct({
    startTime: exports.BC_TIME,
    endTime: exports.BC_TIME,
    items: refArray(exports.BC_RECORD_FILE_DAYS, types_1.DEFINDE.BC_MAX_CHANNEL)
});
exports.P_BC_RECORD_FILE_DAYS_BY_CHN = exports.pointer(exports.BC_RECORD_FILE_DAYS_BY_CHN);
exports.BC_USER = refStruct({
    cUserName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    cPassword: refArray('byte', types_1.DEFINDE.BC_MAX_PWD_LEN),
    cLocalRight: refArray('byte', 32),
    cOldIpcRight: refArray('byte', 32),
    magicNum: ref.types.int,
    cUserIP: refArray('byte', 128),
    cMACAddr: refArray('byte', 6),
    iUserLevel: ref.types.int // 0:normal user;  1:admin
    ,
    iLoginState: ref.types.int,
    iUserSetState: ref.types.int //0:none, 1:add, 2:delete, 3:modify
    ,
    iBootPwd: ref.types.int
});
exports.P_BC_USER = exports.pointer(exports.BC_USER);
exports.BC_USER_CFG = refStruct({
    cUserName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    usernum: ref.types.int,
    user: refArray(exports.BC_USER, types_1.DEFINDE.BC_USER_NUM)
});
exports.P_BC_USER_CFG = exports.pointer(exports.BC_USER_CFG);
exports.BC_USER_FOR_ABILITY = refStruct({
    cMyUserName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    cUserNameForSet: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN)
});
exports.P_BC_USER_FOR_ABILITY = exports.pointer(exports.BC_USER_FOR_ABILITY);
exports.BC_USER_ONLINE_INFO = refStruct({
    iSessionId: ref.types.int,
    iUserId: ref.types.int,
    cUserName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN) // Login User Name
    ,
    cPassword: refArray('byte', types_1.DEFINDE.BC_MAX_PWD_LEN) // User password, the default is an empty string
    ,
    userIP: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN) // User IP
    ,
    iUserLevel: ref.types.int // 0:normal user;  1:admin
    ,
    bCanForceOffline: ref.types.bool // Is can be force offline
    ,
    bOnlineState: ref.types.bool // Online State
});
exports.P_BC_USER_ONLINE_INFO = exports.pointer(exports.BC_USER_ONLINE_INFO);
exports.BC_USER_ONLINE_CFG = refStruct({
    iOnlineUserNum: ref.types.int,
    user: refArray(exports.BC_USER_ONLINE_INFO, types_1.DEFINDE.BC_USER_NUM)
});
exports.P_BC_USER_ONLINE_CFG = exports.pointer(exports.BC_USER_ONLINE_CFG);
exports.BC_FORCE_PWD = refStruct({
    cUserName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    cPassword: refArray('byte', types_1.DEFINDE.BC_MAX_PWD_LEN)
});
exports.P_BC_FORCE_PWD = exports.pointer(exports.BC_FORCE_PWD);
exports.BC_BOOT_PWD_STATE = refStruct({
    bPwdState: ref.types.bool
});
exports.P_BC_BOOT_PWD_STATE = exports.pointer(exports.BC_BOOT_PWD_STATE);
exports.BC_UPGRADE_FILE_INFO = refStruct({
    cSourceFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    iUpgradeConfig: ref.types.int,
    uFileSize: ref.types.uint32,
    uCurSize: ref.types.uint32
});
exports.P_BC_UPGRADE_FILE_INFO = exports.pointer(exports.BC_UPGRADE_FILE_INFO);
exports.BC_FTP_INTERVAL_LIST = refStruct({
    iSize: ref.types.int,
    iInterval: refArray(ref.types.int, types_1.DEFINDE.BC_FTP_INTERVAL_TABLE_MAX_SIZE)
});
exports.P_BC_FTP_INTERVAL_LIST = exports.pointer(exports.BC_FTP_INTERVAL_LIST);
exports.BC_FTP_CFG = refStruct({
    cServer: refArray('byte', types_1.DEFINDE.BC_MAX_ADDR_LEN),
    cUsername: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    cPassword: refArray('byte', types_1.DEFINDE.BC_MAX_PWD_LEN_128),
    iPwdMaxLen: ref.types.int,
    cRemotedir: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    bAnonymous: ref.types.bool,
    iPort: ref.types.int,
    iwFilelen: ref.types.int // Unit:MB
    ,
    bSupportTest: ref.types.bool // 1:support ftp test
    ,
    iSupportStreamType: ref.types.int
    // 0:pic and mainStream video, 1:pic and subStream video, 2:pic and extension stream video, 3:only picture
    ,
    iStreamType: ref.types.int,
    iSupportInterval: ref.types.int,
    iInterval: ref.types.int // seconds
    ,
    intervalList: exports.BC_FTP_INTERVAL_LIST,
    iSupportTransportMode: ref.types.int,
    eTransportMode: ref.types.int,
    iAutoDir: ref.types.int
});
exports.P_BC_FTP_CFG = exports.pointer(exports.BC_FTP_CFG);
exports.BC_CONFIG_FILE_INFO = refStruct({
    cSourceFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    cSaveFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    uFileSize: ref.types.uint32,
    uCurSize: ref.types.uint32
});
exports.P_BC_CONFIG_FILE_INFO = exports.pointer(exports.BC_CONFIG_FILE_INFO);
exports.BC_PUSH_INFO = refStruct({
    cToken: refArray('byte', 512),
    cPhoneType: refArray('byte', 128),
    cClientid: refArray('byte', 128),
    cRes: refArray('byte', 128)
});
exports.P_BC_PUSH_INFO = exports.pointer(exports.BC_PUSH_INFO);
exports.BC_RTMP_OPT_ITEM = refStruct({
    channelId: ref.types.int,
    streamType: ref.types.int
});
exports.P_BC_RTMP_OPT_ITEM = exports.pointer(exports.BC_RTMP_OPT_ITEM);
exports.BC_RTMP_OPT = refStruct({
    size: ref.types.int,
    items: refArray(exports.BC_RTMP_OPT_ITEM, types_1.DEFINDE.BC_MAX_CHANNEL)
});
exports.P_BC_RTMP_OPT = exports.pointer(exports.BC_RTMP_OPT);
exports.BC_ENC_CFG = refStruct({
    bAudio: ref.types.int,
    eResolution: ref.types.int,
    iWidth: ref.types.int,
    iHeight: ref.types.int,
    eEncType: ref.types.int,
    lFrameRate: ref.types.long,
    lBitRate: ref.types.long,
    eEncProfile: ref.types.int
});
exports.P_BC_ENC_CFG = exports.pointer(exports.BC_ENC_CFG);
exports.BC_ENC_INFO = refStruct({
    eResolution: ref.types.int,
    iWidth: ref.types.int,
    iHigh: ref.types.int
});
exports.P_BC_ENC_INFO = exports.pointer(exports.BC_ENC_INFO);
exports.BC_CHN_ENC_INFO = refStruct({
    bNoTrans: ref.types.bool,
    bRestartWhenResChanged: ref.types.bool,
    lStreamTypes: ref.types.long // valid stream types
    ,
    mainstream: exports.BC_ENC_CFG,
    substream: exports.BC_ENC_CFG,
    extendstream: exports.BC_ENC_CFG
});
exports.P_BC_CHN_ENC_INFO = exports.pointer(exports.BC_CHN_ENC_INFO);
/*
image_w
|--------------------------|
|           h1             |
|       |----------|       |
|<-w1-> |   osd    |<-w2-> | image_h
|       |----------|       |
|           h2             |
|--------------------------|

w1: the distance from osd to the left
w2: the distance from osd to the right

h1: the distance from osd to the top
h2: the distance from osd to the bottom

dwX = ((w1<<16)&0xffff0000)|(w2&0xffff)
dwY = ((h1<<16)&0xffff0000)|(h2&0xffff)

*/
exports.BC_OSD = refStruct({
    bShow: ref.types.bool // FALSE:disable, TRUE:enable
    ,
    iX: ref.types.int,
    iY: ref.types.int
});
exports.P_BC_OSD = exports.pointer(exports.BC_OSD);
exports.BC_OSD_CFG = refStruct({
    /* validField, used for only set some params.
     * for example, validField = "<byChannelName><channelName>", only set byChannelName, channelName.
     */
    validField: refArray('byte', 128),
    isCopyTo: ref.types.bool,
    byChannelName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    channelName: exports.BC_OSD,
    time: exports.BC_OSD,
    eSize: ref.types.int,
    elanguage: ref.types.int,
    iBgColor: ref.types.int // 1:use bg color
    ,
    iWaterMark: ref.types.int // 1:use water mark
    ,
    iWaterMarkXPos: ref.types.int // readonly water mark Topleft pos X default:0x10000
    ,
    iWaterMarkYPos: ref.types.int // readonly water mark Topleft pos Y default:0x10000
});
exports.P_BC_OSD_CFG = exports.pointer(exports.BC_OSD_CFG);
exports.BC_CAMERA_CFG = refStruct({
    eCameraMode: ref.types.int
});
exports.P_BC_CAMERA_CFG = exports.pointer(exports.BC_CAMERA_CFG);
/*
image_w
|---------------------------|
|     (x,y) cover_w         |
|      |----------|         |
|      |  cover   |cover_h  | image_h
|      |----------|         |
|                           |
|---------------------------|

x: cover left_top coordinate x
y: cover left_top coordinate y

dwX = ((x<<16)&0xffff0000)|(image_w&0xffff);
dwY = ((y<<16)&0xffff0000)|(image_h&0xffff);
dwWidth    = ((cover_w<<16)&0xffff0000)|(image_w&0xffff);
dwHeight   = ((cover_h<<16)&0xffff0000)|(image_h&0xffff);
*/
exports.BC_COVER_AREA = refStruct({
    iX: ref.types.int,
    iY: ref.types.int,
    iWidth: ref.types.int,
    iHeight: ref.types.int
});
exports.P_BC_COVER_AREA = exports.pointer(exports.BC_COVER_AREA);
exports.BC_COVER_CFG = refStruct({
    bEnable: ref.types.bool // FALSE: disable, TRUE:enable
    ,
    area: refArray(exports.BC_COVER_AREA, types_1.DEFINDE.BC_MAX_COVER_AREA_NUM),
    byRes: refArray('byte', 64)
});
exports.P_BC_COVER_CFG = exports.pointer(exports.BC_COVER_CFG);
exports.BC_RECORD_SCHEDULE_CFG = refStruct({
    /* max: 128
     * validField, used for only set some params.
     * validField only suppport for setting <bEnable>,
     * validField = "" or "<bEnable>".
     */
    validField: refArray('byte', 128),
    bEnable: ref.types.bool
    /*
     * 0: old timetable, timing must be stand alone,
     * 1: new timetable, timing is a bitmap value
     */
    ,
    iProtocolVer: ref.types.int
    /* bitmap
     * BC_ALARM_IN_MD, BC_ALARM_IN_VL ...
     */
    ,
    iAlarmInTypes: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT)
});
exports.P_BC_RECORD_SCHEDULE_CFG = exports.pointer(exports.BC_RECORD_SCHEDULE_CFG);
exports.BC_PTZ_DECODER = refStruct({
    iDataBit: ref.types.int // 0:CS8 1:CS7 2:CS6 3:CS5
    ,
    iStopBit: ref.types.int // 0:1bit 1:2bit
    ,
    iDecoderAddress: ref.types.int // 0~255  default:channel+1
    ,
    iBaudRate: ref.types.int // 0:1200 1:2400 2:4800 3:9600
    ,
    eParity: ref.types.int,
    eFlowcontrol: ref.types.int,
    eDecoderType: ref.types.int,
    iSupportPELCO_C: ref.types.int // 0-PTZ_PELCO_D,1-PTZ_PELCO_P,2-PTZ_PELCO
    ,
    cPreset: refArray(ref.types.uint8, 256) /*preset point status*/,
    cCruise: refArray(ref.types.uint8, 256) /*cruise point status*/,
    cTrack: refArray(ref.types.uint8, 256) /*unknown use??? track point status */
});
exports.P_BC_PTZ_DECODER = exports.pointer(exports.BC_PTZ_DECODER);
exports.BC_SENSITIVITY_INFO = refStruct({
    byBeginHour: ref.types.uint8 // begin time: hour
    ,
    byBeginMinute: ref.types.uint8 // begin time: minute
    ,
    byEndHour: ref.types.uint8 // endtime: hour
    ,
    byEndMinute: ref.types.uint8 // endtime: minute
    ,
    iSensitivity: ref.types.int // 1 ~ 50
});
exports.P_BC_SENSITIVITY_INFO = exports.pointer(exports.BC_SENSITIVITY_INFO);
exports.BC_NEW_SENS_ITEM = refStruct({
    iEnable: ref.types.int,
    iPriority: ref.types.int // 0:lowest
    ,
    iBeginHour: ref.types.int,
    iBeginMinute: ref.types.int,
    iEndHour: ref.types.int,
    iEndMinute: ref.types.int,
    iSensitivity: ref.types.int
});
exports.P_BC_NEW_SENS_ITEM = exports.pointer(exports.BC_NEW_SENS_ITEM);
exports.BC_NEW_SENS_INFO = refStruct({
    iDefSensitivity: ref.types.int // 1~50 default:9
    ,
    sensItems: refArray(exports.BC_NEW_SENS_ITEM, types_1.DEFINDE.BC_MAX_MOTION_SENS_NUM)
});
exports.BC_MOTION_CFG = refStruct({
    validField: refArray('byte', 128),
    isCopyTo: ref.types.bool,
    bEnable: ref.types.bool // FALSE: disable, TRUE:enable
    ,
    iWidth: ref.types.int // video image width, max:120
    ,
    iHeight: ref.types.int // video image hight, max:68
    ,
    bMotionScope: refArray(ref.types.bool, types_1.DEFINDE.BC_MD_AREA_MAX_HEIGHT * types_1.DEFINDE.BC_MD_AREA_MAX_WIDTH) // 1: set to motion, 0: not set
    ,
    iSensVerion: ref.types.int /* 0:use sensitivityInfo, 1:use newSensInfo */,
    sensitivityInfo: refArray(exports.BC_SENSITIVITY_INFO, types_1.DEFINDE.BC_MAX_MOTION_SENS_NUM),
    newSensInfo: exports.BC_NEW_SENS_INFO,
    alarmOut: exports.BC_ALARM_OUT,
    byRelRecordChannel: refArray(ref.types.uint8, types_1.DEFINDE.BC_MAX_CHANNEL) // 0: not set, 1:set
    ,
    iInvalid: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT),
    iUsePir: ref.types.int
});
exports.P_BC_MOTION_CFG = exports.pointer(exports.BC_MOTION_CFG);
exports.BC_VILOST_CFG = refStruct({
    bEnable: ref.types.bool // 0:disable, 1:enable
    ,
    alarmOut: exports.BC_ALARM_OUT,
    iInvalid: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT)
});
exports.P_BC_VILOST_CFG = exports.pointer(exports.BC_VILOST_CFG);
//ptz preset
exports.BC_PRESET = refStruct({
    iPtzCmd: ref.types.int // if set ptz name only, pls set cmd to -1
    ,
    iPresetId: ref.types.int,
    name: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN) // if no use "invalid" should be set
});
exports.P_BC_PRESET = exports.pointer(exports.BC_PRESET);
exports.BC_PTZ_PRESETS = refStruct({
    iChannelId: ref.types.int,
    iSize: ref.types.int,
    preset: refArray(exports.BC_PRESET, types_1.DEFINDE.BC_MAX_POS_NUM)
});
exports.P_BC_PTZ_PRESETS = exports.pointer(exports.BC_PTZ_PRESETS);
//ptz cruise
exports.BC_CRUISE = refStruct({
    iValid: ref.types.int,
    iStarting: ref.types.int,
    iPatrolId: ref.types.int,
    iPresetId: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_KEY_POS),
    iTime: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_KEY_POS),
    iSpeed: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_KEY_POS),
    name: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN)
});
exports.P_BC_CRUISE = exports.pointer(exports.BC_CRUISE);
exports.BC_PTZ_CRUISES = refStruct({
    iChannel: ref.types.int,
    iSize: ref.types.int,
    cruise: refArray(exports.BC_CRUISE, types_1.DEFINDE.BC_MAX_CRUISE_NUM)
});
exports.P_BC_PTZ_CRUISES = exports.pointer(exports.BC_PTZ_CRUISES);
exports.BC_AREA_CTRL_VALUE = refStruct({
    lDefMin: ref.types.long,
    lDefMax: ref.types.long,
    lCurMin: ref.types.long,
    lCurMax: ref.types.long
});
exports.P_BC_AREA_CTRL_VALUE = exports.pointer(exports.BC_AREA_CTRL_VALUE);
exports.BC_LINE_CTRL_VALUE = refStruct({
    lMin: ref.types.long,
    lMax: ref.types.long,
    lCur: ref.types.long
});
exports.PBC_LINE_CTRL_VALUE = exports.pointer(exports.BC_LINE_CTRL_VALUE);
/*
lDefault: It works in the setting command
0: Normal set all the member of BC_ISP_CFG
1: Set Brightness, Contrast, Saturation, Hue, Sharpen, Mirror
and Flip to the default value
2: Set other members to the default value
*/
exports.BC_ISP_BD_CTRL = refStruct({
    eMode: ref.types.int,
    bright: exports.BC_LINE_CTRL_VALUE,
    dark: exports.BC_LINE_CTRL_VALUE,
});
exports.P_BC_ISP_BD_CTRL = exports.pointer(exports.BC_ISP_BD_CTRL);
exports.BC_ISP_CFG = refStruct({
    /* validField, used for only set some params.
     * for example, validField = "<lBright><lContrast><eAntiflick><eDayNightMode>", only set lBright, lContrast, eAntiflick, eDayNightMode.
     */
    validField: refArray('byte', 128),
    lChannel: ref.types.long // 0~BC_MAX_CHANNEL
    ,
    lBright: ref.types.long // 0~0xff, default 0x80
    ,
    lContrast: ref.types.long // 0~0xff, default 0x80
    ,
    lSaturation: ref.types.long // 0~0xff, default 0x80
    ,
    lHue: ref.types.long // 0~0xff, default 0x80
    ,
    lSharpen: ref.types.long // 0~0xff, default 0x80
    ,
    bSupportAdvanced: ref.types.bool // FALSE means the following member is invalid
    ,
    eAntiflick: ref.types.int // Anti flash - BC_ANTIFLICK_TYPE_E
    ,
    eExpType: ref.types.int // exposure type - BC_EXPOSURE_TYPE_E
    ,
    gainCtl: exports.BC_AREA_CTRL_VALUE // gain control, 1~100, default 1~20
    ,
    shutterCtl: exports.BC_AREA_CTRL_VALUE // Electronic shutter control, 2~40, default 2~40
    ,
    eShutterAjust: ref.types.int // shutter adjust - BC_SHUTTER_AJUST_E
    ,
    eScencMode: ref.types.int // contextual model - BC_AWB_SCENC_MODE_E
    ,
    lSizeOfScencModes: ref.types.bool,
    scencModeList: refArray(ref.types.int, 8) // BC_AWB_SCENC_MODE_E
    ,
    redGain: exports.BC_LINE_CTRL_VALUE // red gain, 0~100, default 50
    ,
    blueGain: exports.BC_LINE_CTRL_VALUE // blue gain, 0~100, default 50
    ,
    eDayNightMode: ref.types.int // day/night mode - BC_DAY_NIGHT_MODE_E
    ,
    eIRCut: ref.types.int // ir-cut-filter - BC_IR_CUT_TYPE_E
    ,
    lExposureLevel: ref.types.long,
    eBLCType: ref.types.int // Backlight compensation mode - BC_BLC_MODE_E
    ,
    DRCTarget: exports.BC_LINE_CTRL_VALUE // Wide dynamic range, 0~0xff,default:0x80
    ,
    BLCTarget: exports.BC_LINE_CTRL_VALUE // Backlight intensity,0~0xff,default:0x80
    ,
    bMirror: ref.types.bool // FALSE:diable, TRUE:enable
    ,
    bFlip: ref.types.bool // FALSE:diable, TRUE:enable
    ,
    lDefault: ref.types.long // See the comment of this structure
    ,
    lGainAjust: ref.types.long // 0~100, default 10
    ,
    lAutoIrisState: ref.types.long,
    AutoirisValue: exports.BC_LINE_CTRL_VALUE,
    lFocusAutoiris: ref.types.long,
    lSupportAutoiris: ref.types.long,
    eNR3D: ref.types.int // BC_ISP_NR3D_E
    ,
    lSupportNR3D: ref.types.long,
    lIspVersion: ref.types.long // 0:old, 1:new_1
    ,
    bdDayCtrl: exports.BC_ISP_BD_CTRL,
    bdNightCtrl: exports.BC_ISP_BD_CTRL,
    bdColorNightCtrl: exports.BC_ISP_BD_CTRL,
    iFirstFrameStrategy: ref.types.int
});
exports.P_BC_ISP_CFG = exports.pointer(exports.BC_ISP_CFG);
exports.BC_DAY_NIGHT_MODE_CFG = refStruct({
    eMode: ref.types.int // BC_DAY_NIGHT_MODE_E 
});
exports.P_BC_DAY_NIGHT_MODE_CFG = exports.pointer(exports.BC_DAY_NIGHT_MODE_CFG);
exports.BC_LED_LIGHT_STATE = refStruct({
    /* validField, used for only set some params.
     * for example, validField = "<eLEDState>", only set  eLEDState
     */
    validField: refArray('byte', 128),
    eLEDState: ref.types.int // BC_LED_STATE_E                
    ,
    iVersion: ref.types.int // 1:auto,close,open. 2:auto,close
    ,
    eIndicatorLight: ref.types.int // BC_LIGHT_STATE_E                    
});
exports.P_BC_LED_LIGHT_STATE = exports.pointer(exports.BC_LED_LIGHT_STATE);
exports.BC_FLOODLIGHT_MANUAL = refStruct({
    eOper: ref.types.int
});
exports.P_BC_FLOODLIGHT_MANUAL = exports.pointer(exports.BC_FLOODLIGHT_MANUAL);
exports.BC_FLOODLIGHT_STAT_ITEM = refStruct({
    iChannel: ref.types.int,
    iLit: ref.types.int
});
exports.P_BC_FLOODLIGHT_STAT_ITEM = exports.pointer(exports.BC_FLOODLIGHT_STAT_ITEM);
exports.BC_FLOODLIGHT_STAT = refStruct({
    num: ref.types.int,
    items: refArray(exports.BC_FLOODLIGHT_STAT_ITEM, types_1.DEFINDE.BC_MAX_CHANNEL)
});
exports.P_BC_FLOODLIGHT_STAT = exports.pointer(exports.BC_FLOODLIGHT_STAT);
exports.BC_FLOODLIGHT_BRIGHT = refStruct({
    iCur: ref.types.int,
    iMin: ref.types.int,
    iMax: ref.types.int
});
exports.P_BC_FLOODLIGHT_BRIGHT = exports.pointer(exports.BC_FLOODLIGHT_BRIGHT);
exports.BC_FLOODLIGHT_TASK = refStruct({
    iBvalid: ref.types.int,
    bright: exports.BC_FLOODLIGHT_BRIGHT,
    iAutoByPreview: ref.types.int,
    iDuration: ref.types.int
});
exports.P_BC_FLOODLIGHT_TASK = exports.pointer(exports.BC_FLOODLIGHT_TASK);
exports.BC_FTP_TASK = refStruct({
    /* validField, used for only set some params.
     * validField only suppport for setting <bEnable>,
     * validField = "" or "<bEnable>".
     */
    validField: refArray('byte', 128),
    bEnable: ref.types.bool
    /*
     * 0: old timetable, timing must be stand alone,
     * 1: new timetable, timing is a bitmap value
     */
    ,
    iProtocolVer: ref.types.int
    /* bitmap
     * BC_ALARM_IN_MD, BC_ALARM_IN_VL ...
     */
    ,
    iAlarmInTypes: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT)
});
exports.P_BC_FTP_TASK = exports.pointer(exports.BC_FTP_TASK);
exports.BC_EMAIL_TASK = refStruct({
    /* validField, used for only set some params.
     * validField only suppport for setting <bEnable>,
     * validField = "" or "<bEnable>".
     */
    validField: refArray('byte', 128),
    bEnable: ref.types.bool
    /*
    * 0: old timetable, timing must be stand alone,
    * 1: new timetable, timing is a bitmap value
    */
    ,
    iProtocolVer: ref.types.int
    /* bitmap
    * BC_ALARM_IN_MD, BC_ALARM_IN_VL ...
    */
    ,
    iAlarmInTypes: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT)
});
exports.P_BC_EMAIL_TASK = exports.pointer(exports.BC_EMAIL_TASK);
exports.BC_PUSH_TASK = refStruct({
    bEnable: ref.types.bool
    /*
     * 0: old timetable, timing must be stand alone,
     * 1: new timetable, timing is a bitmap value
     */
    ,
    iProtocolVer: ref.types.int
    /* bitmap
     * BC_ALARM_IN_MD, BC_ALARM_IN_VL ...
     */
    ,
    iAlarmInTypes: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT),
    iPushVersion: ref.types.int // 0:old  1:new
});
exports.P_BC_PUSH_TASK = exports.pointer(exports.BC_PUSH_TASK);
exports.BC_AUDIO_TASK = refStruct({
    /* validField, used for only set some params.
     * validField only suppport for setting <bEnable>,
     * validField = "" or "<bEnable>".
     */
    validField: refArray('byte', 128),
    bEnable: ref.types.bool
    /*
     * 0: old timetable, timing must be stand alone,
     * 1: new timetable, timing is a bitmap value
     */
    ,
    iProtocolVer: ref.types.int
    /* bitmap
     * BC_ALARM_IN_MD, BC_ALARM_IN_VL ...
     */
    ,
    iAlarmInTypes: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT)
});
exports.P_BC_AUDIO_TASK = exports.pointer(exports.BC_AUDIO_TASK);
exports.BC_BUZZER_TASK = refStruct({
    /* validField, used for only set some params.
     * validField only suppport for setting <bEnable>,
     * validField = "" or "<bEnable>".
     */
    validField: refArray('byte', 128),
    bEnable: ref.types.bool
    /* bitmap
     * BC_ALARM_IN_MD, BC_ALARM_IN_VL ...
     */
    ,
    iAlarmInTypes: ref.types.int,
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT)
});
exports.P_BC_BUZZER_TASK = exports.pointer(exports.BC_BUZZER_TASK);
exports.BC_SNAP_INFO = refStruct({
    cSaveFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    uFileSize: ref.types.uint32,
    uCurSize: ref.types.uint32
});
exports.P_BC_SNAP_INFO = exports.pointer(exports.BC_SNAP_INFO);
exports.BC_PTZ_AUTO_FOCUS = refStruct({
    iDisable: ref.types.int
});
exports.P_BC_PTZ_AUTO_FOCUS = exports.pointer(exports.BC_PTZ_AUTO_FOCUS);
exports.BC_ZOOM_FOCUS_INFO = refStruct({
    iZoomMaxPos: ref.types.int,
    iZoomMinPos: ref.types.int,
    iZoomCurPos: ref.types.int,
    iFocusMaxPos: ref.types.int,
    iFocusMinPos: ref.types.int,
    iFocusCurPos: ref.types.int
});
exports.P_BC_ZOOM_FOCUS_INFO = exports.pointer(exports.BC_ZOOM_FOCUS_INFO);
exports.BC_START_ZOOM_FOCUS = refStruct({
    cmd: ref.types.int,
    iPos: ref.types.int
});
exports.P_BC_START_ZOOM_FOCUS = exports.pointer(exports.BC_START_ZOOM_FOCUS);
exports.BC_CROP_CFG = refStruct({
    iTopLeftX: ref.types.int,
    iTopLeftY: ref.types.int,
    iCropWidth: ref.types.int,
    iCropHeight: ref.types.int,
    iMainStreamWidth: ref.types.int,
    iMainStreamHeight: ref.types.int,
    iSubStreamWidth: ref.types.int,
    iSubStreamHeight: ref.types.int,
    iVersion: ref.types.int // bit0: 1 crop width and height cfg
});
exports.P_BC_CROP_CFG = exports.pointer(exports.BC_CROP_CFG);
exports.BC_CROP_SNAP_INFO = refStruct({
    iWidth: ref.types.int // width for snap
    ,
    iHeight: ref.types.int // height for snap
    ,
    cSaveFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    uFileSize: ref.types.uint32,
    uCurSize: ref.types.uint32
});
exports.P_BC_CROP_SNAP_INFO = exports.pointer(exports.BC_CROP_SNAP_INFO);
exports.BC_RINGTONE_CFG = refStruct({
    iChannel: ref.types.int,
    iTimeout: ref.types.int // default duration of ring down
    ,
    iRingtoneSelect: ref.types.int // 0:use default ringtone, 1:use custom ringtone
});
exports.P_BC_RINGTONE_CFG = exports.pointer(exports.BC_RINGTONE_CFG);
/*
 * iDuration:   valid when continuous mode.
 *              -1: use default
 *              0:  ring down one time
 *              >0: ring down <iDuration> seconds
 *              others: do nothing
 * iTimes:      valid when times mode
 *              >0: ring down <iTimes> times cycles
 *              others: do nothing
 * iOnOff:      valid when switch mode
 *              0: turn off Ring Down
 *              1: turn on Ring Down
 */
exports.BC_MANUAL_RING_DOWN = refStruct({
    iChannel: ref.types.int,
    eRingMode: ref.types.int // BC_RING_DOWN_MODE_E
    ,
    iDuration: ref.types.int,
    iTimes: ref.types.int,
    iOnOff: ref.types.int
});
exports.P_BC_MANUAL_RING_DOWN = exports.pointer(exports.BC_MANUAL_RING_DOWN);
// ringtone
exports.BC_MUTE_ALARM_AUDIO = refStruct({
    iChannel: ref.types.int,
    iMute: ref.types.int // 0:enable alarm audio  1:mute alarm audio
});
exports.P_BC_MUTE_ALARM_AUDIO = exports.pointer(exports.BC_MUTE_ALARM_AUDIO);
exports.BC_RINGTONE_FILE_INFO = refStruct({
    iChannel: ref.types.int,
    cSourceFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    cAdpcmFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    iFileSize: ref.types.int,
    iCurSize: ref.types.int
});
exports.P_BC_RINGTONE_FILE_INFO = exports.pointer(exports.BC_RINGTONE_FILE_INFO);
exports.BC_VERSION_INFO = refStruct({
    cName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN) // device name
    ,
    cType: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN) // model
    ,
    cSerialNo: refArray('byte', types_1.DEFINDE.BC_SERIALNO_LEN),
    cBuildDay: refArray('byte', types_1.DEFINDE.BC_BUILD_INFO_LEN),
    cHardwareVer: refArray('byte', types_1.DEFINDE.BC_VERSION_INFO_LEN),
    cCfgVer: refArray('byte', types_1.DEFINDE.BC_VERSION_INFO_LEN),
    cFirmwareVer: refArray('byte', types_1.DEFINDE.BC_VERSION_INFO_LEN),
    cPakSuffix: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    cDetail: refArray('byte', types_1.DEFINDE.BC_DETAIL_INFO_LEN),
    cCC3200Ver: refArray('byte', types_1.DEFINDE.BC_VERSION_INFO_LEN) // cc3200 version
    ,
    cSpVer: refArray('byte', types_1.DEFINDE.BC_VERSION_INFO_LEN) //sp version
});
exports.P_BC_VERSION_INFO = exports.pointer(exports.BC_VERSION_INFO);
exports.BC_RFSENSOR_ALARM_INFO = refStruct({
    iEnable: ref.types.int,
    eRfType: ref.types.int // BC_RF_ALARM_TYPE_E
});
exports.P_BC_RFSENSOR_ALARM_INFO = exports.pointer(exports.BC_RFSENSOR_ALARM_INFO);
exports.BC_MULTI_UPDATE_STATUS = refStruct({
    iPacketSize: ref.types.int // packet  size  (KB)
    ,
    iDownloadSize: ref.types.int // download size (KB)
    ,
    eState: ref.types.int,
    cVersion: refArray('byte', types_1.DEFINDE.BC_VERSION_INFO_LEN)
});
exports.P_BC_MULTI_UPDATE_STATUS = exports.pointer(exports.BC_MULTI_UPDATE_STATUS);
exports.BC_MULTI_UPDATE_STATUS_ITEM = refStruct({
    iChannel: ref.types.int,
    state: exports.BC_MULTI_UPDATE_STATUS
});
exports.P_BC_MULTI_UPDATE_STATUS_ITEM = exports.pointer(exports.BC_MULTI_UPDATE_STATUS_ITEM);
exports.BC_MULTI_UPDATE_STATUS_LIST = refStruct({
    iSize: ref.types.int,
    items: refArray(exports.BC_MULTI_UPDATE_STATUS_ITEM, types_1.DEFINDE.BC_MAX_CHANNEL)
});
exports.P_BC_MULTI_UPDATE_STATUS_LIST = exports.pointer(exports.BC_MULTI_UPDATE_STATUS_LIST);
exports.BC_ONLINE_UPDATE_STATUS = refStruct({
    iState: ref.types.int,
    iPacketSize: ref.types.int // packet  size  (KB)
    ,
    iDownloadSize: ref.types.int // download size (KB)
    ,
    iIsMultiDeviceUpdate: ref.types.int,
    deviceState: exports.BC_MULTI_UPDATE_STATUS,
    channelsState: exports.BC_MULTI_UPDATE_STATUS_LIST
});
exports.P_BC_ONLINE_UPDATE_STATUS = exports.pointer(exports.BC_ONLINE_UPDATE_STATUS);
exports.BC_ONLINE_UPDATE = refStruct({
    iNeedUpdate: ref.types.int,
    type: ref.types.int
});
exports.P_BC_ONLINE_UPDATE = exports.pointer(exports.BC_ONLINE_UPDATE);
exports.BC_AUTO_UPDATE = refStruct({
    iEnable: ref.types.int
});
exports.P_BC_AUTO_UPDATE = exports.pointer(exports.BC_AUTO_UPDATE);
exports.BC_ONLINE_NEW_FW_INFO = refStruct({
    iHasNewFirmware: ref.types.int,
    iIsMultiDeviceUpdate: ref.types.int
});
exports.P_BC_ONLINE_NEW_FW_INFO = exports.pointer(exports.BC_ONLINE_NEW_FW_INFO);
exports.BC_PERFORMANCE_INFO = refStruct({
    iCPUUse: ref.types.int // CPU utilization  1^100
    ,
    iBitRate: ref.types.int // Bit rate B/s
    ,
    iNetThroughput: ref.types.int // Ethernet through	rate B/s
});
exports.P_BC_PERFORMANCE_INFO = exports.pointer(exports.BC_PERFORMANCE_INFO);
exports.BC_WIFI_SIGNAL = refStruct({
    iSignal: ref.types.int // 0~-255
    ,
    iSupportChannelSignal: ref.types.int,
    iChnSignal: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_CHANNEL)
});
exports.P_BC_WIFI_SIGNAL = exports.pointer(exports.BC_WIFI_SIGNAL);
exports.BC_3G_4G_INFO = refStruct({
    iSignalIntensity: ref.types.int // signal intensity
    ,
    iSignalLevel: ref.types.int // 1:3~6, 2:7~10, 3:11~14, 4:15~18, 5:19~...
    ,
    eMode: ref.types.int // BC_3G4G_MODE_E 
    ,
    iMobileOperator: ref.types.int // serial number of operator
});
exports.P_BC_3G_4G_INFO = exports.pointer(exports.BC_3G_4G_INFO);
exports.BC_SCAN_AP = refStruct({
    udidList: exports.BC_UDID_LIST
});
exports.P_BC_SCAN_AP = exports.pointer(exports.BC_SCAN_AP);
exports.BC_BATTERY_INFO = refStruct({
    iChannel: ref.types.int,
    eBatteryType: ref.types.int // BC_BATTERY_TYPE_E
    ,
    iVoltage: ref.types.int,
    iCurrent: ref.types.int,
    iTemperature: ref.types.int,
    iBatteryPercent: ref.types.int,
    iLowPowerFlag: ref.types.int // 0:not, 1:low power
    ,
    eChargeStatus: ref.types.int // BC_CHARGE_STATUS_E
    ,
    eAdapterStatus: ref.types.int // BC_ADAPTER_STATUS_E
    ,
    iExceptionCode: ref.types.int,
    adcOfPartA: ref.types.int,
    adcOfPartB: ref.types.int
});
exports.P_BC_BATTERY_INFO = exports.pointer(exports.BC_BATTERY_INFO);
exports.BC_BATTERY_INFO_LIST = refStruct({
    size: ref.types.int,
    infoList: refArray(exports.BC_BATTERY_INFO, types_1.DEFINDE.BC_MAX_CHANNEL)
});
exports.P_BC_BATTERY_INFO_LIST = exports.pointer(exports.BC_BATTERY_INFO_LIST);
exports.BC_BATTERY_ANALYSIS = refStruct({
    iChannel: ref.types.int,
    iDays: ref.types.int,
    iBatRemain: refArray(ref.types.int, 30) // 0% ~ 100%
});
exports.P_BC_BATTERY_ANALYSIS = exports.pointer(exports.BC_BATTERY_ANALYSIS);
exports.BC_AUDIO_CONFIG = refStruct({
    eAudioType: ref.types.int // BC_AUDIO_TYPE_E
    ,
    iSampleRate: ref.types.int,
    iSamplePrecision: ref.types.int,
    iLengthPerEncoder: ref.types.int // length of stream data which encoded from sample data.
    ,
    eSoundTrack: ref.types.int // BC_SOUND_TRACK_E
});
exports.P_BC_AUDIO_CONFIG = exports.pointer(exports.BC_AUDIO_CONFIG);
exports.BC_AUDIO_CONFIG_TABLE = refStruct({
    iSize: ref.types.int,
    configs: refArray(exports.BC_AUDIO_CONFIG, 32)
});
exports.P_BC_AUDIO_CONFIG_TABLE = exports.pointer(exports.BC_AUDIO_CONFIG_TABLE);
exports.BC_RINGTONE_ABILITY = refStruct({
    iChannel: ref.types.int,
    iMaxCapacity: ref.types.int // ringtone file max size (KB)
    ,
    audioConfigs: exports.BC_AUDIO_CONFIG_TABLE
});
exports.P_BC_RINGTONE_ABILITY = exports.pointer(exports.BC_RINGTONE_ABILITY);
/// device location description
exports.DEVICE_LOCATION_DESC = refStruct({
    name: refArray('byte', types_1.DEFINDE.SDK_MAX_NORMAL_STR_LEN),
    ip: refArray('byte', types_1.DEFINDE.SDK_MAX_NORMAL_STR_LEN),
    port: ref.types.int,
    uid: refArray('byte', types_1.DEFINDE.SDK_MAX_UID_STR_LEN),
    mac: refArray('byte', types_1.DEFINDE.SDK_MAX_MAC_STR_LEN),
    eDVRType: ref.types.int // BC_DEVICE_TYPE_E
    ,
    iChanNum: ref.types.int,
    isSongDevice: ref.types.int
});
exports.P_DEVICE_LOCATION_DESC = exports.pointer(exports.DEVICE_LOCATION_DESC);
exports.BC_P2P_DEBUG_INFO = refStruct({
    v6_check: ref.types.int,
    server_addr: refArray('byte', 48),
    ver: refArray('byte', 16)
});
exports.P_BC_P2P_DEBUG_INFO = exports.pointer(exports.BC_P2P_DEBUG_INFO);
exports.BC_P2P_UID_INFO = refStruct({
    uid: refArray('byte', types_1.DEFINDE.BC_MAX_UID_LEN)
});
exports.P_BC_P2P_UID_INFO = exports.pointer(exports.BC_P2P_UID_INFO);
exports.BC_P2P_DETAIL_INFO = refStruct({
    content: refArray('byte', 1024)
});
exports.P_BC_P2P_DETAIL_INFO = exports.pointer(exports.BC_P2P_DETAIL_INFO);
exports.BC_DIAGNOSE_LOG = refStruct({
    content: refArray('byte', types_1.DEFINDE.BC_DIAGNOSE_LOG_STRING_MAX_LENGTH)
});
exports.P_BC_DIAGNOSE_LOG = exports.pointer(exports.BC_DIAGNOSE_LOG);
exports.BC_DIAGNOSE_LOGS_LIST = refStruct({
    logs: refArray(exports.BC_DIAGNOSE_LOG, types_1.DEFINDE.BC_DIAGNOSE_LOG_MAX_SIZE),
    sizeOfLogs: ref.types.int
});
exports.P_BC_DIAGNOSE_LOGS_LIST = exports.pointer(exports.BC_DIAGNOSE_LOGS_LIST);
exports.BC_CRYPT_BUF = refStruct({
    buffer: refArray('byte', types_1.DEFINDE.BASE64_OUT_SIZE),
    len: ref.types.uint8
});
exports.P_BC_CRYPT_BUF = exports.pointer(exports.BC_CRYPT_BUF);
exports.BC_P2P_DEVICE_INFO = refStruct({
    uid: refArray('byte', types_1.DEFINDE.BC_MAX_UID_LEN),
    fm_ver: refArray('byte', 16),
    batteryType: ref.types.int // 0: not support. 1:dry battery, 2:charge battery
    ,
    QRCodeType: ref.types.int // 0: not support. 1: support qr code
    ,
    productName: refArray('byte', 16) // product name: "KEEN", "CARD", ...
    ,
    productType: ref.types.int
});
exports.P_BC_P2P_DEVICE_INFO = exports.pointer(exports.BC_P2P_DEVICE_INFO);
/// disk warning description
exports.BC_DISK_WARNINIG_DESC = refStruct({
    warning: ref.types.int,
    description: exports.pointer(ref.types.byte),
    folder: refArray('byte', types_1.DEFINDE.SDK_MAX_FILENAME_LEN),
    folderFreeSize: ref.types.uint64,
    diskFreeSize: ref.types.uint64
});
exports.P_BC_DISK_WARNINIG_DESC = exports.pointer(exports.BC_DISK_WARNINIG_DESC);
/// record file callback description
exports.BC_REC_EVENT_DESC = refStruct({
    hDevice: ref.types.int,
    channel: ref.types.int,
    //
    event: ref.types.int,
    description: exports.pointer(ref.types.byte),
    file: refArray('byte', types_1.DEFINDE.SDK_MAX_FILENAME_LEN)
});
exports.P_BC_REC_EVENT_DESC = exports.pointer(exports.BC_REC_EVENT_DESC);
exports.BC_REC_SCHE_TABLE_CFG = refStruct({
    iTimeTable: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_DAYS * types_1.DEFINDE.BC_MAX_TIMESEGMENT)
});
exports.P_BC_REC_SCHE_TABLE_CFG = exports.pointer(exports.BC_REC_SCHE_TABLE_CFG);
exports.BC_SIGNATURE_LOGIN_CFG = refStruct({
    iIsOpened: ref.types.int
});
exports.P_BC_SIGNATURE_LOGIN_CFG = exports.pointer(exports.BC_SIGNATURE_LOGIN_CFG);
exports.BC_UTC_TIME = refStruct({
    realTime: ref.types.uint
});
exports.P_BC_UTC_TIME = exports.pointer(exports.BC_UTC_TIME);
exports.BC_NAS_BIND = refStruct({
    /* bind
     * send to ipc
     *      cDevName: nas's name
     *      cUID: nas's uid
     *      cUserName: nas's username
     *      cPassword: nas's password
     */
    /* unbind
     * send to nas
     *      cDevName: no need
     *      cUID: ipc's uid
     *      cUserName: no need
     *      cPassword: no need
     */
    /* unbind
     * send to ipc
     *      cDevName: no need
     *      cUID: nas's uid
     *      cUserName: no need
     *      cPassword: no need
     */
    cDevName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    cUID: refArray('byte', types_1.DEFINDE.BC_MAX_UID_LEN),
    cUserName: refArray('byte', types_1.DEFINDE.BC_MAX_NAME_LEN),
    cPassword: refArray('byte', types_1.DEFINDE.BC_MAX_PWD_LEN)
});
exports.P_BC_NAS_BIND = exports.pointer(exports.BC_NAS_BIND);
exports.BC_NAS_CFG = refStruct({
    iStreamAbility: ref.types.int,
    /* @param:iStreamCfg
     *  bit0: main stream,
     *  bit1: sub stream,
     *  bit2: exten stream
     */
    iStreamCfg: ref.types.int
});
exports.P_BC_NAS_CFG = exports.pointer(exports.BC_NAS_CFG);
exports.BC_SMARTHOME_ITEM = refStruct({
    cName: refArray('byte', types_1.DEFINDE.BC_SMARTHOME_NAME_MAX_LEN),
    uiValue: ref.types.uint
});
exports.P_BC_SMARTHOME_ITEM = exports.pointer(exports.BC_SMARTHOME_ITEM);
exports.BC_SMARTHOME_ABILITY_INFO = refStruct({
    iVersion: ref.types.int,
    iSize: ref.types.int,
    items: refArray(exports.BC_SMARTHOME_ITEM, types_1.DEFINDE.BC_SMARTHOME_ITEMS_MAX_NUM)
});
exports.P_BC_SMARTHOME_ABILITY_INFO = exports.pointer(exports.BC_SMARTHOME_ABILITY_INFO);
exports.BC_CHANNEL_ALARM_STATUS_REPORT = refStruct({
    bMotion: ref.types.bool,
    /* @param iAiType
     *  bitmap (BC_AI_TYPE_PEOPLE | BC_AI_TYPE_VEHICLE | ...)
     */
    iAiType: ref.types.int
});
exports.P_BC_CHANNEL_ALARM_STATUS_REPORT = exports.pointer(exports.BC_CHANNEL_ALARM_STATUS_REPORT);
exports.BC_ALARM_STATUS_REPORT = refStruct({
    reportByChannel: refArray(exports.BC_CHANNEL_ALARM_STATUS_REPORT, types_1.DEFINDE.BC_MAX_CHANNEL)
});
exports.P_BC_ALARM_STATUS_REPORT = exports.pointer(exports.BC_ALARM_STATUS_REPORT);
exports.BC_REC_SCHE_DEVICE_CFG = refStruct({
    // acceptance of the local record schedule
    bAccept: refArray(ref.types.bool, types_1.DEFINDE.BC_MAX_CHANNEL)
});
exports.P_BC_REC_SCHE_DEVICE_CFG = exports.pointer(exports.BC_REC_SCHE_DEVICE_CFG);
exports.BC_DOWNLOAD_BY_NAME_INFO = refStruct({
    iChannel: ref.types.int,
    cUID: refArray('byte', types_1.DEFINDE.BC_MAX_UID_LEN),
    cSourceFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    cFileId: refArray('byte', types_1.DEFINDE.BC_MAX_REC_FILE_ID),
    cSaveFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    cTempFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    fileSize: ref.types.longlong,
    curSize: ref.types.longlong,
    iUseSubStream: ref.types.int
});
exports.P_BC_DOWNLOAD_BY_NAME_INFO = exports.pointer(exports.BC_DOWNLOAD_BY_NAME_INFO);
exports.BC_DOWNLOAD_BY_TIME_INFO = refStruct({
    iChannel: ref.types.int,
    cUID: refArray('byte', types_1.DEFINDE.BC_MAX_UID_LEN),
    startTime: exports.BC_TIME,
    endTime: exports.BC_TIME,
    cSaveFileName: refArray('byte', types_1.DEFINDE.BC_MAX_FILE_LEN),
    fileSize: ref.types.longlong,
    curSize: ref.types.longlong,
    iUseSubStream: ref.types.int,
    width: ref.types.uint,
    height: ref.types.uint
});
exports.P_BC_DOWNLOAD_BY_TIME_INFO = exports.pointer(exports.BC_DOWNLOAD_BY_TIME_INFO);
exports.BC_TIME_WITHOUT_INTERACTION = refStruct({
    duration: ref.types.int // seconds
});
exports.P_BC_TIME_WITHOUT_INTERACTION = exports.pointer(exports.BC_TIME_WITHOUT_INTERACTION);
exports.BC_DEVICE_EXCEPTION = refStruct({
    iExceptionCode: ref.types.int,
    adcOfPartA: ref.types.int,
    adcOfPartB: ref.types.int
});
exports.P_BC_DEVICE_EXCEPTION = exports.pointer(exports.BC_DEVICE_EXCEPTION);
exports.BC_TRANSFORM = refStruct({
    a: ref.types.float,
    b: ref.types.float,
    c: ref.types.float,
    d: ref.types.float,
    tx: ref.types.float,
    ty: ref.types.float
});
exports.P_BC_TRANSFORM = exports.pointer(exports.BC_TRANSFORM);
exports.BC_COVER_PRE_INFO = refStruct({
    iChannel: ref.types.int,
    iUseSubStream: ref.types.int,
    startTime: exports.BC_TIME,
    endTime: exports.BC_TIME,
    /* get how many frames
     */
    frameCount: ref.types.int,
    /* which frame to get
     */
    frames: refArray(ref.types.int, types_1.DEFINDE.BC_MAX_COV_PRE_LEN)
});
exports.P_BC_COVER_PRE_INFO = exports.pointer(exports.BC_COVER_PRE_INFO);
exports.BC_QR_AUDIOS_INFO = refStruct({
    audio: refArray('byte', types_1.DEFINDE.BC_MAX_QR_AUDIO_LEN)
});
exports.P_BC_QR_AUDIOS_INFO = exports.pointer(exports.BC_QR_AUDIOS_INFO);
exports.BC_SMB_CFG = refStruct({
    iEnable: ref.types.int
});
exports.P_BC_SMB_CFG = exports.pointer(exports.BC_SMB_CFG);
exports.BC_ALARM_OUT_ENABLE_CFG = refStruct({
    /* @param iEnable
     *  Bitmap
     *  bit0: channel 0
     *  bit1: channel 1
     *  ...
     */
    iEnable: ref.types.int
});
exports.P_BC_ALARM_OUT_ENABLE_CFG = exports.pointer(exports.BC_ALARM_OUT_ENABLE_CFG);
exports.BC_PT_SELF_TEST_CFG = refStruct({
    iChannel: ref.types.int,
    /* @param iPowerOnSelfTest
     *  0: not do self test when power on
     *  1: do self test when power on
     */
    iPowerOnSelfTest: ref.types.int,
    /* @param iTestState
     *  0: idle
     *  1: doing
     *  2: finished
     */
    iTestState: ref.types.int
});
exports.P_BC_PT_SELF_TEST_CFG = exports.pointer(exports.BC_PT_SELF_TEST_CFG);
exports.BC_AI_DETECT_CFG = refStruct({
    iChannel: ref.types.int,
    type: ref.types.int,
    sensitivity: ref.types.int,
    stayTime: ref.types.int,
    /* @param minTargetWidth, minTargetWidth, maxTargetWidth, maxTargetHeight
     *  0 - 1, percent of the whole picture
     */
    minTargetWidth: ref.types.float,
    minTargetHeight: ref.types.float,
    maxTargetWidth: ref.types.float,
    maxTargetHeight: ref.types.float,
    /* @param width
     *  number of areas per line
     *
     * @param height
     *  number of areas per column
     */
    width: ref.types.int,
    height: ref.types.int,
    area: refArray(ref.types.uint8, types_1.DEFINDE.BC_ALARM_AREA_MAX_WIDTH * types_1.DEFINDE.BC_ALARM_AREA_MAX_HEIGHT)
});
exports.P_BC_AI_DETECT_CFG = exports.pointer(exports.BC_AI_DETECT_CFG);
exports.BC_DETECT_AREA = refStruct({
    type: ref.types.int,
    width: ref.types.int,
    height: ref.types.int,
    area: refArray(ref.types.uint8, types_1.DEFINDE.BC_ALARM_AREA_MAX_WIDTH * types_1.DEFINDE.BC_ALARM_AREA_MAX_HEIGHT)
});
exports.P_BC_DETECT_AREA = exports.pointer(exports.BC_DETECT_AREA);
exports.BC_ALARM_AREAS_CFG = refStruct({
    iChannel: ref.types.int,
    num: ref.types.int,
    areas: refArray(exports.BC_DETECT_AREA, 4)
});
exports.P_BC_ALARM_AREAS_CFG = exports.pointer(exports.BC_ALARM_AREAS_CFG);
// ptz guard
exports.BC_GUARD_INFO = refStruct({
    iChannel: ref.types.int,
    iEnable: ref.types.int,
    /* @param: iTimeout (second)
     *  when back to guard position
     */
    iTimeout: ref.types.int,
    /* @param: eAction
     *  only for set
     */
    eAction: ref.types.int
});
exports.P_BC_GUARD_INFO = exports.pointer(exports.BC_GUARD_INFO);
exports.BC_AI_CFG = refStruct({
    /* validField, used for only set some params.
     * for example, validField = "<iSmartTrack>", only set iSmartTrack"
     */
    validField: refArray('byte', 128),
    iSmartTrack: ref.types.int,
    iDetectType: ref.types.int // bitmap (BC_AI_TYPE_PEOPLE | BC_AI_TYPE_VEHICLE | ...)
});
exports.P_BC_AI_CFG = exports.pointer(exports.BC_AI_CFG);
//# sourceMappingURL=_struct.js.map