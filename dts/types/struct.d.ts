import * as T from './types';
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
    uidPort: number;
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
    iMonth: number;
    iDay: number;
    iHour: number;
    iMinute: number;
    iSecond: number;
}
export interface BC_FIND_REC_FILE {
    iChannel: number;
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
