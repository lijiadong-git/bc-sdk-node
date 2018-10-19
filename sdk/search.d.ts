import * as T from '../types';
declare class SEARCH {
    private static singleton;
    private constructor();
    static instance(): SEARCH;
    private static callbacks;
    private static deviceFoundCallback;
    handleSDKCallback(handle: number, cmdData: any): void;
    addCallback(callback: T.DeviceFoundCallback): Promise<void>;
    removeCallback(callback: T.DeviceFoundCallback): Promise<void>;
    startLoop(time: number): Promise<void>;
    stopLoop(): Promise<void>;
    deviceSearchOnce(): Promise<void>;
    songP2PDeviceSearchOnce(): Promise<void>;
}
export declare const search: SEARCH;
export {};
