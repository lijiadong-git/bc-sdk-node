declare class CALLBACK {
    private static singleton;
    private constructor();
    static instance(): CALLBACK;
    private static callbacks;
    getCallback(handle: number, channel: number, cmd: number, cmdIndex: number): Callback<any, any> | null;
    setCallback(handle: number, channel: number, cmd: number, cmdIndex: number, callback: Callback<any, any> | null | undefined): void;
    modifyCallbackHandle(oldHandle: number, handle: number): void;
    clearCallbackForHandle(handle: number): void;
    clearCallbackForChannel(handle: number, channel: number): void;
    clearCallbackForCommond(handle: number, channel: number, cmd: number): void;
    clearCallback(handle: number, channel: number, cmd: number, cmdIndex: number): void;
}
export declare const CB: CALLBACK;
export interface Callback<O, T> {
    sdkCallback?: null | undefined | O;
    sdkResolve?: null | undefined | ((value: T) => void);
}
export {};
