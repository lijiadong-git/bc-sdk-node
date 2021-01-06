import * as T from '../types';
import { BC_TIME, ProgressCallback } from '../types';
declare class DOWNLOAD {
    private static singleton;
    private constructor();
    static instance(): DOWNLOAD;
    private downloadType;
    handleSDKCallback(handle: number, cmdData: any): void;
    startDownloadFile(handle: number, identity: string, fileName: string, subStream: boolean, type: T.BC_FILE_TYPE_E, tempFolder: string, dstFile: string, callback: ProgressCallback): Promise<void>;
    startDownloadByTime(handle: number, channel: number, start: BC_TIME, end: BC_TIME, subStream: boolean, tempFolder: string, dstFile: string, callback: ProgressCallback): Promise<void>;
    stopDownload(handle: number): Promise<void>;
}
export declare const download: DOWNLOAD;
export {};
