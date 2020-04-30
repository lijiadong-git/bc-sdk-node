import * as T from '../types';
import { FrameCallback } from '../types';
declare class PLAYBACK {
    private static singleton;
    private constructor();
    static instance(): PLAYBACK;
    private static frameCallbcks;
    handleSDKCallback(handle: number, cmdData: any): void;
    private static SDK_FRAME_CALLBACK;
    recordFilesSearch(handle: number, channel: number, start: T.BC_TIME, end: T.BC_TIME, type: T.RECORD_TYPE_E, streamType: T.BC_STREAM_TYPE_E, seq: number, callback: T.RecordFilesCallback): Promise<void>;
    alarmVideosSearch(handle: number, channel: number, start: T.BC_TIME, end: T.BC_TIME, streamType: T.BC_STREAM_TYPE_E, seq: number, callback: T.AlarmVideosCallback): Promise<void>;
    seek(handle: number, time: T.BC_TIME): Promise<void>;
    openStatus(handle: number, channel: number): Promise<T.BCSDK_MEDIA_STATE_E>;
    isOpen(handle: number, channel: number): Promise<boolean>;
    streamType(handle: number, channel: number): Promise<T.BC_STREAM_TYPE_E>;
    open(handle: number, channel: number, fileNam: string, cacheFile: string, subStream: boolean, speed: number, callback: FrameCallback): Promise<void>;
    close(handle: number, channel: number): Promise<void>;
    start(handle: number, channel: number): Promise<void>;
    pause(handle: number, channel: number): Promise<void>;
    nextStep(handle: number, channel: number): Promise<void>;
    mute(handle: number, channel: number, mute: boolean): Promise<void>;
}
export declare const playback: PLAYBACK;
export {};
