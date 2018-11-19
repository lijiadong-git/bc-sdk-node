/// <reference types="node" />
import * as T from './types';
export declare type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
export declare type Hour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
export declare type Minute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
export declare type Second = Minute;
export declare const H_BC_DEVICE_INVALID: number;
export interface DEVICE_LOGIN_DESC {
    /**
     * max length 255 / SDK_MAX_NORMAL_STR_LEN
     */
    name: string;
    /**
     * use for get
     */
    useP2P: boolean;
    /**
     * max length 1023
     */
    port: number;
    /**
     * 2015 for battery devices
     * 2018 for others
     */
    uidPort: 2015 | 2018;
    /**
     * max length 1023 / SDK_MAX_HOSTNAME_LEN
     */
    host: string;
    /**
     * max length 127 / SDK_MAX_UID_STR_LEN
     */
    uid: string;
    /**
     * max length 31 / SDK_MAX_NAME_LEN
     */
    username: string;
    /**
     * max length 31 / SDK_MAX_PASSWD_LEN
     */
    password: string;
}
export interface DEVICE_ABILITY_ABOUT {
    isBattery: boolean;
    qrCode: boolean;
    type: T.BC_SONG_P2P_TYPE_E;
}
export interface DATA_VIDEO_FRAME_DESC {
    width: number;
    height: number;
    frameRate: number;
}
export interface DATA_AUDIO_FRAME_DESC {
    hasAAC: number;
    sampleRate: number;
    profile: number;
    channels: number;
}
export interface DATA_FRAME_DESC {
    version: number;
    type: number;
    length: number;
    media: Buffer;
    pts: number;
    videoInfo: DATA_VIDEO_FRAME_DESC;
    audioInfo: DATA_AUDIO_FRAME_DESC;
}
export interface BC_RESO_PROFILE {
    eResolution: number;
    iWidth: number;
    iHigh: number;
    cResolutionName: string;
    lDefFrameRate: number;
    lDefBitRate: number;
    lFrameRate: number[];
    lBitRate: number[];
}
export interface BC_ENC_PROFILE {
    iChnBits: number;
    mainstream: BC_RESO_PROFILE;
    substream: BC_RESO_PROFILE;
    extendstream: BC_RESO_PROFILE;
}
export interface BC_ENC_PROFILE_TABLE {
    profileNum: number;
    profile: BC_ENC_PROFILE[];
}
export interface BC_TIME {
    iYear: number;
    iMonth: Month;
    iDay: Day;
    iHour: Hour;
    iMinute: Minute;
    iSecond: Second;
}
export interface BC_FIND_REC_FILE {
    iChannel: number;
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cFileName: string;
    startTime: BC_TIME;
    stopTime: BC_TIME;
    iFileSize: number;
    iFileSizeH: number;
    recordType: T.RECORD_TYPE_E;
    eStreamType: T.BC_STREAM_TYPE_E;
    eFileType: T.BC_FILE_TYPE_E;
    iContainsAudio: number;
}
export interface BC_FIND_REC_FILES {
    seq: number;
    fileNum: number;
    recFile: BC_FIND_REC_FILE[];
}
export interface BC_SYS_GENERAL_CFG {
    eTS: T.BC_TVSYSTEM_E;
    /**
     * Example: For GMT +8:00; lTimeZone = -8*3600
     */
    iTimeZone: number;
    eDateFormat: T.BC_DATE_TYPE_E;
    eTimeFormat: T.BC_TIME_FMT_E;
    /**
     * Example: 2018
     */
    iYear: number;
    iMonth: Month;
    iDay: Day;
    iHour: Hour;
    iMin: Minute;
    iSecond: Second;
    /**
     *
     */
    iDeviceId: number;
    /**
     * 0: Chinese   1: English
     */
    iLanguage: 0 | 1;
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cDeviceName: string;
}
export interface BC_DEVICE_NAME_CFG {
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cDeviceName: string;
}
export interface BC_VERSION_INFO {
    /**
     * device name
     * max length: BC_MAX_NAME_LEN - 1
     */
    cName: string;
    /**
     * model
     * max length: BC_MAX_NAME_LEN - 1
     */
    cType: string;
    /**
     * max length: BC_SERIALNO_LEN - 1
     */
    cSerialNo: string;
    /**
     * max length: BC_BUILD_INFO_LEN - 1
     */
    cBuildDay: string;
    /**
     * max length: BC_VERSION_INFO_LEN - 1
     */
    cHardwareVer: string;
    /**
     * max length: BC_VERSION_INFO_LEN - 1
     */
    cCfgVer: string;
    /**
     * max length: BC_VERSION_INFO_LEN - 1
     */
    cFirmwareVer: string;
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cPakSuffix: string;
    /**
     * max length: BC_DETAIL_INFO_LEN - 1
     */
    cDetail: string;
    /**
     * cc3200 version
     * max length: BC_VERSION_INFO_LEN - 1
     */
    cCC3200Ver: string;
    /**
     * sp version
     * max length: BC_VERSION_INFO_LEN - 1
     */
    cSpVer: string;
}
export interface BC_AUTOREBOOT_CFG {
    bEnable: boolean;
    eDay: T.BC_REBOOT_AT_E;
    iHour: number;
    iMin: number;
    iSecond: number;
}
export interface BC_RESTORE_CFG {
    bDisplay: boolean;
    bRecording: boolean;
    bNetwork: boolean;
    bAlarm: boolean;
    bDevice: boolean;
    bSystem: boolean;
    bIPC: boolean;
    bWifi: boolean;
}
export interface BC_RECORD_TIME_LIST {
    iSize: number;
    durationTime: number[];
}
export interface BC_RECORD_GENERAL_CFG {
    bOverWrite: boolean;
    /**
     * 30 45 60 MIN
     */
    iPackageTime: 30 | 45 | 60;
    /**
     * 1 2 5 10 MIN
     */
    iPostRecordTime: 1 | 2 | 5 | 10;
    bPreRecord: boolean;
    /**
     * only for E_BC_CMD_GET_ADVRECORD
     */
    timeList: BC_RECORD_TIME_LIST;
}
export interface BC_EMAIL_CFG {
    /**
     * sender email
     */
    sender: {
        /**
         * max length: BC_MAX_ADDR_LEN - 1
         */
        byAccount: string;
        /**
         * max length: BC_MAX_PWD_LEN - 1
         */
        byPassword: string;
    };
    receiver: [{
        byAddress: string;
    }, {
        byAddress: string;
    }, {
        byAddress: string;
    }];
    /**
     * max length: BC_MAX_ADDR_LEN - 1
     */
    bySmtpServer: string;
    bSSL: boolean;
    iSmtpPort: number;
    /**
     * 0:disable; 1:Attach Picture; 2:Attach Video
     */
    iAttachment: 0 | 1 | 2;
    bSupportVideo: boolean;
    bSupportTextType: boolean;
    /**
     * 0:without text;  1:with text
     */
    iWithText: 0 | 1;
    /**
     * 3: 30S; 6: 60S; 30: 300S; 60: 600S
     */
    iMailInterval: 3 | 6 | 30 | 60;
    /**
     * max length: BC_MAX_NICKNAME_LEN - 1
     */
    cSendNickname: string;
}
export interface BC_RESOLUTION_INFO {
    reso: T.BC_RESOLUTION_E;
    /**
     * name of resolution
     * max length: 31
     */
    cName: string;
    width: number;
    height: number;
}
export interface BC_RESOLUTION_LIST {
    lValidNum: number;
    cur: BC_RESOLUTION_INFO;
    list: BC_RESOLUTION_INFO[];
}
export interface BC_UI_TRANS {
    lMax: number;
    lMin: number;
    lCur: number;
}
export interface BC_MOUSE_SENSE {
    lMax: number;
    lMin: number;
    lCur: number;
}
export interface BC_DWELL_TABLE {
    lValidNum: number;
    lCurrentValue: number;
    lList: number[];
}
export interface BC_OUTPUT_CFG {
    reso: BC_RESOLUTION_LIST;
    trans: BC_UI_TRANS;
    mouseSense: BC_MOUSE_SENSE;
    dwell: BC_DWELL_TABLE;
    bAudio: boolean;
}
export interface BC_HDD {
    /**
     * iNumber > 100 ? eSATA : iNumber;
     */
    iNumber: number;
    /**
     * Unit:GB
     */
    iCapacityG: number;
    /**
     * Unit:GB  -1: no support
     */
    iCapacityM: number;
    bFormat: boolean;
    bMount: boolean;
    /**
     * Unit:GB
     */
    iRemainSizeG: number;
    iRemainSizeM: number;
}
export interface BC_HDD_CFG {
    iTotal: number;
    hdd: BC_HDD[];
}
export interface BC_HDD_INIT_CFG {
    iTotal: number;
    /**
     * max length: BC_MAX_DISKNUM
     */
    iInitId: number[];
}
export interface BC_ALARM_OUT {
    /**
     * BC_ALARM_OUT_NONE  ~  BC_ALARM_OUT_SCREEN
     */
    iType: number;
    /**
     * alarmout channel; 0: disable; 1: enable
     * max length: BC_MAX_ALARMOUT
     */
    bAlarmout: boolean[];
}
export interface BC_EXCEPTION_CFG {
    alarmOut: BC_ALARM_OUT;
}
export interface BC_LOCAL_CFG {
    /**
     * dhcp or static
     */
    eIpObtain: T.BC_IP_OBTAIN_E;
    /**
     * get dns automaticaly or static configure
     */
    eAutodns: T.BC_DNS_TYPE_E;
    /**
     * ip configure
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cIp: string;
    /**
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cMask: string;
    /**
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cGateway: string;
    /**
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cMac: string;
    /**
     * dns1 configure
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cDns1: string;
    /**
     * dns2 configure
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cDns2: string;
}
export interface BC_NET_NORMAL_PORT {
    iSurvPort: number;
    iHttpPort: number;
    iHttpsPort: number;
}
export interface BC_NET_ADVANCED_PORT {
    iOnvifPort: number;
    iRtspPort: number;
    iRtmpPort: number;
}
export interface BC_UPNP_CFG {
    iEnable: number;
}
export interface BC_UID_INFO {
    /**
     * max length: BC_MAX_UID_LEN - 1
     */
    cUid: string;
}
export interface BC_P2P_CFG {
    iEnable: number;
    iPort: number;
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    serverDomainName: string;
}
export interface BC_RFSENSOR_ALARM_INFO {
    iEnable: number;
    eRfType: T.BC_RF_ALARM_TYPE_E;
}
export interface BC_HANDLEEXCEPTION {
    iHandleType: number;
    byRelAlarmOut: string;
}
export interface BC_ALARM_IN_CFG {
    iInputId: number;
    bCopyTo: boolean;
    sAlarmInName: string;
    byAlarmType: number;
    byAlarmInHandle: number;
    struAlarmHandleType: BC_HANDLEEXCEPTION;
    iInvalid: number;
    iTimeTable: number[];
    byRelRecordChannel: number[];
    byEnablePreset: number[];
    byPresetNo: number[];
    byEnableCruise: number[];
    byCruiseNo: number[];
    byEnablePtzTrack: number[];
    byPTZTrack: number[];
}
export interface BC_ALARM_OUT_CFG {
    iOutputId: number;
    cAlarmOutName: string;
    iAlarmOutDelay: number;
    iInvalid: number;
    iTimeTable: number[];
}
export interface BC_RF_ALARM_CFG {
    isCopyTo: boolean;
    iRfId: number;
    bEnable: boolean;
    iSupportSensitivity: boolean;
    eSensitivity: T.BC_RF_SENSITIVITY_E;
    iSensitivityValue: number;
    iReduceFalseAlarm: number;
    iInvalid: number;
    channelNum: number;
    triggeredHandleType: number[];
    iTimeTable: number[];
}
export interface BC_RF_ALARM_STATUS {
    iRfId: number;
    bEnable: boolean;
}
export interface BC_DST_CFG {
    bEnable: boolean;
    iOffset: number;
    iStartMonth: Month;
    iStartIndex: number;
    iStartWeekday: number;
    iStartHour: Hour;
    iStartMinute: Minute;
    iStartSecond: Second;
    iEndMonth: Month;
    iEndIndex: number;
    iEndWeekday: number;
    iEndHour: Hour;
    iEndMinute: Minute;
    iEndSecond: Second;
    /**
     * bit0: 1 support weekday cfg
     */
    iVersion: number;
}
export interface BC_DDNS_CFG {
    bEnable: boolean;
    eType: T.BC_DDNS_TYPE_E;
    /**
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cDomainName: string;
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cUserName: string;
    /**
     * max length: BC_MAX_PWD_LEN - 1
     */
    cPassword: string;
}
export interface BC_NTP_CFG {
    bEnable: boolean;
    /**
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cServer: string;
    /**
     * 60 ~65535 MIN;0 for synchronize
     */
    iInterval: number;
    iPort: number;
}
export interface BC_PPPOE_CFG {
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cName: string;
    /**
     * max length: BC_MAX_PWD_LEN - 1
     */
    cPassword: string;
}
export interface BC_ONLINE_UPDATE {
    iNeedUpdate: number;
    type: T.BC_ONLINE_UPDATE_TYPE_E;
}
export interface BC_MULTI_UPDATE_STATUS {
    /**
     * packet  size  (KB)
     */
    iPacketSize: number;
    /**
     * download size (KB)
     */
    iDownloadSize: number;
    eState: T.BC_ONLINE_UPDATE_STATUS_E;
    /**
     * max length: BC_VERSION_INFO_LEN - 1
     */
    cVersion: string;
}
export interface BC_MULTI_UPDATE_STATUS_ITEM {
    iChannel: number;
    state: BC_MULTI_UPDATE_STATUS;
}
export interface BC_MULTI_UPDATE_STATUS_LIST {
    iSize: number;
    /**
     * max length: BC_MAX_CHANNEL
     */
    items: BC_MULTI_UPDATE_STATUS_ITEM[];
}
export interface BC_ONLINE_UPDATE_STATUS {
    iState: T.BC_ONLINE_UPDATE_STATUS_E;
    /**
     * packet  size  (KB)
     */
    iPacketSize: number;
    /**
     * download size (KB)
     */
    iDownloadSize: number;
    iIsMultiDeviceUpdate: number;
    deviceState: BC_MULTI_UPDATE_STATUS;
    channelsState: BC_MULTI_UPDATE_STATUS_LIST;
}
export interface BC_AUTO_UPDATE {
    iEnable: number;
}
export interface BC_ONLINE_NEW_FW_INFO {
    iHasNewFirmware: number;
    iIsMultiDeviceUpdate: number;
}
export interface BC_PERFORMANCE_INFO {
    /**
     * CPU utilization  1^100
     */
    iCPUUse: number;
    /**
     * Bit rate B/s
     */
    iBitRate: number;
    /**
     * Ethernet through	rate B/s
     */
    iNetThroughput: number;
}
export interface BC_WIFI_SIGNAL {
    /**
     * 0~-255
     */
    iSignal: number;
    iSupportChannelSignal: number;
    /**
     * length: BC_MAX_CHANNEL
     */
    iChnSignal: number[];
}
export interface BC_UDID {
    /**
     * max length: 127
     */
    udid: string;
    iSignal: number;
    iSupportEncrypt: number;
    iEncrypt: number;
}
export interface BC_UDID_LIST {
    size: number;
    /**
     * length: BC_WIFI_UDID_MAX_NUM
     */
    udids: BC_UDID[];
}
export interface BC_WIFI_CFG {
    mode: T.BC_WIFI_MODE_E;
    /**
     * ssid
     * max length: 127
     */
    essid: string;
    /**
     * 1~13
     */
    channel: number;
    authmod: T.BC_WIFI_AUTH_MODE_E;
    enccrypttype: T.BC_WIFI_ENCRYPT_TYPE_E;
    /**
     * max length: 127
     */
    key: string;
    udidList: BC_UDID_LIST;
}
export interface BC_3G_4G_INFO {
    /**
     * signal intensity
     */
    iSignalIntensity: number;
    /**
     * 1:3~6; 2:7~10; 3:11~14; 4:15~18; 5:19~...
     */
    iSignalLevel: number;
    eMode: T.BC_3G4G_MODE_E;
    /**
     * serial number of operator
     */
    iMobileOperator: number;
}
export interface BC_SIM_MODULE_INFO {
    /**
     * International Mobile Equipment Identity
     * max length: 127
     */
    cIMEI: string;
    /**
     * Integrate circuit card identity
     * max length: 127
     */
    cICCID: string;
    /**
     * phone number
     * max length: 127
     */
    cPhoneNum: string;
}
export interface BC_BIND_CLOUD {
    /**
     * max length: BC_MAX_AUTH_TOKEN_LEN - 1
     */
    cAuthToken: string;
}
export interface BC_CLOUD_INFO {
    isBinded: boolean;
    /**
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cUsername: string;
    /**
     * max length: BC_MAX_NICKNAME_LEN - 1
     */
    cNickname: string;
}
export interface BC_CLOUD_STREAM_TYPE_LIST {
    iSize: number;
    /**
     * max length: 8
     * -1:invalid 0:main 1:extend 2:sub
     */
    streamType: number[];
}
export interface BC_CLOUD_CFG {
    iAutoUpload: number;
    iSupportMultiStream: number;
    streamAbility: BC_CLOUD_STREAM_TYPE_LIST;
    streamCfg: BC_CLOUD_STREAM_TYPE_LIST;
}
export interface BC_SCAN_AP {
    udidList: BC_UDID_LIST;
}
export interface BC_RECORD_FILE_DAYS {
    iUsed: number;
    /**
     * 0:none; 1:normal; 2:alarm
     * max length: 32
     */
    iRecType: number[];
}
export interface BC_RECORD_FILE_DAYS_BY_CHN {
    startTime: BC_TIME;
    endTime: BC_TIME;
    /**
     * max length: BC_MAX_CHANNEL
     */
    items: BC_RECORD_FILE_DAYS[];
}
export interface BC_USER {
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cUserName: string;
    /**
     * max length: BC_MAX_PWD_LEN - 1
     */
    cPassword: string;
    /**
     * max length: 31
     */
    cLocalRight: string;
    /**
     * max length: 31
     */
    cOldIpcRight: string;
    magicNum: number;
    /**
     * max length: 127
     */
    cUserIP: string;
    /**
     * max length: 5
     */
    cMACAddr: string;
    /**
     * 0:normal user;  1:admin
     */
    iUserLevel: number;
    iLoginState: number;
    /**
     * 0:none; 1:add; 2:delete; 3:modify
     */
    iUserSetState: number;
    iBootPwd: number;
}
export interface BC_USER_CFG {
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cUserName: string;
    usernum: number;
    /**
     * max length: BC_USER_NUM
     */
    user: BC_USER;
}
export interface BC_USER_FOR_ABILITY {
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cMyUserName: string;
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cUserNameForSet: string;
}
export interface BC_USER_ONLINE_INFO {
    iSessionId: number;
    iUserId: number;
    /**
     * Login User Name
     * max length: BC_MAX_NAME_LEN - 1
     */
    cUserName: string;
    /**
     * User password; the default is an empty string
     * max length: BC_MAX_PWD_LEN - 1
     */
    cPassword: string;
    /**
     * User IP
     * max length: BC_MAX_NAME_LEN - 1
     */
    userIP: string;
    /**
     * 0:normal user;  1:admin
     */
    iUserLevel: number;
    /**
     * Is can be force offline
     */
    bCanForceOffline: boolean;
    /**
     * Online State
     */
    bOnlineState: boolean;
}
export interface BC_USER_ONLINE_CFG {
    iOnlineUserNum: number;
    /**
     * max length: BC_USER_NUM
     */
    user: BC_USER_ONLINE_INFO;
}
export interface BC_FORCE_PWD {
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cUserName: string;
    /**
     * max length: BC_MAX_PWD_LEN - 1
     */
    cPassword: string;
}
export interface BC_BOOT_PWD_STATE {
    bPwdState: boolean;
}
export interface BC_UPGRADE_FILE_INFO {
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cSourceFileName: string;
    iUpgradeConfig: string;
    uFileSize: number;
    uCurSize: number;
}
export interface BC_FTP_CFG {
    /**
     * max length: BC_MAX_ADDR_LEN - 1
     */
    cServer: string;
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    cUsername: string;
    /**
     * max length: BC_MAX_PWD_LEN - 1
     */
    cPassword: string;
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cRemotedir: string;
    bAnonymous: boolean;
    iPort: number;
    /**
     * Unit:MB
     */
    iwFilelen: number;
    /**
     * 1:support ftp test
     */
    bSupportTest: boolean;
    iSupportStreamType: number;
    /**
     * 0:pic and mainStream video;
     * 1:pic and subStream video;
     * 2:pic and extension stream video;
     * 3:only picture
     */
    iStreamType: number;
    iSupportInterval: number;
    /**
     * seconds
     */
    iInterval: number;
    iSupportTransportMode: number;
    eTransportMode: T.BC_FTP_TRANSPORT_MODE_E;
}
export interface BC_CONFIG_FILE_INFO {
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cSourceFileName: string;
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cSaveFileName: string;
    uFileSize: number;
    uCurSize: number;
}
export interface BC_PUSH_INFO {
    /**
     * max length: 511
     */
    cToken: string;
    /**
     * max length: 127
     */
    cPhoneType: string;
    /**
     * max length: 127
     */
    cClientid: string;
    /**
     * max length: 127
     */
    cRes: string;
}
export interface BC_RTMP_OPT_ITEM {
    channelId: number;
    streamType: T.BC_STREAM_TYPE_E;
}
export interface BC_RTMP_OPT {
    size: number;
    /**
     * max length: BC_MAX_CHANNEL
     */
    items: BC_RTMP_OPT_ITEM;
}
export interface BC_ENC_INFO {
    eResolution: T.BC_RESOLUTION_E;
    iWidth: number;
    iHigh: number;
}
export interface BC_ENC_CFG {
    bAudio: number;
    eResolution: T.BC_RESOLUTION_E;
    iWidth: number;
    iHeight: number;
    /**
     * 264,mpeg4,mpeg2
     */
    eEncType: T.BC_ENC_TYPE_E;
    lFrameRate: number;
    lBitRate: number;
    eEncProfile: T.BC_ENCODER_PROFILE_E;
}
export interface BC_CHN_ENC_INFO {
    bNoTrans: boolean;
    bRestartWhenResChanged: boolean;
    /**
     * valid stream types
     */
    lStreamTypes: number;
    mainstream: BC_ENC_CFG;
    substream: BC_ENC_CFG;
    extendstream: BC_ENC_CFG;
}
export interface BC_OSD {
    /**
     * FALSE:disable, TRUE:enable
     */
    bShow: boolean;
    iX: number;
    iY: number;
}
export interface BC_OSD_CFG {
    isCopyTo: boolean;
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    byChannelName: string;
    channelName: BC_OSD;
    time: BC_OSD;
    eSize: T.BC_OSD_SIZE_E;
    elanguage: T.BC_LANGUAGE_E;
    iBgColor: number;
    iWaterMark: number;
}
export interface BC_CAMERA_CFG {
    eCameraMode: T.BC_CAMERA_MODE_E;
}
export interface BC_COVER_AREA {
    iX: number;
    iY: number;
    iWidth: number;
    iHeight: number;
}
export interface BC_COVER_CFG {
    /**
     * FALSE:disable, TRUE:enable
     */
    bEnable: boolean;
    /**
     * length: BC_MAX_COVER_AREA_NUM
     */
    area: BC_COVER_AREA[];
    /**
     * max length: 63
     */
    byRes: string;
}
export interface BC_RECORD_SCHEDULE_CFG {
    bEnable: boolean;
    iInvalid: number;
    iTimeTable: number[];
}
export interface BC_PTZ_DECODER {
    /**
     * 0:CS8 1:CS7 2:CS6 3:CS5
     */
    iDataBit: number;
    /**
     * 0:1bit 1:2bit
     */
    iStopBit: number;
    /**
     * 0~255  default:channel+1
     */
    iDecoderAddress: number;
    /**
     * 0:1200 1:2400 2:4800 3:9600
     */
    iBaudRate: number;
    eParity: T.BC_PARITY_TYPE_E;
    eFlowcontrol: T.BC_FLOWCONTROL_TYPE_E;
    eDecoderType: T.BC_DECODE_TYPE_E;
    /**
     * 0-PTZ_PELCO_D,1-PTZ_PELCO_P,2-PTZ_PELCO
     */
    iSupportPELCO_C: number;
    /**
     * preset point status
     * length: 256
     */
    cPreset: number[];
    /**
     * cruise point status
     * length: 256
     */
    cCruise: number[];
    /**
     * unknown use??? track point status
     * length: 256
     */
    cTrack: number[];
}
export interface BC_SENSITIVITY_INFO {
    /**
     * begin time: hour
     */
    byBeginHour: Hour;
    /**
     * begin time: minute
     */
    byBeginMinute: Minute;
    /**
     * endtime: hour
     */
    byEndHour: Hour;
    /**
     * endtime: minute
     */
    byEndMinute: Minute;
    /**
     * 1 ~ 50
     */
    iSensitivity: number;
}
export interface BC_MOTION_CFG {
    isCopyTo: boolean;
    /**
     * FALSE: disable, TRUE:enable
     */
    bEnable: boolean;
    /**
     * video image width, max:96
     */
    iWidth: number;
    /**
     * video image hight, max:64
     */
    iHeight: number;
    /**
     * 1: set to motion, 0: not set
     * length: 64 * 96
     */
    bMotionScope: boolean[];
    /**
     * length: BC_MAX_MOTION_SENS_NUM
     */
    sensitivityInfo: BC_SENSITIVITY_INFO[];
    alarmOut: BC_ALARM_OUT;
    /**
     * 0: not set, 1:set
     * length: BC_MAX_CHANNEL
     */
    byRelRecordChannel: number[];
    iInvalid: number;
    iTimeTable: number[];
    iUsePir: number;
}
export interface BC_VILOST_CFG {
    /**
     * 0:disable, 1:enable
     */
    bEnable: boolean;
    alarmOut: BC_ALARM_OUT;
    iInvalid: number;
    iTimeTable: number[];
}
export interface BC_PRESET {
    /**
     * if set ptz name only, pls set cmd to -1
     */
    iPtzCmd: number;
    iPresetId: number;
    /**
     * if no use "invalid" should be set
     * max length: BC_MAX_NAME_LEN - 1
     */
    name: string;
}
export interface BC_PTZ_PRESETS {
    iChannelId: number;
    iSize: number;
    /**
     * max length: BC_MAX_POS_NUM
     */
    preset: BC_PRESET[];
}
export interface BC_CRUISE {
    iValid: number;
    iStarting: number;
    iPatrolId: number;
    /**
     * max length: BC_MAX_KEY_POS
     */
    iPresetId: number[];
    /**
     * max length: BC_MAX_KEY_POS
     */
    iTime: number[];
    /**
     * max length: BC_MAX_KEY_POS
     */
    iSpeed: number[];
    /**
     * max length: BC_MAX_NAME_LEN - 1
     */
    name: string;
}
export interface BC_PTZ_CRUISES {
    iChannel: number;
    iSize: number;
    /**
     * max length: BC_MAX_CRUISE_NUM
     */
    cruise: BC_CRUISE[];
}
export interface BC_AREA_CTRL_VALUE {
    lDefMin: number;
    lDefMax: number;
    lCurMin: number;
    lCurMax: number;
}
export interface BC_LINE_CTRL_VALUE {
    lMin: number;
    lMax: number;
    lCur: number;
}
export interface BC_ISP_CFG {
    flag: number;
    /**
     * 0~BC_MAX_CHANNEL
     */
    lChannel: number;
    /**
     * 0~0xff, default 0x80
     */
    lBright: number;
    /**
     * 0~0xff, default 0x80
     */
    lContrast: number;
    /**
     * 0~0xff, default 0x80
     */
    lSaturation: number;
    /**
     * 0~0xff, default 0x80
     */
    lHue: number;
    /**
     * 0~0xff, default 0x80
     */
    lSharpen: number;
    /**
     * FALSE means the following member is invalid
     */
    bSupportAdvanced: boolean;
    /**
     * Anti flash
     */
    eAntiflick: T.BC_ANTIFLICK_TYPE_E;
    /**
     * exposure type
     */
    eExpType: T.BC_EXPOSURE_TYPE_E;
    /**
     * gain control, 1~100, default 1~20
     */
    gainCtl: BC_AREA_CTRL_VALUE;
    /**
     * Electronic shutter control, 2~40, default 2~40
     */
    shutterCtl: BC_AREA_CTRL_VALUE;
    /**
     * shutter adjust
     */
    eShutterAjust: T.BC_SHUTTER_AJUST_E;
    /**
     * contextual model
     */
    eScencMode: T.BC_AWB_SCENC_MODE_E;
    lSizeOfScencModes: number;
    /**
     * length: 8
     * elemnt: T.BC_AWB_SCENC_MODE_E
     */
    scencModeList: number[];
    /**
     * red gain, 0~100, default 50
     */
    redGain: BC_LINE_CTRL_VALUE;
    /**
     * blue gain, 0~100, default 50
     */
    blueGain: BC_LINE_CTRL_VALUE;
    /**
     * day/night mode
     */
    eDayNightMode: T.BC_DAY_NIGHT_MODE_E;
    /**
     * ir-cut-filter
     */
    eIRCut: T.BC_IR_CUT_TYPE_E;
    lExposureRes: number;
    lExposureLevel: number;
    lExposureCur: number;
    /**
     * Backlight compensation mode
     */
    eBLCType: T.BC_BLC_MODE_E;
    /**
     * Wide dynamic range, 0~0xff,default:0x80
     */
    DRCTarget: BC_LINE_CTRL_VALUE;
    /**
     * Backlight intensity,0~0xff,default:0x80
     */
    BLCTarget: BC_LINE_CTRL_VALUE;
    /**
     * FALSE:diable, TRUE:enable
     */
    bMirror: boolean;
    /**
     * FALSE:diable, TRUE:enable
     */
    bFlip: boolean;
    /**
     * See the comment of this structure
     */
    lDefault: number;
    /**
     * 0~100, default 10
     */
    lGainAjust: number;
    lAutoIrisState: number;
    AutoirisValue: BC_LINE_CTRL_VALUE;
    lFocusAutoiris: number;
    lSupportAutoiris: number;
    eNR3D: T.BC_ISP_NR3D_E;
    lSupportNR3D: number;
    /**
     * 0:old, 1:new_1
     */
    lIspVersion: number;
}
export interface BC_DAY_NIGHT_MODE_CFG {
    eMode: T.BC_DAY_NIGHT_MODE_E;
}
export interface BC_LED_LIGHT_STATE {
    eLEDState: T.BC_LED_STATE_E;
    /**
     * 1:auto,close,open. 2:auto,close
     */
    iVersion: number;
    eIndicatorLight: T.BC_LIGHT_STATE_E;
}
export interface BC_FTP_TASK {
    bEnable: boolean;
    iInvalid: number;
    iTimeTable: number[];
}
export interface BC_EMAIL_TASK {
    bEnable: boolean;
    iInvalid: number;
    iTimeTable: number[];
}
export interface BC_PUSH_TASK {
    bEnable: boolean;
    iInvalid: number;
    iTimeTable: number[];
    iPushVersion: number;
}
export interface BC_AUDIO_TASK {
    bEnable: boolean;
    iInvalid: number;
    iTimeTable: number[];
}
export interface BC_SNAP_INFO {
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cSaveFileName: string;
    uFileSize: number;
    uCurSize: number;
}
export interface BC_PTZ_AUTO_FOCUS {
    iDisable: number;
}
export interface BC_CROP_CFG {
    iTopLeftX: number;
    iTopLeftY: number;
    iCropWidth: number;
    iCropHeight: number;
    iMainStreamWidth: number;
    iMainStreamHeight: number;
    iSubStreamWidth: number;
    iSubStreamHeight: number;
    /**
     * bit0: 1 crop width and height cfg
     */
    iVersion: number;
}
export interface BC_CROP_SNAP_INFO {
    iWidth: number;
    iHeight: number;
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cSaveFileName: string;
    uFileSize: number;
    uCurSize: number;
}
export interface BC_BATTERY_INFO {
    iChannel: number;
    eBatteryType: T.BC_BATTERY_TYPE_E;
    iVoltage: number;
    iCurrent: number;
    iTemperature: number;
    iBatteryPercent: number;
    iLowPowerFlag: number;
    eChargeStatus: T.BC_CHARGE_STATUS_E;
    eAdapterStatus: T.BC_ADAPTER_STATUS_E;
    iExceptionCode: number;
    adcOfPartA: number;
    adcOfPartB: number;
}
export interface BC_BATTERY_ANALYSIS {
    iChannel: number;
    iDays: number;
    /**
     * 0% ~ 100%
     * length: 30,
     */
    iBatRemain: number[];
}
export interface BC_RINGTONE_FILE_INFO {
    iChannel: number;
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cSourceFileName: string;
    /**
     * max length: BC_MAX_FILE_LEN - 1
     */
    cAdpcmFileName: string;
    iFileSize: number;
    iCurSize: number;
}
export interface BC_RINGTONE_CFG {
    iChannel: number;
    /**
     * default duration of ring down
     */
    iTimeout: number;
    /**
     * 0:use default ringtone, 1:use custom ringtone
     */
    iRingtoneSelect: number;
}
export interface BC_MANUAL_RING_DOWN {
    iChannel: number;
    eRingMode: T.BC_RING_DOWN_MODE_E;
    iDuration: number;
    iTimes: number;
    iOnOff: number;
}
export interface BC_MUTE_ALARM_AUDIO {
    iChannel: number;
    /**
     * 0:enable alarm audio  1:mute alarm audio
     */
    iMute: number;
}
export interface BC_AUDIO_CONFIG {
    eAudioType: T.BC_AUDIO_TYPE_E;
    iSampleRate: number;
    iSamplePrecision: number;
    /**
     * length of stream data which encoded from sample data.
     */
    iLengthPerEncoder: number;
    eSoundTrack: T.BC_SOUND_TRACK_E;
}
export interface BC_AUDIO_CONFIG_TABLE {
    iSize: number;
    /**
     * max length: 32
     */
    configs: BC_AUDIO_CONFIG[];
}
export interface BC_RINGTONE_ABILITY {
    iChannel: number;
    /**
     * ringtone file max size (KB)
     */
    iMaxCapacity: number;
    audioConfigs: BC_AUDIO_CONFIG_TABLE;
}
export interface BC_P2P_DEVICE_INFO {
    /**
     * max length: BC_MAX_UID_LEN - 1
     */
    uid: string;
    /**
     * max length: 15
     */
    fm_ver: string;
    /**
     * 0: not support. 1:dry battery, 2:charge battery
     */
    batteryType: number;
    /**
     * 0: not support. 1: support qr code
     */
    QRCodeType: number;
    /**
     * product name: "KEEN", "CARD", ...
     * max length: 15
     */
    productName: string;
    productType: T.BC_SONG_P2P_TYPE_E;
}
export interface BC_P2P_DEBUG_INFO {
    v6_check: number;
    /**
     * max length: 47
     */
    server_addr: string;
    /**
     * max length: 15
     */
    ver: string;
}
export interface BC_P2P_UID_INFO {
    /**
     * max length: BC_MAX_UID_LEN - 1
     */
    uid: string;
}
export interface BC_P2P_DETAIL_INFO {
    /**
     * max length: 1023
     */
    content: string;
}
export interface BC_DIAGNOSE_LOG {
    /**
     * max length: BC_DIAGNOSE_LOG_STRING_MAX_LENGTH - 1
     */
    content: string;
}
export interface BC_DIAGNOSE_LOGS_LIST {
    /**
     * length: BC_DIAGNOSE_LOG_MAX_SIZE
     */
    logs: BC_DIAGNOSE_LOG[];
    sizeOfLogs: number;
}
