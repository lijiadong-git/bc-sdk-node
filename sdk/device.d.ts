import * as T from '../types';
import { DeviceCallback } from '../types';
declare class DEVICE {
    private static singleton;
    private constructor();
    static instance(): DEVICE;
    handleSDKCallback(handle: number, cmdData: any): void;
    sdkOpen(group: number, bexcept_server_cn: boolean, bexcept_server_ru: boolean): void;
    add(loginDes: T.DEVICE_LOGIN_DESC, callback: DeviceCallback): Promise<number>;
    remove(handle: number): Promise<void>;
    removeAll(): Promise<void>;
    modify(handle: number, loginDes: T.DEVICE_LOGIN_DESC): Promise<number>;
    getDevicesCount(): Promise<number>;
    getDeviceAtIndex(index: number): Promise<number>;
    open(handle: number): Promise<number>;
    close(handle: number): Promise<void>;
    setAccountCenter(accountCenterApiUrl: string, token: string, pemFilePath: string): Promise<void>;
    setShouldLoginWithSignature(handle: number, should: boolean): Promise<void>;
    setNeedAutoOpen(handle: number, need: boolean): Promise<void>;
    setDeviceMaxReconnectCount(handle: number, count: number): Promise<void>;
    getLoginDescription(handle: number): Promise<T.DEVICE_LOGIN_DESC>;
    getChannelCount(handle: number): Promise<number>;
    getDeviceState(handle: number): Promise<T.BCSDK_DEVICE_STATE_E>;
}
export declare const device: DEVICE;
export {};
