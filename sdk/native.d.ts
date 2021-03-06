import * as ffi from 'ffi';
import * as T from '../types';
export declare const renderCallbackFunc: ffi.Function;
export declare const dataCallbackFunc: ffi.Function;
export declare const diskStatusCallback: ffi.Function;
export declare const recordStatusCallback: ffi.Function;
export declare const deviceFoundCallback: ffi.Function;
export interface NativeMethods {
    /****************************************************************
     *
     *  Methods for Device
     *
     ****************************************************************/
    BCSDK_Open: (group: number, exceptCNServer: number, exceptRUServer: number) => number;
    BCSDK_AddDevice: (loginDes: any, callbackDes: any, pError: any) => number;
    BCSDK_RemoveDevice: (handle: number) => number;
    BCSDK_RemoveAllDevices: () => number;
    BCSDK_ModifyDevice: (handle: number, loginDes: any, callbackDes: any, pError: any) => number;
    BCSDK_GetDeviceCount: () => number;
    BCSDK_GetDevice: (handle: number) => number;
    BCSDK_SetIsInBackground: (background: boolean) => number;
    BCSDK_SetNetworkType: (type: T.BCSDK_NET_TYPE_E) => number;
    BCSDK_SetAccountCenter: (accountCenterApiUrl: string, token: string, pemFilePath: string) => number;
    BCSDK_SetShouldLoginWithSignature: (handle: number, should: boolean) => number;
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
    BCSDK_GetIsLoginByDefaultPass: (handle: number, isDefault: any) => number;
    BCSDK_GetDeviceNorm: (handle: number, pNorm: any) => number;
    BCSDK_GetSupportRF: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportPush: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportReplay: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportReplaySubStream: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportTimingRecord: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRecordEnable: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportReplaySpeed: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportAlarmVideoMark: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportCoverPreview: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportDeleteRecordFiles: (handle: number, pSupport: any) => number;
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
    BCSDK_GetSupportFTPPicture: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportFTPEnable: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportFTPAutoDir: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRTSP: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportRTMP: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportONVIF: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportP2PEnable: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportP2PDomainName: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportP2PPort: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportPppoe: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportSeek: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportIFramePreview: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportIFrameReplay: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportHDD: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportSDCard: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportTimeFormat: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportDateFormat: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportEmailTask: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportEmailNickName: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportEmailInterval: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportEmailEnable: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportPushTask: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportPushEnable: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportCloud: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportCloudCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportCloudSchedule: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportCloudSignatureLoginCfg: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportAccountBind: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportServerControlStreamType: (handle: number, pSupport: any) => number;
    BCSDK_GetSmarthomeAbility: (handle: number, ability: any) => number;
    BCSDK_GetSupportUpgrade: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportOutput: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportVideoLoss: (handle: number, pSupport: any) => number;
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
    BCSDK_GetSupportShowQrcode: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportChinese: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportNasBind: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportNasUnbind: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportNasBindStatusInfo: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportExport: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportImport: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportSyncUTCTime: (handle: number, pSupport: any) => number;
    BCSDK_GetQRAudios: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportSamba: (handle: number, pSupport: any) => number;
    BCSDK_GetScheduleVersion: (handle: number, pVersion: any) => number;
    BCSDK_GetSupportBuzzer: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportBuzzerTask: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportBuzzerEnable: (handle: number, pSupport: any) => number;
    BCSDK_GetSupportChannelVersion: (handle: number, pSupport: any) => number;
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
    BCSDK_GetSupportFloodlight: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportFloodlightBrightnessCtrl: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportFloodlightAutoByPreview: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportFloodlightModeConfig: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportPtzSpeed: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportPtzCruise: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportPtzPreset: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportPt: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAutoPt: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportZoomAndFocus: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportZoomAndFocusSliderCfg: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportOnly4Directions: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportGuardPoint: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportPTSelfTestCfg: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAudio: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAutoFocus: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportCropSnap: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportTalk: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportMD: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportMDWithPIR: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportMDTriggerAudio: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportMDTriggerRecord: (handle: number, channel: number, pSupport: any) => number;
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
    BCSDK_GetSupportIspDayNightThreshold: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspBrightDarkRegulate: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportIspFirstFrameStrategy: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAI: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAIPeople: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAIVehicle: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAIFace: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAIAnimal: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAIOther: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAIDetectConfig: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportAITrack: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportTimelapse: (handle: number, channel: number, pSupport: any) => number;
    BCSDK_GetSupportTimelapseThumbnail: (handle: number, channel: number, pSupport: any) => number;
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
    /****************************************************************
     *
     *  Methods for Playback
     *
     ****************************************************************/
    BCSDK_RecordFilesSearch: (handle: number, channel: number, uid: string, start: any, end: any, stream: T.BC_STREAM_TYPE_E, seq: number) => number;
    BCSDK_AlarmVideosSearch: (handle: number, channel: number, start: any, end: any, stream: T.BC_STREAM_TYPE_E, seq: number) => number;
    BCSDK_PlaybackSeek: (handle: number, pTime: any) => number;
    BCSDK_GetPlaybackState: (handle: number, channel: number, pState: any) => number;
    BCSDK_GetIsPlaybackOpen: (handle: number, channel: number, pOpen: any) => number;
    BCSDK_GetPlaybackStreamType: (handle: number, channel: number, pType: any) => number;
    BCSDK_PlaybackOpen: (handle: number, channel: number, uid: string, identity: string, fileNam: string, cacheFile: string, sub: boolean, speed: number, callback: any, userData: any) => number;
    BCSDK_PlaybackClose: (handle: number, channel: number) => number;
    BCSDK_PlaybackStart: (handle: number, channel: number) => number;
    BCSDK_PlaybackPause: (handle: number, channel: number) => number;
    BCSDK_PlaybackStep: (handle: number, channel: number) => number;
    BCSDK_PlaybackMute: (handle: number, channel: number, mute: boolean) => number;
    /************************************************************************
     *
     * Talk interfaces
     *
     ************************************************************************/
    BCSDK_AudioTalkOpen: (handle: number, channel: number) => number;
    BCSDK_AudioTalkClose: (handle: number, channel: number) => number;
    BCSDK_GetAudioTalkState: (handle: number, channel: number, state: any) => number;
    /************************************************************************
     *
     * Local Reocrd interfaces
     *
     ************************************************************************/
    /**
     * Record Callback
     */
    BCSDK_SetDiskCallbacks: (diskStatusCallback: any, userData: any) => number;
    BCSDK_SetRecordCallback: (recordCallback: any, userData: any) => number;
    BCSDK_SetRecordFolder: (tempFolder: string, folder: string, folderMaxSize: number, sizeForWarning: number) => number;
    BCSDK_SetRecordFilePrefixion: (handle: number, channel: number, prefixion: string) => number;
    BCSDK_SetLocalRecordSchedule: (scheduleTable: any, streamType: number, fileDuration: number, postDuration: number) => number;
    BCSDK_OpenLocalRecordSchedule: () => number;
    BCSDK_CloseLocalRecordSchedule: () => number;
    BCSDK_SetDeviceAcceptLocalRecordSchedule: (handle: number, accept: any) => number;
    BCSDK_GetIsRecording: (handle: number, channel: number, recording: any) => number;
    BCSDK_GetIsManualRecordOpened: (handle: number, channel: number, open: any) => number;
    BCSDK_OpenManualRecord: (handle: number, channel: number) => number;
    BCSDK_CloseManualRecord: (handle: number, channel: number) => number;
    BCSDK_GetLocalRecordState: (handle: number, channel: number, state: any) => number;
    BCSDK_StartLiveRecord: (handle: number, channel: number) => number;
    BCSDK_GetLiveRecordState: (handle: number, channel: number, state: any) => number;
    BCSDK_CutLiveRecord: (handle: number, channel: number) => number;
    BCSDK_StopLiveRecord: (handle: number, channel: number) => number;
    BCSDK_StartPlaybackRecord: (handle: number, channel: number) => number;
    BCSDK_GetPlaybackRecordState: (handle: number, channel: number, state: any) => number;
    BCSDK_CutPlaybackRecord: (handle: number, channel: number) => number;
    BCSDK_StopPlaybackRecord: (handle: number, channel: number) => number;
    /************************************************************************
     *
     * Download interfaces
     *
     ************************************************************************/
    BCSDK_GetIsDownloading: (handle: number, download: any) => number;
    BCSDK_StartDownloadFile: (handle: number, uid: string, identity: string, fileName: string, subStream: boolean, type: T.BC_FILE_TYPE_E, tempFolder: string, dstFile: string) => number;
    BCSDK_StartDownloadByTime: (handle: number, channel: number, uid: string, start: any, end: any, subStream: boolean, tempFolder: string, dstFile: string) => number;
    BCSDK_StopDownload: (handle: number, fileName: any) => number;
    /************************************************************************
     *
     * Remote Config interfaces
     *
     ************************************************************************/
    /************************************************************************
     * MARK: Device Remote Config
     ************************************************************************/
    BCSDK_RemoteConfigState: (handle: number, channel: number, cmd: T.BC_CMD_E, pState: any) => number;
    BCSDK_RemoteConfigState2: (handle: number, channel: number, cmd: T.BC_CMD_E, cmdIdx: number, pState: any) => number;
    BCSDK_RemoteGetVersionInfo: (handle: number) => number;
    BCSDK_RemoteGetDefaultAIDetectCfg: (handle: number, channel: number, type: T.BC_DETECT_TYPE_E, cmdIdx: number) => number;
    BCSDK_RemoteGetAIDetectCfg: (handle: number, channel: number, type: T.BC_DETECT_TYPE_E, cmdIdx: number) => number;
    BCSDK_RemoteSetAIDetectCfg: (handle: number, channel: number, config: any, cmdIdx: number) => number;
    BCSDK_RemoteSetAlarmAreas: (handle: number, channel: number, config: any) => number;
    BCSDK_RemoteGetSysGeneralCfg: (handle: number) => number;
    BCSDK_RemoteSetSysGeneralCfg: (handle: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteSetDeviceName: (handle: number, param: any) => number;
    BCSDK_RemoteGetAutoRebootCfg: (handle: number) => number;
    BCSDK_RemoteSetAutoRebootCfg: (handle: number, param: any) => number;
    BCSDK_RemoteFactoryDefault: (handle: number, param: any) => number;
    BCSDK_RemoteGetRecordGenCfg: (handle: number) => number;
    BCSDK_RemoteSetRecordGenCfg: (handle: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetMailCfg: (handle: number) => number;
    BCSDK_RemoteSetMailCfg: (handle: number, param: any) => number;
    BCSDK_RemoteEmailTest: (handle: number, param: any) => number;
    BCSDK_RemoteGetOutputCfg: (handle: number) => number;
    BCSDK_RemoteSetOutputCfg: (handle: number, param: any) => number;
    BCSDK_RemoteGetHDDCfg: (handle: number) => number;
    BCSDK_RemoteInitHdd: (handle: number, param: any) => number;
    BCSDK_RemoteInitSDCard: (handle: number, param: any) => number;
    BCSDK_RemoteGetHDDFull: (handle: number) => number;
    BCSDK_RemoteSetHDDFull: (handle: number, param: any) => number;
    BCSDK_RemoteGetHDDError: (handle: number) => number;
    BCSDK_RemoteSetHDDError: (handle: number, param: any) => number;
    BCSDK_RemoteGetNetDisconnect: (handle: number) => number;
    BCSDK_RemoteSetNetDisconnect: (handle: number, param: any) => number;
    BCSDK_RemoteGetIpConflict: (handle: number) => number;
    BCSDK_RemoteSetIpConflict: (handle: number, param: any) => number;
    BCSDK_RemoteGetNetworkCfg: (handle: number) => number;
    BCSDK_RemoteSetNetworkCfg: (handle: number, param: any) => number;
    BCSDK_RemoteGetNetNormalPort: (handle: number) => number;
    BCSDK_RemoteSetNetNormalPort: (handle: number, param: any) => number;
    BCSDK_RemoteGetNetAdvancedPort: (handle: number) => number;
    BCSDK_RemoteSetNetAdvancedPort: (handle: number, param: any) => number;
    BCSDK_RemoteGetUpnpCfg: (handle: number) => number;
    BCSDK_RemoteSetUpnpCfg: (handle: number, param: any) => number;
    BCSDK_RemoteGetUidInfo: (handle: number) => number;
    BCSDK_RemoteGetP2PCfg: (handle: number) => number;
    BCSDK_RemoteSetP2PCfg: (handle: number, param: any) => number;
    BCSDK_RemoteGetRFSensor: (handle: number) => number;
    BCSDK_RemoteSetOutArm: (handle: number) => number;
    BCSDK_RemoteSetHomeArm: (handle: number) => number;
    BCSDK_RemoteSetSleepArm: (handle: number) => number;
    BCSDK_RemoteSetDisarm: (handle: number) => number;
    BCSDK_RemoteGetAlarmIn: (handle: number, inputId: number) => number;
    BCSDK_RemoteSetAlarmIn: (handle: number, param: any) => number;
    BCSDK_RemoteGetAlarmOut: (handle: number, outputId: number) => number;
    BCSDK_RemoteSetAlarmOut: (handle: number, param: any) => number;
    BCSDK_RemoteGetRfAlarmCfg: (handle: number, rfId: number) => number;
    BCSDK_RemoteSetRfAlarmCfg: (handle: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteSetRfAlarmStatus: (handle: number, param: any) => number;
    BCSDK_RemoteGetDst: (handle: number) => number;
    BCSDK_RemoteSetDst: (handle: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetDdns: (handle: number) => number;
    BCSDK_RemoteSetDdns: (handle: number, param: any) => number;
    BCSDK_RemoteGetNtp: (handle: number) => number;
    BCSDK_RemoteSetNtp: (handle: number, param: any) => number;
    BCSDK_RemoteGetPppoe: (handle: number) => number;
    BCSDK_RemoteSetPppoe: (handle: number, param: any) => number;
    BCSDK_RemoteOnlineUpate: (handle: number, param: any) => number;
    BCSDK_RemoteGetOnlineUpdateStatus: (handle: number) => number;
    BCSDK_RemoteGetAutoUpdateState: (handle: number) => number;
    BCSDK_RemoteSetAutoUpdateState: (handle: number, param: any) => number;
    BCSDK_RemoteGetOnlineNewFwInfo: (handle: number) => number;
    BCSDK_RemoteGetPerformances: (handle: number) => number;
    BCSDK_RemoteGetWifiSignal: (handle: number) => number;
    BCSDK_RemoteGetWifiCfg: (handle: number) => number;
    BCSDK_RemoteSetWifiCfg: (handle: number, param: any) => number;
    BCSDK_RemoteWifiTest: (handle: number, param: any) => number;
    BCSDK_RemoteGet3g4gInfo: (handle: number) => number;
    BCSDK_RemoteGetSimModuleInfo: (handle: number) => number;
    BCSDK_RemoteSetSimModuleInfo: (handle: number, param: any) => number;
    BCSDK_RemoteGetCloudInfo: (handle: number) => number;
    BCSDK_RemoteBindCloud: (handle: number, param: any) => number;
    BCSDK_RemoteGetCloudCfg: (handle: number) => number;
    BCSDK_RemoteSetCloudCfg: (handle: number, param: any) => number;
    BCSDK_RemoteGetSignatureLoginCfg: (handle: number) => number;
    BCSDK_RemoteSetSignatureLoginCfg: (handle: number, param: any) => number;
    BCSDK_RemoteSyncUtcTime: (handle: number, param: any) => number;
    BCSDK_RemoteNasGetBindInfo: (handle: number) => number;
    BCSDK_RemoteNasBind: (handle: number, param: any) => number;
    BCSDK_RemoteNasUnbind: (handle: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetScanAp: (handle: number) => number;
    BCSDK_RemoteGetRecFileDaysByChannel: (handle: number, param: any) => number;
    BCSDK_RemoteGetUserCfg: (handle: number) => number;
    BCSDK_RemoteSetUserCfg: (handle: number, param: any) => number;
    BCSDK_RemoteInitNewUserAiblity: (handle: number, param: any) => number;
    BCSDK_RemoteGetOnlineUserCfg: (handle: number) => number;
    BCSDK_RemoteSetOnlineUserCfg: (handle: number, param: any) => number;
    BCSDK_RemoteForceUserPassword: (handle: number, param: any) => number;
    BCSDK_RemoteGetBootPwdState: (handle: number) => number;
    BCSDK_RemoteSetBootPwdState: (handle: number, param: any) => number;
    BCSDK_RemoteUpgradeFirmware: (handle: number, param: any) => number;
    BCSDK_RemoteGetFtpCfg: (handle: number) => number;
    BCSDK_RemoteSetFtpCfg: (handle: number, param: any) => number;
    BCSDK_RemoteSetFtpTest: (handle: number, param: any) => number;
    BCSDK_SetDeviceIFramePreview: (handle: number, iFrame: boolean) => number;
    BCSDK_SetDeviceIFrameReplay: (handle: number, iFrame: boolean) => number;
    BCSDK_RemoteReboot: (handle: number) => number;
    BCSDK_RemoteDeviceSleep: (handle: number) => number;
    BCSDK_RemoteExportConfig: (handle: number, param: any) => number;
    BCSDK_RemoteImportConfig: (handle: number, param: any) => number;
    BCSDK_RemoteGetLogFile: (handle: number, param: any) => number;
    BCSDK_RemoteStartAlarmReport: (handle: number) => number;
    BCSDK_RemoteStopAlarmReport: (handle: number) => number;
    BCSDK_RemotePushOpen: (handle: number, param: any) => number;
    BCSDK_RemoteRtmpStart: (handle: number, param: any) => number;
    BCSDK_RemoteRtmpStop: (handle: number, param: any) => number;
    BCSDK_DeleteRecFiles: (handle: number, param: any) => number;
    BCSDK_RemoteGetRecordEnable: (handle: number) => number;
    BCSDK_RemoteSetRecordEnable: (handle: number, param: any) => number;
    BCSDK_RemoteGetFtpEnable: (handle: number) => number;
    BCSDK_RemoteSetFtpEnable: (handle: number, param: any) => number;
    BCSDK_RemoteGetEmailEnable: (handle: number) => number;
    BCSDK_RemoteSetEmailEnable: (handle: number, param: any) => number;
    BCSDK_RemoteGetPushEnable: (handle: number) => number;
    BCSDK_RemoteSetPushEnable: (handle: number, param: any) => number;
    BCSDK_RemoteGetBuzzerEnable: (handle: number) => number;
    BCSDK_RemoteSetBuzzerEnable: (handle: number, param: any) => number;
    /*******************************************************************************
     * MARK: Channel Remote Config
     ******************************************************************************/
    BCSDK_RemoteGetEncCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteSetEncCfg: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetOsdCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteSetOsdCfg: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetCameraCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteSetCameraCfg: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetShelter: (handle: number, channel: number) => number;
    BCSDK_RemoteSetShelter: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetRecordSchedule: (handle: number, channel: number) => number;
    BCSDK_RemoteSetRecordSchedule: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetPtzCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteSetPtzCfg: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetMotionCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteSetMotionCfg: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetAiCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteSetAiCfg: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetVideoLoss: (handle: number, channel: number) => number;
    BCSDK_RemoteSetVideoLoss: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetPresets: (handle: number, channel: number) => number;
    BCSDK_RemoteSetPresets: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemotePresetInvoke: (handle: number, channel: number, preset: number) => number;
    BCSDK_RemoteGetGuard: (handle: number, channel: number) => number;
    BCSDK_RemoteSetGuard: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetCruises: (handle: number, channel: number) => number;
    BCSDK_RemoteSetCruise: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteCruiseInvoke: (handle: number, channel: number, cruise: number) => number;
    BCSDK_RemoteCruiseStop: (handle: number, channel: number, cruise: number) => number;
    BCSDK_RemoteGetIspCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteGetDefaultIspCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteSetIspCfg: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteSetIspDayNightMode: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetLedState: (handle: number, channel: number) => number;
    BCSDK_RemoteSetLedState: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteFloodlightManual: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetFloodlightTask: (handle: number, channel: number) => number;
    BCSDK_RemoteSetFloodlightTask: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetDayNightThreshold: (handle: number, channel: number) => number;
    BCSDK_RemoteSetDayNightThreshold: (handle: number, channel: number, param: any, cmdIdx: number) => number;
    BCSDK_RemoteGetFtpTask: (handle: number, channel: number) => number;
    BCSDK_RemoteSetFtpTask: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetEmailTask: (handle: number, channel: number) => number;
    BCSDK_RemoteSetEmailTask: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetPushTask: (handle: number, channel: number) => number;
    BCSDK_RemoteSetPushTask: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetAudioTask: (handle: number, channel: number) => number;
    BCSDK_RemoteSetAudioTask: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetBuzzerTask: (handle: number, channel: number) => number;
    BCSDK_RemoteSetBuzzerTask: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteSnap: (handle: number, channel: number, param: any) => number;
    BCSDK_GetIsConfigStreamOpen: (handle: number, channel: number, pOpen: any) => number;
    BCSDK_ConfigStreamOpen: (handle: number, channel: number, callback: any, userData: any) => number;
    BCSDK_ConfigStreamClose: (handle: number, channel: number) => number;
    BCSDK_RemoteGetAutoFocus: (handle: number, channel: number) => number;
    BCSDK_RemoteSetAutoFocus: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetZoomFocusInfo: (handle: number, channel: number) => number;
    BCSDK_RemoteStartZoomFocus: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetCropCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteSetCropCfg: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteCropSnap: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetBatteryInfo: (handle: number, channel: number) => number;
    BCSDK_RemoteGetBatteryAnalysis: (handle: number, channel: number) => number;
    BCSDK_RemoteGetRingtoneFileInfo: (handle: number, channel: number) => number;
    BCSDK_RemoteGetRingtoneCfg: (handle: number, channel: number) => number;
    BCSDK_RemoteSetRingtoneCfg: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteManualRingDown: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteMuteAlarmAudio: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteSaveRingtone: (handle: number, channel: number) => number;
    BCSDK_RemoteImportRingtone: (handle: number, channel: number, param: any) => number;
    BCSDK_RemoteGetRingtoneAbility: (handle: number, channel: number) => number;
    BCSDK_RemoteGetChannelVersionInfo: (handle: number, channel: number) => number;
    /************************************************************************
     *
     * Search interfaces
     *
     ************************************************************************/
    BCSDK_AddSearchCallback: (callback: any, pUserData: any) => number;
    BCSDK_RemoveSearchCallback: (callback: any, pUserData: any) => number;
    BCSDK_StartDeviceSearchLoop: (time: number) => number;
    BCSDK_StopDeviceSearchLoop: () => number;
    BCSDK_DeviceSearchOnce: () => number;
    BCSDK_SongP2PDeviceSearchOnce: () => number;
    /************************************************************************
     *
     * Tools interfaces
     *
     ************************************************************************/
    BCSDK_GetTotalBitrates: (pBitrate: any) => number;
    BCSDK_ReInitP2p: () => void;
    BCSDK_GetP2PType: (uid: string, pType: any) => number;
    BCSDK_GetSongP2PType: (uid: string, pType: any) => number;
    BCSDK_GetSongDeviceInfo: (uid: string, pInfo: any) => number;
    BCSDK_SongP2PGetDebug: (pInfo: any) => number;
    BCSDK_XCUID2SongUID: (uid: string, pInfo: any) => number;
    BCSDK_SongP2PGetDetail: (pInfo: any) => number;
    BCSDK_GetDiagnoseLogs: (pList: any) => number;
    BCSDK_Encrypt: (pBuf: any) => number;
    BCSDK_Decrypt: (pBuf: any) => number;
    BCSDK_GetSpeakerVolume: (volume: any) => number;
    BCSDK_SetSpeakerVolume: (volume: number) => number;
    BCSDK_GetDiskFreeSize: (path: string, size: any) => number;
    BCSDK_GetHasWritePermission: (path: string, has: any) => number;
    BCSDK_SaveYUVToDisk: (path: string, width: number, height: number, format: number, plane0: any, plane1: any, plane2: any) => number;
}
export declare const native: NativeMethods;
