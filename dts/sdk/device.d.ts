import * as T from '../types';
import { DeviceCallback } from '../types';
declare class DEVICE {
    private static singleton;
    private constructor();
    static instance(): DEVICE;
    private static deviceCallback;
    add(loginDes: T.DEVICE_LOGIN_DESC, callback: DeviceCallback): Promise<number>;
    open(handle: number, callback?: DeviceCallback | null | undefined): Promise<number>;
}
export declare const device: DEVICE;
export {};
