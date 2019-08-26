import * as T from '../types';
declare class RECORD {
    private static singleton;
    private constructor();
    static instance(): RECORD;
    private static diskCallbacks;
    private static diskStatusCallback;
    private static recordCallbacks;
    private static recordStatusCallback;
    addCallback(callback: T.RecordStatusCallback): Promise<void>;
    removeCallback(callback: T.RecordStatusCallback): Promise<void>;
    addDiskCallback(callback: T.DiskStatusCallback): Promise<void>;
    removeDiskCallback(callback: T.DiskStatusCallback): Promise<void>;
    setRecordFolder(tempFolder: string, folder: string, folderMaxSize: number, sizeForWarning: number): Promise<void>;
    setRecordFilePrefixion(hDevice: number, channel: number, prefixion: string): Promise<void>;
    setLocalRecordSchedule(scheduleTable: T.BC_REC_SCHE_TABLE_CFG, streamType: T.BC_STREAM_TYPE_E, fileDuration: number, postDuration: number): Promise<void>;
    openLocalRecordSchedule(): Promise<void>;
    closeLocalRecordSchedule(): Promise<void>;
    setDeviceAcceptLocalRecordSchedule(hDevice: number, accept: T.BC_REC_SCHE_DEVICE_CFG): Promise<void>;
    getIsRecording(hDevice: number, channel: number): Promise<boolean>;
    getIsManualRecordOpened(hDevice: number, channel: number): Promise<boolean>;
    openManualRecord(hDevice: number, channel: number): Promise<void>;
    closeManualRecord(hDevice: number, channel: number): Promise<void>;
    getLocalRecordState(hDevice: number, channel: number): Promise<T.BCSDK_RECORD_STATE_E>;
    startLiveRecord(hDevice: number, channel: number): Promise<void>;
    getLiveRecordState(hDevice: number, channel: number): Promise<T.BCSDK_RECORD_STATE_E>;
    cutLiveRecord(hDevice: number, channel: number): Promise<void>;
    stopLiveRecord(hDevice: number, channel: number): Promise<void>;
    startPlaybackRecord(hDevice: number, channel: number): Promise<void>;
    getPlaybackRecordState(hDevice: number, channel: number): Promise<T.BCSDK_RECORD_STATE_E>;
    cutPlaybackRecord(hDevice: number, channel: number): Promise<void>;
    stopPlaybackRecord(hDevice: number, channel: number): Promise<void>;
}
export declare const record: RECORD;
export {};
