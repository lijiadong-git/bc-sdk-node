"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref = require("ref");
const native_1 = require("./native");
const _T = require("./_struct");
const _cast_1 = require("./_cast");
class ABILITY {
    constructor() {
    }
    static instance() {
        return ABILITY.singleton;
    }
    static nativeCall(func, handle, df, channel) {
        return new Promise((resolve, reject) => {
            let value = df;
            if (!func) {
                reject(Error('nativeCall not find function !!!'));
                return;
            }
            let buf;
            switch (typeof df) {
                case 'number':
                    buf = ref.alloc(ref.types.int, value);
                    break;
                case 'boolean':
                    buf = ref.alloc(ref.types.bool, value);
                    break;
                default:
                    break;
            }
            if (!buf) {
                reject(Error('nativeCall not support type !!!'));
                return;
            }
            undefined != channel ?
                func.call(native_1.native, handle, channel, buf) :
                func.call(native_1.native, handle, buf);
            value = ref.deref(buf);
            resolve(value);
        });
    }
    /****************************************************************
     *
     *  Methods for Device Abilities
     *
     ****************************************************************/
    setAbilityAbout(handle, abilityAbout) {
        let temp = new _T.DEVICE_ABILITY_ABOUT({
            isBattery: abilityAbout.isBattery,
            qrCode: abilityAbout.qrCode,
            type: abilityAbout.type
        });
        return native_1.native.BCSDK_SetAbilityAbout(handle, temp.ref()) >= 0;
    }
    getDeviceType(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetDeviceType, handle, df ? df : 2); }
    getSupportRF(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRF, handle, df ? df : false); }
    getSupportPush(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPush, handle, df ? df : false); }
    getSupportReplay(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportReplay, handle, df ? df : false); }
    getSupportReplaySubStream(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportReplaySubStream, handle, df ? df : false); }
    getSupportTimingRecord(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportTimingRecord, handle, df ? df : false); }
    getSupportRecordEnable(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRecordEnable, handle, df ? df : false); }
    getSupportReplaySpeed(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportReplaySpeed, handle, df ? df : false); }
    getSupportAlarmVideoMark(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAlarmVideoMark, handle, df ? df : false); }
    getSupportCoverPreview(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportCoverPreview, handle, df ? df : false); }
    getSupportDeleteRecordFiles(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportDeleteRecordFiles, handle, df ? df : false); }
    getSupportPolling(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPolling, handle, df ? df : false); }
    getSupportAutoNtp(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAutoNtp, handle, df ? df : false); }
    getSupportWiFi(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportWiFi, handle, df ? df : false); }
    getSupportWiFiCfg(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportWiFiCfg, handle, df ? df : false); }
    getSupportWiFiTest(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportWiFiTest, handle, df ? df : false); }
    getSupportInitAP(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportInitAP, handle, df ? df : false); }
    getSupportFTP(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportFTP, handle, df ? df : false); }
    getSupportFTPTest(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportFTPTest, handle, df ? df : false); }
    getSupportFTPSubStream(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportFTPSubStream, handle, df ? df : false); }
    getSupportFTPExtensionStream(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportFTPExtensionStream, handle, df ? df : false); }
    getSupportFTPPicture(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportFTPPicture, handle, df ? df : false); }
    getSupportFTPEnable(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportFTPEnable, handle, df ? df : false); }
    getSupportRTSP(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRTSP, handle, df ? df : false); }
    getSupportRTMP(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRTMP, handle, df ? df : false); }
    getSupportONVIF(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportONVIF, handle, df ? df : false); }
    getSupportP2PEnable(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportP2PEnable, handle, df ? df : false); }
    getSupportP2PDomainName(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportP2PDomainName, handle, df ? df : false); }
    getSupportP2PPort(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportP2PPort, handle, df ? df : false); }
    getSupportSeek(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportSeek, handle, df ? df : false); }
    getSupportIFramePreview(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIFramePreview, handle, df ? df : false); }
    getSupportIFrameReplay(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIFrameReplay, handle, df ? df : false); }
    getSupportHDD(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportHDD, handle, df ? df : false); }
    getSupportSDCard(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportSDCard, handle, df ? df : false); }
    getSupportTimeFormat(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportTimeFormat, handle, df ? df : false); }
    getSupportEmailTask(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportEmailTask, handle, df ? df : false); }
    getSupportEmailNickName(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportEmailNickName, handle, df ? df : false); }
    getSupportEmailInterval(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportEmailInterval, handle, df ? df : false); }
    getSupportEmailEnable(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportEmailEnable, handle, df ? df : false); }
    getSupportPushTask(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPushTask, handle, df ? df : false); }
    getSupportPushEnable(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPushEnable, handle, df ? df : false); }
    getSupportCloud(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportCloud, handle, df ? df : false); }
    getSupportCloudCfg(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportCloudCfg, handle, df ? df : false); }
    getSupportCloudSchedule(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportCloudSchedule, handle, df ? df : false); }
    getSupportOutput(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportOutput, handle, df ? df : false); }
    getSupportUpgrade(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportUpgrade, handle, df ? df : false); }
    getSupportVideoLoss(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportVideoLoss, handle, df ? df : false); }
    getSupportPTZSetting(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPTZSetting, handle, df ? df : false); }
    getSupportPerformance(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPerformance, handle, df ? df : false); }
    getSupportAutoUpdate(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAutoUpdate, handle, df ? df : false); }
    getSupportReboot(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportReboot, handle, df ? df : false); }
    getSupportVideoStandard(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportVideoStandard, handle, df ? df : false); }
    getSupportUpnp(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportUpnp, handle, df ? df : false); }
    getSupportExceptionCfg(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportExceptionCfg, handle, df ? df : false); }
    getSupportLogSearch(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportLogSearch, handle, df ? df : false); }
    getSupportDDNSCfg(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportDDNSCfg, handle, df ? df : false); }
    getSupportMediaPort(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportMediaPort, handle, df ? df : false); }
    getSupportHttpPort(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportHttpPort, handle, df ? df : false); }
    getSupportHttpsPort(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportHttpsPort, handle, df ? df : false); }
    getSupportNtp(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportNtp, handle, df ? df : false); }
    getSupportRecSchedule(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRecSchedule, handle, df ? df : false); }
    getSupportRecSettings(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRecSettings, handle, df ? df : false); }
    getSupportRecOverWriteCfg(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRecOverWriteCfg, handle, df ? df : false); }
    getSupportRecPreRecordCfg(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRecPreRecordCfg, handle, df ? df : false); }
    getSupportRecPackDurationCfg(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRecPackDurationCfg, handle, df ? df : false); }
    getSupportRecRecordExtensionCfg(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRecRecordExtensionCfg, handle, df ? df : false); }
    getSupportRecRecordExtensionTimeList(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportRecRecordExtensionTimeList, handle, df ? df : false); }
    getIsWifiIPC(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetIsWifiIPC, handle, df ? df : false); }
    getIsIPC(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetIsIPC, handle, df ? df : false); }
    getIsNVR(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetIsNVR, handle, df ? df : false); }
    getIsBASE(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetIsBASE, handle, df ? df : false); }
    getHasAdminPermission(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetHasAdminPermission, handle, df ? df : false); }
    getSupportSimModule(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportSimModule, handle, df ? df : false); }
    getIsLoginByDefaultPass(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetIsLoginByDefaultPass, handle, df ? df : false); }
    getSupportPppoe(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPppoe, handle, df ? df : false); }
    getSupportDateFormat(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportDateFormat, handle, df ? df : false); }
    getSupportCloudSignatureLoginCfg(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportCloudSignatureLoginCfg, handle, df ? df : false); }
    getSupportAccountBind(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAccountBind, handle, df ? df : false); }
    getSupportServerControlStreamType(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportServerControlStreamType, handle, df ? df : false); }
    getSupportShowQrcode(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportShowQrcode, handle, df ? df : false); }
    getSupportChinese(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportChinese, handle, df ? df : false); }
    getSupportNasBind(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportNasBind, handle, df ? df : false); }
    getSupportNasUnbind(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportNasUnbind, handle, df ? df : false); }
    getSupportNasBindStatusInfo(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportNasBindStatusInfo, handle, df ? df : false); }
    getSupportExport(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportExport, handle, df ? df : false); }
    getSupportImport(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportImport, handle, df ? df : false); }
    getSupportSyncUTCTime(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportSyncUTCTime, handle, df ? df : false); }
    getSupportSamba(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportSamba, handle, df ? df : false); }
    getScheduleVersion(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetScheduleVersion, handle, df ? df : false); }
    getSupportBuzzer(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportBuzzer, handle, df ? df : false); }
    getSupportBuzzerTask(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportBuzzerTask, handle, df ? df : false); }
    getSupportBuzzerEnable(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportBuzzerEnable, handle, df ? df : false); }
    getSupportChannelVersion(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportChannelVersion, handle, df ? df : false); }
    // get number properties
    getDeviceNorm(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetDeviceNorm, handle, df ? df : -1); }
    getUserVersion(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetUserVersion, handle, df ? df : 0); }
    getPTZMode(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetPTZMode, handle, df ? df : 0); }
    getAlarmInPortCount(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetAlarmInPortCount, handle, df ? df : 0); }
    getAlarmOutPortCount(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetAlarmOutPortCount, handle, df ? df : 0); }
    getDdnsVersion(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetDdnsVersion, handle, df ? df : 0); }
    getAnalogChannelCount(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetAnalogChannelCount, handle, df ? df : 0); }
    getPushType(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetPushType, handle, df ? df : 0); }
    /**
     * rfVersion:   0 -> no support;
     *              1 -> old,suppport 3 buttons;
     *              2 -> support RF Remote Config;
     *              3 -> support 4 buttons;
     *              4 -> support RF Remote Config with Sensitivity
     */
    getRfVersion(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetRfVersion, handle, df ? df : 0); }
    getRfNumbers(handle, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetRfNumbers, handle, df ? df : 0); }
    getSmarthomeAbility(handle) {
        return new Promise((resolve, reject) => {
            let param = new _T.BC_SMARTHOME_ABILITY_INFO();
            let ret = native_1.native.BCSDK_GetSmarthomeAbility(handle, param.ref());
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            let et = _cast_1.derefCast(param, _T.BC_SMARTHOME_ABILITY_INFO);
            resolve(et);
        });
    }
    getQRAudios(handle) {
        return new Promise((resolve, reject) => {
            let info = new _T.BC_QR_AUDIOS_INFO();
            let ret = native_1.native.BCSDK_GetQRAudios(handle, info.ref());
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            let et = _cast_1.derefCast(info, _T.BC_QR_AUDIOS_INFO);
            resolve(et);
        });
    }
    ;
    /****************************************************************
     *
     *  Methods for Channel Abilities
     *
     ****************************************************************/
    getEncodeTable(handle, channel) {
        return new Promise((resolve, reject) => {
            let enctab = new _T.BC_ENC_PROFILE_TABLE();
            let ret = native_1.native.BCSDK_GetEncodeTable(handle, channel, enctab.ref());
            if (ret < 0) {
                reject({ code: ret });
                return;
            }
            let et = _cast_1.derefCast(enctab, _T.BC_ENC_PROFILE_TABLE);
            resolve(et);
        });
    }
    ;
    getIsVideoLoss(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetIsVideoLoss, handle, df ? df : false, channel); }
    getSupportCameraMode(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportCameraMode, handle, df ? df : false, channel); }
    getSupportExtenStream(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportExtenStream, handle, df ? df : false, channel); }
    getSupportExtenStreamCfg(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportExtenStreamCfg, handle, df ? df : false, channel); }
    getSupportLEDControl(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportLEDControl, handle, df ? df : false, channel); }
    getSupportIndicatorLight(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIndicatorLight, handle, df ? df : false, channel); }
    getSupportFloodlight(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportFloodlight, handle, df ? df : false, channel); }
    getSupportFloodlightBrightnessCtrl(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportFloodlightBrightnessCtrl, handle, df ? df : false, channel); }
    getSupportFloodlightAutoByPreview(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportFloodlightAutoByPreview, handle, df ? df : false, channel); }
    getSupportPtzSpeed(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPtzSpeed, handle, df ? df : false, channel); }
    getSupportPtzCruise(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPtzCruise, handle, df ? df : false, channel); }
    getSupportPtzPreset(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPtzPreset, handle, df ? df : false, channel); }
    getSupportPt(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportPt, handle, df ? df : false, channel); }
    getSupportAutoPt(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAutoPt, handle, df ? df : false, channel); }
    getSupportZoomAndFocus(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportZoomAndFocus, handle, df ? df : false, channel); }
    getSupportZoomAndFocusSliderCfg(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportZoomAndFocusSliderCfg, handle, df ? df : false, channel); }
    getSupportAudio(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAudio, handle, df ? df : false, channel); }
    getSupportAutoFocus(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAutoFocus, handle, df ? df : false, channel); }
    getSupportCropSnap(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportCropSnap, handle, df ? df : false, channel); }
    getSupportTalk(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportTalk, handle, df ? df : false, channel); }
    getSupportMD(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportMD, handle, df ? df : false, channel); }
    getSupportMDWithPIR(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportMDWithPIR, handle, df ? df : false, channel); }
    getSupportMDTriggerAudio(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportMDTriggerAudio, handle, df ? df : false, channel); }
    getSupportMDTriggerRecord(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportMDTriggerRecord, handle, df ? df : false, channel); }
    getSupportShelterCfg(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportShelterCfg, handle, df ? df : false, channel); }
    getIsBattery(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetIsBattery, handle, df ? df : false, channel); }
    getIsCharge(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetIsCharge, handle, df ? df : false, channel); }
    getSupportBatAnalysis(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportBatAnalysis, handle, df ? df : false, channel); }
    getSupportAudioAlarmEnable(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAudioAlarmEnable, handle, df ? df : false, channel); }
    getSupportAudioAlarmSchedule(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAudioAlarmSchedule, handle, df ? df : false, channel); }
    getSupportManualRingDown(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportManualRingDown, handle, df ? df : false, channel); }
    getSupportCustomRingtone(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportCustomRingtone, handle, df ? df : false, channel); }
    getSupportOsdPadding(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportOsdPadding, handle, df ? df : false, channel); }
    getSupportOsdWaterMark(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportOsdWaterMark, handle, df ? df : false, channel); }
    getSupportIspDayNight(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspDayNight, handle, df ? df : false, channel); }
    getSupportIspAntiFlick(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspAntiFlick, handle, df ? df : false, channel); }
    getSupportIspExposureMode(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspExposureMode, handle, df ? df : false, channel); }
    getSupportIspWhiteBalance(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspWhiteBalance, handle, df ? df : false, channel); }
    getSupportIspBacklight(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspBacklight, handle, df ? df : false, channel); }
    getSupportIsp3dnr(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIsp3dnr, handle, df ? df : false, channel); }
    getSupportIspMirror(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspMirror, handle, df ? df : false, channel); }
    getSupportIspFlip(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspFlip, handle, df ? df : false, channel); }
    getSupportIspBright(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspBright, handle, df ? df : false, channel); }
    getSupportIspContrast(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspContrast, handle, df ? df : false, channel); }
    getSupportIspSatruation(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspSatruation, handle, df ? df : false, channel); }
    getSupportIspHue(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspHue, handle, df ? df : false, channel); }
    getSupportIspSharpen(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspSharpen, handle, df ? df : false, channel); }
    getSupportIspDayNightThreshold(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportIspDayNightThreshold, handle, df ? df : false, channel); }
    getSupportAI(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAI, handle, df ? df : false, channel); }
    getSupportAIPeople(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAIPeople, handle, df ? df : false, channel); }
    getSupportAIVehicle(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAIVehicle, handle, df ? df : false, channel); }
    getSupportAIFace(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAIFace, handle, df ? df : false, channel); }
    getSupportAIAnimal(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportAIAnimal, handle, df ? df : false, channel); }
    getSupportTimelapse(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportTimelapse, handle, df ? df : false, channel); }
    getSupportTimelapseThumbnail(handle, channel, df) { return ABILITY.nativeCall(native_1.native.BCSDK_GetSupportTimelapseThumbnail, handle, df ? df : false, channel); }
}
ABILITY.singleton = new ABILITY();
exports.ability = ABILITY.instance();
//# sourceMappingURL=ability.js.map