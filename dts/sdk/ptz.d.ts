declare class PTZ {
    private static singleton;
    private constructor();
    static instance(): PTZ;
    stop(handle: number, speed: number): Promise<void>;
    up(handle: number, channel: number, speed: number): Promise<void>;
    down(handle: number, channel: number, speed: number): Promise<void>;
    left(handle: number, channel: number, speed: number): Promise<void>;
    right(handle: number, channel: number, speed: number): Promise<void>;
    upLeft(handle: number, channel: number, speed: number): Promise<void>;
    upRight(handle: number, channel: number, speed: number): Promise<void>;
    downLeft(handle: number, channel: number, speed: number): Promise<void>;
    downRight(handle: number, channel: number, speed: number): Promise<void>;
    zoomIn(handle: number, channel: number, speed: number): Promise<void>;
    zoomOut(handle: number, channel: number, speed: number): Promise<void>;
    focusFar(handle: number, channel: number, speed: number): Promise<void>;
    focusNear(handle: number, channel: number, speed: number): Promise<void>;
    irisOpen(handle: number, channel: number, speed: number): Promise<void>;
    irisClose(handle: number, channel: number, speed: number): Promise<void>;
    scanAuto(handle: number, channel: number, speed: number): Promise<void>;
}
export declare const ptz: PTZ;
export {};
