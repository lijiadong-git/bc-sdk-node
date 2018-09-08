import * as T from '../types';
import { LiveCallback } from '../types';
declare class LIVE {
    private static singleton;
    private constructor();
    static instance(): LIVE;
    private static liveCallback;
    liveOpen(handle: number, channel: number, stream: T.BC_STREAM_TYPE_E, callback: LiveCallback): Promise<void>;
}
export declare const live: LIVE;
export {};
