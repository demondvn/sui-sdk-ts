import { Infer } from 'superstruct';
import { ObjectId, SharedObjectRef, SuiObjectRef } from '../types';
export declare const PureCallArg: import("superstruct").Struct<{
    Pure: number[];
}, {
    Pure: import("superstruct").Struct<number[], import("superstruct").Struct<number, null>>;
}>;
export declare const ObjectCallArg: import("superstruct").Struct<{
    Object: {
        ImmOrOwned: {
            objectId: string;
            version: string | number;
            digest: string;
        };
    } | {
        Shared: {
            objectId: string;
            initialSharedVersion: string | number;
            mutable: boolean;
        };
    };
}, {
    Object: import("superstruct").Struct<{
        ImmOrOwned: {
            objectId: string;
            version: string | number;
            digest: string;
        };
    } | {
        Shared: {
            objectId: string;
            initialSharedVersion: string | number;
            mutable: boolean;
        };
    }, null>;
}>;
export type PureCallArg = Infer<typeof PureCallArg>;
export type ObjectCallArg = Infer<typeof ObjectCallArg>;
export declare const BuilderCallArg: import("superstruct").Struct<{
    Pure: number[];
} | {
    Object: {
        ImmOrOwned: {
            objectId: string;
            version: string | number;
            digest: string;
        };
    } | {
        Shared: {
            objectId: string;
            initialSharedVersion: string | number;
            mutable: boolean;
        };
    };
}, null>;
export type BuilderCallArg = Infer<typeof BuilderCallArg>;
export declare const Inputs: {
    Pure(data: unknown, type?: string): PureCallArg;
    ObjectRef(ref: SuiObjectRef): ObjectCallArg;
    SharedObjectRef(ref: SharedObjectRef): ObjectCallArg;
};
export declare function getIdFromCallArg(arg: ObjectId | ObjectCallArg): string;
export declare function getSharedObjectInput(arg: BuilderCallArg): SharedObjectRef | undefined;
export declare function isSharedObjectInput(arg: BuilderCallArg): boolean;
export declare function isMutableSharedObjectInput(arg: BuilderCallArg): boolean;
