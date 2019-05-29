import * as ffi from 'ffi';
import * as ref from 'ref';
import * as T from '../types';
export declare const pointer: typeof ref.refType;
export declare const renderCallbackFunc: ffi.Function;
export interface NativeMethods {
    BC_MediaPlayerCreate: () => number;
    BC_MediaPlayerRelease: (hPlayer: number) => number;
    BC_MediaPlayerStart: (hPlayer: number, stream: T.BC_STREAM_TYPE_E, callback: any) => number;
    BC_MediaPlayerFeed: (hPlayer: number, data: any) => number;
    BC_MediaPlayerMute: (hPlayer: number, mute: boolean) => number;
    BC_MediaPlayerStop: (hPlayer: number) => number;
}
export declare const native: NativeMethods;
