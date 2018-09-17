declare class PTZ {
    private static singleton;
    private constructor();
    static instance(): PTZ;
    ptzStop(): number;
}
export declare const ptz: PTZ;
export {};
