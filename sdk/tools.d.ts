import * as T from '../types';
declare class TOOLS {
    private static singleton;
    private constructor();
    static instance(): TOOLS;
    getTotalBitrates(): Promise<number>;
    reInitP2p(): Promise<void>;
    getP2PType(uid: string): Promise<T.BC_P2P_TYPE_E>;
    getSongP2PType(uid: string): Promise<T.BC_SONG_P2P_TYPE_E>;
    getSongDeviceInfo(uid: string): Promise<T.BC_P2P_DEVICE_INFO>;
    songP2PGetDebug(): Promise<T.BC_P2P_DEBUG_INFO>;
    XCUID2SongUID(uid: string): Promise<T.BC_P2P_UID_INFO>;
    songP2PGetDetail(): Promise<T.BC_P2P_DETAIL_INFO>;
    getDiagnoseLogs(): Promise<T.BC_DIAGNOSE_LOGS_LIST>;
    encrypt(enc: string): Promise<string>;
    decrypt(dec: string): Promise<string>;
    setSpeakerVolume(volume: number): Promise<void>;
    getSpeakerVolume(): Promise<number>;
    getDiskFree(path: string): Promise<number>;
}
export declare const tools: TOOLS;
export {};
