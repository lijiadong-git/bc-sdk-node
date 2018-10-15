import * as T from '../types';
declare class SETTINGS {
    private static singleton;
    private constructor();
    static instance(): SETTINGS;
    setIsInBackground(background: boolean): Promise<void>;
    setNetworkType(type: T.BCSDK_NET_TYPE_E): Promise<void>;
    startDevicesAutoOpen(time: number): Promise<void>;
    stopDevicesAutoOpen(logout: boolean): Promise<void>;
}
export declare const settings: SETTINGS;
export {};
