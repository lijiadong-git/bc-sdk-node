import * as T from '../types';
declare class LIVE {
    private static singleton;
    private constructor();
    static instance(): LIVE;
    handleSDKCallback(handle: number, cmdData: any): void;
    private static liveCallback;
    getLiveStreamType(handle: number, channel: number): Promise<T.BC_STREAM_TYPE_E>;
    getIsLiveOpen(handle: number, channel: number): Promise<boolean>;
    liveOpen(handle: number, channel: number, stream: T.BC_STREAM_TYPE_E, callback: T.DataCallback): Promise<void>;
    liveClose(handle: number, channel: number): Promise<void>;
}
export declare const live: LIVE;
export {};
