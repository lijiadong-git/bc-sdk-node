"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi = require("ffi");
const path = require('path');
const _T = require("./_struct");
exports.renderCallbackFunc = ffi.Function('void', ['int', 'int', _T.P_RENDER_FRAME_DESC, _T.pointer('void')]);
exports.dataCallbackFunc = ffi.Function('void', ['int', 'int', _T.P_DATA_FRAME_DESC, _T.pointer('void')]);
exports.diskStatusCallback = ffi.Function('void', [_T.P_BC_DISK_WARNINIG_DESC, _T.pointer('void')]);
exports.recordStatusCallback = ffi.Function('void', [_T.P_BC_REC_EVENT_DESC, _T.pointer('void')]);
exports.deviceFoundCallback = ffi.Function('void', [_T.P_DEVICE_LOCATION_DESC, _T.pointer('void')]);
const folder = process.env.NODE_ENV === "development" ? process.env.VUE_APP_DIR_PLATFORM_EXTERNALS : __dirname;
if (process.platform === "win32") {
    ffi.Library(path.join(folder, 'msvcp140'));
    ffi.Library(path.join(folder, 'vcruntime140'));
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
    BCSDK_Open: ['int', ['int', 'int']],
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
    BCSDK_GetIsLoginByDefaultPass: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetDeviceNorm: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetSupportRF: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportPush: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportReplay: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportReplaySubStream: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportTimingRecord: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRecordEnable: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportReplaySpeed: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportAlarmVideoMark: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportCoverPreview: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportDeleteRecordFiles: ['int', ['int', _T.pointer('bool')]],
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
    BCSDK_GetSupportFTPPicture: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportFTPEnable: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRTSP: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportRTMP: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportONVIF: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportP2PEnable: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportP2PDomainName: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportP2PPort: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportPppoe: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportSeek: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportIFramePreview: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportIFrameReplay: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportHDD: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportSDCard: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportTimeFormat: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportDateFormat: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportEmailTask: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportEmailNickName: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportEmailInterval: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportEmailEnable: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportPushTask: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportPushEnable: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportCloud: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportCloudCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportCloudSchedule: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportCloudSignatureLoginCfg: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportAccountBind: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportServerControlStreamType: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSmarthomeAbility: ['int', ['int', _T.pointer('int')]],
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
    BCSDK_GetSupportSimModule: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportShowQrcode: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportChinese: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportNasBind: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportNasUnbind: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportNasBindStatusInfo: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportExport: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportImport: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportSyncUTCTime: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetQRAudios: ['int', ['int', _T.P_BC_QR_AUDIOS_INFO]],
    BCSDK_GetSupportSamba: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetScheduleVersion: ['int', ['int', _T.pointer('int')]],
    BCSDK_GetSupportBuzzer: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportBuzzerTask: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportBuzzerEnable: ['int', ['int', _T.pointer('bool')]],
    BCSDK_GetSupportChannelVersion: ['int', ['int', _T.pointer('bool')]]
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
    BCSDK_GetSupportFloodlight: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportFloodlightBrightnessCtrl: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportFloodlightAutoByPreview: ['int', ['int', 'int', _T.pointer('bool')]],
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
    BCSDK_GetSupportMDTriggerAudio: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportMDTriggerRecord: ['int', ['int', 'int', _T.pointer('bool')]],
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
    BCSDK_GetSupportIspDayNightThreshold: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAI: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAIPeople: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAIVehicle: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAIFace: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportAIAnimal: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportTimelapse: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetSupportTimelapseThumbnail: ['int', ['int', 'int', _T.pointer('bool')]]
    /************************************************************************
     *
     * Live interfaces
     *
     ************************************************************************/
    ,
    BCSDK_GetIsLiveOpen: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetLiveStreamType: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_LiveOpen: ['int', ['int', 'int', 'int', exports.renderCallbackFunc, _T.pointer('void')]],
    BCSDK_LiveClose2: ['int', ['int', 'int']],
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
    BCSDK_RecordFilesSearch: ['int', ['int', 'int', 'string', _T.BC_TIME, _T.BC_TIME, 'int', 'int']],
    BCSDK_AlarmVideosSearch: ['int', ['int', 'int', _T.BC_TIME, _T.BC_TIME, 'int', 'int']],
    BCSDK_PlaybackSeek: ['int', ['int', _T.P_BC_TIME]],
    BCSDK_GetPlaybackState: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_GetIsPlaybackOpen: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_GetPlaybackStreamType: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_PlaybackOpen: ['int', ['int', 'int', 'string', 'string', 'string', 'string', 'bool', 'float', exports.renderCallbackFunc, _T.pointer('void')]],
    BCSDK_PlaybackClose2: ['int', ['int', 'int']],
    BCSDK_PlaybackStart: ['int', ['int', 'int']],
    BCSDK_PlaybackPause: ['int', ['int', 'int']],
    BCSDK_PlaybackStop: ['int', ['int', 'int']],
    BCSDK_PlaybackStep: ['int', ['int', 'int']],
    BCSDK_PlaybackMute: ['int', ['int', 'int', 'bool']]
    /************************************************************************
     *
     * Talk interfaces
     *
     ************************************************************************/
    ,
    BCSDK_AudioTalkOpen2: ['int', ['int', 'int']],
    BCSDK_AudioTalkClose: ['int', ['int', 'int']],
    BCSDK_GetAudioTalkState: ['int', ['int', 'int', _T.pointer('int')]]
    /************************************************************************
     *
     * Local Reocrd interfaces
     *
     ************************************************************************/
    /**
     * Record Callback
     */
    ,
    BCSDK_SetDiskCallbacks: ['int', [exports.diskStatusCallback, _T.pointer('void')]],
    BCSDK_SetRecordCallback: ['int', [exports.recordStatusCallback, _T.pointer('void')]]
    // -----------------------------------------------------------------------------------------------------------------
    // Record Folder
    ,
    BCSDK_SetRecordFolder: ['int', ['string', 'string', 'uint64', 'uint64']]
    // -----------------------------------------------------------------------------------------------------------------
    // Set Channel Record File Prefixion
    // Default is "DeviceName"CH"ChannelIndex"
    ,
    BCSDK_SetRecordFilePrefixion: ['int', ['int', 'int', 'string']]
    // -----------------------------------------------------------------------------------------------------------------
    // Local Record Schedule
    ,
    BCSDK_SetLocalRecordSchedule: ['int', [_T.BC_REC_SCHE_TABLE_CFG, 'int', 'int', 'int']],
    BCSDK_OpenLocalRecordSchedule: ['int', []],
    BCSDK_CloseLocalRecordSchedule: ['int', []]
    // -----------------------------------------------------------------------------------------------------------------
    // Device should record with schedule
    // Default is false
    ,
    BCSDK_SetDeviceAcceptLocalRecordSchedule: ['int', ['int', _T.BC_REC_SCHE_DEVICE_CFG]]
    // -----------------------------------------------------------------------------------------------------------------
    // Recording
    ,
    BCSDK_GetIsRecording: ['int', ['int', 'int', _T.pointer('bool')]]
    // -----------------------------------------------------------------------------------------------------------------
    // Manual Record
    ,
    BCSDK_GetIsManualRecordOpened: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_OpenManualRecord: ['int', ['int', 'int']],
    BCSDK_CloseManualRecord: ['int', ['int', 'int']],
    BCSDK_GetLocalRecordState: ['int', ['int', 'int', _T.pointer('int')]]
    // -----------------------------------------------------------------------------------------------------------------
    // Live Record
    ,
    BCSDK_StartLiveRecord: ['int', ['int', 'int']],
    BCSDK_GetLiveRecordState: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_CutLiveRecord: ['int', ['int', 'int']],
    BCSDK_StopLiveRecord: ['int', ['int', 'int']]
    // ------------------------------------------------------------------------------------------------------------
    // Playback Record (IOS/Android Use)
    ,
    BCSDK_StartPlaybackRecord: ['int', ['int', 'int']],
    BCSDK_GetPlaybackRecordState: ['int', ['int', 'int', _T.pointer('int')]],
    BCSDK_CutPlaybackRecord: ['int', ['int', 'int']],
    BCSDK_StopPlaybackRecord: ['int', ['int', 'int']]
    /************************************************************************
     *
     * Download interfaces
     *
     ************************************************************************/
    ,
    BCSDK_GetIsDownloading: ['int', ['int', _T.pointer('int')]],
    BCSDK_StartDownloadFile: ['int', ['int', 'string', 'string', 'string', 'bool', 'int', 'string', 'string']],
    BCSDK_StopDownload: ['int', ['int', 'long']]
    /************************************************************************
     *
     * Remote Config interfaces
     *
     ************************************************************************/
    /************************************************************************
     * MARK: Device Remote Config
     ************************************************************************/
    /* get remote config state for cmd
     *
     * @param cmd               the BC_CMD_E of witch you want to check it's state
     *
     * @param state             it should not be NULL
     *                          it will get back the state of the cmd
     *                          BCSDK_CONFIG_STATE_NOTREADY
     *
     */
    ,
    BCSDK_RemoteConfigState: ['int', ['int', 'int', 'int', _T.pointer('int')]],
    BCSDK_RemoteConfigState2: ['int', ['int', 'int', 'int', 'int', _T.pointer('int')]]
    /* system version
     *
     * callback with E_BC_CMD_GET_VERSION
     */
    ,
    BCSDK_RemoteGetVersionInfo: ['int', ['int']]
    /* system general
     *
     * callback with E_BC_CMD_GET_SYS, E_BC_CMD_SET_SYS, E_BC_CMD_SET_DEVICE_NAME
     */
    ,
    BCSDK_RemoteGetSysGeneralCfg: ['int', ['int']],
    BCSDK_RemoteSetSysGeneralCfg: ['int', ['int', _T.P_BC_SYS_GENERAL_CFG, 'int']],
    BCSDK_RemoteSetDeviceName: ['int', ['int', _T.P_BC_DEVICE_NAME_CFG]]
    /* autoReboot
     *
     * callback with E_BC_CMD_GET_AUTOREBOOT_CFG, E_BC_CMD_SET_AUTOREBOOT_CFG
     */
    ,
    BCSDK_RemoteGetAutoRebootCfg: ['int', ['int']]
    // callback with
    ,
    BCSDK_RemoteSetAutoRebootCfg: ['int', ['int', _T.P_BC_AUTOREBOOT_CFG]]
    /* factory default
     *
     * callback with E_BC_CMD_RESTORE
     */
    ,
    BCSDK_RemoteFactoryDefault: ['int', ['int', _T.P_BC_RESTORE_CFG]]
    /* record cfg
     *
     * callback with E_BC_CMD_GET_ADVRECORD, E_BC_CMD_SET_ADVRECORD
     */
    ,
    BCSDK_RemoteGetRecordGenCfg: ['int', ['int']],
    BCSDK_RemoteSetRecordGenCfg: ['int', ['int', _T.P_BC_RECORD_GENERAL_CFG, 'int']]
    /* email
     *
     * callback with E_BC_CMD_GET_EMAIL, E_BC_CMD_SET_EMAIL, E_BC_CMD_EMAILTEST
     */
    ,
    BCSDK_RemoteGetMailCfg: ['int', ['int']],
    BCSDK_RemoteSetMailCfg: ['int', ['int', _T.P_BC_EMAIL_CFG]],
    BCSDK_RemoteEmailTest: ['int', ['int', _T.P_BC_EMAIL_CFG]]
    /* output
     *
     * callback with E_BC_CMD_GET_OUTPUT, E_BC_CMD_SET_OUTPUT
     */
    ,
    BCSDK_RemoteGetOutputCfg: ['int', ['int']],
    BCSDK_RemoteSetOutputCfg: ['int', ['int', _T.P_BC_OUTPUT_CFG]]
    /* HDDCfg
     *
     * callback with E_BC_CMD_GET_HDD_CFG
     */
    ,
    BCSDK_RemoteGetHDDCfg: ['int', ['int']]
    /* HDD Init
     *
     * callback with E_BC_CMD_INIT_HDD
     */
    ,
    BCSDK_RemoteInitHdd: ['int', ['int', _T.P_BC_HDD_INIT_CFG]],
    BCSDK_RemoteInitSDCard: ['int', ['int', _T.P_BC_HDD_INIT_CFG]]
    /* HDD Full
     *
     * callback with E_BC_CMD_GET_HDDFULL_EXPCFG, E_BC_CMD_SET_HDDFULL_EXPCFG
     */
    ,
    BCSDK_RemoteGetHDDFull: ['int', ['int']],
    BCSDK_RemoteSetHDDFull: ['int', ['int', _T.P_BC_EXCEPTION_CFG]]
    /* HDD Error
     *
     * callback with E_BC_CMD_GET_HDDERR_EXPCFG, E_BC_CMD_SET_HDDERR_EXPCFG
     */
    ,
    BCSDK_RemoteGetHDDError: ['int', ['int']],
    BCSDK_RemoteSetHDDError: ['int', ['int', _T.P_BC_EXCEPTION_CFG]]
    /* Network Disconnect
     *
     * callback with E_BC_CMD_GET_NETDISCONNECT_EXPCFG, E_BC_CMD_SET_NETDISCONNECT_EXPCFG
     */
    ,
    BCSDK_RemoteGetNetDisconnect: ['int', ['int']],
    BCSDK_RemoteSetNetDisconnect: ['int', ['int', _T.P_BC_EXCEPTION_CFG]]
    /* IpConflict
     *
     * callback with E_BC_CMD_GET_IPCONFLICT_EXPCFG, E_BC_CMD_SET_IPCONFLICT_EXPCFG
     */
    ,
    BCSDK_RemoteGetIpConflict: ['int', ['int']],
    BCSDK_RemoteSetIpConflict: ['int', ['int', _T.P_BC_EXCEPTION_CFG]]
    /* network local
     *
     * callback with E_BC_CMD_GET_LOCAL, E_BC_CMD_SET_LOCAL
     */
    ,
    BCSDK_RemoteGetNetworkCfg: ['int', ['int']],
    BCSDK_RemoteSetNetworkCfg: ['int', ['int', _T.P_BC_LOCAL_CFG]]
    /* normalPort
     *
     * callback with E_BC_CMD_GET_NORMAL_PORT, E_BC_CMD_SET_NORMAL_PORT
     */
    ,
    BCSDK_RemoteGetNetNormalPort: ['int', ['int']],
    BCSDK_RemoteSetNetNormalPort: ['int', ['int', _T.P_BC_NET_NORMAL_PORT]]
    /* advanced Port
     *
     * callback with E_BC_CMD_GET_ADVANCED_PORTS, E_BC_CMD_SET_ADVANCED_PORTS
     */
    ,
    BCSDK_RemoteGetNetAdvancedPort: ['int', ['int']],
    BCSDK_RemoteSetNetAdvancedPort: ['int', ['int', _T.P_BC_NET_ADVANCED_PORT]]
    /* upnpCfg
     *
     * callback with E_BC_CMD_GET_UPNPSTATE, E_BC_CMD_SET_UPNPSTATE
     */
    ,
    BCSDK_RemoteGetUpnpCfg: ['int', ['int']],
    BCSDK_RemoteSetUpnpCfg: ['int', ['int', _T.P_BC_UPNP_CFG]]
    /* uid
     *
     * callback with E_BC_CMD_GET_UID
     */
    ,
    BCSDK_RemoteGetUidInfo: ['int', ['int']]
    /* p2p cfg
     *
     * callback with E_BC_CMD_GET_PTOP_CFG, E_BC_CMD_SET_PTOP_CFG
     */
    ,
    BCSDK_RemoteGetP2PCfg: ['int', ['int']],
    BCSDK_RemoteSetP2PCfg: ['int', ['int', _T.P_BC_P2P_CFG]]
    /* RF Sensor
     *
     * callback with E_BC_CMD_GET_RFSENSOR, E_BC_CMD_SET_RFSENSOR
     */
    ,
    BCSDK_RemoteGetRFSensor: ['int', ['int']],
    BCSDK_RemoteSetOutArm: ['int', ['int']],
    BCSDK_RemoteSetHomeArm: ['int', ['int']],
    BCSDK_RemoteSetSleepArm: ['int', ['int']],
    BCSDK_RemoteSetDisarm: ['int', ['int']]
    /* Alarm In
     *
     * callback with E_BC_CMD_GET_ALARMINCFG, E_BC_CMD_SET_ALARMINCFG
     */
    ,
    BCSDK_RemoteGetAlarmIn: ['int', ['int', 'int']],
    BCSDK_RemoteSetAlarmIn: ['int', ['int', _T.P_BC_ALARM_IN_CFG]]
    /* Alarm Out
     *
     * callback with E_BC_CMD_GET_ALARMOUTCFG, E_BC_CMD_SET_ALARMOUTCFG
     */
    ,
    BCSDK_RemoteGetAlarmOut: ['int', ['int', 'int']],
    BCSDK_RemoteSetAlarmOut: ['int', ['int', _T.P_BC_ALARM_OUT_CFG]]
    /* RF Alarm Cfg
     *
     * callback with E_BC_CMD_GET_RF_CFG, E_BC_CMD_SET_RF_CFG, E_BC_CMD_SET_RF_ALARM_STATUS
     */
    ,
    BCSDK_RemoteGetRfAlarmCfg: ['int', ['int', 'int']],
    BCSDK_RemoteSetRfAlarmCfg: ['int', ['int', _T.P_BC_RF_ALARM_CFG, 'int']],
    BCSDK_RemoteSetRfAlarmStatus: ['int', ['int', _T.P_BC_RF_ALARM_STATUS]]
    /* DST
     *
     * callback with E_BC_CMD_GET_DST, E_BC_CMD_SET_DST
     */
    ,
    BCSDK_RemoteGetDst: ['int', ['int']],
    BCSDK_RemoteSetDst: ['int', ['int', _T.P_BC_DST_CFG, 'int']]
    /* DDNS
     *
     * callback with E_BC_CMD_GET_DDNSCFG, E_BC_CMD_SET_DDNSCFG
     */
    ,
    BCSDK_RemoteGetDdns: ['int', ['int']],
    BCSDK_RemoteSetDdns: ['int', ['int', _T.P_BC_DDNS_CFG]]
    /* NTP
     *
     * callback with E_BC_CMD_GET_NTPCFG, E_BC_CMD_SET_NTPCFG
     */
    ,
    BCSDK_RemoteGetNtp: ['int', ['int']],
    BCSDK_RemoteSetNtp: ['int', ['int', _T.P_BC_NTP_CFG]]
    /* PPPOE
     *
     * callback with E_BC_CMD_GET_PPPOECFG, E_BC_CMD_SET_PPPOECFG
     */
    ,
    BCSDK_RemoteGetPppoe: ['int', ['int']],
    BCSDK_RemoteSetPppoe: ['int', ['int', _T.P_BC_PPPOE_CFG]]
    /* Online Update
     *
     * callback with E_BC_CMD_ONLINE_UPDATE
     */
    ,
    BCSDK_RemoteOnlineUpate: ['int', ['int', _T.P_BC_ONLINE_UPDATE]]
    /* online updtate status
     *
     * callback with E_BC_CMD_GET_ONLINE_UPDATE_STATUS
     */
    ,
    BCSDK_RemoteGetOnlineUpdateStatus: ['int', ['int']]
    /* Auto Update
     *
     * callback with E_BC_CMD_GET_AUTO_UPDATE, E_BC_CMD_SET_AUTO_UPDATE
     */
    ,
    BCSDK_RemoteGetAutoUpdateState: ['int', ['int']],
    BCSDK_RemoteSetAutoUpdateState: ['int', ['int', _T.P_BC_AUTO_UPDATE]]
    /* Online New Firmware
     *
     * callback with E_BC_CMD_GET_ONLINE_NEW_FIRMWARE
     */
    ,
    BCSDK_RemoteGetOnlineNewFwInfo: ['int', ['int']]
    /* Performances
     *
     * callback with E_BC_CMD_GET_PERFORMANCE
     */
    ,
    BCSDK_RemoteGetPerformances: ['int', ['int']]
    /* Wifi
     *
     * callback with E_BC_CMD_GET_WIFI_SIGNAL, E_BC_CMD_GET_WIFI_INFO,
     * E_BC_CMD_SET_WIFI_INFO, E_BC_CMD_WIFI_TEST
     */
    ,
    BCSDK_RemoteGetWifiSignal: ['int', ['int']],
    BCSDK_RemoteGetWifiCfg: ['int', ['int']],
    BCSDK_RemoteSetWifiCfg: ['int', ['int', _T.P_BC_WIFI_CFG]],
    BCSDK_RemoteWifiTest: ['int', ['int', _T.P_BC_WIFI_CFG]]
    /* 3g 4g info
     *
     * callback with E_BC_CMD_GET_3G_4G_INFO
     */
    ,
    BCSDK_RemoteGet3g4gInfo: ['int', ['int']]
    /* SIM Module Info
     *
     * callback with E_BC_CMD_GET_SIM_MODULE_INFO, E_BC_CMD_SET_SIM_MODULE_INFO
     */
    ,
    BCSDK_RemoteGetSimModuleInfo: ['int', ['int']],
    BCSDK_RemoteSetSimModuleInfo: ['int', ['int', _T.P_BC_SIM_MODULE_INFO]]
    /* Cloud
     *
     * callback with E_BC_CMD_GET_CLOUD_INFO, E_BC_CMD_BIND_CLOUD, E_BC_CMD_GET_CLOUD_CFG, E_BC_CMD_SET_CLOUD_CFG
     */
    ,
    BCSDK_RemoteGetCloudInfo: ['int', ['int']],
    BCSDK_RemoteBindCloud: ['int', ['int', _T.P_BC_BIND_CLOUD]],
    BCSDK_RemoteGetCloudCfg: ['int', ['int']],
    BCSDK_RemoteSetCloudCfg: ['int', ['int', _T.P_BC_CLOUD_CFG]],
    BCSDK_RemoteGetSignatureLoginCfg: ['int', ['int']],
    BCSDK_RemoteSetSignatureLoginCfg: ['int', ['int', _T.BC_SIGNATURE_LOGIN_CFG]]
    /* sync utc time
     *
     * callback with    E_BC_CMD_SYNC_UTC_TIME
     */
    ,
    BCSDK_RemoteSyncUtcTime: ['int', ['int', _T.BC_UTC_TIME]]
    /* NAS
     *
     * callback with E_BC_CMD_NAS_GET_BIND_INFO, E_BC_CMD_NAS_BIND, E_BC_CMD_NAS_UNBIND
     */
    ,
    BCSDK_RemoteNasGetBindInfo: ['int', ['int']],
    BCSDK_RemoteNasBind: ['int', ['int', _T.BC_NAS_BIND]],
    BCSDK_RemoteNasUnbind: ['int', ['int', _T.BC_NAS_BIND, 'int']]
    /* Scan ap
     *
     * callback with E_BC_CMD_GET_SCAN_AP
     */
    ,
    BCSDK_RemoteGetScanAp: ['int', ['int']]
    /* record file days
     *
     * callback with E_BC_CMD_GET_RECFILEDATE
     */
    ,
    BCSDK_RemoteGetRecFileDaysByChannel: ['int', ['int', _T.P_BC_RECORD_FILE_DAYS_BY_CHN]]
    /* user config
     *
     * callback with E_BC_CMD_GET_USERCFG, E_BC_CMD_SET_USERCFG
     */
    ,
    BCSDK_RemoteGetUserCfg: ['int', ['int']],
    BCSDK_RemoteSetUserCfg: ['int', ['int', _T.P_BC_USER_CFG]]
    /* set user ability
     *
     * callback with E_BC_CMD_SET_USER_ALL_ABILITY
     */
    ,
    BCSDK_RemoteInitNewUserAiblity: ['int', ['int', _T.P_BC_USER_FOR_ABILITY]]
    /* online user config
     *
     * callback with E_BC_CMD_GET_USER_ONLINE, E_BC_CMD_SET_USER_ONLINE
     */
    ,
    BCSDK_RemoteGetOnlineUserCfg: ['int', ['int']],
    BCSDK_RemoteSetOnlineUserCfg: ['int', ['int', _T.P_BC_USER_ONLINE_CFG]]
    /* force user password when first login
     *
     * callback with E_BC_CMD_FORCE_PASSWORD
     */
    ,
    BCSDK_RemoteForceUserPassword: ['int', ['int', _T.P_BC_FORCE_PWD]]
    /* pwd state
     *
     * callback with E_BC_CMD_GET_BOOTPWD_STATE, E_BC_CMD_SET_BOOTPWD_STATE
     */
    ,
    BCSDK_RemoteGetBootPwdState: ['int', ['int']],
    BCSDK_RemoteSetBootPwdState: ['int', ['int', _T.P_BC_BOOT_PWD_STATE]]
    /* upgrade firmware
     *
     * callback with E_BC_CMD_UPGRADE, E_BC_CMD_UPGRADE_PROGRESS
     */
    ,
    BCSDK_RemoteUpgradeFirmware: ['int', ['int', _T.P_BC_UPGRADE_FILE_INFO]]
    /* Ftp Cfg
     *
     * callback with E_BC_CMD_GET_FTPCFG, E_BC_CMD_SET_FTPCFG, E_BC_CMD_FTP_TEST
     */
    ,
    BCSDK_RemoteGetFtpCfg: ['int', ['int']],
    BCSDK_RemoteSetFtpCfg: ['int', ['int', _T.P_BC_FTP_CFG]],
    BCSDK_RemoteSetFtpTest: ['int', ['int', _T.P_BC_FTP_CFG]]
    /* I Frame Support
     */
    ,
    BCSDK_SetDeviceIFramePreview: ['int', ['int', 'bool']],
    BCSDK_SetDeviceIFrameReplay: ['int', ['int', 'bool']]
    /* Reboot
     *
     * callback with E_BC_CMD_REBOOT
     */
    ,
    BCSDK_RemoteReboot: ['int', ['int']]
    /* Device Sleep
     *
     * callback with E_BC_CMD_DEVICE_SLEEP
     */
    ,
    BCSDK_RemoteDeviceSleep: ['int', ['int']]
    /* export/import configuration file
     *
     * callback with E_BC_CMD_EXPORT, E_BC_CMD_EXPORT_PROGRESS, E_BC_CMD_IMPORT, E_BC_CMD_IMPORT_PROGRESS
     */
    ,
    BCSDK_RemoteExportConfig: ['int', ['int', _T.P_BC_CONFIG_FILE_INFO]],
    BCSDK_RemoteImportConfig: ['int', ['int', _T.P_BC_CONFIG_FILE_INFO]]
    /* get log file
     *
     * callback with E_BC_CMD_GETLOG
     */
    ,
    BCSDK_RemoteGetLogFile: ['int', ['int', _T.P_BC_CONFIG_FILE_INFO]]
    /* start alarm report
     *
     * callback with E_BC_CMD_START_ALARM_REPORT, E_BC_CMD_STOP_ALARM_REPORT
     */
    ,
    BCSDK_RemoteStartAlarmReport: ['int', ['int']],
    BCSDK_RemoteStopAlarmReport: ['int', ['int']]
    /* push open
     *
     * callback with E_BC_CMD_PUSH_ADD
     */
    ,
    BCSDK_RemotePushOpen: ['int', ['int', _T.P_BC_PUSH_INFO]]
    /*, BCSDK_RemotePushClose: (handle: number, BC_PUSH_INFO *info);*/
    /* rtmp operation
     *
     * callback with E_BC_CMD_RTMP_START, E_BC_CMD_RTMP_STOP
     */
    ,
    BCSDK_RemoteRtmpStart: ['int', ['int', _T.P_BC_RTMP_OPT]],
    BCSDK_RemoteRtmpStop: ['int', ['int', _T.P_BC_RTMP_OPT]]
    /* covers get
     *
     * callback with E_BC_CMD_COVER_PREVIEW
     */
    /*, BCSDK_RemoteGetCovers:            ['int', ['int', _T.P_BC_GET_FILE_COVERS_CFG]]*/
    /* files Delete
     *
     * callback with E_BC_CMD_REC_FILE_DEL
     */
    ,
    BCSDK_DeleteRecFiles: ['int', ['int', _T.P_BC_DEL_REC_FILES]]
    /* record enable
     *
     * callback with E_BC_CMD_GET_RECORD_ENABLE, E_BC_CMD_SET_RECORD_ENABLE
     */
    ,
    BCSDK_RemoteGetRecordEnable: ['int', ['int']],
    BCSDK_RemoteSetRecordEnable: ['int', ['int', _T.P_BC_ALARM_OUT_ENABLE_CFG]]
    /* Ftp enable
     *
     * callback with E_BC_CMD_GET_FTP_ENABLE, E_BC_CMD_SET_FTP_ENABLE
     */
    ,
    BCSDK_RemoteGetFtpEnable: ['int', ['int']],
    BCSDK_RemoteSetFtpEnable: ['int', ['int', _T.P_BC_ALARM_OUT_ENABLE_CFG]]
    /* Email enable
     *
     * callback with E_BC_CMD_GET_EMAIL_ENABLE, E_BC_CMD_SET_EMAIL_ENABLE
     */
    ,
    BCSDK_RemoteGetEmailEnable: ['int', ['int']],
    BCSDK_RemoteSetEmailEnable: ['int', ['int', _T.P_BC_ALARM_OUT_ENABLE_CFG]]
    /* push enable
     *
     * callback with E_BC_CMD_GET_PUSH_ENABLE, E_BC_CMD_SET_PUSH_ENABLE
     */
    ,
    BCSDK_RemoteGetPushEnable: ['int', ['int']],
    BCSDK_RemoteSetPushEnable: ['int', ['int', _T.P_BC_ALARM_OUT_ENABLE_CFG]]
    /* buzzer enable
     *
     * callback with E_BC_CMD_GET_BUZZER_ENABLE, E_BC_CMD_SET_BUZZER_ENABLE
     */
    ,
    BCSDK_RemoteGetBuzzerEnable: ['int', ['int']],
    BCSDK_RemoteSetBuzzerEnable: ['int', ['int', _T.P_BC_ALARM_OUT_ENABLE_CFG]]
    /************************************************************************
     * MARK: Channel Remote Config
     ************************************************************************/
    /* encode
     *
     * callback with E_BC_CMD_GET_COMPRESS, E_BC_CMD_SET_COMPRESS
     */
    ,
    BCSDK_RemoteGetEncCfg: ['int', ['int', 'int']],
    BCSDK_RemoteSetEncCfg: ['int', ['int', 'int', _T.P_BC_CHN_ENC_INFO]]
    /* osd
     *
     * callback with E_BC_CMD_GET_OSD, E_BC_CMD_SET_OSD
     */
    ,
    BCSDK_RemoteGetOsdCfg: ['int', ['int', 'int']],
    BCSDK_RemoteSetOsdCfg: ['int', ['int', 'int', _T.P_BC_OSD_CFG, 'int']]
    /* cameraCfg
     *
     * callback with E_BC_CMD_GET_CAMERA_CFG, E_BC_CMD_SET_CAMERA_CFG
     */
    ,
    BCSDK_RemoteGetCameraCfg: ['int', ['int', 'int']],
    BCSDK_RemoteSetCameraCfg: ['int', ['int', 'int', _T.P_BC_CAMERA_CFG]]
    /* Shelter
     *
     * callback with E_BC_CMD_GET_COVER, E_BC_CMD_SET_COVER
     */
    ,
    BCSDK_RemoteGetShelter: ['int', ['int', 'int']],
    BCSDK_RemoteSetShelter: ['int', ['int', 'int', _T.P_BC_COVER_CFG]]
    /* record schedule
     *
     * callback with E_BC_CMD_GET_RECORDSCHED, E_BC_CMD_SET_RECORDSCHED
     */
    ,
    BCSDK_RemoteGetRecordSchedule: ['int', ['int', 'int']],
    BCSDK_RemoteSetRecordSchedule: ['int', ['int', 'int', _T.P_BC_RECORD_SCHEDULE_CFG]]
    /* PTZ Config
     *
     * callback with E_BC_CMD_GET_PTZCFG, E_BC_CMD_SET_PTZCFG
     */
    ,
    BCSDK_RemoteGetPtzCfg: ['int', ['int', 'int']],
    BCSDK_RemoteSetPtzCfg: ['int', ['int', 'int', _T.P_BC_PTZ_DECODER]]
    /* Motion Config
     *
     * callback with E_BC_CMD_GET_MOTION, E_BC_CMD_SET_MOTION
     */
    ,
    BCSDK_RemoteGetMotionCfg: ['int', ['int', 'int']],
    BCSDK_RemoteSetMotionCfg: ['int', ['int', 'int', _T.P_BC_MOTION_CFG, 'int']]
    /* AI Config
     *
     * callback with E_BC_CMD_GET_AI_CFG, E_BC_CMD_SET_AI_CFG
     */
    //, BCSDK_RemoteGetAiCfg:             ['int', ['int', 'int']]
    //, BCSDK_RemoteSetAiCfg:             ['int', ['int', 'int', _T.P_BC_AI_CFG, 'int']]
    /* Video Loss
     *
     * callback with E_BC_CMD_GET_VILOST, E_BC_CMD_SET_VILOST
     */
    ,
    BCSDK_RemoteGetVideoLoss: ['int', ['int', 'int']],
    BCSDK_RemoteSetVideoLoss: ['int', ['int', 'int', _T.P_BC_VILOST_CFG]]
    /* ptz preset
     *
     * callback with E_BC_CMD_GET_PRESET, E_BC_CMD_SET_PRESET, E_BC_CMD_GOTO_PRESET
     */
    ,
    BCSDK_RemoteGetPresets: ['int', ['int', 'int']],
    BCSDK_RemoteSetPresets: ['int', ['int', 'int', _T.P_BC_PTZ_PRESETS, 'int']],
    BCSDK_RemotePresetInvoke: ['int', ['int', 'int', 'int']]
    /* ptz cruise
     *
     * callback with E_BC_CMD_GET_CRUISE, E_BC_CMD_SET_CRUISE
     */
    ,
    BCSDK_RemoteGetCruises: ['int', ['int', 'int']],
    BCSDK_RemoteSetCruise: ['int', ['int', 'int', _T.P_BC_PTZ_CRUISES]],
    BCSDK_RemoteCruiseInvoke: ['int', ['int', 'int', 'int']],
    BCSDK_RemoteCruiseStop: ['int', ['int', 'int', 'int']]
    /* isp
     *
     * callback with E_BC_CMD_GET_CAMERA, E_BC_CMD_GET_DEFAULT_CAMERA, E_BC_CMD_SET_CAMERA, E_BC_CMD_SET_ISP_DAY_NIGHT_MODE
     */
    ,
    BCSDK_RemoteGetIspCfg: ['int', ['int', 'int']],
    BCSDK_RemoteGetDefaultIspCfg: ['int', ['int', 'int']],
    BCSDK_RemoteSetIspCfg: ['int', ['int', 'int', _T.P_BC_ISP_CFG, 'int']],
    BCSDK_RemoteSetIspDayNightMode: ['int', ['int', 'int', _T.P_BC_DAY_NIGHT_MODE_CFG]]
    /* LED
     *
     * callback with E_BC_CMD_GET_LED_STATE, E_BC_CMD_SET_LED_STATE
     */
    ,
    BCSDK_RemoteGetLedState: ['int', ['int', 'int']],
    BCSDK_RemoteSetLedState: ['int', ['int', 'int', _T.P_BC_LED_LIGHT_STATE, 'int']]
    /* Floodlight
    *
    * callback with E_BC_CMD_FLOODLIGHT_MANUAL, E_BC_CMD_GET_FLOODLIGHT_TASK, E_BC_CMD_SET_FLOODLIGHT_TASK
    */
    ,
    BCSDK_RemoteFloodlightManual: ['int', ['int', 'int', _T.P_BC_FLOODLIGHT_MANUAL, 'int']],
    BCSDK_RemoteGetFloodlightTask: ['int', ['int', 'int']],
    BCSDK_RemoteSetFloodlightTask: ['int', ['int', 'int', _T.P_BC_FLOODLIGHT_TASK, 'int']]
    /* day night threshold
     *
     * callback with NET_GET_DAY_NIGHT_THRESHOLD_V20, NET_SET_DAY_NIGHT_THRESHOLD_V20
     */
    ,
    BCSDK_RemoteGetDayNightThreshold: ['int', ['int', 'int']],
    BCSDK_RemoteSetDayNightThreshold: ['int', ['int', 'int', _T.P_BC_DAY_NIGHT_THRESHOLD_CFG, 'int']]
    /* Ftp Task
     *
     * callback with E_BC_CMD_GET_FTPTASK, E_BC_CMD_SET_FTPTASK
     */
    ,
    BCSDK_RemoteGetFtpTask: ['int', ['int', 'int']],
    BCSDK_RemoteSetFtpTask: ['int', ['int', 'int', _T.P_BC_FTP_TASK]]
    /* Email Task
     *
     * callback with E_BC_CMD_GET_EMAIL_TASK, E_BC_CMD_SET_EMAIL_TASK
     */
    ,
    BCSDK_RemoteGetEmailTask: ['int', ['int', 'int']],
    BCSDK_RemoteSetEmailTask: ['int', ['int', 'int', _T.P_BC_EMAIL_TASK]]
    /* push task
     *
     * callback with E_BC_CMD_GET_PUSH_TASK, E_BC_CMD_SET_PUSH_TASK
     */
    ,
    BCSDK_RemoteGetPushTask: ['int', ['int', 'int']],
    BCSDK_RemoteSetPushTask: ['int', ['int', 'int', _T.P_BC_PUSH_TASK]]
    /* audio task
     *
     * callback with E_BC_CMD_GET_AUDIO_TASK, E_BC_CMD_SET_AUDIO_TASK
     */
    ,
    BCSDK_RemoteGetAudioTask: ['int', ['int', 'int']],
    BCSDK_RemoteSetAudioTask: ['int', ['int', 'int', _T.P_BC_AUDIO_TASK]]
    /* buzzer task
     *
     * callback with E_BC_CMD_GET_BUZZER_TASK, E_BC_CMD_SET_BUZZER_TASK
     */
    ,
    BCSDK_RemoteGetBuzzerTask: ['int', ['int', 'int']],
    BCSDK_RemoteSetBuzzerTask: ['int', ['int', 'int', _T.P_BC_BUZZER_TASK]]
    /* Snap
     *
     * callback with E_BC_CMD_SNAP
     */
    ,
    BCSDK_RemoteSnap: ['int', ['int', 'int', _T.P_BC_SNAP_INFO]]
    /* Config Stream
     */
    ,
    BCSDK_GetIsConfigStreamOpen: ['int', ['int', 'int', _T.pointer('bool')]],
    BCSDK_ConfigStreamOpen: ['int', ['int', 'int', exports.renderCallbackFunc, _T.pointer('void')]],
    BCSDK_ConfigStreamClose: ['int', ['int', 'int']]
    /* Auto Focus
     *
     * callback with E_BC_CMD_GET_AUTO_FOCUS, E_BC_CMD_SET_AUTO_FOCUS
     */
    ,
    BCSDK_RemoteGetAutoFocus: ['int', ['int', 'int']],
    BCSDK_RemoteSetAutoFocus: ['int', ['int', 'int', _T.P_BC_PTZ_AUTO_FOCUS]]
    /* Zoom Focus
       *
       * callback with E_BC_CMD_GET_ZOOM_FOCUS_INFO, E_BC_CMD_START_ZOOM_FOCUS
       */
    ,
    BCSDK_RemoteGetZoomFocusInfo: ['int', ['int', 'int']],
    BCSDK_RemoteStartZoomFocus: ['int', ['int', 'int', _T.BC_START_ZOOM_FOCUS]]
    /* Crop Cfg
     *
     * callback with E_BC_CMD_GET_CROP_CFG, E_BC_CMD_SET_CROP_CFG
     */
    ,
    BCSDK_RemoteGetCropCfg: ['int', ['int', 'int']],
    BCSDK_RemoteSetCropCfg: ['int', ['int', 'int', _T.P_BC_CROP_CFG]]
    /* Crop Snap
     *
     * callback with E_BC_CMD_CROP_SNAP
     */
    ,
    BCSDK_RemoteCropSnap: ['int', ['int', 'int', _T.P_BC_CROP_SNAP_INFO]]
    /* battery info
     *
     * callback with E_BC_CMD_GET_BATTERY_INFO
     */
    ,
    BCSDK_RemoteGetBatteryInfo: ['int', ['int', 'int']]
    /* battery analysis
     *
     * callback with E_BC_CMD_GET_BATTERY_ANALYSIS
     */
    ,
    BCSDK_RemoteGetBatteryAnalysis: ['int', ['int', 'int']]
    /* ringtone
     *
     * callback with E_BC_CMD_GET_RINGTONE_FILE_INFO
     *               E_BC_CMD_GET_RINGTONE_CFG
     *               E_BC_CMD_SET_RINGTONE_CFG
     *               E_BC_CMD_MANUAL_RING_DOWN
     *               E_BC_CMD_MUTE_ALARM_AUDIO
     *               E_BC_CMD_SAVE_RINGTONE
     *               E_BC_CMD_IMPORT_RINGTONE
     *               E_BC_CMD_IMPORT_RINGTONE_PROGRESS
     *               E_BC_CMD_GET_RINGTONE_ABILITY
     */
    ,
    BCSDK_RemoteGetRingtoneFileInfo: ['int', ['int', 'int']],
    BCSDK_RemoteGetRingtoneCfg: ['int', ['int', 'int']],
    BCSDK_RemoteSetRingtoneCfg: ['int', ['int', 'int', _T.P_BC_RINGTONE_CFG]],
    BCSDK_RemoteManualRingDown: ['int', ['int', 'int', _T.P_BC_MANUAL_RING_DOWN]],
    BCSDK_RemoteMuteAlarmAudio: ['int', ['int', 'int', _T.P_BC_MUTE_ALARM_AUDIO]],
    BCSDK_RemoteSaveRingtone: ['int', ['int', 'int']],
    BCSDK_RemoteImportRingtone: ['int', ['int', 'int', _T.P_BC_RINGTONE_FILE_INFO]],
    BCSDK_RemoteGetRingtoneAbility: ['int', ['int', 'int']],
    BCSDK_RemoteGetChannelVersionInfo: ['int', ['int', 'int']]
    /************************************************************************
     *
     * Search interfaces
     *
     ************************************************************************/
    ,
    BCSDK_AddSearchCallback: ['int', [exports.deviceFoundCallback, _T.pointer('void')]],
    BCSDK_RemoveSearchCallback: ['int', [exports.deviceFoundCallback, _T.pointer('void')]]
    /* start device search loop with loop time
     *
     * @param time              [2,10]
     *
     * @return                  E_NONE, success
     *                          E_ILLEGAL, time is out of [2,10]
     */
    ,
    BCSDK_StartDeviceSearchLoop: ['int', ['int']]
    /* stop device search loop
     *
     */
    ,
    BCSDK_StopDeviceSearchLoop: ['int', []]
    /* start device search once immediately
     *
     * @return                  E_NONE, success
     *                          E_UND, failed
     */
    ,
    BCSDK_DeviceSearchOnce: ['int', []]
    /* start Song P2P device search once immediately
     *
     * @return                  E_NONE, success
     *                          E_UND, failed
     */
    ,
    BCSDK_SongP2PDeviceSearchOnce: ['int', []]
    /************************************************************************
     *
     * Tools interfaces
     *
     ************************************************************************/
    ,
    BCSDK_GetTotalBitrates: ['int', [_T.pointer(ffi.types.longlong)]],
    BCSDK_ReInitP2p: ['void', []],
    BCSDK_GetP2PType: ['int', ['string', _T.pointer('int')]],
    BCSDK_GetSongP2PType: ['int', ['string', _T.pointer('int')]],
    BCSDK_GetSongDeviceInfo: ['int', ['string', _T.pointer('int')]],
    BCSDK_SongP2PGetDebug: ['int', [_T.P_BC_P2P_DEBUG_INFO]],
    BCSDK_XCUID2SongUID: ['int', ['string', _T.P_BC_P2P_UID_INFO]],
    BCSDK_SongP2PGetDetail: ['int', [_T.P_BC_P2P_DETAIL_INFO]],
    BCSDK_GetDiagnoseLogs: ['int', [_T.P_BC_DIAGNOSE_LOGS_LIST]],
    BCSDK_Encrypt: ['int', [_T.P_BC_CRYPT_BUF]],
    BCSDK_Decrypt: ['int', [_T.P_BC_CRYPT_BUF]],
    BCSDK_GetSpeakerVolume: ['int', [_T.pointer('int')]],
    BCSDK_SetSpeakerVolume: ['int', ['int']],
    BCSDK_GetDiskFreeSize: ['int', ['string', _T.pointer('ulonglong')]],
    BCSDK_GetHasWritePermission: ['int', ['string', _T.pointer('bool')]],
    BCSDK_SaveYUVToDisk: ['int', ['string', 'int', 'int', 'int', _T.P_RENDER_VIDEO_PLANE_DESC, _T.P_RENDER_VIDEO_PLANE_DESC, _T.P_RENDER_VIDEO_PLANE_DESC]]
});
class NativeDelegate {
    constructor() {
        /****************************************************************
         *
         *  Methods for Device
         *
         ****************************************************************/
        this.BCSDK_Open = MFFI.BCSDK_Open;
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
        this.BCSDK_GetIsLoginByDefaultPass = MFFI.BCSDK_GetIsLoginByDefaultPass;
        this.BCSDK_GetDeviceNorm = MFFI.BCSDK_GetDeviceNorm;
        this.BCSDK_GetSupportRF = MFFI.BCSDK_GetSupportRF;
        this.BCSDK_GetSupportPush = MFFI.BCSDK_GetSupportPush;
        this.BCSDK_GetSupportReplay = MFFI.BCSDK_GetSupportReplay;
        this.BCSDK_GetSupportReplaySubStream = MFFI.BCSDK_GetSupportReplaySubStream;
        this.BCSDK_GetSupportTimingRecord = MFFI.BCSDK_GetSupportTimingRecord;
        this.BCSDK_GetSupportRecordEnable = MFFI.BCSDK_GetSupportRecordEnable;
        this.BCSDK_GetSupportReplaySpeed = MFFI.BCSDK_GetSupportReplaySpeed;
        this.BCSDK_GetSupportAlarmVideoMark = MFFI.BCSDK_GetSupportAlarmVideoMark;
        this.BCSDK_GetSupportCoverPreview = MFFI.BCSDK_GetSupportCoverPreview;
        this.BCSDK_GetSupportDeleteRecordFiles = MFFI.BCSDK_GetSupportDeleteRecordFiles;
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
        this.BCSDK_GetSupportFTPPicture = MFFI.BCSDK_GetSupportFTPPicture;
        this.BCSDK_GetSupportFTPEnable = MFFI.BCSDK_GetSupportFTPEnable;
        this.BCSDK_GetSupportRTSP = MFFI.BCSDK_GetSupportRTSP;
        this.BCSDK_GetSupportRTMP = MFFI.BCSDK_GetSupportRTMP;
        this.BCSDK_GetSupportONVIF = MFFI.BCSDK_GetSupportONVIF;
        this.BCSDK_GetSupportP2PEnable = MFFI.BCSDK_GetSupportP2PEnable;
        this.BCSDK_GetSupportP2PDomainName = MFFI.BCSDK_GetSupportP2PDomainName;
        this.BCSDK_GetSupportP2PPort = MFFI.BCSDK_GetSupportP2PPort;
        this.BCSDK_GetSupportPppoe = MFFI.BCSDK_GetSupportPppoe;
        this.BCSDK_GetSupportSeek = MFFI.BCSDK_GetSupportSeek;
        this.BCSDK_GetSupportIFramePreview = MFFI.BCSDK_GetSupportIFramePreview;
        this.BCSDK_GetSupportIFrameReplay = MFFI.BCSDK_GetSupportIFrameReplay;
        this.BCSDK_GetSupportHDD = MFFI.BCSDK_GetSupportHDD;
        this.BCSDK_GetSupportSDCard = MFFI.BCSDK_GetSupportSDCard;
        this.BCSDK_GetSupportTimeFormat = MFFI.BCSDK_GetSupportTimeFormat;
        this.BCSDK_GetSupportDateFormat = MFFI.BCSDK_GetSupportDateFormat;
        this.BCSDK_GetSupportEmailTask = MFFI.BCSDK_GetSupportEmailTask;
        this.BCSDK_GetSupportEmailNickName = MFFI.BCSDK_GetSupportEmailNickName;
        this.BCSDK_GetSupportEmailInterval = MFFI.BCSDK_GetSupportEmailInterval;
        this.BCSDK_GetSupportEmailEnable = MFFI.BCSDK_GetSupportEmailEnable;
        this.BCSDK_GetSupportPushTask = MFFI.BCSDK_GetSupportPushTask;
        this.BCSDK_GetSupportPushEnable = MFFI.BCSDK_GetSupportPushEnable;
        this.BCSDK_GetSupportCloud = MFFI.BCSDK_GetSupportCloud;
        this.BCSDK_GetSupportCloudCfg = MFFI.BCSDK_GetSupportCloudCfg;
        this.BCSDK_GetSupportCloudSchedule = MFFI.BCSDK_GetSupportCloudSchedule;
        this.BCSDK_GetSupportCloudSignatureLoginCfg = MFFI.BCSDK_GetSupportCloudSignatureLoginCfg;
        this.BCSDK_GetSupportAccountBind = MFFI.BCSDK_GetSupportAccountBind;
        this.BCSDK_GetSupportServerControlStreamType = MFFI.BCSDK_GetSupportServerControlStreamType;
        this.BCSDK_GetSmarthomeAbility = MFFI.BCSDK_GetSmarthomeAbility;
        this.BCSDK_GetSupportUpgrade = MFFI.BCSDK_GetSupportUpgrade;
        this.BCSDK_GetSupportOutput = MFFI.BCSDK_GetSupportOutput;
        this.BCSDK_GetSupportVideoLoss = MFFI.BCSDK_GetSupportVideoLost;
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
        this.BCSDK_GetSupportShowQrcode = MFFI.BCSDK_GetSupportShowQrcode;
        this.BCSDK_GetSupportChinese = MFFI.BCSDK_GetSupportChinese;
        this.BCSDK_GetSupportNasBind = MFFI.BCSDK_GetSupportNasBind;
        this.BCSDK_GetSupportNasUnbind = MFFI.BCSDK_GetSupportNasUnbind;
        this.BCSDK_GetSupportNasBindStatusInfo = MFFI.BCSDK_GetSupportNasBindStatusInfo;
        this.BCSDK_GetSupportExport = MFFI.BCSDK_GetSupportExport;
        this.BCSDK_GetSupportImport = MFFI.BCSDK_GetSupportImport;
        this.BCSDK_GetSupportSyncUTCTime = MFFI.BCSDK_GetSupportSyncUTCTime;
        this.BCSDK_GetQRAudios = MFFI.BCSDK_GetQRAudios;
        this.BCSDK_GetSupportSamba = MFFI.BCSDK_GetSupportSamba;
        this.BCSDK_GetScheduleVersion = MFFI.BCSDK_GetScheduleVersion;
        this.BCSDK_GetSupportBuzzer = MFFI.BCSDK_GetSupportBuzzer;
        this.BCSDK_GetSupportBuzzerTask = MFFI.BCSDK_GetSupportBuzzerTask;
        this.BCSDK_GetSupportBuzzerEnable = MFFI.BCSDK_GetSupportBuzzerEnable;
        this.BCSDK_GetSupportChannelVersion = MFFI.BCSDK_GetSupportChannelVersion;
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
        this.BCSDK_GetSupportFloodlight = MFFI.BCSDK_GetSupportFloodlight;
        this.BCSDK_GetSupportFloodlightBrightnessCtrl = MFFI.BCSDK_GetSupportFloodlightBrightnessCtrl;
        this.BCSDK_GetSupportFloodlightAutoByPreview = MFFI.BCSDK_GetSupportFloodlightAutoByPreview;
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
        this.BCSDK_GetSupportMDTriggerAudio = MFFI.BCSDK_GetSupportMDTriggerAudio;
        this.BCSDK_GetSupportMDTriggerRecord = MFFI.BCSDK_GetSupportMDTriggerRecord;
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
        this.BCSDK_GetSupportIspDayNightThreshold = MFFI.BCSDK_GetSupportIspDayNightThreshold;
        this.BCSDK_GetSupportAI = MFFI.BCSDK_GetSupportAI;
        this.BCSDK_GetSupportAIPeople = MFFI.BCSDK_GetSupportAIPeople;
        this.BCSDK_GetSupportAIVehicle = MFFI.BCSDK_GetSupportAIVehicle;
        this.BCSDK_GetSupportAIFace = MFFI.BCSDK_GetSupportAIFace;
        this.BCSDK_GetSupportAIAnimal = MFFI.BCSDK_GetSupportAIAnimal;
        this.BCSDK_GetSupportTimelapse = MFFI.BCSDK_GetSupportTimelapse;
        this.BCSDK_GetSupportTimelapseThumbnail = MFFI.BCSDK_GetSupportTimelapseThumbnail;
        /****************************************************************
         *
         *  Methods for Live
         *
         ****************************************************************/
        this.BCSDK_GetLiveStreamType = MFFI.BCSDK_GetLiveStreamType;
        this.BCSDK_LiveOpen = MFFI.BCSDK_LiveOpen;
        this.BCSDK_GetIsLiveOpen = MFFI.BCSDK_GetIsLiveOpen;
        this.BCSDK_LiveClose = MFFI.BCSDK_LiveClose2;
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
        this.BCSDK_PlaybackClose = MFFI.BCSDK_PlaybackClose2;
        this.BCSDK_PlaybackStart = MFFI.BCSDK_PlaybackStart;
        this.BCSDK_PlaybackPause = MFFI.BCSDK_PlaybackPause;
        this.BCSDK_PlaybackStep = MFFI.BCSDK_PlaybackStep;
        this.BCSDK_PlaybackMute = MFFI.BCSDK_PlaybackMute;
        /************************************************************************
         *
         * Talk interfaces
         *
         ************************************************************************/
        this.BCSDK_AudioTalkOpen = MFFI.BCSDK_AudioTalkOpen2;
        this.BCSDK_AudioTalkClose = MFFI.BCSDK_AudioTalkClose;
        this.BCSDK_GetAudioTalkState = MFFI.BCSDK_GetAudioTalkState;
        /************************************************************************
         *
         * Local Reocrd interfaces
         *
         ************************************************************************/
        /**
         * Record Callback
         */
        this.BCSDK_SetDiskCallbacks = MFFI.BCSDK_SetDiskCallbacks;
        this.BCSDK_SetRecordCallback = MFFI.BCSDK_SetRecordCallback;
        // -----------------------------------------------------------------------------------------------------------------
        // Record Folder
        this.BCSDK_SetRecordFolder = MFFI.BCSDK_SetRecordFolder;
        // -----------------------------------------------------------------------------------------------------------------
        // Set Channel Record File Prefixion
        // Default is "DeviceName"CH"ChannelIndex"
        this.BCSDK_SetRecordFilePrefixion = MFFI.BCSDK_SetRecordFilePrefixion;
        // -----------------------------------------------------------------------------------------------------------------
        // Local Record Schedule
        this.BCSDK_SetLocalRecordSchedule = MFFI.BCSDK_SetLocalRecordSchedule;
        this.BCSDK_OpenLocalRecordSchedule = MFFI.BCSDK_OpenLocalRecordSchedule;
        this.BCSDK_CloseLocalRecordSchedule = MFFI.BCSDK_CloseLocalRecordSchedule;
        // -----------------------------------------------------------------------------------------------------------------
        // Device should record with schedule
        // Default is false
        this.BCSDK_SetDeviceAcceptLocalRecordSchedule = MFFI.BCSDK_SetDeviceAcceptLocalRecordSchedule;
        // -----------------------------------------------------------------------------------------------------------------
        // Recording
        this.BCSDK_GetIsRecording = MFFI.BCSDK_GetIsRecording;
        // -----------------------------------------------------------------------------------------------------------------
        // Manual Record
        this.BCSDK_GetIsManualRecordOpened = MFFI.BCSDK_GetIsManualRecordOpened;
        this.BCSDK_OpenManualRecord = MFFI.BCSDK_OpenManualRecord;
        this.BCSDK_CloseManualRecord = MFFI.BCSDK_CloseManualRecord;
        this.BCSDK_GetLocalRecordState = MFFI.BCSDK_GetLocalRecordState;
        // -----------------------------------------------------------------------------------------------------------------
        // Live Record
        this.BCSDK_StartLiveRecord = MFFI.BCSDK_StartLiveRecord;
        this.BCSDK_GetLiveRecordState = MFFI.BCSDK_GetLiveRecordState;
        this.BCSDK_CutLiveRecord = MFFI.BCSDK_CutLiveRecord;
        this.BCSDK_StopLiveRecord = MFFI.BCSDK_StopLiveRecord;
        // -----------------------------------------------------------------------------------------------------------------
        // Playback Record
        this.BCSDK_StartPlaybackRecord = MFFI.BCSDK_StartPlaybackRecord;
        this.BCSDK_GetPlaybackRecordState = MFFI.BCSDK_GetPlaybackRecordState;
        this.BCSDK_CutPlaybackRecord = MFFI.BCSDK_CutPlaybackRecord;
        this.BCSDK_StopPlaybackRecord = MFFI.BCSDK_StopPlaybackRecord;
        /************************************************************************
         *
         * Remote Config interfaces
         *
         ************************************************************************/
        this.BCSDK_GetIsDownloading = MFFI.BCSDK_GetIsDownloading;
        this.BCSDK_StartDownloadFile = MFFI.BCSDK_StartDownloadFile;
        this.BCSDK_StopDownload = MFFI.BCSDK_StopDownload;
        /************************************************************************
         *
         * Remote Config interfaces
         *
         ************************************************************************/
        /************************************************************************
         * MARK: Device Remote Config
         ************************************************************************/
        /* get remote config state for cmd
         *
         * @param cmd               the BC_CMD_E of witch you want to check it's state
         *
         * @param state             it should not be NULL
         *                          it will get back the state of the cmd
         *                          BCSDK_CONFIG_STATE_NOTREADY
         *
         */
        this.BCSDK_RemoteConfigState = MFFI.BCSDK_RemoteConfigState;
        this.BCSDK_RemoteConfigState2 = MFFI.BCSDK_RemoteConfigState2;
        /* system version
         *
         * callback with E_BC_CMD_GET_VERSION
         */
        this.BCSDK_RemoteGetVersionInfo = MFFI.BCSDK_RemoteGetVersionInfo;
        /* system general
         *
         * callback with E_BC_CMD_GET_SYS, E_BC_CMD_SET_SYS, E_BC_CMD_SET_DEVICE_NAME
         */
        this.BCSDK_RemoteGetSysGeneralCfg = MFFI.BCSDK_RemoteGetSysGeneralCfg;
        this.BCSDK_RemoteSetSysGeneralCfg = MFFI.BCSDK_RemoteSetSysGeneralCfg;
        this.BCSDK_RemoteSetDeviceName = MFFI.BCSDK_RemoteSetDeviceName;
        /* autoReboot
         *
         * callback with E_BC_CMD_GET_AUTOREBOOT_CFG, E_BC_CMD_SET_AUTOREBOOT_CFG
         */
        this.BCSDK_RemoteGetAutoRebootCfg = MFFI.BCSDK_RemoteGetAutoRebootCfg;
        // callback with
        this.BCSDK_RemoteSetAutoRebootCfg = MFFI.BCSDK_RemoteSetAutoRebootCfg;
        /* factory default
         *
         * callback with E_BC_CMD_RESTORE
         */
        this.BCSDK_RemoteFactoryDefault = MFFI.BCSDK_RemoteFactoryDefault;
        /* record cfg
         *
         * callback with E_BC_CMD_GET_ADVRECORD, E_BC_CMD_SET_ADVRECORD
         */
        this.BCSDK_RemoteGetRecordGenCfg = MFFI.BCSDK_RemoteGetRecordGenCfg;
        this.BCSDK_RemoteSetRecordGenCfg = MFFI.BCSDK_RemoteSetRecordGenCfg;
        /* email
         *
         * callback with E_BC_CMD_GET_EMAIL, E_BC_CMD_SET_EMAIL, E_BC_CMD_EMAILTEST
         */
        this.BCSDK_RemoteGetMailCfg = MFFI.BCSDK_RemoteGetMailCfg;
        this.BCSDK_RemoteSetMailCfg = MFFI.BCSDK_RemoteSetMailCfg;
        this.BCSDK_RemoteEmailTest = MFFI.BCSDK_RemoteEmailTest;
        /* output
         *
         * callback with E_BC_CMD_GET_OUTPUT, E_BC_CMD_SET_OUTPUT
         */
        this.BCSDK_RemoteGetOutputCfg = MFFI.BCSDK_RemoteGetOutputCfg;
        this.BCSDK_RemoteSetOutputCfg = MFFI.BCSDK_RemoteSetOutputCfg;
        /* HDDCfg
         *
         * callback with E_BC_CMD_GET_HDD_CFG
         */
        this.BCSDK_RemoteGetHDDCfg = MFFI.BCSDK_RemoteGetHDDCfg;
        /* HDD Init
         *
         * callback with E_BC_CMD_INIT_HDD
         */
        this.BCSDK_RemoteInitHdd = MFFI.BCSDK_RemoteInitHdd;
        this.BCSDK_RemoteInitSDCard = MFFI.BCSDK_RemoteInitSDCard;
        /* HDD Full
         *
         * callback with E_BC_CMD_GET_HDDFULL_EXPCFG, E_BC_CMD_SET_HDDFULL_EXPCFG
         */
        this.BCSDK_RemoteGetHDDFull = MFFI.BCSDK_RemoteGetHDDFull;
        this.BCSDK_RemoteSetHDDFull = MFFI.BCSDK_RemoteSetHDDFull;
        /* HDD Error
         *
         * callback with E_BC_CMD_GET_HDDERR_EXPCFG, E_BC_CMD_SET_HDDERR_EXPCFG
         */
        this.BCSDK_RemoteGetHDDError = MFFI.BCSDK_RemoteGetHDDError;
        this.BCSDK_RemoteSetHDDError = MFFI.BCSDK_RemoteSetHDDError;
        /* Network Disconnect
         *
         * callback with E_BC_CMD_GET_NETDISCONNECT_EXPCFG, E_BC_CMD_SET_NETDISCONNECT_EXPCFG
         */
        this.BCSDK_RemoteGetNetDisconnect = MFFI.BCSDK_RemoteGetNetDisconnect;
        this.BCSDK_RemoteSetNetDisconnect = MFFI.BCSDK_RemoteSetNetDisconnect;
        /* IpConflict
         *
         * callback with E_BC_CMD_GET_IPCONFLICT_EXPCFG, E_BC_CMD_SET_IPCONFLICT_EXPCFG
         */
        this.BCSDK_RemoteGetIpConflict = MFFI.BCSDK_RemoteGetIpConflict;
        this.BCSDK_RemoteSetIpConflict = MFFI.BCSDK_RemoteSetIpConflict;
        /* network local
         *
         * callback with E_BC_CMD_GET_LOCAL, E_BC_CMD_SET_LOCAL
         */
        this.BCSDK_RemoteGetNetworkCfg = MFFI.BCSDK_RemoteGetNetworkCfg;
        this.BCSDK_RemoteSetNetworkCfg = MFFI.BCSDK_RemoteSetNetworkCfg;
        /* normalPort
         *
         * callback with E_BC_CMD_GET_NORMAL_PORT, E_BC_CMD_SET_NORMAL_PORT
         */
        this.BCSDK_RemoteGetNetNormalPort = MFFI.BCSDK_RemoteGetNetNormalPort;
        this.BCSDK_RemoteSetNetNormalPort = MFFI.BCSDK_RemoteSetNetNormalPort;
        /* advanced Port
         *
         * callback with E_BC_CMD_GET_ADVANCED_PORTS, E_BC_CMD_SET_ADVANCED_PORTS
         */
        this.BCSDK_RemoteGetNetAdvancedPort = MFFI.BCSDK_RemoteGetNetAdvancedPort;
        this.BCSDK_RemoteSetNetAdvancedPort = MFFI.BCSDK_RemoteSetNetAdvancedPort;
        /* upnpCfg
         *
         * callback with E_BC_CMD_GET_UPNPSTATE, E_BC_CMD_SET_UPNPSTATE
         */
        this.BCSDK_RemoteGetUpnpCfg = MFFI.BCSDK_RemoteGetUpnpCfg;
        this.BCSDK_RemoteSetUpnpCfg = MFFI.BCSDK_RemoteSetUpnpCfg;
        /* uid
         *
         * callback with E_BC_CMD_GET_UID
         */
        this.BCSDK_RemoteGetUidInfo = MFFI.BCSDK_RemoteGetUidInfo;
        /* p2p cfg
         *
         * callback with E_BC_CMD_GET_PTOP_CFG, E_BC_CMD_SET_PTOP_CFG
         */
        this.BCSDK_RemoteGetP2PCfg = MFFI.BCSDK_RemoteGetP2PCfg;
        this.BCSDK_RemoteSetP2PCfg = MFFI.BCSDK_RemoteSetP2PCfg;
        /* RF Sensor
         *
         * callback with E_BC_CMD_GET_RFSENSOR, E_BC_CMD_SET_RFSENSOR
         */
        this.BCSDK_RemoteGetRFSensor = MFFI.BCSDK_RemoteGetRFSensor;
        this.BCSDK_RemoteSetOutArm = MFFI.BCSDK_RemoteSetOutArm;
        this.BCSDK_RemoteSetHomeArm = MFFI.BCSDK_RemoteSetHomeArm;
        this.BCSDK_RemoteSetSleepArm = MFFI.BCSDK_RemoteSetSleepArm;
        this.BCSDK_RemoteSetDisarm = MFFI.BCSDK_RemoteSetDisarm;
        /* Alarm In
         *
         * callback with E_BC_CMD_GET_ALARMINCFG, E_BC_CMD_SET_ALARMINCFG
         */
        this.BCSDK_RemoteGetAlarmIn = MFFI.BCSDK_RemoteGetAlarmIn;
        this.BCSDK_RemoteSetAlarmIn = MFFI.BCSDK_RemoteSetAlarmIn;
        /* Alarm Out
         *
         * callback with E_BC_CMD_GET_ALARMOUTCFG, E_BC_CMD_SET_ALARMOUTCFG
         */
        this.BCSDK_RemoteGetAlarmOut = MFFI.BCSDK_RemoteGetAlarmOut;
        this.BCSDK_RemoteSetAlarmOut = MFFI.BCSDK_RemoteSetAlarmOut;
        /* RF Alarm Cfg
         *
         * callback with E_BC_CMD_GET_RF_CFG, E_BC_CMD_SET_RF_CFG, E_BC_CMD_SET_RF_ALARM_STATUS
         */
        this.BCSDK_RemoteGetRfAlarmCfg = MFFI.BCSDK_RemoteGetRfAlarmCfg;
        this.BCSDK_RemoteSetRfAlarmCfg = MFFI.BCSDK_RemoteSetRfAlarmCfg;
        this.BCSDK_RemoteSetRfAlarmStatus = MFFI.BCSDK_RemoteSetRfAlarmStatus;
        /* DST
         *
         * callback with E_BC_CMD_GET_DST, E_BC_CMD_SET_DST
         */
        this.BCSDK_RemoteGetDst = MFFI.BCSDK_RemoteGetDst;
        this.BCSDK_RemoteSetDst = MFFI.BCSDK_RemoteSetDst;
        /* DDNS
            *
            * callback with E_BC_CMD_GET_DDNSCFG, E_BC_CMD_SET_DDNSCFG
            */
        this.BCSDK_RemoteGetDdns = MFFI.BCSDK_RemoteGetDdns;
        this.BCSDK_RemoteSetDdns = MFFI.BCSDK_RemoteSetDdns;
        /* NTP
         *
         * callback with E_BC_CMD_GET_NTPCFG, E_BC_CMD_SET_NTPCFG
         */
        this.BCSDK_RemoteGetNtp = MFFI.BCSDK_RemoteGetNtp;
        this.BCSDK_RemoteSetNtp = MFFI.BCSDK_RemoteSetNtp;
        /* PPPOE
         *
         * callback with E_BC_CMD_GET_PPPOECFG, E_BC_CMD_SET_PPPOECFG
         */
        this.BCSDK_RemoteGetPppoe = MFFI.BCSDK_RemoteGetPppoe;
        this.BCSDK_RemoteSetPppoe = MFFI.BCSDK_RemoteSetPppoe;
        /* Online Update
         *
         * callback with E_BC_CMD_ONLINE_UPDATE
         */
        this.BCSDK_RemoteOnlineUpate = MFFI.BCSDK_RemoteOnlineUpate;
        /* online updtate status
         *
         * callback with E_BC_CMD_GET_ONLINE_UPDATE_STATUS
         */
        this.BCSDK_RemoteGetOnlineUpdateStatus = MFFI.BCSDK_RemoteGetOnlineUpdateStatus;
        /* Auto Update
         *
         * callback with E_BC_CMD_GET_AUTO_UPDATE, E_BC_CMD_SET_AUTO_UPDATE
         */
        this.BCSDK_RemoteGetAutoUpdateState = MFFI.BCSDK_RemoteGetAutoUpdateState;
        this.BCSDK_RemoteSetAutoUpdateState = MFFI.BCSDK_RemoteSetAutoUpdateState;
        /* Online New Firmware
         *
         * callback with E_BC_CMD_GET_ONLINE_NEW_FIRMWARE
         */
        this.BCSDK_RemoteGetOnlineNewFwInfo = MFFI.BCSDK_RemoteGetOnlineNewFwInfo;
        /* Performances
         *
         * callback with E_BC_CMD_GET_PERFORMANCE
         */
        this.BCSDK_RemoteGetPerformances = MFFI.BCSDK_RemoteGetPerformances;
        /* Wifi
         *
         * callback with E_BC_CMD_GET_WIFI_SIGNAL, E_BC_CMD_GET_WIFI_INFO,
         * E_BC_CMD_SET_WIFI_INFO, E_BC_CMD_WIFI_TEST
         */
        this.BCSDK_RemoteGetWifiSignal = MFFI.BCSDK_RemoteGetWifiSignal;
        this.BCSDK_RemoteGetWifiCfg = MFFI.BCSDK_RemoteGetWifiCfg;
        this.BCSDK_RemoteSetWifiCfg = MFFI.BCSDK_RemoteSetWifiCfg;
        this.BCSDK_RemoteWifiTest = MFFI.BCSDK_RemoteWifiTest;
        /* 3g 4g info
         *
         * callback with E_BC_CMD_GET_3G_4G_INFO
         */
        this.BCSDK_RemoteGet3g4gInfo = MFFI.BCSDK_RemoteGet3g4gInfo;
        /* SIM Module Info
         *
         * callback with E_BC_CMD_GET_SIM_MODULE_INFO, E_BC_CMD_SET_SIM_MODULE_INFO
         */
        this.BCSDK_RemoteGetSimModuleInfo = MFFI.BCSDK_RemoteGetSimModuleInfo;
        this.BCSDK_RemoteSetSimModuleInfo = MFFI.BCSDK_RemoteSetSimModuleInfo;
        /* Cloud
         *
         * callback with E_BC_CMD_GET_CLOUD_INFO, E_BC_CMD_BIND_CLOUD, E_BC_CMD_GET_CLOUD_CFG, E_BC_CMD_SET_CLOUD_CFG
         */
        this.BCSDK_RemoteGetCloudInfo = MFFI.BCSDK_RemoteGetCloudInfo;
        this.BCSDK_RemoteBindCloud = MFFI.BCSDK_RemoteBindCloud;
        this.BCSDK_RemoteGetCloudCfg = MFFI.BCSDK_RemoteGetCloudCfg;
        this.BCSDK_RemoteSetCloudCfg = MFFI.BCSDK_RemoteSetCloudCfg;
        this.BCSDK_RemoteGetSignatureLoginCfg = MFFI.BCSDK_RemoteGetSignatureLoginCfg;
        this.BCSDK_RemoteSetSignatureLoginCfg = MFFI.BCSDK_RemoteSetSignatureLoginCfg;
        /* sync utc time
         *
         * callback with    E_BC_CMD_SYNC_UTC_TIME
         */
        this.BCSDK_RemoteSyncUtcTime = MFFI.BCSDK_RemoteSyncUtcTime;
        /* NAS
         *
         * callback with E_BC_CMD_NAS_GET_BIND_INFO, E_BC_CMD_NAS_BIND, E_BC_CMD_NAS_UNBIND
         */
        this.BCSDK_RemoteNasGetBindInfo = MFFI.BCSDK_RemoteNasGetBindInfo;
        this.BCSDK_RemoteNasBind = MFFI.BCSDK_RemoteNasBind;
        this.BCSDK_RemoteNasUnbind = MFFI.BCSDK_RemoteNasUnbind;
        /* Scan ap
         *
         * callback with E_BC_CMD_GET_SCAN_AP
         */
        this.BCSDK_RemoteGetScanAp = MFFI.BCSDK_RemoteGetScanAp;
        /* record file days
         *
         * callback with E_BC_CMD_GET_RECFILEDATE
         */
        this.BCSDK_RemoteGetRecFileDaysByChannel = MFFI.BCSDK_RemoteGetRecFileDaysByChannel;
        /* user config
         *
         * callback with E_BC_CMD_GET_USERCFG, E_BC_CMD_SET_USERCFG
         */
        this.BCSDK_RemoteGetUserCfg = MFFI.BCSDK_RemoteGetUserCfg;
        this.BCSDK_RemoteSetUserCfg = MFFI.BCSDK_RemoteSetUserCfg;
        /* set user ability
         *
         * callback with E_BC_CMD_SET_USER_ALL_ABILITY
         */
        this.BCSDK_RemoteInitNewUserAiblity = MFFI.BCSDK_RemoteInitNewUserAiblity;
        /* online user config
         *
         * callback with E_BC_CMD_GET_USER_ONLINE, E_BC_CMD_SET_USER_ONLINE
         */
        this.BCSDK_RemoteGetOnlineUserCfg = MFFI.BCSDK_RemoteGetOnlineUserCfg;
        this.BCSDK_RemoteSetOnlineUserCfg = MFFI.BCSDK_RemoteSetOnlineUserCfg;
        /* force user password when first login
        *
        * callback with E_BC_CMD_FORCE_PASSWORD
        */
        this.BCSDK_RemoteForceUserPassword = MFFI.BCSDK_RemoteForceUserPassword;
        /* pwd state
         *
         * callback with E_BC_CMD_GET_BOOTPWD_STATE, E_BC_CMD_SET_BOOTPWD_STATE
         */
        this.BCSDK_RemoteGetBootPwdState = MFFI.BCSDK_RemoteGetBootPwdState;
        this.BCSDK_RemoteSetBootPwdState = MFFI.BCSDK_RemoteSetBootPwdState;
        /* upgrade firmware
         *
         * callback with E_BC_CMD_UPGRADE, E_BC_CMD_UPGRADE_PROGRESS
         */
        this.BCSDK_RemoteUpgradeFirmware = MFFI.BCSDK_RemoteUpgradeFirmware;
        /* Ftp Cfg
         *
         * callback with E_BC_CMD_GET_FTPCFG, E_BC_CMD_SET_FTPCFG, E_BC_CMD_FTP_TEST
         */
        this.BCSDK_RemoteGetFtpCfg = MFFI.BCSDK_RemoteGetFtpCfg;
        this.BCSDK_RemoteSetFtpCfg = MFFI.BCSDK_RemoteSetFtpCfg;
        this.BCSDK_RemoteSetFtpTest = MFFI.BCSDK_RemoteSetFtpTest;
        /* I Frame Support
         */
        this.BCSDK_SetDeviceIFramePreview = MFFI.BCSDK_SetDeviceIFramePreview;
        this.BCSDK_SetDeviceIFrameReplay = MFFI.BCSDK_SetDeviceIFrameReplay;
        /* Reboot
         *
         * callback with E_BC_CMD_REBOOT
         */
        this.BCSDK_RemoteReboot = MFFI.BCSDK_RemoteReboot;
        /* Device Sleep
         *
         * callback with E_BC_CMD_DEVICE_SLEEP
         */
        this.BCSDK_RemoteDeviceSleep = MFFI.BCSDK_RemoteDeviceSleep;
        /* export/import configuration file
         *
         * callback with E_BC_CMD_EXPORT, E_BC_CMD_EXPORT_PROGRESS, E_BC_CMD_IMPORT, E_BC_CMD_IMPORT_PROGRESS
         */
        this.BCSDK_RemoteExportConfig = MFFI.BCSDK_RemoteExportConfig;
        this.BCSDK_RemoteImportConfig = MFFI.BCSDK_RemoteImportConfig;
        /* log file
         *
         * callback with E_BC_CMD_GETLOG
         */
        this.BCSDK_RemoteGetLogFile = MFFI.BCSDK_RemoteGetLogF;
        /* start alarm report
         *
         * callback with E_BC_CMD_START_ALARM_REPORT, E_BC_CMD_STOP_ALARM_REPORT
         */
        this.BCSDK_RemoteStartAlarmReport = MFFI.BCSDK_RemoteStartAlarmReport;
        this.BCSDK_RemoteStopAlarmReport = MFFI.BCSDK_RemoteStopAlarmReport;
        /* push open
         *
        lback with E_BC_CMD_PUSH_ADD
         */
        this.BCSDK_RemotePushOpen = MFFI.BCSDK_RemotePushOpen;
        /*, RemotePushClose: (handle: number, BC_PUSH_INFO *info);*/
        /* rtmp operation
         * callback with E_BC_CMD_RTMP_START,
         */
        this.BCSDK_RemoteRtmpStart = MFFI.BCSDK_RemoteRtmpStart;
        this.BCSDK_RemoteRtmpStop = MFFI.BCSDK_RemoteRtmpStop;
        /* covers get
         *
         * callback with E_BC_CMD_COVER_PREVIEW
         */
        //BCSDK_RemoteGetCovers = MFFI.BCSDK_RemoteGetCovers;
        /* files Delete
         *
         * callback with E_BC_CMD_REC_FILE_DEL
         */
        this.BCSDK_DeleteRecFiles = MFFI.BCSDK_DeleteRecFiles;
        /* record enable
         *
         * callback with E_BC_CMD_GET_RECORD_ENABLE, E_BC_CMD_SET_RECORD_ENABLE
         */
        this.BCSDK_RemoteGetRecordEnable = MFFI.BCSDK_RemoteGetRecordEnable;
        this.BCSDK_RemoteSetRecordEnable = MFFI.BCSDK_RemoteSetRecordEnable;
        /* Ftp enable
         *
         * callback with E_BC_CMD_GET_FTP_ENABLE, E_BC_CMD_SET_FTP_ENABLE
         */
        this.BCSDK_RemoteGetFtpEnable = MFFI.BCSDK_RemoteGetFtpEnable;
        this.BCSDK_RemoteSetFtpEnable = MFFI.BCSDK_RemoteSetFtpEnable;
        /* Email enable
         *
         * callback with E_BC_CMD_GET_EMAIL_ENABLE, E_BC_CMD_SET_EMAIL_ENABLE
         */
        this.BCSDK_RemoteGetEmailEnable = MFFI.BCSDK_RemoteGetEmailEnable;
        this.BCSDK_RemoteSetEmailEnable = MFFI.BCSDK_RemoteSetEmailEnable;
        /* push enable
         *
         * callback with E_BC_CMD_GET_PUSH_ENABLE, E_BC_CMD_SET_PUSH_ENABLE
         */
        this.BCSDK_RemoteGetPushEnable = MFFI.BCSDK_RemoteGetPushEnable;
        this.BCSDK_RemoteSetPushEnable = MFFI.BCSDK_RemoteSetPushEnable;
        /* buzzer enable
         *
         * callback with E_BC_CMD_GET_BUZZER_ENABLE, E_BC_CMD_SET_BUZZER_ENABLE
         */
        this.BCSDK_RemoteGetBuzzerEnable = MFFI.BCSDK_RemoteGetBuzzerEnable;
        this.BCSDK_RemoteSetBuzzerEnable = MFFI.BCSDK_RemoteSetBuzzerEnable;
        /*******************************************************************************
         * MARK: Channel Remote Config
         ******************************************************************************/
        /* encode
         *
         * callback with E_BC_CMD_GET_COMPRESS, E_BC_CMD_SET_COMPRESS
         */
        this.BCSDK_RemoteGetEncCfg = MFFI.BCSDK_RemoteGetEncCfg;
        this.BCSDK_RemoteSetEncCfg = MFFI.BCSDK_RemoteSetEncCfg;
        /* osd
         *
         * callback with E_BC_CMD_GET_OSD, E_BC_CMD_SET_OSD
         */
        this.BCSDK_RemoteGetOsdCfg = MFFI.BCSDK_RemoteGetOsdCfg;
        this.BCSDK_RemoteSetOsdCfg = MFFI.BCSDK_RemoteSetOsdCfg;
        /* cameraCfg
         *
         * callback with E_BC_CMD_GET_CAMERA_CFG, E_BC_CMD_SET_CAMERA_CFG
         */
        this.BCSDK_RemoteGetCameraCfg = MFFI.BCSDK_RemoteGetCameraCfg;
        this.BCSDK_RemoteSetCameraCfg = MFFI.BCSDK_RemoteSetCameraCfg;
        /* Shelter
         *
         * callback with E_BC_CMD_GET_COVER, E_BC_CMD_SET_COVER
         */
        this.BCSDK_RemoteGetShelter = MFFI.BCSDK_RemoteGetShelter;
        this.BCSDK_RemoteSetShelter = MFFI.BCSDK_RemoteSetShelter;
        /* record schedule
         *
         * callback with E_BC_CMD_GET_RECORDSCHED, E_BC_CMD_SET_RECORDSCHED
         */
        this.BCSDK_RemoteGetRecordSchedule = MFFI.BCSDK_RemoteGetRecordSchedule;
        this.BCSDK_RemoteSetRecordSchedule = MFFI.BCSDK_RemoteSetRecordSchedule;
        /* PTZ Config
         *
         * callback with E_BC_CMD_GET_PTZCFG, E_BC_CMD_SET_PTZCFG
         */
        this.BCSDK_RemoteGetPtzCfg = MFFI.BCSDK_RemoteGetPtzCfg;
        this.BCSDK_RemoteSetPtzCfg = MFFI.BCSDK_RemoteSetPtzCfg;
        /* Motion Config
         *
         * callback with E_BC_CMD_GET_MOTION, E_BC_CMD_SET_MOTION
         */
        this.BCSDK_RemoteGetMotionCfg = MFFI.BCSDK_RemoteGetMotionCfg;
        this.BCSDK_RemoteSetMotionCfg = MFFI.BCSDK_RemoteSetMotionCfg;
        /* AI Config
         *
         * callback with E_BC_CMD_GET_AI_CFG, E_BC_CMD_SET_AI_CFG
         */
        //BCSDK_RemoteGetAiCfg    = MFFI.BCSDK_RemoteGetAiCfg;
        //BCSDK_RemoteSetAiCfg    = MFFI.BCSDK_RemoteSetAiCfg;
        /* Video Loss
         *
         * callback with E_BC_CMD_GET_VILOST, E_BC_CMD_SET_VILOST
         */
        this.BCSDK_RemoteGetVideoLoss = MFFI.BCSDK_RemoteGetVideoLoss;
        this.BCSDK_RemoteSetVideoLoss = MFFI.BCSDK_RemoteSetVideoLoss;
        /* ptz preset
         *
         * callback with E_BC_CMD_GET_PRESET, E_BC_CMD_SET_PRESET, E_BC_CMD_GOTO_PRESET
         */
        this.BCSDK_RemoteGetPresets = MFFI.BCSDK_RemoteGetPresets;
        this.BCSDK_RemoteSetPresets = MFFI.BCSDK_RemoteSetPresets;
        this.BCSDK_RemotePresetInvoke = MFFI.BCSDK_RemotePresetInvoke;
        /* ptz cruise
         *
         * callback with E_BC_CMD_GET_CRUISE, E_BC_CMD_SET_CRUISE
         */
        this.BCSDK_RemoteGetCruises = MFFI.BCSDK_RemoteGetCruises;
        this.BCSDK_RemoteSetCruise = MFFI.BCSDK_RemoteSetCruise;
        this.BCSDK_RemoteCruiseInvoke = MFFI.BCSDK_RemoteCruiseInvoke;
        this.BCSDK_RemoteCruiseStop = MFFI.BCSDK_RemoteCruiseStop;
        /* isp
         *
         * callback with E_BC_CMD_GET_CAMERA, E_BC_CMD_GET_DEFAULT_CAMERA, E_BC_CMD_SET_CAMERA, E_BC_CMD_SET_ISP_DAY_NIGHT_MODE
         */
        this.BCSDK_RemoteGetIspCfg = MFFI.BCSDK_RemoteGetIspCfg;
        this.BCSDK_RemoteGetDefaultIspCfg = MFFI.BCSDK_RemoteGetDefaultIspCfg;
        this.BCSDK_RemoteSetIspCfg = MFFI.BCSDK_RemoteSetIspCfg;
        this.BCSDK_RemoteSetIspDayNightMode = MFFI.BCSDK_RemoteSetIspDayNightMode;
        /* LED
         *
         * callback with E_BC_CMD_GET_LED_STATE, E_BC_CMD_SET_LED_STATE
         */
        this.BCSDK_RemoteGetLedState = MFFI.BCSDK_RemoteGetLedState;
        this.BCSDK_RemoteSetLedState = MFFI.BCSDK_RemoteSetLedState;
        /* Floodlight
        *
        * callback with E_BC_CMD_FLOODLIGHT_MANUAL, E_BC_CMD_GET_FLOODLIGHT_TASK, E_BC_CMD_SET_FLOODLIGHT_TASK
        */
        this.BCSDK_RemoteFloodlightManual = MFFI.BCSDK_RemoteFloodlightManual;
        this.BCSDK_RemoteGetFloodlightTask = MFFI.BCSDK_RemoteGetFloodlightTask;
        this.BCSDK_RemoteSetFloodlightTask = MFFI.BCSDK_RemoteSetFloodlightTask;
        /* day night threshold
         *
         * callback with NET_GET_DAY_NIGHT_THRESHOLD_V20, NET_SET_DAY_NIGHT_THRESHOLD_V20
         */
        this.BCSDK_RemoteGetDayNightThreshold = MFFI.BCSDK_RemoteGetDayNightThreshold;
        this.BCSDK_RemoteSetDayNightThreshold = MFFI.BCSDK_RemoteSetDayNightThreshold;
        /* Ftp Task
         *
         * callback with E_BC_CMD_GET_FTPTASK, E_BC_CMD_SET_FTPTASK
         */
        this.BCSDK_RemoteGetFtpTask = MFFI.BCSDK_RemoteGetFtpTask;
        this.BCSDK_RemoteSetFtpTask = MFFI.BCSDK_RemoteSetFtpTask;
        /* Email Task
         *
         * callback with E_BC_CMD_GET_EMAIL_TASK, E_BC_CMD_SET_EMAIL_TASK
         */
        this.BCSDK_RemoteGetEmailTask = MFFI.BCSDK_RemoteGetEmailTask;
        this.BCSDK_RemoteSetEmailTask = MFFI.BCSDK_RemoteSetEmailTask;
        /* push task
         *
         * callback with E_BC_CMD_GET_PUSH_TASK, E_BC_CMD_SET_PUSH_TASK
         */
        this.BCSDK_RemoteGetPushTask = MFFI.BCSDK_RemoteGetPushTask;
        this.BCSDK_RemoteSetPushTask = MFFI.BCSDK_RemoteSetPushTask;
        /* audio task
         *
         * callback with E_BC_CMD_GET_AUDIO_TASK, E_BC_CMD_SET_AUDIO_TASK
         */
        this.BCSDK_RemoteGetAudioTask = MFFI.BCSDK_RemoteGetAudioTask;
        this.BCSDK_RemoteSetAudioTask = MFFI.BCSDK_RemoteSetAudioTask;
        /* buzzer task
         *
         * callback with E_BC_CMD_GET_BUZZER_TASK, E_BC_CMD_SET_BUZZER_TASK
         */
        this.BCSDK_RemoteGetBuzzerTask = MFFI.BCSDK_RemoteGetBuzzerTask;
        this.BCSDK_RemoteSetBuzzerTask = MFFI.BCSDK_RemoteSetBuzzerTask;
        /* Snap
         *
         * callback with E_BC_CMD_SNAP
         */
        this.BCSDK_RemoteSnap = MFFI.BCSDK_RemoteSnap;
        /* Config Stream
         */
        this.BCSDK_GetIsConfigStreamOpen = MFFI.BCSDK_GetIsConfigStreamOpen;
        this.BCSDK_ConfigStreamOpen = MFFI.BCSDK_ConfigStreamOpen;
        this.BCSDK_ConfigStreamClose = MFFI.BCSDK_ConfigStreamClose;
        /* Auto Focus
         *
         * callback with E_BC_CMD_GET_AUTO_FOCUS, E_BC_CMD_SET_AUTO_FOCUS
         */
        this.BCSDK_RemoteGetAutoFocus = MFFI.BCSDK_RemoteGetAutoFocus;
        this.BCSDK_RemoteSetAutoFocus = MFFI.BCSDK_RemoteSetAutoFocus;
        /* Zoom Focus
         *
         * callback with E_BC_CMD_GET_ZOOM_FOCUS_INFO, E_BC_CMD_START_ZOOM_FOCUS
         */
        this.BCSDK_RemoteGetZoomFocusInfo = MFFI.BCSDK_RemoteGetZoomFocusInfo;
        this.BCSDK_RemoteStartZoomFocus = MFFI.BCSDK_RemoteStartZoomFocus;
        /* Crop Cfg
         *
         * callback with E_BC_CMD_GET_CROP_CFG, E_BC_CMD_SET_CROP_CFG
         */
        this.BCSDK_RemoteGetCropCfg = MFFI.BCSDK_RemoteGetCropCfg;
        this.BCSDK_RemoteSetCropCfg = MFFI.BCSDK_RemoteSetCropCfg;
        /* Crop Snap
         *
         * callback with E_BC_CMD_CROP_SNAP
         */
        this.BCSDK_RemoteCropSnap = MFFI.BCSDK_RemoteCropSnap;
        /* battery info
         *
         * callback with E_BC_CMD_GET_BATTERY_INFO
         */
        this.BCSDK_RemoteGetBatteryInfo = MFFI.BCSDK_RemoteGetBatteryInfo;
        /* battery analysis
         *
         * callback with E_BC_CMD_GET_BATTERY_ANALYSIS
         */
        this.BCSDK_RemoteGetBatteryAnalysis = MFFI.BCSDK_RemoteGetBatteryAnalysis;
        /* ringtone
         *
         * callback with E_BC_CMD_GET_RINGTONE_FILE_INFO
         *               E_BC_CMD_GET_RINGTONE_CFG
         *               E_BC_CMD_SET_RINGTONE_CFG
         *               E_BC_CMD_MANUAL_RING_DOWN
         *               E_BC_CMD_MUTE_ALARM_AUDIO
         *               E_BC_CMD_SAVE_RINGTONE
         *               E_BC_CMD_IMPORT_RINGTONE
         *               E_BC_CMD_IMPORT_RINGTONE_PROGRESS
         *               E_BC_CMD_GET_RINGTONE_ABILITY
         */
        this.BCSDK_RemoteGetRingtoneFileInfo = MFFI.BCSDK_RemoteGetRingtoneFileInfo;
        this.BCSDK_RemoteGetRingtoneCfg = MFFI.BCSDK_RemoteGetRingtoneCfg;
        this.BCSDK_RemoteSetRingtoneCfg = MFFI.BCSDK_RemoteSetRingtoneCfg;
        this.BCSDK_RemoteManualRingDown = MFFI.BCSDK_RemoteManualRingDown;
        this.BCSDK_RemoteMuteAlarmAudio = MFFI.BCSDK_RemoteMuteAlarmAudio;
        this.BCSDK_RemoteSaveRingtone = MFFI.BCSDK_RemoteSaveRingtone;
        this.BCSDK_RemoteImportRingtone = MFFI.BCSDK_RemoteImportRingtone;
        this.BCSDK_RemoteGetRingtoneAbility = MFFI.BCSDK_RemoteGetRingtoneAbility;
        /* battery info
         *
         * callback with E_BC_CMD_GET_CHN_VERSION
         */
        this.BCSDK_RemoteGetChannelVersionInfo = MFFI.BCSDK_RemoteGetChannelVersionInfo;
        /************************************************************************
         *
         * Search interfaces
         *
         ************************************************************************/
        this.BCSDK_AddSearchCallback = MFFI.BCSDK_AddSearchCallback;
        this.BCSDK_RemoveSearchCallback = MFFI.BCSDK_RemoveSearchCallback;
        /* start device search loop with loop time
         *
         * @param time              [2,10]
         *
         * @return                  E_NONE, success
         *                          E_ILLEGAL, time is out of [2,10]
         */
        this.BCSDK_StartDeviceSearchLoop = MFFI.BCSDK_StartDeviceSearchLoop;
        /* stop device search loop
         *
         */
        this.BCSDK_StopDeviceSearchLoop = MFFI.BCSDK_StopDeviceSearchLoop;
        /* start device search once immediately
         *
         * @return                  E_NONE, success
         *                          E_UND, failed
         */
        this.BCSDK_DeviceSearchOnce = MFFI.BCSDK_DeviceSearchOnce;
        /* start Song P2P device search once immediately
         *
         * @return                  E_NONE, success
         *                          E_UND, failed
         */
        this.BCSDK_SongP2PDeviceSearchOnce = MFFI.BCSDK_SongP2PDeviceSearchOnce;
        /************************************************************************
         *
         * Tools interfaces
         *
         ************************************************************************/
        // -----------------------------------------------------------------------
        // total bitrate
        this.BCSDK_GetTotalBitrates = MFFI.BCSDK_GetTotalBitrates;
        this.BCSDK_ReInitP2p = MFFI.BCSDK_ReInitP2p;
        this.BCSDK_GetP2PType = MFFI.BCSDK_GetP2PType;
        this.BCSDK_GetSongP2PType = MFFI.BCSDK_GetSongP2PType;
        this.BCSDK_GetSongDeviceInfo = MFFI.BCSDK_GetSongDeviceInfo;
        this.BCSDK_SongP2PGetDebug = MFFI.BCSDK_SongP2PGetDebug;
        this.BCSDK_XCUID2SongUID = MFFI.BCSDK_XCUID2SongUID;
        this.BCSDK_SongP2PGetDetail = MFFI.BCSDK_SongP2PGetDetail;
        this.BCSDK_GetDiagnoseLogs = MFFI.BCSDK_GetDiagnoseLogs;
        this.BCSDK_Encrypt = MFFI.BCSDK_Encrypt;
        this.BCSDK_Decrypt = MFFI.BCSDK_Decrypt;
        this.BCSDK_GetSpeakerVolume = MFFI.BCSDK_GetSpeakerVolume;
        this.BCSDK_SetSpeakerVolume = MFFI.BCSDK_SetSpeakerVolume;
        this.BCSDK_GetDiskFreeSize = MFFI.BCSDK_GetDiskFreeSize;
        this.BCSDK_GetHasWritePermission = MFFI.BCSDK_GetHasWritePermission;
        this.BCSDK_SaveYUVToDisk = MFFI.BCSDK_SaveYUVToDisk;
    }
    static instance() {
        return NativeDelegate.singleton;
    }
}
NativeDelegate.singleton = new NativeDelegate();
exports.native = NativeDelegate.instance();
//# sourceMappingURL=native.js.map