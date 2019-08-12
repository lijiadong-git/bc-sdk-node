import * as T from '../types';
import { ProgressCallback } from '../types';
declare class DOWNLOAD {
    private static singleton;
    private constructor();
    static instance(): DOWNLOAD;
    handleSDKCallback(handle: number, cmdData: any): void;
    startDownloadFile(handle: number, fileName: string, subStream: boolean, type: T.BC_FILE_TYPE_E, tempFolder: string, dstFile: string, callback: ProgressCallback): Promise<void>;
    stopDownload(handle: number): Promise<void>;
}
export declare const download: DOWNLOAD;
export {};
