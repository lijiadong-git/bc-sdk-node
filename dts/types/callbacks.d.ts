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
    handle: number;
    channel: number;
    pts: number;
    width: number;
    height: number;
    format: T.BC_YUV_FORMAT_E;
    plane0: IFramePlane;
    plane1: IFramePlane;
    plane2: IFramePlane;
}
export interface LiveCallback {
    onVieoData: (data: IFrameCallbackData) => void;
}
