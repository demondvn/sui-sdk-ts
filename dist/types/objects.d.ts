import { Infer } from 'superstruct';
import { ObjectId, ObjectOwner, TransactionDigest } from './common';
import { OwnedObjectRef } from './transactions';
export declare const ObjectType: import("superstruct").Struct<string, null>;
export type ObjectType = Infer<typeof ObjectType>;
export declare const SuiObjectRef: import("superstruct").Struct<{
    objectId: string;
    version: string | number;
    digest: string;
}, {
    /** Base64 string representing the object digest */
    digest: import("superstruct").Struct<string, null>;
    /** Hex code as string representing the object id */
    objectId: import("superstruct").Struct<string, null>;
    /** Object version */
    version: import("superstruct").Struct<string | number, null>;
}>;
export type SuiObjectRef = Infer<typeof SuiObjectRef>;
export declare const SuiGasData: import("superstruct").Struct<{
    payment: {
        objectId: string;
        version: string | number;
        digest: string;
    }[];
    owner: string;
    price: number;
    budget: number;
}, {
    payment: import("superstruct").Struct<{
        objectId: string;
        version: string | number;
        digest: string;
    }[], import("superstruct").Struct<{
        objectId: string;
        version: string | number;
        digest: string;
    }, {
        /** Base64 string representing the object digest */
        digest: import("superstruct").Struct<string, null>;
        /** Hex code as string representing the object id */
        objectId: import("superstruct").Struct<string, null>;
        /** Object version */
        version: import("superstruct").Struct<string | number, null>;
    }>>;
    /** Gas Object's owner */
    owner: import("superstruct").Struct<string, null>;
    price: import("superstruct").Struct<number, null>;
    budget: import("superstruct").Struct<number, null>;
}>;
export type SuiGasData = Infer<typeof SuiGasData>;
export declare const SuiObjectInfo: import("superstruct").Struct<{
    type: string;
    objectId: string;
    version: string | number;
    digest: string;
    owner: {
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable";
    previousTransaction: string;
}, {
    type: import("superstruct").Struct<string, null>;
    owner: import("superstruct").Struct<{
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable", null>;
    previousTransaction: import("superstruct").Struct<string, null>;
    objectId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<string | number, null>;
    digest: import("superstruct").Struct<string, null>;
}>;
export type SuiObjectInfo = Infer<typeof SuiObjectInfo>;
export declare const ObjectContentFields: import("superstruct").Struct<Record<string, any>, null>;
export type ObjectContentFields = Infer<typeof ObjectContentFields>;
export declare const MovePackageContent: import("superstruct").Struct<Record<string, string>, null>;
export type MovePackageContent = Infer<typeof MovePackageContent>;
export declare const SuiMoveObject: import("superstruct").Struct<{
    type: string;
    fields: Record<string, any>;
    hasPublicTransfer: boolean;
}, {
    /** Move type (e.g., "0x2::coin::Coin<0x2::sui::SUI>") */
    type: import("superstruct").Struct<string, null>;
    /** Fields and values stored inside the Move object */
    fields: import("superstruct").Struct<Record<string, any>, null>;
    hasPublicTransfer: import("superstruct").Struct<boolean, null>;
}>;
export type SuiMoveObject = Infer<typeof SuiMoveObject>;
export declare const SuiMovePackage: import("superstruct").Struct<{
    disassembled: Record<string, string>;
}, {
    /** A mapping from module name to disassembled Move bytecode */
    disassembled: import("superstruct").Struct<Record<string, string>, null>;
}>;
export type SuiMovePackage = Infer<typeof SuiMovePackage>;
export declare const SuiParsedData: import("superstruct").Struct<{
    type: string;
    fields: Record<string, any>;
    hasPublicTransfer: boolean;
    dataType: "moveObject";
} | {
    disassembled: Record<string, string>;
    dataType: "package";
}, null>;
export type SuiParsedData = Infer<typeof SuiParsedData>;
export declare const SuiRawMoveObject: import("superstruct").Struct<{
    type: string;
    version: number;
    hasPublicTransfer: boolean;
    bcsBytes: number[];
}, {
    /** Move type (e.g., "0x2::coin::Coin<0x2::sui::SUI>") */
    type: import("superstruct").Struct<string, null>;
    hasPublicTransfer: import("superstruct").Struct<boolean, null>;
    version: import("superstruct").Struct<number, null>;
    bcsBytes: import("superstruct").Struct<number[], import("superstruct").Struct<number, null>>;
}>;
export type SuiRawMoveObject = Infer<typeof SuiRawMoveObject>;
export declare const SuiRawMovePackage: import("superstruct").Struct<{
    id: string;
    moduleMap: Record<string, string>;
}, {
    id: import("superstruct").Struct<string, null>;
    /** A mapping from module name to Move bytecode enocded in base64*/
    moduleMap: import("superstruct").Struct<Record<string, string>, null>;
}>;
export type SuiRawMovePackage = Infer<typeof SuiRawMovePackage>;
export declare const SuiRawData: import("superstruct").Struct<{
    type: string;
    fields: Record<string, any>;
    hasPublicTransfer: boolean;
    dataType: "moveObject";
} | {
    id: string;
    dataType: "package";
    moduleMap: Record<string, string>;
}, null>;
export type SuiRawData = Infer<typeof SuiRawData>;
export declare const MIST_PER_SUI: bigint;
export declare const ObjectDigest: import("superstruct").Struct<string, null>;
export type ObjectDigest = Infer<typeof ObjectDigest>;
export declare const SuiObjectData: import("superstruct").Struct<{
    objectId: string;
    version: number;
    digest: string;
    type?: string | undefined;
    bcs?: {
        type: string;
        fields: Record<string, any>;
        hasPublicTransfer: boolean;
        dataType: "moveObject";
    } | {
        id: string;
        dataType: "package";
        moduleMap: Record<string, string>;
    } | undefined;
    owner?: {
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable" | undefined;
    storageRebate?: number | undefined;
    previousTransaction?: string | undefined;
    content?: {
        type: string;
        fields: Record<string, any>;
        hasPublicTransfer: boolean;
        dataType: "moveObject";
    } | {
        disassembled: Record<string, string>;
        dataType: "package";
    } | undefined;
    display?: Record<string, string> | undefined;
}, {
    objectId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<number, null>;
    digest: import("superstruct").Struct<string, null>;
    /**
     * Type of the object, default to be undefined unless SuiObjectDataOptions.showType is set to true
     */
    type: import("superstruct").Struct<string | undefined, null>;
    /**
     * Move object content or package content, default to be undefined unless SuiObjectDataOptions.showContent is set to true
     */
    content: import("superstruct").Struct<{
        type: string;
        fields: Record<string, any>;
        hasPublicTransfer: boolean;
        dataType: "moveObject";
    } | {
        disassembled: Record<string, string>;
        dataType: "package";
    } | undefined, null>;
    /**
     * Move object content or package content in BCS bytes, default to be undefined unless SuiObjectDataOptions.showBcs is set to true
     */
    bcs: import("superstruct").Struct<{
        type: string;
        fields: Record<string, any>;
        hasPublicTransfer: boolean;
        dataType: "moveObject";
    } | {
        id: string;
        dataType: "package";
        moduleMap: Record<string, string>;
    } | undefined, null>;
    /**
     * The owner of this object. Default to be undefined unless SuiObjectDataOptions.showOwner is set to true
     */
    owner: import("superstruct").Struct<{
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable" | undefined, null>;
    /**
     * The digest of the transaction that created or last mutated this object.
     * Default to be undefined unless SuiObjectDataOptions.showPreviousTransaction is set to true
     */
    previousTransaction: import("superstruct").Struct<string | undefined, null>;
    /**
     * The amount of SUI we would rebate if this object gets deleted.
     * This number is re-calculated each time the object is mutated based on
     * the present storage gas price.
     * Default to be undefined unless SuiObjectDataOptions.showStorageRebate is set to true
     */
    storageRebate: import("superstruct").Struct<number | undefined, null>;
    /**
     * Display metadata for this object, default to be undefined unless SuiObjectDataOptions.showDisplay is set to true
     * This can also be None if the struct type does not have Display defined
     * See more details in https://forums.sui.io/t/nft-object-display-proposal/4872
     */
    display: import("superstruct").Struct<Record<string, string> | undefined, null>;
}>;
export type SuiObjectData = Infer<typeof SuiObjectData>;
/**
 * Config for fetching object data
 */
export declare const SuiObjectDataOptions: import("superstruct").Struct<{
    showType?: boolean | undefined;
    showContent?: boolean | undefined;
    showBcs?: boolean | undefined;
    showOwner?: boolean | undefined;
    showPreviousTransaction?: boolean | undefined;
    showStorageRebate?: boolean | undefined;
    showDisplay?: boolean | undefined;
}, {
    showType: import("superstruct").Struct<boolean | undefined, null>;
    showContent: import("superstruct").Struct<boolean | undefined, null>;
    showBcs: import("superstruct").Struct<boolean | undefined, null>;
    showOwner: import("superstruct").Struct<boolean | undefined, null>;
    showPreviousTransaction: import("superstruct").Struct<boolean | undefined, null>;
    showStorageRebate: import("superstruct").Struct<boolean | undefined, null>;
    showDisplay: import("superstruct").Struct<boolean | undefined, null>;
}>;
export type SuiObjectDataOptions = Infer<typeof SuiObjectDataOptions>;
export declare const ObjectStatus: import("superstruct").Struct<"Exists" | "NotExists" | "Deleted", null>;
export type ObjectStatus = Infer<typeof ObjectStatus>;
export declare const GetOwnedObjectsResponse: import("superstruct").Struct<{
    type: string;
    objectId: string;
    version: string | number;
    digest: string;
    owner: {
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable";
    previousTransaction: string;
}[], import("superstruct").Struct<{
    type: string;
    objectId: string;
    version: string | number;
    digest: string;
    owner: {
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable";
    previousTransaction: string;
}, {
    type: import("superstruct").Struct<string, null>;
    owner: import("superstruct").Struct<{
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable", null>;
    previousTransaction: import("superstruct").Struct<string, null>;
    objectId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<string | number, null>;
    digest: import("superstruct").Struct<string, null>;
}>>;
export type GetOwnedObjectsResponse = Infer<typeof GetOwnedObjectsResponse>;
export declare const SuiObjectResponseError: import("superstruct").Struct<{
    tag: string;
    version?: number | undefined;
    digest?: string | undefined;
    object_id?: string | undefined;
}, {
    tag: import("superstruct").Struct<string, null>;
    object_id: import("superstruct").Struct<string | undefined, null>;
    version: import("superstruct").Struct<number | undefined, null>;
    digest: import("superstruct").Struct<string | undefined, null>;
}>;
export type SuiObjectResponseError = Infer<typeof SuiObjectResponseError>;
export declare const SuiObjectResponse: import("superstruct").Struct<{
    data?: {
        objectId: string;
        version: number;
        digest: string;
        type?: string | undefined;
        bcs?: {
            type: string;
            fields: Record<string, any>;
            hasPublicTransfer: boolean;
            dataType: "moveObject";
        } | {
            id: string;
            dataType: "package";
            moduleMap: Record<string, string>;
        } | undefined;
        owner?: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable" | undefined;
        storageRebate?: number | undefined;
        previousTransaction?: string | undefined;
        content?: {
            type: string;
            fields: Record<string, any>;
            hasPublicTransfer: boolean;
            dataType: "moveObject";
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        } | undefined;
        display?: Record<string, string> | undefined;
    } | undefined;
    error?: {
        tag: string;
        version?: number | undefined;
        digest?: string | undefined;
        object_id?: string | undefined;
    } | undefined;
}, {
    data: import("superstruct").Struct<{
        objectId: string;
        version: number;
        digest: string;
        type?: string | undefined;
        bcs?: {
            type: string;
            fields: Record<string, any>;
            hasPublicTransfer: boolean;
            dataType: "moveObject";
        } | {
            id: string;
            dataType: "package";
            moduleMap: Record<string, string>;
        } | undefined;
        owner?: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable" | undefined;
        storageRebate?: number | undefined;
        previousTransaction?: string | undefined;
        content?: {
            type: string;
            fields: Record<string, any>;
            hasPublicTransfer: boolean;
            dataType: "moveObject";
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        } | undefined;
        display?: Record<string, string> | undefined;
    } | undefined, {
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
        digest: import("superstruct").Struct<string, null>;
        /**
         * Type of the object, default to be undefined unless SuiObjectDataOptions.showType is set to true
         */
        type: import("superstruct").Struct<string | undefined, null>;
        /**
         * Move object content or package content, default to be undefined unless SuiObjectDataOptions.showContent is set to true
         */
        content: import("superstruct").Struct<{
            type: string;
            fields: Record<string, any>;
            hasPublicTransfer: boolean;
            dataType: "moveObject";
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        } | undefined, null>;
        /**
         * Move object content or package content in BCS bytes, default to be undefined unless SuiObjectDataOptions.showBcs is set to true
         */
        bcs: import("superstruct").Struct<{
            type: string;
            fields: Record<string, any>;
            hasPublicTransfer: boolean;
            dataType: "moveObject";
        } | {
            id: string;
            dataType: "package";
            moduleMap: Record<string, string>;
        } | undefined, null>;
        /**
         * The owner of this object. Default to be undefined unless SuiObjectDataOptions.showOwner is set to true
         */
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable" | undefined, null>;
        /**
         * The digest of the transaction that created or last mutated this object.
         * Default to be undefined unless SuiObjectDataOptions.showPreviousTransaction is set to true
         */
        previousTransaction: import("superstruct").Struct<string | undefined, null>;
        /**
         * The amount of SUI we would rebate if this object gets deleted.
         * This number is re-calculated each time the object is mutated based on
         * the present storage gas price.
         * Default to be undefined unless SuiObjectDataOptions.showStorageRebate is set to true
         */
        storageRebate: import("superstruct").Struct<number | undefined, null>;
        /**
         * Display metadata for this object, default to be undefined unless SuiObjectDataOptions.showDisplay is set to true
         * This can also be None if the struct type does not have Display defined
         * See more details in https://forums.sui.io/t/nft-object-display-proposal/4872
         */
        display: import("superstruct").Struct<Record<string, string> | undefined, null>;
    }>;
    error: import("superstruct").Struct<{
        tag: string;
        version?: number | undefined;
        digest?: string | undefined;
        object_id?: string | undefined;
    } | undefined, {
        tag: import("superstruct").Struct<string, null>;
        object_id: import("superstruct").Struct<string | undefined, null>;
        version: import("superstruct").Struct<number | undefined, null>;
        digest: import("superstruct").Struct<string | undefined, null>;
    }>;
}>;
export type SuiObjectResponse = Infer<typeof SuiObjectResponse>;
export type Order = 'ascending' | 'descending';
export declare function getSuiObjectData(resp: SuiObjectResponse): SuiObjectData | undefined;
export declare function getObjectDeletedResponse(resp: SuiObjectResponse): SuiObjectRef | undefined;
export declare function getObjectNotExistsResponse(resp: SuiObjectResponse): ObjectId | undefined;
export declare function getObjectReference(resp: SuiObjectResponse | OwnedObjectRef): SuiObjectRef | undefined;
export declare function getObjectId(data: SuiObjectResponse | SuiObjectRef | OwnedObjectRef): ObjectId;
export declare function getObjectVersion(data: SuiObjectResponse | SuiObjectRef | SuiObjectData): string | number | undefined;
export declare function isSuiObjectResponse(resp: SuiObjectResponse | SuiObjectData): resp is SuiObjectResponse;
/**
 * Deriving the object type from the object response
 * @returns 'package' if the object is a package, move object type(e.g., 0x2::coin::Coin<0x2::sui::SUI>)
 * if the object is a move object
 */
export declare function getObjectType(resp: SuiObjectResponse | SuiObjectData): ObjectType | undefined;
export declare function getObjectPreviousTransactionDigest(resp: SuiObjectResponse): TransactionDigest | undefined;
export declare function getObjectOwner(resp: SuiObjectResponse | ObjectOwner): ObjectOwner | undefined;
export declare function getObjectDisplay(resp: SuiObjectResponse): Record<string, string> | undefined;
export declare function getSharedObjectInitialVersion(resp: SuiObjectResponse | ObjectOwner): number | undefined;
export declare function isSharedObject(resp: SuiObjectResponse | ObjectOwner): boolean;
export declare function isImmutableObject(resp: SuiObjectResponse | ObjectOwner): boolean;
export declare function getMoveObjectType(resp: SuiObjectResponse): string | undefined;
export declare function getObjectFields(resp: SuiObjectResponse | SuiMoveObject | SuiObjectData): ObjectContentFields | undefined;
export interface SuiObjectDataWithContent extends SuiObjectData {
    content: SuiParsedData;
}
export declare function getMoveObject(data: SuiObjectResponse | SuiObjectData): SuiMoveObject | undefined;
export declare function hasPublicTransfer(data: SuiObjectResponse | SuiObjectData): boolean;
export declare function getMovePackageContent(data: SuiObjectResponse | SuiMovePackage): MovePackageContent | undefined;
export declare const CheckpointedObjectId: import("superstruct").Struct<{
    objectId: string;
    atCheckpoint?: number | undefined;
}, {
    objectId: import("superstruct").Struct<string, null>;
    atCheckpoint: import("superstruct").Struct<number | undefined, null>;
}>;
export type CheckpointedObjectId = Infer<typeof CheckpointedObjectId>;
export declare const PaginatedObjectsResponse: import("superstruct").Struct<{
    data: {
        data?: {
            objectId: string;
            version: number;
            digest: string;
            type?: string | undefined;
            bcs?: {
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                id: string;
                dataType: "package";
                moduleMap: Record<string, string>;
            } | undefined;
            owner?: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable" | undefined;
            storageRebate?: number | undefined;
            previousTransaction?: string | undefined;
            content?: {
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            } | undefined;
            display?: Record<string, string> | undefined;
        } | undefined;
        error?: {
            tag: string;
            version?: number | undefined;
            digest?: string | undefined;
            object_id?: string | undefined;
        } | undefined;
    }[];
    nextCursor: {
        objectId: string;
        atCheckpoint?: number | undefined;
    } | null;
    hasNextPage: boolean;
}, {
    data: import("superstruct").Struct<{
        data?: {
            objectId: string;
            version: number;
            digest: string;
            type?: string | undefined;
            bcs?: {
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                id: string;
                dataType: "package";
                moduleMap: Record<string, string>;
            } | undefined;
            owner?: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable" | undefined;
            storageRebate?: number | undefined;
            previousTransaction?: string | undefined;
            content?: {
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            } | undefined;
            display?: Record<string, string> | undefined;
        } | undefined;
        error?: {
            tag: string;
            version?: number | undefined;
            digest?: string | undefined;
            object_id?: string | undefined;
        } | undefined;
    }[], import("superstruct").Struct<{
        data?: {
            objectId: string;
            version: number;
            digest: string;
            type?: string | undefined;
            bcs?: {
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                id: string;
                dataType: "package";
                moduleMap: Record<string, string>;
            } | undefined;
            owner?: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable" | undefined;
            storageRebate?: number | undefined;
            previousTransaction?: string | undefined;
            content?: {
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            } | undefined;
            display?: Record<string, string> | undefined;
        } | undefined;
        error?: {
            tag: string;
            version?: number | undefined;
            digest?: string | undefined;
            object_id?: string | undefined;
        } | undefined;
    }, {
        data: import("superstruct").Struct<{
            objectId: string;
            version: number;
            digest: string;
            type?: string | undefined;
            bcs?: {
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                id: string;
                dataType: "package";
                moduleMap: Record<string, string>;
            } | undefined;
            owner?: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable" | undefined;
            storageRebate?: number | undefined;
            previousTransaction?: string | undefined;
            content?: {
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            } | undefined;
            display?: Record<string, string> | undefined;
        } | undefined, {
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
            digest: import("superstruct").Struct<string, null>;
            /**
             * Type of the object, default to be undefined unless SuiObjectDataOptions.showType is set to true
             */
            type: import("superstruct").Struct<string | undefined, null>;
            /**
             * Move object content or package content, default to be undefined unless SuiObjectDataOptions.showContent is set to true
             */
            content: import("superstruct").Struct<{
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            } | undefined, null>;
            /**
             * Move object content or package content in BCS bytes, default to be undefined unless SuiObjectDataOptions.showBcs is set to true
             */
            bcs: import("superstruct").Struct<{
                type: string;
                fields: Record<string, any>;
                hasPublicTransfer: boolean;
                dataType: "moveObject";
            } | {
                id: string;
                dataType: "package";
                moduleMap: Record<string, string>;
            } | undefined, null>;
            /**
             * The owner of this object. Default to be undefined unless SuiObjectDataOptions.showOwner is set to true
             */
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable" | undefined, null>;
            /**
             * The digest of the transaction that created or last mutated this object.
             * Default to be undefined unless SuiObjectDataOptions.showPreviousTransaction is set to true
             */
            previousTransaction: import("superstruct").Struct<string | undefined, null>;
            /**
             * The amount of SUI we would rebate if this object gets deleted.
             * This number is re-calculated each time the object is mutated based on
             * the present storage gas price.
             * Default to be undefined unless SuiObjectDataOptions.showStorageRebate is set to true
             */
            storageRebate: import("superstruct").Struct<number | undefined, null>;
            /**
             * Display metadata for this object, default to be undefined unless SuiObjectDataOptions.showDisplay is set to true
             * This can also be None if the struct type does not have Display defined
             * See more details in https://forums.sui.io/t/nft-object-display-proposal/4872
             */
            display: import("superstruct").Struct<Record<string, string> | undefined, null>;
        }>;
        error: import("superstruct").Struct<{
            tag: string;
            version?: number | undefined;
            digest?: string | undefined;
            object_id?: string | undefined;
        } | undefined, {
            tag: import("superstruct").Struct<string, null>;
            object_id: import("superstruct").Struct<string | undefined, null>;
            version: import("superstruct").Struct<number | undefined, null>;
            digest: import("superstruct").Struct<string | undefined, null>;
        }>;
    }>>;
    nextCursor: import("superstruct").Struct<{
        objectId: string;
        atCheckpoint?: number | undefined;
    } | null, {
        objectId: import("superstruct").Struct<string, null>;
        atCheckpoint: import("superstruct").Struct<number | undefined, null>;
    }>;
    hasNextPage: import("superstruct").Struct<boolean, null>;
}>;
export type PaginatedObjectsResponse = Infer<typeof PaginatedObjectsResponse>;
export type SuiObjectDataFilter = {
    Package: ObjectId;
} | {
    MoveModule: {
        package: ObjectId;
        module: string;
    };
} | {
    StructType: string;
};
export type SuiObjectResponseQuery = {
    filter?: SuiObjectDataFilter;
    options?: SuiObjectDataOptions;
};
