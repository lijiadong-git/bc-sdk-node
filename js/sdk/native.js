"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi = require('ffi');
const _T = require("./_struct");
const MFFI = ffi.Library(__dirname + '/../../native/libs/libBCSDKWrapper', {
    /**
     * Device interfaces
     */
    BCSDK_PTZStop: ['int', ['int', 'int']],
    BCSDK_AddDevice: ['int', [_T.P_DEVICE_LOGIN_DESC, _T.P_DEVICE_CALLBACK_DESC, _T.pointer('int')]],
    BCSDK_RemoveDevice: ['int', ['int']],
    BCSDK_ModifyDevice: ['int', ['int', _T.P_DEVICE_LOGIN_DESC, _T.P_DEVICE_CALLBACK_DESC, _T.pointer('int')]],
    BCSDK_DeviceForceOpen: ['int', ['int', 'bool']],
    BCSDK_GetDeviceState: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetDeviceLoginMessage: ['int', ['int', _T.P_DEVICE_LOGIN_DESC]],
    BCSDK_LiveOpen: ['int', ['int', 'int', 'int', ffi.Function('void', ['int', 'int', _T.RENDER_FRAME_DESC, _T.pointer('void')]), _T.pointer('void')]],
    BCSDK_GetDeviceChannelCount: ['int', ['int', _T.pointer('int')]]
    /**
     * Abilities interfaces
     */
    ,
    BCSDK_SetAbilityAbout: ['int', ['int', _T.P_DEVICE_ABILITY_ABOUT]],
    BCSDK_GetDeviceType: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetDeviceNorm: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetSupportRF: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportPush: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportReplay: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportReplaySubStream: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportTimingRecord: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportReplaySpeed: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportAlarmVideoMark: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportPolling: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportAutoNtp: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportWiFi: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportWiFiCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportWiFiTest: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportInitAP: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportFTP: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportFTPTest: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportFTPSubStream: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportFTPExtensionStream: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRTSP: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRTMP: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportONVIF: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportP2PEnable: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportP2PDomainName: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportP2PPort: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportSeek: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportIFramePreview: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportIFrameReplay: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportHDD: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportSDCard: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportTimeFormat: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportEmailTask: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportEmailNickName: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportPushTask: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportCloud: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportCloudCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportCloudSchedule: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportUpgrade: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportOutput: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportVideoLost: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportPTZSetting: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportPerformance: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportAutoUpdate: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportReboot: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportVideoStandard: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportUpnp: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportExceptionCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportLogSearch: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportDDNSCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportMediaPort: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportHttpPort: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportHttpsPort: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportNtp: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRecSchedule: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportEmailInterval: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRecSettings: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRecOverWriteCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRecPreRecordCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRecPackDurationCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRecRecordExtensionCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRecRecordExtensionTimeList: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetIsWifiIPC: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetIsIPC: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetIsNVR: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetIsBASE: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetHasAdminPermission: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetUserVersion: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetPTZMode: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetAlarmInPortCount: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetAlarmOutPortCount: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetDdnsVersion: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetAnalogChannelCount: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetPushType: ['int', ['int', _T.pointer('int')]]
    // rfVersion:   0 -> no support;
    //              1 -> old,suppport 3 buttons;
    //              2 -> support RF Remote Config;
    //              3 -> support 4 buttons;
    //              4 -> support RF Remote Config with Sensitivity
    ,
    BCSDK_GetRfVersion: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetRfNumbers: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetSupportSimModule: ['int', ['int', _T.pointer('bool')]]
    /**
     * MARK: Channel abilities
     */
    //, BCSDK_GetEncodeTable(H_BC_DEVICE hDevice, int channel, BC_ENC_PROFILE_TABLE *encTable);
    ,
    BCSDK_GetIsVideoLoss: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportCameraMode: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportExtenStream: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportExtenStreamCfg: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportLEDControl: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIndicatorLight: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportPtzSpeed: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportPtzCruise: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportPtzPreset: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportPt: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAutoPt: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportZoomAndFocus: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAudio: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAutoFocus: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportCropSnap: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportTalk: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportMD: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportMDWithPIR: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportShelterCfg: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetIsBattery: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetIsCharge: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportBatAnalysis: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAudioAlarmEnable: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAudioAlarmSchedule: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportManualRingDown: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportCustomRingtone: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportOsdPadding: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportOsdWaterMark: ['int', ['int', 'int', _T.pointer('bool')]]
    // Isp Cfg
    ,
    BCSDK_GetSupportIspDayNight: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspAntiFlick: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspExposureMode: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspWhiteBalance: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspBacklight: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIsp3dnr: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspMirror: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspFlip: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspBright: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspContrast: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspSatruation: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspHue: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportIspSharpen: ['int', ['int', 'int', _T.pointer('bool')]]
    //
    // base version: base device version, 0: not base device
    //
    // base rfVersion:   0 -> no support;
    //              1 -> old,suppport 3 buttons;
    //              2 -> support RF Remote Config;
    //              3 -> support 4 buttons;
    //              4 -> support RF Remote Config with Sensitivity
    ,
    BCSDK_GetBaseVersion: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetBaseRfVersion: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_GetBaseRfNumbers: ['int', ['int', 'int', _T.pointer('int')]]
});
class NativeDelegate {
    constructor() {
        /****************************************************************
         *
         *  Methods for Device
         *
         ****************************************************************/
        this.BCSDK_PTZStop = MFFI.BCSDK_PTZStop;
        this.BCSDK_GetDeviceType = MFFI.BCSDK_GetDeviceType;
        this.BCSDK_AddDevice = MFFI.BCSDK_AddDevice;
        this.BCSDK_RemoveDevice = MFFI.BCSDK_RemoveDevice;
        this.BCSDK_ModifyDevice = MFFI.BCSDK_ModifyDevice;
        this.BCSDK_DeviceForceOpen = MFFI.BCSDK_DeviceForceOpen;
        this.BCSDK_GetDeviceState = MFFI.BCSDK_GetDeviceState;
        this.BCSDK_GetDeviceLoginMessage = MFFI.BCSDK_GetDeviceLoginMessage;
        this.BCSDK_LiveOpen = MFFI.BCSDK_LiveOpen;
        this.BCSDK_GetDeviceChannelCount = MFFI.BCSDK_GetDeviceChannelCount;
        /****************************************************************
         *
         *  Methods for Device Abilities
         *
         ****************************************************************/
        this.BCSDK_SetAbilityAbout = MFFI.BCSDK_SetAbilityAbout;
        this.BCSDK_GetDeviceNorm = MFFI.BCSDK_GetDeviceNorm;
        this.BCSDK_GetSupportRF = MFFI.BCSDK_GetSupportRF;
        this.BCSDK_GetSupportPush = MFFI.BCSDK_GetSupportPush;
        this.BCSDK_GetSupportReplay = MFFI.BCSDK_GetSupportReplay;
        this.BCSDK_GetSupportReplaySubStream = MFFI.BCSDK_GetSupportReplaySubStream;
        this.BCSDK_GetSupportTimingRecord = MFFI.BCSDK_GetSupportTimingRecord;
        this.BCSDK_GetSupportReplaySpeed = MFFI.BCSDK_GetSupportReplaySpeed;
        this.BCSDK_GetSupportAlarmVideoMark = MFFI.BCSDK_GetSupportAlarmVideoMark;
        this.BCSDK_GetSupportPolling = MFFI.BCSDK_GetSupportPolling;
        this.BCSDK_GetSupportAutoNtp = MFFI.BCSDK_GetSupportAutoNtp;
        this.BCSDK_GetSupportWiFi = MFFI.BCSDK_GetSupportWiFi;
        this.BCSDK_GetSupportWiFiCfg = MFFI.BCSDK_GetSupportWiFiCfg;
        this.BCSDK_GetSupportWiFiTest = MFFI.BCSDK_GetSupportWiFiTest;
        this.BCSDK_GetSupportInitAP = MFFI.BCSDK_GetSupportInitAP;
        this.BCSDK_GetSupportFTP = MFFI.BCSDK_GetSupportFTP;
        this.BCSDK_GetSupportFTPTest = MFFI.BCSDK_GetSupportFTPTest;
        this.BCSDK_GetSupportFTPSubStream = MFFI.BCSDK_GetSupportFTPSubStream;
        this.BCSDK_GetSupportFTPExtensionStream = MFFI.BCSDK_GetSupportFTPExtensionStream;
        this.BCSDK_GetSupportRTSP = MFFI.BCSDK_GetSupportRTSP;
        this.BCSDK_GetSupportRTMP = MFFI.BCSDK_GetSupportRTMP;
        this.BCSDK_GetSupportONVIF = MFFI.BCSDK_GetSupportONVIF;
        this.BCSDK_GetSupportP2PEnable = MFFI.BCSDK_GetSupportP2PEnable;
        this.BCSDK_GetSupportP2PDomainName = MFFI.BCSDK_GetSupportP2PDomainName;
        this.BCSDK_GetSupportP2PPort = MFFI.BCSDK_GetSupportP2PPort;
        this.BCSDK_GetSupportSeek = MFFI.BCSDK_GetSupportSeek;
        this.BCSDK_GetSupportIFramePreview = MFFI.BCSDK_GetSupportIFramePreview;
        this.BCSDK_GetSupportIFrameReplay = MFFI.BCSDK_GetSupportIFrameReplay;
        this.BCSDK_GetSupportHDD = MFFI.BCSDK_GetSupportHDD;
        this.BCSDK_GetSupportSDCard = MFFI.BCSDK_GetSupportSDCard;
        this.BCSDK_GetSupportTimeFormat = MFFI.BCSDK_GetSupportTimeFormat;
        this.BCSDK_GetSupportEmailTask = MFFI.BCSDK_GetSupportEmailTask;
        this.BCSDK_GetSupportEmailNickName = MFFI.BCSDK_GetSupportEmailNickName;
        this.BCSDK_GetSupportPushTask = MFFI.BCSDK_GetSupportPushTask;
        this.BCSDK_GetSupportCloud = MFFI.BCSDK_GetSupportCloud;
        this.BCSDK_GetSupportCloudCfg = MFFI.BCSDK_GetSupportCloudCfg;
        this.BCSDK_GetSupportCloudSchedule = MFFI.BCSDK_GetSupportCloudSchedule;
        this.BCSDK_GetSupportUpgrade = MFFI.BCSDK_GetSupportUpgrade;
        this.BCSDK_GetSupportOutput = MFFI.BCSDK_GetSupportOutput;
        this.BCSDK_GetSupportVideoLost = MFFI.BCSDK_GetSupportVideoLost;
        this.BCSDK_GetSupportPTZSetting = MFFI.BCSDK_GetSupportPTZSetting;
        this.BCSDK_GetSupportPerformance = MFFI.BCSDK_GetSupportPerformance;
        this.BCSDK_GetSupportAutoUpdate = MFFI.BCSDK_GetSupportAutoUpdate;
        this.BCSDK_GetSupportReboot = MFFI.BCSDK_GetSupportReboot;
        this.BCSDK_GetSupportVideoStandard = MFFI.BCSDK_GetSupportVideoStandard;
        this.BCSDK_GetSupportUpnp = MFFI.BCSDK_GetSupportUpnp;
        this.BCSDK_GetSupportExceptionCfg = MFFI.BCSDK_GetSupportExceptionCfg;
        this.BCSDK_GetSupportLogSearch = MFFI.BCSDK_GetSupportLogSearch;
        this.BCSDK_GetSupportDDNSCfg = MFFI.BCSDK_GetSupportDDNSCfg;
        this.BCSDK_GetSupportMediaPort = MFFI.BCSDK_GetSupportMediaPort;
        this.BCSDK_GetSupportHttpPort = MFFI.BCSDK_GetSupportHttpPort;
        this.BCSDK_GetSupportHttpsPort = MFFI.BCSDK_GetSupportHttpsPort;
        this.BCSDK_GetSupportNtp = MFFI.BCSDK_GetSupportNtp;
        this.BCSDK_GetSupportRecSchedule = MFFI.BCSDK_GetSupportRecSchedule;
        this.BCSDK_GetSupportEmailInterval = MFFI.BCSDK_GetSupportEmailInterval;
        this.BCSDK_GetSupportRecSettings = MFFI.BCSDK_GetSupportRecSettings;
        this.BCSDK_GetSupportRecOverWriteCfg = MFFI.BCSDK_GetSupportRecOverWriteCfg;
        this.BCSDK_GetSupportRecPreRecordCfg = MFFI.BCSDK_GetSupportRecPreRecordCfg;
        this.BCSDK_GetSupportRecPackDurationCfg = MFFI.BCSDK_GetSupportRecPackDurationCfg;
        this.BCSDK_GetSupportRecRecordExtensionCfg = MFFI.BCSDK_GetSupportRecRecordExtensionCfg;
        this.BCSDK_GetSupportRecRecordExtensionTimeList = MFFI.BCSDK_GetSupportRecRecordExtensionTimeList;
        this.BCSDK_GetIsWifiIPC = MFFI.BCSDK_GetIsWifiIPC;
        this.BCSDK_GetIsIPC = MFFI.BCSDK_GetIsIPC;
        this.BCSDK_GetIsNVR = MFFI.BCSDK_GetIsNVR;
        this.BCSDK_GetIsBASE = MFFI.BCSDK_GetIsBASE;
        this.BCSDK_GetHasAdminPermission = MFFI.BCSDK_GetHasAdminPermission;
        this.BCSDK_GetUserVersion = MFFI.BCSDK_GetUserVersion;
        this.BCSDK_GetPTZMode = MFFI.BCSDK_GetPTZMode;
        this.BCSDK_GetAlarmInPortCount = MFFI.BCSDK_GetAlarmInPortCount;
        this.BCSDK_GetAlarmOutPortCount = MFFI.BCSDK_GetAlarmOutPortCount;
        this.BCSDK_GetDdnsVersion = MFFI.BCSDK_GetDdnsVersion;
        this.BCSDK_GetAnalogChannelCount = MFFI.BCSDK_GetAnalogChannelCount;
        this.BCSDK_GetPushType = MFFI.BCSDK_GetPushType;
        this.BCSDK_GetRfVersion = MFFI.BCSDK_GetRfVersion;
        this.BCSDK_GetRfNumbers = MFFI.BCSDK_GetRfNumbers;
        this.BCSDK_GetSupportSimModule = MFFI.BCSDK_GetSupportSimModule;
        /****************************************************************
         *
         *  Methods for Channel Abilities
         *
         ****************************************************************/
        //, BCSDK_GetEncodeTable(H_BC_DEVICE hDevice, int channel, BC_ENC_PROFILE_TABLE *encTable);
        this.BCSDK_GetIsVideoLoss = MFFI.BCSDK_GetIsVideoLoss;
        this.BCSDK_GetSupportCameraMode = MFFI.BCSDK_GetSupportCameraMode;
        this.BCSDK_GetSupportExtenStream = MFFI.BCSDK_GetSupportExtenStream;
        this.BCSDK_GetSupportExtenStreamCfg = MFFI.BCSDK_GetSupportExtenStreamCfg;
        this.BCSDK_GetSupportLEDControl = MFFI.BCSDK_GetSupportLEDControl;
        this.BCSDK_GetSupportIndicatorLight = MFFI.BCSDK_GetSupportIndicatorLight;
        this.BCSDK_GetSupportPtzSpeed = MFFI.BCSDK_GetSupportPtzSpeed;
        this.BCSDK_GetSupportPtzCruise = MFFI.BCSDK_GetSupportPtzCruise;
        this.BCSDK_GetSupportPtzPreset = MFFI.BCSDK_GetSupportPtzPreset;
        this.BCSDK_GetSupportPt = MFFI.BCSDK_GetSupportPt;
        this.BCSDK_GetSupportAutoPt = MFFI.BCSDK_GetSupportAutoPt;
        this.BCSDK_GetSupportZoomAndFocus = MFFI.BCSDK_GetSupportZoomAndFocus;
        this.BCSDK_GetSupportAudio = MFFI.BCSDK_GetSupportAudio;
        this.BCSDK_GetSupportAutoFocus = MFFI.BCSDK_GetSupportAutoFocus;
        this.BCSDK_GetSupportCropSnap = MFFI.BCSDK_GetSupportCropSnap;
        this.BCSDK_GetSupportTalk = MFFI.BCSDK_GetSupportTalk;
        this.BCSDK_GetSupportMD = MFFI.BCSDK_GetSupportMD;
        this.BCSDK_GetSupportMDWithPIR = MFFI.BCSDK_GetSupportMDWithPIR;
        this.BCSDK_GetSupportShelterCfg = MFFI.BCSDK_GetSupportShelterCfg;
        this.BCSDK_GetIsBattery = MFFI.BCSDK_GetIsBattery;
        this.BCSDK_GetIsCharge = MFFI.BCSDK_GetIsCharge;
        this.BCSDK_GetSupportBatAnalysis = MFFI.BCSDK_GetSupportBatAnalysis;
        this.BCSDK_GetSupportAudioAlarmEnable = MFFI.BCSDK_GetSupportAudioAlarmEnable;
        this.BCSDK_GetSupportAudioAlarmSchedule = MFFI.BCSDK_GetSupportAudioAlarmSchedule;
        this.BCSDK_GetSupportManualRingDown = MFFI.BCSDK_GetSupportManualRingDown;
        this.BCSDK_GetSupportCustomRingtone = MFFI.BCSDK_GetSupportCustomRingtone;
        this.BCSDK_GetSupportOsdPadding = MFFI.BCSDK_GetSupportOsdPadding;
        this.BCSDK_GetSupportOsdWaterMark = MFFI.BCSDK_GetSupportOsdWaterMark;
        this.BCSDK_GetSupportIspDayNight = MFFI.BCSDK_GetSupportIspDayNight;
        this.BCSDK_GetSupportIspAntiFlick = MFFI.BCSDK_GetSupportIspAntiFlick;
        this.BCSDK_GetSupportIspExposureMode = MFFI.BCSDK_GetSupportIspExposureMode;
        this.BCSDK_GetSupportIspWhiteBalance = MFFI.BCSDK_GetSupportIspWhiteBalance;
        this.BCSDK_GetSupportIspBacklight = MFFI.BCSDK_GetSupportIspBacklight;
        this.BCSDK_GetSupportIsp3dnr = MFFI.BCSDK_GetSupportIsp3dnr;
        this.BCSDK_GetSupportIspMirror = MFFI.BCSDK_GetSupportIspMirror;
        this.BCSDK_GetSupportIspFlip = MFFI.BCSDK_GetSupportIspFlip;
        this.BCSDK_GetSupportIspBright = MFFI.BCSDK_GetSupportIspBright;
        this.BCSDK_GetSupportIspContrast = MFFI.BCSDK_GetSupportIspContrast;
        this.BCSDK_GetSupportIspSatruation = MFFI.BCSDK_GetSupportIspSatruation;
        this.BCSDK_GetSupportIspHue = MFFI.BCSDK_GetSupportIspHue;
        this.BCSDK_GetSupportIspSharpen = MFFI.BCSDK_GetSupportIspSharpen;
        this.BCSDK_GetBaseVersion = MFFI.BCSDK_GetBaseVersion;
        this.BCSDK_GetBaseRfVersion = MFFI.BCSDK_GetBaseRfVersion;
        this.BCSDK_GetBaseRfNumbers = MFFI.BCSDK_GetBaseRfNumbers;
    }
    static instance() {
        return NativeDelegate.singleton;
    }
}
NativeDelegate.singleton = new NativeDelegate();
exports.native = NativeDelegate.instance();
//# sourceMappingURL=native.js.map