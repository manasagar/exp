import { ICloseEvent } from "websocket";
export declare const onServerOpen: (socket: any, cred: any) => void;
export declare const onMessageReceive: (data: any, trigger: any) => void;
export declare const onConnectionClosed: (evt: ICloseEvent, trigger: any) => void;
export declare const onErrorWithConnection: (err: Error, trigger: any) => void;
