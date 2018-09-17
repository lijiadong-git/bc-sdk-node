import * as E from './enum';
export * from './enum';
export * from './callbacks';
export declare const H_BC_DEVICE_INVALID: number;
export interface DEVICE_LOGIN_DESC {
    /**
     * max length 255
     */
    name: string;
    /**
     * use for get
     */
    useP2P: boolean;
    /**
     * max length 1023
     */
    port: number;
    /**
     * 2015 for battery devices
     * 2018 for others
     */
    uidPort: number;
    /**
     * max length 1023
     */
    host: string;
    /**
     * max length 127
     */
    uid: string;
    /**
     * max length 31
     */
    username: string;
    /**
     * max length 31
     */
    password: string;
}
export interface DEVICE_ABILITY_ABOUT {
    isBattery: boolean;
    qrCode: boolean;
    type: E.BC_SONG_P2P_TYPE_E;
}
