import * as T from '../types';
declare class PLAYER {
    private static singleton;
    private constructor();
    static instance(): PLAYER;
    private static frameCallbck;
    private static playerCallback;
    create(): Promise<number>;
    release(hPlayer: number): Promise<void>;
    start(hPlayer: number, stream: T.BC_STREAM_TYPE_E, callback: T.FrameCallback): Promise<void>;
    feed(hPlayer: number, data: T.DATA_FRAME_DESC): Promise<void>;
    stop(hPlayer: number): Promise<void>;
}
export declare const player: PLAYER;
export {};
