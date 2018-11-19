import * as T from './types';
export interface DeviceCallback {
    stateCallback: (handle: number, from: T.BCSDK_DEVICE_STATE_E, to: T.BCSDK_DEVICE_STATE_E) => void;
    abilityChangeCallback: (handle: number) => void;
}
export interface IFramePlane {
    width: number;
    height: number;
    stride: number;
    data: Uint8Array | null;
}
export interface IFrameCallbackData {
    pts: number;
    width: number;
    height: number;
    format: T.BC_YUV_FORMAT_E;
    plane0: IFramePlane;
    plane1: IFramePlane;
    plane2: IFramePlane;
}
export interface IDataCallbackData {
    handle: number;
    channel: number;
    dataDesc: T.DATA_FRAME_DESC;
}
export interface FrameCallback {
    onVieoData: (data: IFrameCallbackData) => void;
}
export interface DataCallback {
    onData: (data: IDataCallbackData) => void;
}
export interface RecordFilesCallback {
    (seq: number, files: T.BC_FIND_REC_FILES): void;
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
