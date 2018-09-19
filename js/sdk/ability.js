"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref = require('ref');
const native_1 = require("./native");
const _T = require("./_struct");
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
    static convertNative(handle, df, method) {
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
            func.call(native_1.native, handle, buf);
            value = buf.deref();
            resolve(value);
        });
    }
    // private static convertNativeBool(handle: number, defaultv?: boolean, method?: string) : boolean {
    //     let value: boolean = defaultv ? defaultv : false;
    //     let funcName: string | undefined = method ? method : ABILITY.getMethodName();
    //     if (!funcName || 0 === funcName.length) {
    //         return value;
    //     }
    //     let nativeFuncName = 'BCSDK_' + funcName.substring(0, 1).toUpperCase() + funcName.substring(1)
    //     let func:any = (<any>native)[nativeFuncName];
    //     if (!func) {
    //         return value;
    //     }
    //     let buf = ref.alloc(ref.types.bool, value);
    //     func.call(native, handle, buf);
    //     value = buf.deref();
    //     return value;
    // }
    // private static convertNativeInt(handle: number, defaultv?: number, method?: string) : number {
    //     let value: number = defaultv ? defaultv : 0;
    //     let funcName: string | undefined = method ? method : ABILITY.getMethodName();
    //     if (!funcName || 0 === funcName.length) {
    //         console.log(new Error('function not found ...'));
    //         return value;
    //     }
    //     let nativeFuncName = 'BCSDK_' + funcName.substring(0, 1).toUpperCase() + funcName.substring(1)
    //     let func:any = (<any>native)[nativeFuncName];
    //     if (!func) {
    //         console.log(new Error('function not found ...' + nativeFuncName));
    //         return value;
    //     }
    //     let buf = ref.alloc(ref.types.int, value);
    //     func.call(native, handle, buf);
    //     value = buf.deref();
    //     return value;
    // }
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
    getSupportVideoLost(handle, df) { return ABILITY.convertNative(handle, df ? df : false); }
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
}
ABILITY.singleton = new ABILITY();
exports.ability = ABILITY.instance();
//# sourceMappingURL=ability.js.map