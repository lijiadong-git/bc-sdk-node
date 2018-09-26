import * as T from '../types';
export interface NativeMethods {
    /****************************************************************
     *
     *  Methods for Device
     *
     ****************************************************************/
    BCSDK_AddDevice: (loginDes: any, callbackDes: any, pError: any) => number;
    BCSDK_RemoveDevice: (handle: number) => number;
    BCSDK_RemoveAllDevices: () => number;
    BCSDK_ModifyDevice: (handle: number, loginDes: any, callbackDes: any, pError: any) => number;
    BCSDK_GetDeviceCount: () => number;
    BCSDK_GetDevice: (handle: number) => number;
    BCSDK_SetIsInBackground: (background: boolean) => number;
    BCSDK_SetNetworkType: (type: T.BCSDK_NET_TYPE_E) => number;
    BCSDK_SetDeviceNeedAutoOpen: (handle: number, need: boolean) => number;
    BCSDK_SetDeviceMaxReconnectCount: (handle: number, count: number) => number;
    BCSDK_StartDevicesAutoOpen: (time: number) => number;
    BCSDK_StopDevicesAutoOpen: (logout: boolean) => number;
    BCSDK_DeviceForceOpen: (handle: number, async: boolean) => number;
    BCSDK_DeviceForceClose: (handle: number, async: boolean) => number;
    BCSDK_GetDeviceChannelCount: (handle: number, pCount: any) => number;
    BCSDK_GetDeviceLoginMessage: (handle: number, pDesc: any) => number;
    BCSDK_GetDeviceState: (handle: number, pState: any) => number;
    BCSDK_SetDeviceExtension: (handle: number, pExten: any) => number;
    BCSDK_GetDeviceExtension: (handle: number, pExten: any) => number;
    /****************************************************************
     *
     *  Methods for Device Abilities
     *
     ****************************************************************/
    BCSDK_SetAbilityAbout: (handle: number, pAbilityAbout: any) => number;
    BCSDK_GetDeviceType: (handle: number, pType: any) => number;
    BCSDK_GetDeviceNorm: (handle: number, pNorm: any) => number;
    BCSDK_GetSupportRF: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportPush: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportReplay: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportReplaySubStream: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportTimingRecord: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportReplaySpeed: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportAlarmVideoMark: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportPolling: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportAutoNtp: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportWiFi: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportWiFiCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportWiFiTest: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportInitAP: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportFTP: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportFTPTest: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportFTPSubStream: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportFTPExtensionStream: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRTSP: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRTMP: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportONVIF: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportP2PEnable: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportP2PDomainName: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportP2PPort: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportSeek: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportIFramePreview: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportIFrameReplay: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportHDD: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportSDCard: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportTimeFormat: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportEmailTask: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportEmailNickName: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportPushTask: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportCloud: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportCloudCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportCloudSchedule: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportUpgrade: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportOutput: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportVideoLost: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportPTZSetting: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportPerformance: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportAutoUpdate: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportReboot: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportVideoStandard: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportUpnp: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportExceptionCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportLogSearch: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportDDNSCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportMediaPort: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportHttpPort: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportHttpsPort: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportNtp: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRecSchedule: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportEmailInterval: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRecSettings: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRecOverWriteCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRecPreRecordCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRecPackDurationCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRecRecordExtensionCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRecRecordExtensionTimeList: (handle: number, pSupport: any) => number;
    BCSDK_GetIsWifiIPC: (handle: number, pSupport: any) => number;
    BCSDK_GetIsIPC: (handle: number, pSupport: any) => number;
    BCSDK_GetIsNVR: (handle: number, pSupport: any) => number;
    BCSDK_GetIsBASE: (handle: number, pSupport: any) => number;
    BCSDK_GetHasAdminPermission: (handle: number, pSupport: any) => number;
    BCSDK_GetUserVersion: (handle: number, pVersion: any) => number;
    BCSDK_GetPTZMode: (handle: number, pMode: any) => number;
    BCSDK_GetAlarmInPortCount: (handle: number, pCount: any) => number;
    BCSDK_GetAlarmOutPortCount: (handle: number, pCount: any) => number;
    BCSDK_GetDdnsVersion: (handle: number, pVersion: any) => number;
    BCSDK_GetAnalogChannelCount: (handle: number, pCount: any) => number;
    BCSDK_GetPushType: (handle: number, pType: any) => number;
    /**
     * rfVersion:   0 -> no support;
     *              1 -> old,suppport 3 buttons;
     *              2 -> support RF Remote Config;
     *              3 -> support 4 buttons;
     *              4 -> support RF Remote Config with Sensitivity
     */
    BCSDK_GetRfVersion: (handle: number, pSupport: any) => number;
    BCSDK_GetRfNumbers: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportSimModule: (handle: number, pSupport: any) => number;
    /****************************************************************
     *  Methods for Channel Abilities
     ****************************************************************/
    BCSDK_GetEncodeTable: (handle: number, channel: number, pEncTable: any) => number;
    BCSDK_GetIsVideoLoss: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportCameraMode: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportExtenStream: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportExtenStreamCfg: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportLEDControl: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIndicatorLight: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportPtzSpeed: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportPtzCruise: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportPtzPreset: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportPt: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAutoPt: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportZoomAndFocus: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAudio: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAutoFocus: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportCropSnap: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportTalk: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportMD: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportMDWithPIR: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportShelterCfg: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetIsBattery: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetIsCharge: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportBatAnalysis: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAudioAlarmEnable: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAudioAlarmSchedule: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportManualRingDown: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportCustomRingtone: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportOsdPadding: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportOsdWaterMark: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspDayNight: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspAntiFlick: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspExposureMode: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspWhiteBalance: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspBacklight: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIsp3dnr: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspMirror: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspFlip: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspBright: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspContrast: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspSatruation: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspHue: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspSharpen: (handle: number, channel: number, pSupport: any) => number;
    /****************************************************************
     *
     *  Methods for Live
     *
     ****************************************************************/
    BCSDK_GetIsLiveOpen: (handle: number, channel: number, pOpen: any) => number;
    BCSDK_GetLiveStreamType: (handle: number, channel: number, pType: any) => number;
    BCSDK_LiveOpen: (handle: number, channel: number, stream: T.BC_STREAM_TYPE_E, callback: any, userData: any) => number;
    BCSDK_LiveClose: (handle: number, channel: number) => number;
    BCSDK_LiveMute: (handle: number, channel: number, mute: boolean) => number;
    /****************************************************************
     *
     *  Methods for PTZ
     *
     ****************************************************************/
    BCSDK_PTZStop: (handle: number, channel: number) => number;
    BCSDK_PTZUp: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZDown: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZLeft: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZRight: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZUpLeft: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZUpRight: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZDownLeft: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZDownRight: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZZoomIn: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZZoomOut: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZFocusFar: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZFocusNear: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZIrisOpen: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZIrisClose: (handle: number, channel: number, speed: number) => number;
    BCSDK_PTZScanAuto: (handle: number, channel: number, speed: number) => number;
}
export declare const native: NativeMethods;
