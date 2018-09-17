import * as T from '../types';
import { DeviceCallback } from '../types';
declare class DEVICE {
    private static singleton;
    private constructor();
    static instance(): DEVICE;
    add(loginDes: T.DEVICE_LOGIN_DESC, callback: DeviceCallback): Promise<number>;
    remove(handle: number): Promise<void>;
    modify(handle: number, loginDes: T.DEVICE_LOGIN_DESC): Promise<number>;
    open(handle: number): Promise<number>;
    getLoginDescription(handle: number): Promise<T.DEVICE_LOGIN_DESC>;
    getChannelCount(handle: number): number;
    getType(handle: number): T.BC_DEVICE_TYPE_E;
}
export declare const device: DEVICE;
export {};
