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
    static getCmdIndex() {
        return (++CONFIG.CMDIDX) % 32786;
    }
    static handleSDKGetCallback(type, handle, cmdData) {
        const bcCmd = cmdData.bcCmd;
        const cmdIdx = cmdData.cmdIdx;
        const bcRspCode = cmdData.bcRspCode;
        const pRspData = cmdData.pRspData;
        const dataLen = cmdData.dataLen;
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        _callback_1.PROMISE_CBS.handleCallback(handle, channel, bcCmd, cmdIdx, callback => {
            if (T.BC_RSP_CODE_E.E_BC_RSP_OK == bcRspCode
                && type.size === dataLen) {
                let buf = ref.reinterpret(pRspData, dataLen);
                let data = ref.get(buf, 0, type);
                let param = _cast_1.derefCast(data, type);
                setImmediate(() => {
                    if (callback.sdkResolve) {
                        callback.sdkResolve(param);
                    }
                });
            }
            else {
                setImmediate(() => {
                    if (callback.sdkReject) {
                        callback.sdkReject({ code: bcRspCode, description: T.BC_CMD_E[bcCmd] });
                    }
                });
            }
        });
    }
    handleSDKCallback(handle, cmdData) {
        const bcCmd = cmdData.bcCmd;
        const cmdIdx = cmdData.cmdIdx;
        const bcRspCode = cmdData.bcRspCode;
        const pRspData = cmdData.pRspData;
        const dataLen = cmdData.dataLen;
        const channel = (cmdData.handleId & 0x000000ff) % T.DEFINDE.BC_MAX_CHANNEL;
        const type = CONFIG.cmdTypes.get(bcCmd);
        if (type) {
            CONFIG.handleSDKGetCallback(type, handle, cmdData);
            return;
        }
        switch (bcCmd) {
            case T.BC_CMD_E.E_BC_CMD_UPGRADE_PROGRESS: {
                let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, bcCmd, cmdIdx);
                if (!callback || !callback.sdkCallback) {
                    break;
                }
                if (_T.BC_UPGRADE_FILE_INFO.size !== dataLen) {
                    break;
                }
                let buf = ref.reinterpret(pRspData, dataLen);
                let data = ref.get(buf, 0, _T.BC_UPGRADE_FILE_INFO);
                let info = _cast_1.derefCast(data, _T.BC_UPGRADE_FILE_INFO);
                setImmediate(() => {
                    if (info.uCurSize > 0 && info.uCurSize < info.uFileSize) {
                        callback.sdkCallback(bcRspCode, info.uCurSize / info.uFileSize);
                    }
                    else if (info.uCurSize >= info.uFileSize) {
                        callback.sdkCallback(bcRspCode, 1.0);
                    }
                });
                break;
            }
            case T.BC_CMD_E.E_BC_CMD_EXPORT_PROGRESS:
            case T.BC_CMD_E.E_BC_CMD_IMPORT_PROGRESS: {
                let callback = _callback_1.COMMON_CBS.getCallback(handle, channel, bcCmd, cmdIdx);
                if (!callback || !callback.sdkCallback) {
                    break;
                }
                if (_T.BC_CONFIG_FILE_INFO.size !== dataLen) {
                    break;
                }
                let buf = ref.reinterpret(pRspData, dataLen);
                let data = ref.get(buf, 0, _T.BC_CONFIG_FILE_INFO);
                let info = _cast_1.derefCast(data, _T.BC_CONFIG_FILE_INFO);
                setImmediate(() => {
                    if (info.uCurSize > 0 && info.uCurSize < info.uFileSize) {
                        callback.sdkCallback(bcRspCode, info.uCurSize / info.uFileSize);
                    }
                    else if (info.uCurSize >= info.uFileSize) {
                        callback.sdkCallback(bcRspCode, 1.0);
                    }
                });
                break;
            }
            /* set cmds */
            default: {
                if (T.BC_CMD_E.E_BC_CMD_SET_PRESET === bcCmd) {
                    setImmediate(() => {
                        _callback_1.PROMISE_CBS.handleCallback(handle, channel, bcCmd, cmdIdx, callback => {
                            if (T.BC_RSP_CODE_E.E_BC_RSP_OK == bcRspCode) {
                                console.log('callback resolve ... ');
                                if (callback.sdkResolve)
                                    callback.sdkResolve();
                            }
                            else {
                                console.log('callback reject ... ');
                                if (callback.sdkReject) {
                                    callback.sdkReject({
                                        code: bcRspCode,
                                        description: 'remote config faild ...'
                                    });
                                }
                            }
                        });
                    });
                    break;
                }
                setImmediate(() => {
                    _callback_1.PROMISE_CBS.handleCallback(handle, channel, bcCmd, cmdIdx, callback => {
                        if (T.BC_RSP_CODE_E.E_BC_RSP_OK == bcRspCode) {
                            if (callback.sdkResolve)
                                callback.sdkResolve();
                        }
                        else {
                            if (callback.sdkReject) {
                                callback.sdkReject({
                                    code: bcRspCode,
                                    description: 'remote config faild ...'
                                });
                            }
                        }
                    });
                });
                break;
            }
        }
    }
    deviceCmd(handle, cmd, func, timeout = 10, param, type, cmdIdx) {
        return new Promise((resolve, reject) => {
            let ret;
            if (undefined !== param && undefined !== type) {
                let castParam = _cast_1.refCast(param);
                let data = new type(castParam);
                undefined === cmdIdx ?
                    ret = func(handle, data.ref()) :
                    ret = func(handle, data.ref(), cmdIdx);
            }
            else if (undefined !== param) {
                undefined === cmdIdx ?
                    ret = func(handle, param) :
                    ret = func(handle, param, cmdIdx);
            }
            else {
                ret = func(handle);
            }
            if (ret != T.ERROR.E_NONE && ret != T.ERROR.E_BUSY) {
                reject({ code: ret, description: func.name });
                return;
            }
            let cb = {
                sdkResolve: resolve,
                sdkReject: reject,
                timeout: timeout
            };
            _callback_1.PROMISE_CBS.addCallback(handle, 0, cmd, (cmdIdx ? cmdIdx : 0), cb);
        });
    }
    channelCmd(handle, channel, cmd, func, timeout = 10, param, type, cmdIdx) {
        return new Promise((resolve, reject) => {
            let ret;
            if (undefined !== param && undefined !== type) {
                let castParam = _cast_1.refCast(param);
                let data = new type(castParam);
                undefined === cmdIdx ?
                    ret = func(handle, channel, data.ref()) :
                    ret = func(handle, channel, data.ref(), cmdIdx);
            }
            else if (undefined !== param) {
                undefined === cmdIdx ?
                    ret = func(handle, channel, param) :
                    ret = func(handle, channel, param, cmdIdx);
            }
            else {
                ret = func(handle, channel);
            }
            if (ret != T.ERROR.E_NONE && ret != T.ERROR.E_BUSY) {
                reject({ code: ret, description: func.name });
                return;
            }
            let cb = {
                sdkResolve: resolve,
                sdkReject: reject,
                timeout: timeout
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
                reject({ code: ret, description: 'config get state' });
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
                reject({ code: ret, description: 'config get state 2' });
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
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_SYS, native_1.native.BCSDK_RemoteSetSysGeneralCfg, 30, param, _T.BC_SYS_GENERAL_CFG, CONFIG.getCmdIndex());
    }
    setDeviceName(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_DEVICE_NAME, native_1.native.BCSDK_RemoteSetDeviceName, 30, param, _T.BC_DEVICE_NAME_CFG);
    }
    /* autoReboot
     *
     * callback with E_BC_CMD_GET_AUTOREBOOT_CFG, E_BC_CMD_SET_AUTOREBOOT_CFG
     */
    getAutoRebootCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_AUTOREBOOT_CFG, native_1.native.BCSDK_RemoteGetAutoRebootCfg);
    }
    setAutoRebootCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_AUTOREBOOT_CFG, native_1.native.BCSDK_RemoteSetAutoRebootCfg, 10, param, _T.BC_AUTOREBOOT_CFG);
    }
    /* factory default
     *
     * callback with E_BC_CMD_RESTORE
     */
    factoryDefault(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_RESTORE, native_1.native.BCSDK_RemoteFactoryDefault, 10, param, _T.BC_RESTORE_CFG);
    }
    /* record cfg
     *
     * callback with E_BC_CMD_GET_ADVRECORD, E_BC_CMD_SET_ADVRECORD
     */
    getRecordGenCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_ADVRECORD, native_1.native.BCSDK_RemoteGetRecordGenCfg);
    }
    setRecordGenCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_ADVRECORD, native_1.native.BCSDK_RemoteSetRecordGenCfg, 10, param, _T.BC_RECORD_GENERAL_CFG, CONFIG.getCmdIndex());
    }
    /* email
     *
     * callback with E_BC_CMD_GET_EMAIL, E_BC_CMD_SET_EMAIL, E_BC_CMD_EMAILTEST
     */
    getMailCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_EMAIL, native_1.native.BCSDK_RemoteGetMailCfg);
    }
    setMailCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_EMAIL, native_1.native.BCSDK_RemoteSetMailCfg, 10, param, _T.BC_EMAIL_CFG);
    }
    emailTest(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_EMAILTEST, native_1.native.BCSDK_RemoteEmailTest, 40, param, _T.BC_EMAIL_CFG);
    }
    /* output
     *
     * callback with E_BC_CMD_GET_OUTPUT, E_BC_CMD_SET_OUTPUT
     */
    getOutputCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_OUTPUT, native_1.native.BCSDK_RemoteGetOutputCfg);
    }
    setOutputCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_OUTPUT, native_1.native.BCSDK_RemoteSetOutputCfg, 10, param, _T.BC_OUTPUT_CFG);
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
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_INIT_HDD, native_1.native.BCSDK_RemoteInitHdd, 60, param, _T.BC_HDD_INIT_CFG);
    }
    initSDCard(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_INIT_HDD, native_1.native.BCSDK_RemoteInitHdd, 20, param, _T.BC_HDD_INIT_CFG);
    }
    /* HDD Full
     *
     * callback with E_BC_CMD_GET_HDDFULL_EXPCFG, E_BC_CMD_SET_HDDFULL_EXPCFG
     */
    getHDDFull(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_HDDFULL_EXPCFG, native_1.native.BCSDK_RemoteGetHDDFull);
    }
    setHDDFull(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_HDDFULL_EXPCFG, native_1.native.BCSDK_RemoteSetHDDFull, 10, param, _T.BC_EXCEPTION_CFG);
    }
    /* HDD Error
     *
     * callback with E_BC_CMD_GET_HDDERR_EXPCFG, E_BC_CMD_SET_HDDERR_EXPCFG
     */
    getHDDError(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_HDDERR_EXPCFG, native_1.native.BCSDK_RemoteGetHDDError);
    }
    setHDDError(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_HDDERR_EXPCFG, native_1.native.BCSDK_RemoteSetHDDError, 10, param, _T.BC_EXCEPTION_CFG);
    }
    /* Network Disconnect
     *
     * callback with E_BC_CMD_GET_NETDISCONNECT_EXPCFG, E_BC_CMD_SET_NETDISCONNECT_EXPCFG
     */
    getNetDisconnect(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_NETDISCONNECT_EXPCFG, native_1.native.BCSDK_RemoteGetNetDisconnect);
    }
    setNetDisconnect(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_NETDISCONNECT_EXPCFG, native_1.native.BCSDK_RemoteSetNetDisconnect, 10, param, _T.BC_EXCEPTION_CFG);
    }
    /* IpConflict
     *
     * callback with E_BC_CMD_GET_IPCONFLICT_EXPCFG, E_BC_CMD_SET_IPCONFLICT_EXPCFG
     */
    getIpConflict(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_IPCONFLICT_EXPCFG, native_1.native.BCSDK_RemoteGetIpConflict);
    }
    setIpConflict(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_IPCONFLICT_EXPCFG, native_1.native.BCSDK_RemoteSetIpConflict, 10, param, _T.BC_EXCEPTION_CFG);
    }
    /* network local
     *
     * callback with E_BC_CMD_GET_LOCAL, E_BC_CMD_SET_LOCAL
     */
    getNetworkCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_LOCAL, native_1.native.BCSDK_RemoteGetNetworkCfg);
    }
    setNetworkCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_LOCAL, native_1.native.BCSDK_RemoteSetNetworkCfg, 10, param, _T.BC_LOCAL_CFG);
    }
    /* normalPort
     *
     * callback with E_BC_CMD_GET_NORMAL_PORT, E_BC_CMD_SET_NORMAL_PORT
     */
    getNetNormalPort(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_NORMAL_PORT, native_1.native.BCSDK_RemoteGetNetNormalPort);
    }
    setNetNormalPort(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_NORMAL_PORT, native_1.native.BCSDK_RemoteSetNetNormalPort, 10, param, _T.BC_NET_NORMAL_PORT);
    }
    /* advanced Port
     *
     * callback with E_BC_CMD_GET_ADVANCED_PORTS, E_BC_CMD_SET_ADVANCED_PORTS
     */
    getNetAdvancedPort(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_ADVANCED_PORTS, native_1.native.BCSDK_RemoteGetNetAdvancedPort);
    }
    setNetAdvancedPort(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_ADVANCED_PORTS, native_1.native.BCSDK_RemoteSetNetAdvancedPort, 10, param, _T.BC_NET_ADVANCED_PORT);
    }
    /* upnpCfg
     *
     * callback with E_BC_CMD_GET_UPNPSTATE, E_BC_CMD_SET_UPNPSTATE
     */
    getUpnpCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_UPNPSTATE, native_1.native.BCSDK_RemoteGetUpnpCfg);
    }
    setUpnpCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_UPNPSTATE, native_1.native.BCSDK_RemoteSetUpnpCfg, 10, param, _T.BC_UPNP_CFG);
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
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_PTOP_CFG, native_1.native.BCSDK_RemoteSetP2PCfg, 10, param, _T.BC_P2P_CFG);
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
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_ALARMINCFG, native_1.native.BCSDK_RemoteSetAlarmIn, 10, param, _T.BC_ALARM_IN_CFG);
    }
    /* Alarm Out
     *
     * callback with E_BC_CMD_GET_ALARMOUTCFG, E_BC_CMD_SET_ALARMOUTCFG
     */
    getAlarmOut(handle, outputId) {
        return this.channelCmd(handle, outputId, T.BC_CMD_E.E_BC_CMD_GET_ALARMOUTCFG, native_1.native.BCSDK_RemoteGetAlarmOut);
    }
    setAlarmOut(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_ALARMOUTCFG, native_1.native.BCSDK_RemoteSetAlarmOut, 10, param, _T.BC_ALARM_OUT_CFG);
    }
    /* RF Alarm Cfg
     *
     * callback with E_BC_CMD_GET_RF_CFG, E_BC_CMD_SET_RF_CFG, E_BC_CMD_SET_RF_ALARM_STATUS
     */
    getRfAlarmCfg(handle, rfId) {
        return this.channelCmd(handle, rfId, T.BC_CMD_E.E_BC_CMD_GET_RF_CFG, native_1.native.BCSDK_RemoteGetRfAlarmCfg);
    }
    setRfAlarmCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_RF_CFG, native_1.native.BCSDK_RemoteSetRfAlarmCfg, 10, param, _T.BC_RF_ALARM_CFG, CONFIG.getCmdIndex());
    }
    setRfAlarmStatus(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_RF_ALARM_STATUS, native_1.native.BCSDK_RemoteSetRfAlarmStatus, 10, param, _T.BC_RF_ALARM_STATUS);
    }
    /* DST
     *
     * callback with E_BC_CMD_GET_DST, E_BC_CMD_SET_DST
     */
    getDst(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_DST, native_1.native.BCSDK_RemoteGetDst);
    }
    setDst(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_DST, native_1.native.BCSDK_RemoteSetDst, 20, param, _T.BC_DST_CFG, CONFIG.getCmdIndex());
    }
    /* DDNS
     *
     * callback with E_BC_CMD_GET_DDNSCFG, E_BC_CMD_SET_DDNSCFG
     */
    getDdns(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_DDNSCFG, native_1.native.BCSDK_RemoteGetDdns);
    }
    setDdns(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_DDNSCFG, native_1.native.BCSDK_RemoteSetDdns, 10, param, _T.BC_DDNS_CFG);
    }
    /* NTP
     *
     * callback with E_BC_CMD_GET_NTPCFG, E_BC_CMD_SET_NTPCFG
     */
    getNtp(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_NTPCFG, native_1.native.BCSDK_RemoteGetNtp);
    }
    setNtp(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_NTPCFG, native_1.native.BCSDK_RemoteSetNtp, 35, param, _T.BC_NTP_CFG);
    }
    /* PPPOE
     *
     * callback with E_BC_CMD_GET_PPPOECFG, E_BC_CMD_SET_PPPOECFG
     */
    getPppoe(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_PPPOECFG, native_1.native.BCSDK_RemoteGetPppoe);
    }
    setPppoe(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_PPPOECFG, native_1.native.BCSDK_RemoteSetPppoe, 10, param, _T.BC_PPPOE_CFG);
    }
    /* Online Update
     *
     * callback with E_BC_CMD_ONLINE_UPDATE
     */
    onlineUpate(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_ONLINE_UPDATE, native_1.native.BCSDK_RemoteOnlineUpate, 35, param, _T.BC_ONLINE_UPDATE);
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
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_AUTO_UPDATE, native_1.native.BCSDK_RemoteSetAutoUpdateState, 10, param, _T.BC_AUTO_UPDATE);
    }
    /* Online New Firmware
     *
     * callback with E_BC_CMD_GET_ONLINE_NEW_FIRMWARE
     */
    getOnlineNewFwInfo(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_ONLINE_NEW_FIRMWARE, native_1.native.BCSDK_RemoteGetOnlineNewFwInfo, 25);
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
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_WIFI_INFO, native_1.native.BCSDK_RemoteGetWifiCfg, 25);
    }
    setWifiCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_WIFI_INFO, native_1.native.BCSDK_RemoteSetWifiCfg, 35, param, _T.BC_WIFI_CFG);
    }
    WifiTest(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_WIFI_TEST, native_1.native.BCSDK_RemoteWifiTest, 35, param, _T.BC_WIFI_CFG);
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
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_SIM_MODULE_INFO, native_1.native.BCSDK_RemoteSetSimModuleInfo, 10, param, _T.BC_SIM_MODULE_INFO);
    }
    /* Cloud
     *
     * callback with E_BC_CMD_GET_CLOUD_INFO, E_BC_CMD_BIND_CLOUD, E_BC_CMD_GET_CLOUD_CFG, E_BC_CMD_SET_CLOUD_CFG
     */
    getCloudInfo(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_CLOUD_INFO, native_1.native.BCSDK_RemoteGetCloudInfo);
    }
    bindCloud(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_BIND_CLOUD, native_1.native.BCSDK_RemoteBindCloud, 35, param, _T.BC_BIND_CLOUD);
    }
    getCloudCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_CLOUD_CFG, native_1.native.BCSDK_RemoteGetCloudCfg);
    }
    setCloudCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_CLOUD_CFG, native_1.native.BCSDK_RemoteSetCloudCfg, 10, param, _T.BC_CLOUD_CFG);
    }
    getSignatureLoginCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_SIGNATURE_LOGIN_CFG, native_1.native.BCSDK_RemoteGetSignatureLoginCfg);
    }
    setSignatureLoginCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_SIGNATURE_LOGIN_CFG, native_1.native.BCSDK_RemoteSetSignatureLoginCfg, 30, param, _T.BC_SIGNATURE_LOGIN_CFG);
    }
    /* sync utc time
     *
     * callback with    E_BC_CMD_SYNC_UTC_TIME
     */
    syncUtcTime(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SYNC_UTC_TIME, native_1.native.BCSDK_RemoteSyncUtcTime, 10, param, _T.BC_UTC_TIME);
    }
    /* Scan ap
     *
     * callback with E_BC_CMD_GET_SCAN_AP
     */
    getScanAp(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_SCAN_AP, native_1.native.BCSDK_RemoteGetScanAp, 25);
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
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_RECFILEDATE, native_1.native.BCSDK_RemoteGetRecFileDaysByChannel, 10, param, _T.BC_RECORD_FILE_DAYS_BY_CHN);
    }
    /* user config
     *
     * callback with E_BC_CMD_GET_USERCFG, E_BC_CMD_SET_USERCFG
     */
    getUserCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_USERCFG, native_1.native.BCSDK_RemoteGetUserCfg);
    }
    setUserCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_USERCFG, native_1.native.BCSDK_RemoteSetUserCfg, 10, param, _T.BC_USER_CFG);
    }
    /* set user ability
     *
     * callback with E_BC_CMD_SET_USER_ALL_ABILITY
     */
    initNewUserAiblity(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_USER_ALL_ABILITY, native_1.native.BCSDK_RemoteInitNewUserAiblity, 10, param, _T.BC_USER_FOR_ABILITY);
    }
    /* online user config
     *
     * callback with E_BC_CMD_GET_USER_ONLINE, E_BC_CMD_SET_USER_ONLINE
     */
    getOnlineUserCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_USER_ONLINE, native_1.native.BCSDK_RemoteGetOnlineUserCfg);
    }
    setOnlineUserCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_USER_ONLINE, native_1.native.BCSDK_RemoteSetOnlineUserCfg, 10, param, _T.BC_USER_ONLINE_CFG);
    }
    /* force user password when first login
     *
     * callback with E_BC_CMD_FORCE_PASSWORD
     */
    forceUserPassword(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_FORCE_PASSWORD, native_1.native.BCSDK_RemoteForceUserPassword, 10, param, _T.BC_FORCE_PWD);
    }
    /* pwd state
     *
     * callback with E_BC_CMD_GET_BOOTPWD_STATE, E_BC_CMD_SET_BOOTPWD_STATE
     */
    getBootPwdState(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_BOOTPWD_STATE, native_1.native.BCSDK_RemoteGetBootPwdState);
    }
    setBootPwdState(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_BOOTPWD_STATE, native_1.native.BCSDK_RemoteSetBootPwdState, 10, param, _T.BC_BOOT_PWD_STATE);
    }
    /* upgrade firmware
     *
     * callback with E_BC_CMD_UPGRADE, E_BC_CMD_UPGRADE_PROGRESS
     */
    upgradeFirmware(handle, param, callback) {
        return new Promise((resolve, reject) => {
            let castParam = _cast_1.refCast(param);
            let tFileInfo = new _T.BC_UPGRADE_FILE_INFO(castParam);
            let ret = native_1.native.BCSDK_RemoteUpgradeFirmware(handle, tFileInfo.ref());
            if (ret >= 0) {
                _callback_1.PROMISE_CBS.addCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_UPGRADE, 0, { sdkResolve: resolve, sdkReject: reject, timeout: 1800 });
                _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_UPGRADE_PROGRESS, 0, { sdkCallback: callback });
            }
            else {
                reject({ code: ret });
            }
        });
    }
    /* Ftp Cfg
     *
     * callback with E_BC_CMD_GET_FTPCFG, E_BC_CMD_SET_FTPCFG, E_BC_CMD_FTP_TEST
     */
    getFtpCfg(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_FTPCFG, native_1.native.BCSDK_RemoteGetFtpCfg);
    }
    setFtpCfg(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_FTPCFG, native_1.native.BCSDK_RemoteSetFtpCfg, 10, param, _T.BC_FTP_CFG);
    }
    setFtpTest(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_FTP_TEST, native_1.native.BCSDK_RemoteSetFtpTest, 35, param, _T.BC_FTP_CFG);
    }
    /* I Frame Support
     *
     * callback with E_BC_CMD_IFRAME_PREVIEW, E_BC_CMD_IFRAME_REPLAY
     */
    setIFramePreview(handle, iFrame) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_IFRAME_PREVIEW, native_1.native.BCSDK_SetDeviceIFramePreview, 10, iFrame);
    }
    setIFrameReplay(handle, iFrame) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_IFRAME_REPLAY, native_1.native.BCSDK_SetDeviceIFrameReplay, 10, iFrame);
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
    exportConfig(handle, param, callback) {
        return new Promise((resolve, reject) => {
            let castParam = _cast_1.refCast(param);
            let tFileInfo = new _T.BC_CONFIG_FILE_INFO(castParam);
            let ret = native_1.native.BCSDK_RemoteExportConfig(handle, tFileInfo.ref());
            if (ret >= 0) {
                _callback_1.PROMISE_CBS.addCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_EXPORT, 0, { sdkResolve: resolve, sdkReject: reject, timeout: 60 });
                _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_EXPORT_PROGRESS, 0, { sdkCallback: callback });
            }
            else {
                reject({ code: ret });
            }
        });
    }
    importConfig(handle, param, callback) {
        return new Promise((resolve, reject) => {
            let castParam = _cast_1.refCast(param);
            let tFileInfo = new _T.BC_CONFIG_FILE_INFO(castParam);
            let ret = native_1.native.BCSDK_RemoteImportConfig(handle, tFileInfo.ref());
            if (ret >= 0) {
                _callback_1.PROMISE_CBS.addCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_IMPORT, 0, { sdkResolve: resolve, sdkReject: reject, timeout: 60 });
                _callback_1.COMMON_CBS.setCallback(handle, 0, T.BC_CMD_E.E_BC_CMD_IMPORT_PROGRESS, 0, { sdkCallback: callback });
            }
            else {
                reject({ code: ret });
            }
        });
    }
    /* get log file
     *
     * callback with E_BC_CMD_GETLOG
     */
    getLogFile(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GETLOG, native_1.native.BCSDK_RemoteGetLogFile, 35, param, _T.BC_CONFIG_FILE_INFO);
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
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_PUSH_ADD, native_1.native.BCSDK_RemotePushOpen, 12, param, _T.BC_PUSH_INFO);
    }
    /* rtmp operation
     *
     * callback with E_BC_CMD_RTMP_START, E_BC_CMD_RTMP_STOP
     */
    rtmpStart(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_RTMP_START, native_1.native.BCSDK_RemoteRtmpStart, 12, param, _T.BC_RTMP_OPT);
    }
    rtmpStop(handle, param) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_RTMP_STOP, native_1.native.BCSDK_RemoteRtmpStart, 12, param, _T.BC_RTMP_OPT);
    }
    /* covers get
     *
     * callback with E_BC_CMD_COVER_PREVIEW
     */
    //BCSDK_RemoteGetCovers(H_BC_DEVICE hDevice, BC_GET_FILE_COVERS_CFG *cfg);
    /* files Delete
     *
     * callback with E_BC_CMD_REC_FILE_DEL
     */
    deleteRecFiles(handle, files) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_REC_FILE_DEL, native_1.native.BCSDK_DeleteRecFiles, 60, files, _T.BC_DEL_REC_FILES);
    }
    /* record enable
     *
     * callback with E_BC_CMD_GET_RECORD_ENABLE, E_BC_CMD_SET_RECORD_ENABLE
     */
    getRecordEnable(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_RECORD_ENABLE, native_1.native.BCSDK_RemoteGetRecordEnable);
    }
    setRecordEnable(handle, enable) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_RECORD_ENABLE, native_1.native.BCSDK_RemoteSetRecordEnable, 12, enable, _T.BC_ALARM_OUT_ENABLE_CFG);
    }
    /* Ftp enable
     *
     * callback with E_BC_CMD_GET_FTP_ENABLE, E_BC_CMD_SET_FTP_ENABLE
     */
    getFtpEnable(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_FTP_ENABLE, native_1.native.BCSDK_RemoteGetFtpEnable);
    }
    setFtpEnable(handle, enable) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_FTP_ENABLE, native_1.native.BCSDK_RemoteSetFtpEnable, 12, enable, _T.BC_ALARM_OUT_ENABLE_CFG);
    }
    /* Email enable
     *
     * callback with E_BC_CMD_GET_EMAIL_ENABLE, E_BC_CMD_SET_EMAIL_ENABLE
     */
    getEmailEnable(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_EMAIL_ENABLE, native_1.native.BCSDK_RemoteGetEmailEnable);
    }
    setEmailEnable(handle, enable) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_EMAIL_ENABLE, native_1.native.BCSDK_RemoteSetEmailEnable, 12, enable, _T.BC_ALARM_OUT_ENABLE_CFG);
    }
    /* push enable
     *
     * callback with E_BC_CMD_GET_PUSH_ENABLE, E_BC_CMD_SET_PUSH_ENABLE
     */
    getPushEnable(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_PUSH_ENABLE, native_1.native.BCSDK_RemoteGetPushEnable);
    }
    setPushEnable(handle, enable) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_PUSH_ENABLE, native_1.native.BCSDK_RemoteSetPushEnable, 12, enable, _T.BC_ALARM_OUT_ENABLE_CFG);
    }
    /* buzzer enable
     *
     * callback with E_BC_CMD_GET_BUZZER_ENABLE, E_BC_CMD_SET_BUZZER_ENABLE
     */
    getBuzzerEnable(handle) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_GET_BUZZER_ENABLE, native_1.native.BCSDK_RemoteGetBuzzerEnable);
    }
    setBuzzerEnable(handle, enable) {
        return this.deviceCmd(handle, T.BC_CMD_E.E_BC_CMD_SET_BUZZER_ENABLE, native_1.native.BCSDK_RemoteSetBuzzerEnable, 12, enable, _T.BC_ALARM_OUT_ENABLE_CFG);
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
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_COMPRESS, native_1.native.BCSDK_RemoteSetEncCfg, 10, param, _T.BC_CHN_ENC_INFO);
    }
    /* osd
     *
     * callback with E_BC_CMD_GET_OSD, E_BC_CMD_SET_OSD
     */
    getOsdCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_OSD, native_1.native.BCSDK_RemoteGetOsdCfg);
    }
    setOsdCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_OSD, native_1.native.BCSDK_RemoteSetOsdCfg, 10, param, _T.BC_OSD_CFG, CONFIG.getCmdIndex());
    }
    /* cameraCfg
     *
     * callback with E_BC_CMD_GET_CAMERA_CFG, E_BC_CMD_SET_CAMERA_CFG
     */
    getCameraCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_CAMERA_CFG, native_1.native.BCSDK_RemoteGetCameraCfg);
    }
    setCameraCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_CAMERA_CFG, native_1.native.BCSDK_RemoteSetCameraCfg, 10, param, _T.BC_CAMERA_CFG);
    }
    /* Shelter
     *
     * callback with E_BC_CMD_GET_COVER, E_BC_CMD_SET_COVER
     */
    getShelter(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_COVER, native_1.native.BCSDK_RemoteGetShelter);
    }
    setShelter(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_COVER, native_1.native.BCSDK_RemoteSetShelter, 10, param, _T.BC_COVER_CFG);
    }
    /* record schedule
     *
     * callback with E_BC_CMD_GET_RECORDSCHED, E_BC_CMD_SET_RECORDSCHED
     */
    getRecordSchedule(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_RECORDSCHED, native_1.native.BCSDK_RemoteGetRecordSchedule);
    }
    setRecordSchedule(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_RECORDSCHED, native_1.native.BCSDK_RemoteSetRecordSchedule, 10, param, _T.BC_RECORD_SCHEDULE_CFG);
    }
    /* PTZ Config
     *
     * callback with E_BC_CMD_GET_PTZCFG, E_BC_CMD_SET_PTZCFG
     */
    getPtzCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_PTZCFG, native_1.native.BCSDK_RemoteGetPtzCfg);
    }
    setPtzCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_PTZCFG, native_1.native.BCSDK_RemoteSetPtzCfg, 10, param, _T.BC_PTZ_DECODER);
    }
    /* Motion Config
     *
     * callback with E_BC_CMD_GET_MOTION, E_BC_CMD_SET_MOTION
     */
    getMotionCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_MOTION, native_1.native.BCSDK_RemoteGetMotionCfg);
    }
    setMotionCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_MOTION, native_1.native.BCSDK_RemoteSetMotionCfg, 10, param, _T.BC_MOTION_CFG, CONFIG.getCmdIndex());
    }
    /* AI Config
     *
     * callback with E_BC_CMD_GET_AI_CFG, E_BC_CMD_SET_AI_CFG
     */
    getAiCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_AI_CFG, native_1.native.BCSDK_RemoteGetAiCfg);
    }
    setAiCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_AI_CFG, native_1.native.BCSDK_RemoteSetAiCfg, 10, param, _T.BC_AI_CFG, CONFIG.getCmdIndex());
    }
    /* Video Loss
     *
     * callback with E_BC_CMD_GET_VILOST, E_BC_CMD_SET_VILOST
     */
    getVideoLoss(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_VILOST, native_1.native.BCSDK_RemoteGetVideoLoss);
    }
    setVideoLoss(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_VILOST, native_1.native.BCSDK_RemoteSetVideoLoss, 10, param, _T.BC_VILOST_CFG);
    }
    /* ptz preset
     *
     * callback with E_BC_CMD_GET_PRESET, E_BC_CMD_SET_PRESET, E_BC_CMD_GOTO_PRESET
     */
    getPresets(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_PRESET, native_1.native.BCSDK_RemoteGetPresets);
    }
    setPresets(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_PRESET, native_1.native.BCSDK_RemoteSetPresets, 10, param, _T.BC_PTZ_PRESETS, CONFIG.getCmdIndex());
    }
    presetInvoke(handle, channel, preset) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GOTO_PRESET, native_1.native.BCSDK_RemotePresetInvoke, 10, preset);
    }
    /* ptz guard
     *
     * callback with E_BC_CMD_GET_GUARD, E_BC_CMD_SET_GUARD
     */
    getGuard(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_GUARD, native_1.native.BCSDK_RemoteGetGuard);
    }
    setGuard(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_GUARD, native_1.native.BCSDK_RemoteSetGuard, 10, param, _T.BC_GUARD_INFO, CONFIG.getCmdIndex());
    }
    /* ptz cruise
     *
     * callback with E_BC_CMD_GET_CRUISE, E_BC_CMD_SET_CRUISE, E_BC_CMD_PTZ_CONTROL
     */
    getCruises(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_CRUISE, native_1.native.BCSDK_RemoteGetCruises);
    }
    setCruise(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_CRUISE, native_1.native.BCSDK_RemoteSetCruise, 10, param, _T.BC_PTZ_CRUISES);
    }
    cruiseInvoke(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_PTZ_CONTROL, native_1.native.BCSDK_RemoteCruiseInvoke, 10, 0);
    }
    cruiseStop(handle, channel) {
        // TODO: same cmd with cruise Invoke
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_PTZ_CONTROL, native_1.native.BCSDK_RemoteCruiseStop, 10, 0);
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
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_CAMERA, native_1.native.BCSDK_RemoteSetIspCfg, 10, param, _T.BC_ISP_CFG, CONFIG.getCmdIndex());
    }
    setIspDayNightMode(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_ISP_DAY_NIGHT_MODE, native_1.native.BCSDK_RemoteSetIspDayNightMode, 10, param, _T.BC_DAY_NIGHT_MODE_CFG);
    }
    /* LED
     *
     * callback with E_BC_CMD_GET_LED_STATE, E_BC_CMD_SET_LED_STATE
     */
    getLedState(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_LED_STATE, native_1.native.BCSDK_RemoteGetLedState);
    }
    setLedState(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_LED_STATE, native_1.native.BCSDK_RemoteSetLedState, 10, param, _T.BC_LED_LIGHT_STATE, CONFIG.getCmdIndex());
    }
    /* Floodlight
    *
    * callback with E_BC_CMD_FLOODLIGHT_MANUAL, E_BC_CMD_GET_FLOODLIGHT_TASK, E_BC_CMD_SET_FLOODLIGHT_TASK
    */
    floodlightManual(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_FLOODLIGHT_MANUAL, native_1.native.BCSDK_RemoteFloodlightManual, 10, param, _T.BC_FLOODLIGHT_MANUAL, CONFIG.getCmdIndex());
    }
    getFloodlightTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_FLOODLIGHT_TASK, native_1.native.BCSDK_RemoteGetFloodlightTask);
    }
    setFloodlightTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_FLOODLIGHT_TASK, native_1.native.BCSDK_RemoteSetFloodlightTask, 10, param, _T.BC_FLOODLIGHT_TASK, CONFIG.getCmdIndex());
    }
    /* day night threshold
     *
     * callback with E_BC_CMD_GET_DAY_NIGHT_THRESHOLD, E_BC_CMD_SET_DAY_NIGHT_THRESHOLD
     */
    getDayNightThreshold(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_DAY_NIGHT_THRESHOLD, native_1.native.BCSDK_RemoteGetDayNightThreshold);
    }
    setDayNightThreshold(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_DAY_NIGHT_THRESHOLD, native_1.native.BCSDK_RemoteSetDayNightThreshold, 10, param, _T.BC_FLOODLIGHT_TASK, CONFIG.getCmdIndex());
    }
    /* Ftp Task
     *
     * callback with E_BC_CMD_GET_FTPTASK, E_BC_CMD_SET_FTPTASK
     */
    getFtpTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_FTPTASK, native_1.native.BCSDK_RemoteGetFtpTask);
    }
    setFtpTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_FTPTASK, native_1.native.BCSDK_RemoteSetFtpTask, 10, param, _T.BC_FTP_TASK);
    }
    /* Email Task
     *
     * callback with E_BC_CMD_GET_EMAIL_TASK, E_BC_CMD_SET_EMAIL_TASK
     */
    getEmailTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_EMAIL_TASK, native_1.native.BCSDK_RemoteGetEmailTask);
    }
    setEmailTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_EMAIL_TASK, native_1.native.BCSDK_RemoteSetEmailTask, 10, param, _T.BC_EMAIL_TASK);
    }
    /* push task
     *
     * callback with E_BC_CMD_GET_PUSH_TASK, E_BC_CMD_SET_PUSH_TASK
     */
    getPushTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_PUSH_TASK, native_1.native.BCSDK_RemoteGetPushTask);
    }
    setPushTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_PUSH_TASK, native_1.native.BCSDK_RemoteSetPushTask, 10, param, _T.BC_PUSH_TASK);
    }
    /* audio task
     *
     * callback with E_BC_CMD_GET_AUDIO_TASK, E_BC_CMD_SET_AUDIO_TASK
     */
    getAudioTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_AUDIO_TASK, native_1.native.BCSDK_RemoteGetAudioTask);
    }
    setAudioTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_AUDIO_TASK, native_1.native.BCSDK_RemoteSetAudioTask, 10, param, _T.BC_AUDIO_TASK);
    }
    /* buzzer task
     *
     * callback with E_BC_CMD_GET_BUZZER_TASK, E_BC_CMD_SET_BUZZER_TASK
     */
    getBuzzerTask(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_BUZZER_TASK, native_1.native.BCSDK_RemoteGetBuzzerTask);
    }
    setBuzzerTask(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_BUZZER_TASK, native_1.native.BCSDK_RemoteSetBuzzerTask, 10, param, _T.BC_BUZZER_TASK);
    }
    /* Snap
     *
     * callback with E_BC_CMD_SNAP
     */
    snap(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SNAP, native_1.native.BCSDK_RemoteSnap, 35, param, _T.BC_SNAP_INFO);
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
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_AUTO_FOCUS, native_1.native.BCSDK_RemoteSetAutoFocus, 10, param, _T.BC_PTZ_AUTO_FOCUS);
    }
    /* Zoom Focus
     *
     * callback with E_BC_CMD_GET_ZOOM_FOCUS_INFO, E_BC_CMD_START_ZOOM_FOCUS
     */
    getZoomFocusInfo(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_ZOOM_FOCUS_INFO, native_1.native.BCSDK_RemoteGetZoomFocusInfo);
    }
    startZoomFocus(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_START_ZOOM_FOCUS, native_1.native.BCSDK_RemoteStartZoomFocus, 10, param, _T.BC_START_ZOOM_FOCUS);
    }
    /* Crop Cfg
     *
     * callback with E_BC_CMD_GET_CROP_CFG, E_BC_CMD_SET_CROP_CFG
     */
    getCropCfg(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_CROP_CFG, native_1.native.BCSDK_RemoteGetCropCfg);
    }
    setCropCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_CROP_CFG, native_1.native.BCSDK_RemoteSetCropCfg, 10, param, _T.BC_CROP_CFG);
    }
    /* Crop Snap
     *
     * callback with E_BC_CMD_CROP_SNAP
     */
    cropSnap(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_CROP_SNAP, native_1.native.BCSDK_RemoteCropSnap, 35, param, _T.BC_CROP_SNAP_INFO);
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
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_RINGTONE_CFG, native_1.native.BCSDK_RemoteSetRingtoneCfg, 10, param, _T.BC_RINGTONE_CFG);
    }
    manualRingDown(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_MANUAL_RING_DOWN, native_1.native.BCSDK_RemoteManualRingDown, 10, param, _T.BC_MANUAL_RING_DOWN);
    }
    muteAlarmAudio(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_MUTE_ALARM_AUDIO, native_1.native.BCSDK_RemoteMuteAlarmAudio, 10, param, _T.BC_MUTE_ALARM_AUDIO);
    }
    saveRingtone(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SAVE_RINGTONE, native_1.native.BCSDK_RemoteSaveRingtone);
    }
    // public importRingtone(handle: number, channel: number, param: T.BC_RINGTONE_FILE_INFO): Promise<void> {
    // }
    getRingtoneAbility(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_ABILITY, native_1.native.BCSDK_RemoteGetRingtoneAbility);
    }
    /* version info
     *
     * callback with E_BC_CMD_GET_CHN_VERSION
     */
    getChannelVersionInfo(handle, channel) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_CHN_VERSION, native_1.native.BCSDK_RemoteGetChannelVersionInfo);
    }
    /* ai detect config
     *
     * callback with E_BC_CMD_GET_DEF_AI_DETECT_CFG, E_BC_CMD_GET_AI_DETECT_CFG, E_BC_CMD_SET_AI_DETECT_CFG
     */
    getDefaultAIDetectCfg(handle, channel, type) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_DEF_AI_DETECT_CFG, native_1.native.BCSDK_RemoteGetDefaultAIDetectCfg, 10, type, undefined, CONFIG.getCmdIndex());
    }
    getAIDetectCfg(handle, channel, type) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_GET_AI_DETECT_CFG, native_1.native.BCSDK_RemoteGetAIDetectCfg, 10, type, undefined, CONFIG.getCmdIndex());
    }
    setAIDetectCfg(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_AI_DETECT_CFG, native_1.native.BCSDK_RemoteSetAIDetectCfg, 10, param, _T.BC_AI_DETECT_CFG, CONFIG.getCmdIndex());
    }
    /* alarm areas config
    *
    * callback with E_BC_CMD_SET_ALARM_ARAES_CFG
    */
    setAlarmAreas(handle, channel, param) {
        return this.channelCmd(handle, channel, T.BC_CMD_E.E_BC_CMD_SET_ALARM_ARAES_CFG, native_1.native.BCSDK_RemoteSetAlarmAreas, 10, param, _T.BC_ALARM_AREAS_CFG);
    }
}
CONFIG.singleton = new CONFIG();
CONFIG.CMDIDX = 0;
CONFIG.cmdTypes = new Map([
    [T.BC_CMD_E.E_BC_CMD_GET_VERSION, _T.BC_VERSION_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_SYS, _T.BC_SYS_GENERAL_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_AUTOREBOOT_CFG, _T.BC_AUTOREBOOT_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_ADVRECORD, _T.BC_RECORD_GENERAL_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_EMAIL, _T.BC_EMAIL_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_OUTPUT, _T.BC_OUTPUT_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_HDD_CFG, _T.BC_HDD_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_HDDFULL_EXPCFG, _T.BC_EXCEPTION_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_HDDERR_EXPCFG, _T.BC_EXCEPTION_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_NETDISCONNECT_EXPCFG, _T.BC_EXCEPTION_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_IPCONFLICT_EXPCFG, _T.BC_EXCEPTION_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_LOCAL, _T.BC_LOCAL_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_NORMAL_PORT, _T.BC_NET_NORMAL_PORT],
    [T.BC_CMD_E.E_BC_CMD_GET_ADVANCED_PORTS, _T.BC_NET_ADVANCED_PORT],
    [T.BC_CMD_E.E_BC_CMD_GET_UPNPSTATE, _T.BC_UPNP_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_UID, _T.BC_UID_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_PTOP_CFG, _T.BC_P2P_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_RFSENSOR, _T.BC_RFSENSOR_ALARM_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_ALARMINCFG, _T.BC_ALARM_IN_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_ALARMOUTCFG, _T.BC_ALARM_OUT_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_RF_CFG, _T.BC_RF_ALARM_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_DST, _T.BC_DST_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_DDNSCFG, _T.BC_DDNS_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_NTPCFG, _T.BC_NTP_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_PPPOECFG, _T.BC_PPPOE_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_ONLINE_UPDATE_STATUS, _T.BC_ONLINE_UPDATE_STATUS],
    [T.BC_CMD_E.E_BC_CMD_GET_AUTO_UPDATE, _T.BC_AUTO_UPDATE],
    [T.BC_CMD_E.E_BC_CMD_GET_ONLINE_NEW_FIRMWARE, _T.BC_ONLINE_NEW_FW_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_PERFORMANCE, _T.BC_PERFORMANCE_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_WIFI_SIGNAL, _T.BC_WIFI_SIGNAL],
    [T.BC_CMD_E.E_BC_CMD_GET_WIFI_INFO, _T.BC_WIFI_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_3G_4G_INFO, _T.BC_3G_4G_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_SIM_MODULE_INFO, _T.BC_SIM_MODULE_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_CLOUD_INFO, _T.BC_CLOUD_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_CLOUD_CFG, _T.BC_CLOUD_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_SIGNATURE_LOGIN_CFG, _T.BC_SIGNATURE_LOGIN_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_SCAN_AP, _T.BC_SCAN_AP],
    [T.BC_CMD_E.E_BC_CMD_GET_RECFILEDATE, _T.BC_RECORD_FILE_DAYS_BY_CHN],
    [T.BC_CMD_E.E_BC_CMD_GET_USERCFG, _T.BC_USER_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_USER_ONLINE, _T.BC_USER_ONLINE_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_BOOTPWD_STATE, _T.BC_BOOT_PWD_STATE],
    [T.BC_CMD_E.E_BC_CMD_GET_FTPCFG, _T.BC_FTP_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_COMPRESS, _T.BC_CHN_ENC_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_OSD, _T.BC_OSD_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_CAMERA_CFG, _T.BC_CAMERA_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_COVER, _T.BC_COVER_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_RECORDSCHED, _T.BC_RECORD_SCHEDULE_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_PTZCFG, _T.BC_PTZ_DECODER],
    [T.BC_CMD_E.E_BC_CMD_GET_MOTION, _T.BC_MOTION_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_VILOST, _T.BC_VILOST_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_PRESET, _T.BC_PTZ_PRESETS],
    [T.BC_CMD_E.E_BC_CMD_GET_GUARD, _T.BC_GUARD_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_CRUISE, _T.BC_PTZ_CRUISES],
    [T.BC_CMD_E.E_BC_CMD_GET_CAMERA, _T.BC_ISP_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_DEFAULT_CAMERA, _T.BC_ISP_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_LED_STATE, _T.BC_LED_LIGHT_STATE],
    [T.BC_CMD_E.E_BC_CMD_GET_FTPTASK, _T.BC_FTP_TASK],
    [T.BC_CMD_E.E_BC_CMD_GET_EMAIL_TASK, _T.BC_EMAIL_TASK],
    [T.BC_CMD_E.E_BC_CMD_GET_PUSH_TASK, _T.BC_PUSH_TASK],
    [T.BC_CMD_E.E_BC_CMD_GET_AUDIO_TASK, _T.BC_AUDIO_TASK],
    [T.BC_CMD_E.E_BC_CMD_GET_BUZZER_TASK, _T.BC_BUZZER_TASK],
    [T.BC_CMD_E.E_BC_CMD_GET_AUTO_FOCUS, _T.BC_PTZ_AUTO_FOCUS],
    [T.BC_CMD_E.E_BC_CMD_GET_CROP_CFG, _T.BC_CROP_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_BATTERY_INFO, _T.BC_BATTERY_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_BATTERY_ANALYSIS, _T.BC_BATTERY_ANALYSIS],
    [T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_FILE_INFO, _T.BC_RINGTONE_FILE_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_CFG, _T.BC_RINGTONE_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_RINGTONE_ABILITY, _T.BC_RINGTONE_ABILITY],
    [T.BC_CMD_E.E_BC_CMD_GET_CHN_VERSION, _T.BC_VERSION_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_FLOODLIGHT_TASK, _T.BC_FLOODLIGHT_TASK],
    [T.BC_CMD_E.E_BC_CMD_GET_ZOOM_FOCUS_INFO, _T.BC_ZOOM_FOCUS_INFO],
    [T.BC_CMD_E.E_BC_CMD_GET_DAY_NIGHT_THRESHOLD, _T.BC_DAY_NIGHT_THRESHOLD_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_AI_DETECT_CFG, _T.BC_AI_DETECT_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_DEF_AI_DETECT_CFG, _T.BC_AI_DETECT_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_AI_CFG, _T.BC_AI_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_RECORD_ENABLE, _T.BC_ALARM_OUT_ENABLE_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_FTP_ENABLE, _T.BC_ALARM_OUT_ENABLE_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_EMAIL_ENABLE, _T.BC_ALARM_OUT_ENABLE_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_PUSH_ENABLE, _T.BC_ALARM_OUT_ENABLE_CFG],
    [T.BC_CMD_E.E_BC_CMD_GET_BUZZER_ENABLE, _T.BC_ALARM_OUT_ENABLE_CFG],
]);
exports.config = CONFIG.instance();
//# sourceMappingURL=config.js.map