import * as T from '../types';
declare class ABILITY {
    private static singleton;
    private constructor();
    static instance(): ABILITY;
    private static getMethodName;
    private static convertNative;
    /****************************************************************
     *
     *  Methods for Device Abilities
     *
     ****************************************************************/
    setAbilityAbout(handle: number, abilityAbout: T.DEVICE_ABILITY_ABOUT): boolean;
    getSupportRF(handle: number, df?: boolean): Promise<boolean>;
    getSupportPush(handle: number, df?: boolean): Promise<boolean>;
    getSupportReplay(handle: number, df?: boolean): Promise<boolean>;
    getSupportReplaySubStream(handle: number, df?: boolean): Promise<boolean>;
    getSupportTimingRecord(handle: number, df?: boolean): Promise<boolean>;
    getSupportReplaySpeed(handle: number, df?: boolean): Promise<boolean>;
    getSupportAlarmVideoMark(handle: number, df?: boolean): Promise<boolean>;
    getSupportPolling(handle: number, df?: boolean): Promise<boolean>;
    getSupportAutoNtp(handle: number, df?: boolean): Promise<boolean>;
    getSupportWiFi(handle: number, df?: boolean): Promise<boolean>;
    getSupportWiFiCfg(handle: number, df?: boolean): Promise<boolean>;
    getSupportWiFiTest(handle: number, df?: boolean): Promise<boolean>;
    getSupportInitAP(handle: number, df?: boolean): Promise<boolean>;
    getSupportFTP(handle: number, df?: boolean): Promise<boolean>;
    getSupportFTPTest(handle: number, df?: boolean): Promise<boolean>;
    getSupportFTPSubStream(handle: number, df?: boolean): Promise<boolean>;
    getSupportFTPExtensionStream(handle: number, df?: boolean): Promise<boolean>;
    getSupportRTSP(handle: number, df?: boolean): Promise<boolean>;
    getSupportRTMP(handle: number, df?: boolean): Promise<boolean>;
    getSupportONVIF(handle: number, df?: boolean): Promise<boolean>;
    getSupportP2PEnable(handle: number, df?: boolean): Promise<boolean>;
    getSupportP2PDomainName(handle: number, df?: boolean): Promise<boolean>;
    getSupportP2PPort(handle: number, df?: boolean): Promise<boolean>;
    getSupportSeek(handle: number, df?: boolean): Promise<boolean>;
    getSupportIFramePreview(handle: number, df?: boolean): Promise<boolean>;
    getSupportIFrameReplay(handle: number, df?: boolean): Promise<boolean>;
    getSupportSDCard(handle: number, df?: boolean): Promise<boolean>;
    getSupportTimeFormat(handle: number, df?: boolean): Promise<boolean>;
    getSupportEmailTask(handle: number, df?: boolean): Promise<boolean>;
    getSupportEmailNickName(handle: number, df?: boolean): Promise<boolean>;
    getSupportPushTask(handle: number, df?: boolean): Promise<boolean>;
    getSupportCloud(handle: number, df?: boolean): Promise<boolean>;
    getSupportCloudCfg(handle: number, df?: boolean): Promise<boolean>;
    getSupportCloudSchedule(handle: number, df?: boolean): Promise<boolean>;
    getSupportOutput(handle: number, df?: boolean): Promise<boolean>;
    getSupportUpgrade(handle: number, df?: boolean): Promise<boolean>;
    getSupportVideoLost(handle: number, df?: boolean): Promise<boolean>;
    getSupportPTZSetting(handle: number, df?: boolean): Promise<boolean>;
    getSupportPerformance(handle: number, df?: boolean): Promise<boolean>;
    getSupportAutoUpdate(handle: number, df?: boolean): Promise<boolean>;
    getSupportReboot(handle: number, df?: boolean): Promise<boolean>;
    getSupportVideoStandard(handle: number, df?: boolean): Promise<boolean>;
    getSupportUpnp(handle: number, df?: boolean): Promise<boolean>;
    getSupportExceptionCfg(handle: number, df?: boolean): Promise<boolean>;
    getSupportLogSearch(handle: number, df?: boolean): Promise<boolean>;
    getSupportDDNSCfg(handle: number, df?: boolean): Promise<boolean>;
    getSupportMediaPort(handle: number, df?: boolean): Promise<boolean>;
    getSupportHttpPort(handle: number, df?: boolean): Promise<boolean>;
    getSupportHttpsPort(handle: number, df?: boolean): Promise<boolean>;
    getSupportNtp(handle: number, df?: boolean): Promise<boolean>;
    getSupportRecSchedule(handle: number, df?: boolean): Promise<boolean>;
    getSupportEmailInterval(handle: number, df?: boolean): Promise<boolean>;
    getSupportRecSettings(handle: number, df?: boolean): Promise<boolean>;
    getSupportRecOverWriteCfg(handle: number, df?: boolean): Promise<boolean>;
    getSupportRecPreRecordCfg(handle: number, df?: boolean): Promise<boolean>;
    getSupportRecPackDurationCfg(handle: number, df?: boolean): Promise<boolean>;
    getSupportRecRecordExtensionCfg(handle: number, df?: boolean): Promise<boolean>;
    getSupportRecRecordExtensionTimeList(handle: number, df?: boolean): Promise<boolean>;
    getIsWifiIPC(handle: number, df?: boolean): Promise<boolean>;
    getIsIPC(handle: number, df?: boolean): Promise<boolean>;
    getIsNVR(handle: number, df?: boolean): Promise<boolean>;
    getIsBASE(handle: number, df?: boolean): Promise<boolean>;
    getHasAdminPermission(handle: number, df?: boolean): Promise<boolean>;
    getSupportSimModule(handle: number, df?: boolean): Promise<boolean>;
    getDeviceNorm(handle: number, df?: T.BC_DEVICE_NORM_E): Promise<T.BC_DEVICE_NORM_E>;
    getUserVersion(handle: number, df?: number): Promise<number>;
    getPTZMode(handle: number, df?: number): Promise<number>;
    getAlarmInPortCount(handle: number, df?: number): Promise<number>;
    getAlarmOutPortCount(handle: number, df?: number): Promise<number>;
    getDdnsVersion(handle: number, df?: number): Promise<number>;
    getAnalogChannelCount(handle: number, df?: number): Promise<number>;
    getPushType(handle: number, df?: number): Promise<number>;
    /**
     * rfVersion:   0 -> no support;
     *              1 -> old,suppport 3 buttons;
     *              2 -> support RF Remote Config;
     *              3 -> support 4 buttons;
     *              4 -> support RF Remote Config with Sensitivity
     */
    getRfVersion(handle: number, df?: number): Promise<number>;
    getRfNumbers(handle: number, df?: number): Promise<number>;
}
export declare const ability: ABILITY;
export {};
