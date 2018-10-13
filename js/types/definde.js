"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const E = require("./enum");
function BC_MODE(idx) { return (1 << (idx)); }
var DEFINDE;
(function (DEFINDE) {
    DEFINDE.BC_USER_NUM = 32;
    DEFINDE.BC_PORT_STR_LEN = 10;
    DEFINDE.BC_MAX_NAME_LEN = 32;
    DEFINDE.BC_MAX_PWD_LEN = 32;
    DEFINDE.BC_SERIALNO_LEN = 32;
    DEFINDE.BC_MACADDR_LEN = 6;
    DEFINDE.BC_MAX_ADDR_LEN = 128;
    DEFINDE.BC_MAX_NICKNAME_LEN = 128;
    DEFINDE.BC_TYPE_INFO_LEN = 32;
    DEFINDE.BC_BUILD_INFO_LEN = 32;
    DEFINDE.BC_VERSION_INFO_LEN = 32;
    DEFINDE.BC_DETAIL_INFO_LEN = 32;
    DEFINDE.BC_MAX_ALARMOUT = 96;
    DEFINDE.BC_MAX_ALARMIN = 64;
    DEFINDE.BC_MAX_CHANNEL = 32;
    DEFINDE.BC_MAX_RF_NUM_V20 = 64;
    DEFINDE.BC_MAX_DISKNUM = 64;
    DEFINDE.BC_MAX_ENC_PROFILE_NUM = 32;
    DEFINDE.BC_LOG_INFO_LEN = 4096;
    DEFINDE.BC_MAX_FRAME_SIZE = 1000000;
    DEFINDE.BC_MAX_CONFIG_BUF_SIZE = 50000;
    DEFINDE.BC_MAX_DAYS = 7;
    DEFINDE.BC_MAX_TIMESEGMENT = 24;
    DEFINDE.BC_MAX_COVER_AREA_NUM = 4;
    DEFINDE.BC_MAX_MOTION_SENS_NUM = 4;
    DEFINDE.BC_MAX_FRAME_RATE_NUM = 25;
    DEFINDE.BC_MAX_BIT_RATE_NUM = 16;
    DEFINDE.BC_MAX_UID_LEN = 32;
    DEFINDE.BC_MAX_DDNS_NUM = 10;
    DEFINDE.BC_MAX_IPFILTER_NUM = 64;
    DEFINDE.BC_MAX_FILE_LEN = 256;
    DEFINDE.BC_MAX_RESOLUTION_NUM = 32;
    DEFINDE.BC_MAX_DWELL_NUM = 16;
    DEFINDE.BC_MAX_AUTHORITY_NUM = 32;
    DEFINDE.BC_MAX_POS_NUM = 64;
    DEFINDE.BC_MAX_KEY_POS = 16;
    DEFINDE.BC_MAX_CRUISE_NUM = 6;
    DEFINDE.BC_MAX_TRACK_NUM = 1;
    DEFINDE.BC_MAX_TRACK_SIZE = 128;
    DEFINDE.BC_WIFI_UDID_MAX_NUM = 128;
    DEFINDE.BC_MAX_AUTH_TOKEN_LEN = 128;
    DEFINDE.MAX_UINT32_NUM = 4294967295;
    DEFINDE.MAX_INT32_NUM = 2147483647;
    DEFINDE.NET_MAX_SHELTERNUM = 4;
    DEFINDE.NET_MAX_ALARMOUT = 96;
    DEFINDE.NET_MAX_DAYS = 7;
    DEFINDE.NET_MAX_TIMESEGMENT = 24;
    DEFINDE.NET_MAX_CHANNEL_NUM = 64;
    DEFINDE.NET_MAX_ABILITY_BYTE_NUM = 4;
    DEFINDE.SDK_MAX_DEVICE_NUM = 2048;
    DEFINDE.SDK_MAX_NAME_LEN = 32;
    DEFINDE.SDK_MAX_PASSWD_LEN = 32;
    DEFINDE.SDK_MAX_HOSTNAME_LEN = 1024;
    DEFINDE.SDK_MAX_NORMAL_STR_LEN = 256;
    DEFINDE.SDK_MAX_UID_STR_LEN = 128;
    DEFINDE.SDK_MAX_MAC_STR_LEN = 32;
    DEFINDE.SDK_MAX_FILENAME_LEN = 1024;
    // alarm in
    DEFINDE.BC_ALARM_IN_NONE = 0;
    DEFINDE.BC_ALARM_IN_MD = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_MD);
    DEFINDE.BC_ALARM_IN_VL = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_VL);
    DEFINDE.BC_ALARM_IN_IO = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_IO);
    DEFINDE.BC_ALARM_IN_BLIND = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_BLIND);
    DEFINDE.BC_ALARM_IN_HDEXP = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_HDEXP);
    DEFINDE.BC_ALARM_IN_HDFULL = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_HDFULL);
    DEFINDE.BC_ALARM_IN_IPCONFLICT = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_IPCONFLICT);
    DEFINDE.BC_ALARM_IN_NETCONNECT = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_NETCONNECT);
    DEFINDE.BC_ALARM_IN_RF = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_RF);
    DEFINDE.BC_ALARM_IN_FD = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_FD);
    DEFINDE.BC_ALARM_IN_VS = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_VS);
    DEFINDE.BC_ALARM_IN_ID = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_ID);
    DEFINDE.BC_ALARM_IN_RFLPWR = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_RFSENSO_LOW_POWER);
    DEFINDE.BC_ALARM_IN_RFTAMPER = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_RFSENSO_TAMPER);
    DEFINDE.BC_ALARM_IN_DONGLELOST = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_DONGLE_LOST);
    DEFINDE.BC_ALARM_IN_BUTT = BC_MODE(E.BC_ALARM_IN_E.E_BC_ALARM_IN_BUTT);
    // alarm out
    DEFINDE.BC_ALARM_OUT_NONE = 0;
    DEFINDE.BC_ALARM_OUT_IO = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_IO);
    DEFINDE.BC_ALARM_OUT_SNAP = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_SNAP);
    DEFINDE.BC_ALARM_OUT_REC = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_REC);
    DEFINDE.BC_ALARM_OUT_LED = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_LED);
    DEFINDE.BC_ALARM_OUT_BUZZ = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_BUZZ);
    DEFINDE.BC_ALARM_OUT_PTZ = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_PTZ);
    DEFINDE.BC_ALARM_OUT_FTP = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_FTP);
    DEFINDE.BC_ALARM_OUT_SCREEN = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_SCREEN);
    DEFINDE.BC_ALARM_OUT_RFSPEAKER = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_RFSPEAKER);
    DEFINDE.BC_ALARM_OUT_PUSH = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_PUSH);
    DEFINDE.BC_ALARM_OUT_AUDIO = BC_MODE(E.BC_ALARM_OUT_E.E_BC_ALARM_OUT_AUDIO);
})(DEFINDE = exports.DEFINDE || (exports.DEFINDE = {}));
//# sourceMappingURL=definde.js.map