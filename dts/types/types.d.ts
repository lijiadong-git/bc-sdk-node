export * from './enum';
export * from './callbacks';
export interface DEVICE_LOGIN_DESC {
    /**
     * max length 255
     */
    name: string;
    useP2P: boolean;
    port: number;
    uidPort: number;
    host: string;
    uid: string;
    username: string;
    password: string;
}
