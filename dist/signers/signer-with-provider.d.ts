import { TransactionBlock } from '../builder';
import { SerializedSignature } from '../cryptography/signature';
import { JsonRpcProvider } from '../providers/json-rpc-provider';
import { HttpHeaders } from '../rpc/client';
import { ExecuteTransactionRequestType, FaucetResponse, SuiAddress, DevInspectResults, DryRunTransactionBlockResponse, SuiTransactionBlockResponse, SuiTransactionBlockResponseOptions } from '../types';
import { Signer } from './signer';
import { SignedTransaction, SignedMessage } from './types';
export declare abstract class SignerWithProvider implements Signer {
    readonly provider: JsonRpcProvider;
    abstract getAddress(): Promise<SuiAddress>;
    /**
     * Returns the signature for the data and the public key of the signer
     */
    abstract signData(data: Uint8Array): Promise<SerializedSignature>;
    abstract connect(provider: JsonRpcProvider): SignerWithProvider;
    /**
     * Request gas tokens from a faucet server and send to the signer
     * address
     * @param httpHeaders optional request headers
     */
    requestSuiFromFaucet(httpHeaders?: HttpHeaders): Promise<FaucetResponse>;
    constructor(provider: JsonRpcProvider);
    /**
     * Sign a message using the keypair, with the `PersonalMessage` intent.
     */
    signMessage(input: {
        message: Uint8Array;
    }): Promise<SignedMessage>;
    /**
     * Sign a transaction.
     */
    signTransactionBlock(input: {
        transactionBlock: Uint8Array | TransactionBlock;
    }): Promise<SignedTransaction>;
    /**
     * Sign a transaction block and submit to the Fullnode for execution.
     *
     * @param options specify which fields to return (e.g., transaction, effects, events, etc).
     * By default, only the transaction digest will be returned.
     * @param requestType WaitForEffectsCert or WaitForLocalExecution, see details in `ExecuteTransactionRequestType`.
     * Defaults to `WaitForLocalExecution` if options.show_effects or options.show_events is true
     */
    signAndExecuteTransactionBlock(input: {
        transactionBlock: Uint8Array | TransactionBlock;
        /** specify which fields to return (e.g., transaction, effects, events, etc). By default, only the transaction digest will be returned. */
        options?: SuiTransactionBlockResponseOptions;
        /** `WaitForEffectsCert` or `WaitForLocalExecution`, see details in `ExecuteTransactionRequestType`.
         * Defaults to `WaitForLocalExecution` if options.show_effects or options.show_events is true
         */
        requestType?: ExecuteTransactionRequestType;
    }): Promise<SuiTransactionBlockResponse>;
    /**
     * Derive transaction digest from
     * @param tx BCS serialized transaction data or a `Transaction` object
     * @returns transaction digest
     */
    getTransactionBlockDigest(tx: Uint8Array | TransactionBlock): Promise<string>;
    /**
     * Runs the transaction in dev-inpsect mode. Which allows for nearly any
     * transaction (or Move call) with any arguments. Detailed results are
     * provided, including both the transaction effects and any return values.
     */
    devInspectTransactionBlock(input: Omit<Parameters<JsonRpcProvider['devInspectTransactionBlock']>[0], 'sender'>): Promise<DevInspectResults>;
    /**
     * Dry run a transaction and return the result.
     */
    dryRunTransactionBlock(input: {
        transactionBlock: TransactionBlock | string | Uint8Array;
    }): Promise<DryRunTransactionBlockResponse>;
    /**
     * Returns the estimated gas cost for the transaction
     * @param tx The transaction to estimate the gas cost. When string it is assumed it's a serialized tx in base64
     * @returns total gas cost estimation
     * @throws whens fails to estimate the gas cost
     */
    getGasCostEstimation(...args: Parameters<SignerWithProvider['dryRunTransactionBlock']>): Promise<bigint>;
}
