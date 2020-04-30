/// <reference types="node" />
import * as T from './types';
export interface DeviceCallback {
    stateCallback: (handle: number, from: T.BCSDK_DEVICE_STATE_E, to: T.BCSDK_DEVICE_STATE_E) => void;
    abilityChangeCallback: (handle: number) => void;
    disconnectCallback: (handle: number) => void;
    alarmReportCallback: (handle: number, status: T.BC_ALARM_STATUS_REPORT) => void;
    cameraStateCallback: (handle: number) => void;
    noInteractionCallback: (handle: number, report: T.BC_TIME_WITHOUT_INTERACTION) => void;
    batteryExceptionCallback: (handle: number, exception: boolean) => void;
    batteryInfoCallback: (handle: number, info: T.BC_BATTERY_INFO) => void;
    info3G4GCallback: (handle: number, info: T.BC_3G_4G_INFO) => void;
    floodLightStateCallback: (handle: number, info: T.BC_FLOODLIGHT_STAT) => void;
}
export interface IYUVPlane {
    width: number;
    height: number;
    stride: number;
    data: Buffer | null;
}
export interface IYUVData {
    pts: number;
    width: number;
    height: number;
    format: T.BC_YUV_FORMAT_E;
    plane0: IYUVPlane;
    plane1: IYUVPlane;
    plane2: IYUVPlane;
}
export declare type IFramePlane = IYUVPlane;
export declare type IFrameCallbackData = IYUVData;
export interface IAudioCallbackData {
    media: Buffer | null;
    length: number;
    hasAAC: number;
    sampleRate: number;
    profile: number;
    channels: number;
}
export interface IDataCallbackData {
    handle: number;
    channel: number;
    dataDesc: T.DATA_FRAME_DESC;
}
export interface FrameCallback {
    onVieoData: (data: IFrameCallbackData) => void;
    onAudioData: (data: IAudioCallbackData) => void;
}
export interface DataCallback {
    onData: (data: IDataCallbackData) => void;
}
export interface RecordFilesCallback {
    (seq: number, files: T.BC_FIND_REC_FILES): void;
}
export interface AlarmVideosCallback {
    (seq: number, files: T.BC_ALARM_VIDEOS_INFO): void;
}
export interface DEVICE_LOCATION_DESC {
    /**
     * max length: SDK_MAX_NORMAL_STR_LEN - 1
     */
    name: string;
    /**
     * max length: SDK_MAX_NORMAL_STR_LEN - 1
     */
    ip: string;
    /**
     * 0 - 65535
     */
    port: number;
    /**
     * max length: SDK_MAX_UID_STR_LEN - 1
     */
    uid: string;
    /**
     * max length: SDK_MAX_MAC_STR_LEN - 1
     */
    mac: string;
    eDVRType: T.BC_DEVICE_TYPE_E;
    iChanNum: number;
    isSongDevice: number;
}
export interface DeviceFoundCallback {
    (desc: DEVICE_LOCATION_DESC): void;
}
export interface BC_REC_EVENT_DESC {
    hDevice: number;
    channel: number;
    event: T.BCSDK_REC_EVENT_E;
    description: string;
    file: string;
}
export interface RecordStatusCallback {
    (desc: BC_REC_EVENT_DESC): void;
}
export interface BC_DISK_WARNINIG_DESC {
    warning: T.BCSDK_WARNINIG_E;
    description: string;
    folder: string;
    folderFreeSize: number;
    diskFreeSize: number;
}
export interface DiskStatusCallback {
    (desc: BC_DISK_WARNINIG_DESC): void;
}
export declare type ProgressCallback = (status: T.BC_RSP_CODE_E, progress: number) => void;
