/// <reference types="node" />
import * as T from '../types';
declare class PLAYER {
    private static singleton;
    private constructor();
    static instance(): PLAYER;
    create(hWndBuf: Buffer, x: number, y: number, w: number, h: number): number;
    release(hPlayer: number): number;
    resize(hPlayer: number, x: number, y: number, w: number, h: number): number;
    show(hPlayer: number): number;
    hide(hPlayer: number): number;
    setTransform(hPlayer: number, transform: T.BC_TRANSFORM): number;
    getTransform(hPlayer: number): T.BC_TRANSFORM;
    clear(hPlayer: number, r: number, g: number, b: number): number;
    forceClear(hPlayer: number, r: number, g: number, b: number): number;
    capture(hPlayer: number, path: string): number;
}
export declare const player: PLAYER;
export {};
