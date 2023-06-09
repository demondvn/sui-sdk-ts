import { Struct } from 'superstruct';
import { RequestParamsLike } from 'jayson';
/**
 * An object defining headers to be passed to the RPC server
 */
export type HttpHeaders = {
    [header: string]: string;
};
/**
 * @internal
 */
export type RpcParams = {
    method: string;
    args: Array<any>;
};
export declare const ValidResponse: Struct<{
    id: string;
    jsonrpc: "2.0";
    result?: any;
}, {
    jsonrpc: Struct<"2.0", "2.0">;
    id: Struct<string, null>;
    result: Struct<any, null>;
}>;
export declare const ErrorResponse: Struct<{
    id: string;
    error: {
        message: string;
        code?: any;
        data?: any;
    };
    jsonrpc: "2.0";
}, {
    jsonrpc: Struct<"2.0", "2.0">;
    id: Struct<string, null>;
    error: Struct<{
        message: string;
        code?: any;
        data?: any;
    }, {
        code: Struct<any, null>;
        message: Struct<string, null>;
        data: Struct<any, null>;
    }>;
}>;
export declare class JsonRpcClient {
    private rpcClient;
    constructor(url: string, httpHeaders?: HttpHeaders);
    requestWithType<T>(method: string, args: RequestParamsLike, struct: Struct<T>, skipDataValidation?: boolean): Promise<T>;
    request(method: string, args: RequestParamsLike): Promise<any>;
}
