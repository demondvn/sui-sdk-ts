import { Infer } from 'superstruct';
import { CallArg } from './sui-bcs';
export declare const TransactionDigest: import("superstruct").Struct<string, null>;
export type TransactionDigest = Infer<typeof TransactionDigest>;
export declare const TransactionEffectsDigest: import("superstruct").Struct<string, null>;
export type TransactionEffectsDigest = Infer<typeof TransactionEffectsDigest>;
export declare const TransactionEventDigest: import("superstruct").Struct<string, null>;
export type TransactionEventDigest = Infer<typeof TransactionEventDigest>;
export declare const ObjectId: import("superstruct").Struct<string, null>;
export type ObjectId = Infer<typeof ObjectId>;
export declare const SuiAddress: import("superstruct").Struct<string, null>;
export type SuiAddress = Infer<typeof SuiAddress>;
export declare const SequenceNumber: import("superstruct").Struct<number, null>;
export type SequenceNumber = Infer<typeof SequenceNumber>;
export declare const ObjectOwner: import("superstruct").Struct<{
    AddressOwner: string;
} | {
    ObjectOwner: string;
} | {
    Shared: {
        initial_shared_version: number;
    };
} | "Immutable", null>;
export type ObjectOwner = Infer<typeof ObjectOwner>;
export type SuiJsonValue = boolean | number | string | CallArg | Array<SuiJsonValue>;
export declare const SuiJsonValue: import("superstruct").Struct<SuiJsonValue, null>;
/** Returns whether the tx digest is valid based on the serialization format */
export declare function isValidTransactionDigest(value: string): value is TransactionDigest;
export declare const SUI_ADDRESS_LENGTH = 32;
export declare function isValidSuiAddress(value: string): value is SuiAddress;
export declare function isValidSuiObjectId(value: string): boolean;
/**
 * Perform the following operations:
 * 1. Make the address lower case
 * 2. Prepend `0x` if the string does not start with `0x`.
 * 3. Add more zeros if the length of the address(excluding `0x`) is less than `SUI_ADDRESS_LENGTH`
 *
 * WARNING: if the address value itself starts with `0x`, e.g., `0x0x`, the default behavior
 * is to treat the first `0x` not as part of the address. The default behavior can be overridden by
 * setting `forceAdd0x` to true
 *
 */
export declare function normalizeSuiAddress(value: string, forceAdd0x?: boolean): SuiAddress;
export declare function normalizeSuiObjectId(value: string, forceAdd0x?: boolean): ObjectId;
