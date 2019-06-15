#ifndef _BCSDK_WRAPPER_REMOTE_CONFIG_H_
#define _BCSDK_WRAPPER_REMOTE_CONFIG_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
    /*******************************************************************************
     * MARK: Device Remote Config
     ******************************************************************************/
    
    /* get remote config state for cmd
     *
     * @param cmd               the BC_CMD_E of witch you want to check it's state
     *
     * @param state             it should not be NULL
     *                          it will get back the state of the cmd
     *                          BCSDK_CONFIG_STATE_NOTREADY
     *
     */
    int _BCSDK_ BCSDK_RemoteConfigState(H_BC_DEVICE hDevice, int channel, BC_CMD_E cmd, BCSDK_CONFIG_STATE_E *state);
    int _BCSDK_ BCSDK_RemoteConfigState2(H_BC_DEVICE hDevice, int channel, BC_CMD_E cmd, int cmdIdx, BCSDK_CONFIG_STATE_E *state);
    
    
    /* system version
     *
     * callback with E_BC_CMD_GET_VERSION
     */
    int _BCSDK_ BCSDK_RemoteGetVersionInfo(H_BC_DEVICE hDevice);
    
    
    /* system general
     *
     * callback with E_BC_CMD_GET_SYS, E_BC_CMD_SET_SYS, E_BC_CMD_SET_DEVICE_NAME
     */
    int _BCSDK_ BCSDK_RemoteGetSysGeneralCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetSysGeneralCfg(H_BC_DEVICE hDevice, BC_SYS_GENERAL_CFG *cfgParam, int cmdIdx);
    int _BCSDK_ BCSDK_RemoteSetDeviceName(H_BC_DEVICE hDevice, BC_DEVICE_NAME_CFG *cfgParam);
    
    
    /* autoReboot
     *
     * callback with E_BC_CMD_GET_AUTOREBOOT_CFG, E_BC_CMD_SET_AUTOREBOOT_CFG
     */
    int _BCSDK_ BCSDK_RemoteGetAutoRebootCfg(H_BC_DEVICE hDevice);
    // callback with
    int _BCSDK_ BCSDK_RemoteSetAutoRebootCfg(H_BC_DEVICE hDevice, BC_AUTOREBOOT_CFG *autoRebootCfg);
    
    
    /* factory default
     *
     * callback with E_BC_CMD_RESTORE
     */
    int _BCSDK_ BCSDK_RemoteFactoryDefault(H_BC_DEVICE hDevice, BC_RESTORE_CFG *restoreCfg);
    
    
    /* record cfg
     *
     * callback with E_BC_CMD_GET_ADVRECORD, E_BC_CMD_SET_ADVRECORD
     */
    int _BCSDK_ BCSDK_RemoteGetRecordGenCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetRecordGenCfg(H_BC_DEVICE hDevice, BC_RECORD_GENERAL_CFG *genParam, int cmdIdx);
    
    
    /* email
     *
     * callback with E_BC_CMD_GET_EMAIL, E_BC_CMD_SET_EMAIL, E_BC_CMD_EMAILTEST
     */
    int _BCSDK_ BCSDK_RemoteGetMailCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetMailCfg(H_BC_DEVICE hDevice, BC_EMAIL_CFG *cfgParam);
    int _BCSDK_ BCSDK_RemoteEmailTest(H_BC_DEVICE hDevice, BC_EMAIL_CFG *cfgParam);
    
    
    /* output
     *
     * callback with E_BC_CMD_GET_OUTPUT, E_BC_CMD_SET_OUTPUT
     */
    int _BCSDK_ BCSDK_RemoteGetOutputCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetOutputCfg(H_BC_DEVICE hDevice, BC_OUTPUT_CFG *cfgParam);
    
    
    /* HDDCfg
     *
     * callback with E_BC_CMD_GET_HDD_CFG
     */
    int _BCSDK_ BCSDK_RemoteGetHDDCfg(H_BC_DEVICE hDevice);
    
    
    /* HDD Init
     *
     * callback with E_BC_CMD_INIT_HDD
     */
    int _BCSDK_ BCSDK_RemoteInitHdd(H_BC_DEVICE hDevice, BC_HDD_INIT_CFG *HDDInitCfg);
    int _BCSDK_ BCSDK_RemoteInitSDCard(H_BC_DEVICE hDevice, BC_HDD_INIT_CFG *HDDInitCfg);
    
    
    /* HDD Full
     *
     * callback with E_BC_CMD_GET_HDDFULL_EXPCFG, E_BC_CMD_SET_HDDFULL_EXPCFG
     */
    int _BCSDK_ BCSDK_RemoteGetHDDFull(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetHDDFull(H_BC_DEVICE hDevice, BC_EXCEPTION_CFG *HDDFull);
    
    
    /* HDD Error
     *
     * callback with E_BC_CMD_GET_HDDERR_EXPCFG, E_BC_CMD_SET_HDDERR_EXPCFG
     */
    int _BCSDK_ BCSDK_RemoteGetHDDError(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetHDDError(H_BC_DEVICE hDevice, BC_EXCEPTION_CFG *HDDError);
    
    
    /* Network Disconnect
     *
     * callback with E_BC_CMD_GET_NETDISCONNECT_EXPCFG, E_BC_CMD_SET_NETDISCONNECT_EXPCFG
     */
    int _BCSDK_ BCSDK_RemoteGetNetDisconnect(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetNetDisconnect(H_BC_DEVICE hDevice, BC_EXCEPTION_CFG *netDisconnect);
    
    
    /* IpConflict
     *
     * callback with E_BC_CMD_GET_IPCONFLICT_EXPCFG, E_BC_CMD_SET_IPCONFLICT_EXPCFG
     */
    int _BCSDK_ BCSDK_RemoteGetIpConflict(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetIpConflict(H_BC_DEVICE hDevice, BC_EXCEPTION_CFG *ipConflict);
    
    
    /* network local
     *
     * callback with E_BC_CMD_GET_IPCONFLICT_EXPCFG, E_BC_CMD_SET_IPCONFLICT_EXPCFG
     */
    int _BCSDK_ BCSDK_RemoteGetNetworkCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetNetworkCfg(H_BC_DEVICE hDevice, BC_LOCAL_CFG *networkCfg);
    
    
    /* normalPort
     *
     * callback with E_BC_CMD_GET_NORMAL_PORT, E_BC_CMD_SET_NORMAL_PORT
     */
    int _BCSDK_ BCSDK_RemoteGetNetNormalPort(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetNetNormalPort(H_BC_DEVICE hDevice, BC_NET_NORMAL_PORT *netNormalPort);
    
    
    /* advanced Port
     *
     * callback with E_BC_CMD_GET_ADVANCED_PORTS, E_BC_CMD_SET_ADVANCED_PORTS
     */
    int _BCSDK_ BCSDK_RemoteGetNetAdvancedPort(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetNetAdvancedPort(H_BC_DEVICE hDevice, BC_NET_ADVANCED_PORT *netAdvancedPort);
    

    /* upnpCfg
     *
     * callback with E_BC_CMD_GET_UPNPSTATE, E_BC_CMD_SET_UPNPSTATE
     */
    int _BCSDK_ BCSDK_RemoteGetUpnpCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetUpnpCfg(H_BC_DEVICE hDevice, BC_UPNP_CFG *upnpCfg);
    
    
    /* uid
     *
     * callback with E_BC_CMD_GET_UID
     */
    int _BCSDK_ BCSDK_RemoteGetUidInfo(H_BC_DEVICE hDevice);
    
    
    /* p2p cfg
     *
     * callback with E_BC_CMD_GET_PTOP_CFG, E_BC_CMD_SET_PTOP_CFG
     */
    int _BCSDK_ BCSDK_RemoteGetP2PCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetP2PCfg(H_BC_DEVICE hDevice, BC_P2P_CFG *p2pCfg);
    
    
    /* RF Sensor
     *
     * callback with E_BC_CMD_GET_RFSENSOR, E_BC_CMD_SET_RFSENSOR
     */
    int _BCSDK_ BCSDK_RemoteGetRFSensor(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetOutArm(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetHomeArm(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetSleepArm(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetDisarm(H_BC_DEVICE hDevice);
    
    
    /* Alarm In
     *
     * callback with E_BC_CMD_GET_ALARMINCFG, E_BC_CMD_SET_ALARMINCFG
     */
    int _BCSDK_ BCSDK_RemoteGetAlarmIn(H_BC_DEVICE hDevice, int inputId);
    int _BCSDK_ BCSDK_RemoteSetAlarmIn(H_BC_DEVICE hDevice, BC_ALARM_IN_CFG *alarmIn);
    
    
    /* Alarm Out
     *
     * callback with E_BC_CMD_GET_ALARMOUTCFG, E_BC_CMD_SET_ALARMOUTCFG
     */
    int _BCSDK_ BCSDK_RemoteGetAlarmOut(H_BC_DEVICE hDevice, int outputId);
    int _BCSDK_ BCSDK_RemoteSetAlarmOut(H_BC_DEVICE hDevice, BC_ALARM_OUT_CFG *alarmOut);
    
    
    /* RF Alarm Cfg
     *
     * callback with E_BC_CMD_GET_RF_CFG, E_BC_CMD_SET_RF_CFG, E_BC_CMD_SET_RF_ALARM_STATUS
     */
    int _BCSDK_ BCSDK_RemoteGetRfAlarmCfg(H_BC_DEVICE hDevice, int rfId);
    int _BCSDK_ BCSDK_RemoteSetRfAlarmCfg(H_BC_DEVICE hDevice, BC_RF_ALARM_CFG *rfAlarmCfg, int cmdIdx);
    int _BCSDK_ BCSDK_RemoteSetRfAlarmStatus(H_BC_DEVICE hDevice, BC_RF_ALARM_STATUS *rfAlarmStatus);
    
    
    /* DST
     *
     * callback with E_BC_CMD_GET_DST, E_BC_CMD_SET_DST
     */
    int _BCSDK_ BCSDK_RemoteGetDst(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetDst(H_BC_DEVICE hDevice, BC_DST_CFG *dstCfg, int cmdIdx);
    
    
    /* DDNS
     *
     * callback with E_BC_CMD_GET_DDNSCFG, E_BC_CMD_SET_DDNSCFG
     */
    int _BCSDK_ BCSDK_RemoteGetDdns(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetDdns(H_BC_DEVICE hDevice, BC_DDNS_CFG *ddnsCfg);
    
    
    /* NTP
     *
     * callback with E_BC_CMD_GET_NTPCFG, E_BC_CMD_SET_NTPCFG
     */
    int _BCSDK_ BCSDK_RemoteGetNtp(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetNtp(H_BC_DEVICE hDevice, BC_NTP_CFG *ntpCfg);
    
    
    /* PPPOE
     *
     * callback with E_BC_CMD_GET_PPPOECFG, E_BC_CMD_SET_PPPOECFG
     */
    int _BCSDK_ BCSDK_RemoteGetPppoe(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetPppoe(H_BC_DEVICE hDevice, BC_PPPOE_CFG *pppoeCfg);
    
    
    /* Online Update
     *
     * callback with E_BC_CMD_ONLINE_UPDATE
     */
    int _BCSDK_ BCSDK_RemoteOnlineUpate(H_BC_DEVICE hDevice, BC_ONLINE_UPDATE *onlineUpdate);
    
    
    /* online updtate status
     *
     * callback with E_BC_CMD_GET_ONLINE_UPDATE_STATUS
     */
    int _BCSDK_ BCSDK_RemoteGetOnlineUpdateStatus(H_BC_DEVICE hDevice);
    
    
    
    /* Auto Update
     *
     * callback with E_BC_CMD_GET_AUTO_UPDATE, E_BC_CMD_SET_AUTO_UPDATE
     */
    int _BCSDK_ BCSDK_RemoteGetAutoUpdateState(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetAutoUpdateState(H_BC_DEVICE hDevice, BC_AUTO_UPDATE *autoUpdate);
    
    
    /* Online New Firmware
     *
     * callback with E_BC_CMD_GET_ONLINE_NEW_FIRMWARE
     */
    int _BCSDK_ BCSDK_RemoteGetOnlineNewFwInfo(H_BC_DEVICE hDevice);
    
    
    /* Performances
     *
     * callback with E_BC_CMD_GET_PERFORMANCE
     */
    int _BCSDK_ BCSDK_RemoteGetPerformances(H_BC_DEVICE hDevice);
    
    
    /* Wifi
     *
     * callback with E_BC_CMD_GET_WIFI_SIGNAL, E_BC_CMD_GET_WIFI_INFO, 
     * E_BC_CMD_SET_WIFI_INFO, E_BC_CMD_WIFI_TEST
     */
    int _BCSDK_ BCSDK_RemoteGetWifiSignal(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteGetWifiCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetWifiCfg(H_BC_DEVICE hDevice, BC_WIFI_CFG *wifiCfg);
    int _BCSDK_ BCSDK_RemoteWifiTest(H_BC_DEVICE hDevice, BC_WIFI_CFG *wifiCfg);
    
    
    /* 3g 4g info
     *
     * callback with E_BC_CMD_GET_3G_4G_INFO
     */
    int _BCSDK_ BCSDK_RemoteGet3g4gInfo(H_BC_DEVICE hDevice);
    
    /* SIM Module Info
     *
     * callback with E_BC_CMD_GET_SIM_MODULE_INFO, E_BC_CMD_SET_SIM_MODULE_INFO
     */
    int _BCSDK_ BCSDK_RemoteGetSimModuleInfo(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetSimModuleInfo(H_BC_DEVICE hDevice, BC_SIM_MODULE_INFO *info);
    
    /* Cloud
     *
     * callback with    E_BC_CMD_GET_CLOUD_INFO, E_BC_CMD_BIND_CLOUD,
     *                  E_BC_CMD_GET_CLOUD_CFG, E_BC_CMD_SET_CLOUD_CFG,
     *                  E_BC_CMD_GET_SIGNATURE_LOGIN_CFG, E_BC_CMD_SET_SIGNATURE_LOGIN_CFG
     */
    int _BCSDK_ BCSDK_RemoteGetCloudInfo(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteBindCloud(H_BC_DEVICE hDevice, BC_BIND_CLOUD *info);
    int _BCSDK_ BCSDK_RemoteGetCloudCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetCloudCfg(H_BC_DEVICE hDevice, BC_CLOUD_CFG *cloudCfg);
    int _BCSDK_ BCSDK_RemoteGetSignatureLoginCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetSignatureLoginCfg(H_BC_DEVICE hDevice, BC_SIGNATURE_LOGIN_CFG *signatureLoginCfg);
    
    
    /* NAS
     *
     * callback with E_BC_CMD_NAS_GET_BIND_INFO, E_BC_CMD_NAS_BIND, E_BC_CMD_NAS_UNBIND
     */
    int _BCSDK_ BCSDK_RemoteNasGetBindInfo(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteNasBind(H_BC_DEVICE hDevice, BC_NAS_BIND *info);
    int _BCSDK_ BCSDK_RemoteNasUnbind(H_BC_DEVICE hDevice, BC_NAS_BIND *info, int cmdIdx);
    
    
    /* Scan ap
     *
     * callback with E_BC_CMD_GET_SCAN_AP
     */
    int _BCSDK_ BCSDK_RemoteGetScanAp(H_BC_DEVICE hDevice);
    
    
    /* record file days
     *
     * callback with E_BC_CMD_GET_RECFILEDATE
     */
    int _BCSDK_ BCSDK_RemoteGetRecFileDaysByChannel(H_BC_DEVICE hDevice, BC_RECORD_FILE_DAYS_BY_CHN *param);
    
    
    /* user config
     *
     * callback with E_BC_CMD_GET_USERCFG, E_BC_CMD_SET_USERCFG
     */
    int _BCSDK_ BCSDK_RemoteGetUserCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetUserCfg(H_BC_DEVICE hDevice, BC_USER_CFG *user);
    
    
    /* set user ability
     *
     * callback with E_BC_CMD_SET_USER_ALL_ABILITY
     */
    int _BCSDK_ BCSDK_RemoteInitNewUserAiblity(H_BC_DEVICE hDevice, BC_USER_FOR_ABILITY *user);
    
    
    /* online user config
     *
     * callback with E_BC_CMD_GET_USER_ONLINE, E_BC_CMD_SET_USER_ONLINE
     */
    int _BCSDK_ BCSDK_RemoteGetOnlineUserCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetOnlineUserCfg(H_BC_DEVICE hDevice, BC_USER_ONLINE_CFG *user);
    
    
    /* force user password when first login
     *
     * callback with E_BC_CMD_FORCE_PASSWORD
     */
    int _BCSDK_ BCSDK_RemoteForceUserPassword(H_BC_DEVICE hDevice, BC_FORCE_PWD *user);
    
    
    /* pwd state
     *
     * callback with E_BC_CMD_GET_BOOTPWD_STATE, E_BC_CMD_SET_BOOTPWD_STATE
     */
    int _BCSDK_ BCSDK_RemoteGetBootPwdState(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetBootPwdState(H_BC_DEVICE hDevice, BC_BootPWDState *bootPwdState);
    
    
    /* upgrade firmware
     *
     * callback with E_BC_CMD_UPGRADE, E_BC_CMD_UPGRADE_PROGRESS
     */
    int _BCSDK_ BCSDK_RemoteUpgradeFirmware(H_BC_DEVICE hDevice, BC_UPGRADE_FILE_INFO *fileInfo);
    
    
    /* Ftp Cfg
     *
     * callback with E_BC_CMD_GET_FTPCFG, E_BC_CMD_SET_FTPCFG, E_BC_CMD_FTP_TEST
     */
    int _BCSDK_ BCSDK_RemoteGetFtpCfg(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetFtpCfg(H_BC_DEVICE hDevice, BC_FTP_CFG *ftpCfg);
    int _BCSDK_ BCSDK_RemoteSetFtpTest(H_BC_DEVICE hDevice, BC_FTP_CFG *ftpCfg);
    
    /* I Frame Support
     */
    int _BCSDK_ BCSDK_SetDeviceIFramePreview(H_BC_DEVICE hDevice, bool iFrame);
    int _BCSDK_ BCSDK_SetDeviceIFrameReplay(H_BC_DEVICE hDevice, bool iFrame);
    
    
    /* Reboot
     *
     * callback with E_BC_CMD_REBOOT
     */
    int _BCSDK_ BCSDK_RemoteReboot(H_BC_DEVICE hDevice);
    
    
    /* Device Sleep
     *
     * callback with E_BC_CMD_DEVICE_SLEEP
     */
    int _BCSDK_ BCSDK_RemoteDeviceSleep(H_BC_DEVICE hDevice);
    
    
    /* export/import configuration file
     *
     * callback with E_BC_CMD_EXPORT, E_BC_CMD_EXPORT_PROGRESS, E_BC_CMD_IMPORT, E_BC_CMD_IMPORT_PROGRESS
     */
    int _BCSDK_ BCSDK_RemoteExportConfig(H_BC_DEVICE hDevice, BC_CONFIG_FILE_INFO *fileInfo);
    int _BCSDK_ BCSDK_RemoteImportConfig(H_BC_DEVICE hDevice, BC_CONFIG_FILE_INFO *fileInfo);
    
    
    /* get log file
     *
     * callback with E_BC_CMD_GETLOG
     */
    int _BCSDK_ BCSDK_RemoteGetLogFile(H_BC_DEVICE hDevice, BC_CONFIG_FILE_INFO *fileInfo);
    
    
    /* start alarm report
     *
     * callback with E_BC_CMD_START_ALARM_REPORT, E_BC_CMD_STOP_ALARM_REPORT
     */
    int _BCSDK_ BCSDK_RemoteStartAlarmReport(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteStopAlarmReport(H_BC_DEVICE hDevice);
    
    
    /* push open
     *
     * callback with E_BC_CMD_PUSH_ADD
     */
    int _BCSDK_ BCSDK_RemotePushOpen(H_BC_DEVICE hDevice, BC_PUSH_INFO *info);
    /*int _BCSDK_ BCSDK_RemotePushClose(H_BC_DEVICE hDevice, BC_PUSH_INFO *info);*/
    
    
    /* rtmp operation
     *
     * callback with E_BC_CMD_RTMP_START, E_BC_CMD_RTMP_STOP
     */
    int _BCSDK_ BCSDK_RemoteRtmpStart(H_BC_DEVICE hDevice, BC_RTMP_OPT *info);
    int _BCSDK_ BCSDK_RemoteRtmpStop(H_BC_DEVICE hDevice, BC_RTMP_OPT *info);
    
    

    
    /*******************************************************************************
     * MARK: Channel Remote Config
     ******************************************************************************/
    /* encode
     *
     * callback with E_BC_CMD_GET_COMPRESS, E_BC_CMD_SET_COMPRESS
     */
    int _BCSDK_ BCSDK_RemoteGetEncCfg(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetEncCfg(H_BC_DEVICE hDevice, int channel, BC_CHN_ENC_INFO *encParam);
    
    
    /* osd
     *
     * callback with E_BC_CMD_GET_OSD, E_BC_CMD_SET_OSD
     */
    int _BCSDK_ BCSDK_RemoteGetOsdCfg(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetOsdCfg(H_BC_DEVICE hDevice, int channel, BC_OSD_CFG *osdCfgParam, int cmdIdx);
    
    
    /* cameraCfg
     *
     * callback with E_BC_CMD_GET_CAMERA_CFG, E_BC_CMD_SET_CAMERA_CFG
     */
    int _BCSDK_ BCSDK_RemoteGetCameraCfg(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetCameraCfg(H_BC_DEVICE hDevice, int channel, BC_CAMERA_CFG *cameraCfgParam);
    
    
    /* Shelter
     *
     * callback with E_BC_CMD_GET_COVER, E_BC_CMD_SET_COVER
     */
    int _BCSDK_ BCSDK_RemoteGetShelter(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetShelter(H_BC_DEVICE hDevice, int channel, BC_COVER_CFG *shelter);
    
    
    /* record schedule
     *
     * callback with E_BC_CMD_GET_RECORDSCHED, E_BC_CMD_SET_RECORDSCHED
     */
    int _BCSDK_ BCSDK_RemoteGetRecordSchedule(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetRecordSchedule(H_BC_DEVICE hDevice, int channel, BC_RECORD_SCHEDULE_CFG *recordShedule);
    
    
    /* PTZ Config
     *
     * callback with E_BC_CMD_GET_PTZCFG, E_BC_CMD_SET_PTZCFG
     */
    int _BCSDK_ BCSDK_RemoteGetPtzCfg(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetPtzCfg(H_BC_DEVICE hDevice, int channel, BC_PTZ_DECODER *ptzCfg);
    
    
    /* Motion Config
     *
     * callback with E_BC_CMD_GET_MOTION, E_BC_CMD_SET_MOTION
     */
    int _BCSDK_ BCSDK_RemoteGetMotionCfg(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetMotionCfg(H_BC_DEVICE hDevice, int channel, BC_MOTION_CFG *motionCfg, int cmdIdx);
    
    
    /* Video Loss
     *
     * callback with E_BC_CMD_GET_VILOST, E_BC_CMD_SET_VILOST
     */
    int _BCSDK_ BCSDK_RemoteGetVideoLoss(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetVideoLoss(H_BC_DEVICE hDevice, int channel, BC_VILOST_CFG *videoLoss);
    
    
    /* ptz preset
     *
     * callback with E_BC_CMD_GET_PRESET, E_BC_CMD_SET_PRESET
     */
    int _BCSDK_ BCSDK_RemoteGetPresets(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetPresets(H_BC_DEVICE hDevice, int channel, BC_PTZ_PRESET *preset, int cmdIdx);
    int _BCSDK_ BCSDK_RemotePresetInvoke(H_BC_DEVICE hDevice, int channel, int preset);
    
    
    /* ptz cruise
     *
     * callback with E_BC_CMD_GET_CRUISE, E_BC_CMD_SET_CRUISE
     */
    int _BCSDK_ BCSDK_RemoteGetCruises(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetCruise(H_BC_DEVICE hDevice, int channel, BC_PTZ_CRUISE *cruise);
    int _BCSDK_ BCSDK_RemoteCruiseInvoke(H_BC_DEVICE hDevice, int channel, int cruise);
    int _BCSDK_ BCSDK_RemoteCruiseStop(H_BC_DEVICE hDevice, int channel, int cruise);
    
    
    /* isp
     *
     * callback with E_BC_CMD_GET_CAMERA, E_BC_CMD_GET_DEFAULT_CAMERA, E_BC_CMD_SET_CAMERA, E_BC_CMD_SET_ISP_DAY_NIGHT_MODE
     */
    int _BCSDK_ BCSDK_RemoteGetIspCfg(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteGetDefaultIspCfg(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetIspCfg(H_BC_DEVICE hDevice, int channel, BC_ISP_CFG *ispCfg, int cmdIdx);
    int _BCSDK_ BCSDK_RemoteSetIspDayNightMode(H_BC_DEVICE hDevice, int channel, BC_DAY_NIGHT_MODE_CFG *modeCfg);
    
    
    /* LED
     *
     * callback with E_BC_CMD_GET_LED_STATE, E_BC_CMD_SET_LED_STATE
     */
    int _BCSDK_ BCSDK_RemoteGetLedState(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetLedState(H_BC_DEVICE hDevice, int channel, BC_LED_LIGHT_STATE *ledState, int cmdIdx);
    
    
    /* Ftp Task
     *
     * callback with E_BC_CMD_GET_FTPTASK, E_BC_CMD_SET_FTPTASK
     */
    int _BCSDK_ BCSDK_RemoteGetFtpTask(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetFtpTask(H_BC_DEVICE hDevice, int channel, BC_FTP_TASK *ftpTask);
    
    
    /* Email Task
     *
     * callback with E_BC_CMD_GET_EMAIL_TASK, E_BC_CMD_SET_EMAIL_TASK
     */
    int _BCSDK_ BCSDK_RemoteGetEmailTask(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetEmailTask(H_BC_DEVICE hDevice, int channel, BC_EMAIL_TASK *emailTask);
    
    
    /* push task
     *
     * callback with E_BC_CMD_GET_PUSH_TASK, E_BC_CMD_SET_PUSH_TASK
     */
    int _BCSDK_ BCSDK_RemoteGetPushTask(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetPushTask(H_BC_DEVICE hDevice, int channel, BC_PUSH_TASK *pushTask);
    
    
    /* audio task
     *
     * callback with E_BC_CMD_GET_AUDIO_TASK, E_BC_CMD_SET_AUDIO_TASK
     */
    int _BCSDK_ BCSDK_RemoteGetAudioTask(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetAudioTask(H_BC_DEVICE hDevice, int channel, BC_AUDIO_TASK *audioTask);
    
    /* Snap
     *
     * callback with E_BC_CMD_SNAP
     */
    int _BCSDK_ BCSDK_RemoteSnap(H_BC_DEVICE hDevice, int channel, BC_SNAP_INFO *info);
    
    
    /* Config Stream
     */
    int _BCSDK_ BCSDK_GetIsConfigStreamOpen(H_BC_DEVICE hDevice, int channel, bool *open);
    
    int _BCSDK_ BCSDK_ConfigStreamOpen(H_BC_DEVICE hDevice,
                                       int channel,
                                       OnRenderFrameCallback configFrameCallback,
                                       void *userData);
    
    int _BCSDK_ BCSDK_ConfigStreamClose(H_BC_DEVICE hDevice, int channel);
    
    
    /* Auto Focus
     *
     * callback with E_BC_CMD_GET_AUTO_FOCUS, E_BC_CMD_SET_AUTO_FOCUS
     */
    int _BCSDK_ BCSDK_RemoteGetAutoFocus(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetAutoFocus(H_BC_DEVICE hDevice, int channel, BC_PTZ_AUTO_FOCUS *autoFocus);
    
    
    /* Crop Cfg
     *
     * callback with E_BC_CMD_GET_CROP_CFG, E_BC_CMD_SET_CROP_CFG
     */
    int _BCSDK_ BCSDK_RemoteGetCropCfg(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetCropCfg(H_BC_DEVICE hDevice, int channel, BC_CROP_CFG *cropCfg);
    
    
    /* Crop Snap
     *
     * callback with E_BC_CMD_CROP_SNAP
     */
    int _BCSDK_ BCSDK_RemoteCropSnap(H_BC_DEVICE hDevice, int channel, BC_CROP_SNAP_INFO *info);
    
    
    /* Delete Online Device
     *
     * callback with E_BC_CMD_BASE_DELETE_ONLINE_DEVICE
     */
    int _BCSDK_ BCSDK_RemoteBaseDeleteOnlineDevice(H_BC_DEVICE hDevice, BC_BASE_ONLINE_DEVICE_INFO *onlineDevInfo);
    

    /* base device's RF Cfg
     *
     * callback with E_BC_CMD_BASE_GET_RF_CFG, E_BC_CMD_BASE_SET_RF_CFG
     */
    int _BCSDK_  BCSDK_RemoteGetBaseRfAlarmCfg(H_BC_DEVICE hDevice, int channel, BC_BASE_RF_ALARM_REQUEST *request);
    int _BCSDK_  BCSDK_RemoteSetBaseRfAlarmCfg(H_BC_DEVICE hDevice, int channel, BC_BASE_RF_ALARM_CFG *rfAlarmCfg);
    int _BCSDK_  BCSDK_RemoteSetBaseRfAlarmStatus(H_BC_DEVICE hDevice, int channel, BC_RF_ALARM_STATUS *rfAlarmStatus);
    
    
    /* battery info
     *
     * callback with E_BC_CMD_GET_BATTERY_INFO
     */
    int _BCSDK_ BCSDK_RemoteGetBatteryInfo(H_BC_DEVICE hDevice, int channel);
    
    /* battery analysis
     *
     * callback with E_BC_CMD_GET_BATTERY_ANALYSIS
     */
    int _BCSDK_ BCSDK_RemoteGetBatteryAnalysis(H_BC_DEVICE hDevice, int channel);
    
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
    int _BCSDK_ BCSDK_RemoteGetRingtoneFileInfo(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteGetRingtoneCfg(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteSetRingtoneCfg(H_BC_DEVICE hDevice, int channel, BC_RINGTONE_CFG *ringtoneCfg);
    int _BCSDK_ BCSDK_RemoteManualRingDown(H_BC_DEVICE hDevice, int channel, BC_MANUAL_RING_DOWN *ringdownInfo);
    int _BCSDK_ BCSDK_RemoteMuteAlarmAudio(H_BC_DEVICE hDevice, int channel, BC_MUTE_ALARM_AUDIO *muteInfo);
    int _BCSDK_ BCSDK_RemoteSaveRingtone(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_RemoteImportRingtone(H_BC_DEVICE hDevice, int channel, BC_RINGTONE_FILE_INFO *fileInfo);
    int _BCSDK_ BCSDK_RemoteGetRingtoneAbility(H_BC_DEVICE hDevice, int channel);
    
    
    /* base device's WIFI QRCode
     *
     * callback with E_BC_CMD_BASE_GET_WIFI_QRCODE, E_BC_CMD_BASE_SET_WIFI_QRCODE
     */
    int _BCSDK_ BCSDK_RemoteGetBaseWifiQRCode(H_BC_DEVICE hDevice);
    int _BCSDK_ BCSDK_RemoteSetBaseWifiQRCode(H_BC_DEVICE hDevice, BC_BASE_WIFI_QRCODE *qrCodeCfg);
    
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_REMOTE_CONFIG_H_ */
