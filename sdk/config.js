"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ref = require("ref");
const native_1 = require("./native");
const T = require("../types");
const _T = require("./_struct");
const _cast_1 = require("./_cast");
const _callback_1 = require("./_callback");
// -----------------------------------------------------------------------------
//                          CONFIG
// -----------------------------------------------------------------------------
class CONFIG {
    constructor() {
    }
    static instance() {
        return CONFIG.singleton;
    }
    static handleSDKGetCallback(type, handle, cmdData) {
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        _callback_1.PROMISE_CBS.handleCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx, callback => {
            if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode
                && type.size === cmdData.dataLen) {
                let buf = ref.reinterpret(cmdData.pRspData, cmdData.dataLen);
                let data = ref.get(buf, 0, type);
                if (callback.sdkResolve) {
                    let param = _cast_1.derefCast(data, type);
                    callback.sdkResolve(param);
                }
            }
            else {
                if (callback.sdkReject) {
                    callback.sdkReject({ code: cmdData.bcRspCode });
                }
            }
        });
    }
    handleSDKCallback(handle, cmdData) {
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        switch (cmdData.bcCmd) {
            case T.BC_CMD_E.E_BC_CMD_GET_VERSION: {
                CONFIG.handleSDKGetCallback(_T.BC_VERSION_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_SYS: {
                CONFIG.handleSDKGetCallback(_T.BC_SYS_GENERAL_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_AUTOREBOOT_CFG: {
                CONFIG.handleSDKGetCallback(_T.BC_AUTOREBOOT_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_ADVRECORD: {
                CONFIG.handleSDKGetCallback(_T.BC_RECORD_GENERAL_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_EMAIL: {
                CONFIG.handleSDKGetCallback(_T.BC_EMAIL_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_OUTPUT: {
                CONFIG.handleSDKGetCallback(_T.BC_OUTPUT_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_HDD_CFG: {
                CONFIG.handleSDKGetCallback(_T.BC_HDD_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_HDDFULL_EXPCFG:
            case T.BC_CMD_E.E_BC_CMD_GET_HDDERR_EXPCFG:
            case T.BC_CMD_E.E_BC_CMD_GET_NETDISCONNECT_EXPCFG:
            case T.BC_CMD_E.E_BC_CMD_GET_IPCONFLICT_EXPCFG: {
                CONFIG.handleSDKGetCallback(_T.BC_EXCEPTION_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_LOCAL: {
                CONFIG.handleSDKGetCallback(_T.BC_LOCAL_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_NORMAL_PORT: {
                CONFIG.handleSDKGetCallback(_T.BC_NET_NORMAL_PORT, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_ADVANCED_PORTS: {
                CONFIG.handleSDKGetCallback(_T.BC_NET_ADVANCED_PORT, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_UPNPSTATE: {
                CONFIG.handleSDKGetCallback(_T.BC_UPNP_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_UID: {
                CONFIG.handleSDKGetCallback(_T.BC_UID_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_PTOP_CFG: {
                CONFIG.handleSDKGetCallback(_T.BC_P2P_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_RFSENSOR: {
                CONFIG.handleSDKGetCallback(_T.BC_RFSENSOR_ALARM_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_ALARMINCFG: {
                CONFIG.handleSDKGetCallback(_T.BC_ALARM_IN_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_ALARMOUTCFG: {
                CONFIG.handleSDKGetCallback(_T.BC_ALARM_OUT_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_RF_CFG: {
                CONFIG.handleSDKGetCallback(_T.BC_RF_ALARM_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_DST: {
                CONFIG.handleSDKGetCallback(_T.BC_DST_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_DDNSCFG: {
                CONFIG.handleSDKGetCallback(_T.BC_DDNS_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_NTPCFG: {
                CONFIG.handleSDKGetCallback(_T.BC_NTP_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_PPPOECFG: {
                CONFIG.handleSDKGetCallback(_T.BC_PPPOE_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_ONLINE_UPDATE_STATUS: {
                CONFIG.handleSDKGetCallback(_T.BC_ONLINE_UPDATE_STATUS, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_AUTO_UPDATE: {
                CONFIG.handleSDKGetCallback(_T.BC_AUTO_UPDATE, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_ONLINE_NEW_FIRMWARE: {
                CONFIG.handleSDKGetCallback(_T.BC_ONLINE_NEW_FW_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_PERFORMANCE: {
                CONFIG.handleSDKGetCallback(_T.BC_PERFORMANCE_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_WIFI_SIGNAL: {
                CONFIG.handleSDKGetCallback(_T.BC_WIFI_SIGNAL, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_WIFI_INFO: {
                CONFIG.handleSDKGetCallback(_T.BC_WIFI_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_3G_4G_INFO: {
                CONFIG.handleSDKGetCallback(_T.BC_3G_4G_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_SIM_MODULE_INFO: {
                CONFIG.handleSDKGetCallback(_T.BC_SIM_MODULE_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_CLOUD_INFO: {
                CONFIG.handleSDKGetCallback(_T.BC_CLOUD_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_CLOUD_CFG: {
                CONFIG.handleSDKGetCallback(_T.BC_CLOUD_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_SCAN_AP: {
                CONFIG.handleSDKGetCallback(_T.BC_SCAN_AP, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_RECFILEDATE: {
                CONFIG.handleSDKGetCallback(_T.BC_RECORD_FILE_DAYS_BY_CHN, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_USERCFG: {
                CONFIG.handleSDKGetCallback(_T.BC_USER_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_USER_ONLINE: {
                CONFIG.handleSDKGetCallback(_T.BC_USER_ONLINE_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_BOOTPWD_STATE: {
                CONFIG.handleSDKGetCallback(_T.BC_BOOT_PWD_STATE, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_FTPCFG: {
                CONFIG.handleSDKGetCallback(_T.BC_FTP_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_COMPRESS: {
                CONFIG.handleSDKGetCallback(_T.BC_CHN_ENC_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_OSD: {
                CONFIG.handleSDKGetCallback(_T.BC_OSD_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_CAMERA_CFG: {
                CONFIG.handleSDKGetCallback(_T.BC_CAMERA_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_COVER: {
                CONFIG.handleSDKGetCallback(_T.BC_COVER_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_RECORDSCHED: {
                CONFIG.handleSDKGetCallback(_T.BC_RECORD_SCHEDULE_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_PTZCFG: {
                CONFIG.handleSDKGetCallback(_T.BC_PTZ_DECODER, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_MOTION: {
                CONFIG.handleSDKGetCallback(_T.BC_MOTION_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_VILOST: {
                CONFIG.handleSDKGetCallback(_T.BC_VILOST_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_PRESET: {
                CONFIG.handleSDKGetCallback(_T.BC_PTZ_PRESETS, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_CRUISE: {
                CONFIG.handleSDKGetCallback(_T.BC_PTZ_CRUISES, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_CAMERA:
            case T.BC_CMD_E.E_BC_CMD_GET_DEFAULT_CAMERA: {
                CONFIG.handleSDKGetCallback(_T.BC_ISP_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_LED_STATE: {
                CONFIG.handleSDKGetCallback(_T.BC_LED_LIGHT_STATE, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_FTPTASK: {
                CONFIG.handleSDKGetCallback(_T.BC_FTP_TASK, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_EMAIL_TASK: {
                CONFIG.handleSDKGetCallback(_T.BC_EMAIL_TASK, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_PUSH_TASK: {
                CONFIG.handleSDKGetCallback(_T.BC_PUSH_TASK, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_AUDIO_TASK: {
                CONFIG.handleSDKGetCallback(_T.BC_AUDIO_TASK, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_AUTO_FOCUS: {
                CONFIG.handleSDKGetCallback(_T.BC_PTZ_AUTO_FOCUS, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_CROP_CFG: {
                CONFIG.handleSDKGetCallback(_T.BC_CROP_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_BATTERY_INFO: {
                CONFIG.handleSDKGetCallback(_T.BC_BATTERY_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_BATTERY_ANALYSIS: {
                CONFIG.handleSDKGetCallback(_T.BC_BATTERY_ANALYSIS, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_FILE_INFO: {
                CONFIG.handleSDKGetCallback(_T.BC_RINGTONE_FILE_INFO, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_CFG: {
                CONFIG.handleSDKGetCallback(_T.BC_RINGTONE_CFG, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_ABILITY: {
                CONFIG.handleSDKGetCallback(_T.BC_RINGTONE_ABILITY, handle, cmdData);
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_SET_SYS:
            case T.BC_CMD_E.E_BC_CMD_SET_DEVICE_NAME:
            case T.BC_CMD_E.E_BC_CMD_SET_AUTOREBOOT_CFG:
            case T.BC_CMD_E.E_BC_CMD_RESTORE:
            case T.BC_CMD_E.E_BC_CMD_SET_ADVRECORD:
            case T.BC_CMD_E.E_BC_CMD_SET_EMAIL:
            case T.BC_CMD_E.E_BC_CMD_SET_OUTPUT:
            case T.BC_CMD_E.E_BC_CMD_INIT_HDD:
            case T.BC_CMD_E.E_BC_CMD_SET_HDDFULL_EXPCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_HDDERR_EXPCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_NETDISCONNECT_EXPCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_IPCONFLICT_EXPCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_LOCAL:
            case T.BC_CMD_E.E_BC_CMD_SET_NORMAL_PORT:
            case T.BC_CMD_E.E_BC_CMD_SET_ADVANCED_PORTS:
            case T.BC_CMD_E.E_BC_CMD_SET_UPNPSTATE:
            case T.BC_CMD_E.E_BC_CMD_SET_PTOP_CFG:
            case T.BC_CMD_E.E_BC_CMD_SET_RFSENSOR:
            case T.BC_CMD_E.E_BC_CMD_SET_ALARMINCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_ALARMOUTCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_RF_CFG:
            case T.BC_CMD_E.E_BC_CMD_SET_RF_ALARM_STATUS:
            case T.BC_CMD_E.E_BC_CMD_SET_DST:
            case T.BC_CMD_E.E_BC_CMD_SET_DDNSCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_NTPCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_PPPOECFG:
            case T.BC_CMD_E.E_BC_CMD_ONLINE_UPDATE:
            case T.BC_CMD_E.E_BC_CMD_SET_WIFI_INFO:
            case T.BC_CMD_E.E_BC_CMD_WIFI_TEST:
            case T.BC_CMD_E.E_BC_CMD_SET_SIM_MODULE_INFO:
            case T.BC_CMD_E.E_BC_CMD_BIND_CLOUD:
            case T.BC_CMD_E.E_BC_CMD_SET_CLOUD_CFG:
            case T.BC_CMD_E.E_BC_CMD_SET_USERCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_USER_ALL_ABILITY:
            case T.BC_CMD_E.E_BC_CMD_SET_USER_ONLINE:
            case T.BC_CMD_E.E_BC_CMD_FORCE_PASSWORD:
            case T.BC_CMD_E.E_BC_CMD_SET_BOOTPWD_STATE:
            case T.BC_CMD_E.E_BC_CMD_SET_FTPCFG:
            case T.BC_CMD_E.E_BC_CMD_FTP_TEST:
            case T.BC_CMD_E.E_BC_CMD_IFRAME_PREVIEW:
            case T.BC_CMD_E.E_BC_CMD_IFRAME_REPLAY:
            case T.BC_CMD_E.E_BC_CMD_REBOOT:
            case T.BC_CMD_E.E_BC_CMD_DEVICE_SLEEP:
            case T.BC_CMD_E.E_BC_CMD_GETLOG:
            case T.BC_CMD_E.E_BC_CMD_START_ALARM_REPORT:
            case T.BC_CMD_E.E_BC_CMD_STOP_ALARM_REPORT:
            case T.BC_CMD_E.E_BC_CMD_PUSH_ADD:
            case T.BC_CMD_E.E_BC_CMD_RTMP_START:
            case T.BC_CMD_E.E_BC_CMD_RTMP_STOP:
            case T.BC_CMD_E.E_BC_CMD_SET_COMPRESS:
            case T.BC_CMD_E.E_BC_CMD_SET_OSD:
            case T.BC_CMD_E.E_BC_CMD_SET_COVER:
            case T.BC_CMD_E.E_BC_CMD_SET_RECORDSCHED:
            case T.BC_CMD_E.E_BC_CMD_SET_PTZCFG:
            case T.BC_CMD_E.E_BC_CMD_SET_MOTION:
            case T.BC_CMD_E.E_BC_CMD_SET_VILOST:
            case T.BC_CMD_E.E_BC_CMD_SET_PRESET:
            case T.BC_CMD_E.E_BC_CMD_GOTO_PRESET:
            case T.BC_CMD_E.E_BC_CMD_SET_CRUISE:
            case T.BC_CMD_E.E_BC_CMD_SET_CAMERA:
            case T.BC_CMD_E.E_BC_CMD_SET_ISP_DAY_NIGHT_MODE:
            case T.BC_CMD_E.E_BC_CMD_SET_LED_STATE:
            case T.BC_CMD_E.E_BC_CMD_SET_FTPTASK:
            case T.BC_CMD_E.E_BC_CMD_SET_EMAIL_TASK:
            case T.BC_CMD_E.E_BC_CMD_SET_PUSH_TASK:
            case T.BC_CMD_E.E_BC_CMD_SNAP:
            case T.BC_CMD_E.E_BC_CMD_SET_AUTO_FOCUS:
            case T.BC_CMD_E.E_BC_CMD_SET_CROP_CFG:
            case T.BC_CMD_E.E_BC_CMD_CROP_SNAP:
            case T.BC_CMD_E.E_BC_CMD_SET_RINGTONE_CFG:
            case T.BC_CMD_E.E_BC_CMD_MANUAL_RING_DOWN:
            case T.BC_CMD_E.E_BC_CMD_MUTE_ALARM_AUDIO:
            case T.BC_CMD_E.E_BC_CMD_SAVE_RINGTONE:
            default: {
                _callback_1.PROMISE_CBS.handleCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx, callback => {
                    if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode) {
                        if (callback.sdkResolve)
                            callback.sdkResolve();
                    }
                    else {
                        if (callback.sdkReject) {
                            callback.sdkReject({
                                code: cmdData.bcRspCode,
                                description: 'remote config faild ...',
                                data: cmdData
                            });
                        }
                    }
                });
                break;
            }
        }
    }
    deviceCmd(handle, cmd, func, param, type, cmdIdx) {
        return new Promise((resolve, reject) => {
            let ret = T.ERROR.E_UND;
            if (undefined !== param && undefined !== type && undefined !== cmdIdx) {
                let castParam = _cast_1.refCast(param);
                let data = new type(castParam);
                ret = func(handle, data.ref(), cmdIdx);
            }
            else if (undefined !== param && undefined !== type) {
                let castParam = _cast_1.refCast(param);
                let data = new type(castParam);
                ret = func(handle, data.ref());
            }
            else if (undefined !== param) {
                ret = func(handle, param);
            }
            else {
                ret = func(handle);
            }
            if (ret != T.ERROR.E_NONE && ret != T.ERROR.E_BUSY) {
                reject({ code: ret });
                return;
            }
            let cb = {
                sdkResolve: resolve,
                sdkReject: reject
            };
            _callback_1.PROMISE_CBS.addCallback(handle, 0, cmd, 0, cb);
        });
    }
    channelCmd(handle, channel, cmd, func, param, type, cmdIdx) {
        return new Promise((resolve, reject) => {
            let ret = T.ERROR.E_UND;
            if (undefined !== param && undefined !== type) {
                let castParam = _cast_1.refCast(param);
                let data = new type(castParam);
                undefined === cmdIdx ?
                    ret = func(handle, channel, data.ref()) :
                    ret = func(handle, channel, data.ref(), cmdIdx);
            }
            else if (undefined !== param) {
                ret = func(handle, channel, param);
            }
            else {
                ret = func(handle, channel);
            }
            if (ret != T.ERROR.E_NONE && ret != T.ERROR.E_BUSY) {
                reject({ code: ret });
                return;
            }
            let cb = {
                sdkResolve: resolve,
                sdkReject: reject
            };
            _callback_1.PROMISE_CBS.addCallback(handle, channel, cmd, (cmdIdx ? cmdIdx : 0), cb);
        });
    }
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
    getState(handle, channel, cmd) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, T.BCSDK_CONFIG_STATE_E.BCSDK_CONFIG_STATE_NOTREADY);
            let ret = native_1.native.BCSDK_RemoteConfigState(handle, channel, cmd, buf);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    getState2(handle, channel, cmd, cmdIdx) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, T.BCSDK_CONFIG_STATE_E.BCSDK_CONFIG_STATE_NOTREADY);
            let ret = native_1.native.BCSDK_RemoteConfigState2(handle, channel, cmd, cmdIdx, buf);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    /* system version
     *
     * callback with E_BC_CMD_GET_VERSION
     */
    getVersionInfo(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_VERSION, native_1.native.BCSDK_RemoteGetVersionInfo);
    }
    /* system general
     *
     * callback with E_BC_CMD_GET_SYS, E_BC_CMD_SET_SYS, E_BC_CMD_SET_DEVICE_NAME
     */
    getSysGeneralCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_SYS, native_1.native.BCSDK_RemoteGetSysGeneralCfg);
    }
    setSysGeneralCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_SYS, native_1.native.BCSDK_RemoteSetSysGeneralCfg, param, _T.BC_SYS_GENERAL_CFG, 0);
    }
    setDeviceName(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_DEVICE_NAME, native_1.native.BCSDK_RemoteSetDeviceName, param, _T.BC_DEVICE_NAME_CFG);
    }
    /* autoReboot
     *
     * callback with E_BC_CMD_GET_AUTOREBOOT_CFG, E_BC_CMD_SET_AUTOREBOOT_CFG
     */
    getAutoRebootCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_AUTOREBOOT_CFG, native_1.native.BCSDK_RemoteGetAutoRebootCfg);
    }
    setAutoRebootCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_AUTOREBOOT_CFG, native_1.native.BCSDK_RemoteSetAutoRebootCfg, param, _T.BC_AUTOREBOOT_CFG);
    }
    /* factory default
     *
     * callback with E_BC_CMD_RESTORE
     */
    factoryDefault(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_RESTORE, native_1.native.BCSDK_RemoteFactoryDefault, param, _T.BC_RESTORE_CFG);
    }
    /* record cfg
     *
     * callback with E_BC_CMD_GET_ADVRECORD, E_BC_CMD_SET_ADVRECORD
     */
    getRecordGenCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_ADVRECORD, native_1.native.BCSDK_RemoteGetRecordGenCfg);
    }
    setRecordGenCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_ADVRECORD, native_1.native.BCSDK_RemoteSetRecordGenCfg, param, _T.BC_RECORD_GENERAL_CFG, 0);
    }
    /* email
     *
     * callback with E_BC_CMD_GET_EMAIL, E_BC_CMD_SET_EMAIL, E_BC_CMD_EMAILTEST
     */
    getMailCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_EMAIL, native_1.native.BCSDK_RemoteGetMailCfg);
    }
    setMailCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_EMAIL, native_1.native.BCSDK_RemoteSetMailCfg, param, _T.BC_EMAIL_CFG);
    }
    emailTest(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_EMAILTEST, native_1.native.BCSDK_RemoteEmailTest, param, _T.BC_EMAIL_CFG);
    }
    /* output
     *
     * callback with E_BC_CMD_GET_OUTPUT, E_BC_CMD_SET_OUTPUT
     */
    getOutputCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_OUTPUT, native_1.native.BCSDK_RemoteGetOutputCfg);
    }
    setOutputCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_OUTPUT, native_1.native.BCSDK_RemoteSetOutputCfg, param, _T.BC_OUTPUT_CFG);
    }
    /* HDDCfg
     *
     * callback with E_BC_CMD_GET_HDD_CFG
     */
    getHDDCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_HDD_CFG, native_1.native.BCSDK_RemoteGetHDDCfg);
    }
    /* HDD Init
     *
     * callback with E_BC_CMD_INIT_HDD
     */
    initHdd(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_INIT_HDD, native_1.native.BCSDK_RemoteInitHdd, param, _T.BC_HDD_INIT_CFG);
    }
    initSDCard(handle, param) {
        return this.initHdd(handle, param);
    }
    /* HDD Full
     *
     * callback with E_BC_CMD_GET_HDDFULL_EXPCFG, E_BC_CMD_SET_HDDFULL_EXPCFG
     */
    getHDDFull(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_HDDFULL_EXPCFG, native_1.native.BCSDK_RemoteGetHDDFull);
    }
    setHDDFull(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_HDDFULL_EXPCFG, native_1.native.BCSDK_RemoteSetHDDFull, param, _T.BC_EXCEPTION_CFG);
    }
    /* HDD Error
     *
     * callback with E_BC_CMD_GET_HDDERR_EXPCFG, E_BC_CMD_SET_HDDERR_EXPCFG
     */
    getHDDError(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_HDDERR_EXPCFG, native_1.native.BCSDK_RemoteGetHDDError);
    }
    setHDDError(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_HDDERR_EXPCFG, native_1.native.BCSDK_RemoteSetHDDError, param, _T.BC_EXCEPTION_CFG);
    }
    /* Network Disconnect
     *
     * callback with E_BC_CMD_GET_NETDISCONNECT_EXPCFG, E_BC_CMD_SET_NETDISCONNECT_EXPCFG
     */
    getNetDisconnect(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_NETDISCONNECT_EXPCFG, native_1.native.BCSDK_RemoteGetNetDisconnect);
    }
    setNetDisconnect(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_NETDISCONNECT_EXPCFG, native_1.native.BCSDK_RemoteSetNetDisconnect, param, _T.BC_EXCEPTION_CFG);
    }
    /* IpConflict
     *
     * callback with E_BC_CMD_GET_IPCONFLICT_EXPCFG, E_BC_CMD_SET_IPCONFLICT_EXPCFG
     */
    getIpConflict(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_IPCONFLICT_EXPCFG, native_1.native.BCSDK_RemoteGetIpConflict);
    }
    setIpConflict(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_IPCONFLICT_EXPCFG, native_1.native.BCSDK_RemoteSetIpConflict, param, _T.BC_EXCEPTION_CFG);
    }
    /* network local
     *
     * callback with E_BC_CMD_GET_LOCAL, E_BC_CMD_SET_LOCAL
     */
    getNetworkCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_LOCAL, native_1.native.BCSDK_RemoteGetNetworkCfg);
    }
    setNetworkCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_LOCAL, native_1.native.BCSDK_RemoteSetNetworkCfg, param, _T.BC_LOCAL_CFG);
    }
    /* normalPort
     *
     * callback with E_BC_CMD_GET_NORMAL_PORT, E_BC_CMD_SET_NORMAL_PORT
     */
    getNetNormalPort(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_NORMAL_PORT, native_1.native.BCSDK_RemoteGetNetNormalPort);
    }
    setNetNormalPort(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_NORMAL_PORT, native_1.native.BCSDK_RemoteSetNetNormalPort, param, _T.BC_NET_NORMAL_PORT);
    }
    /* advanced Port
     *
     * callback with E_BC_CMD_GET_ADVANCED_PORTS, E_BC_CMD_SET_ADVANCED_PORTS
     */
    getNetAdvancedPort(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_ADVANCED_PORTS, native_1.native.BCSDK_RemoteGetNetAdvancedPort);
    }
    setNetAdvancedPort(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_ADVANCED_PORTS, native_1.native.BCSDK_RemoteSetNetAdvancedPort, param, _T.BC_NET_ADVANCED_PORT);
    }
    /* upnpCfg
     *
     * callback with E_BC_CMD_GET_UPNPSTATE, E_BC_CMD_SET_UPNPSTATE
     */
    getUpnpCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_UPNPSTATE, native_1.native.BCSDK_RemoteGetUpnpCfg);
    }
    setUpnpCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_UPNPSTATE, native_1.native.BCSDK_RemoteSetUpnpCfg, param, _T.BC_UPNP_CFG);
    }
    /* uid
     *
     * callback with E_BC_CMD_GET_UID
     */
    getUidInfo(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_UID, native_1.native.BCSDK_RemoteGetUidInfo);
    }
    /* p2p cfg
     *
     * callback with E_BC_CMD_GET_PTOP_CFG, E_BC_CMD_SET_PTOP_CFG
     */
    getP2PCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_PTOP_CFG, native_1.native.BCSDK_RemoteGetP2PCfg);
    }
    setP2PCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_PTOP_CFG, native_1.native.BCSDK_RemoteSetP2PCfg, param, _T.BC_P2P_CFG);
    }
    /* RF Sensor
     *
     * callback with E_BC_CMD_GET_RFSENSOR, E_BC_CMD_SET_RFSENSOR
     */
    getRFSensor(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_RFSENSOR, native_1.native.BCSDK_RemoteGetRFSensor);
    }
    setOutArm(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_RFSENSOR, native_1.native.BCSDK_RemoteSetOutArm);
    }
    setHomeArm(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_RFSENSOR, native_1.native.BCSDK_RemoteSetHomeArm);
    }
    setSleepArm(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_RFSENSOR, native_1.native.BCSDK_RemoteSetSleepArm);
    }
    setDisarm(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_RFSENSOR, native_1.native.BCSDK_RemoteSetDisarm);
    }
    /* Alarm In
     *
     * callback with E_BC_CMD_GET_ALARMINCFG, E_BC_CMD_SET_ALARMINCFG
     */
    getAlarmIn(handle, inputId) {
        return this.channelCmd(handle, inputId, T.BC_CMD_E.E_BC_CMD_GET_ALARMINCFG, native_1.native.BCSDK_RemoteGetAlarmIn);
    }
    setAlarmIn(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_ALARMINCFG, native_1.native.BCSDK_RemoteSetAlarmIn, param, _T.BC_ALARM_IN_CFG);
    }
    /* Alarm Out
     *
     * callback with E_BC_CMD_GET_ALARMOUTCFG, E_BC_CMD_SET_ALARMOUTCFG
     */
    getAlarmOut(handle, outputId) {
        return this.channelCmd(handle, outputId, T.BC_CMD_E.E_BC_CMD_GET_ALARMOUTCFG, native_1.native.BCSDK_RemoteGetAlarmOut);
    }
    setAlarmOut(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_ALARMOUTCFG, native_1.native.BCSDK_RemoteSetAlarmOut, param, _T.BC_ALARM_OUT_CFG);
    }
    /* RF Alarm Cfg
     *
     * callback with E_BC_CMD_GET_RF_CFG, E_BC_CMD_SET_RF_CFG, E_BC_CMD_SET_RF_ALARM_STATUS
     */
    getRfAlarmCfg(handle, rfId) {
        return this.channelCmd(handle, rfId, T.BC_CMD_E.E_BC_CMD_GET_RF_CFG, native_1.native.BCSDK_RemoteGetRfAlarmCfg);
    }
    setRfAlarmCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_RF_CFG, native_1.native.BCSDK_RemoteSetRfAlarmCfg, param, _T.BC_RF_ALARM_CFG, 0);
    }
    setRfAlarmStatus(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_RF_ALARM_STATUS, native_1.native.BCSDK_RemoteSetRfAlarmStatus, param, _T.BC_RF_ALARM_STATUS);
    }
    /* DST
     *
     * callback with E_BC_CMD_GET_DST, E_BC_CMD_SET_DST
     */
    getDst(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_DST, native_1.native.BCSDK_RemoteGetDst);
    }
    setDst(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_DST, native_1.native.BCSDK_RemoteSetDst, param, _T.BC_DST_CFG, 0);
    }
    /* DDNS
     *
     * callback with E_BC_CMD_GET_DDNSCFG, E_BC_CMD_SET_DDNSCFG
     */
    getDdns(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_DDNSCFG, native_1.native.BCSDK_RemoteGetDdns);
    }
    setDdns(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_DDNSCFG, native_1.native.BCSDK_RemoteSetDdns, param, _T.BC_DDNS_CFG);
    }
    /* NTP
     *
     * callback with E_BC_CMD_GET_NTPCFG, E_BC_CMD_SET_NTPCFG
     */
    getNtp(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_NTPCFG, native_1.native.BCSDK_RemoteGetNtp);
    }
    setNtp(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_NTPCFG, native_1.native.BCSDK_RemoteSetNtp, param, _T.BC_NTP_CFG);
    }
    /* PPPOE
     *
     * callback with E_BC_CMD_GET_PPPOECFG, E_BC_CMD_SET_PPPOECFG
     */
    getPppoe(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_PPPOECFG, native_1.native.BCSDK_RemoteGetPppoe);
    }
    setPppoe(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_PPPOECFG, native_1.native.BCSDK_RemoteSetPppoe, param, _T.BC_PPPOE_CFG);
    }
    /* Online Update
     *
     * callback with E_BC_CMD_ONLINE_UPDATE
     */
    onlineUpate(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_ONLINE_UPDATE, native_1.native.BCSDK_RemoteOnlineUpate, param, _T.BC_ONLINE_UPDATE);
    }
    /* online updtate status
     *
     * callback with E_BC_CMD_GET_ONLINE_UPDATE_STATUS
     */
    getOnlineUpdateStatus(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_ONLINE_UPDATE_STATUS, native_1.native.BCSDK_RemoteGetOnlineUpdateStatus);
    }
    /* Auto Update
     *
     * callback with E_BC_CMD_GET_AUTO_UPDATE, E_BC_CMD_SET_AUTO_UPDATE
     */
    getAutoUpdateState(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_AUTO_UPDATE, native_1.native.BCSDK_RemoteGetAutoUpdateState);
    }
    setAutoUpdateState(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_AUTO_UPDATE, native_1.native.BCSDK_RemoteSetAutoUpdateState, param, _T.BC_AUTO_UPDATE);
    }
    /* Online New Firmware
     *
     * callback with E_BC_CMD_GET_ONLINE_NEW_FIRMWARE
     */
    getOnlineNewFwInfo(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_ONLINE_NEW_FIRMWARE, native_1.native.BCSDK_RemoteGetOnlineNewFwInfo);
    }
    /* Performances
     *
     * callback with E_BC_CMD_GET_PERFORMANCE
     */
    getPerformances(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_PERFORMANCE, native_1.native.BCSDK_RemoteGetPerformances);
    }
    /* Wifi
     *
     * callback with E_BC_CMD_GET_WIFI_SIGNAL, E_BC_CMD_GET_WIFI_INFO,
     * E_BC_CMD_SET_WIFI_INFO, E_BC_CMD_WIFI_TEST
     */
    getWifiSignal(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_WIFI_SIGNAL, native_1.native.BCSDK_RemoteGetWifiSignal);
    }
    getWifiCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_WIFI_INFO, native_1.native.BCSDK_RemoteGetWifiCfg);
    }
    setWifiCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_WIFI_INFO, native_1.native.BCSDK_RemoteSetWifiCfg, param, _T.BC_WIFI_CFG);
    }
    WifiTest(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_WIFI_TEST, native_1.native.BCSDK_RemoteWifiTest, param, _T.BC_WIFI_CFG);
    }
    /* 3g 4g info
     *
     * callback with E_BC_CMD_GET_3G_4G_INFO
     */
    get3g4gInfo(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_3G_4G_INFO, native_1.native.BCSDK_RemoteGet3g4gInfo);
    }
    /* SIM Module Info
     *
     * callback with E_BC_CMD_GET_SIM_MODULE_INFO, E_BC_CMD_SET_SIM_MODULE_INFO
     */
    getSimModuleInfo(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_SIM_MODULE_INFO, native_1.native.BCSDK_RemoteGetSimModuleInfo);
    }
    setSimModuleInfo(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_SIM_MODULE_INFO, native_1.native.BCSDK_RemoteSetSimModuleInfo, param, _T.BC_SIM_MODULE_INFO);
    }
    /* Cloud
     *
     * callback with E_BC_CMD_GET_CLOUD_INFO, E_BC_CMD_BIND_CLOUD, E_BC_CMD_GET_CLOUD_CFG, E_BC_CMD_SET_CLOUD_CFG
     */
    getCloudInfo(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_CLOUD_INFO, native_1.native.BCSDK_RemoteGetCloudInfo);
    }
    bindCloud(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_BIND_CLOUD, native_1.native.BCSDK_RemoteBindCloud, param, _T.BC_BIND_CLOUD);
    }
    getCloudCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_CLOUD_CFG, native_1.native.BCSDK_RemoteGetCloudCfg);
    }
    setCloudCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_CLOUD_CFG, native_1.native.BCSDK_RemoteSetCloudCfg, param, _T.BC_CLOUD_CFG);
    }
    /* Scan ap
     *
     * callback with E_BC_CMD_GET_SCAN_AP
     */
    getScanAp(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_SCAN_AP, native_1.native.BCSDK_RemoteGetScanAp);
    }
    /* record file days
     *
     * callback with E_BC_CMD_GET_RECFILEDATE
     */
    getRecFileDaysByChannel(handle, start, end, channels) {
        let param = {
            startTime: start,
            endTime: end,
            items: []
        };
        for (let i = 0; i < 32; i++) {
            param.items.push({
                iUsed: 0,
                cUID: '',
                iRecType: []
            });
        }
        channels.forEach(channel => {
            param.items[channel].iUsed = 1;
        });
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_RECFILEDATE, native_1.native.BCSDK_RemoteGetRecFileDaysByChannel, param, _T.BC_RECORD_FILE_DAYS_BY_CHN);
    }
    /* user config
     *
     * callback with E_BC_CMD_GET_USERCFG, E_BC_CMD_SET_USERCFG
     */
    getUserCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_USERCFG, native_1.native.BCSDK_RemoteGetUserCfg);
    }
    setUserCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_USERCFG, native_1.native.BCSDK_RemoteSetUserCfg, param, _T.BC_USER_CFG);
    }
    /* set user ability
     *
     * callback with E_BC_CMD_SET_USER_ALL_ABILITY
     */
    initNewUserAiblity(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_USER_ALL_ABILITY, native_1.native.BCSDK_RemoteInitNewUserAiblity, param, _T.BC_USER_FOR_ABILITY);
    }
    /* online user config
     *
     * callback with E_BC_CMD_GET_USER_ONLINE, E_BC_CMD_SET_USER_ONLINE
     */
    getOnlineUserCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_USER_ONLINE, native_1.native.BCSDK_RemoteGetOnlineUserCfg);
    }
    setOnlineUserCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_USER_ONLINE, native_1.native.BCSDK_RemoteSetOnlineUserCfg, param, _T.BC_USER_ONLINE_CFG);
    }
    /* force user password when first login
     *
     * callback with E_BC_CMD_FORCE_PASSWORD
     */
    forceUserPassword(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_FORCE_PASSWORD, native_1.native.BCSDK_RemoteForceUserPassword, param, _T.BC_FORCE_PWD);
    }
    /* pwd state
     *
     * callback with E_BC_CMD_GET_BOOTPWD_STATE, E_BC_CMD_SET_BOOTPWD_STATE
     */
    getBootPwdState(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_BOOTPWD_STATE, native_1.native.BCSDK_RemoteGetBootPwdState);
    }
    setBootPwdState(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_BOOTPWD_STATE, native_1.native.BCSDK_RemoteSetBootPwdState, param, _T.BC_BOOT_PWD_STATE);
    }
    /* upgrade firmware
     *
     * callback with E_BC_CMD_UPGRADE, E_BC_CMD_UPGRADE_PROGRESS
     */
    //public upgradeFirmware(handle: number, param: T.BC_UPGRADE_FILE_INFO): Promise<void> {         return new Promise((resolve, reject) => {          });     }
    /* Ftp Cfg
     *
     * callback with E_BC_CMD_GET_FTPCFG, E_BC_CMD_SET_FTPCFG, E_BC_CMD_FTP_TEST
     */
    getFtpCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_FTPCFG, native_1.native.BCSDK_RemoteGetFtpCfg);
    }
    setFtpCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_FTPCFG, native_1.native.BCSDK_RemoteSetFtpCfg, param, _T.BC_FTP_CFG);
    }
    setFtpTest(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_FTP_TEST, native_1.native.BCSDK_RemoteSetFtpTest, param, _T.BC_FTP_CFG);
    }
    /* I Frame Support
     *
     * callback with E_BC_CMD_IFRAME_PREVIEW, E_BC_CMD_IFRAME_REPLAY
     */
    setIFramePreview(handle, iFrame) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_IFRAME_PREVIEW, native_1.native.BCSDK_SetDeviceIFramePreview, iFrame);
    }
    setIFrameReplay(handle, iFrame) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_IFRAME_REPLAY, native_1.native.BCSDK_SetDeviceIFrameReplay, iFrame);
    }
    /* Reboot
     *
     * callback with E_BC_CMD_REBOOT
     */
    reboot(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_REBOOT, native_1.native.BCSDK_RemoteReboot);
    }
    /* Device Sleep
     *
     * callback with E_BC_CMD_DEVICE_SLEEP
     */
    deviceSleep(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_DEVICE_SLEEP, native_1.native.BCSDK_RemoteDeviceSleep);
    }
    /* export/import configuration file
     *
     * callback with E_BC_CMD_EXPORT, E_BC_CMD_EXPORT_PROGRESS, E_BC_CMD_IMPORT, E_BC_CMD_IMPORT_PROGRESS
     */
    // public exportConfig(handle: number, BC_CONFIG_FILE_INFO *fileInfo): Promise<void> {         return new Promise((resolve, reject) => {          });     }
    // public importConfig(handle: number, BC_CONFIG_FILE_INFO *fileInfo): Promise<void> {         return new Promise((resolve, reject) => {          });     }
    /* get log file
     *
     * callback with E_BC_CMD_GETLOG
     */
    getLogFile(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GETLOG, native_1.native.BCSDK_RemoteGetLogFile, param, _T.BC_CONFIG_FILE_INFO);
    }
    /* start alarm report
     *
     * callback with E_BC_CMD_START_ALARM_REPORT, E_BC_CMD_STOP_ALARM_REPORT
     */
    startAlarmReport(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_START_ALARM_REPORT, native_1.native.BCSDK_RemoteStartAlarmReport);
    }
    stopAlarmReport(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_START_ALARM_REPORT, native_1.native.BCSDK_RemoteStopAlarmReport);
    }
    /* push open
     *
     * callback with E_BC_CMD_PUSH_ADD
     */
    pushOpen(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_PUSH_ADD, native_1.native.BCSDK_RemotePushOpen, param, _T.BC_PUSH_INFO);
    }
    /* rtmp operation
     *
     * callback with E_BC_CMD_RTMP_START, E_BC_CMD_RTMP_STOP
     */
    rtmpStart(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_RTMP_START, native_1.native.BCSDK_RemoteRtmpStart, param, _T.BC_RTMP_OPT);
    }
    rtmpStop(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_RTMP_STOP, native_1.native.BCSDK_RemoteRtmpStart, param, _T.BC_RTMP_OPT);
    }
    /*******************************************************************************
     * MARK: Channel Remote Config
     ******************************************************************************/
    /* encode
     *
     * callback with E_BC_CMD_GET_COMPRESS, E_BC_CMD_SET_COMPRESS
     */
    getEncCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_COMPRESS, native_1.native.BCSDK_RemoteGetEncCfg);
    }
    setEncCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_COMPRESS, native_1.native.BCSDK_RemoteSetEncCfg, param, _T.BC_CHN_ENC_INFO);
    }
    /* osd
     *
     * callback with E_BC_CMD_GET_OSD, E_BC_CMD_SET_OSD
     */
    getOsdCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_OSD, native_1.native.BCSDK_RemoteGetOsdCfg);
    }
    setOsdCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_OSD, native_1.native.BCSDK_RemoteSetOsdCfg, param, _T.BC_OSD_CFG);
    }
    /* cameraCfg
     *
     * callback with E_BC_CMD_GET_CAMERA_CFG, E_BC_CMD_SET_CAMERA_CFG
     */
    getCameraCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_CAMERA_CFG, native_1.native.BCSDK_RemoteGetCameraCfg);
    }
    setCameraCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_CAMERA_CFG, native_1.native.BCSDK_RemoteSetCameraCfg, param, _T.BC_CAMERA_CFG);
    }
    /* Shelter
     *
     * callback with E_BC_CMD_GET_COVER, E_BC_CMD_SET_COVER
     */
    getShelter(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_COVER, native_1.native.BCSDK_RemoteGetShelter);
    }
    setShelter(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_COVER, native_1.native.BCSDK_RemoteSetShelter, param, _T.BC_COVER_CFG);
    }
    /* record schedule
     *
     * callback with E_BC_CMD_GET_RECORDSCHED, E_BC_CMD_SET_RECORDSCHED
     */
    getRecordSchedule(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_RECORDSCHED, native_1.native.BCSDK_RemoteGetRecordSchedule);
    }
    setRecordSchedule(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_RECORDSCHED, native_1.native.BCSDK_RemoteSetRecordSchedule, param, _T.BC_RECORD_SCHEDULE_CFG);
    }
    /* PTZ Config
     *
     * callback with E_BC_CMD_GET_PTZCFG, E_BC_CMD_SET_PTZCFG
     */
    getPtzCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_PTZCFG, native_1.native.BCSDK_RemoteGetPtzCfg);
    }
    setPtzCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_PTZCFG, native_1.native.BCSDK_RemoteSetPtzCfg, param, _T.BC_PTZ_DECODER);
    }
    /* Motion Config
     *
     * callback with E_BC_CMD_GET_MOTION, E_BC_CMD_SET_MOTION
     */
    getMotionCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_MOTION, native_1.native.BCSDK_RemoteGetMotionCfg);
    }
    setMotionCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_MOTION, native_1.native.BCSDK_RemoteSetMotionCfg, param, _T.BC_MOTION_CFG);
    }
    /* Video Loss
     *
     * callback with E_BC_CMD_GET_VILOST, E_BC_CMD_SET_VILOST
     */
    getVideoLoss(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_VILOST, native_1.native.BCSDK_RemoteGetVideoLoss);
    }
    setVideoLoss(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_VILOST, native_1.native.BCSDK_RemoteSetVideoLoss, param, _T.BC_VILOST_CFG);
    }
    /* ptz preset
     *
     * callback with E_BC_CMD_GET_PRESET, E_BC_CMD_SET_PRESET, E_BC_CMD_GOTO_PRESET
     */
    getPresets(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_PRESET, native_1.native.BCSDK_RemoteGetPresets);
    }
    setPresets(handle, channel, param, cmdIdx) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_PRESET, native_1.native.BCSDK_RemoteSetPresets, param, _T.BC_PTZ_PRESETS, cmdIdx);
    }
    presetInvoke(handle, channel, preset) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GOTO_PRESET, native_1.native.BCSDK_RemotePresetInvoke, preset);
    }
    /* ptz cruise
     *
     * callback with E_BC_CMD_GET_CRUISE, E_BC_CMD_SET_CRUISE, E_BC_CMD_PTZ_CONTROL
     */
    getCruises(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_CRUISE, native_1.native.BCSDK_RemoteGetCruises);
    }
    setCruise(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_CRUISE, native_1.native.BCSDK_RemoteSetCruise, param, _T.BC_PTZ_CRUISES);
    }
    cruiseInvoke(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_PTZ_CONTROL, native_1.native.BCSDK_RemoteCruiseInvoke, 0);
    }
    cruiseStop(handle, channel) {
        // TODO: same cmd with cruise Invoke
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_PTZ_CONTROL, native_1.native.BCSDK_RemoteCruiseStop, 0);
    }
    /* isp
     *
     * callback with E_BC_CMD_GET_CAMERA, E_BC_CMD_GET_DEFAULT_CAMERA, E_BC_CMD_SET_CAMERA, E_BC_CMD_SET_ISP_DAY_NIGHT_MODE
     */
    getIspCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_CAMERA, native_1.native.BCSDK_RemoteGetIspCfg);
    }
    getDefaultIspCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_DEFAULT_CAMERA, native_1.native.BCSDK_RemoteGetDefaultIspCfg);
    }
    setIspCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_CAMERA, native_1.native.BCSDK_RemoteSetIspCfg, param, _T.BC_ISP_CFG);
    }
    setIspDayNightMode(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_ISP_DAY_NIGHT_MODE, native_1.native.BCSDK_RemoteSetIspDayNightMode, param, _T.BC_DAY_NIGHT_MODE_CFG);
    }
    /* LED
     *
     * callback with E_BC_CMD_GET_LED_STATE, E_BC_CMD_SET_LED_STATE
     */
    getLedState(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_LED_STATE, native_1.native.BCSDK_RemoteGetLedState);
    }
    setLedState(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_LED_STATE, native_1.native.BCSDK_RemoteSetLedState, param, _T.BC_LED_LIGHT_STATE);
    }
    /* Ftp Task
     *
     * callback with E_BC_CMD_GET_FTPTASK, E_BC_CMD_SET_FTPTASK
     */
    getFtpTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_FTPTASK, native_1.native.BCSDK_RemoteGetFtpTask);
    }
    setFtpTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_FTPTASK, native_1.native.BCSDK_RemoteSetFtpTask, param, _T.BC_FTP_TASK);
    }
    /* Email Task
     *
     * callback with E_BC_CMD_GET_EMAIL_TASK, E_BC_CMD_SET_EMAIL_TASK
     */
    getEmailTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_EMAIL_TASK, native_1.native.BCSDK_RemoteGetEmailTask);
    }
    setEmailTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_EMAIL_TASK, native_1.native.BCSDK_RemoteSetEmailTask, param, _T.BC_EMAIL_TASK);
    }
    /* push task
     *
     * callback with E_BC_CMD_GET_PUSH_TASK, E_BC_CMD_SET_PUSH_TASK
     */
    getPushTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_PUSH_TASK, native_1.native.BCSDK_RemoteGetPushTask);
    }
    setPushTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_PUSH_TASK, native_1.native.BCSDK_RemoteSetPushTask, param, _T.BC_PUSH_TASK);
    }
    /* audio task
     *
     * callback with E_BC_CMD_GET_AUDIO_TASK, E_BC_CMD_SET_AUDIO_TASK
     */
    getAudioTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_AUDIO_TASK, native_1.native.BCSDK_RemoteGetAudioTask);
    }
    setAudioTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_AUDIO_TASK, native_1.native.BCSDK_RemoteSetAudioTask, param, _T.BC_AUDIO_TASK);
    }
    /* Snap
     *
     * callback with E_BC_CMD_SNAP
     */
    snap(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SNAP, native_1.native.BCSDK_RemoteSnap, param, _T.BC_SNAP_INFO);
    }
    /* Config Stream
     */
    // int _BCSDK_ BCSDK_GetIsConfigStreamOpen(handle: number, channel: number, bool *open): Promise<void> {         return new Promise((resolve, reject) => {          });     }
    // int _BCSDK_ BCSDK_ConfigStreamOpen(handle: number,
    //                                    channel: number,
    //                                    OnRenderFrameCallback configFrameCallback,
    //                                    void *userData): Promise<void> {         return new Promise((resolve, reject) => {          });     }
    // int _BCSDK_ BCSDK_ConfigStreamClose(handle: number, channel: number): Promise<void> {         return new Promise((resolve, reject) => {          });     }
    /* Auto Focus
     *
     * callback with E_BC_CMD_GET_AUTO_FOCUS, E_BC_CMD_SET_AUTO_FOCUS
     */
    getAutoFocus(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_AUTO_FOCUS, native_1.native.BCSDK_RemoteGetAutoFocus);
    }
    setAutoFocus(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_AUTO_FOCUS, native_1.native.BCSDK_RemoteSetAutoFocus, param, _T.BC_PTZ_AUTO_FOCUS);
    }
    /* Crop Cfg
     *
     * callback with E_BC_CMD_GET_CROP_CFG, E_BC_CMD_SET_CROP_CFG
     */
    getCropCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_CROP_CFG, native_1.native.BCSDK_RemoteGetCropCfg);
    }
    setCropCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_CROP_CFG, native_1.native.BCSDK_RemoteSetCropCfg, param, _T.BC_CROP_CFG);
    }
    /* Crop Snap
     *
     * callback with E_BC_CMD_CROP_SNAP
     */
    cropSnap(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_CROP_SNAP, native_1.native.BCSDK_RemoteCropSnap, param, _T.BC_CROP_SNAP_INFO);
    }
    /* battery info
     *
     * callback with E_BC_CMD_GET_BATTERY_INFO
     */
    getBatteryInfo(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_BATTERY_INFO, native_1.native.BCSDK_RemoteGetBatteryInfo);
    }
    /* battery analysis
     *
     * callback with E_BC_CMD_GET_BATTERY_ANALYSIS
     */
    getBatteryAnalysis(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_BATTERY_ANALYSIS, native_1.native.BCSDK_RemoteGetBatteryAnalysis);
    }
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
    getRingtoneFileInfo(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_FILE_INFO, native_1.native.BCSDK_RemoteGetRingtoneFileInfo);
    }
    getRingtoneCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_CFG, native_1.native.BCSDK_RemoteGetRingtoneCfg);
    }
    setRingtoneCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_RINGTONE_CFG, native_1.native.BCSDK_RemoteSetRingtoneCfg, param, _T.BC_RINGTONE_CFG);
    }
    manualRingDown(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_MANUAL_RING_DOWN, native_1.native.BCSDK_RemoteManualRingDown, param, _T.BC_MANUAL_RING_DOWN);
    }
    muteAlarmAudio(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_MUTE_ALARM_AUDIO, native_1.native.BCSDK_RemoteMuteAlarmAudio, param, _T.BC_MUTE_ALARM_AUDIO);
    }
    saveRingtone(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SAVE_RINGTONE, native_1.native.BCSDK_RemoteSaveRingtone);
    }
    // public importRingtone(handle: number, channel: number, param: T.BC_RINGTONE_FILE_INFO): Promise<void> {
    // }
    getRingtoneAbility(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_ABILITY, native_1.native.BCSDK_RemoteGetRingtoneAbility);
    }
}
CONFIG.singleton = new CONFIG();
exports.config = CONFIG.instance();
//# sourceMappingURL=config.js.map