declare class TALK {
    private static singleton;
    private constructor();
    static instance(): TALK;
    getTotalBitrates(): Promise<number>;
    reInitP2p(): Promise<void>;
}
export declare const talk: TALK;
export {};
