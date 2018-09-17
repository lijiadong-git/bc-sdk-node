import * as T from './types';
export interface DeviceCallback {
    stateCallback: (handle: number, from: T.BCSDK_DEVICE_STATE_E, to: T.BCSDK_DEVICE_STATE_E) => void;
    abilityChangeCallback: (handle: number) => void;
}
export interface LiveCallback {
    onVieoData: (handle: number, channel: number, pts: number, width: number, height: number, plane0: Uint8Array, plane1: Uint8Array, plane2: Uint8Array) => void;
}
