"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi = require('ffi');
const path = require('path');
const bindings = require('bindings');
const _T = require("./_struct");
const folder = path.dirname(bindings.getFileName());
if (process.platform === "win32") {
    ffi.Library(path.join(folder, 'BCP2P_API'));
    ffi.Library(path.join(folder, 'IOTCAPIs'));
    ffi.Library(path.join(folder, 'RDTApis'));
    ffi.Library(path.join(folder, 'D3DX9_42'));
    ffi.Library(path.join(folder, 'avutil-55'));
    ffi.Library(path.join(folder, 'swresample-2'));
    ffi.Library(path.join(folder, 'swscale-4'));
    ffi.Library(path.join(folder, 'avcodec-57'));
    ffi.Library(path.join(folder, 'avformat-57'));
}
const MFFI = ffi.Library(path.join(folder, 'libBCSDKWrapper'), {
    /************************************************************************
     *
     * Device interfaces
     *
     ************************************************************************/
    BCSDK_AddDevice: ['int', [_T.P_DEVICE_LOGIN_DESC, _T.P_DEVICE_CALLBACK_DESC, _T.pointer('int')]],
    BCSDK_RemoveDevice: ['int', ['int']],
    BCSDK_RemoveAllDevices: ['int', ['void']],
    BCSDK_ModifyDevice: ['int', ['int', _T.P_DEVICE_LOGIN_DESC, _T.P_DEVICE_CALLBACK_DESC, _T.pointer('int')]],
    BCSDK_GetDeviceCount: ['int', ['void']],
    BCSDK_GetDevice: ['int', ['int']],
    BCSDK_SetIsInBackground: ['int', ['bool']],
    BCSDK_SetNetworkType: ['int', ['int']],
    BCSDK_SetDeviceNeedAutoOpen: ['int', ['int', 'bool']],
    BCSDK_SetDeviceMaxReconnectCount: ['int', ['int', 'int']],
    BCSDK_StartDevicesAutoOpen: ['int', ['int']],
    BCSDK_StopDevicesAutoOpen: ['int', ['bool']],
    BCSDK_DeviceForceOpen: ['int', ['int', 'bool']],
    BCSDK_DeviceForceClose: ['int', ['int', 'bool']],
    BCSDK_GetDeviceChannelCount: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetDeviceLoginMessage: ['int', ['int', _T.P_DEVICE_LOGIN_DESC]],
    BCSDK_GetDeviceState: ['int', ['int', _T.pointer('int')]],
    BCSDK_SetDeviceExtension: ['int', ['int', _T.pointer('void')]],
    BCSDK_GetDeviceExtension: ['int', ['int', _T.pointer(_T.pointer('void'))]]
    /************************************************************************
     *
     * Abilities interfaces
     *
     ************************************************************************/
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
    BCSDK_GetPushType: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetRfVersion: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetRfNumbers: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetSupportSimModule: ['int', ['int', _T.pointer('bool')]]
    /************************************************************************
     * MARK: Channel abilities
     ************************************************************************/
    ,
    BCSDK_GetEncodeTable: ['int', ['int', 'int', _T.P_BC_ENC_PROFILE_TABLE]],
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
    BCSDK_GetSupportOsdWaterMark: ['int', ['int', 'int', _T.pointer('bool')]],
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
    BCSDK_GetSupportIspSharpen: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetBaseVersion: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetBaseRfVersion: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_GetBaseRfNumbers: ['int', ['int', 'int', _T.pointer('int')]]
    /************************************************************************
     *
     * Live interfaces
     *
     ************************************************************************/
    ,
    BCSDK_GetIsLiveOpen: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetLiveStreamType: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_LiveOpen: ['int', ['int', 'int', 'int', _T.renderCallbackFunc, _T.pointer('void')]],
    BCSDK_LiveClose: ['int', ['int', 'int']],
    BCSDK_LiveMute: ['int', ['int', 'int', 'bool']]
    /************************************************************************
     *
     * PTZ interfaces
     *
     ************************************************************************/
    ,
    BCSDK_PTZStop: ['int', ['int', 'int']],
    BCSDK_PTZUp: ['int', ['int', 'int', 'int']],
    BCSDK_PTZDown: ['int', ['int', 'int', 'int']],
    BCSDK_PTZLeft: ['int', ['int', 'int', 'int']],
    BCSDK_PTZRight: ['int', ['int', 'int', 'int']],
    BCSDK_PTZUpLeft: ['int', ['int', 'int', 'int']],
    BCSDK_PTZUpRight: ['int', ['int', 'int', 'int']],
    BCSDK_PTZDownLeft: ['int', ['int', 'int', 'int']],
    BCSDK_PTZDownRight: ['int', ['int', 'int', 'int']],
    BCSDK_PTZZoomIn: ['int', ['int', 'int', 'int']],
    BCSDK_PTZZoomOut: ['int', ['int', 'int', 'int']],
    BCSDK_PTZFocusFar: ['int', ['int', 'int', 'int']],
    BCSDK_PTZFocusNear: ['int', ['int', 'int', 'int']],
    BCSDK_PTZIrisOpen: ['int', ['int', 'int', 'int']],
    BCSDK_PTZIrisClose: ['int', ['int', 'int', 'int']],
    BCSDK_PTZScanAuto: ['int', ['int', 'int', 'int']]
    /************************************************************************
     *
     * Playback interfaces
     *
     ************************************************************************/
    ,
    BCSDK_RecordFilesSearch: ['int', ['int', 'int', _T.BC_TIME, _T.BC_TIME, 'int', 'int', 'int']],
    BCSDK_AlarmVideosSearch: ['int', ['int', 'int', _T.BC_TIME, _T.BC_TIME, 'int', 'int']],
    BCSDK_PlaybackSeek: ['int', ['int', _T.P_BC_TIME]],
    BCSDK_GetPlaybackState: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_GetIsPlaybackOpen: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetPlaybackStreamType: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_PlaybackOpen: ['int', ['int', 'int', 'string', 'string', 'bool', 'float', _T.renderCallbackFunc, _T.pointer('void')]],
    BCSDK_PlaybackClose: ['int', ['int', 'int']],
    BCSDK_PlaybackStart: ['int', ['int', 'int']],
    BCSDK_PlaybackPause: ['int', ['int', 'int']],
    BCSDK_PlaybackStop: ['int', ['int', 'int']],
    BCSDK_PlaybackStep: ['int', ['int', 'int']],
    BCSDK_PlaybackMute: ['int', ['int', 'int', 'bool']]
});
class NativeDelegate {
    constructor() {
        /****************************************************************
         *
         *  Methods for Device
         *
         ****************************************************************/
        this.BCSDK_AddDevice = MFFI.BCSDK_AddDevice;
        this.BCSDK_RemoveDevice = MFFI.BCSDK_RemoveDevice;
        this.BCSDK_RemoveAllDevices = MFFI.BCSDK_RemoveAllDevices;
        this.BCSDK_ModifyDevice = MFFI.BCSDK_ModifyDevice;
        this.BCSDK_GetDeviceCount = MFFI.BCSDK_GetDeviceCount;
        this.BCSDK_GetDevice = MFFI.BCSDK_GetDevice;
        this.BCSDK_SetIsInBackground = MFFI.BCSDK_SetIsInBackground;
        this.BCSDK_SetNetworkType = MFFI.BCSDK_SetNetworkType;
        this.BCSDK_SetDeviceNeedAutoOpen = MFFI.BCSDK_SetDeviceNeedAutoOpen;
        this.BCSDK_SetDeviceMaxReconnectCount = MFFI.BCSDK_SetDeviceMaxReconnectCount;
        this.BCSDK_StartDevicesAutoOpen = MFFI.BCSDK_StartDevicesAutoOpen;
        this.BCSDK_StopDevicesAutoOpen = MFFI.BCSDK_StopDevicesAutoOpen;
        this.BCSDK_DeviceForceOpen = MFFI.BCSDK_DeviceForceOpen;
        this.BCSDK_DeviceForceClose = MFFI.BCSDK_DeviceForceClose;
        this.BCSDK_GetDeviceChannelCount = MFFI.BCSDK_GetDeviceChannelCount;
        this.BCSDK_GetDeviceLoginMessage = MFFI.BCSDK_GetDeviceLoginMessage;
        this.BCSDK_GetDeviceState = MFFI.BCSDK_GetDeviceState;
        this.BCSDK_SetDeviceExtension = MFFI.BCSDK_SetDeviceExtension;
        this.BCSDK_GetDeviceExtension = MFFI.BCSDK_GetDeviceExtension;
        /****************************************************************
         *
         *  Methods for Device Abilities
         *
         ****************************************************************/
        this.BCSDK_SetAbilityAbout = MFFI.BCSDK_SetAbilityAbout;
        this.BCSDK_GetDeviceType = MFFI.BCSDK_GetDeviceType;
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
         *  Methods for Channel Abilities
         ****************************************************************/
        this.BCSDK_GetEncodeTable = MFFI.BCSDK_GetEncodeTable;
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
        /****************************************************************
         *
         *  Methods for Live
         *
         ****************************************************************/
        this.BCSDK_GetLiveStreamType = MFFI.BCSDK_GetLiveStreamType;
        this.BCSDK_LiveOpen = MFFI.BCSDK_LiveOpen;
        this.BCSDK_GetIsLiveOpen = MFFI.BCSDK_GetIsLiveOpen;
        this.BCSDK_LiveClose = MFFI.BCSDK_LiveClose;
        this.BCSDK_LiveMute = MFFI.BCSDK_LiveMute;
        /****************************************************************
         *
         *  Methods for PTZ
         *
         ****************************************************************/
        this.BCSDK_PTZStop = MFFI.BCSDK_PTZStop;
        this.BCSDK_PTZUp = MFFI.BCSDK_PTZUp;
        this.BCSDK_PTZDown = MFFI.BCSDK_PTZDown;
        this.BCSDK_PTZLeft = MFFI.BCSDK_PTZLeft;
        this.BCSDK_PTZRight = MFFI.BCSDK_PTZRight;
        this.BCSDK_PTZUpLeft = MFFI.BCSDK_PTZUpLeft;
        this.BCSDK_PTZUpRight = MFFI.BCSDK_PTZUpRight;
        this.BCSDK_PTZDownLeft = MFFI.BCSDK_PTZDownLeft;
        this.BCSDK_PTZDownRight = MFFI.BCSDK_PTZDownRight;
        this.BCSDK_PTZZoomIn = MFFI.BCSDK_PTZZoomIn;
        this.BCSDK_PTZZoomOut = MFFI.BCSDK_PTZZoomOut;
        this.BCSDK_PTZFocusFar = MFFI.BCSDK_PTZFocusFar;
        this.BCSDK_PTZFocusNear = MFFI.BCSDK_PTZFocusNear;
        this.BCSDK_PTZIrisOpen = MFFI.BCSDK_PTZIrisOpen;
        this.BCSDK_PTZIrisClose = MFFI.BCSDK_PTZIrisClose;
        this.BCSDK_PTZScanAuto = MFFI.BCSDK_PTZScanAuto;
        /****************************************************************
         *
         *  Methods for Playback
         *
         ****************************************************************/
        this.BCSDK_RecordFilesSearch = MFFI.BCSDK_RecordFilesSearch;
        this.BCSDK_AlarmVideosSearch = MFFI.BCSDK_AlarmVideosSearch;
        this.BCSDK_PlaybackSeek = MFFI.BCSDK_PlaybackSeek;
        this.BCSDK_GetPlaybackState = MFFI.BCSDK_GetPlaybackState;
        this.BCSDK_GetIsPlaybackOpen = MFFI.BCSDK_GetIsPlaybackOpen;
        this.BCSDK_GetPlaybackStreamType = MFFI.BCSDK_GetPlaybackStreamType;
        this.BCSDK_PlaybackOpen = MFFI.BCSDK_PlaybackOpen;
        this.BCSDK_PlaybackClose = MFFI.BCSDK_PlaybackClose;
        this.BCSDK_PlaybackStart = MFFI.BCSDK_PlaybackStart;
        this.BCSDK_PlaybackPause = MFFI.BCSDK_PlaybackPause;
        this.BCSDK_PlaybackStop = MFFI.BCSDK_PlaybackStop;
        this.BCSDK_PlaybackStep = MFFI.BCSDK_PlaybackStep;
        this.BCSDK_PlaybackMute = MFFI.BCSDK_PlaybackMute;
    }
    static instance() {
        return NativeDelegate.singleton;
    }
}
NativeDelegate.singleton = new NativeDelegate();
exports.native = NativeDelegate.instance();
//# sourceMappingURL=native.js.map