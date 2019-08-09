import * as T from '../types';
declare class TALK {
    private static singleton;
    private constructor();
    static instance(): TALK;
    handleSDKCallback(handle: number, cmdData: any): void;
    open(handle: number, channel: number): Promise<void>;
    close(handle: number, channel: number): Promise<void>;
    state(handle: number, channel: number): Promise<T.BCSDK_TALK_STATE_E>;
}
export declare const talk: TALK;
export {};
