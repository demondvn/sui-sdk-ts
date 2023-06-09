import { JsonRpcProvider } from '../providers/json-rpc-provider';
import { ObjectId, SuiObjectRef } from '../types';
import { Transactions, TransactionArgument, TransactionType } from './Transactions';
import { ObjectCallArg } from './Inputs';
import { TransactionExpiration } from './TransactionBlockData';
type TransactionResult = TransactionArgument & TransactionArgument[];
declare const TRANSACTION_BRAND: unique symbol;
interface BuildOptions {
    provider?: JsonRpcProvider;
    onlyTransactionKind?: boolean;
}
/**
 * Transaction Builder
 */
export declare class TransactionBlock {
    #private;
    /** Returns `true` if the object is an instance of the Transaction builder class. */
    static is(obj: unknown): obj is TransactionBlock;
    /**
     * Converts from a serialize transaction kind (built with `build({ onlyTransactionKind: true })`) to a `Transaction` class.
     * Supports either a byte array, or base64-encoded bytes.
     */
    static fromKind(serialized: string | Uint8Array): TransactionBlock;
    /**
     * Converts from a serialized transaction format to a `Transaction` class.
     * There are two supported serialized formats:
     * - A string returned from `Transaction#serialize`. The serialized format must be compatible, or it will throw an error.
     * - A byte array (or base64-encoded bytes) containing BCS transaction data.
     */
    static from(serialized: string | Uint8Array): TransactionBlock;
    /** A helper to retrieve the Transaction builder `Transactions` */
    static get Transactions(): {
        MoveCall(input: Omit<{
            kind: "MoveCall";
            arguments: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
            target: `${string}::${string}::${string}`;
            typeArguments: string[];
        }, "kind" | "arguments" | "typeArguments"> & {
            arguments?: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[] | undefined;
            typeArguments?: string[] | undefined;
        }): {
            kind: "MoveCall";
            arguments: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
            target: `${string}::${string}::${string}`;
            typeArguments: string[];
        };
        TransferObjects(objects: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[], address: {
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }): {
            kind: "TransferObjects";
            objects: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
            address: {
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            };
        };
        SplitCoins(coin: {
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }, amounts: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[]): {
            kind: "SplitCoins";
            coin: {
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            };
            amounts: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
        };
        MergeCoins(destination: {
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        }, sources: ({
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        } | {
            kind: "GasCoin";
        } | {
            kind: "Result";
            index: number;
        } | {
            kind: "NestedResult";
            index: number;
            resultIndex: number;
        })[]): {
            kind: "MergeCoins";
            destination: {
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            };
            sources: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
        };
        Publish(modules: number[][], dependencies: string[]): {
            kind: "Publish";
            dependencies: string[];
            modules: number[][];
        };
        MakeMoveVec({ type, objects, }: Omit<{
            kind: "MakeMoveVec";
            objects: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
            type?: {
                None: null;
            } | {
                Some: string;
            } | undefined;
        }, "kind" | "type"> & {
            type?: string | undefined;
        }): {
            kind: "MakeMoveVec";
            objects: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
            type?: {
                None: null;
            } | {
                Some: string;
            } | undefined;
        };
    };
    /** A helper to retrieve the Transaction builder `Inputs` */
    static get Inputs(): {
        Pure(data: unknown, type?: string | undefined): {
            Pure: number[];
        };
        ObjectRef(ref: {
            digest: string;
            objectId: string;
            version: string | number;
        }): {
            Object: {
                ImmOrOwned: {
                    digest: string;
                    objectId: string;
                    version: string | number;
                };
            } | {
                Shared: {
                    objectId: string;
                    initialSharedVersion: string | number;
                    mutable: boolean;
                };
            };
        };
        SharedObjectRef(ref: import("../types").SharedObjectRef): {
            Object: {
                ImmOrOwned: {
                    digest: string;
                    objectId: string;
                    version: string | number;
                };
            } | {
                Shared: {
                    objectId: string;
                    initialSharedVersion: string | number;
                    mutable: boolean;
                };
            };
        };
    };
    setSender(sender: string): void;
    /**
     * Sets the sender only if it has not already been set.
     * This is useful for sponsored transaction flows where the sender may not be the same as the signer address.
     */
    setSenderIfNotSet(sender: string): void;
    setExpiration(expiration?: TransactionExpiration): void;
    setGasPrice(price: number | bigint): void;
    setGasBudget(budget: number | bigint): void;
    setGasOwner(owner: string): void;
    setGasPayment(payments: SuiObjectRef[]): void;
    /** Get a snapshot of the transaction data, in JSON form: */
    get blockData(): {
        transactions: ({
            kind: "MoveCall";
            arguments: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
            target: `${string}::${string}::${string}`;
            typeArguments: string[];
        } | {
            kind: "TransferObjects";
            objects: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
            address: {
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            };
        } | {
            kind: "SplitCoins";
            coin: {
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            };
            amounts: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
        } | {
            kind: "MergeCoins";
            destination: {
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            };
            sources: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
        } | {
            kind: "Publish";
            dependencies: string[];
            modules: number[][];
        } | {
            kind: "MakeMoveVec";
            objects: ({
                kind: "Input";
                index: number;
                type?: "object" | "pure" | undefined;
                value?: any;
            } | {
                kind: "GasCoin";
            } | {
                kind: "Result";
                index: number;
            } | {
                kind: "NestedResult";
                index: number;
                resultIndex: number;
            })[];
            type?: {
                None: null;
            } | {
                Some: string;
            } | undefined;
        })[];
        inputs: {
            kind: "Input";
            index: number;
            type?: "object" | "pure" | undefined;
            value?: any;
        }[];
        version: 1;
        gasConfig: {
            payment?: {
                digest: string;
                objectId: string;
                version: string | number;
            }[] | undefined;
            owner?: string | undefined;
            price?: string | undefined;
            budget?: string | undefined;
        };
        sender?: string | undefined;
        expiration?: {
            Epoch: number;
        } | {
            None: true | null;
        } | null | undefined;
    };
    get [TRANSACTION_BRAND](): boolean;
    constructor(transaction?: TransactionBlock);
    /** Returns an argument for the gas coin, to be used in a transaction. */
    get gas(): TransactionArgument;
    /**
     * Add a new object input to the transaction.
     */
    object(value: ObjectId | ObjectCallArg): {
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    };
    /**
     * Add a new non-object input to the transaction.
     */
    pure(
    /**
     * The pure value that will be used as the input value. If this is a Uint8Array, then the value
     * is assumed to be raw bytes, and will be used directly.
     */
    value: unknown, 
    /**
     * The BCS type to serialize the value into. If not provided, the type will automatically be determined
     * based on how the input is used.
     */
    type?: string): {
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    };
    /** Add a transaction to the transaction block. */
    add(transaction: TransactionType): TransactionResult;
    splitCoins(...args: Parameters<(typeof Transactions)['SplitCoins']>): TransactionResult;
    mergeCoins(...args: Parameters<(typeof Transactions)['MergeCoins']>): TransactionResult;
    publish(...args: Parameters<(typeof Transactions)['Publish']>): TransactionResult;
    moveCall(...args: Parameters<(typeof Transactions)['MoveCall']>): TransactionResult;
    transferObjects(...args: Parameters<(typeof Transactions)['TransferObjects']>): TransactionResult;
    makeMoveVec(...args: Parameters<(typeof Transactions)['MakeMoveVec']>): TransactionResult;
    /**
     * Serialize the transaction to a string so that it can be sent to a separate context.
     * This is different from `build` in that it does not serialize to BCS bytes, and instead
     * uses a separate format that is unique to the transaction builder. This allows
     * us to serialize partially-complete transactions, that can then be completed and
     * built in a separate context.
     *
     * For example, a dapp can construct a transaction, but not provide gas objects
     * or a gas budget. The transaction then can be sent to the wallet, where this
     * information is automatically filled in (e.g. by querying for coin objects
     * and performing a dry run).
     */
    serialize(): string;
    /** Build the transaction to BCS bytes. */
    build({ provider, onlyTransactionKind, }?: BuildOptions): Promise<Uint8Array>;
    /** Derive transaction digest */
    getDigest({ provider, }?: {
        provider?: JsonRpcProvider;
    }): Promise<string>;
}
export {};
