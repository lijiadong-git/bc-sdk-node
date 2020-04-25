#ifndef _BCSDK_WRAPPER_ABILITY_H_
#define _BCSDK_WRAPPER_ABILITY_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
    /*******************************************************************************
     * MARK: Device
     ******************************************************************************/
    
    int _BCSDK_ BCSDK_SetAbilityAbout(H_BC_DEVICE hDevice, DEVICE_ABILITY_ABOUT *about);
    
    int _BCSDK_ BCSDK_GetDeviceType(H_BC_DEVICE hDevice, BC_DEVICE_TYPE_E *type);
    int _BCSDK_ BCSDK_GetIsLoginByDefaultPass(H_BC_DEVICE hDevice, bool *loginByDefaultPass);
    int _BCSDK_ BCSDK_GetDeviceNorm(H_BC_DEVICE hDevice, BC_DEVICE_NORM_E *norm);
    int _BCSDK_ BCSDK_GetSupportRF(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportPush(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportReplay(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportReplaySubStream(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportTimingRecord(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportReplaySpeed(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportAlarmVideoMark(H_BC_DEVICE hDevice, bool *support);
	int _BCSDK_ BCSDK_GetSupportCoverPreview(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportPolling(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportAutoNtp(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportWiFi(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportWiFiCfg(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportWiFiTest(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportInitAP(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportFTP(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportFTPTest(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportFTPSubStream(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportFTPExtensionStream(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportFTPPicture(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportRTSP(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportRTMP(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportONVIF(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportP2PEnable(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportP2PDomainName(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportP2PPort(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportPppoe(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportSeek(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportIFramePreview(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportIFrameReplay(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportHDD(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportSDCard(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportTimeFormat(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportDateFormat(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportEmailTask(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportEmailNickName(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportPushTask(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportCloud(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportCloudCfg(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportCloudSchedule(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportCloudSignatureLoginCfg(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportAccountBind(H_BC_DEVICE hDevice, bool *support);
	int _BCSDK_ BCSDK_GetSupportServerControlStreamType(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSmarthomeAbility(H_BC_DEVICE hDevice, BC_SMARTHOME_ABILITY_INFO *smarthome);
    int _BCSDK_ BCSDK_GetSupportUpgrade(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportOutput(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportVideoLost(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportPTZSetting(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportPerformance(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportAutoUpdate(H_BC_DEVICE hDevice, bool *support);
    
    int _BCSDK_ BCSDK_GetSupportReboot(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportVideoStandard(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportUpnp(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportExceptionCfg(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportLogSearch(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportDDNSCfg(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportMediaPort(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportHttpPort(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportHttpsPort(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportNtp(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportRecSchedule(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportRecSettings(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportRecOverWriteCfg(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportRecPackDurationCfg(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportRecPreRecordCfg(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportRecRecordExtensionCfg(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportRecRecordExtensionTimeList(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportEmailInterval(H_BC_DEVICE hDevice, bool *support);
    
    int _BCSDK_ BCSDK_GetIsWifiIPC(H_BC_DEVICE hDevice, bool *isIPC); // 是否是套装wifi IPC
    int _BCSDK_ BCSDK_GetIsIPC(H_BC_DEVICE hDevice, bool *isIPC);
    int _BCSDK_ BCSDK_GetIsNVR(H_BC_DEVICE hDevice, bool *isNVR);
    int _BCSDK_ BCSDK_GetIsBASE(H_BC_DEVICE hDevice, bool *isBASE);
    int _BCSDK_ BCSDK_GetHasAdminPermission(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetUserVersion(H_BC_DEVICE hDevice, int *version);
    int _BCSDK_ BCSDK_GetPTZMode(H_BC_DEVICE hDevice, int *type);
    int _BCSDK_ BCSDK_GetAlarmInPortCount(H_BC_DEVICE hDevice, int *count);
    int _BCSDK_ BCSDK_GetAlarmOutPortCount(H_BC_DEVICE hDevice, int *count);
    int _BCSDK_ BCSDK_GetDdnsVersion(H_BC_DEVICE hDevice, int *version);
    int _BCSDK_ BCSDK_GetAnalogChannelCount(H_BC_DEVICE hDevice, int *count);
    int _BCSDK_ BCSDK_GetPushType(H_BC_DEVICE hDevice, int *pushType);
    int _BCSDK_ BCSDK_GetPushSecretCode(H_BC_DEVICE hDevice, char *secretCode, int maxLen);
    
    // rfVersion:   0 -> no support;
    //              1 -> old,suppport 3 buttons;
    //              2 -> support RF Remote Config;
    //              3 -> support 4 buttons;
    //              4 -> support RF Remote Config with Sensitivity
    int _BCSDK_ BCSDK_GetRfVersion(H_BC_DEVICE hDevice, int *version);
    
    int _BCSDK_ BCSDK_GetRfNumbers(H_BC_DEVICE hDevice, int *count);
    int _BCSDK_ BCSDK_GetSupportSimModule(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportShowQrcode(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportChinese(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportNasBind(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportNasUnbind(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportNasBindStatusInfo(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportExport(H_BC_DEVICE hDevice, bool *support);
    int _BCSDK_ BCSDK_GetSupportImport(H_BC_DEVICE hDevice, bool *support);
	int _BCSDK_ BCSDK_GetSupportSyncUTCTime(H_BC_DEVICE hDevice, bool *support);
    
    
    
    /*******************************************************************************
     * MARK: Channel
     ******************************************************************************/

    int _BCSDK_ BCSDK_GetEncodeTable(H_BC_DEVICE hDevice, int channel, BC_ENC_PROFILE_TABLE *encTable);
    int _BCSDK_ BCSDK_GetIsVideoLoss(H_BC_DEVICE hDevice, int channel, bool *loss);
    int _BCSDK_ BCSDK_GetSupportCameraMode(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportExtenStream(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportExtenStreamCfg(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportLEDControl(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIndicatorLight(H_BC_DEVICE hDevice, int channel, bool *support);
	int _BCSDK_ BCSDK_GetSupportFloodlight(H_BC_DEVICE hDevice, int channel, bool *support);
	int _BCSDK_ BCSDK_GetSupportFloodlightBrightnessCtrl(H_BC_DEVICE hDevice, int channel, bool *support);
	int _BCSDK_ BCSDK_GetSupportFloodlightAutoByPreview(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportPtzSpeed(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportPtzCruise(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportPtzPreset(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportPt(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportAutoPt(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportZoomAndFocus(H_BC_DEVICE hDevice, int channel, bool *support);
	int _BCSDK_ BCSDK_GetSupportZoomAndFocusSliderCfg(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportAudio(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportAutoFocus(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportCropSnap(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportTalk(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportMD(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportMDWithPIR(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportMDTriggerAudio(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportMDTriggerRecord(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportShelterCfg(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetIsBattery(H_BC_DEVICE hDevice, int channel, bool *isBattery);
    int _BCSDK_ BCSDK_GetIsCharge(H_BC_DEVICE hDevice, int channel, bool *isCharge);
    int _BCSDK_ BCSDK_GetSupportBatAnalysis(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportAudioAlarmEnable(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportAudioAlarmSchedule(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportManualRingDown(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportCustomRingtone(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportOsdPadding(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportOsdWaterMark(H_BC_DEVICE hDevice, int channel, bool *support);
    
    // Isp Cfg
    int _BCSDK_ BCSDK_GetSupportIspDayNight(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspAntiFlick(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspExposureMode(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspWhiteBalance(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspBacklight(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIsp3dnr(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspMirror(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspFlip(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspBright(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspContrast(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspSatruation(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspHue(H_BC_DEVICE hDevice, int channel, bool *support);
    int _BCSDK_ BCSDK_GetSupportIspSharpen(H_BC_DEVICE hDevice, int channel, bool *support);
	int _BCSDK_ BCSDK_GetSupportIspDayNightThreshold(H_BC_DEVICE hDevice, int channel, bool *support);
    
    //
    // base version: base device version, 0: not base device
    //
    // base rfVersion:   0 -> no support;
    //              1 -> old,suppport 3 buttons;
    //              2 -> support RF Remote Config;
    //              3 -> support 4 buttons;
    //              4 -> support RF Remote Config with Sensitivity
    int _BCSDK_ BCSDK_GetBaseVersion(H_BC_DEVICE hDevice, int *version);
    int _BCSDK_ BCSDK_GetBaseRfVersion(H_BC_DEVICE hDevice, int channel, int *version);
    int _BCSDK_ BCSDK_GetBaseRfNumbers(H_BC_DEVICE hDevice, int channel, int *count);
    
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_ABILITY_H_ */
