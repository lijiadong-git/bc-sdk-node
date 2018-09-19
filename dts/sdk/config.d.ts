import * as T from '../types';
declare class CONFIG {
    private static singleton;
    private constructor();
    static instance(): CONFIG;
    setIsInBackground(background: boolean): Promise<void>;
    setNetworkType(type: T.BCSDK_NET_TYPE_E): Promise<void>;
    startDevicesAutoOpen(time: number): Promise<void>;
    stopDevicesAutoOpen(logout: boolean): Promise<void>;
}
export declare const config: CONFIG;
export {};
