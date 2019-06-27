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
    static getMethodName() {
        let origPST = Error.prepareStackTrace, origSTL = Error.stackTraceLimit, dummy = {}, functionName;
        Error.stackTraceLimit = 5;
        Error.prepareStackTrace = function (e, st) {
            for (let nst of st) {
                if ('getMethodName' == nst.getFunctionName()) {
                    continue;
                }
                if ('convertNative' == nst.getFunctionName()) {
                    continue;
                }
                if ('Promise' == nst.getFunctionName()) {
                    continue;
                }
                functionName = nst.getFunctionName();
                break;
            }
        };
        // run the 'prepareStackTrace' function above
        Error.captureStackTrace(dummy);
        dummy.stack;
        // cleanup
        Error.prepareStackTrace = origPST;
        Error.stackTraceLimit = origSTL;
        return functionName;
    }
    static convertNative(handle, df, channel, method) {
        return new Promise((resolve, reject) => {
            let value = df;
            let funcName = method ? method : ABILITY.getMethodName();
            if (!funcName || 0 === funcName.length) {
                reject(Error('convertNative not find function !!!'));
                return;
            }
            let nativeFuncName = 'BCSDK_' + funcName.substring(0, 1).toUpperCase() + funcName.substring(1);
            let func = native_1.native[nativeFuncName];
            if (!func) {
                reject(Error('convertNative not find function : ' + nativeFuncName + '!!!'));
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
                reject(Error('convertNative not support type !!!'));
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
    getDeviceType(handle, df) { return ABILITY.convertNative(handle, df ? df : 2); }
    getSupportRF(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportPush(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportReplay(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportReplaySubStream(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportTimingRecord(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportReplaySpeed(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportAlarmVideoMark(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportPolling(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportAutoNtp(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportWiFi(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportWiFiCfg(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportWiFiTest(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportInitAP(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportFTP(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportFTPTest(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportFTPSubStream(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportFTPExtensionStream(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportRTSP(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportRTMP(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportONVIF(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportP2PEnable(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportP2PDomainName(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportP2PPort(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportSeek(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportIFramePreview(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportIFrameReplay(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportHDD(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportSDCard(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportTimeFormat(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportEmailTask(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportEmailNickName(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportPushTask(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportCloud(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportCloudCfg(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportCloudSchedule(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportOutput(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportUpgrade(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportVideoLoss(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportPTZSetting(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportPerformance(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportAutoUpdate(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportReboot(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportVideoStandard(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportUpnp(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportExceptionCfg(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportLogSearch(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportDDNSCfg(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportMediaPort(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportHttpPort(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportHttpsPort(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportNtp(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportRecSchedule(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportEmailInterval(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportRecSettings(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportRecOverWriteCfg(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportRecPreRecordCfg(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportRecPackDurationCfg(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportRecRecordExtensionCfg(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportRecRecordExtensionTimeList(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getIsWifiIPC(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getIsIPC(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getIsNVR(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getIsBASE(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getHasAdminPermission(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportSimModule(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getIsLoginByDefaultPass(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportFTPPicture(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportPppoe(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportDateFormat(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportCloudSignatureLoginCfg(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportAccountBind(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportShowQrcode(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportChinese(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportNasBind(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportNasUnbind(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportNasBindStatusInfo(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportExport(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    getSupportImport(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
    // get number properties
    getDeviceNorm(handle, df) { return ABILITY.convertNative(handle, df ? df : -1); }
    getUserVersion(handle, df) { return ABILITY.convertNative(handle, df ? df : 0); }
    getPTZMode(handle, df) { return ABILITY.convertNative(handle, df ? df : 0); }
    getAlarmInPortCount(handle, df) { return ABILITY.convertNative(handle, df ? df : 0); }
    getAlarmOutPortCount(handle, df) { return ABILITY.convertNative(handle, df ? df : 0); }
    getDdnsVersion(handle, df) { return ABILITY.convertNative(handle, df ? df : 0); }
    getAnalogChannelCount(handle, df) { return ABILITY.convertNative(handle, df ? df : 0); }
    getPushType(handle, df) { return ABILITY.convertNative(handle, df ? df : 0); }
    /**
     * rfVersion:   0 -> no support;
     *              1 -> old,suppport 3 buttons;
     *              2 -> support RF Remote Config;
     *              3 -> support 4 buttons;
     *              4 -> support RF Remote Config with Sensitivity
     */
    getRfVersion(handle, df) { return ABILITY.convertNative(handle, df ? df : 0); }
    getRfNumbers(handle, df) { return ABILITY.convertNative(handle, df ? df : 0); }
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
    getIsVideoLoss(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportCameraMode(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportExtenStream(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportExtenStreamCfg(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportLEDControl(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIndicatorLight(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportPtzSpeed(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportPtzCruise(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportPtzPreset(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportPt(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportAutoPt(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportZoomAndFocus(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportAudio(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportAutoFocus(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportCropSnap(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportTalk(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportMD(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportMDWithPIR(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportShelterCfg(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getIsBattery(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getIsCharge(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportBatAnalysis(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportAudioAlarmEnable(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportAudioAlarmSchedule(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportManualRingDown(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportCustomRingtone(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportOsdPadding(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportOsdWaterMark(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspDayNight(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspAntiFlick(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspExposureMode(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspWhiteBalance(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspBacklight(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIsp3dnr(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspMirror(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspFlip(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspBright(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspContrast(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspSatruation(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspHue(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportIspSharpen(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportMDTriggerAudio(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
    getSupportMDTriggerRecord(handle, channel, df) { return ABILITY.convertNative(handle, df ? df : false, channel); }
}
ABILITY.singleton = new ABILITY();
exports.ability = ABILITY.instance();
//# sourceMappingURL=ability.js.map