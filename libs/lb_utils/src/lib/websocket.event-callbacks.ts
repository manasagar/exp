/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICloseEvent } from "websocket";

export const onServerOpen = (socket: any, cred: any) => {
    const values = ['some data']
    //prepare the data
    // const values: any = { "t": "c" };
    // values["uid"] = cred?.uid;
    // values["actid"] = cred?.actid;
    // values["susertoken"] = cred?.apikey;
    // values["source"] = "API";
    socket.send(JSON.stringify(values));
}

export const onMessageReceive = (data: any, trigger: any) => {

    const jsonData: string | undefined = data as string;
    const result: any = JSON.parse(jsonData);

    if (result.t === 'ck') {
        trigger("open", [result]);
    }
    if (result.t === 'tk' || result.t === 'tf' || result.t === 'dk' || result.t === 'df') {
        trigger("quote", [result]);
    }
    if (result.t === 'om') {
        trigger("order", [result]);
    }
}

export const onConnectionClosed = (evt: ICloseEvent, trigger: any) => {
    console.log("Socket closed")
    trigger("close", [JSON.stringify(evt.reason)]);
}

export const onErrorWithConnection = (err:Error,trigger:any) => {
    console.log("error::", err)
    trigger("error", [JSON.stringify(err.message)]);
}