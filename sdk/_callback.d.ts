/// <reference types="node" />
export interface SDKResolve<T> {
    sdkResolve: null | undefined | ((value?: T) => void);
    sdkReject: null | undefined | ((value?: any) => void);
    timeout?: number;
    timer?: NodeJS.Timer;
}
export interface Callback<T> {
    sdkCallback?: null | undefined | T;
}
declare class PromiseCallbacks {
    private static singleton;
    private constructor();
    static instance(): PromiseCallbacks;
    private static callbacks;
    private getCallbacks;
    addCallback(handle: number, channel: number, cmd: number, cmdIndex: number, callback: SDKResolve<any>): void;
    modifyCallbackHandle(oldHandle: number, handle: number): void;
    clearCallbackForHandle(handle: number): void;
    clearCallbackForChannel(handle: number, channel: number): void;
    clearCallbackForCommond(handle: number, channel: number, cmd: number): void;
    clearCallback(handle: number, channel: number, cmd: number, cmdIndex: number): void;
    clearAll(): void;
    handleCallback<T = unknown>(handle: number, channel: number, cmd: number, cmdIndex: number, func: (cb: SDKResolve<T>) => void): void;
}
export declare const PROMISE_CBS: PromiseCallbacks;
declare class CommonCallbacks {
    private static singleton;
    private constructor();
    static instance(): CommonCallbacks;
    private static callbacks;
    getCallback(handle: number, channel: number, cmd: number, cmdIndex: number): Callback<any> | null;
    setCallback(handle: number, channel: number, cmd: number, cmdIndex: number, callback: Callback<any> | null | undefined): void;
    modifyCallbackHandle(oldHandle: number, handle: number): void;
    clearCallbackForHandle(handle: number): void;
    clearCallbackForChannel(handle: number, channel: number): void;
    clearCallbackForCommond(handle: number, channel: number, cmd: number): void;
    clearCallback(handle: number, channel: number, cmd: number, cmdIndex: number): void;
    clearAll(): void;
}
export declare const COMMON_CBS: CommonCallbacks;
export {};
