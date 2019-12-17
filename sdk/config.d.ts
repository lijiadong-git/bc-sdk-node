import * as T from '../types';
declare class CONFIG {
    private static singleton;
    private constructor();
    static instance(): CONFIG;
    private static CMDIDX;
    private static getCmdIndex;
    private static handleSDKGetCallback;
    handleSDKCallback(handle: number, cmdData: any): void;
    private deviceCmd;
    private channelCmd;
    /*******************************************************************************
     * MARK: Device Remote Config
     ******************************************************************************/
    getState(handle: number, channel: number, cmd: T.BC_CMD_E): Promise<T.BCSDK_CONFIG_STATE_E>;
    getState2(handle: number, channel: number, cmd: T.BC_CMD_E, cmdIdx: number): Promise<T.BCSDK_CONFIG_STATE_E>;
    getVersionInfo(handle: number): Promise<T.BC_VERSION_INFO>;
    getSysGeneralCfg(handle: number): Promise<T.BC_SYS_GENERAL_CFG>;
    setSysGeneralCfg(handle: number, param: T.BC_SYS_GENERAL_CFG): Promise<void>;
    setDeviceName(handle: number, param: T.BC_DEVICE_NAME_CFG): Promise<void>;
    getAutoRebootCfg(handle: number): Promise<T.BC_AUTOREBOOT_CFG>;
    setAutoRebootCfg(handle: number, param: T.BC_AUTOREBOOT_CFG): Promise<void>;
    factoryDefault(handle: number, param: T.BC_RESTORE_CFG): Promise<void>;
    getRecordGenCfg(handle: number): Promise<T.BC_RECORD_GENERAL_CFG>;
    setRecordGenCfg(handle: number, param: T.BC_RECORD_GENERAL_CFG): Promise<void>;
    getMailCfg(handle: number): Promise<T.BC_EMAIL_CFG>;
    setMailCfg(handle: number, param: T.BC_EMAIL_CFG): Promise<void>;
    emailTest(handle: number, param: T.BC_EMAIL_CFG): Promise<void>;
    getOutputCfg(handle: number): Promise<T.BC_OUTPUT_CFG>;
    setOutputCfg(handle: number, param: T.BC_OUTPUT_CFG): Promise<void>;
    getHDDCfg(handle: number): Promise<T.BC_HDD_CFG>;
    initHdd(handle: number, param: T.BC_HDD_INIT_CFG): Promise<void>;
    initSDCard(handle: number, param: T.BC_HDD_INIT_CFG): Promise<void>;
    getHDDFull(handle: number): Promise<T.BC_EXCEPTION_CFG>;
    setHDDFull(handle: number, param: T.BC_EXCEPTION_CFG): Promise<void>;
    getHDDError(handle: number): Promise<T.BC_EXCEPTION_CFG>;
    setHDDError(handle: number, param: T.BC_EXCEPTION_CFG): Promise<void>;
    getNetDisconnect(handle: number): Promise<T.BC_EXCEPTION_CFG>;
    setNetDisconnect(handle: number, param: T.BC_EXCEPTION_CFG): Promise<void>;
    getIpConflict(handle: number): Promise<T.BC_EXCEPTION_CFG>;
    setIpConflict(handle: number, param: T.BC_EXCEPTION_CFG): Promise<void>;
    getNetworkCfg(handle: number): Promise<T.BC_LOCAL_CFG>;
    setNetworkCfg(handle: number, param: T.BC_LOCAL_CFG): Promise<void>;
    getNetNormalPort(handle: number): Promise<T.BC_NET_NORMAL_PORT>;
    setNetNormalPort(handle: number, param: T.BC_NET_NORMAL_PORT): Promise<void>;
    getNetAdvancedPort(handle: number): Promise<T.BC_NET_ADVANCED_PORT>;
    setNetAdvancedPort(handle: number, param: T.BC_NET_ADVANCED_PORT): Promise<void>;
    getUpnpCfg(handle: number): Promise<T.BC_UPNP_CFG>;
    setUpnpCfg(handle: number, param: T.BC_UPNP_CFG): Promise<void>;
    getUidInfo(handle: number): Promise<T.BC_UID_INFO>;
    getP2PCfg(handle: number): Promise<T.BC_P2P_CFG>;
    setP2PCfg(handle: number, param: T.BC_P2P_CFG): Promise<void>;
    getRFSensor(handle: number): Promise<T.BC_RFSENSOR_ALARM_INFO>;
    setOutArm(handle: number): Promise<void>;
    setHomeArm(handle: number): Promise<void>;
    setSleepArm(handle: number): Promise<void>;
    setDisarm(handle: number): Promise<void>;
    getAlarmIn(handle: number, inputId: number): Promise<T.BC_ALARM_IN_CFG>;
    setAlarmIn(handle: number, param: T.BC_ALARM_IN_CFG): Promise<void>;
    getAlarmOut(handle: number, outputId: number): Promise<T.BC_ALARM_OUT_CFG>;
    setAlarmOut(handle: number, param: T.BC_ALARM_OUT_CFG): Promise<void>;
    getRfAlarmCfg(handle: number, rfId: number): Promise<T.BC_RF_ALARM_CFG>;
    setRfAlarmCfg(handle: number, param: T.BC_RF_ALARM_CFG): Promise<void>;
    setRfAlarmStatus(handle: number, param: T.BC_RF_ALARM_STATUS): Promise<void>;
    getDst(handle: number): Promise<T.BC_DST_CFG>;
    setDst(handle: number, param: T.BC_DST_CFG): Promise<void>;
    getDdns(handle: number): Promise<T.BC_DDNS_CFG>;
    setDdns(handle: number, param: T.BC_DDNS_CFG): Promise<void>;
    getNtp(handle: number): Promise<T.BC_NTP_CFG>;
    setNtp(handle: number, param: T.BC_NTP_CFG): Promise<void>;
    getPppoe(handle: number): Promise<T.BC_PPPOE_CFG>;
    setPppoe(handle: number, param: T.BC_PPPOE_CFG): Promise<void>;
    onlineUpate(handle: number, param: T.BC_ONLINE_UPDATE): Promise<void>;
    getOnlineUpdateStatus(handle: number): Promise<T.BC_ONLINE_UPDATE_STATUS>;
    getAutoUpdateState(handle: number): Promise<T.BC_AUTO_UPDATE>;
    setAutoUpdateState(handle: number, param: T.BC_AUTO_UPDATE): Promise<void>;
    getOnlineNewFwInfo(handle: number): Promise<T.BC_ONLINE_NEW_FW_INFO>;
    getPerformances(handle: number): Promise<T.BC_PERFORMANCE_INFO>;
    getWifiSignal(handle: number): Promise<T.BC_WIFI_SIGNAL>;
    getWifiCfg(handle: number): Promise<T.BC_WIFI_CFG>;
    setWifiCfg(handle: number, param: T.BC_WIFI_CFG): Promise<void>;
    WifiTest(handle: number, param: T.BC_WIFI_CFG): Promise<void>;
    get3g4gInfo(handle: number): Promise<T.BC_3G_4G_INFO>;
    getSimModuleInfo(handle: number): Promise<T.BC_SIM_MODULE_INFO>;
    setSimModuleInfo(handle: number, param: T.BC_SIM_MODULE_INFO): Promise<void>;
    getCloudInfo(handle: number): Promise<T.BC_CLOUD_INFO>;
    bindCloud(handle: number, param: T.BC_BIND_CLOUD): Promise<void>;
    getCloudCfg(handle: number): Promise<T.BC_CLOUD_CFG>;
    setCloudCfg(handle: number, param: T.BC_CLOUD_CFG): Promise<void>;
    getScanAp(handle: number): Promise<T.BC_SCAN_AP>;
    getRecFileDaysByChannel(handle: number, start: T.BC_TIME, end: T.BC_TIME, channels: number[]): Promise<T.BC_RECORD_FILE_DAYS_BY_CHN>;
    getUserCfg(handle: number): Promise<T.BC_USER_CFG>;
    setUserCfg(handle: number, param: T.BC_USER_CFG): Promise<void>;
    initNewUserAiblity(handle: number, param: T.BC_USER_FOR_ABILITY): Promise<void>;
    getOnlineUserCfg(handle: number): Promise<T.BC_USER_ONLINE_CFG>;
    setOnlineUserCfg(handle: number, param: T.BC_USER_ONLINE_CFG): Promise<void>;
    forceUserPassword(handle: number, param: T.BC_FORCE_PWD): Promise<void>;
    getBootPwdState(handle: number): Promise<T.BC_BOOT_PWD_STATE>;
    setBootPwdState(handle: number, param: T.BC_BOOT_PWD_STATE): Promise<void>;
    upgradeFirmware(handle: number, param: T.BC_UPGRADE_FILE_INFO, callback: T.ProgressCallback): Promise<void>;
    getFtpCfg(handle: number): Promise<T.BC_FTP_CFG>;
    setFtpCfg(handle: number, param: T.BC_FTP_CFG): Promise<void>;
    setFtpTest(handle: number, param: T.BC_FTP_CFG): Promise<void>;
    setIFramePreview(handle: number, iFrame: boolean): Promise<void>;
    setIFrameReplay(handle: number, iFrame: boolean): Promise<void>;
    reboot(handle: number): Promise<void>;
    deviceSleep(handle: number): Promise<void>;
    exportConfig(handle: number, param: T.BC_CONFIG_FILE_INFO, callback: T.ProgressCallback): Promise<void>;
    importConfig(handle: number, param: T.BC_CONFIG_FILE_INFO, callback: T.ProgressCallback): Promise<void>;
    getLogFile(handle: number, param: T.BC_CONFIG_FILE_INFO): Promise<void>;
    startAlarmReport(handle: number): Promise<void>;
    stopAlarmReport(handle: number): Promise<void>;
    pushOpen(handle: number, param: T.BC_PUSH_INFO): Promise<void>;
    rtmpStart(handle: number, param: T.BC_RTMP_OPT): Promise<void>;
    rtmpStop(handle: number, param: T.BC_RTMP_OPT): Promise<void>;
    /*******************************************************************************
     * MARK: Channel Remote Config
     ******************************************************************************/
    getEncCfg(handle: number, channel: number): Promise<T.BC_CHN_ENC_INFO>;
    setEncCfg(handle: number, channel: number, param: T.BC_CHN_ENC_INFO): Promise<void>;
    getOsdCfg(handle: number, channel: number): Promise<T.BC_OSD_CFG>;
    setOsdCfg(handle: number, channel: number, param: T.BC_OSD_CFG): Promise<void>;
    getCameraCfg(handle: number, channel: number): Promise<T.BC_CAMERA_CFG>;
    setCameraCfg(handle: number, channel: number, param: T.BC_CAMERA_CFG): Promise<void>;
    getShelter(handle: number, channel: number): Promise<T.BC_COVER_CFG>;
    setShelter(handle: number, channel: number, param: T.BC_COVER_CFG): Promise<void>;
    getRecordSchedule(handle: number, channel: number): Promise<T.BC_RECORD_SCHEDULE_CFG>;
    setRecordSchedule(handle: number, channel: number, param: T.BC_RECORD_SCHEDULE_CFG): Promise<void>;
    getPtzCfg(handle: number, channel: number): Promise<T.BC_PTZ_DECODER>;
    setPtzCfg(handle: number, channel: number, param: T.BC_PTZ_DECODER): Promise<void>;
    getMotionCfg(handle: number, channel: number): Promise<T.BC_MOTION_CFG>;
    setMotionCfg(handle: number, channel: number, param: T.BC_MOTION_CFG): Promise<void>;
    getVideoLoss(handle: number, channel: number): Promise<T.BC_VILOST_CFG>;
    setVideoLoss(handle: number, channel: number, param: T.BC_VILOST_CFG): Promise<void>;
    getPresets(handle: number, channel: number): Promise<T.BC_PTZ_PRESETS>;
    setPresets(handle: number, channel: number, param: T.BC_PTZ_PRESETS): Promise<void>;
    presetInvoke(handle: number, channel: number, preset: number): Promise<void>;
    getCruises(handle: number, channel: number): Promise<T.BC_PTZ_CRUISES>;
    setCruise(handle: number, channel: number, param: T.BC_PTZ_CRUISES): Promise<void>;
    cruiseInvoke(handle: number, channel: number): Promise<void>;
    cruiseStop(handle: number, channel: number): Promise<void>;
    getIspCfg(handle: number, channel: number): Promise<T.BC_ISP_CFG>;
    getDefaultIspCfg(handle: number, channel: number): Promise<T.BC_ISP_CFG>;
    setIspCfg(handle: number, channel: number, param: T.BC_ISP_CFG): Promise<void>;
    setIspDayNightMode(handle: number, channel: number, param: T.BC_DAY_NIGHT_MODE_CFG): Promise<void>;
    getLedState(handle: number, channel: number): Promise<T.BC_LED_LIGHT_STATE>;
    setLedState(handle: number, channel: number, param: T.BC_LED_LIGHT_STATE): Promise<void>;
    getFtpTask(handle: number, channel: number): Promise<T.BC_FTP_TASK>;
    setFtpTask(handle: number, channel: number, param: T.BC_FTP_TASK): Promise<void>;
    getEmailTask(handle: number, channel: number): Promise<T.BC_EMAIL_TASK>;
    setEmailTask(handle: number, channel: number, param: T.BC_EMAIL_TASK): Promise<void>;
    getPushTask(handle: number, channel: number): Promise<T.BC_PUSH_TASK>;
    setPushTask(handle: number, channel: number, param: T.BC_PUSH_TASK): Promise<void>;
    getAudioTask(handle: number, channel: number): Promise<T.BC_AUDIO_TASK>;
    setAudioTask(handle: number, channel: number, param: T.BC_AUDIO_TASK): Promise<void>;
    snap(handle: number, channel: number, param: T.BC_SNAP_INFO): Promise<void>;
    getAutoFocus(handle: number, channel: number): Promise<T.BC_PTZ_AUTO_FOCUS>;
    setAutoFocus(handle: number, channel: number, param: T.BC_PTZ_AUTO_FOCUS): Promise<void>;
    getCropCfg(handle: number, channel: number): Promise<T.BC_CROP_CFG>;
    setCropCfg(handle: number, channel: number, param: T.BC_CROP_CFG): Promise<void>;
    cropSnap(handle: number, channel: number, param: T.BC_CROP_SNAP_INFO): Promise<void>;
    getBatteryInfo(handle: number, channel: number): Promise<T.BC_BATTERY_INFO>;
    getBatteryAnalysis(handle: number, channel: number): Promise<T.BC_BATTERY_ANALYSIS>;
    getRingtoneFileInfo(handle: number, channel: number): Promise<T.BC_RINGTONE_FILE_INFO>;
    getRingtoneCfg(handle: number, channel: number): Promise<T.BC_RINGTONE_CFG>;
    setRingtoneCfg(handle: number, channel: number, param: T.BC_RINGTONE_CFG): Promise<void>;
    manualRingDown(handle: number, channel: number, param: T.BC_MANUAL_RING_DOWN): Promise<void>;
    muteAlarmAudio(handle: number, channel: number, param: T.BC_MUTE_ALARM_AUDIO): Promise<void>;
    saveRingtone(handle: number, channel: number): Promise<void>;
    getRingtoneAbility(handle: number, channel: number): Promise<T.BC_RINGTONE_ABILITY>;
}
export declare const config: CONFIG;
export {};
