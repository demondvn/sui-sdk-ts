"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ADD_STAKE_FUN_NAME: () => ADD_STAKE_FUN_NAME,
  ADD_STAKE_LOCKED_COIN_FUN_NAME: () => ADD_STAKE_LOCKED_COIN_FUN_NAME,
  ARGUMENT: () => ARGUMENT,
  ARGUMENT_INNER: () => ARGUMENT_INNER,
  AppId: () => AppId,
  AuthorityName: () => AuthorityName,
  AuthorityQuorumSignInfo: () => AuthorityQuorumSignInfo,
  AuthoritySignature: () => AuthoritySignature,
  Balance: () => Balance,
  BalanceChange: () => BalanceChange,
  BuilderCallArg: () => BuilderCallArg,
  CALL_ARG: () => CALL_ARG,
  COIN_TYPE_ARG_REGEX: () => COIN_TYPE_ARG_REGEX,
  Checkpoint: () => Checkpoint,
  CheckpointDigest: () => CheckpointDigest,
  CheckpointedObjectId: () => CheckpointedObjectId,
  Coin: () => Coin,
  CoinBalance: () => CoinBalance,
  CoinMetadataStruct: () => CoinMetadataStruct,
  CoinStruct: () => CoinStruct,
  CoinSupply: () => CoinSupply,
  CommitteeInfo: () => CommitteeInfo,
  Connection: () => Connection,
  Contents: () => Contents,
  ContentsFields: () => ContentsFields,
  ContentsFieldsWithdraw: () => ContentsFieldsWithdraw,
  DEFAULT_CLIENT_OPTIONS: () => DEFAULT_CLIENT_OPTIONS,
  DEFAULT_ED25519_DERIVATION_PATH: () => DEFAULT_ED25519_DERIVATION_PATH,
  DEFAULT_SECP256K1_DERIVATION_PATH: () => DEFAULT_SECP256K1_DERIVATION_PATH,
  DelegatedStake: () => DelegatedStake,
  Delegation: () => Delegation,
  DelegationStakingPool: () => DelegationStakingPool,
  DelegationStakingPoolFields: () => DelegationStakingPoolFields,
  DevInspectResults: () => DevInspectResults,
  DryRunTransactionBlockResponse: () => DryRunTransactionBlockResponse,
  ENUM_KIND: () => ENUM_KIND,
  Ed25519Keypair: () => Ed25519Keypair,
  Ed25519PublicKey: () => Ed25519PublicKey,
  EpochId: () => EpochId,
  ErrorResponse: () => ErrorResponse,
  EventId: () => EventId,
  ExecutionStatus: () => ExecutionStatus,
  ExecutionStatusType: () => ExecutionStatusType,
  FaucetCoinInfo: () => FaucetCoinInfo,
  FaucetRateLimitError: () => FaucetRateLimitError,
  FaucetResponse: () => FaucetResponse,
  GasCostSummary: () => GasCostSummary2,
  GenericAuthoritySignature: () => GenericAuthoritySignature,
  Genesis: () => Genesis,
  GetOwnedObjectsResponse: () => GetOwnedObjectsResponse,
  ID_STRUCT_NAME: () => ID_STRUCT_NAME,
  Inputs: () => Inputs,
  IntentScope: () => IntentScope,
  IntentVersion: () => IntentVersion,
  JsonRpcClient: () => JsonRpcClient,
  JsonRpcProvider: () => JsonRpcProvider,
  LEGACY_PRIVATE_KEY_SIZE: () => LEGACY_PRIVATE_KEY_SIZE,
  MIST_PER_SUI: () => MIST_PER_SUI,
  MOVE_STDLIB_ADDRESS: () => MOVE_STDLIB_ADDRESS,
  MakeMoveVecTransaction: () => MakeMoveVecTransaction,
  MergeCoinsTransaction: () => MergeCoinsTransaction,
  MoveCallSuiTransaction: () => MoveCallSuiTransaction,
  MoveCallTransaction: () => MoveCallTransaction,
  MovePackageContent: () => MovePackageContent,
  OBJECT_ARG: () => OBJECT_ARG,
  OBJECT_MODULE_NAME: () => OBJECT_MODULE_NAME,
  OPTION: () => OPTION,
  ObjectCallArg: () => ObjectCallArg,
  ObjectContentFields: () => ObjectContentFields,
  ObjectDigest: () => ObjectDigest,
  ObjectId: () => ObjectId,
  ObjectOwner: () => ObjectOwner,
  ObjectStatus: () => ObjectStatus,
  ObjectTransactionArgument: () => ObjectTransactionArgument,
  ObjectType: () => ObjectType,
  OwnedObjectRef: () => OwnedObjectRef,
  PAY_JOIN_COIN_FUNC_NAME: () => PAY_JOIN_COIN_FUNC_NAME,
  PAY_MODULE_NAME: () => PAY_MODULE_NAME,
  PAY_SPLIT_COIN_VEC_FUNC_NAME: () => PAY_SPLIT_COIN_VEC_FUNC_NAME,
  PRIVATE_KEY_SIZE: () => PRIVATE_KEY_SIZE,
  PROGRAMMABLE_CALL: () => PROGRAMMABLE_CALL,
  PROGRAMMABLE_CALL_INNER: () => PROGRAMMABLE_CALL_INNER,
  PROGRAMMABLE_TX_BLOCK: () => PROGRAMMABLE_TX_BLOCK,
  PaginatedCoins: () => PaginatedCoins,
  PaginatedEvents: () => PaginatedEvents,
  PaginatedObjectsResponse: () => PaginatedObjectsResponse,
  PaginatedTransactionResponse: () => PaginatedTransactionResponse,
  ProgrammableTransaction: () => ProgrammableTransaction,
  PublishTransaction: () => PublishTransaction,
  PureCallArg: () => PureCallArg,
  PureTransactionArgument: () => PureTransactionArgument,
  RPCError: () => RPCError,
  RPCValidationError: () => RPCValidationError,
  RawSigner: () => RawSigner,
  SIGNATURE_FLAG_TO_SCHEME: () => SIGNATURE_FLAG_TO_SCHEME,
  SIGNATURE_SCHEME_TO_FLAG: () => SIGNATURE_SCHEME_TO_FLAG,
  SUI_ADDRESS_LENGTH: () => SUI_ADDRESS_LENGTH,
  SUI_CLOCK_OBJECT_ID: () => SUI_CLOCK_OBJECT_ID,
  SUI_FRAMEWORK_ADDRESS: () => SUI_FRAMEWORK_ADDRESS,
  SUI_SYSTEM_ADDRESS: () => SUI_SYSTEM_ADDRESS,
  SUI_SYSTEM_MODULE_NAME: () => SUI_SYSTEM_MODULE_NAME,
  SUI_SYSTEM_STATE_OBJECT_ID: () => SUI_SYSTEM_STATE_OBJECT_ID,
  SUI_TYPE_ARG: () => SUI_TYPE_ARG,
  Secp256k1Keypair: () => Secp256k1Keypair,
  Secp256k1PublicKey: () => Secp256k1PublicKey,
  SequenceNumber: () => SequenceNumber,
  SignerWithProvider: () => SignerWithProvider,
  SplitCoinsTransaction: () => SplitCoinsTransaction,
  StakeObject: () => StakeObject,
  StakeSubsidy: () => StakeSubsidy,
  StakeSubsidyFields: () => StakeSubsidyFields,
  SubscriptionEvent: () => SubscriptionEvent,
  SubscriptionId: () => SubscriptionId,
  SuiAddress: () => SuiAddress,
  SuiArgument: () => SuiArgument,
  SuiCallArg: () => SuiCallArg,
  SuiChangeEpoch: () => SuiChangeEpoch,
  SuiConsensusCommitPrologue: () => SuiConsensusCommitPrologue,
  SuiEvent: () => SuiEvent,
  SuiGasData: () => SuiGasData,
  SuiJsonValue: () => SuiJsonValue,
  SuiMoveAbilitySet: () => SuiMoveAbilitySet,
  SuiMoveFunctionArgType: () => SuiMoveFunctionArgType,
  SuiMoveFunctionArgTypes: () => SuiMoveFunctionArgTypes,
  SuiMoveModuleId: () => SuiMoveModuleId,
  SuiMoveNormalizedField: () => SuiMoveNormalizedField,
  SuiMoveNormalizedFunction: () => SuiMoveNormalizedFunction,
  SuiMoveNormalizedModule: () => SuiMoveNormalizedModule,
  SuiMoveNormalizedModules: () => SuiMoveNormalizedModules,
  SuiMoveNormalizedStruct: () => SuiMoveNormalizedStruct,
  SuiMoveNormalizedStructType: () => SuiMoveNormalizedStructType,
  SuiMoveNormalizedType: () => SuiMoveNormalizedType,
  SuiMoveNormalizedTypeParameterType: () => SuiMoveNormalizedTypeParameterType,
  SuiMoveObject: () => SuiMoveObject,
  SuiMovePackage: () => SuiMovePackage,
  SuiMoveStructTypeParameter: () => SuiMoveStructTypeParameter,
  SuiMoveVisibility: () => SuiMoveVisibility,
  SuiObjectChange: () => SuiObjectChange,
  SuiObjectChangeCreated: () => SuiObjectChangeCreated,
  SuiObjectChangeDeleted: () => SuiObjectChangeDeleted,
  SuiObjectChangeMutated: () => SuiObjectChangeMutated,
  SuiObjectChangePublished: () => SuiObjectChangePublished,
  SuiObjectChangeTransferred: () => SuiObjectChangeTransferred,
  SuiObjectChangeWrapped: () => SuiObjectChangeWrapped,
  SuiObjectData: () => SuiObjectData,
  SuiObjectDataOptions: () => SuiObjectDataOptions,
  SuiObjectInfo: () => SuiObjectInfo,
  SuiObjectRef: () => SuiObjectRef,
  SuiObjectResponse: () => SuiObjectResponse,
  SuiObjectResponseError: () => SuiObjectResponseError,
  SuiParsedData: () => SuiParsedData,
  SuiRawData: () => SuiRawData,
  SuiRawMoveObject: () => SuiRawMoveObject,
  SuiRawMovePackage: () => SuiRawMovePackage,
  SuiSupplyFields: () => SuiSupplyFields,
  SuiSystemStateSummary: () => SuiSystemStateSummary,
  SuiSystemStateUtil: () => SuiSystemStateUtil,
  SuiTransaction: () => SuiTransaction,
  SuiTransactionBlock: () => SuiTransactionBlock,
  SuiTransactionBlockData: () => SuiTransactionBlockData,
  SuiTransactionBlockKind: () => SuiTransactionBlockKind,
  SuiTransactionBlockResponse: () => SuiTransactionBlockResponse,
  SuiTransactionBlockResponseOptions: () => SuiTransactionBlockResponseOptions,
  SuiValidatorSummary: () => SuiValidatorSummary,
  TARGETED_RPC_VERSION: () => TARGETED_RPC_VERSION,
  TRANSACTION: () => TRANSACTION,
  TRANSACTION_INNER: () => TRANSACTION_INNER,
  TYPE_TAG: () => TYPE_TAG,
  TransactionArgument: () => TransactionArgument,
  TransactionBlock: () => TransactionBlock,
  TransactionBlockInput: () => TransactionBlockInput,
  TransactionDigest: () => TransactionDigest,
  TransactionEffects: () => TransactionEffects,
  TransactionEffectsDigest: () => TransactionEffectsDigest,
  TransactionEffectsModifiedAtVersions: () => TransactionEffectsModifiedAtVersions,
  TransactionEventDigest: () => TransactionEventDigest,
  TransactionEvents: () => TransactionEvents,
  TransactionType: () => TransactionType,
  Transactions: () => Transactions,
  TransferObjectsTransaction: () => TransferObjectsTransaction,
  TypeTagSerializer: () => TypeTagSerializer,
  UID_STRUCT_NAME: () => UID_STRUCT_NAME,
  VALIDATORS_EVENTS_QUERY: () => VALIDATORS_EVENTS_QUERY,
  VECTOR: () => VECTOR2,
  ValidResponse: () => ValidResponse,
  Validators: () => Validators,
  WITHDRAW_STAKE_FUN_NAME: () => WITHDRAW_STAKE_FUN_NAME,
  WebsocketClient: () => WebsocketClient,
  assert: () => import_superstruct22.assert,
  bcs: () => bcs,
  bcsForVersion: () => bcsForVersion,
  builder: () => builder,
  bytesEqual: () => bytesEqual,
  devnetConnection: () => devnetConnection,
  extractMutableReference: () => extractMutableReference,
  extractReference: () => extractReference,
  extractStructTag: () => extractStructTag,
  formatAddress: () => formatAddress,
  formatDigest: () => formatDigest,
  fromB64: () => import_bcs20.fromB64,
  fromExportedKeypair: () => fromExportedKeypair,
  fromSerializedSignature: () => fromSerializedSignature,
  getChangeEpochTransaction: () => getChangeEpochTransaction,
  getConsensusCommitPrologueTransaction: () => getConsensusCommitPrologueTransaction,
  getCreatedObjects: () => getCreatedObjects,
  getEventPackage: () => getEventPackage,
  getEventSender: () => getEventSender,
  getEvents: () => getEvents,
  getExecutionStatus: () => getExecutionStatus,
  getExecutionStatusError: () => getExecutionStatusError,
  getExecutionStatusGasSummary: () => getExecutionStatusGasSummary,
  getExecutionStatusType: () => getExecutionStatusType,
  getGasData: () => getGasData,
  getIdFromCallArg: () => getIdFromCallArg,
  getMoveObject: () => getMoveObject,
  getMoveObjectType: () => getMoveObjectType,
  getMovePackageContent: () => getMovePackageContent,
  getNewlyCreatedCoinRefsAfterSplit: () => getNewlyCreatedCoinRefsAfterSplit,
  getObjectChanges: () => getObjectChanges,
  getObjectDeletedResponse: () => getObjectDeletedResponse,
  getObjectDisplay: () => getObjectDisplay,
  getObjectFields: () => getObjectFields,
  getObjectId: () => getObjectId,
  getObjectNotExistsResponse: () => getObjectNotExistsResponse,
  getObjectOwner: () => getObjectOwner,
  getObjectPreviousTransactionDigest: () => getObjectPreviousTransactionDigest,
  getObjectReference: () => getObjectReference,
  getObjectType: () => getObjectType,
  getObjectVersion: () => getObjectVersion,
  getProgrammableTransaction: () => getProgrammableTransaction,
  getPublishedObjectChanges: () => getPublishedObjectChanges,
  getPureSerializationType: () => getPureSerializationType,
  getSharedObjectInitialVersion: () => getSharedObjectInitialVersion,
  getSharedObjectInput: () => getSharedObjectInput,
  getSuiObjectData: () => getSuiObjectData,
  getTimestampFromTransactionResponse: () => getTimestampFromTransactionResponse,
  getTotalGasUsed: () => getTotalGasUsed,
  getTotalGasUsedUpperBound: () => getTotalGasUsedUpperBound,
  getTransaction: () => getTransaction,
  getTransactionDigest: () => getTransactionDigest,
  getTransactionEffects: () => getTransactionEffects,
  getTransactionGasBudget: () => getTransactionGasBudget,
  getTransactionGasObject: () => getTransactionGasObject,
  getTransactionGasPrice: () => getTransactionGasPrice,
  getTransactionKind: () => getTransactionKind,
  getTransactionKindName: () => getTransactionKindName,
  getTransactionSender: () => getTransactionSender,
  getTransactionSignature: () => getTransactionSignature,
  getTransactionType: () => getTransactionType,
  getWebsocketUrl: () => getWebsocketUrl,
  hasPublicTransfer: () => hasPublicTransfer,
  is: () => import_superstruct22.is,
  isImmutableObject: () => isImmutableObject,
  isMutableSharedObjectInput: () => isMutableSharedObjectInput,
  isObjectDataFull: () => isObjectDataFull,
  isPureArg: () => isPureArg,
  isSharedObject: () => isSharedObject,
  isSharedObjectInput: () => isSharedObjectInput,
  isSuiObjectResponse: () => isSuiObjectResponse,
  isTxContext: () => isTxContext,
  isValidBIP32Path: () => isValidBIP32Path,
  isValidHardenedPath: () => isValidHardenedPath,
  isValidSuiAddress: () => isValidSuiAddress,
  isValidSuiObjectId: () => isValidSuiObjectId,
  isValidTransactionDigest: () => isValidTransactionDigest,
  localnetConnection: () => localnetConnection,
  messageWithIntent: () => messageWithIntent,
  mnemonicToSeed: () => mnemonicToSeed,
  mnemonicToSeedHex: () => mnemonicToSeedHex,
  normalizeSuiAddress: () => normalizeSuiAddress,
  normalizeSuiObjectId: () => normalizeSuiObjectId,
  parseVersionFromString: () => parseVersionFromString,
  publicKeyFromSerialized: () => publicKeyFromSerialized,
  requestSuiFromFaucet: () => requestSuiFromFaucet,
  toB64: () => import_bcs20.toB64,
  toSerializedSignature: () => toSerializedSignature,
  verifyMessage: () => verifyMessage,
  versionToString: () => versionToString
});
module.exports = __toCommonJS(src_exports);

// src/cryptography/ed25519-keypair.ts
var import_tweetnacl2 = __toESM(require("tweetnacl"));

// src/cryptography/keypair.ts
var import_bcs8 = require("@mysten/bcs");

// src/cryptography/secp256k1-keypair.ts
var import_sha256 = require("@noble/hashes/sha256");

// src/cryptography/secp256k1-publickey.ts
var import_bcs5 = require("@mysten/bcs");
var import_blake2b2 = require("@noble/hashes/blake2b");
var import_utils2 = require("@noble/hashes/utils");

// src/types/common.ts
var import_superstruct = require("superstruct");
var import_bcs = require("@mysten/bcs");
var TransactionDigest = (0, import_superstruct.string)();
var TransactionEffectsDigest = (0, import_superstruct.string)();
var TransactionEventDigest = (0, import_superstruct.string)();
var ObjectId = (0, import_superstruct.string)();
var SuiAddress = (0, import_superstruct.string)();
var SequenceNumber = (0, import_superstruct.number)();
var ObjectOwner = (0, import_superstruct.union)([
  (0, import_superstruct.object)({
    AddressOwner: SuiAddress
  }),
  (0, import_superstruct.object)({
    ObjectOwner: SuiAddress
  }),
  (0, import_superstruct.object)({
    Shared: (0, import_superstruct.object)({
      initial_shared_version: (0, import_superstruct.number)()
    })
  }),
  (0, import_superstruct.literal)("Immutable")
]);
var SuiJsonValue = (0, import_superstruct.define)("SuiJsonValue", () => true);
var TX_DIGEST_LENGTH = 32;
function isValidTransactionDigest(value) {
  try {
    const buffer = (0, import_bcs.fromB58)(value);
    return buffer.length === TX_DIGEST_LENGTH;
  } catch (e) {
    return false;
  }
}
var SUI_ADDRESS_LENGTH = 32;
function isValidSuiAddress(value) {
  return isHex(value) && getHexByteLength(value) === SUI_ADDRESS_LENGTH;
}
function isValidSuiObjectId(value) {
  return isValidSuiAddress(value);
}
function normalizeSuiAddress(value, forceAdd0x = false) {
  let address = value.toLowerCase();
  if (!forceAdd0x && address.startsWith("0x")) {
    address = address.slice(2);
  }
  return `0x${address.padStart(SUI_ADDRESS_LENGTH * 2, "0")}`;
}
function normalizeSuiObjectId(value, forceAdd0x = false) {
  return normalizeSuiAddress(value, forceAdd0x);
}
function isHex(value) {
  return /^(0x|0X)?[a-fA-F0-9]+$/.test(value) && value.length % 2 === 0;
}
function getHexByteLength(value) {
  return /^(0x|0X)/.test(value) ? (value.length - 2) / 2 : value.length / 2;
}

// src/types/objects.ts
var import_superstruct2 = require("superstruct");
var ObjectType = (0, import_superstruct2.union)([(0, import_superstruct2.string)(), (0, import_superstruct2.literal)("package")]);
var SuiObjectRef = (0, import_superstruct2.object)({
  /** Base64 string representing the object digest */
  digest: TransactionDigest,
  /** Hex code as string representing the object id */
  objectId: (0, import_superstruct2.string)(),
  /** Object version */
  version: (0, import_superstruct2.union)([(0, import_superstruct2.number)(), (0, import_superstruct2.string)()])
});
var SuiGasData = (0, import_superstruct2.object)({
  payment: (0, import_superstruct2.array)(SuiObjectRef),
  /** Gas Object's owner */
  owner: (0, import_superstruct2.string)(),
  price: (0, import_superstruct2.number)(),
  budget: (0, import_superstruct2.number)()
});
var SuiObjectInfo = (0, import_superstruct2.assign)(
  SuiObjectRef,
  (0, import_superstruct2.object)({
    type: (0, import_superstruct2.string)(),
    owner: ObjectOwner,
    previousTransaction: TransactionDigest
  })
);
var ObjectContentFields = (0, import_superstruct2.record)((0, import_superstruct2.string)(), (0, import_superstruct2.any)());
var MovePackageContent = (0, import_superstruct2.record)((0, import_superstruct2.string)(), (0, import_superstruct2.string)());
var SuiMoveObject = (0, import_superstruct2.object)({
  /** Move type (e.g., "0x2::coin::Coin<0x2::sui::SUI>") */
  type: (0, import_superstruct2.string)(),
  /** Fields and values stored inside the Move object */
  fields: ObjectContentFields,
  hasPublicTransfer: (0, import_superstruct2.boolean)()
});
var SuiMovePackage = (0, import_superstruct2.object)({
  /** A mapping from module name to disassembled Move bytecode */
  disassembled: MovePackageContent
});
var SuiParsedData = (0, import_superstruct2.union)([
  (0, import_superstruct2.assign)(SuiMoveObject, (0, import_superstruct2.object)({ dataType: (0, import_superstruct2.literal)("moveObject") })),
  (0, import_superstruct2.assign)(SuiMovePackage, (0, import_superstruct2.object)({ dataType: (0, import_superstruct2.literal)("package") }))
]);
var SuiRawMoveObject = (0, import_superstruct2.object)({
  /** Move type (e.g., "0x2::coin::Coin<0x2::sui::SUI>") */
  type: (0, import_superstruct2.string)(),
  hasPublicTransfer: (0, import_superstruct2.boolean)(),
  version: SequenceNumber,
  bcsBytes: (0, import_superstruct2.array)((0, import_superstruct2.number)())
});
var SuiRawMovePackage = (0, import_superstruct2.object)({
  id: ObjectId,
  /** A mapping from module name to Move bytecode enocded in base64*/
  moduleMap: (0, import_superstruct2.record)((0, import_superstruct2.string)(), (0, import_superstruct2.string)())
});
var SuiRawData = (0, import_superstruct2.union)([
  (0, import_superstruct2.assign)(SuiMoveObject, (0, import_superstruct2.object)({ dataType: (0, import_superstruct2.literal)("moveObject") })),
  (0, import_superstruct2.assign)(SuiRawMovePackage, (0, import_superstruct2.object)({ dataType: (0, import_superstruct2.literal)("package") }))
]);
var MIST_PER_SUI = BigInt(1e9);
var ObjectDigest = (0, import_superstruct2.string)();
var SuiObjectData = (0, import_superstruct2.object)({
  objectId: ObjectId,
  version: SequenceNumber,
  digest: ObjectDigest,
  /**
   * Type of the object, default to be undefined unless SuiObjectDataOptions.showType is set to true
   */
  type: (0, import_superstruct2.optional)((0, import_superstruct2.string)()),
  /**
   * Move object content or package content, default to be undefined unless SuiObjectDataOptions.showContent is set to true
   */
  content: (0, import_superstruct2.optional)(SuiParsedData),
  /**
   * Move object content or package content in BCS bytes, default to be undefined unless SuiObjectDataOptions.showBcs is set to true
   */
  bcs: (0, import_superstruct2.optional)(SuiRawData),
  /**
   * The owner of this object. Default to be undefined unless SuiObjectDataOptions.showOwner is set to true
   */
  owner: (0, import_superstruct2.optional)(ObjectOwner),
  /**
   * The digest of the transaction that created or last mutated this object.
   * Default to be undefined unless SuiObjectDataOptions.showPreviousTransaction is set to true
   */
  previousTransaction: (0, import_superstruct2.optional)(TransactionDigest),
  /**
   * The amount of SUI we would rebate if this object gets deleted.
   * This number is re-calculated each time the object is mutated based on
   * the present storage gas price.
   * Default to be undefined unless SuiObjectDataOptions.showStorageRebate is set to true
   */
  storageRebate: (0, import_superstruct2.optional)((0, import_superstruct2.number)()),
  /**
   * Display metadata for this object, default to be undefined unless SuiObjectDataOptions.showDisplay is set to true
   * This can also be None if the struct type does not have Display defined
   * See more details in https://forums.sui.io/t/nft-object-display-proposal/4872
   */
  display: (0, import_superstruct2.optional)((0, import_superstruct2.record)((0, import_superstruct2.string)(), (0, import_superstruct2.string)()))
});
var SuiObjectDataOptions = (0, import_superstruct2.object)({
  /* Whether to fetch the object type, default to be true */
  showType: (0, import_superstruct2.optional)((0, import_superstruct2.boolean)()),
  /* Whether to fetch the object content, default to be false */
  showContent: (0, import_superstruct2.optional)((0, import_superstruct2.boolean)()),
  /* Whether to fetch the object content in BCS bytes, default to be false */
  showBcs: (0, import_superstruct2.optional)((0, import_superstruct2.boolean)()),
  /* Whether to fetch the object owner, default to be false */
  showOwner: (0, import_superstruct2.optional)((0, import_superstruct2.boolean)()),
  /* Whether to fetch the previous transaction digest, default to be false */
  showPreviousTransaction: (0, import_superstruct2.optional)((0, import_superstruct2.boolean)()),
  /* Whether to fetch the storage rebate, default to be false */
  showStorageRebate: (0, import_superstruct2.optional)((0, import_superstruct2.boolean)()),
  /* Whether to fetch the display metadata, default to be false */
  showDisplay: (0, import_superstruct2.optional)((0, import_superstruct2.boolean)())
});
var ObjectStatus = (0, import_superstruct2.union)([
  (0, import_superstruct2.literal)("Exists"),
  (0, import_superstruct2.literal)("NotExists"),
  (0, import_superstruct2.literal)("Deleted")
]);
var GetOwnedObjectsResponse = (0, import_superstruct2.array)(SuiObjectInfo);
var SuiObjectResponseError = (0, import_superstruct2.object)({
  tag: (0, import_superstruct2.string)(),
  object_id: (0, import_superstruct2.optional)(ObjectId),
  version: (0, import_superstruct2.optional)(SequenceNumber),
  digest: (0, import_superstruct2.optional)(ObjectDigest)
});
var SuiObjectResponse = (0, import_superstruct2.object)({
  data: (0, import_superstruct2.optional)(SuiObjectData),
  error: (0, import_superstruct2.optional)(SuiObjectResponseError)
});
function getSuiObjectData(resp) {
  return resp.data;
}
function getObjectDeletedResponse(resp) {
  if (resp.error && "object_id" in resp.error && "version" in resp.error && "digest" in resp.error) {
    const error = resp.error;
    return {
      objectId: error.object_id,
      version: error.version,
      digest: error.digest
    };
  }
  return void 0;
}
function getObjectNotExistsResponse(resp) {
  if (resp.error && "object_id" in resp.error && !("version" in resp.error) && !("digest" in resp.error)) {
    return resp.error.object_id;
  }
  return void 0;
}
function getObjectReference(resp) {
  if ("reference" in resp) {
    return resp.reference;
  }
  const exists = getSuiObjectData(resp);
  if (exists) {
    return {
      objectId: exists.objectId,
      version: exists.version,
      digest: exists.digest
    };
  }
  return getObjectDeletedResponse(resp);
}
function getObjectId(data) {
  if ("objectId" in data) {
    return data.objectId;
  }
  return getObjectReference(data)?.objectId ?? getObjectNotExistsResponse(data);
}
function getObjectVersion(data) {
  if ("version" in data) {
    return data.version;
  }
  return getObjectReference(data)?.version;
}
function isSuiObjectResponse(resp) {
  return resp.data !== void 0;
}
function getObjectType(resp) {
  const data = isSuiObjectResponse(resp) ? resp.data : resp;
  if (!data?.type && "data" in resp) {
    if (data?.content?.dataType === "package") {
      return "package";
    }
    return getMoveObjectType(resp);
  }
  return data?.type;
}
function getObjectPreviousTransactionDigest(resp) {
  return getSuiObjectData(resp)?.previousTransaction;
}
function getObjectOwner(resp) {
  if ((0, import_superstruct2.is)(resp, ObjectOwner)) {
    return resp;
  }
  return getSuiObjectData(resp)?.owner;
}
function getObjectDisplay(resp) {
  return getSuiObjectData(resp)?.display;
}
function getSharedObjectInitialVersion(resp) {
  const owner = getObjectOwner(resp);
  if (typeof owner === "object" && "Shared" in owner) {
    return owner.Shared.initial_shared_version;
  } else {
    return void 0;
  }
}
function isSharedObject(resp) {
  const owner = getObjectOwner(resp);
  return typeof owner === "object" && "Shared" in owner;
}
function isImmutableObject(resp) {
  const owner = getObjectOwner(resp);
  return owner === "Immutable";
}
function getMoveObjectType(resp) {
  return getMoveObject(resp)?.type;
}
function getObjectFields(resp) {
  if ("fields" in resp) {
    return resp.fields;
  }
  return getMoveObject(resp)?.fields;
}
function isSuiObjectDataWithContent(data) {
  return data.content !== void 0;
}
function getMoveObject(data) {
  const suiObject = "data" in data ? getSuiObjectData(data) : data;
  if (!suiObject || !isSuiObjectDataWithContent(suiObject) || suiObject.content.dataType !== "moveObject") {
    return void 0;
  }
  return suiObject.content;
}
function hasPublicTransfer(data) {
  return getMoveObject(data)?.hasPublicTransfer ?? false;
}
function getMovePackageContent(data) {
  if ("disassembled" in data) {
    return data.disassembled;
  }
  const suiObject = getSuiObjectData(data);
  if (suiObject?.content?.dataType !== "package") {
    return void 0;
  }
  return suiObject.content.disassembled;
}
var CheckpointedObjectId = (0, import_superstruct2.object)({
  objectId: ObjectId,
  atCheckpoint: (0, import_superstruct2.optional)((0, import_superstruct2.number)())
});
var PaginatedObjectsResponse = (0, import_superstruct2.object)({
  data: (0, import_superstruct2.array)(SuiObjectResponse),
  nextCursor: (0, import_superstruct2.nullable)(CheckpointedObjectId),
  hasNextPage: (0, import_superstruct2.boolean)()
});

// src/types/events.ts
var import_superstruct3 = require("superstruct");
var EventId = (0, import_superstruct3.object)({
  txDigest: TransactionDigest,
  eventSeq: SequenceNumber
});
var SuiEvent = (0, import_superstruct3.object)({
  id: EventId,
  // Move package where this event was emitted.
  packageId: ObjectId,
  // Move module where this event was emitted.
  transactionModule: (0, import_superstruct3.string)(),
  // Sender's Sui address.
  sender: SuiAddress,
  // Move event type.
  type: (0, import_superstruct3.string)(),
  // Parsed json value of the event
  parsedJson: (0, import_superstruct3.optional)((0, import_superstruct3.record)((0, import_superstruct3.string)(), (0, import_superstruct3.any)())),
  // Base 58 encoded bcs bytes of the move event
  bcs: (0, import_superstruct3.optional)((0, import_superstruct3.string)()),
  timestampMs: (0, import_superstruct3.optional)((0, import_superstruct3.integer)())
});
var PaginatedEvents = (0, import_superstruct3.object)({
  data: (0, import_superstruct3.array)(SuiEvent),
  nextCursor: (0, import_superstruct3.nullable)(EventId),
  hasNextPage: (0, import_superstruct3.boolean)()
});
var SubscriptionId = (0, import_superstruct3.number)();
var SubscriptionEvent = (0, import_superstruct3.object)({
  subscription: SubscriptionId,
  result: SuiEvent
});
function getEventSender(event) {
  return event.sender;
}
function getEventPackage(event) {
  return event.packageId;
}

// src/types/transactions.ts
var import_superstruct4 = require("superstruct");
var EpochId = (0, import_superstruct4.string)();
var SuiChangeEpoch = (0, import_superstruct4.object)({
  epoch: EpochId,
  storage_charge: (0, import_superstruct4.number)(),
  computation_charge: (0, import_superstruct4.number)(),
  storage_rebate: (0, import_superstruct4.number)(),
  epoch_start_timestamp_ms: (0, import_superstruct4.optional)((0, import_superstruct4.number)())
});
var SuiConsensusCommitPrologue = (0, import_superstruct4.object)({
  epoch: (0, import_superstruct4.number)(),
  round: (0, import_superstruct4.number)(),
  commit_timestamp_ms: (0, import_superstruct4.number)()
});
var Genesis = (0, import_superstruct4.object)({
  objects: (0, import_superstruct4.array)(ObjectId)
});
var SuiArgument = (0, import_superstruct4.union)([
  (0, import_superstruct4.literal)("GasCoin"),
  (0, import_superstruct4.object)({ Input: (0, import_superstruct4.number)() }),
  (0, import_superstruct4.object)({ Result: (0, import_superstruct4.number)() }),
  (0, import_superstruct4.object)({ NestedResult: (0, import_superstruct4.tuple)([(0, import_superstruct4.number)(), (0, import_superstruct4.number)()]) })
]);
var MoveCallSuiTransaction = (0, import_superstruct4.object)({
  arguments: (0, import_superstruct4.optional)((0, import_superstruct4.array)(SuiArgument)),
  type_arguments: (0, import_superstruct4.optional)((0, import_superstruct4.array)((0, import_superstruct4.string)())),
  package: ObjectId,
  module: (0, import_superstruct4.string)(),
  function: (0, import_superstruct4.string)()
});
var SuiTransaction = (0, import_superstruct4.union)([
  (0, import_superstruct4.object)({ MoveCall: MoveCallSuiTransaction }),
  (0, import_superstruct4.object)({ TransferObjects: (0, import_superstruct4.tuple)([(0, import_superstruct4.array)(SuiArgument), SuiArgument]) }),
  (0, import_superstruct4.object)({ SplitCoins: (0, import_superstruct4.tuple)([SuiArgument, (0, import_superstruct4.array)(SuiArgument)]) }),
  (0, import_superstruct4.object)({ MergeCoins: (0, import_superstruct4.tuple)([SuiArgument, (0, import_superstruct4.array)(SuiArgument)]) }),
  (0, import_superstruct4.object)({ Publish: (0, import_superstruct4.tuple)([SuiMovePackage, (0, import_superstruct4.array)(ObjectId)]) }),
  (0, import_superstruct4.object)({ MakeMoveVec: (0, import_superstruct4.tuple)([(0, import_superstruct4.nullable)((0, import_superstruct4.string)()), (0, import_superstruct4.array)(SuiArgument)]) })
]);
var SuiCallArg = (0, import_superstruct4.union)([
  (0, import_superstruct4.object)({
    type: (0, import_superstruct4.literal)("pure"),
    valueType: (0, import_superstruct4.optional)((0, import_superstruct4.string)()),
    value: SuiJsonValue
  }),
  (0, import_superstruct4.object)({
    type: (0, import_superstruct4.literal)("object"),
    objectType: (0, import_superstruct4.literal)("immOrOwnedObject"),
    objectId: ObjectId,
    version: SequenceNumber,
    digest: ObjectDigest
  }),
  (0, import_superstruct4.object)({
    type: (0, import_superstruct4.literal)("object"),
    objectType: (0, import_superstruct4.literal)("sharedObject"),
    objectId: ObjectId,
    initialSharedVersion: SequenceNumber,
    mutable: (0, import_superstruct4.boolean)()
  })
]);
var ProgrammableTransaction = (0, import_superstruct4.object)({
  transactions: (0, import_superstruct4.array)(SuiTransaction),
  inputs: (0, import_superstruct4.array)(SuiCallArg)
});
var SuiTransactionBlockKind = (0, import_superstruct4.union)([
  (0, import_superstruct4.assign)(SuiChangeEpoch, (0, import_superstruct4.object)({ kind: (0, import_superstruct4.literal)("ChangeEpoch") })),
  (0, import_superstruct4.assign)(
    SuiConsensusCommitPrologue,
    (0, import_superstruct4.object)({
      kind: (0, import_superstruct4.literal)("ConsensusCommitPrologue")
    })
  ),
  (0, import_superstruct4.assign)(Genesis, (0, import_superstruct4.object)({ kind: (0, import_superstruct4.literal)("Genesis") })),
  (0, import_superstruct4.assign)(
    ProgrammableTransaction,
    (0, import_superstruct4.object)({ kind: (0, import_superstruct4.literal)("ProgrammableTransaction") })
  )
]);
var SuiTransactionBlockData = (0, import_superstruct4.object)({
  // Eventually this will become union(literal('v1'), literal('v2'), ...)
  messageVersion: (0, import_superstruct4.literal)("v1"),
  transaction: SuiTransactionBlockKind,
  sender: SuiAddress,
  gasData: SuiGasData
});
var AuthoritySignature = (0, import_superstruct4.string)();
var GenericAuthoritySignature = (0, import_superstruct4.union)([
  AuthoritySignature,
  (0, import_superstruct4.array)(AuthoritySignature)
]);
var AuthorityQuorumSignInfo = (0, import_superstruct4.object)({
  epoch: EpochId,
  signature: GenericAuthoritySignature,
  signers_map: (0, import_superstruct4.array)((0, import_superstruct4.number)())
});
var GasCostSummary = (0, import_superstruct4.object)({
  computationCost: (0, import_superstruct4.string)(),
  storageCost: (0, import_superstruct4.string)(),
  storageRebate: (0, import_superstruct4.string)(),
  nonRefundableStorageFee: (0, import_superstruct4.string)()
});
var ExecutionStatusType = (0, import_superstruct4.union)([
  (0, import_superstruct4.literal)("success"),
  (0, import_superstruct4.literal)("failure")
]);
var ExecutionStatus = (0, import_superstruct4.object)({
  status: ExecutionStatusType,
  error: (0, import_superstruct4.optional)((0, import_superstruct4.string)())
});
var OwnedObjectRef = (0, import_superstruct4.object)({
  owner: ObjectOwner,
  reference: SuiObjectRef
});
var TransactionEffectsModifiedAtVersions = (0, import_superstruct4.object)({
  objectId: ObjectId,
  sequenceNumber: SequenceNumber
});
var TransactionEffects = (0, import_superstruct4.object)({
  // Eventually this will become union(literal('v1'), literal('v2'), ...)
  messageVersion: (0, import_superstruct4.literal)("v1"),
  /** The status of the execution */
  status: ExecutionStatus,
  /** The epoch when this transaction was executed */
  executedEpoch: EpochId,
  /** The version that every modified (mutated or deleted) object had before it was modified by this transaction. **/
  modifiedAtVersions: (0, import_superstruct4.optional)((0, import_superstruct4.array)(TransactionEffectsModifiedAtVersions)),
  gasUsed: GasCostSummary,
  /** The object references of the shared objects used in this transaction. Empty if no shared objects were used. */
  sharedObjects: (0, import_superstruct4.optional)((0, import_superstruct4.array)(SuiObjectRef)),
  /** The transaction digest */
  transactionDigest: TransactionDigest,
  /** ObjectRef and owner of new objects created */
  created: (0, import_superstruct4.optional)((0, import_superstruct4.array)(OwnedObjectRef)),
  /** ObjectRef and owner of mutated objects, including gas object */
  mutated: (0, import_superstruct4.optional)((0, import_superstruct4.array)(OwnedObjectRef)),
  /**
   * ObjectRef and owner of objects that are unwrapped in this transaction.
   * Unwrapped objects are objects that were wrapped into other objects in the past,
   * and just got extracted out.
   */
  unwrapped: (0, import_superstruct4.optional)((0, import_superstruct4.array)(OwnedObjectRef)),
  /** Object Refs of objects now deleted (the old refs) */
  deleted: (0, import_superstruct4.optional)((0, import_superstruct4.array)(SuiObjectRef)),
  /** Object Refs of objects now deleted (the old refs) */
  unwrapped_then_deleted: (0, import_superstruct4.optional)((0, import_superstruct4.array)(SuiObjectRef)),
  /** Object refs of objects now wrapped in other objects */
  wrapped: (0, import_superstruct4.optional)((0, import_superstruct4.array)(SuiObjectRef)),
  /**
   * The updated gas object reference. Have a dedicated field for convenient access.
   * It's also included in mutated.
   */
  gasObject: OwnedObjectRef,
  /** The events emitted during execution. Note that only successful transactions emit events */
  eventsDigest: (0, import_superstruct4.optional)(TransactionEventDigest),
  /** The set of transaction digests this transaction depends on */
  dependencies: (0, import_superstruct4.optional)((0, import_superstruct4.array)(TransactionDigest))
});
var TransactionEvents = (0, import_superstruct4.array)(SuiEvent);
var ReturnValueType = (0, import_superstruct4.tuple)([(0, import_superstruct4.array)((0, import_superstruct4.number)()), (0, import_superstruct4.string)()]);
var MutableReferenceOutputType = (0, import_superstruct4.tuple)([
  SuiArgument,
  (0, import_superstruct4.array)((0, import_superstruct4.number)()),
  (0, import_superstruct4.string)()
]);
var ExecutionResultType = (0, import_superstruct4.object)({
  mutableReferenceOutputs: (0, import_superstruct4.optional)((0, import_superstruct4.array)(MutableReferenceOutputType)),
  returnValues: (0, import_superstruct4.optional)((0, import_superstruct4.array)(ReturnValueType))
});
var DevInspectResults = (0, import_superstruct4.object)({
  effects: TransactionEffects,
  events: TransactionEvents,
  results: (0, import_superstruct4.optional)((0, import_superstruct4.array)(ExecutionResultType)),
  error: (0, import_superstruct4.optional)((0, import_superstruct4.string)())
});
var AuthorityName = (0, import_superstruct4.string)();
var SuiTransactionBlock = (0, import_superstruct4.object)({
  data: SuiTransactionBlockData,
  txSignatures: (0, import_superstruct4.array)((0, import_superstruct4.string)())
});
var SuiObjectChangePublished = (0, import_superstruct4.object)({
  type: (0, import_superstruct4.literal)("published"),
  packageId: ObjectId,
  version: SequenceNumber,
  digest: ObjectDigest,
  modules: (0, import_superstruct4.array)((0, import_superstruct4.string)())
});
var SuiObjectChangeTransferred = (0, import_superstruct4.object)({
  type: (0, import_superstruct4.literal)("transferred"),
  sender: SuiAddress,
  recipient: ObjectOwner,
  objectType: (0, import_superstruct4.string)(),
  objectId: ObjectId,
  version: SequenceNumber,
  digest: ObjectDigest
});
var SuiObjectChangeMutated = (0, import_superstruct4.object)({
  type: (0, import_superstruct4.literal)("mutated"),
  sender: SuiAddress,
  owner: ObjectOwner,
  objectType: (0, import_superstruct4.string)(),
  objectId: ObjectId,
  version: SequenceNumber,
  previousVersion: SequenceNumber,
  digest: ObjectDigest
});
var SuiObjectChangeDeleted = (0, import_superstruct4.object)({
  type: (0, import_superstruct4.literal)("deleted"),
  sender: SuiAddress,
  objectType: (0, import_superstruct4.string)(),
  objectId: ObjectId,
  version: SequenceNumber
});
var SuiObjectChangeWrapped = (0, import_superstruct4.object)({
  type: (0, import_superstruct4.literal)("wrapped"),
  sender: SuiAddress,
  objectType: (0, import_superstruct4.string)(),
  objectId: ObjectId,
  version: SequenceNumber
});
var SuiObjectChangeCreated = (0, import_superstruct4.object)({
  type: (0, import_superstruct4.literal)("created"),
  sender: SuiAddress,
  owner: ObjectOwner,
  objectType: (0, import_superstruct4.string)(),
  objectId: ObjectId,
  version: SequenceNumber,
  digest: ObjectDigest
});
var SuiObjectChange = (0, import_superstruct4.union)([
  SuiObjectChangePublished,
  SuiObjectChangeTransferred,
  SuiObjectChangeMutated,
  SuiObjectChangeDeleted,
  SuiObjectChangeWrapped,
  SuiObjectChangeCreated
]);
var BalanceChange = (0, import_superstruct4.object)({
  owner: ObjectOwner,
  coinType: (0, import_superstruct4.string)(),
  /* Coin balance change(positive means receive, negative means send) */
  amount: (0, import_superstruct4.string)()
});
var SuiTransactionBlockResponse = (0, import_superstruct4.object)({
  digest: TransactionDigest,
  transaction: (0, import_superstruct4.optional)(SuiTransactionBlock),
  effects: (0, import_superstruct4.optional)(TransactionEffects),
  events: (0, import_superstruct4.optional)(TransactionEvents),
  timestampMs: (0, import_superstruct4.optional)((0, import_superstruct4.number)()),
  checkpoint: (0, import_superstruct4.optional)((0, import_superstruct4.number)()),
  confirmedLocalExecution: (0, import_superstruct4.optional)((0, import_superstruct4.boolean)()),
  objectChanges: (0, import_superstruct4.optional)((0, import_superstruct4.array)(SuiObjectChange)),
  balanceChanges: (0, import_superstruct4.optional)((0, import_superstruct4.array)(BalanceChange)),
  /* Errors that occurred in fetching/serializing the transaction. */
  errors: (0, import_superstruct4.optional)((0, import_superstruct4.array)((0, import_superstruct4.string)()))
});
var SuiTransactionBlockResponseOptions = (0, import_superstruct4.object)({
  /* Whether to show transaction input data. Default to be false. */
  showInput: (0, import_superstruct4.optional)((0, import_superstruct4.boolean)()),
  /* Whether to show transaction effects. Default to be false. */
  showEffects: (0, import_superstruct4.optional)((0, import_superstruct4.boolean)()),
  /* Whether to show transaction events. Default to be false. */
  showEvents: (0, import_superstruct4.optional)((0, import_superstruct4.boolean)()),
  /* Whether to show object changes. Default to be false. */
  showObjectChanges: (0, import_superstruct4.optional)((0, import_superstruct4.boolean)()),
  /* Whether to show coin balance changes. Default to be false. */
  showBalanceChanges: (0, import_superstruct4.optional)((0, import_superstruct4.boolean)())
});
var PaginatedTransactionResponse = (0, import_superstruct4.object)({
  data: (0, import_superstruct4.array)(SuiTransactionBlockResponse),
  nextCursor: (0, import_superstruct4.nullable)(TransactionDigest),
  hasNextPage: (0, import_superstruct4.boolean)()
});
var DryRunTransactionBlockResponse = (0, import_superstruct4.object)({
  effects: TransactionEffects,
  events: TransactionEvents,
  objectChanges: (0, import_superstruct4.array)(SuiObjectChange),
  balanceChanges: (0, import_superstruct4.array)(BalanceChange)
});
function getTransaction(tx) {
  return tx.transaction;
}
function getTransactionDigest(tx) {
  return tx.digest;
}
function getTransactionSignature(tx) {
  return tx.transaction?.txSignatures;
}
function getTransactionSender(tx) {
  return tx.transaction?.data.sender;
}
function getGasData(tx) {
  return tx.transaction?.data.gasData;
}
function getTransactionGasObject(tx) {
  return getGasData(tx)?.payment;
}
function getTransactionGasPrice(tx) {
  return getGasData(tx)?.price;
}
function getTransactionGasBudget(tx) {
  return getGasData(tx)?.budget;
}
function getChangeEpochTransaction(data) {
  return data.kind === "ChangeEpoch" ? data : void 0;
}
function getConsensusCommitPrologueTransaction(data) {
  return data.kind === "ConsensusCommitPrologue" ? data : void 0;
}
function getTransactionKind(data) {
  return data.transaction?.data.transaction;
}
function getTransactionKindName(data) {
  return data.kind;
}
function getProgrammableTransaction(data) {
  return data.kind === "ProgrammableTransaction" ? data : void 0;
}
function getExecutionStatusType(data) {
  return getExecutionStatus(data)?.status;
}
function getExecutionStatus(data) {
  return getTransactionEffects(data)?.status;
}
function getExecutionStatusError(data) {
  return getExecutionStatus(data)?.error;
}
function getExecutionStatusGasSummary(data) {
  if ((0, import_superstruct4.is)(data, TransactionEffects)) {
    return data.gasUsed;
  }
  return getTransactionEffects(data)?.gasUsed;
}
function getTotalGasUsed(data) {
  const gasSummary = getExecutionStatusGasSummary(data);
  return gasSummary ? BigInt(gasSummary.computationCost) + BigInt(gasSummary.storageCost) - BigInt(gasSummary.storageRebate) : void 0;
}
function getTotalGasUsedUpperBound(data) {
  const gasSummary = getExecutionStatusGasSummary(data);
  return gasSummary ? BigInt(gasSummary.computationCost) + BigInt(gasSummary.storageCost) : void 0;
}
function getTransactionEffects(data) {
  return data.effects;
}
function getEvents(data) {
  return data.events;
}
function getCreatedObjects(data) {
  return getTransactionEffects(data)?.created;
}
function getTimestampFromTransactionResponse(data) {
  return data.timestampMs ?? void 0;
}
function getNewlyCreatedCoinRefsAfterSplit(data) {
  return getTransactionEffects(data)?.created?.map((c) => c.reference);
}
function getObjectChanges(data) {
  return data.objectChanges;
}
function getPublishedObjectChanges(data) {
  return data.objectChanges?.filter(
    (a) => (0, import_superstruct4.is)(a, SuiObjectChangePublished)
  ) ?? [];
}

// src/types/option.ts
function getOption(option2) {
  if (typeof option2 === "object" && option2 !== null && "type" in option2 && option2.type.startsWith("0x1::option::Option<")) {
    return void 0;
  }
  return option2;
}

// src/framework/framework.ts
var import_superstruct5 = require("superstruct");
var SUI_SYSTEM_ADDRESS = "0x3";
var SUI_FRAMEWORK_ADDRESS = "0x2";
var MOVE_STDLIB_ADDRESS = "0x1";
var OBJECT_MODULE_NAME = "object";
var UID_STRUCT_NAME = "UID";
var ID_STRUCT_NAME = "ID";
var SUI_TYPE_ARG = `${SUI_FRAMEWORK_ADDRESS}::sui::SUI`;
var VALIDATORS_EVENTS_QUERY = "0x3::validator_set::ValidatorEpochInfoEvent";
var SUI_CLOCK_OBJECT_ID = normalizeSuiObjectId("0x6");
var PAY_MODULE_NAME = "pay";
var PAY_SPLIT_COIN_VEC_FUNC_NAME = "split_vec";
var PAY_JOIN_COIN_FUNC_NAME = "join";
var COIN_TYPE_ARG_REGEX = /^0x2::coin::Coin<(.+)>$/;
function isObjectDataFull(resp) {
  return !!resp.data || !!resp.type;
}
var CoinMetadataStruct = (0, import_superstruct5.object)({
  decimals: (0, import_superstruct5.number)(),
  name: (0, import_superstruct5.string)(),
  symbol: (0, import_superstruct5.string)(),
  description: (0, import_superstruct5.string)(),
  iconUrl: (0, import_superstruct5.nullable)((0, import_superstruct5.string)()),
  id: (0, import_superstruct5.nullable)(ObjectId)
});
var Coin = class {
  static isCoin(data) {
    return Coin.getType(data)?.match(COIN_TYPE_ARG_REGEX) != null;
  }
  static getCoinType(type) {
    const [, res] = type.match(COIN_TYPE_ARG_REGEX) ?? [];
    return res || null;
  }
  static getCoinTypeArg(obj) {
    const type = Coin.getType(obj);
    return type ? Coin.getCoinType(type) : null;
  }
  static isSUI(obj) {
    const arg = Coin.getCoinTypeArg(obj);
    return arg ? Coin.getCoinSymbol(arg) === "SUI" : false;
  }
  static getCoinSymbol(coinTypeArg) {
    return coinTypeArg.substring(coinTypeArg.lastIndexOf(":") + 1);
  }
  static getCoinStructTag(coinTypeArg) {
    return {
      address: normalizeSuiObjectId(coinTypeArg.split("::")[0]),
      module: coinTypeArg.split("::")[1],
      name: coinTypeArg.split("::")[2],
      typeParams: []
    };
  }
  static getID(obj) {
    if ("fields" in obj) {
      return obj.fields.id.id;
    }
    return getObjectId(obj);
  }
  static totalBalance(coins) {
    return coins.reduce(
      (partialSum, c) => partialSum + Coin.getBalanceFromCoinStruct(c),
      BigInt(0)
    );
  }
  /**
   * Sort coin by balance in an ascending order
   */
  static sortByBalance(coins) {
    return [...coins].sort(
      (a, b) => Coin.getBalanceFromCoinStruct(a) < Coin.getBalanceFromCoinStruct(b) ? -1 : Coin.getBalanceFromCoinStruct(a) > Coin.getBalanceFromCoinStruct(b) ? 1 : 0
    );
  }
  static getBalanceFromCoinStruct(coin) {
    return BigInt(coin.balance);
  }
  static getBalance(data) {
    if (!Coin.isCoin(data)) {
      return void 0;
    }
    const balance = getObjectFields(data)?.balance;
    return BigInt(balance);
  }
  static getType(data) {
    if (isObjectDataFull(data)) {
      return getObjectType(data);
    }
    return data.type;
  }
};
var _Delegation = class {
  static isDelegationSuiObject(obj) {
    return "type" in obj && obj.type === _Delegation.SUI_OBJECT_TYPE;
  }
  constructor(obj) {
    this.suiObject = obj;
  }
  nextRewardUnclaimedEpoch() {
    return this.suiObject.data.fields.next_reward_unclaimed_epoch;
  }
  activeDelegation() {
    return BigInt(getOption(this.suiObject.data.fields.active_delegation) || 0);
  }
  delegateAmount() {
    return this.suiObject.data.fields.delegate_amount;
  }
  endingEpoch() {
    return getOption(this.suiObject.data.fields.ending_epoch);
  }
  validatorAddress() {
    return this.suiObject.data.fields.validator_address;
  }
  isActive() {
    return this.activeDelegation() > 0 && !this.endingEpoch();
  }
  hasUnclaimedRewards(epoch) {
    return this.nextRewardUnclaimedEpoch() <= epoch && (this.isActive() || (this.endingEpoch() || 0) > epoch);
  }
};
var Delegation = _Delegation;
Delegation.SUI_OBJECT_TYPE = "0x2::delegation::Delegation";

// src/types/sui-bcs.ts
var import_bcs2 = require("@mysten/bcs");
function registerUTF8String(bcs2) {
  bcs2.registerType(
    "utf8string",
    (writer, str) => {
      const bytes = Array.from(new TextEncoder().encode(str));
      return writer.writeVec(bytes, (writer2, el) => writer2.write8(el));
    },
    (reader) => {
      let bytes = reader.readVec((reader2) => reader2.read8());
      return new TextDecoder().decode(new Uint8Array(bytes));
    }
  );
}
function isPureArg(arg) {
  return arg.Pure !== void 0;
}
var VECTOR = "vector";
var TransactionDataV1 = {
  kind: "TransactionKind",
  sender: import_bcs2.BCS.ADDRESS,
  gasData: "GasData",
  expiration: "TransactionExpiration"
};
var BCS_SPEC = {
  enums: {
    "Option<T>": {
      None: null,
      Some: "T"
    },
    ObjectArg: {
      ImmOrOwned: "SuiObjectRef",
      Shared: "SharedObjectRef"
    },
    CallArg: {
      Pure: [VECTOR, import_bcs2.BCS.U8],
      Object: "ObjectArg",
      ObjVec: [VECTOR, "ObjectArg"]
    },
    TypeTag: {
      bool: null,
      u8: null,
      u64: null,
      u128: null,
      address: null,
      signer: null,
      vector: "TypeTag",
      struct: "StructTag",
      u16: null,
      u32: null,
      u256: null
    },
    TransactionKind: {
      // can not be called from sui.js; dummy placement
      // to set the enum counter right for ProgrammableTransact
      ProgrammableTransaction: "ProgrammableTransaction",
      ChangeEpoch: null,
      Genesis: null,
      ConsensusCommitPrologue: null
    },
    TransactionExpiration: {
      None: null,
      Epoch: import_bcs2.BCS.U64
    },
    TransactionData: {
      V1: "TransactionDataV1"
    }
  },
  structs: {
    SuiObjectRef: {
      objectId: import_bcs2.BCS.ADDRESS,
      version: import_bcs2.BCS.U64,
      digest: "ObjectDigest"
    },
    SharedObjectRef: {
      objectId: import_bcs2.BCS.ADDRESS,
      initialSharedVersion: import_bcs2.BCS.U64,
      mutable: import_bcs2.BCS.BOOL
    },
    StructTag: {
      address: import_bcs2.BCS.ADDRESS,
      module: import_bcs2.BCS.STRING,
      name: import_bcs2.BCS.STRING,
      typeParams: [VECTOR, "TypeTag"]
    },
    GasData: {
      payment: [VECTOR, "SuiObjectRef"],
      owner: import_bcs2.BCS.ADDRESS,
      price: import_bcs2.BCS.U64,
      budget: import_bcs2.BCS.U64
    },
    // Signed transaction data needed to generate transaction digest.
    SenderSignedData: {
      data: "TransactionData",
      txSignatures: [VECTOR, [VECTOR, import_bcs2.BCS.U8]]
    },
    TransactionDataV1
  },
  aliases: {
    ObjectDigest: import_bcs2.BCS.BASE58
  }
};
var bcs = new import_bcs2.BCS({ ...(0, import_bcs2.getSuiMoveConfig)(), types: BCS_SPEC });
registerUTF8String(bcs);
function bcsForVersion(_v) {
  return bcs;
}

// src/types/version.ts
var import_femver = require("@suchipi/femver");
function parseVersionFromString(version) {
  return (0, import_femver.parse)(version);
}
function versionToString(version) {
  const { major, minor, patch } = version;
  return `${major}.${minor}.${patch}`;
}

// src/types/faucet.ts
var import_superstruct6 = require("superstruct");
var FaucetCoinInfo = (0, import_superstruct6.object)({
  amount: (0, import_superstruct6.number)(),
  id: ObjectId,
  transferTxDigest: TransactionDigest
});
var FaucetResponse = (0, import_superstruct6.object)({
  transferredGasObjects: (0, import_superstruct6.array)(FaucetCoinInfo),
  error: (0, import_superstruct6.nullable)((0, import_superstruct6.string)())
});

// src/types/normalized.ts
var import_superstruct7 = require("superstruct");
var SuiMoveFunctionArgType = (0, import_superstruct7.union)([
  (0, import_superstruct7.string)(),
  (0, import_superstruct7.object)({ Object: (0, import_superstruct7.string)() })
]);
var SuiMoveFunctionArgTypes = (0, import_superstruct7.array)(SuiMoveFunctionArgType);
var SuiMoveModuleId = (0, import_superstruct7.object)({
  address: (0, import_superstruct7.string)(),
  name: (0, import_superstruct7.string)()
});
var SuiMoveVisibility = (0, import_superstruct7.union)([
  (0, import_superstruct7.literal)("Private"),
  (0, import_superstruct7.literal)("Public"),
  (0, import_superstruct7.literal)("Friend")
]);
var SuiMoveAbilitySet = (0, import_superstruct7.object)({
  abilities: (0, import_superstruct7.array)((0, import_superstruct7.string)())
});
var SuiMoveStructTypeParameter = (0, import_superstruct7.object)({
  constraints: SuiMoveAbilitySet,
  isPhantom: (0, import_superstruct7.boolean)()
});
var SuiMoveNormalizedTypeParameterType = (0, import_superstruct7.object)({
  TypeParameter: (0, import_superstruct7.number)()
});
function isSuiMoveNormalizedType(value) {
  if (!value)
    return false;
  if (typeof value === "string")
    return true;
  if ((0, import_superstruct7.is)(value, SuiMoveNormalizedTypeParameterType))
    return true;
  if (isSuiMoveNormalizedStructType(value))
    return true;
  if (typeof value !== "object")
    return false;
  const valueProperties = value;
  if ((0, import_superstruct7.is)(valueProperties.Reference, SuiMoveNormalizedType))
    return true;
  if ((0, import_superstruct7.is)(valueProperties.MutableReference, SuiMoveNormalizedType))
    return true;
  if ((0, import_superstruct7.is)(valueProperties.Vector, SuiMoveNormalizedType))
    return true;
  return false;
}
var SuiMoveNormalizedType = (0, import_superstruct7.define)(
  "SuiMoveNormalizedType",
  isSuiMoveNormalizedType
);
function isSuiMoveNormalizedStructType(value) {
  if (!value || typeof value !== "object")
    return false;
  const valueProperties = value;
  if (!valueProperties.Struct || typeof valueProperties.Struct !== "object")
    return false;
  const structProperties = valueProperties.Struct;
  if (typeof structProperties.address !== "string" || typeof structProperties.module !== "string" || typeof structProperties.name !== "string" || !Array.isArray(structProperties.typeArguments) || !structProperties.typeArguments.every(
    (value2) => isSuiMoveNormalizedType(value2)
  )) {
    return false;
  }
  return true;
}
var SuiMoveNormalizedStructType = (0, import_superstruct7.define)(
  "SuiMoveNormalizedStructType",
  isSuiMoveNormalizedStructType
);
var SuiMoveNormalizedFunction = (0, import_superstruct7.object)({
  visibility: SuiMoveVisibility,
  isEntry: (0, import_superstruct7.boolean)(),
  typeParameters: (0, import_superstruct7.array)(SuiMoveAbilitySet),
  parameters: (0, import_superstruct7.array)(SuiMoveNormalizedType),
  return: (0, import_superstruct7.array)(SuiMoveNormalizedType)
});
var SuiMoveNormalizedField = (0, import_superstruct7.object)({
  name: (0, import_superstruct7.string)(),
  type: SuiMoveNormalizedType
});
var SuiMoveNormalizedStruct = (0, import_superstruct7.object)({
  abilities: SuiMoveAbilitySet,
  typeParameters: (0, import_superstruct7.array)(SuiMoveStructTypeParameter),
  fields: (0, import_superstruct7.array)(SuiMoveNormalizedField)
});
var SuiMoveNormalizedModule = (0, import_superstruct7.object)({
  fileFormatVersion: (0, import_superstruct7.number)(),
  address: (0, import_superstruct7.string)(),
  name: (0, import_superstruct7.string)(),
  friends: (0, import_superstruct7.array)(SuiMoveModuleId),
  structs: (0, import_superstruct7.record)((0, import_superstruct7.string)(), SuiMoveNormalizedStruct),
  exposedFunctions: (0, import_superstruct7.record)((0, import_superstruct7.string)(), SuiMoveNormalizedFunction)
});
var SuiMoveNormalizedModules = (0, import_superstruct7.record)(
  (0, import_superstruct7.string)(),
  SuiMoveNormalizedModule
);
function extractMutableReference(normalizedType) {
  return typeof normalizedType === "object" && "MutableReference" in normalizedType ? normalizedType.MutableReference : void 0;
}
function extractReference(normalizedType) {
  return typeof normalizedType === "object" && "Reference" in normalizedType ? normalizedType.Reference : void 0;
}
function extractStructTag(normalizedType) {
  if (typeof normalizedType === "object" && "Struct" in normalizedType) {
    return normalizedType;
  }
  const ref = extractReference(normalizedType);
  const mutRef = extractMutableReference(normalizedType);
  if (typeof ref === "object" && "Struct" in ref) {
    return ref;
  }
  if (typeof mutRef === "object" && "Struct" in mutRef) {
    return mutRef;
  }
  return void 0;
}

// src/types/validator.ts
var import_superstruct8 = require("superstruct");
var Balance = (0, import_superstruct8.object)({
  value: (0, import_superstruct8.number)()
});
var StakeObject = (0, import_superstruct8.object)({
  stakedSuiId: ObjectId,
  stakeRequestEpoch: EpochId,
  stakeActiveEpoch: EpochId,
  principal: (0, import_superstruct8.number)(),
  status: (0, import_superstruct8.union)([(0, import_superstruct8.literal)("Active"), (0, import_superstruct8.literal)("Pending"), (0, import_superstruct8.literal)("Unstaked")]),
  estimatedReward: (0, import_superstruct8.optional)((0, import_superstruct8.number)())
});
var DelegatedStake = (0, import_superstruct8.object)({
  validatorAddress: SuiAddress,
  stakingPool: ObjectId,
  stakes: (0, import_superstruct8.array)(StakeObject)
});
var StakeSubsidyFields = (0, import_superstruct8.object)({
  balance: (0, import_superstruct8.object)({ value: (0, import_superstruct8.number)() }),
  distribution_counter: (0, import_superstruct8.number)(),
  current_distribution_amount: (0, import_superstruct8.number)(),
  stake_subsidy_period_length: (0, import_superstruct8.number)(),
  stake_subsidy_decrease_rate: (0, import_superstruct8.number)()
});
var StakeSubsidy = (0, import_superstruct8.object)({
  type: (0, import_superstruct8.string)(),
  fields: StakeSubsidyFields
});
var SuiSupplyFields = (0, import_superstruct8.object)({
  value: (0, import_superstruct8.number)()
});
var ContentsFields = (0, import_superstruct8.object)({
  id: (0, import_superstruct8.string)(),
  size: (0, import_superstruct8.number)(),
  head: (0, import_superstruct8.object)({ vec: (0, import_superstruct8.array)() }),
  tail: (0, import_superstruct8.object)({ vec: (0, import_superstruct8.array)() })
});
var ContentsFieldsWithdraw = (0, import_superstruct8.object)({
  id: (0, import_superstruct8.string)(),
  size: (0, import_superstruct8.number)()
});
var Contents = (0, import_superstruct8.object)({
  type: (0, import_superstruct8.string)(),
  fields: ContentsFields
});
var DelegationStakingPoolFields = (0, import_superstruct8.object)({
  exchangeRates: (0, import_superstruct8.object)({
    id: (0, import_superstruct8.string)(),
    size: (0, import_superstruct8.number)()
  }),
  id: (0, import_superstruct8.string)(),
  pendingStake: (0, import_superstruct8.number)(),
  pendingPoolTokenWithdraw: (0, import_superstruct8.number)(),
  pendingTotalSuiWithdraw: (0, import_superstruct8.number)(),
  poolTokenBalance: (0, import_superstruct8.number)(),
  rewardsPool: (0, import_superstruct8.object)({ value: (0, import_superstruct8.number)() }),
  activationEpoch: (0, import_superstruct8.object)({ vec: (0, import_superstruct8.array)() }),
  deactivationEpoch: (0, import_superstruct8.object)({ vec: (0, import_superstruct8.array)() }),
  suiBalance: (0, import_superstruct8.number)()
});
var DelegationStakingPool = (0, import_superstruct8.object)({
  type: (0, import_superstruct8.string)(),
  fields: DelegationStakingPoolFields
});
var Validators = (0, import_superstruct8.array)((0, import_superstruct8.tuple)([AuthorityName, (0, import_superstruct8.number)()]));
var CommitteeInfo = (0, import_superstruct8.object)({
  epoch: (0, import_superstruct8.number)(),
  /** Array of (validator public key, stake unit) tuple */
  validators: Validators
});
var SuiValidatorSummary = (0, import_superstruct8.object)({
  suiAddress: SuiAddress,
  protocolPubkeyBytes: (0, import_superstruct8.string)(),
  networkPubkeyBytes: (0, import_superstruct8.string)(),
  workerPubkeyBytes: (0, import_superstruct8.string)(),
  proofOfPossessionBytes: (0, import_superstruct8.string)(),
  operationCapId: (0, import_superstruct8.string)(),
  name: (0, import_superstruct8.string)(),
  description: (0, import_superstruct8.string)(),
  imageUrl: (0, import_superstruct8.string)(),
  projectUrl: (0, import_superstruct8.string)(),
  p2pAddress: (0, import_superstruct8.string)(),
  netAddress: (0, import_superstruct8.string)(),
  primaryAddress: (0, import_superstruct8.string)(),
  workerAddress: (0, import_superstruct8.string)(),
  nextEpochProtocolPubkeyBytes: (0, import_superstruct8.nullable)((0, import_superstruct8.string)()),
  nextEpochProofOfPossession: (0, import_superstruct8.nullable)((0, import_superstruct8.string)()),
  nextEpochNetworkPubkeyBytes: (0, import_superstruct8.nullable)((0, import_superstruct8.string)()),
  nextEpochWorkerPubkeyBytes: (0, import_superstruct8.nullable)((0, import_superstruct8.string)()),
  nextEpochNetAddress: (0, import_superstruct8.nullable)((0, import_superstruct8.string)()),
  nextEpochP2pAddress: (0, import_superstruct8.nullable)((0, import_superstruct8.string)()),
  nextEpochPrimaryAddress: (0, import_superstruct8.nullable)((0, import_superstruct8.string)()),
  nextEpochWorkerAddress: (0, import_superstruct8.nullable)((0, import_superstruct8.string)()),
  votingPower: (0, import_superstruct8.number)(),
  gasPrice: (0, import_superstruct8.number)(),
  commissionRate: (0, import_superstruct8.number)(),
  nextEpochStake: (0, import_superstruct8.number)(),
  nextEpochGasPrice: (0, import_superstruct8.number)(),
  nextEpochCommissionRate: (0, import_superstruct8.number)(),
  stakingPoolId: (0, import_superstruct8.string)(),
  stakingPoolActivationEpoch: (0, import_superstruct8.nullable)((0, import_superstruct8.number)()),
  stakingPoolDeactivationEpoch: (0, import_superstruct8.nullable)((0, import_superstruct8.number)()),
  stakingPoolSuiBalance: (0, import_superstruct8.number)(),
  rewardsPool: (0, import_superstruct8.number)(),
  poolTokenBalance: (0, import_superstruct8.number)(),
  pendingStake: (0, import_superstruct8.number)(),
  pendingPoolTokenWithdraw: (0, import_superstruct8.number)(),
  pendingTotalSuiWithdraw: (0, import_superstruct8.number)(),
  exchangeRatesId: (0, import_superstruct8.string)(),
  exchangeRatesSize: (0, import_superstruct8.number)()
});
var SuiSystemStateSummary = (0, import_superstruct8.object)({
  epoch: (0, import_superstruct8.number)(),
  protocolVersion: (0, import_superstruct8.number)(),
  systemStateVersion: (0, import_superstruct8.number)(),
  storageFundTotalObjectStorageRebates: (0, import_superstruct8.number)(),
  storageFundNonRefundableBalance: (0, import_superstruct8.number)(),
  referenceGasPrice: (0, import_superstruct8.number)(),
  safeMode: (0, import_superstruct8.boolean)(),
  safeModeStorageRewards: (0, import_superstruct8.number)(),
  safeModeComputationRewards: (0, import_superstruct8.number)(),
  safeModeStorageRebates: (0, import_superstruct8.number)(),
  safeModeNonRefundableStorageFee: (0, import_superstruct8.number)(),
  epochStartTimestampMs: (0, import_superstruct8.number)(),
  epochDurationMs: (0, import_superstruct8.number)(),
  stakeSubsidyStartEpoch: (0, import_superstruct8.number)(),
  maxValidatorCount: (0, import_superstruct8.number)(),
  minValidatorJoiningStake: (0, import_superstruct8.number)(),
  validatorLowStakeThreshold: (0, import_superstruct8.number)(),
  validatorVeryLowStakeThreshold: (0, import_superstruct8.number)(),
  validatorLowStakeGracePeriod: (0, import_superstruct8.number)(),
  stakeSubsidyBalance: (0, import_superstruct8.number)(),
  stakeSubsidyDistributionCounter: (0, import_superstruct8.number)(),
  stakeSubsidyCurrentDistributionAmount: (0, import_superstruct8.number)(),
  stakeSubsidyPeriodLength: (0, import_superstruct8.number)(),
  stakeSubsidyDecreaseRate: (0, import_superstruct8.number)(),
  totalStake: (0, import_superstruct8.number)(),
  activeValidators: (0, import_superstruct8.array)(SuiValidatorSummary),
  pendingActiveValidatorsId: (0, import_superstruct8.string)(),
  pendingActiveValidatorsSize: (0, import_superstruct8.number)(),
  pendingRemovals: (0, import_superstruct8.array)((0, import_superstruct8.number)()),
  stakingPoolMappingsId: (0, import_superstruct8.string)(),
  stakingPoolMappingsSize: (0, import_superstruct8.number)(),
  inactivePoolsId: (0, import_superstruct8.string)(),
  inactivePoolsSize: (0, import_superstruct8.number)(),
  validatorCandidatesId: (0, import_superstruct8.string)(),
  validatorCandidatesSize: (0, import_superstruct8.number)(),
  atRiskValidators: (0, import_superstruct8.array)((0, import_superstruct8.tuple)([SuiAddress, (0, import_superstruct8.number)()])),
  validatorReportRecords: (0, import_superstruct8.array)((0, import_superstruct8.tuple)([SuiAddress, (0, import_superstruct8.array)(SuiAddress)]))
});

// src/types/coin.ts
var import_superstruct9 = require("superstruct");
var CoinStruct = (0, import_superstruct9.object)({
  coinType: (0, import_superstruct9.string)(),
  // TODO(chris): rename this to objectId
  coinObjectId: ObjectId,
  version: (0, import_superstruct9.number)(),
  digest: TransactionDigest,
  balance: (0, import_superstruct9.number)(),
  lockedUntilEpoch: (0, import_superstruct9.nullable)((0, import_superstruct9.number)()),
  previousTransaction: TransactionDigest
});
var PaginatedCoins = (0, import_superstruct9.object)({
  data: (0, import_superstruct9.array)(CoinStruct),
  nextCursor: (0, import_superstruct9.nullable)(ObjectId),
  hasNextPage: (0, import_superstruct9.boolean)()
});
var CoinBalance = (0, import_superstruct9.object)({
  coinType: (0, import_superstruct9.string)(),
  coinObjectCount: (0, import_superstruct9.number)(),
  totalBalance: (0, import_superstruct9.number)(),
  lockedBalance: (0, import_superstruct9.object)({
    epochId: (0, import_superstruct9.optional)((0, import_superstruct9.number)()),
    number: (0, import_superstruct9.optional)((0, import_superstruct9.number)())
  })
});
var CoinSupply = (0, import_superstruct9.object)({
  value: (0, import_superstruct9.number)()
});

// src/types/checkpoints.ts
var import_superstruct10 = require("superstruct");
var GasCostSummary2 = (0, import_superstruct10.object)({
  computationCost: (0, import_superstruct10.number)(),
  storageCost: (0, import_superstruct10.number)(),
  storageRebate: (0, import_superstruct10.number)(),
  nonRefundableStorageFee: (0, import_superstruct10.number)()
});
var CheckPointContentsDigest = (0, import_superstruct10.string)();
var CheckpointDigest = (0, import_superstruct10.string)();
var ECMHLiveObjectSetDigest = (0, import_superstruct10.object)({
  digest: (0, import_superstruct10.array)((0, import_superstruct10.number)())
});
var CheckpointCommitment = (0, import_superstruct10.any)();
var EndOfEpochData = (0, import_superstruct10.object)({
  nextEpochCommittee: (0, import_superstruct10.array)((0, import_superstruct10.tuple)([(0, import_superstruct10.string)(), (0, import_superstruct10.number)()])),
  nextEpochProtocolVersion: (0, import_superstruct10.number)(),
  epochCommitments: (0, import_superstruct10.array)(CheckpointCommitment)
});
var ExecutionDigests = (0, import_superstruct10.object)({
  transaction: TransactionDigest,
  effects: TransactionEffectsDigest
});
var Checkpoint = (0, import_superstruct10.object)({
  epoch: (0, import_superstruct10.number)(),
  sequenceNumber: (0, import_superstruct10.string)(),
  digest: CheckpointDigest,
  networkTotalTransactions: (0, import_superstruct10.number)(),
  previousDigest: (0, import_superstruct10.optional)(CheckpointDigest),
  epochRollingGasCostSummary: GasCostSummary2,
  timestampMs: (0, import_superstruct10.number)(),
  endOfEpochData: (0, import_superstruct10.optional)(EndOfEpochData),
  transactions: (0, import_superstruct10.array)(TransactionDigest),
  checkpointCommitments: (0, import_superstruct10.array)(CheckpointCommitment)
});
var CheckpointPage = (0, import_superstruct10.object)({
  data: (0, import_superstruct10.array)(Checkpoint),
  nextCursor: (0, import_superstruct10.nullable)((0, import_superstruct10.string)()),
  hasNextPage: (0, import_superstruct10.boolean)()
});

// src/cryptography/ed25519-publickey.ts
var import_blake2b = require("@noble/hashes/blake2b");
var import_bcs4 = require("@mysten/bcs");

// src/cryptography/signature.ts
var import_bcs3 = require("@mysten/bcs");
var SIGNATURE_SCHEME_TO_FLAG = {
  ED25519: 0,
  Secp256k1: 1
};
var SIGNATURE_FLAG_TO_SCHEME = {
  0: "ED25519",
  1: "Secp256k1"
};
function toSerializedSignature({
  signature,
  signatureScheme,
  pubKey
}) {
  const serializedSignature = new Uint8Array(
    1 + signature.length + pubKey.toBytes().length
  );
  serializedSignature.set([SIGNATURE_SCHEME_TO_FLAG[signatureScheme]]);
  serializedSignature.set(signature, 1);
  serializedSignature.set(pubKey.toBytes(), 1 + signature.length);
  return (0, import_bcs3.toB64)(serializedSignature);
}
function fromSerializedSignature(serializedSignature) {
  const bytes = (0, import_bcs3.fromB64)(serializedSignature);
  const signatureScheme = SIGNATURE_FLAG_TO_SCHEME[bytes[0]];
  const PublicKey2 = signatureScheme === "ED25519" ? Ed25519PublicKey : Secp256k1PublicKey;
  const signature = bytes.slice(1, bytes.length - PublicKey2.SIZE);
  const pubkeyBytes = bytes.slice(1 + signature.length);
  const pubKey = new PublicKey2(pubkeyBytes);
  return {
    signatureScheme,
    signature,
    pubKey
  };
}

// src/cryptography/ed25519-publickey.ts
var import_utils = require("@noble/hashes/utils");
var PUBLIC_KEY_SIZE = 32;
var Ed25519PublicKey = class {
  /**
   * Create a new Ed25519PublicKey object
   * @param value ed25519 public key as buffer or base-64 encoded string
   */
  constructor(value) {
    if (typeof value === "string") {
      this.data = (0, import_bcs4.fromB64)(value);
    } else if (value instanceof Uint8Array) {
      this.data = value;
    } else {
      this.data = Uint8Array.from(value);
    }
    if (this.data.length !== PUBLIC_KEY_SIZE) {
      throw new Error(
        `Invalid public key input. Expected ${PUBLIC_KEY_SIZE} bytes, got ${this.data.length}`
      );
    }
  }
  /**
   * Checks if two Ed25519 public keys are equal
   */
  equals(publicKey) {
    return bytesEqual(this.toBytes(), publicKey.toBytes());
  }
  /**
   * Return the base-64 representation of the Ed25519 public key
   */
  toBase64() {
    return (0, import_bcs4.toB64)(this.toBytes());
  }
  /**
   * Return the byte array representation of the Ed25519 public key
   */
  toBytes() {
    return this.data;
  }
  /**
   * Return the base-64 representation of the Ed25519 public key
   */
  toString() {
    return this.toBase64();
  }
  /**
   * Return the Sui address associated with this Ed25519 public key
   */
  toSuiAddress() {
    let tmp = new Uint8Array(PUBLIC_KEY_SIZE + 1);
    tmp.set([SIGNATURE_SCHEME_TO_FLAG["ED25519"]]);
    tmp.set(this.toBytes(), 1);
    return normalizeSuiAddress(
      (0, import_utils.bytesToHex)((0, import_blake2b.blake2b)(tmp, { dkLen: 32 })).slice(0, SUI_ADDRESS_LENGTH * 2)
    );
  }
};
Ed25519PublicKey.SIZE = PUBLIC_KEY_SIZE;

// src/cryptography/publickey.ts
function bytesEqual(a, b) {
  if (a === b)
    return true;
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function publicKeyFromSerialized(schema, pubKey) {
  if (schema === "ED25519") {
    return new Ed25519PublicKey(pubKey);
  }
  if (schema === "Secp256k1") {
    return new Secp256k1PublicKey(pubKey);
  }
  throw new Error("Unknown public key schema");
}

// src/cryptography/secp256k1-publickey.ts
var SECP256K1_PUBLIC_KEY_SIZE = 33;
var Secp256k1PublicKey = class {
  /**
   * Create a new Secp256k1PublicKey object
   * @param value secp256k1 public key as buffer or base-64 encoded string
   */
  constructor(value) {
    if (typeof value === "string") {
      this.data = (0, import_bcs5.fromB64)(value);
    } else if (value instanceof Uint8Array) {
      this.data = value;
    } else {
      this.data = Uint8Array.from(value);
    }
    if (this.data.length !== SECP256K1_PUBLIC_KEY_SIZE) {
      throw new Error(
        `Invalid public key input. Expected ${SECP256K1_PUBLIC_KEY_SIZE} bytes, got ${this.data.length}`
      );
    }
  }
  /**
   * Checks if two Secp256k1 public keys are equal
   */
  equals(publicKey) {
    return bytesEqual(this.toBytes(), publicKey.toBytes());
  }
  /**
   * Return the base-64 representation of the Secp256k1 public key
   */
  toBase64() {
    return (0, import_bcs5.toB64)(this.toBytes());
  }
  /**
   * Return the byte array representation of the Secp256k1 public key
   */
  toBytes() {
    return this.data;
  }
  /**
   * Return the base-64 representation of the Secp256k1 public key
   */
  toString() {
    return this.toBase64();
  }
  /**
   * Return the Sui address associated with this Secp256k1 public key
   */
  toSuiAddress() {
    let tmp = new Uint8Array(SECP256K1_PUBLIC_KEY_SIZE + 1);
    tmp.set([SIGNATURE_SCHEME_TO_FLAG["Secp256k1"]]);
    tmp.set(this.toBytes(), 1);
    return normalizeSuiAddress(
      (0, import_utils2.bytesToHex)((0, import_blake2b2.blake2b)(tmp, { dkLen: 32 })).slice(0, SUI_ADDRESS_LENGTH * 2)
    );
  }
};
Secp256k1PublicKey.SIZE = SECP256K1_PUBLIC_KEY_SIZE;

// src/cryptography/secp256k1-keypair.ts
var import_secp256k1 = require("@noble/curves/secp256k1");

// src/cryptography/mnemonics.ts
var import_bcs6 = require("@mysten/bcs");
var import_bip39 = require("@scure/bip39");
function isValidHardenedPath(path) {
  if (!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(path)) {
    return false;
  }
  return true;
}
function isValidBIP32Path(path) {
  if (!new RegExp("^m\\/54'\\/784'\\/[0-9]+'\\/[0-9]+\\/[0-9]+$").test(path)) {
    return false;
  }
  return true;
}
function mnemonicToSeed(mnemonics) {
  return (0, import_bip39.mnemonicToSeedSync)(mnemonics, "");
}
function mnemonicToSeedHex(mnemonics) {
  return (0, import_bcs6.toHEX)(mnemonicToSeed(mnemonics));
}

// src/cryptography/secp256k1-keypair.ts
var import_bip32 = require("@scure/bip32");
var import_bcs7 = require("@mysten/bcs");
var import_utils3 = require("@noble/hashes/utils");
var import_blake2b3 = require("@noble/hashes/blake2b");
var DEFAULT_SECP256K1_DERIVATION_PATH = "m/54'/784'/0'/0/0";
var Secp256k1Keypair = class {
  /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Secp256k1Keypair} is provided.
   *
   * @param keypair secp256k1 keypair
   */
  constructor(keypair) {
    if (keypair) {
      this.keypair = keypair;
    } else {
      const secretKey = import_secp256k1.secp256k1.utils.randomPrivateKey();
      const publicKey = import_secp256k1.secp256k1.getPublicKey(secretKey, true);
      this.keypair = { publicKey, secretKey };
    }
  }
  /**
   * Get the key scheme of the keypair Secp256k1
   */
  getKeyScheme() {
    return "Secp256k1";
  }
  /**
   * Generate a new random keypair
   */
  static generate() {
    return new Secp256k1Keypair();
  }
  /**
   * Create a keypair from a raw secret key byte array.
   *
   * This method should only be used to recreate a keypair from a previously
   * generated secret key. Generating keypairs from a random seed should be done
   * with the {@link Keypair.fromSeed} method.
   *
   * @throws error if the provided secret key is invalid and validation is not skipped.
   *
   * @param secretKey secret key byte array
   * @param options: skip secret key validation
   */
  static fromSecretKey(secretKey, options) {
    const publicKey = import_secp256k1.secp256k1.getPublicKey(secretKey, true);
    if (!options || !options.skipValidation) {
      const encoder = new TextEncoder();
      const signData = encoder.encode("sui validation");
      const msgHash = (0, import_utils3.bytesToHex)((0, import_blake2b3.blake2b)(signData, { dkLen: 32 }));
      const signature = import_secp256k1.secp256k1.sign(msgHash, secretKey);
      if (!import_secp256k1.secp256k1.verify(signature, msgHash, publicKey, { lowS: true })) {
        throw new Error("Provided secretKey is invalid");
      }
    }
    return new Secp256k1Keypair({ publicKey, secretKey });
  }
  /**
   * Generate a keypair from a 32 byte seed.
   *
   * @param seed seed byte array
   */
  static fromSeed(seed) {
    let publicKey = import_secp256k1.secp256k1.getPublicKey(seed, true);
    return new Secp256k1Keypair({ publicKey, secretKey: seed });
  }
  /**
   * The public key for this keypair
   */
  getPublicKey() {
    return new Secp256k1PublicKey(this.keypair.publicKey);
  }
  /**
   * Return the signature for the provided data.
   */
  signData(data) {
    const msgHash = (0, import_sha256.sha256)(data);
    const sig = import_secp256k1.secp256k1.sign(msgHash, this.keypair.secretKey, {
      lowS: true
    });
    return sig.toCompactRawBytes();
  }
  /**
   * Derive Secp256k1 keypair from mnemonics and path. The mnemonics must be normalized
   * and validated against the english wordlist.
   *
   * If path is none, it will default to m/54'/784'/0'/0/0, otherwise the path must
   * be compliant to BIP-32 in form m/54'/784'/{account_index}'/{change_index}/{address_index}.
   */
  static deriveKeypair(mnemonics, path) {
    if (path == null) {
      path = DEFAULT_SECP256K1_DERIVATION_PATH;
    }
    if (!isValidBIP32Path(path)) {
      throw new Error("Invalid derivation path");
    }
    const key = import_bip32.HDKey.fromMasterSeed(mnemonicToSeed(mnemonics)).derive(path);
    if (key.publicKey == null || key.privateKey == null) {
      throw new Error("Invalid key");
    }
    return new Secp256k1Keypair({
      publicKey: key.publicKey,
      secretKey: key.privateKey
    });
  }
  export() {
    return {
      schema: "Secp256k1",
      privateKey: (0, import_bcs7.toB64)(this.keypair.secretKey)
    };
  }
};

// src/cryptography/keypair.ts
var PRIVATE_KEY_SIZE = 32;
var LEGACY_PRIVATE_KEY_SIZE = 64;
function fromExportedKeypair(keypair) {
  const secretKey = (0, import_bcs8.fromB64)(keypair.privateKey);
  switch (keypair.schema) {
    case "ED25519":
      let pureSecretKey = secretKey;
      if (secretKey.length === LEGACY_PRIVATE_KEY_SIZE) {
        pureSecretKey = secretKey.slice(0, PRIVATE_KEY_SIZE);
      }
      return Ed25519Keypair.fromSecretKey(pureSecretKey);
    case "Secp256k1":
      return Secp256k1Keypair.fromSecretKey(secretKey);
    default:
      throw new Error(`Invalid keypair schema ${keypair.schema}`);
  }
}

// src/utils/ed25519-hd-key.ts
var import_sha512 = require("@noble/hashes/sha512");
var import_hmac = require("@noble/hashes/hmac");
var import_tweetnacl = __toESM(require("tweetnacl"));
var import_bcs9 = require("@mysten/bcs");
var ED25519_CURVE = "ed25519 seed";
var HARDENED_OFFSET = 2147483648;
var pathRegex = new RegExp("^m(\\/[0-9]+')+$");
var replaceDerive = (val) => val.replace("'", "");
var getMasterKeyFromSeed = (seed) => {
  const h = import_hmac.hmac.create(import_sha512.sha512, ED25519_CURVE);
  const I = h.update((0, import_bcs9.fromHEX)(seed)).digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return {
    key: IL,
    chainCode: IR
  };
};
var CKDPriv = ({ key, chainCode }, index) => {
  const indexBuffer = new ArrayBuffer(4);
  const cv = new DataView(indexBuffer);
  cv.setUint32(0, index);
  const data = new Uint8Array(1 + key.length + indexBuffer.byteLength);
  data.set(new Uint8Array(1).fill(0));
  data.set(key, 1);
  data.set(
    new Uint8Array(indexBuffer, 0, indexBuffer.byteLength),
    key.length + 1
  );
  const I = import_hmac.hmac.create(import_sha512.sha512, chainCode).update(data).digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return {
    key: IL,
    chainCode: IR
  };
};
var isValidPath = (path) => {
  if (!pathRegex.test(path)) {
    return false;
  }
  return !path.split("/").slice(1).map(replaceDerive).some(
    isNaN
    /* ts T_T*/
  );
};
var derivePath = (path, seed, offset = HARDENED_OFFSET) => {
  if (!isValidPath(path)) {
    throw new Error("Invalid derivation path");
  }
  const { key, chainCode } = getMasterKeyFromSeed(seed);
  const segments = path.split("/").slice(1).map(replaceDerive).map((el) => parseInt(el, 10));
  return segments.reduce(
    (parentKeys, segment) => CKDPriv(parentKeys, segment + offset),
    { key, chainCode }
  );
};

// src/cryptography/ed25519-keypair.ts
var import_bcs10 = require("@mysten/bcs");
var DEFAULT_ED25519_DERIVATION_PATH = "m/44'/784'/0'/0'/0'";
var Ed25519Keypair = class {
  /**
   * Create a new Ed25519 keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param keypair Ed25519 keypair
   */
  constructor(keypair) {
    if (keypair) {
      this.keypair = keypair;
    } else {
      this.keypair = import_tweetnacl2.default.sign.keyPair();
    }
  }
  /**
   * Get the key scheme of the keypair ED25519
   */
  getKeyScheme() {
    return "ED25519";
  }
  /**
   * Generate a new random Ed25519 keypair
   */
  static generate() {
    return new Ed25519Keypair(import_tweetnacl2.default.sign.keyPair());
  }
  /**
   * Create a Ed25519 keypair from a raw secret key byte array, also known as seed.
   * This is NOT the private scalar which is result of hashing and bit clamping of
   * the raw secret key.
   *
   * The sui.keystore key is a list of Base64 encoded `flag || privkey`. To import
   * a key from sui.keystore to typescript, decode from base64 and remove the first
   * flag byte after checking it is indeed the Ed25519 scheme flag 0x00 (See more
   * on flag for signature scheme: https://github.com/MystenLabs/sui/blob/818406c5abdf7de1b80915a0519071eec3a5b1c7/crates/sui-types/src/crypto.rs#L1650):
   * ```
   * import { Ed25519Keypair, fromB64 } from '@mysten/sui.js';
   * const raw = fromB64(t[1]);
   * if (raw[0] !== 0 || raw.length !== PRIVATE_KEY_SIZE + 1) {
   *   throw new Error('invalid key');
   * }
   * const imported = Ed25519Keypair.fromSecretKey(raw.slice(1))
   * ```
   * @throws error if the provided secret key is invalid and validation is not skipped.
   *
   * @param secretKey secret key byte array
   * @param options: skip secret key validation
   */
  static fromSecretKey(secretKey, options) {
    const secretKeyLength = secretKey.length;
    if (secretKeyLength !== PRIVATE_KEY_SIZE) {
      throw new Error(
        `Wrong secretKey size. Expected ${PRIVATE_KEY_SIZE} bytes, got ${secretKeyLength}.`
      );
    }
    const keypair = import_tweetnacl2.default.sign.keyPair.fromSeed(secretKey);
    if (!options || !options.skipValidation) {
      const encoder = new TextEncoder();
      const signData = encoder.encode("sui validation");
      const signature = import_tweetnacl2.default.sign.detached(signData, keypair.secretKey);
      if (!import_tweetnacl2.default.sign.detached.verify(signData, signature, keypair.publicKey)) {
        throw new Error("provided secretKey is invalid");
      }
    }
    return new Ed25519Keypair(keypair);
  }
  /**
   * The public key for this Ed25519 keypair
   */
  getPublicKey() {
    return new Ed25519PublicKey(this.keypair.publicKey);
  }
  /**
   * Return the signature for the provided data using Ed25519.
   */
  signData(data) {
    return import_tweetnacl2.default.sign.detached(data, this.keypair.secretKey);
  }
  /**
   * Derive Ed25519 keypair from mnemonics and path. The mnemonics must be normalized
   * and validated against the english wordlist.
   *
   * If path is none, it will default to m/44'/784'/0'/0'/0', otherwise the path must
   * be compliant to SLIP-0010 in form m/44'/784'/{account_index}'/{change_index}'/{address_index}'.
   */
  static deriveKeypair(mnemonics, path) {
    if (path == null) {
      path = DEFAULT_ED25519_DERIVATION_PATH;
    }
    if (!isValidHardenedPath(path)) {
      throw new Error("Invalid derivation path");
    }
    const { key } = derivePath(path, mnemonicToSeedHex(mnemonics));
    return Ed25519Keypair.fromSecretKey(key);
  }
  /**
   * This returns an exported keypair object, the private key field is the pure 32-byte seed.
   */
  export() {
    return {
      schema: "ED25519",
      privateKey: (0, import_bcs10.toB64)(this.keypair.secretKey.slice(0, PRIVATE_KEY_SIZE))
    };
  }
};

// src/rpc/client.ts
var import_browser = __toESM(require("jayson/lib/client/browser/index.js"));
var import_superstruct11 = require("superstruct");

// src/pkg-version.ts
var pkgVersion = "0.30.0";

// src/utils/errors.ts
var RPCError = class extends Error {
  constructor(options) {
    super("RPC Error", { cause: options.cause });
    this.req = options.req;
    this.code = options.code;
    this.data = options.data;
  }
};
var RPCValidationError = class extends Error {
  constructor(options) {
    super(
      "RPC Validation Error: The response returned from RPC server does not match the TypeScript definition. This is likely because the SDK version is not compatible with the RPC server.",
      { cause: options.cause }
    );
    this.req = options.req;
    this.result = options.result;
    this.message = this.toString();
  }
  toString() {
    let str = super.toString();
    if (this.cause) {
      str += `
Cause: ${this.cause}`;
    }
    if (this.result) {
      str += `
Reponse Received: ${JSON.stringify(this.result, null, 2)}`;
    }
    return str;
  }
};
var FaucetRateLimitError = class extends Error {
};

// src/rpc/client.ts
var import_node_fetch = __toESM(require("node-fetch"));
var ValidResponse = (0, import_superstruct11.object)({
  jsonrpc: (0, import_superstruct11.literal)("2.0"),
  id: (0, import_superstruct11.string)(),
  result: (0, import_superstruct11.any)()
});
var ErrorResponse = (0, import_superstruct11.object)({
  jsonrpc: (0, import_superstruct11.literal)("2.0"),
  id: (0, import_superstruct11.string)(),
  error: (0, import_superstruct11.object)({
    code: (0, import_superstruct11.any)(),
    message: (0, import_superstruct11.string)(),
    data: (0, import_superstruct11.optional)((0, import_superstruct11.any)())
  })
});
var JsonRpcClient = class {
  constructor(url, httpHeaders) {
    this.rpcClient = new import_browser.default(
      async (request, callback) => {
        const options = {
          method: "POST",
          body: request,
          headers: {
            "Content-Type": "application/json",
            "Client-Sdk-Type": "typescript",
            "Client-Sdk-Version": pkgVersion,
            "Client-Target-Api-Version": TARGETED_RPC_VERSION,
            ...httpHeaders
          }
        };
        try {
          let res = await (0, import_node_fetch.default)(url, options);
          const result = await res.text();
          if (res.ok) {
            callback(null, result);
          } else {
            const isHtml = res.headers.get("content-type") === "text/html";
            callback(
              new Error(
                `${res.status} ${res.statusText}${isHtml ? "" : `: ${result}`}`
              )
            );
          }
        } catch (err) {
          callback(err);
        }
      },
      {}
    );
  }
  async requestWithType(method, args, struct, skipDataValidation = false) {
    const req = { method, args };
    const response = await this.request(method, args);
    if ((0, import_superstruct11.is)(response, ErrorResponse)) {
      throw new RPCError({
        req,
        code: response.error.code,
        data: response.error.data,
        cause: new Error(response.error.message)
      });
    } else if ((0, import_superstruct11.is)(response, ValidResponse)) {
      const [err] = (0, import_superstruct11.validate)(response.result, struct);
      if (skipDataValidation && err) {
        console.warn(
          new RPCValidationError({
            req,
            result: response.result,
            cause: err
          })
        );
        return response.result;
      } else if (err) {
        throw new RPCValidationError({
          req,
          result: response.result,
          cause: err
        });
      }
      return response.result;
    }
    throw new RPCError({ req, data: response });
  }
  async request(method, args) {
    return new Promise((resolve, reject) => {
      this.rpcClient.request(method, args, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }
};

// src/types/dynamic_fields.ts
var import_superstruct12 = require("superstruct");
var DynamicFieldType = (0, import_superstruct12.union)([
  (0, import_superstruct12.literal)("DynamicField"),
  (0, import_superstruct12.literal)("DynamicObject")
]);
var DynamicFieldName = (0, import_superstruct12.object)({
  type: (0, import_superstruct12.string)(),
  value: (0, import_superstruct12.any)()
});
var DynamicFieldInfo = (0, import_superstruct12.object)({
  name: DynamicFieldName,
  bcsName: (0, import_superstruct12.string)(),
  type: DynamicFieldType,
  objectType: (0, import_superstruct12.string)(),
  objectId: ObjectId,
  version: (0, import_superstruct12.number)(),
  digest: (0, import_superstruct12.string)()
});
var DynamicFieldPage = (0, import_superstruct12.object)({
  data: (0, import_superstruct12.array)(DynamicFieldInfo),
  nextCursor: (0, import_superstruct12.nullable)(ObjectId),
  hasNextPage: (0, import_superstruct12.boolean)()
});

// src/rpc/websocket-client.ts
var import_superstruct13 = require("superstruct");
var import_rpc_websockets = require("rpc-websockets");
var getWebsocketUrl = (httpUrl, port) => {
  const url = new URL(httpUrl);
  url.protocol = url.protocol.replace("http", "ws");
  if (port) {
    url.port = port.toString();
  }
  return url.toString();
};
var isMinimumSubscriptionMessage = (msg) => msg && "subscription" in msg && typeof msg["subscription"] === "number" && "result" in msg && typeof msg["result"] === "object";
var DEFAULT_CLIENT_OPTIONS = {
  connectTimeout: 15e3,
  callTimeout: 3e4,
  reconnectInterval: 3e3,
  maxReconnects: 5
};
var SUBSCRIBE_EVENT_METHOD = "suix_subscribeEvent";
var UNSUBSCRIBE_EVENT_METHOD = "suix_unsubscribeEvent";
var WebsocketClient = class {
  /**
   * @param endpoint Sui node endpoint to connect to (accepts websocket & http)
   * @param skipValidation If `true`, the rpc client will not check if the responses
   * from the RPC server conform to the schema defined in the TypeScript SDK
   * @param options Configuration options, such as timeouts & connection behavior
   */
  constructor(endpoint, skipValidation, options = DEFAULT_CLIENT_OPTIONS) {
    this.endpoint = endpoint;
    this.skipValidation = skipValidation;
    this.options = options;
    this.connectionState = 0 /* NotConnected */;
    this.connectionTimeout = null;
    this.isSetup = false;
    this.connectionPromise = null;
    this.eventSubscriptions = /* @__PURE__ */ new Map();
    if (this.endpoint.startsWith("http"))
      this.endpoint = getWebsocketUrl(this.endpoint);
    this.rpcClient = new import_rpc_websockets.Client(this.endpoint, {
      reconnect_interval: this.options.reconnectInterval,
      max_reconnects: this.options.maxReconnects,
      autoconnect: false
    });
  }
  setupSocket() {
    if (this.isSetup)
      return;
    this.rpcClient.on("open", () => {
      if (this.connectionTimeout) {
        clearTimeout(this.connectionTimeout);
        this.connectionTimeout = null;
      }
      this.connectionState = 2 /* Connected */;
      this.rpcClient.socket.on(
        "message",
        this.onSocketMessage.bind(this)
      );
    });
    this.rpcClient.on("close", () => {
      this.connectionState = 0 /* NotConnected */;
    });
    this.rpcClient.on("error", console.error);
    this.isSetup = true;
  }
  // called for every message received from the node over websocket
  onSocketMessage(rawMessage) {
    const msg = JSON.parse(rawMessage);
    const params = msg.params;
    if (msg.method === SUBSCRIBE_EVENT_METHOD) {
      if (this.skipValidation && isMinimumSubscriptionMessage(params)) {
        const sub = this.eventSubscriptions.get(params.subscription);
        if (sub)
          sub.onMessage(params.result);
      } else if ((0, import_superstruct13.is)(params, SubscriptionEvent)) {
        const sub = this.eventSubscriptions.get(params.subscription);
        if (sub)
          sub.onMessage(params.result);
      }
    }
  }
  async connect() {
    if (this.connectionPromise)
      return this.connectionPromise;
    if (this.connectionState === 2 /* Connected */)
      return Promise.resolve();
    this.setupSocket();
    this.rpcClient.connect();
    this.connectionState = 1 /* Connecting */;
    this.connectionPromise = new Promise((resolve, reject) => {
      this.connectionTimeout = setTimeout(
        () => reject(new Error("timeout")),
        this.options.connectTimeout
      );
      this.rpcClient.once("open", () => {
        this.refreshSubscriptions();
        this.connectionPromise = null;
        resolve();
      });
      this.rpcClient.once("error", (err) => {
        this.connectionPromise = null;
        reject(err);
      });
    });
    return this.connectionPromise;
  }
  /**
    call only upon reconnecting to a node over websocket.
    calling multiple times on the same connection will result
    in multiple message handlers firing each time
  */
  async refreshSubscriptions() {
    if (this.eventSubscriptions.size === 0)
      return;
    try {
      let newSubs = /* @__PURE__ */ new Map();
      let newSubsArr = await Promise.all(
        Array.from(this.eventSubscriptions.values()).map(async (sub) => {
          const onMessage = sub.onMessage;
          const filter = sub.filter;
          if (!filter || !onMessage)
            return Promise.resolve(null);
          const id = await this.subscribeEvent(filter, onMessage);
          return { id, onMessage, filter };
        })
      );
      newSubsArr.forEach((entry) => {
        if (entry === null)
          return;
        const filter = entry.filter;
        const onMessage = entry.onMessage;
        newSubs.set(entry.id, { filter, onMessage });
      });
      this.eventSubscriptions = newSubs;
    } catch (err) {
      throw new Error(`error refreshing event subscriptions: ${err}`);
    }
  }
  async subscribeEvent(filter, onMessage) {
    try {
      if (this.connectionState !== 2 /* Connected */)
        await this.connect();
      let subId = await this.rpcClient.call(
        SUBSCRIBE_EVENT_METHOD,
        [filter],
        this.options.callTimeout
      );
      this.eventSubscriptions.set(subId, { filter, onMessage });
      return subId;
    } catch (err) {
      throw new Error(
        `Error subscribing to event: ${JSON.stringify(
          err,
          null,
          2
        )}, filter: ${JSON.stringify(filter)}`
      );
    }
  }
  async unsubscribeEvent(id) {
    try {
      if (this.connectionState !== 2 /* Connected */)
        await this.connect();
      let removedOnNode = await this.rpcClient.call(
        UNSUBSCRIBE_EVENT_METHOD,
        [id],
        this.options.callTimeout
      );
      return this.eventSubscriptions.delete(id) || removedOnNode;
    } catch (err) {
      throw new Error(
        `Error unsubscribing from event: ${err}, subscription: ${id}`
      );
    }
  }
};

// src/rpc/faucet-client.ts
var import_node_fetch2 = __toESM(require("node-fetch"));
async function requestSuiFromFaucet(endpoint, recipient, httpHeaders) {
  const res = await (0, import_node_fetch2.default)(endpoint, {
    method: "POST",
    body: JSON.stringify({
      FixedAmountRequest: {
        recipient
      }
    }),
    headers: {
      "Content-Type": "application/json",
      ...httpHeaders || {}
    }
  });
  if (res.status === 429) {
    throw new FaucetRateLimitError(
      `Too many requests from this client have been sent to the faucet. Please retry later`
    );
  }
  let parsed;
  try {
    parsed = await res.json();
  } catch (e) {
    throw new Error(
      `Ecountered error when parsing response from faucet, error: ${e}, status ${res.status}, response ${res}`
    );
  }
  if (parsed.error) {
    throw new Error(`Faucet returns error: ${parsed.error}`);
  }
  return parsed;
}

// src/providers/json-rpc-provider.ts
var import_superstruct21 = require("superstruct");
var import_bcs17 = require("@mysten/bcs");

// src/rpc/connection.ts
var _options;
var Connection = class {
  constructor(options) {
    __privateAdd(this, _options, void 0);
    __privateSet(this, _options, options);
  }
  get fullnode() {
    return __privateGet(this, _options).fullnode;
  }
  // TODO: Decide if we should default the websocket URL like this:
  get websocket() {
    return __privateGet(this, _options).websocket || __privateGet(this, _options).fullnode;
  }
  get faucet() {
    return __privateGet(this, _options).faucet;
  }
};
_options = new WeakMap();
var localnetConnection = new Connection({
  fullnode: "http://127.0.0.1:9000",
  faucet: "http://127.0.0.1:9123/gas"
});
var devnetConnection = new Connection({
  fullnode: "https://fullnode.devnet.sui.io:443/",
  faucet: "https://faucet.devnet.sui.io/gas"
});

// src/builder/TransactionBlock.ts
var import_bcs16 = require("@mysten/bcs");
var import_superstruct18 = require("superstruct");

// src/builder/Transactions.ts
var import_bcs11 = require("@mysten/bcs");
var import_superstruct15 = require("superstruct");

// src/builder/utils.ts
var import_superstruct14 = require("superstruct");
function create(value, struct) {
  return (0, import_superstruct14.create)(value, struct);
}
var TRANSACTION_TYPE = Symbol("transaction-argument-type");

// src/builder/Transactions.ts
var option = (some) => (0, import_superstruct15.union)([(0, import_superstruct15.object)({ None: (0, import_superstruct15.literal)(null) }), (0, import_superstruct15.object)({ Some: some })]);
var TransactionBlockInput = (0, import_superstruct15.object)({
  kind: (0, import_superstruct15.literal)("Input"),
  index: (0, import_superstruct15.integer)(),
  value: (0, import_superstruct15.optional)((0, import_superstruct15.any)()),
  type: (0, import_superstruct15.optional)((0, import_superstruct15.union)([(0, import_superstruct15.literal)("pure"), (0, import_superstruct15.literal)("object")]))
});
var TransactionArgumentTypes = [
  TransactionBlockInput,
  (0, import_superstruct15.object)({ kind: (0, import_superstruct15.literal)("GasCoin") }),
  (0, import_superstruct15.object)({ kind: (0, import_superstruct15.literal)("Result"), index: (0, import_superstruct15.integer)() }),
  (0, import_superstruct15.object)({
    kind: (0, import_superstruct15.literal)("NestedResult"),
    index: (0, import_superstruct15.integer)(),
    resultIndex: (0, import_superstruct15.integer)()
  })
];
var TransactionArgument = (0, import_superstruct15.union)([...TransactionArgumentTypes]);
var ObjectTransactionArgument = (0, import_superstruct15.union)([...TransactionArgumentTypes]);
ObjectTransactionArgument[TRANSACTION_TYPE] = {
  kind: "object"
};
var PureTransactionArgument = (type) => {
  const struct = (0, import_superstruct15.union)([...TransactionArgumentTypes]);
  struct[TRANSACTION_TYPE] = {
    kind: "pure",
    type
  };
  return struct;
};
var MoveCallTransaction = (0, import_superstruct15.object)({
  kind: (0, import_superstruct15.literal)("MoveCall"),
  target: (0, import_superstruct15.define)(
    "target",
    (0, import_superstruct15.string)().validator
  ),
  typeArguments: (0, import_superstruct15.array)((0, import_superstruct15.string)()),
  arguments: (0, import_superstruct15.array)(TransactionArgument)
});
var TransferObjectsTransaction = (0, import_superstruct15.object)({
  kind: (0, import_superstruct15.literal)("TransferObjects"),
  objects: (0, import_superstruct15.array)(ObjectTransactionArgument),
  address: PureTransactionArgument(import_bcs11.BCS.ADDRESS)
});
var SplitCoinsTransaction = (0, import_superstruct15.object)({
  kind: (0, import_superstruct15.literal)("SplitCoins"),
  coin: ObjectTransactionArgument,
  amounts: (0, import_superstruct15.array)(PureTransactionArgument("u64"))
});
var MergeCoinsTransaction = (0, import_superstruct15.object)({
  kind: (0, import_superstruct15.literal)("MergeCoins"),
  destination: ObjectTransactionArgument,
  sources: (0, import_superstruct15.array)(ObjectTransactionArgument)
});
var MakeMoveVecTransaction = (0, import_superstruct15.object)({
  kind: (0, import_superstruct15.literal)("MakeMoveVec"),
  type: (0, import_superstruct15.optional)(option((0, import_superstruct15.string)())),
  objects: (0, import_superstruct15.array)(ObjectTransactionArgument)
});
var PublishTransaction = (0, import_superstruct15.object)({
  kind: (0, import_superstruct15.literal)("Publish"),
  modules: (0, import_superstruct15.array)((0, import_superstruct15.array)((0, import_superstruct15.integer)())),
  dependencies: (0, import_superstruct15.array)(ObjectId)
});
var TransactionTypes = [
  MoveCallTransaction,
  TransferObjectsTransaction,
  SplitCoinsTransaction,
  MergeCoinsTransaction,
  PublishTransaction,
  MakeMoveVecTransaction
];
var TransactionType = (0, import_superstruct15.union)([...TransactionTypes]);
function getTransactionType(data) {
  (0, import_superstruct15.assert)(data, TransactionType);
  return TransactionTypes.find((schema) => (0, import_superstruct15.is)(data, schema));
}
var Transactions = {
  MoveCall(input) {
    return create(
      {
        kind: "MoveCall",
        target: input.target,
        arguments: input.arguments ?? [],
        typeArguments: input.typeArguments ?? []
      },
      MoveCallTransaction
    );
  },
  TransferObjects(objects, address) {
    return create(
      { kind: "TransferObjects", objects, address },
      TransferObjectsTransaction
    );
  },
  SplitCoins(coin, amounts) {
    return create({ kind: "SplitCoins", coin, amounts }, SplitCoinsTransaction);
  },
  MergeCoins(destination, sources) {
    return create(
      { kind: "MergeCoins", destination, sources },
      MergeCoinsTransaction
    );
  },
  Publish(modules, dependencies) {
    return create(
      { kind: "Publish", modules, dependencies },
      PublishTransaction
    );
  },
  MakeMoveVec({
    type,
    objects
  }) {
    return create(
      {
        kind: "MakeMoveVec",
        type: type ? { Some: type } : { None: null },
        objects
      },
      MakeMoveVecTransaction
    );
  }
};

// src/builder/Inputs.ts
var import_superstruct16 = require("superstruct");

// src/builder/bcs.ts
var import_bcs12 = require("@mysten/bcs");

// src/signers/txn-data-serializers/type-tag-serializer.ts
var VECTOR_REGEX = /^vector<(.+)>$/;
var STRUCT_REGEX = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
var TypeTagSerializer = class {
  static parseFromStr(str, normalizeAddress = false) {
    if (str === "address") {
      return { address: null };
    } else if (str === "bool") {
      return { bool: null };
    } else if (str === "u8") {
      return { u8: null };
    } else if (str === "u16") {
      return { u16: null };
    } else if (str === "u32") {
      return { u32: null };
    } else if (str === "u64") {
      return { u64: null };
    } else if (str === "u128") {
      return { u128: null };
    } else if (str === "u256") {
      return { u256: null };
    } else if (str === "signer") {
      return { signer: null };
    }
    const vectorMatch = str.match(VECTOR_REGEX);
    if (vectorMatch) {
      return {
        vector: TypeTagSerializer.parseFromStr(
          vectorMatch[1],
          normalizeAddress
        )
      };
    }
    const structMatch = str.match(STRUCT_REGEX);
    if (structMatch) {
      const address = normalizeAddress ? normalizeSuiAddress(structMatch[1]) : structMatch[1];
      return {
        struct: {
          address,
          module: structMatch[2],
          name: structMatch[3],
          typeParams: structMatch[5] === void 0 ? [] : TypeTagSerializer.parseStructTypeArgs(
            structMatch[5],
            normalizeAddress
          )
        }
      };
    }
    throw new Error(
      `Encountered unexpected token when parsing type args for ${str}`
    );
  }
  static parseStructTypeArgs(str, normalizeAddress = false) {
    const tok = [];
    let word = "";
    let nestedAngleBrackets = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === "<") {
        nestedAngleBrackets++;
      }
      if (char === ">") {
        nestedAngleBrackets--;
      }
      if (nestedAngleBrackets === 0 && char === ",") {
        tok.push(word.trim());
        word = "";
        continue;
      }
      word += char;
    }
    tok.push(word.trim());
    return tok.map(
      (tok2) => TypeTagSerializer.parseFromStr(tok2, normalizeAddress)
    );
  }
  static tagToString(tag) {
    if ("bool" in tag) {
      return "bool";
    }
    if ("u8" in tag) {
      return "u8";
    }
    if ("u16" in tag) {
      return "u16";
    }
    if ("u32" in tag) {
      return "u32";
    }
    if ("u64" in tag) {
      return "u64";
    }
    if ("u128" in tag) {
      return "u128";
    }
    if ("u256" in tag) {
      return "u256";
    }
    if ("address" in tag) {
      return "address";
    }
    if ("signer" in tag) {
      return "signer";
    }
    if ("vector" in tag) {
      return `vector<${TypeTagSerializer.tagToString(tag.vector)}>`;
    }
    if ("struct" in tag) {
      const struct = tag.struct;
      const typeParams = struct.typeParams.map(TypeTagSerializer.tagToString).join(", ");
      return `${struct.address}::${struct.module}::${struct.name}${typeParams ? `<${typeParams}>` : ""}`;
    }
    throw new Error("Invalid TypeTag");
  }
};

// src/builder/bcs.ts
var ARGUMENT_INNER = "Argument";
var VECTOR2 = "vector";
var OPTION = "Option";
var CALL_ARG = "CallArg";
var TYPE_TAG = "TypeTag";
var OBJECT_ARG = "ObjectArg";
var PROGRAMMABLE_TX_BLOCK = "ProgrammableTransaction";
var PROGRAMMABLE_CALL_INNER = "ProgrammableMoveCall";
var TRANSACTION_INNER = "Transaction";
var ENUM_KIND = "EnumKind";
var TRANSACTION = [ENUM_KIND, TRANSACTION_INNER];
var ARGUMENT = [ENUM_KIND, ARGUMENT_INNER];
var PROGRAMMABLE_CALL = "SimpleProgrammableMoveCall";
var builder = new import_bcs12.BCS(bcs).registerStructType(PROGRAMMABLE_TX_BLOCK, {
  inputs: [VECTOR2, CALL_ARG],
  transactions: [VECTOR2, TRANSACTION]
}).registerEnumType(ARGUMENT_INNER, {
  GasCoin: null,
  Input: { index: import_bcs12.BCS.U16 },
  Result: { index: import_bcs12.BCS.U16 },
  NestedResult: { index: import_bcs12.BCS.U16, resultIndex: import_bcs12.BCS.U16 }
}).registerStructType(PROGRAMMABLE_CALL_INNER, {
  package: import_bcs12.BCS.ADDRESS,
  module: import_bcs12.BCS.STRING,
  function: import_bcs12.BCS.STRING,
  type_arguments: [VECTOR2, TYPE_TAG],
  arguments: [VECTOR2, ARGUMENT]
}).registerEnumType(TRANSACTION_INNER, {
  /**
   * A Move Call - any public Move function can be called via
   * this transaction. The results can be used that instant to pass
   * into the next transaction.
   */
  MoveCall: PROGRAMMABLE_CALL,
  /**
   * Transfer vector of objects to a receiver.
   */
  TransferObjects: {
    objects: [VECTOR2, ARGUMENT],
    address: ARGUMENT
  },
  /**
   * Split `amount` from a `coin`.
   */
  SplitCoins: { coin: ARGUMENT, amounts: [VECTOR2, ARGUMENT] },
  /**
   * Merge Vector of Coins (`sources`) into a `destination`.
   */
  MergeCoins: { destination: ARGUMENT, sources: [VECTOR2, ARGUMENT] },
  /**
   * Publish a Move module.
   */
  Publish: {
    modules: [VECTOR2, [VECTOR2, import_bcs12.BCS.U8]],
    dependencies: [VECTOR2, import_bcs12.BCS.ADDRESS]
  },
  /**
   * Build a vector of objects using the input arguments.
   * It is impossible to construct a `vector<T: key>` otherwise,
   * so this call serves a utility function.
   */
  MakeMoveVec: {
    type: [OPTION, TYPE_TAG],
    objects: [VECTOR2, ARGUMENT]
  }
});
builder.registerType(
  [ENUM_KIND, "T"],
  function encode(writer, data, typeParams, typeMap) {
    const kind = data.kind;
    const invariant = { [kind]: data };
    const [enumType] = typeParams;
    return this.getTypeInterface(enumType)._encodeRaw.call(
      this,
      writer,
      invariant,
      typeParams,
      typeMap
    );
  },
  function decode(reader, typeParams, typeMap) {
    const [enumType] = typeParams;
    const data = this.getTypeInterface(enumType)._decodeRaw.call(
      this,
      reader,
      typeParams,
      typeMap
    );
    const kind = Object.keys(data)[0];
    return { kind, ...data[kind] };
  },
  (data) => {
    if (typeof data !== "object" && !("kind" in data)) {
      throw new Error(
        `EnumKind: Missing property "kind" in the input ${JSON.stringify(
          data
        )}`
      );
    }
    return true;
  }
);
builder.registerType(
  PROGRAMMABLE_CALL,
  function encodeProgrammableTx(writer, data, typeParams, typeMap) {
    const [pkg, module2, fun] = data.target.split("::");
    const type_arguments = data.typeArguments.map(
      (tag) => TypeTagSerializer.parseFromStr(tag, true)
    );
    return this.getTypeInterface(PROGRAMMABLE_CALL_INNER)._encodeRaw.call(
      this,
      writer,
      {
        package: normalizeSuiAddress(pkg),
        module: module2,
        function: fun,
        type_arguments,
        arguments: data.arguments
      },
      typeParams,
      typeMap
    );
  },
  function decodeProgrammableTx(reader, typeParams, typeMap) {
    let data = builder.getTypeInterface(PROGRAMMABLE_CALL_INNER)._decodeRaw.call(this, reader, typeParams, typeMap);
    return {
      target: [data.package, data.module, data.function].join("::"),
      arguments: data.arguments,
      typeArguments: data.type_arguments.map(TypeTagSerializer.tagToString)
    };
  },
  // Validation callback to error out if the data format is invalid.
  // TODO: make sure TypeTag can be parsed.
  (data) => {
    return data.target.split("::").length === 3;
  }
);

// src/builder/Inputs.ts
var ObjectArg = (0, import_superstruct16.union)([
  (0, import_superstruct16.object)({ ImmOrOwned: SuiObjectRef }),
  (0, import_superstruct16.object)({
    Shared: (0, import_superstruct16.object)({
      objectId: (0, import_superstruct16.string)(),
      initialSharedVersion: (0, import_superstruct16.union)([(0, import_superstruct16.integer)(), (0, import_superstruct16.string)()]),
      mutable: (0, import_superstruct16.boolean)()
    })
  })
]);
var PureCallArg = (0, import_superstruct16.object)({ Pure: (0, import_superstruct16.array)((0, import_superstruct16.integer)()) });
var ObjectCallArg = (0, import_superstruct16.object)({ Object: ObjectArg });
var BuilderCallArg = (0, import_superstruct16.union)([PureCallArg, ObjectCallArg]);
var Inputs = {
  Pure(data, type) {
    return {
      Pure: Array.from(
        data instanceof Uint8Array ? data : builder.ser(type, data).toBytes()
      )
    };
  },
  ObjectRef(ref) {
    return { Object: { ImmOrOwned: ref } };
  },
  SharedObjectRef(ref) {
    return { Object: { Shared: ref } };
  }
};
function getIdFromCallArg(arg) {
  if (typeof arg === "string") {
    return normalizeSuiAddress(arg);
  }
  if ("ImmOrOwned" in arg.Object) {
    return arg.Object.ImmOrOwned.objectId;
  }
  return arg.Object.Shared.objectId;
}
function getSharedObjectInput(arg) {
  return typeof arg === "object" && "Object" in arg && "Shared" in arg.Object ? arg.Object.Shared : void 0;
}
function isSharedObjectInput(arg) {
  return !!getSharedObjectInput(arg);
}
function isMutableSharedObjectInput(arg) {
  return getSharedObjectInput(arg)?.mutable ?? false;
}

// src/builder/serializer.ts
var STD_ASCII_MODULE_NAME = "ascii";
var STD_ASCII_STRUCT_NAME = "String";
var STD_UTF8_MODULE_NAME = "string";
var STD_UTF8_STRUCT_NAME = "String";
var STD_OPTION_MODULE_NAME = "option";
var STD_OPTION_STRUCT_NAME = "Option";
var RESOLVED_SUI_ID = {
  address: SUI_FRAMEWORK_ADDRESS,
  module: OBJECT_MODULE_NAME,
  name: ID_STRUCT_NAME
};
var RESOLVED_ASCII_STR = {
  address: MOVE_STDLIB_ADDRESS,
  module: STD_ASCII_MODULE_NAME,
  name: STD_ASCII_STRUCT_NAME
};
var RESOLVED_UTF8_STR = {
  address: MOVE_STDLIB_ADDRESS,
  module: STD_UTF8_MODULE_NAME,
  name: STD_UTF8_STRUCT_NAME
};
var RESOLVED_STD_OPTION = {
  address: MOVE_STDLIB_ADDRESS,
  module: STD_OPTION_MODULE_NAME,
  name: STD_OPTION_STRUCT_NAME
};
var isSameStruct = (a, b) => a.address === b.address && a.module === b.module && a.name === b.name;
function isTxContext(param) {
  const struct = extractStructTag(param)?.Struct;
  return struct?.address === "0x2" && struct?.module === "tx_context" && struct?.name === "TxContext";
}
function expectType(typeName, argVal) {
  if (typeof argVal === "undefined") {
    return;
  }
  if (typeof argVal !== typeName) {
    throw new Error(
      `Expect ${argVal} to be ${typeName}, received ${typeof argVal}`
    );
  }
}
var allowedTypes = [
  "Address",
  "Bool",
  "U8",
  "U16",
  "U32",
  "U64",
  "U128",
  "U256"
];
function getPureSerializationType(normalizedType, argVal) {
  if (typeof normalizedType === "string" && allowedTypes.includes(normalizedType)) {
    if (normalizedType in ["U8", "U16", "U32", "U64", "U128", "U256"]) {
      expectType("number", argVal);
    } else if (normalizedType === "Bool") {
      expectType("boolean", argVal);
    } else if (normalizedType === "Address") {
      expectType("string", argVal);
      if (argVal && !isValidSuiAddress(argVal)) {
        throw new Error("Invalid Sui Address");
      }
    }
    return normalizedType.toLowerCase();
  } else if (typeof normalizedType === "string") {
    throw new Error(
      `Unknown pure normalized type ${JSON.stringify(normalizedType, null, 2)}`
    );
  }
  if ("Vector" in normalizedType) {
    if ((argVal === void 0 || typeof argVal === "string") && normalizedType.Vector === "U8") {
      return "string";
    }
    if (argVal !== void 0 && !Array.isArray(argVal)) {
      throw new Error(
        `Expect ${argVal} to be a array, received ${typeof argVal}`
      );
    }
    const innerType = getPureSerializationType(
      normalizedType.Vector,
      // undefined when argVal is empty
      argVal ? argVal[0] : void 0
    );
    if (innerType === void 0) {
      return;
    }
    return `vector<${innerType}>`;
  }
  if ("Struct" in normalizedType) {
    if (isSameStruct(normalizedType.Struct, RESOLVED_ASCII_STR)) {
      return "string";
    } else if (isSameStruct(normalizedType.Struct, RESOLVED_UTF8_STR)) {
      return "utf8string";
    } else if (isSameStruct(normalizedType.Struct, RESOLVED_SUI_ID)) {
      return "address";
    } else if (isSameStruct(normalizedType.Struct, RESOLVED_STD_OPTION)) {
      const optionToVec = {
        Vector: normalizedType.Struct.typeArguments[0]
      };
      return getPureSerializationType(optionToVec, argVal);
    }
  }
  return void 0;
}

// src/builder/TransactionBlockData.ts
var import_bcs14 = require("@mysten/bcs");
var import_superstruct17 = require("superstruct");

// src/cryptography/hash.ts
var import_blake2b4 = require("@noble/hashes/blake2b");
function hashTypedData(typeTag, data) {
  const typeTagBytes = Array.from(`${typeTag}::`).map((e) => e.charCodeAt(0));
  const dataWithTag = new Uint8Array(typeTagBytes.length + data.length);
  dataWithTag.set(typeTagBytes);
  dataWithTag.set(data, typeTagBytes.length);
  return (0, import_blake2b4.blake2b)(dataWithTag, { dkLen: 32 });
}

// src/builder/TransactionBlockData.ts
var TransactionExpiration = (0, import_superstruct17.optional)(
  (0, import_superstruct17.nullable)(
    (0, import_superstruct17.union)([
      (0, import_superstruct17.object)({ Epoch: (0, import_superstruct17.integer)() }),
      (0, import_superstruct17.object)({ None: (0, import_superstruct17.union)([(0, import_superstruct17.literal)(true), (0, import_superstruct17.literal)(null)]) })
    ])
  )
);
var SuiAddress3 = (0, import_superstruct17.string)();
var StringEncodedBigint = (0, import_superstruct17.define)("StringEncodedBigint", (val) => {
  if (!["string", "number", "bigint"].includes(typeof val))
    return false;
  try {
    BigInt(val);
    return true;
  } catch {
    return false;
  }
});
var GasConfig = (0, import_superstruct17.object)({
  budget: (0, import_superstruct17.optional)(StringEncodedBigint),
  price: (0, import_superstruct17.optional)(StringEncodedBigint),
  payment: (0, import_superstruct17.optional)((0, import_superstruct17.array)(SuiObjectRef)),
  owner: (0, import_superstruct17.optional)(SuiAddress3)
});
var SerializedTransactionDataBuilder = (0, import_superstruct17.object)({
  version: (0, import_superstruct17.literal)(1),
  sender: (0, import_superstruct17.optional)(SuiAddress3),
  expiration: TransactionExpiration,
  gasConfig: GasConfig,
  inputs: (0, import_superstruct17.array)(TransactionBlockInput),
  transactions: (0, import_superstruct17.array)(TransactionType)
});
function prepareSuiAddress(address) {
  return normalizeSuiAddress(address).replace("0x", "");
}
var TRANSACTION_DATA_MAX_SIZE = 128 * 1024;
var TransactionBlockDataBuilder = class {
  constructor(clone) {
    this.version = 1;
    this.sender = clone?.sender;
    this.expiration = clone?.expiration;
    this.gasConfig = clone?.gasConfig ?? {};
    this.inputs = clone?.inputs ?? [];
    this.transactions = clone?.transactions ?? [];
  }
  static fromKindBytes(bytes) {
    const kind = builder.de("TransactionKind", bytes);
    const programmableTx = kind?.ProgrammableTransaction;
    if (!programmableTx) {
      throw new Error("Unable to deserialize from bytes.");
    }
    const serialized = create(
      {
        version: 1,
        gasConfig: {},
        inputs: programmableTx.inputs.map(
          (value, index) => create(
            {
              kind: "Input",
              value,
              index,
              type: (0, import_superstruct17.is)(value, PureCallArg) ? "pure" : "object"
            },
            TransactionBlockInput
          )
        ),
        transactions: programmableTx.transactions
      },
      SerializedTransactionDataBuilder
    );
    return TransactionBlockDataBuilder.restore(serialized);
  }
  static fromBytes(bytes) {
    const rawData = builder.de("TransactionData", bytes);
    const data = rawData?.V1;
    const programmableTx = data?.kind?.ProgrammableTransaction;
    if (!data || !programmableTx) {
      throw new Error("Unable to deserialize from bytes.");
    }
    const serialized = create(
      {
        version: 1,
        sender: data.sender,
        expiration: data.expiration,
        gasConfig: data.gasData,
        inputs: programmableTx.inputs.map(
          (value, index) => create(
            {
              kind: "Input",
              value,
              index,
              type: (0, import_superstruct17.is)(value, PureCallArg) ? "pure" : "object"
            },
            TransactionBlockInput
          )
        ),
        transactions: programmableTx.transactions
      },
      SerializedTransactionDataBuilder
    );
    return TransactionBlockDataBuilder.restore(serialized);
  }
  static restore(data) {
    (0, import_superstruct17.assert)(data, SerializedTransactionDataBuilder);
    const transactionData = new TransactionBlockDataBuilder();
    Object.assign(transactionData, data);
    return transactionData;
  }
  /**
   * Generate transaction digest.
   *
   * @param bytes BCS serialized transaction data
   * @returns transaction digest.
   */
  static getDigestFromBytes(bytes) {
    const hash = hashTypedData("TransactionData", bytes);
    return (0, import_bcs14.toB58)(hash);
  }
  build({
    overrides,
    onlyTransactionKind
  } = {}) {
    const inputs = this.inputs.map((input) => {
      (0, import_superstruct17.assert)(input.value, BuilderCallArg);
      return input.value;
    });
    const kind = {
      ProgrammableTransaction: {
        inputs,
        transactions: this.transactions
      }
    };
    if (onlyTransactionKind) {
      return builder.ser("TransactionKind", kind, { maxSize: TRANSACTION_DATA_MAX_SIZE }).toBytes();
    }
    const expiration = overrides?.expiration ?? this.expiration;
    const sender = overrides?.sender ?? this.sender;
    const gasConfig = { ...this.gasConfig, ...overrides?.gasConfig };
    if (!sender) {
      throw new Error("Missing transaction sender");
    }
    if (!gasConfig.budget) {
      throw new Error("Missing gas budget");
    }
    if (!gasConfig.payment) {
      throw new Error("Missing gas payment");
    }
    if (!gasConfig.price) {
      throw new Error("Missing gas price");
    }
    const transactionData = {
      sender: prepareSuiAddress(sender),
      expiration: expiration ? expiration : { None: true },
      gasData: {
        payment: gasConfig.payment,
        owner: prepareSuiAddress(this.gasConfig.owner ?? sender),
        price: BigInt(gasConfig.price),
        budget: BigInt(gasConfig.budget)
      },
      kind: {
        ProgrammableTransaction: {
          inputs,
          transactions: this.transactions
        }
      }
    };
    return builder.ser(
      "TransactionData",
      { V1: transactionData },
      { maxSize: TRANSACTION_DATA_MAX_SIZE }
    ).toBytes();
  }
  getDigest() {
    const bytes = this.build({ onlyTransactionKind: false });
    return TransactionBlockDataBuilder.getDigestFromBytes(bytes);
  }
  snapshot() {
    return create(this, SerializedTransactionDataBuilder);
  }
};

// src/builder/TransactionBlock.ts
function createTransactionResult(index) {
  const baseResult = { kind: "Result", index };
  const nestedResults = [];
  const nestedResultFor = (resultIndex) => nestedResults[resultIndex] ?? (nestedResults[resultIndex] = {
    kind: "NestedResult",
    index,
    resultIndex
  });
  return new Proxy(baseResult, {
    set() {
      throw new Error(
        "The transaction result is a proxy, and does not support setting properties directly"
      );
    },
    // TODO: Instead of making this return a concrete argument, we should ideally
    // make it reference-based (so that this gets resolved at build-time), which
    // allows re-ordering transactions.
    get(target, property) {
      if (property in target) {
        return Reflect.get(target, property);
      }
      if (property === Symbol.iterator) {
        return function* () {
          let i = 0;
          while (true) {
            yield nestedResultFor(i);
            i++;
          }
        };
      }
      if (typeof property === "symbol")
        return;
      const resultIndex = parseInt(property, 10);
      if (Number.isNaN(resultIndex) || resultIndex < 0)
        return;
      return nestedResultFor(resultIndex);
    }
  });
}
function expectProvider(provider) {
  if (!provider) {
    throw new Error(
      `No provider passed to Transaction#build, but transaction data was not sufficient to build offline.`
    );
  }
  return provider;
}
var TRANSACTION_BRAND = Symbol.for("@mysten/transaction");
var MAX_GAS_OBJECTS = 256;
var MAX_GAS = 1e9;
var GAS_OVERHEAD_PER_COIN = 10n;
var _blockData, _input, input_fn, _selectGasPayment, selectGasPayment_fn, _prepare, prepare_fn;
var _TransactionBlock = class {
  constructor(transaction) {
    /**
     * Dynamically create a new input, which is separate from the `input`. This is important
     * for generated clients to be able to define unique inputs that are non-overlapping with the
     * defined inputs.
     *
     * For `Uint8Array` type automatically convert the input into a `Pure` CallArg, since this
     * is the format required for custom serialization.
     *
     */
    __privateAdd(this, _input);
    // The current default is just picking _all_ coins we can which may not be ideal.
    __privateAdd(this, _selectGasPayment);
    /**
     * Prepare the transaction by valdiating the transaction data and resolving all inputs
     * so that it can be built into bytes.
     */
    __privateAdd(this, _prepare);
    __privateAdd(this, _blockData, void 0);
    __privateSet(this, _blockData, new TransactionBlockDataBuilder(
      transaction ? __privateGet(transaction, _blockData) : void 0
    ));
  }
  /** Returns `true` if the object is an instance of the Transaction builder class. */
  static is(obj) {
    return !!obj && typeof obj === "object" && obj[TRANSACTION_BRAND] === true;
  }
  /**
   * Converts from a serialize transaction kind (built with `build({ onlyTransactionKind: true })`) to a `Transaction` class.
   * Supports either a byte array, or base64-encoded bytes.
   */
  static fromKind(serialized) {
    const tx = new _TransactionBlock();
    __privateSet(tx, _blockData, TransactionBlockDataBuilder.fromKindBytes(
      typeof serialized === "string" ? (0, import_bcs16.fromB64)(serialized) : serialized
    ));
    return tx;
  }
  /**
   * Converts from a serialized transaction format to a `Transaction` class.
   * There are two supported serialized formats:
   * - A string returned from `Transaction#serialize`. The serialized format must be compatible, or it will throw an error.
   * - A byte array (or base64-encoded bytes) containing BCS transaction data.
   */
  static from(serialized) {
    const tx = new _TransactionBlock();
    if (typeof serialized !== "string" || !serialized.startsWith("{")) {
      __privateSet(tx, _blockData, TransactionBlockDataBuilder.fromBytes(
        typeof serialized === "string" ? (0, import_bcs16.fromB64)(serialized) : serialized
      ));
    } else {
      __privateSet(tx, _blockData, TransactionBlockDataBuilder.restore(
        JSON.parse(serialized)
      ));
    }
    return tx;
  }
  /** A helper to retrieve the Transaction builder `Transactions` */
  static get Transactions() {
    return Transactions;
  }
  /** A helper to retrieve the Transaction builder `Inputs` */
  static get Inputs() {
    return Inputs;
  }
  setSender(sender) {
    __privateGet(this, _blockData).sender = sender;
  }
  /**
   * Sets the sender only if it has not already been set.
   * This is useful for sponsored transaction flows where the sender may not be the same as the signer address.
   */
  setSenderIfNotSet(sender) {
    if (!__privateGet(this, _blockData).sender) {
      __privateGet(this, _blockData).sender = sender;
    }
  }
  setExpiration(expiration) {
    __privateGet(this, _blockData).expiration = expiration;
  }
  setGasPrice(price) {
    __privateGet(this, _blockData).gasConfig.price = String(price);
  }
  setGasBudget(budget) {
    __privateGet(this, _blockData).gasConfig.budget = String(budget);
  }
  setGasOwner(owner) {
    __privateGet(this, _blockData).gasConfig.owner = owner;
  }
  setGasPayment(payments) {
    if (payments.length >= MAX_GAS_OBJECTS) {
      throw new Error(
        `Payment objects exceed maximum amount ${MAX_GAS_OBJECTS}`
      );
    }
    __privateGet(this, _blockData).gasConfig.payment = payments.map(
      (payment) => (0, import_superstruct18.mask)(payment, SuiObjectRef)
    );
  }
  /** Get a snapshot of the transaction data, in JSON form: */
  get blockData() {
    return __privateGet(this, _blockData).snapshot();
  }
  // Used to brand transaction classes so that they can be identified, even between multiple copies
  // of the builder.
  get [TRANSACTION_BRAND]() {
    return true;
  }
  /** Returns an argument for the gas coin, to be used in a transaction. */
  get gas() {
    return { kind: "GasCoin" };
  }
  /**
   * Add a new object input to the transaction.
   */
  object(value) {
    const id = getIdFromCallArg(value);
    const inserted = __privateGet(this, _blockData).inputs.find(
      (i) => i.type === "object" && id === getIdFromCallArg(i.value)
    );
    return inserted ?? __privateMethod(this, _input, input_fn).call(this, "object", value);
  }
  /**
   * Add a new non-object input to the transaction.
   */
  pure(value, type) {
    return __privateMethod(this, _input, input_fn).call(this, "pure", value instanceof Uint8Array ? Inputs.Pure(value) : type ? Inputs.Pure(value, type) : value);
  }
  /** Add a transaction to the transaction block. */
  add(transaction) {
    const index = __privateGet(this, _blockData).transactions.push(transaction);
    return createTransactionResult(index - 1);
  }
  // Method shorthands:
  splitCoins(...args) {
    return this.add(Transactions.SplitCoins(...args));
  }
  mergeCoins(...args) {
    return this.add(Transactions.MergeCoins(...args));
  }
  publish(...args) {
    return this.add(Transactions.Publish(...args));
  }
  moveCall(...args) {
    return this.add(Transactions.MoveCall(...args));
  }
  transferObjects(...args) {
    return this.add(Transactions.TransferObjects(...args));
  }
  makeMoveVec(...args) {
    return this.add(Transactions.MakeMoveVec(...args));
  }
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
  serialize() {
    return JSON.stringify(__privateGet(this, _blockData).snapshot());
  }
  /** Build the transaction to BCS bytes. */
  async build({
    provider,
    onlyTransactionKind
  } = {}) {
    await __privateMethod(this, _prepare, prepare_fn).call(this, { provider, onlyTransactionKind });
    return __privateGet(this, _blockData).build({ onlyTransactionKind });
  }
  /** Derive transaction digest */
  async getDigest({
    provider
  } = {}) {
    await __privateMethod(this, _prepare, prepare_fn).call(this, { provider });
    return __privateGet(this, _blockData).getDigest();
  }
};
var TransactionBlock = _TransactionBlock;
_blockData = new WeakMap();
_input = new WeakSet();
input_fn = function(type, value) {
  const index = __privateGet(this, _blockData).inputs.length;
  const input = create(
    {
      kind: "Input",
      // bigints can't be serialized to JSON, so just string-convert them here:
      value: typeof value === "bigint" ? String(value) : value,
      index,
      type
    },
    TransactionBlockInput
  );
  __privateGet(this, _blockData).inputs.push(input);
  return input;
};
_selectGasPayment = new WeakSet();
selectGasPayment_fn = async function(provider) {
  const gasOwner = __privateGet(this, _blockData).gasConfig.owner ?? __privateGet(this, _blockData).sender;
  const coins = await expectProvider(provider).getCoins({
    owner: gasOwner,
    coinType: SUI_TYPE_ARG
  });
  const paymentCoins = coins.data.filter((coin) => {
    const matchingInput = __privateGet(this, _blockData).inputs.find((input) => {
      if ((0, import_superstruct18.is)(input.value, BuilderCallArg) && "Object" in input.value && "ImmOrOwned" in input.value.Object) {
        return coin.coinObjectId === input.value.Object.ImmOrOwned.objectId;
      }
      return false;
    });
    return !matchingInput;
  }).slice(0, MAX_GAS_OBJECTS - 1).map((coin) => ({
    objectId: coin.coinObjectId,
    digest: coin.digest,
    version: coin.version
  }));
  if (!paymentCoins.length) {
    throw new Error("No valid gas coins found for the transaction.");
  }
  return paymentCoins;
};
_prepare = new WeakSet();
prepare_fn = async function({ provider, onlyTransactionKind }) {
  if (!onlyTransactionKind && !__privateGet(this, _blockData).sender) {
    throw new Error("Missing transaction sender");
  }
  const { inputs, transactions } = __privateGet(this, _blockData);
  const moveModulesToResolve = [];
  const objectsToResolve = [];
  transactions.forEach((transaction) => {
    if (transaction.kind === "MoveCall") {
      const needsResolution = transaction.arguments.some(
        (arg) => arg.kind === "Input" && !(0, import_superstruct18.is)(inputs[arg.index].value, BuilderCallArg)
      );
      if (needsResolution) {
        moveModulesToResolve.push(transaction);
      }
      return;
    }
    const transactionType = getTransactionType(transaction);
    if (!transactionType.schema)
      return;
    Object.entries(transaction).forEach(([key, value]) => {
      if (key === "kind")
        return;
      const keySchema = transactionType.schema[key];
      const isArray = keySchema.type === "array";
      const wellKnownEncoding = isArray ? keySchema.schema[TRANSACTION_TYPE] : keySchema[TRANSACTION_TYPE];
      if (!wellKnownEncoding)
        return;
      const encodeInput = (index) => {
        const input = inputs[index];
        if (!input) {
          throw new Error(`Missing input ${value.index}`);
        }
        if ((0, import_superstruct18.is)(input.value, BuilderCallArg))
          return;
        if (wellKnownEncoding.kind === "object" && typeof input.value === "string") {
          objectsToResolve.push({ id: input.value, input });
        } else if (wellKnownEncoding.kind === "pure") {
          input.value = Inputs.Pure(input.value, wellKnownEncoding.type);
        } else {
          throw new Error("Unexpected input format.");
        }
      };
      if (isArray) {
        value.forEach((arrayItem) => {
          if (arrayItem.kind !== "Input")
            return;
          encodeInput(arrayItem.index);
        });
      } else {
        if (value.kind !== "Input")
          return;
        encodeInput(value.index);
      }
    });
  });
  if (moveModulesToResolve.length) {
    await Promise.all(
      moveModulesToResolve.map(async (moveCall) => {
        const [packageId, moduleName, functionName] = moveCall.target.split("::");
        const normalized = await expectProvider(
          provider
        ).getNormalizedMoveFunction({
          package: normalizeSuiObjectId(packageId),
          module: moduleName,
          function: functionName
        });
        const hasTxContext = normalized.parameters.length > 0 && isTxContext(normalized.parameters.at(-1));
        const params = hasTxContext ? normalized.parameters.slice(0, normalized.parameters.length - 1) : normalized.parameters;
        if (params.length !== moveCall.arguments.length) {
          throw new Error("Incorrect number of arguments.");
        }
        params.forEach((param, i) => {
          const arg = moveCall.arguments[i];
          if (arg.kind !== "Input")
            return;
          const input = inputs[arg.index];
          if ((0, import_superstruct18.is)(input.value, BuilderCallArg))
            return;
          const inputValue = input.value;
          const serType = getPureSerializationType(param, inputValue);
          if (serType) {
            input.value = Inputs.Pure(inputValue, serType);
            return;
          }
          const structVal = extractStructTag(param);
          if (structVal != null || typeof param === "object" && "TypeParameter" in param) {
            if (typeof inputValue !== "string") {
              throw new Error(
                `Expect the argument to be an object id string, got ${JSON.stringify(
                  inputValue,
                  null,
                  2
                )}`
              );
            }
            objectsToResolve.push({
              id: inputValue,
              input,
              normalizedType: param
            });
            return;
          }
          throw new Error(
            `Unknown call arg type ${JSON.stringify(
              param,
              null,
              2
            )} for value ${JSON.stringify(inputValue, null, 2)}`
          );
        });
      })
    );
  }
  if (objectsToResolve.length) {
    const dedupedIds = [...new Set(objectsToResolve.map(({ id }) => id))];
    const objects = await expectProvider(provider).multiGetObjects({
      ids: dedupedIds,
      options: { showOwner: true }
    });
    let objectsById = new Map(
      dedupedIds.map((id, index) => {
        return [id, objects[index]];
      })
    );
    const invalidObjects = Array.from(objectsById).filter(([_, obj]) => obj.error).map(([id, _]) => id);
    if (invalidObjects.length) {
      throw new Error(
        `The following input objects are not invalid: ${invalidObjects.join(
          ", "
        )}`
      );
    }
    objectsToResolve.forEach(({ id, input, normalizedType }) => {
      const object18 = objectsById.get(id);
      const initialSharedVersion = getSharedObjectInitialVersion(object18);
      if (initialSharedVersion) {
        const mutable = isMutableSharedObjectInput(input.value) || normalizedType != null && extractMutableReference(normalizedType) != null;
        input.value = Inputs.SharedObjectRef({
          objectId: id,
          initialSharedVersion,
          mutable
        });
      } else {
        input.value = Inputs.ObjectRef(getObjectReference(object18));
      }
    });
  }
  if (!onlyTransactionKind) {
    if (!__privateGet(this, _blockData).gasConfig.price) {
      this.setGasPrice(await expectProvider(provider).getReferenceGasPrice());
    }
    if (!__privateGet(this, _blockData).gasConfig.payment) {
      __privateGet(this, _blockData).gasConfig.payment = await __privateMethod(this, _selectGasPayment, selectGasPayment_fn).call(this, provider);
    }
    if (!this.blockData.gasConfig.budget) {
      const dryRunResult = await expectProvider(
        provider
      ).dryRunTransactionBlock({
        transactionBlock: __privateGet(this, _blockData).build({
          overrides: {
            gasConfig: {
              budget: String(MAX_GAS),
              payment: []
            }
          }
        })
      });
      if (dryRunResult.effects.status.status !== "success") {
        throw new Error(
          "Dry run failed, could not automatically determine a budget",
          { cause: dryRunResult }
        );
      }
      const coinOverhead = GAS_OVERHEAD_PER_COIN * BigInt(this.blockData.gasConfig.payment?.length || 0n) * BigInt(this.blockData.gasConfig.price || 1n);
      this.setGasBudget(
        BigInt(dryRunResult.effects.gasUsed.computationCost) + BigInt(dryRunResult.effects.gasUsed.storageCost) + coinOverhead
      );
    }
  }
};

// src/types/metrics.ts
var import_superstruct19 = require("superstruct");
var NetworkMetrics = (0, import_superstruct19.object)({
  currentTps: (0, import_superstruct19.number)(),
  tps30Days: (0, import_superstruct19.number)(),
  currentCheckpoint: (0, import_superstruct19.number)(),
  currentEpoch: (0, import_superstruct19.number)(),
  totalAddresses: (0, import_superstruct19.number)(),
  totalObjects: (0, import_superstruct19.number)(),
  totalPackages: (0, import_superstruct19.number)()
});

// src/types/epochs.ts
var import_superstruct20 = require("superstruct");
var EndOfEpochInfo = (0, import_superstruct20.object)({
  lastCheckpointId: (0, import_superstruct20.number)(),
  epochEndTimestamp: (0, import_superstruct20.number)(),
  protocolVersion: (0, import_superstruct20.number)(),
  referenceGasPrice: (0, import_superstruct20.number)(),
  totalStake: (0, import_superstruct20.number)(),
  storageFundReinvestment: (0, import_superstruct20.number)(),
  storageCharge: (0, import_superstruct20.number)(),
  storageRebate: (0, import_superstruct20.number)(),
  storageFundBalance: (0, import_superstruct20.number)(),
  stakeSubsidyAmount: (0, import_superstruct20.number)(),
  totalGasFees: (0, import_superstruct20.number)(),
  totalStakeRewardsDistributed: (0, import_superstruct20.number)(),
  leftoverStorageFundInflow: (0, import_superstruct20.number)()
});
var EpochInfo = (0, import_superstruct20.object)({
  epoch: (0, import_superstruct20.number)(),
  validators: (0, import_superstruct20.array)(SuiValidatorSummary),
  epochTotalTransactions: (0, import_superstruct20.number)(),
  firstCheckpointId: (0, import_superstruct20.number)(),
  epochStartTimestamp: (0, import_superstruct20.number)(),
  endOfEpochInfo: (0, import_superstruct20.nullable)(EndOfEpochInfo)
});
var EpochPage = (0, import_superstruct20.object)({
  data: (0, import_superstruct20.array)(EpochInfo),
  nextCursor: (0, import_superstruct20.nullable)((0, import_superstruct20.number)()),
  hasNextPage: (0, import_superstruct20.boolean)()
});

// src/providers/json-rpc-provider.ts
var TARGETED_RPC_VERSION = "0.29.0";
var DEFAULT_OPTIONS = {
  skipDataValidation: true,
  socketOptions: DEFAULT_CLIENT_OPTIONS,
  versionCacheTimeoutInSeconds: 600
};
var JsonRpcProvider = class {
  /**
   * Establish a connection to a Sui RPC endpoint
   *
   * @param connection The `Connection` object containing configuration for the network.
   * @param options configuration options for the provider
   */
  constructor(connection = devnetConnection, options = DEFAULT_OPTIONS) {
    this.options = options;
    this.connection = connection;
    const opts = { ...DEFAULT_OPTIONS, ...options };
    this.options = opts;
    this.client = opts.rpcClient ?? new JsonRpcClient(this.connection.fullnode);
    this.wsClient = opts.websocketClient ?? new WebsocketClient(
      this.connection.websocket,
      opts.skipDataValidation,
      opts.socketOptions
    );
  }
  async getRpcApiVersion() {
    if (this.rpcApiVersion && this.cacheExpiry && this.cacheExpiry <= Date.now()) {
      return this.rpcApiVersion;
    }
    try {
      const resp = await this.client.requestWithType(
        "rpc.discover",
        [],
        (0, import_superstruct21.any)(),
        this.options.skipDataValidation
      );
      this.rpcApiVersion = parseVersionFromString(resp.info.version);
      this.cacheExpiry = // Date.now() is in milliseconds, but the timeout is in seconds
      Date.now() + (this.options.versionCacheTimeoutInSeconds ?? 0) * 1e3;
      return this.rpcApiVersion;
    } catch (err) {
      console.warn("Error fetching version number of the RPC API", err);
    }
    return void 0;
  }
  async requestSuiFromFaucet(recipient, httpHeaders) {
    if (!this.connection.faucet) {
      throw new Error("Faucet URL is not specified");
    }
    return requestSuiFromFaucet(this.connection.faucet, recipient, httpHeaders);
  }
  /**
   * Get all Coin<`coin_type`> objects owned by an address.
   */
  async getCoins(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType(
      "suix_getCoins",
      [input.owner, input.coinType, input.cursor, input.limit],
      PaginatedCoins,
      this.options.skipDataValidation
    );
  }
  /**
   * Get all Coin objects owned by an address.
   */
  async getAllCoins(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType(
      "suix_getAllCoins",
      [input.owner, input.cursor, input.limit],
      PaginatedCoins,
      this.options.skipDataValidation
    );
  }
  /**
   * Get the total coin balance for one coin type, owned by the address owner.
   */
  async getBalance(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType(
      "suix_getBalance",
      [input.owner, input.coinType],
      CoinBalance,
      this.options.skipDataValidation
    );
  }
  /**
   * Get the total coin balance for all coin type, owned by the address owner.
   */
  async getAllBalances(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType(
      "suix_getAllBalances",
      [input.owner],
      (0, import_superstruct21.array)(CoinBalance),
      this.options.skipDataValidation
    );
  }
  /**
   * Fetch CoinMetadata for a given coin type
   */
  async getCoinMetadata(input) {
    return await this.client.requestWithType(
      "suix_getCoinMetadata",
      [input.coinType],
      CoinMetadataStruct,
      this.options.skipDataValidation
    );
  }
  /**
   *  Fetch total supply for a coin
   */
  async getTotalSupply(input) {
    return await this.client.requestWithType(
      "suix_getTotalSupply",
      [input.coinType],
      CoinSupply,
      this.options.skipDataValidation
    );
  }
  /**
   * Invoke any RPC method
   * @param method the method to be invoked
   * @param args the arguments to be passed to the RPC request
   */
  async call(method, args) {
    const response = await this.client.request(method, args);
    if ((0, import_superstruct21.is)(response, ErrorResponse)) {
      throw new RPCError({
        req: { method, args },
        code: response.error.code,
        data: response.error.data,
        cause: new Error(response.error.message)
      });
    }
    return response.result;
  }
  /**
   * Get Move function argument types like read, write and full access
   */
  async getMoveFunctionArgTypes(input) {
    return await this.client.requestWithType(
      "sui_getMoveFunctionArgTypes",
      [input.package, input.module, input.function],
      SuiMoveFunctionArgTypes,
      this.options.skipDataValidation
    );
  }
  /**
   * Get a map from module name to
   * structured representations of Move modules
   */
  async getNormalizedMoveModulesByPackage(input) {
    return await this.client.requestWithType(
      "sui_getNormalizedMoveModulesByPackage",
      [input.package],
      SuiMoveNormalizedModules,
      this.options.skipDataValidation
    );
  }
  /**
   * Get a structured representation of Move module
   */
  async getNormalizedMoveModule(input) {
    return await this.client.requestWithType(
      "sui_getNormalizedMoveModule",
      [input.package, input.module],
      SuiMoveNormalizedModule,
      this.options.skipDataValidation
    );
  }
  /**
   * Get a structured representation of Move function
   */
  async getNormalizedMoveFunction(input) {
    return await this.client.requestWithType(
      "sui_getNormalizedMoveFunction",
      [input.package, input.module, input.function],
      SuiMoveNormalizedFunction,
      this.options.skipDataValidation
    );
  }
  /**
   * Get a structured representation of Move struct
   */
  async getNormalizedMoveStruct(input) {
    return await this.client.requestWithType(
      "sui_getNormalizedMoveStruct",
      [input.package, input.module, input.struct],
      SuiMoveNormalizedStruct,
      this.options.skipDataValidation
    );
  }
  /**
   * Get all objects owned by an address
   */
  async getOwnedObjects(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType(
      "suix_getOwnedObjects",
      [
        input.owner,
        {
          filter: input.filter,
          options: input.options
        },
        input.cursor,
        input.limit
      ],
      PaginatedObjectsResponse,
      this.options.skipDataValidation
    );
  }
  /**
   * Get details about an object
   */
  async getObject(input) {
    if (!input.id || !isValidSuiObjectId(normalizeSuiObjectId(input.id))) {
      throw new Error("Invalid Sui Object id");
    }
    return await this.client.requestWithType(
      "sui_getObject",
      [input.id, input.options],
      SuiObjectResponse,
      this.options.skipDataValidation
    );
  }
  /**
   * Batch get details about a list of objects. If any of the object ids are duplicates the call will fail
   */
  async multiGetObjects(input) {
    input.ids.forEach((id) => {
      if (!id || !isValidSuiObjectId(normalizeSuiObjectId(id))) {
        throw new Error(`Invalid Sui Object id ${id}`);
      }
    });
    const hasDuplicates = input.ids.length !== new Set(input.ids).size;
    if (hasDuplicates) {
      throw new Error(`Duplicate object ids in batch call ${input.ids}`);
    }
    return await this.client.requestWithType(
      "sui_multiGetObjects",
      [input.ids, input.options],
      (0, import_superstruct21.array)(SuiObjectResponse),
      this.options.skipDataValidation
    );
  }
  /**
   * Get transaction blocks for a given query criteria
   */
  async queryTransactionBlocks(input) {
    return await this.client.requestWithType(
      "suix_queryTransactionBlocks",
      [
        {
          filter: input.filter,
          options: input.options
        },
        input.cursor,
        input.limit,
        (input.order || "descending") === "descending"
      ],
      PaginatedTransactionResponse,
      this.options.skipDataValidation
    );
  }
  async getTransactionBlock(input) {
    if (!isValidTransactionDigest(input.digest)) {
      throw new Error("Invalid Transaction digest");
    }
    return await this.client.requestWithType(
      "sui_getTransactionBlock",
      [input.digest, input.options],
      SuiTransactionBlockResponse,
      this.options.skipDataValidation
    );
  }
  async multiGetTransactionBlocks(input) {
    input.digests.forEach((d) => {
      if (!isValidTransactionDigest(d)) {
        throw new Error(`Invalid Transaction digest ${d}`);
      }
    });
    const hasDuplicates = input.digests.length !== new Set(input.digests).size;
    if (hasDuplicates) {
      throw new Error(`Duplicate digests in batch call ${input.digests}`);
    }
    return await this.client.requestWithType(
      "sui_multiGetTransactionBlocks",
      [input.digests, input.options],
      (0, import_superstruct21.array)(SuiTransactionBlockResponse),
      this.options.skipDataValidation
    );
  }
  async executeTransactionBlock(input) {
    return await this.client.requestWithType(
      "sui_executeTransactionBlock",
      [
        typeof input.transactionBlock === "string" ? input.transactionBlock : (0, import_bcs17.toB64)(input.transactionBlock),
        Array.isArray(input.signature) ? input.signature : [input.signature],
        input.options,
        input.requestType
      ],
      SuiTransactionBlockResponse,
      this.options.skipDataValidation
    );
  }
  /**
   * Get total number of transactions
   */
  async getTotalTransactionBlocks() {
    const resp = await this.client.requestWithType(
      "sui_getTotalTransactionBlocks",
      [],
      (0, import_superstruct21.string)(),
      this.options.skipDataValidation
    );
    return BigInt(resp);
  }
  /**
   * Getting the reference gas price for the network
   */
  async getReferenceGasPrice() {
    const resp = await this.client.requestWithType(
      "suix_getReferenceGasPrice",
      [],
      (0, import_superstruct21.string)(),
      this.options.skipDataValidation
    );
    return BigInt(resp);
  }
  /**
   * Return the delegated stakes for an address
   */
  async getStakes(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType(
      "suix_getStakes",
      [input.owner],
      (0, import_superstruct21.array)(DelegatedStake),
      this.options.skipDataValidation
    );
  }
  /**
   * Return the delegated stakes queried by id.
   */
  async getStakesByIds(input) {
    input.stakedSuiIds.forEach((id) => {
      if (!id || !isValidSuiObjectId(normalizeSuiObjectId(id))) {
        throw new Error(`Invalid Sui Stake id ${id}`);
      }
    });
    return await this.client.requestWithType(
      "suix_getStakesByIds",
      [input.stakedSuiIds],
      (0, import_superstruct21.array)(DelegatedStake),
      this.options.skipDataValidation
    );
  }
  /**
   * Return the latest system state content.
   */
  async getLatestSuiSystemState() {
    return await this.client.requestWithType(
      "suix_getLatestSuiSystemState",
      [],
      SuiSystemStateSummary,
      this.options.skipDataValidation
    );
  }
  /**
   * Get events for a given query criteria
   */
  async queryEvents(input) {
    return await this.client.requestWithType(
      "suix_queryEvents",
      [
        input.query,
        input.cursor,
        input.limit,
        (input.order || "descending") === "descending"
      ],
      PaginatedEvents,
      this.options.skipDataValidation
    );
  }
  /**
   * Subscribe to get notifications whenever an event matching the filter occurs
   */
  async subscribeEvent(input) {
    return this.wsClient.subscribeEvent(input.filter, input.onMessage);
  }
  /**
   * Unsubscribe from an event subscription
   */
  async unsubscribeEvent(input) {
    return this.wsClient.unsubscribeEvent(input.id);
  }
  /**
   * Runs the transaction block in dev-inpsect mode. Which allows for nearly any
   * transaction (or Move call) with any arguments. Detailed results are
   * provided, including both the transaction effects and any return values.
   */
  async devInspectTransactionBlock(input) {
    let devInspectTxBytes;
    if (TransactionBlock.is(input.transactionBlock)) {
      input.transactionBlock.setSenderIfNotSet(input.sender);
      devInspectTxBytes = (0, import_bcs17.toB64)(
        await input.transactionBlock.build({
          provider: this,
          onlyTransactionKind: true
        })
      );
    } else if (typeof input.transactionBlock === "string") {
      devInspectTxBytes = input.transactionBlock;
    } else if (input.transactionBlock instanceof Uint8Array) {
      devInspectTxBytes = (0, import_bcs17.toB64)(input.transactionBlock);
    } else {
      throw new Error("Unknown transaction block format.");
    }
    return await this.client.requestWithType(
      "sui_devInspectTransactionBlock",
      [input.sender, devInspectTxBytes, input.gasPrice, input.epoch],
      DevInspectResults,
      this.options.skipDataValidation
    );
  }
  /**
   * Dry run a transaction block and return the result.
   */
  async dryRunTransactionBlock(input) {
    return await this.client.requestWithType(
      "sui_dryRunTransactionBlock",
      [
        typeof input.transactionBlock === "string" ? input.transactionBlock : (0, import_bcs17.toB64)(input.transactionBlock)
      ],
      DryRunTransactionBlockResponse,
      this.options.skipDataValidation
    );
  }
  /**
   * Return the list of dynamic field objects owned by an object
   */
  async getDynamicFields(input) {
    if (!input.parentId || !isValidSuiObjectId(normalizeSuiObjectId(input.parentId))) {
      throw new Error("Invalid Sui Object id");
    }
    return await this.client.requestWithType(
      "suix_getDynamicFields",
      [input.parentId, input.cursor, input.limit],
      DynamicFieldPage,
      this.options.skipDataValidation
    );
  }
  /**
   * Return the dynamic field object information for a specified object
   */
  async getDynamicFieldObject(input) {
    return await this.client.requestWithType(
      "suix_getDynamicFieldObject",
      [input.parentId, input.name],
      SuiObjectResponse,
      this.options.skipDataValidation
    );
  }
  /**
   * Get the sequence number of the latest checkpoint that has been executed
   */
  async getLatestCheckpointSequenceNumber() {
    const resp = await this.client.requestWithType(
      "sui_getLatestCheckpointSequenceNumber",
      [],
      (0, import_superstruct21.string)(),
      this.options.skipDataValidation
    );
    return String(resp);
  }
  /**
   * Returns information about a given checkpoint
   */
  async getCheckpoint(input) {
    return await this.client.requestWithType(
      "sui_getCheckpoint",
      [input.id],
      Checkpoint,
      this.options.skipDataValidation
    );
  }
  /**
   * Returns historical checkpoints paginated
   */
  async getCheckpoints(input) {
    const resp = await this.client.requestWithType(
      "sui_getCheckpoints",
      [input.cursor, input.limit, input.descendingOrder],
      CheckpointPage,
      this.options.skipDataValidation
    );
    return resp;
  }
  /**
   * Return the committee information for the asked epoch
   */
  async getCommitteeInfo(input) {
    return await this.client.requestWithType(
      "suix_getCommitteeInfo",
      [input?.epoch],
      CommitteeInfo
    );
  }
  async getNetworkMetrics() {
    return await this.client.requestWithType(
      "suix_getNetworkMetrics",
      [],
      NetworkMetrics
    );
  }
  /**
   * Return the committee information for the asked epoch
   */
  async getEpochs(input) {
    return await this.client.requestWithType(
      "suix_getEpochs",
      [input?.cursor, input?.limit, input?.descendingOrder],
      EpochPage,
      this.options.skipDataValidation
    );
  }
  /**
   * Return the committee information for the asked epoch
   */
  async getCurrentEpoch() {
    return await this.client.requestWithType(
      "suix_getCurrentEpoch",
      [],
      EpochInfo,
      this.options.skipDataValidation
    );
  }
};

// src/signers/raw-signer.ts
var import_blake2b5 = require("@noble/hashes/blake2b");

// src/signers/signer-with-provider.ts
var import_bcs18 = require("@mysten/bcs");

// src/utils/intent.ts
var AppId = /* @__PURE__ */ ((AppId2) => {
  AppId2[AppId2["Sui"] = 0] = "Sui";
  return AppId2;
})(AppId || {});
var IntentVersion = /* @__PURE__ */ ((IntentVersion2) => {
  IntentVersion2[IntentVersion2["V0"] = 0] = "V0";
  return IntentVersion2;
})(IntentVersion || {});
var IntentScope = /* @__PURE__ */ ((IntentScope3) => {
  IntentScope3[IntentScope3["TransactionData"] = 0] = "TransactionData";
  IntentScope3[IntentScope3["TransactionEffects"] = 1] = "TransactionEffects";
  IntentScope3[IntentScope3["CheckpointSummary"] = 2] = "CheckpointSummary";
  IntentScope3[IntentScope3["PersonalMessage"] = 3] = "PersonalMessage";
  return IntentScope3;
})(IntentScope || {});
function intentWithScope(scope) {
  return [scope, 0 /* V0 */, 0 /* Sui */];
}
function messageWithIntent(scope, message) {
  const intent = intentWithScope(scope);
  const intentMessage = new Uint8Array(intent.length + message.length);
  intentMessage.set(intent);
  intentMessage.set(message, intent.length);
  return intentMessage;
}

// src/signers/signer-with-provider.ts
var SignerWithProvider = class {
  ///////////////////
  // Sub-classes MAY override these
  /**
   * Request gas tokens from a faucet server and send to the signer
   * address
   * @param httpHeaders optional request headers
   */
  async requestSuiFromFaucet(httpHeaders) {
    return this.provider.requestSuiFromFaucet(
      await this.getAddress(),
      httpHeaders
    );
  }
  constructor(provider) {
    this.provider = provider;
  }
  /**
   * Sign a message using the keypair, with the `PersonalMessage` intent.
   */
  async signMessage(input) {
    const signature = await this.signData(
      messageWithIntent(3 /* PersonalMessage */, input.message)
    );
    return {
      messageBytes: (0, import_bcs18.toB64)(input.message),
      signature
    };
  }
  /**
   * Sign a transaction.
   */
  async signTransactionBlock(input) {
    let transactionBlockBytes;
    if (TransactionBlock.is(input.transactionBlock)) {
      input.transactionBlock.setSenderIfNotSet(await this.getAddress());
      transactionBlockBytes = await input.transactionBlock.build({
        provider: this.provider
      });
    } else if (input.transactionBlock instanceof Uint8Array) {
      transactionBlockBytes = input.transactionBlock;
    } else {
      throw new Error("Unknown transaction format");
    }
    const intentMessage = messageWithIntent(
      0 /* TransactionData */,
      transactionBlockBytes
    );
    const signature = await this.signData(intentMessage);
    return {
      transactionBlockBytes: (0, import_bcs18.toB64)(transactionBlockBytes),
      signature
    };
  }
  /**
   * Sign a transaction block and submit to the Fullnode for execution.
   *
   * @param options specify which fields to return (e.g., transaction, effects, events, etc).
   * By default, only the transaction digest will be returned.
   * @param requestType WaitForEffectsCert or WaitForLocalExecution, see details in `ExecuteTransactionRequestType`.
   * Defaults to `WaitForLocalExecution` if options.show_effects or options.show_events is true
   */
  async signAndExecuteTransactionBlock(input) {
    const { transactionBlockBytes, signature } = await this.signTransactionBlock({
      transactionBlock: input.transactionBlock
    });
    return await this.provider.executeTransactionBlock({
      transactionBlock: transactionBlockBytes,
      signature,
      options: input.options,
      requestType: input.requestType
    });
  }
  /**
   * Derive transaction digest from
   * @param tx BCS serialized transaction data or a `Transaction` object
   * @returns transaction digest
   */
  async getTransactionBlockDigest(tx) {
    if (TransactionBlock.is(tx)) {
      tx.setSenderIfNotSet(await this.getAddress());
      return tx.getDigest({ provider: this.provider });
    } else if (tx instanceof Uint8Array) {
      return TransactionBlockDataBuilder.getDigestFromBytes(tx);
    } else {
      throw new Error("Unknown transaction format.");
    }
  }
  /**
   * Runs the transaction in dev-inpsect mode. Which allows for nearly any
   * transaction (or Move call) with any arguments. Detailed results are
   * provided, including both the transaction effects and any return values.
   */
  async devInspectTransactionBlock(input) {
    const address = await this.getAddress();
    return this.provider.devInspectTransactionBlock({
      sender: address,
      ...input
    });
  }
  /**
   * Dry run a transaction and return the result.
   */
  async dryRunTransactionBlock(input) {
    let dryRunTxBytes;
    if (TransactionBlock.is(input.transactionBlock)) {
      input.transactionBlock.setSenderIfNotSet(await this.getAddress());
      dryRunTxBytes = await input.transactionBlock.build({
        provider: this.provider
      });
    } else if (typeof input.transactionBlock === "string") {
      dryRunTxBytes = (0, import_bcs18.fromB64)(input.transactionBlock);
    } else if (input.transactionBlock instanceof Uint8Array) {
      dryRunTxBytes = input.transactionBlock;
    } else {
      throw new Error("Unknown transaction format");
    }
    return this.provider.dryRunTransactionBlock({
      transactionBlock: dryRunTxBytes
    });
  }
  /**
   * Returns the estimated gas cost for the transaction
   * @param tx The transaction to estimate the gas cost. When string it is assumed it's a serialized tx in base64
   * @returns total gas cost estimation
   * @throws whens fails to estimate the gas cost
   */
  async getGasCostEstimation(...args) {
    const txEffects = await this.dryRunTransactionBlock(...args);
    const gasEstimation = getTotalGasUsedUpperBound(txEffects.effects);
    if (typeof gasEstimation === "undefined") {
      throw new Error("Failed to estimate the gas cost from transaction");
    }
    return gasEstimation;
  }
};

// src/signers/raw-signer.ts
var RawSigner = class extends SignerWithProvider {
  constructor(keypair, provider) {
    super(provider);
    this.keypair = keypair;
  }
  async getAddress() {
    return this.keypair.getPublicKey().toSuiAddress();
  }
  async signData(data) {
    const pubkey = this.keypair.getPublicKey();
    const digest = (0, import_blake2b5.blake2b)(data, { dkLen: 32 });
    const signature = this.keypair.signData(digest);
    const signatureScheme = this.keypair.getKeyScheme();
    return toSerializedSignature({
      signatureScheme,
      signature,
      pubKey: pubkey
    });
  }
  connect(provider) {
    return new RawSigner(this.keypair, provider);
  }
};

// src/utils/format.ts
var ELLIPSIS = "\u2026";
function formatAddress(address) {
  const offset = address.startsWith("0x") ? 2 : 0;
  return `0x${address.slice(offset, offset + 4)}${ELLIPSIS}${address.slice(
    -4
  )}`;
}
function formatDigest(digest) {
  return `${digest.slice(0, 10)}${ELLIPSIS}`;
}

// src/utils/verify.ts
var import_bcs19 = require("@mysten/bcs");
var import_tweetnacl3 = __toESM(require("tweetnacl"));
var import_secp256k12 = require("@noble/curves/secp256k1");
var import_sha2562 = require("@noble/hashes/sha256");
var import_blake2b6 = require("@noble/hashes/blake2b");
async function verifyMessage(message, serializedSignature, scope) {
  const signature = fromSerializedSignature(serializedSignature);
  const messageBytes = messageWithIntent(
    scope,
    typeof message === "string" ? (0, import_bcs19.fromB64)(message) : message
  );
  const digest = (0, import_blake2b6.blake2b)(messageBytes, { dkLen: 32 });
  switch (signature.signatureScheme) {
    case "ED25519":
      return import_tweetnacl3.default.sign.detached.verify(
        digest,
        signature.signature,
        signature.pubKey.toBytes()
      );
    case "Secp256k1":
      return import_secp256k12.secp256k1.verify(
        import_secp256k12.secp256k1.Signature.fromCompact(signature.signature),
        (0, import_sha2562.sha256)(digest),
        signature.pubKey.toBytes()
      );
    default:
      throw new Error(
        `Unknown signature scheme: "${signature.signatureScheme}"`
      );
  }
}

// src/framework/sui-system-state.ts
var SUI_SYSTEM_STATE_OBJECT_ID = normalizeSuiObjectId("0x5");
var SUI_SYSTEM_MODULE_NAME = "sui_system";
var ADD_STAKE_FUN_NAME = "request_add_stake";
var ADD_STAKE_LOCKED_COIN_FUN_NAME = "request_add_stake_with_locked_coin";
var WITHDRAW_STAKE_FUN_NAME = "request_withdraw_stake";
var SuiSystemStateUtil = class {
  /**
   * Create a new transaction for staking coins ready to be signed and executed with `signer-and-provider`.
   *
   * @param coins the coins to be staked
   * @param amount the amount to stake
   * @param gasBudget omittable only for DevInspect mode
   */
  static async newRequestAddStakeTxn(provider, coins, amount, validatorAddress) {
    const tx = new TransactionBlock();
    const coin = tx.splitCoins(tx.gas, [tx.pure(amount)]);
    tx.moveCall({
      target: `${SUI_SYSTEM_ADDRESS}::${SUI_SYSTEM_MODULE_NAME}::${ADD_STAKE_FUN_NAME}`,
      arguments: [
        tx.object(SUI_SYSTEM_STATE_OBJECT_ID),
        coin,
        tx.pure(validatorAddress)
      ]
    });
    const coinObjects = await provider.multiGetObjects({
      ids: coins,
      options: {
        showOwner: true
      }
    });
    tx.setGasPayment(coinObjects.map((obj) => getObjectReference(obj)));
    return tx;
  }
  /**
   * Create a new transaction for withdrawing coins ready to be signed and
   * executed with `signer-and-provider`.
   *
   * @param stake the stake object created in the requestAddStake txn
   * @param stakedCoinId the coins to withdraw
   * @param gasBudget omittable only for DevInspect mode
   */
  static async newRequestWithdrawlStakeTxn(stake, stakedCoinId) {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${SUI_SYSTEM_ADDRESS}::${SUI_SYSTEM_MODULE_NAME}::${WITHDRAW_STAKE_FUN_NAME}`,
      arguments: [
        tx.object(SUI_SYSTEM_STATE_OBJECT_ID),
        tx.object(stake),
        tx.object(stakedCoinId)
      ]
    });
    return tx;
  }
};

// src/index.ts
var import_bcs20 = require("@mysten/bcs");
var import_superstruct22 = require("superstruct");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ADD_STAKE_FUN_NAME,
  ADD_STAKE_LOCKED_COIN_FUN_NAME,
  ARGUMENT,
  ARGUMENT_INNER,
  AppId,
  AuthorityName,
  AuthorityQuorumSignInfo,
  AuthoritySignature,
  Balance,
  BalanceChange,
  BuilderCallArg,
  CALL_ARG,
  COIN_TYPE_ARG_REGEX,
  Checkpoint,
  CheckpointDigest,
  CheckpointedObjectId,
  Coin,
  CoinBalance,
  CoinMetadataStruct,
  CoinStruct,
  CoinSupply,
  CommitteeInfo,
  Connection,
  Contents,
  ContentsFields,
  ContentsFieldsWithdraw,
  DEFAULT_CLIENT_OPTIONS,
  DEFAULT_ED25519_DERIVATION_PATH,
  DEFAULT_SECP256K1_DERIVATION_PATH,
  DelegatedStake,
  Delegation,
  DelegationStakingPool,
  DelegationStakingPoolFields,
  DevInspectResults,
  DryRunTransactionBlockResponse,
  ENUM_KIND,
  Ed25519Keypair,
  Ed25519PublicKey,
  EpochId,
  ErrorResponse,
  EventId,
  ExecutionStatus,
  ExecutionStatusType,
  FaucetCoinInfo,
  FaucetRateLimitError,
  FaucetResponse,
  GasCostSummary,
  GenericAuthoritySignature,
  Genesis,
  GetOwnedObjectsResponse,
  ID_STRUCT_NAME,
  Inputs,
  IntentScope,
  IntentVersion,
  JsonRpcClient,
  JsonRpcProvider,
  LEGACY_PRIVATE_KEY_SIZE,
  MIST_PER_SUI,
  MOVE_STDLIB_ADDRESS,
  MakeMoveVecTransaction,
  MergeCoinsTransaction,
  MoveCallSuiTransaction,
  MoveCallTransaction,
  MovePackageContent,
  OBJECT_ARG,
  OBJECT_MODULE_NAME,
  OPTION,
  ObjectCallArg,
  ObjectContentFields,
  ObjectDigest,
  ObjectId,
  ObjectOwner,
  ObjectStatus,
  ObjectTransactionArgument,
  ObjectType,
  OwnedObjectRef,
  PAY_JOIN_COIN_FUNC_NAME,
  PAY_MODULE_NAME,
  PAY_SPLIT_COIN_VEC_FUNC_NAME,
  PRIVATE_KEY_SIZE,
  PROGRAMMABLE_CALL,
  PROGRAMMABLE_CALL_INNER,
  PROGRAMMABLE_TX_BLOCK,
  PaginatedCoins,
  PaginatedEvents,
  PaginatedObjectsResponse,
  PaginatedTransactionResponse,
  ProgrammableTransaction,
  PublishTransaction,
  PureCallArg,
  PureTransactionArgument,
  RPCError,
  RPCValidationError,
  RawSigner,
  SIGNATURE_FLAG_TO_SCHEME,
  SIGNATURE_SCHEME_TO_FLAG,
  SUI_ADDRESS_LENGTH,
  SUI_CLOCK_OBJECT_ID,
  SUI_FRAMEWORK_ADDRESS,
  SUI_SYSTEM_ADDRESS,
  SUI_SYSTEM_MODULE_NAME,
  SUI_SYSTEM_STATE_OBJECT_ID,
  SUI_TYPE_ARG,
  Secp256k1Keypair,
  Secp256k1PublicKey,
  SequenceNumber,
  SignerWithProvider,
  SplitCoinsTransaction,
  StakeObject,
  StakeSubsidy,
  StakeSubsidyFields,
  SubscriptionEvent,
  SubscriptionId,
  SuiAddress,
  SuiArgument,
  SuiCallArg,
  SuiChangeEpoch,
  SuiConsensusCommitPrologue,
  SuiEvent,
  SuiGasData,
  SuiJsonValue,
  SuiMoveAbilitySet,
  SuiMoveFunctionArgType,
  SuiMoveFunctionArgTypes,
  SuiMoveModuleId,
  SuiMoveNormalizedField,
  SuiMoveNormalizedFunction,
  SuiMoveNormalizedModule,
  SuiMoveNormalizedModules,
  SuiMoveNormalizedStruct,
  SuiMoveNormalizedStructType,
  SuiMoveNormalizedType,
  SuiMoveNormalizedTypeParameterType,
  SuiMoveObject,
  SuiMovePackage,
  SuiMoveStructTypeParameter,
  SuiMoveVisibility,
  SuiObjectChange,
  SuiObjectChangeCreated,
  SuiObjectChangeDeleted,
  SuiObjectChangeMutated,
  SuiObjectChangePublished,
  SuiObjectChangeTransferred,
  SuiObjectChangeWrapped,
  SuiObjectData,
  SuiObjectDataOptions,
  SuiObjectInfo,
  SuiObjectRef,
  SuiObjectResponse,
  SuiObjectResponseError,
  SuiParsedData,
  SuiRawData,
  SuiRawMoveObject,
  SuiRawMovePackage,
  SuiSupplyFields,
  SuiSystemStateSummary,
  SuiSystemStateUtil,
  SuiTransaction,
  SuiTransactionBlock,
  SuiTransactionBlockData,
  SuiTransactionBlockKind,
  SuiTransactionBlockResponse,
  SuiTransactionBlockResponseOptions,
  SuiValidatorSummary,
  TARGETED_RPC_VERSION,
  TRANSACTION,
  TRANSACTION_INNER,
  TYPE_TAG,
  TransactionArgument,
  TransactionBlock,
  TransactionBlockInput,
  TransactionDigest,
  TransactionEffects,
  TransactionEffectsDigest,
  TransactionEffectsModifiedAtVersions,
  TransactionEventDigest,
  TransactionEvents,
  TransactionType,
  Transactions,
  TransferObjectsTransaction,
  TypeTagSerializer,
  UID_STRUCT_NAME,
  VALIDATORS_EVENTS_QUERY,
  VECTOR,
  ValidResponse,
  Validators,
  WITHDRAW_STAKE_FUN_NAME,
  WebsocketClient,
  assert,
  bcs,
  bcsForVersion,
  builder,
  bytesEqual,
  devnetConnection,
  extractMutableReference,
  extractReference,
  extractStructTag,
  formatAddress,
  formatDigest,
  fromB64,
  fromExportedKeypair,
  fromSerializedSignature,
  getChangeEpochTransaction,
  getConsensusCommitPrologueTransaction,
  getCreatedObjects,
  getEventPackage,
  getEventSender,
  getEvents,
  getExecutionStatus,
  getExecutionStatusError,
  getExecutionStatusGasSummary,
  getExecutionStatusType,
  getGasData,
  getIdFromCallArg,
  getMoveObject,
  getMoveObjectType,
  getMovePackageContent,
  getNewlyCreatedCoinRefsAfterSplit,
  getObjectChanges,
  getObjectDeletedResponse,
  getObjectDisplay,
  getObjectFields,
  getObjectId,
  getObjectNotExistsResponse,
  getObjectOwner,
  getObjectPreviousTransactionDigest,
  getObjectReference,
  getObjectType,
  getObjectVersion,
  getProgrammableTransaction,
  getPublishedObjectChanges,
  getPureSerializationType,
  getSharedObjectInitialVersion,
  getSharedObjectInput,
  getSuiObjectData,
  getTimestampFromTransactionResponse,
  getTotalGasUsed,
  getTotalGasUsedUpperBound,
  getTransaction,
  getTransactionDigest,
  getTransactionEffects,
  getTransactionGasBudget,
  getTransactionGasObject,
  getTransactionGasPrice,
  getTransactionKind,
  getTransactionKindName,
  getTransactionSender,
  getTransactionSignature,
  getTransactionType,
  getWebsocketUrl,
  hasPublicTransfer,
  is,
  isImmutableObject,
  isMutableSharedObjectInput,
  isObjectDataFull,
  isPureArg,
  isSharedObject,
  isSharedObjectInput,
  isSuiObjectResponse,
  isTxContext,
  isValidBIP32Path,
  isValidHardenedPath,
  isValidSuiAddress,
  isValidSuiObjectId,
  isValidTransactionDigest,
  localnetConnection,
  messageWithIntent,
  mnemonicToSeed,
  mnemonicToSeedHex,
  normalizeSuiAddress,
  normalizeSuiObjectId,
  parseVersionFromString,
  publicKeyFromSerialized,
  requestSuiFromFaucet,
  toB64,
  toSerializedSignature,
  verifyMessage,
  versionToString
});
//# sourceMappingURL=index.js.map