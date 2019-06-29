"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi_1 = require("ffi");
const ref = require("ref");
const native_1 = require("./native");
const T = require("../types");
const _cast_1 = require("./_cast");
const _T = require("./_struct");
const _callback_1 = require("./_callback");
const config_1 = require("./config");
const live_1 = require("./live");
const playback_1 = require("./playback");
const deviceCallback = ffi_1.Callback('void', ['int', _T.BC_CMD_DATA, _T.pointer('void')], function (handle, cmdData, userData) {
    if (!cmdData /*_T.BC_CMD_DATA*/
        || 'undefined' === typeof cmdData.bcCmd
        || 'undefined' === typeof cmdData.cmdIdx
        || 'undefined' === typeof cmdData.pRspData
        || 'undefined' === typeof cmdData.bcRspCode
        || 'undefined' === typeof cmdData.dataLen
        || 'undefined' === typeof cmdData.handleId) {
        return;
    }
    switch (cmdData.bcCmd) {
        // device about
        case T.BC_CMD_E.E_BC_CMD_LOGIN:
        case T.BC_CMD_E.E_BC_CMD_LOGOUT:
        case T.BC_CMD_E.E_BC_CMD_PUSH_ADD:
        case T.BC_CMD_E.E_BC_CMD_PUSH_DEL:
        case T.BC_CMD_E.E_BC_CMD_CONNECTION_TEST:
        case T.BC_CMD_E.E_BC_CMD_RECONNECT:
        case T.BC_CMD_E.E_BC_CMD_SET_ABILITY:
        case T.BC_CMD_E.E_BC_CMD_GET_ABILITY:
        case T.BC_CMD_E.E_BC_CMD_CAMERA_STATE:
        case T.BC_CMD_E.E_BC_CMD_CONNECTION_STATE_CHANGE:
        case T.BC_CMD_E.E_BC_CMD_LOGIN_INFO_CHANGE:
        case T.BC_CMD_E.E_BC_CMD_ALARM_REPORT:
            {
                exports.device.handleSDKCallback(handle, cmdData);
                break;
            }
        // live about
        case T.BC_CMD_E.E_BC_CMD_REALPLAY:
        case T.BC_CMD_E.E_BC_CMD_STOPREALPLAY:
            {
                live_1.live.handleSDKCallback(handle, cmdData);
                break;
            }
        // playback about
        case T.BC_CMD_E.E_BC_CMD_SEARCH_ALARM_VIDEOS:
        case T.BC_CMD_E.E_BC_CMD_SEARCH_RECFILES:
        case T.BC_CMD_E.E_BC_CMD_PLAYBACKBYNAME:
        case T.BC_CMD_E.E_BC_CMD_STOPPLAYBACKBYNAME:
        case T.BC_CMD_E.E_BC_CMD_PLAYBACKBYTIME:
        case T.BC_CMD_E.E_BC_CMD_STOPPLAYBACKBYTIME:
            {
                playback_1.playback.handleSDKCallback(handle, cmdData);
            }
        // remote config about
        case T.BC_CMD_E.E_BC_CMD_GET_OSD:
        case T.BC_CMD_E.E_BC_CMD_SET_OSD:
        case T.BC_CMD_E.E_BC_CMD_GET_COLOR:
        case T.BC_CMD_E.E_BC_CMD_SET_COLOR:
        case T.BC_CMD_E.E_BC_CMD_GET_VILOST:
        case T.BC_CMD_E.E_BC_CMD_SET_VILOST:
        case T.BC_CMD_E.E_BC_CMD_GET_MOTION:
        case T.BC_CMD_E.E_BC_CMD_SET_MOTION:
        case T.BC_CMD_E.E_BC_CMD_GET_BLIND:
        case T.BC_CMD_E.E_BC_CMD_SET_BLIND:
        case T.BC_CMD_E.E_BC_CMD_GET_COVER:
        case T.BC_CMD_E.E_BC_CMD_SET_COVER:
        case T.BC_CMD_E.E_BC_CMD_GET_CAMERA:
        case T.BC_CMD_E.E_BC_CMD_SET_CAMERA:
        case T.BC_CMD_E.E_BC_CMD_GET_DST:
        case T.BC_CMD_E.E_BC_CMD_SET_DST:
        case T.BC_CMD_E.E_BC_CMD_GET_EMAIL:
        case T.BC_CMD_E.E_BC_CMD_SET_EMAIL:
        case T.BC_CMD_E.E_BC_CMD_GET_COMPRESS:
        case T.BC_CMD_E.E_BC_CMD_SET_COMPRESS:
        case T.BC_CMD_E.E_BC_CMD_GET_SYS:
        case T.BC_CMD_E.E_BC_CMD_SET_SYS:
        case T.BC_CMD_E.E_BC_CMD_GET_VERSION:
        case T.BC_CMD_E.E_BC_CMD_GET_ENC_PROFILE:
        case T.BC_CMD_E.E_BC_CMD_GET_OUTPUT:
        case T.BC_CMD_E.E_BC_CMD_SET_OUTPUT:
        case T.BC_CMD_E.E_BC_CMD_GET_ADVRECORD:
        case T.BC_CMD_E.E_BC_CMD_SET_ADVRECORD:
        case T.BC_CMD_E.E_BC_CMD_GET_RECORDSCHED:
        case T.BC_CMD_E.E_BC_CMD_SET_RECORDSCHED:
        case T.BC_CMD_E.E_BC_CMD_GET_LINKTYPE:
        case T.BC_CMD_E.E_BC_CMD_SET_LINKTYPE:
        case T.BC_CMD_E.E_BC_CMD_GET_PPPOECFG:
        case T.BC_CMD_E.E_BC_CMD_SET_PPPOECFG:
        case T.BC_CMD_E.E_BC_CMD_GET_LOCAL:
        case T.BC_CMD_E.E_BC_CMD_SET_LOCAL:
        case T.BC_CMD_E.E_BC_CMD_GET_UPNPSTATE:
        case T.BC_CMD_E.E_BC_CMD_SET_UPNPSTATE:
        case T.BC_CMD_E.E_BC_CMD_GET_NORMAL_PORT:
        case T.BC_CMD_E.E_BC_CMD_SET_NORMAL_PORT:
        case T.BC_CMD_E.E_BC_CMD_GET_NTPCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_NTPCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_DDNSCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_DDNSCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_IPFILTER:
        case T.BC_CMD_E.E_BC_CMD_SET_IPFILTER:
        case T.BC_CMD_E.E_BC_CMD_GET_HDDFULL_EXPCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_HDDFULL_EXPCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_HDDERR_EXPCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_HDDERR_EXPCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_NETDISCONNECT_EXPCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_NETDISCONNECT_EXPCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_IPCONFLICT_EXPCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_IPCONFLICT_EXPCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_PTZCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_PTZCFG:
        case T.BC_CMD_E.E_BC_CMD_INIT_HDD:
        case T.BC_CMD_E.E_BC_CMD_GET_HDD_CFG:
        case T.BC_CMD_E.E_BC_CMD_GET_AUTOREBOOT_CFG:
        case T.BC_CMD_E.E_BC_CMD_SET_AUTOREBOOT_CFG:
        case T.BC_CMD_E.E_BC_CMD_GET_PERFORMANCE:
        case T.BC_CMD_E.E_BC_CMD_GET_FTPCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_FTPCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_FTPTASK:
        case T.BC_CMD_E.E_BC_CMD_SET_FTPTASK:
        case T.BC_CMD_E.E_BC_CMD_GET_USERCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_USERCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_USER_ONLINE:
        case T.BC_CMD_E.E_BC_CMD_SET_USER_ONLINE:
        case T.BC_CMD_E.E_BC_CMD_REPLAY_SEEK_TIME:
        case T.BC_CMD_E.E_BC_CMD_GET_WIFI_INFO:
        case T.BC_CMD_E.E_BC_CMD_SET_WIFI_INFO:
        case T.BC_CMD_E.E_BC_CMD_GET_ALARMINCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_ALARMINCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_ALARMOUTCFG:
        case T.BC_CMD_E.E_BC_CMD_SET_ALARMOUTCFG:
        case T.BC_CMD_E.E_BC_CMD_GET_BOOTPWD_STATE:
        case T.BC_CMD_E.E_BC_CMD_SET_BOOTPWD_STATE:
        case T.BC_CMD_E.E_BC_CMD_GET_VTALARMIN:
        case T.BC_CMD_E.E_BC_CMD_SET_VTALARMIN:
        case T.BC_CMD_E.E_BC_CMD_GET_FDALARMIN:
        case T.BC_CMD_E.E_BC_CMD_SET_FDALARMIN:
        case T.BC_CMD_E.E_BC_CMD_GET_IDALARMIN:
        case T.BC_CMD_E.E_BC_CMD_SET_IDALARMIN:
        case T.BC_CMD_E.E_BC_CMD_UPGRADE:
        case T.BC_CMD_E.E_BC_CMD_GETLOG:
        case T.BC_CMD_E.E_BC_CMD_EXPORT:
        case T.BC_CMD_E.E_BC_CMD_IMPORT:
        case T.BC_CMD_E.E_BC_CMD_REBOOT:
        case T.BC_CMD_E.E_BC_CMD_GET_RECFILEDATE:
        case T.BC_CMD_E.E_BC_CMD_RESTORE:
        case T.BC_CMD_E.E_BC_CMD_EMAILTEST:
        case T.BC_CMD_E.E_BC_CMD_SHUTDOWN:
        case T.BC_CMD_E.E_BC_CMD_GET_MANALARM:
        case T.BC_CMD_E.E_BC_CMD_SET_MANALARM:
        case T.BC_CMD_E.E_BC_CMD_PTZ_CONTROL:
        case T.BC_CMD_E.E_BC_CMD_GET_RFSENSOR:
        case T.BC_CMD_E.E_BC_CMD_SET_RFSENSOR:
        case T.BC_CMD_E.E_BC_CMD_IFRAME_PREVIEW:
        case T.BC_CMD_E.E_BC_CMD_IFRAME_REPLAY:
        case T.BC_CMD_E.E_BC_CMD_GET_ADVANCED_PORTS:
        case T.BC_CMD_E.E_BC_CMD_SET_ADVANCED_PORTS:
        case T.BC_CMD_E.E_BC_CMD_GET_UID:
        case T.BC_CMD_E.E_BC_CMD_ONLINE_UPDATE:
        case T.BC_CMD_E.E_BC_CMD_FORCE_PASSWORD:
        case T.BC_CMD_E.E_BC_CMD_GET_PRESET:
        case T.BC_CMD_E.E_BC_CMD_SET_PRESET:
        case T.BC_CMD_E.E_BC_CMD_GET_CRUISE:
        case T.BC_CMD_E.E_BC_CMD_SET_CRUISE:
        case T.BC_CMD_E.E_BC_CMD_GET_DEFAULT_CAMERA:
        case T.BC_CMD_E.E_BC_CMD_UPGRADE_PROGRESS:
        case T.BC_CMD_E.E_BC_CMD_WIFI_TEST:
        case T.BC_CMD_E.E_BC_CMD_FTP_TEST:
        case T.BC_CMD_E.E_BC_CMD_GET_SCAN_AP:
        case T.BC_CMD_E.E_BC_CMD_EXPORT_PROGRESS:
        case T.BC_CMD_E.E_BC_CMD_IMPORT_PROGRESS:
        case T.BC_CMD_E.E_BC_CMD_LOCAL_RECORD:
        case T.BC_CMD_E.E_BC_CMD_STOP_LOCAL_RECORD:
        case T.BC_CMD_E.E_BC_CMD_CONFIG_LIVE:
        case T.BC_CMD_E.E_BC_CMD_STOP_CONFIG_LIVE:
        case T.BC_CMD_E.E_BC_CMD_START_ALARM_REPORT:
        case T.BC_CMD_E.E_BC_CMD_STOP_ALARM_REPORT:
        case T.BC_CMD_E.E_BC_CMD_DOWNLOAD_CUT:
        case T.BC_CMD_E.E_BC_CMD_DOWNLOAD_CUT_STOP:
        case T.BC_CMD_E.E_BC_CMD_DOWNLOAD_PROGRESS:
        case T.BC_CMD_E.E_BC_CMD_DOWNLOAD_CUT_PROGRESS:
        case T.BC_CMD_E.E_BC_CMD_GET_CAMERA_CFG:
        case T.BC_CMD_E.E_BC_CMD_SET_CAMERA_CFG:
        case T.BC_CMD_E.E_BC_CMD_GET_LED_STATE:
        case T.BC_CMD_E.E_BC_CMD_SET_LED_STATE:
        case T.BC_CMD_E.E_BC_CMD_GET_PTOP_CFG:
        case T.BC_CMD_E.E_BC_CMD_SET_PTOP_CFG:
        case T.BC_CMD_E.E_BC_CMD_TALK_OPEN:
        case T.BC_CMD_E.E_BC_CMD_TALK_CLOSE:
        case T.BC_CMD_E.E_BC_CMD_GET_TALK_ABILITY:
        case T.BC_CMD_E.E_BC_CMD_TALK_FDX_STREAM:
        case T.BC_CMD_E.E_BC_CMD_SNAP:
        case T.BC_CMD_E.E_BC_CMD_GOTO_PRESET:
        case T.BC_CMD_E.E_BC_CMD_SET_USER_ALL_ABILITY:
        case T.BC_CMD_E.E_BC_CMD_GET_WIFI_SIGNAL:
        case T.BC_CMD_E.E_BC_CMD_GET_AUTO_UPDATE:
        case T.BC_CMD_E.E_BC_CMD_SET_AUTO_UPDATE:
        case T.BC_CMD_E.E_BC_CMD_GET_ONLINE_NEW_FIRMWARE:
        case T.BC_CMD_E.E_BC_CMD_RTMP_START:
        case T.BC_CMD_E.E_BC_CMD_RTMP_STOP:
        case T.BC_CMD_E.E_BC_CMD_GET_EMAIL_TASK:
        case T.BC_CMD_E.E_BC_CMD_SET_EMAIL_TASK:
        case T.BC_CMD_E.E_BC_CMD_GET_PUSH_TASK:
        case T.BC_CMD_E.E_BC_CMD_SET_PUSH_TASK:
        case T.BC_CMD_E.E_BC_CMD_GET_RF_CFG:
        case T.BC_CMD_E.E_BC_CMD_SET_RF_CFG:
        case T.BC_CMD_E.E_BC_CMD_GET_BATTERY_ELECTRICITY:
        case T.BC_CMD_E.E_BC_CMD_SET_RF_ALARM_STATUS:
        case T.BC_CMD_E.E_BC_CMD_GET_ONLINE_UPDATE_STATUS:
        case T.BC_CMD_E.E_BC_CMD_GET_AUTO_FOCUS:
        case T.BC_CMD_E.E_BC_CMD_SET_AUTO_FOCUS:
        case T.BC_CMD_E.E_BC_CMD_GET_CROP_CFG:
        case T.BC_CMD_E.E_BC_CMD_SET_CROP_CFG:
        case T.BC_CMD_E.E_BC_CMD_CROP_SNAP:
        case T.BC_CMD_E.E_BC_CMD_DEVICE_SLEEP:
        case T.BC_CMD_E.E_BC_CMD_GET_AUDIO_TASK:
        case T.BC_CMD_E.E_BC_CMD_SET_AUDIO_TASK:
        case T.BC_CMD_E.E_BC_CMD_BATTERY_HEARTBEAT_RSP:
        case T.BC_CMD_E.E_BC_CMD_GET_AP_MODE_INFO:
        case T.BC_CMD_E.E_BC_CMD_REPORT_DEVICE_EXCEPTION:
        case T.BC_CMD_E.E_BC_CMD_BASE_REPORT_ONLINE_DEVICE:
        case T.BC_CMD_E.E_BC_CMD_BASE_DELETE_ONLINE_DEVICE:
        case T.BC_CMD_E.E_BC_CMD_BASE_GET_RF_CFG:
        case T.BC_CMD_E.E_BC_CMD_BASE_SET_RF_CFG:
        case T.BC_CMD_E.E_BC_CMD_BASE_GET_WIFI_QRCODE:
        case T.BC_CMD_E.E_BC_CMD_BASE_RESPONSE_LIVE_TIME:
        case T.BC_CMD_E.E_BC_CMD_BASE_SET_RF_ALARM_STATUS:
        case T.BC_CMD_E.E_BC_CMD_REPORT_BATTERY_INFO_LIST:
        case T.BC_CMD_E.E_BC_CMD_GET_BATTERY_INFO:
        case T.BC_CMD_E.E_BC_CMD_SET_DEVICE_NAME:
        case T.BC_CMD_E.E_BC_CMD_SET_ISP_DAY_NIGHT_MODE:
        case T.BC_CMD_E.E_BC_CMD_BASE_SET_WIFI_QRCODE:
        case T.BC_CMD_E.E_BC_CMD_GET_3G_4G_INFO:
        case T.BC_CMD_E.E_BC_CMD_REPORT_3G_4G_INFO:
        case T.BC_CMD_E.E_BC_CMD_GET_SIM_MODULE_INFO:
        case T.BC_CMD_E.E_BC_CMD_SET_SIM_MODULE_INFO:
        case T.BC_CMD_E.E_BC_CMD_GET_BATTERY_ANALYSIS:
        case T.BC_CMD_E.E_BC_CMD_GET_CLOUD_INFO:
        case T.BC_CMD_E.E_BC_CMD_BIND_CLOUD:
        case T.BC_CMD_E.E_BC_CMD_GET_CLOUD_CFG:
        case T.BC_CMD_E.E_BC_CMD_SET_CLOUD_CFG:
        case T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_FILE_INFO:
        case T.BC_CMD_E.E_BC_CMD_IMPORT_RINGTONE:
        case T.BC_CMD_E.E_BC_CMD_IMPORT_RINGTONE_PROGRESS:
        case T.BC_CMD_E.E_BC_CMD_SAVE_RINGTONE:
        case T.BC_CMD_E.E_BC_CMD_MANUAL_RING_DOWN:
        case T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_CFG:
        case T.BC_CMD_E.E_BC_CMD_SET_RINGTONE_CFG:
        case T.BC_CMD_E.E_BC_CMD_MUTE_ALARM_AUDIO:
        case T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_ABILITY:
            {
                config_1.config.handleSDKCallback(handle, cmdData);
                break;
            }
        // download about
        case T.BC_CMD_E.E_BC_CMD_DOWNLOAD:
        case T.BC_CMD_E.E_BC_CMD_DOWNLOAD_STOP:
            {
                break;
            }
        default:
            const errStr = "------- no one handle this callback !!!!!!!!! {"
                + "\n        handle: " + handle
                + "\n        channel: " + cmdData.handleId
                + "\n        cmd: " + T.BC_CMD_E[cmdData.bcCmd]
                + "\n        cmd index: " + cmdData.cmdIdx
                + "\n}";
            console.log(errStr);
            break;
    }
    ;
});
// -----------------------------------------------------------------------------
//                          DEVICE
// -----------------------------------------------------------------------------
class DEVICE {
    constructor() {
    }
    static instance() {
        return DEVICE.singleton;
    }
    handleSDKCallback(handle, cmdData) {
        new Promise((resolve) => {
            const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
            switch (cmdData.bcCmd) {
                case T.BC_CMD_E.E_BC_CMD_CONNECTION_STATE_CHANGE: {
                    let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx);
                    if (_T.DEVICE_STATE_CHANGE_DESC.size == cmdData.dataLen) {
                        let buf = ref.reinterpret(cmdData.pRspData, cmdData.dataLen);
                        let des = ref.get(buf, 0, _T.DEVICE_STATE_CHANGE_DESC);
                        if (callback && callback.sdkCallback) {
                            callback.sdkCallback.stateCallback(handle, des.eStateFrom, des.eStateTo);
                        }
                    }
                    break;
                }
                case T.BC_CMD_E.E_BC_CMD_RECONNECT:
                case T.BC_CMD_E.E_BC_CMD_GET_ABILITY: {
                    let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx);
                    if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode) {
                        if (callback && callback.sdkCallback) {
                            callback.sdkCallback.abilityChangeCallback(handle);
                        }
                    }
                    break;
                }
                case T.BC_CMD_E.E_BC_CMD_ALARM_REPORT: {
                    let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx);
                    if (_T.BC_ALARM_STATUS_REPORT.size == cmdData.dataLen) {
                        let buf = ref.reinterpret(cmdData.pRspData, cmdData.dataLen);
                        let date = ref.get(buf, 0, _T.BC_ALARM_STATUS_REPORT);
                        if (callback && callback.sdkCallback) {
                            let param = _cast_1.derefCast(date, _T.BC_ALARM_STATUS_REPORT);
                            callback.sdkCallback.alarmReportCallback(handle, param);
                        }
                    }
                    break;
                }
                case T.BC_CMD_E.E_BC_CMD_CAMERA_STATE: {
                    let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx);
                    if (callback && callback.sdkCallback) {
                        callback.sdkCallback.cameraStateCallback(handle);
                    }
                    break;
                }
                default: {
                    _callback_1.PROMISE_CBS.handleCallback(handle, channel, cmdData.bcCmd, cmdData.cmdIdx, callback => {
                        if (T.BC_RSP_CODE_E.E_BC_RSP_OK == cmdData.bcRspCode) {
                            if (callback.sdkResolve) {
                                callback.sdkResolve(cmdData.bcRspCode);
                            }
                        }
                        else {
                            if (callback.sdkReject) {
                                callback.sdkReject({
                                    code: cmdData.bcRspCode,
                                    description: "device sdk callback ...",
                                    data: cmdData
                                });
                            }
                        }
                    });
                    break;
                }
            }
            resolve();
        });
    }
    add(loginDes, callback) {
        return new Promise((resolve, reject) => {
            let castParam = _cast_1.refCast(loginDes);
            let tloginDes = new _T.DEVICE_LOGIN_DESC(castParam);
            let callbackDes = new _T.DEVICE_CALLBACK_DESC({
                func: deviceCallback,
                userData: null
            });
            let perror = ref.alloc(ref.types.int, 0);
            let handle = native_1.native.BCSDK_AddDevice(tloginDes.ref(), callbackDes.ref(), perror);
            if (handle >= 0 && 0 == perror.deref()) {
                _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_CONNECTION_STATE_CHANGE, 0, { sdkCallback: callback });
                _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_GET_ABILITY, 0, { sdkCallback: callback });
                _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_RECONNECT, 0, { sdkCallback: callback });
                _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_ALARM_REPORT, 0, { sdkCallback: callback });
                _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_CAMERA_STATE, 0, { sdkCallback: callback });
                resolve(handle);
            }
            else {
                reject({ code: perror.deref() });
            }
        });
    }
    remove(handle) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_RemoveDevice(handle);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            _callback_1.PROMISE_CBS.clearCallbackForHandle(handle);
            _callback_1.COMMON_CBS.clearCallbackForHandle(handle);
            resolve();
        });
    }
    removeAll() {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_RemoveAllDevices();
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            _callback_1.PROMISE_CBS.clearAll();
            _callback_1.COMMON_CBS.clearAll();
            resolve();
        });
    }
    modify(handle, loginDes) {
        return new Promise((resolve, reject) => {
            let castParam = _cast_1.refCast(loginDes);
            let tloginDes = new _T.DEVICE_LOGIN_DESC(castParam);
            let callbackDes = new _T.DEVICE_CALLBACK_DESC({
                func: deviceCallback,
                userData: null
            });
            let perror = ref.alloc(ref.types.int, 0);
            let thandle = native_1.native.BCSDK_ModifyDevice(handle, tloginDes.ref(), callbackDes.ref(), perror);
            if (thandle >= 0 && 0 == perror.deref()) {
                if (handle != thandle) {
                    _callback_1.PROMISE_CBS.modifyCallbackHandle(handle, thandle);
                }
                resolve(thandle);
            }
            else {
                reject({ code: perror.deref() });
            }
        });
    }
    getDevicesCount() {
        return new Promise((resolve, reject) => {
            let count = native_1.native.BCSDK_GetDeviceCount();
            resolve(count);
        });
    }
    getDeviceAtIndex(index) {
        return new Promise((resolve, reject) => {
            let handle = native_1.native.BCSDK_GetDevice(index);
            if (handle < 0) {
                reject({ code: handle });
                return;
            }
            resolve(handle);
        });
    }
    open(handle) {
        return new Promise((resolve, reject) => {
            this.getDeviceState(handle)
                .then(state => {
                if (T.BCSDK_DEVICE_STATE_E.BCSDK_DEVICE_STATE_OPENSUCCESS == state) {
                    resolve(T.ERROR.E_NONE);
                    return;
                }
                let tcallback = {
                    sdkResolve: resolve,
                    sdkReject: reject
                };
                let ret = native_1.native.BCSDK_DeviceForceOpen(handle, true);
                if (T.ERROR.E_NONE == ret) {
                    _callback_1.PROMISE_CBS.addCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_LOGIN, 0, tcallback);
                }
                else {
                    reject({ code: ret });
                }
            })
                .catch(reason => {
                reject(reason);
            });
        });
    }
    close(handle) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_DeviceForceClose(handle, true);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    setNeedAutoOpen(handle, need) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetDeviceNeedAutoOpen(handle, need);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    setDeviceMaxReconnectCount(handle, count) {
        return new Promise((resolve, reject) => {
            let ret = native_1.native.BCSDK_SetDeviceMaxReconnectCount(handle, count);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            resolve();
        });
    }
    getLoginDescription(handle) {
        return new Promise((resolve, reject) => {
            let des = new _T.DEVICE_LOGIN_DESC();
            let ret = native_1.native.BCSDK_GetDeviceLoginMessage(handle, des.ref());
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            let param = _cast_1.derefCast(des, _T.DEVICE_LOGIN_DESC);
            resolve(param);
        });
    }
    getChannelCount(handle) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, 0);
            let ret = native_1.native.BCSDK_GetDeviceChannelCount(handle, buf);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
    getDeviceState(handle) {
        return new Promise((resolve, reject) => {
            let buf = ref.alloc(ref.types.int, T.BCSDK_DEVICE_STATE_E.BCSDK_DEVICE_STATE_NOTREADY);
            let ret = native_1.native.BCSDK_GetDeviceState(handle, buf);
            if (ret != T.ERROR.E_NONE) {
                reject({ code: ret });
                return;
            }
            let value = ref.deref(buf);
            resolve(value);
        });
    }
}
DEVICE.singleton = new DEVICE();
exports.device = DEVICE.instance();
//# sourceMappingURL=device.js.map