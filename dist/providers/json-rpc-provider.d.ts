import { HttpHeaders, JsonRpcClient } from '../rpc/client';
import { ExecuteTransactionRequestType, ObjectId, PaginatedTransactionResponse, SubscriptionId, SuiAddress, SuiEventFilter, SuiMoveFunctionArgTypes, SuiMoveNormalizedFunction, SuiMoveNormalizedModule, SuiMoveNormalizedModules, SuiMoveNormalizedStruct, SuiTransactionBlockResponse, TransactionDigest, SuiTransactionBlockResponseQuery, RpcApiVersion, PaginatedEvents, FaucetResponse, Order, DevInspectResults, CoinMetadata, PaginatedCoins, SuiObjectResponse, DelegatedStake, CoinBalance, CoinSupply, CheckpointDigest, Checkpoint, CommitteeInfo, DryRunTransactionBlockResponse, SuiObjectDataOptions, SuiSystemStateSummary, SuiTransactionBlockResponseOptions, SuiEvent, PaginatedObjectsResponse, SuiObjectResponseQuery } from '../types';
import { DynamicFieldName, DynamicFieldPage } from '../types/dynamic_fields';
import { WebsocketClient, WebsocketClientOptions } from '../rpc/websocket-client';
import { SerializedSignature } from '../cryptography/signature';
import { Connection } from '../rpc/connection';
import { TransactionBlock } from '../builder';
import { CheckpointPage } from '../types/checkpoints';
import { EpochInfo, EpochPage } from '../types/epochs';
export declare const TARGETED_RPC_VERSION = "0.29.0";
export interface PaginationArguments<Cursor> {
    /** Optional paging cursor */
    cursor?: Cursor;
    /** Maximum item returned per page */
    limit?: number | null;
}
export interface OrderArguments {
    order?: Order | null;
}
/**
 * Configuration options for the JsonRpcProvider. If the value of a field is not provided,
 * value in `DEFAULT_OPTIONS` for that field will be used
 */
export type RpcProviderOptions = {
    /**
     * Default to `true`. If set to `false`, the rpc
     * client will throw an error if the responses from the RPC server do not
     * conform to the schema defined in the TypeScript SDK. If set to `true`, the
     * rpc client will log the mismatch as a warning message instead of throwing an
     * error. The mismatches often happen when the SDK is in a different version than
     * the RPC server. Skipping the validation can maximize
     * the version compatibility of the SDK, as not all the schema
     * changes in the RPC response will affect the caller, but the caller needs to
     * understand that the data may not match the TypeSrcript definitions.
     */
    skipDataValidation?: boolean;
    /**
     * Configuration options for the websocket connection
     * TODO: Move to connection.
     */
    socketOptions?: WebsocketClientOptions;
    /**
     * Cache timeout in seconds for the RPC API Version
     */
    versionCacheTimeoutInSeconds?: number;
    /** Allow defining a custom RPC client to use */
    rpcClient?: JsonRpcClient;
    /** Allow defining a custom websocket client to use */
    websocketClient?: WebsocketClient;
};
export declare class JsonRpcProvider {
    options: RpcProviderOptions;
    connection: Connection;
    protected client: JsonRpcClient;
    protected wsClient: WebsocketClient;
    private rpcApiVersion;
    private cacheExpiry;
    /**
     * Establish a connection to a Sui RPC endpoint
     *
     * @param connection The `Connection` object containing configuration for the network.
     * @param options configuration options for the provider
     */
    constructor(connection?: Connection, options?: RpcProviderOptions);
    getRpcApiVersion(): Promise<RpcApiVersion | undefined>;
    requestSuiFromFaucet(recipient: SuiAddress, httpHeaders?: HttpHeaders): Promise<FaucetResponse>;
    /**
     * Get all Coin<`coin_type`> objects owned by an address.
     */
    getCoins(input: {
        owner: SuiAddress;
        coinType?: string | null;
        cursor?: ObjectId | null;
        limit?: number | null;
    }): Promise<PaginatedCoins>;
    /**
     * Get all Coin objects owned by an address.
     */
    getAllCoins(input: {
        owner: SuiAddress;
    } & PaginationArguments<PaginatedCoins['nextCursor']>): Promise<PaginatedCoins>;
    /**
     * Get the total coin balance for one coin type, owned by the address owner.
     */
    getBalance(input: {
        owner: SuiAddress;
        /** optional fully qualified type names for the coin (e.g., 0x168da5bf1f48dafc111b0a488fa454aca95e0b5e::usdc::USDC), default to 0x2::sui::SUI if not specified. */
        coinType?: string | null;
    }): Promise<CoinBalance>;
    /**
     * Get the total coin balance for all coin type, owned by the address owner.
     */
    getAllBalances(input: {
        owner: SuiAddress;
    }): Promise<CoinBalance[]>;
    /**
     * Fetch CoinMetadata for a given coin type
     */
    getCoinMetadata(input: {
        coinType: string;
    }): Promise<CoinMetadata>;
    /**
     *  Fetch total supply for a coin
     */
    getTotalSupply(input: {
        coinType: string;
    }): Promise<CoinSupply>;
    /**
     * Invoke any RPC method
     * @param method the method to be invoked
     * @param args the arguments to be passed to the RPC request
     */
    call(method: string, args: Array<any>): Promise<any>;
    /**
     * Get Move function argument types like read, write and full access
     */
    getMoveFunctionArgTypes(input: {
        package: string;
        module: string;
        function: string;
    }): Promise<SuiMoveFunctionArgTypes>;
    /**
     * Get a map from module name to
     * structured representations of Move modules
     */
    getNormalizedMoveModulesByPackage(input: {
        package: string;
    }): Promise<SuiMoveNormalizedModules>;
    /**
     * Get a structured representation of Move module
     */
    getNormalizedMoveModule(input: {
        package: string;
        module: string;
    }): Promise<SuiMoveNormalizedModule>;
    /**
     * Get a structured representation of Move function
     */
    getNormalizedMoveFunction(input: {
        package: string;
        module: string;
        function: string;
    }): Promise<SuiMoveNormalizedFunction>;
    /**
     * Get a structured representation of Move struct
     */
    getNormalizedMoveStruct(input: {
        package: string;
        module: string;
        struct: string;
    }): Promise<SuiMoveNormalizedStruct>;
    /**
     * Get all objects owned by an address
     */
    getOwnedObjects(input: {
        owner: SuiAddress;
    } & PaginationArguments<PaginatedObjectsResponse['nextCursor']> & SuiObjectResponseQuery): Promise<PaginatedObjectsResponse>;
    /**
     * Get details about an object
     */
    getObject(input: {
        id: ObjectId;
        options?: SuiObjectDataOptions;
    }): Promise<SuiObjectResponse>;
    /**
     * Batch get details about a list of objects. If any of the object ids are duplicates the call will fail
     */
    multiGetObjects(input: {
        ids: ObjectId[];
        options?: SuiObjectDataOptions;
    }): Promise<SuiObjectResponse[]>;
    /**
     * Get transaction blocks for a given query criteria
     */
    queryTransactionBlocks(input: SuiTransactionBlockResponseQuery & PaginationArguments<PaginatedTransactionResponse['nextCursor']> & OrderArguments): Promise<PaginatedTransactionResponse>;
    getTransactionBlock(input: {
        digest: TransactionDigest;
        options?: SuiTransactionBlockResponseOptions;
    }): Promise<SuiTransactionBlockResponse>;
    multiGetTransactionBlocks(input: {
        digests: TransactionDigest[];
        options?: SuiTransactionBlockResponseOptions;
    }): Promise<SuiTransactionBlockResponse[]>;
    executeTransactionBlock(input: {
        transactionBlock: Uint8Array | string;
        signature: SerializedSignature | SerializedSignature[];
        options?: SuiTransactionBlockResponseOptions;
        requestType?: ExecuteTransactionRequestType;
    }): Promise<SuiTransactionBlockResponse>;
    /**
     * Get total number of transactions
     */
    getTotalTransactionBlocks(): Promise<bigint>;
    /**
     * Getting the reference gas price for the network
     */
    getReferenceGasPrice(): Promise<bigint>;
    /**
     * Return the delegated stakes for an address
     */
    getStakes(input: {
        owner: SuiAddress;
    }): Promise<DelegatedStake[]>;
    /**
     * Return the delegated stakes queried by id.
     */
    getStakesByIds(input: {
        stakedSuiIds: ObjectId[];
    }): Promise<DelegatedStake[]>;
    /**
     * Return the latest system state content.
     */
    getLatestSuiSystemState(): Promise<SuiSystemStateSummary>;
    /**
     * Get events for a given query criteria
     */
    queryEvents(input: {
        /** the event query criteria. */
        query: SuiEventFilter;
    } & PaginationArguments<PaginatedEvents['nextCursor']> & OrderArguments): Promise<PaginatedEvents>;
    /**
     * Subscribe to get notifications whenever an event matching the filter occurs
     */
    subscribeEvent(input: {
        /** filter describing the subset of events to follow */
        filter: SuiEventFilter;
        /** function to run when we receive a notification of a new event matching the filter */
        onMessage: (event: SuiEvent) => void;
    }): Promise<SubscriptionId>;
    /**
     * Unsubscribe from an event subscription
     */
    unsubscribeEvent(input: {
        /** subscription id to unsubscribe from (previously received from subscribeEvent)*/
        id: SubscriptionId;
    }): Promise<boolean>;
    /**
     * Runs the transaction block in dev-inpsect mode. Which allows for nearly any
     * transaction (or Move call) with any arguments. Detailed results are
     * provided, including both the transaction effects and any return values.
     */
    devInspectTransactionBlock(input: {
        transactionBlock: TransactionBlock | string | Uint8Array;
        sender: SuiAddress;
        /** Default to use the network reference gas price stored in the Sui System State object */
        gasPrice?: bigint | number | null;
        /** optional. Default to use the current epoch number stored in the Sui System State object */
        epoch?: number | null;
    }): Promise<DevInspectResults>;
    /**
     * Dry run a transaction block and return the result.
     */
    dryRunTransactionBlock(input: {
        transactionBlock: Uint8Array | string;
    }): Promise<DryRunTransactionBlockResponse>;
    /**
     * Return the list of dynamic field objects owned by an object
     */
    getDynamicFields(input: {
        /** The id of the parent object */
        parentId: ObjectId;
    } & PaginationArguments<DynamicFieldPage['nextCursor']>): Promise<DynamicFieldPage>;
    /**
     * Return the dynamic field object information for a specified object
     */
    getDynamicFieldObject(input: {
        /** The ID of the quered parent object */
        parentId: ObjectId;
        /** The name of the dynamic field */
        name: string | DynamicFieldName;
    }): Promise<SuiObjectResponse>;
    /**
     * Get the sequence number of the latest checkpoint that has been executed
     */
    getLatestCheckpointSequenceNumber(): Promise<string>;
    /**
     * Returns information about a given checkpoint
     */
    getCheckpoint(input: {
        /** The checkpoint digest or sequence number */
        id: CheckpointDigest | string;
    }): Promise<Checkpoint>;
    /**
     * Returns historical checkpoints paginated
     */
    getCheckpoints(input: {
        /**
         * An optional paging cursor. If provided, the query will start from the next item after the specified cursor.
         * Default to start from the first item if not specified.
         */
        cursor?: string;
        /** Maximum item returned per page, default to 100 if not specified. */
        limit?: number;
        /** query result ordering, default to false (ascending order), oldest record first */
        descendingOrder: boolean;
    }): Promise<CheckpointPage>;
    /**
     * Return the committee information for the asked epoch
     */
    getCommitteeInfo(input?: {
        /** The epoch of interest. If null, default to the latest epoch */
        epoch?: number;
    }): Promise<CommitteeInfo>;
    getNetworkMetrics(): Promise<{
        currentTps: number;
        tps30Days: number;
        currentCheckpoint: number;
        currentEpoch: number;
        totalAddresses: number;
        totalObjects: number;
        totalPackages: number;
    }>;
    /**
     * Return the committee information for the asked epoch
     */
    getEpochs(input?: {
        cursor?: number;
        limit?: number;
        descendingOrder?: boolean;
    }): Promise<EpochPage>;
    /**
     * Return the committee information for the asked epoch
     */
    getCurrentEpoch(): Promise<EpochInfo>;
}
