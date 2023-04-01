import { Infer } from 'superstruct';
export type DelegatedStake = Infer<typeof DelegatedStake>;
export type CommitteeInfo = Infer<typeof CommitteeInfo>;
export type StakeObject = Infer<typeof StakeObject>;
export declare const Balance: import("superstruct").Struct<{
    value: number;
}, {
    value: import("superstruct").Struct<number, null>;
}>;
export declare const StakeObject: import("superstruct").Struct<{
    status: "Active" | "Pending" | "Unstaked";
    stakedSuiId: string;
    stakeRequestEpoch: string;
    stakeActiveEpoch: string;
    principal: number;
    estimatedReward?: number | undefined;
}, {
    stakedSuiId: import("superstruct").Struct<string, null>;
    stakeRequestEpoch: import("superstruct").Struct<string, null>;
    stakeActiveEpoch: import("superstruct").Struct<string, null>;
    principal: import("superstruct").Struct<number, null>;
    status: import("superstruct").Struct<"Active" | "Pending" | "Unstaked", null>;
    estimatedReward: import("superstruct").Struct<number | undefined, null>;
}>;
export declare const DelegatedStake: import("superstruct").Struct<{
    validatorAddress: string;
    stakingPool: string;
    stakes: {
        status: "Active" | "Pending" | "Unstaked";
        stakedSuiId: string;
        stakeRequestEpoch: string;
        stakeActiveEpoch: string;
        principal: number;
        estimatedReward?: number | undefined;
    }[];
}, {
    validatorAddress: import("superstruct").Struct<string, null>;
    stakingPool: import("superstruct").Struct<string, null>;
    stakes: import("superstruct").Struct<{
        status: "Active" | "Pending" | "Unstaked";
        stakedSuiId: string;
        stakeRequestEpoch: string;
        stakeActiveEpoch: string;
        principal: number;
        estimatedReward?: number | undefined;
    }[], import("superstruct").Struct<{
        status: "Active" | "Pending" | "Unstaked";
        stakedSuiId: string;
        stakeRequestEpoch: string;
        stakeActiveEpoch: string;
        principal: number;
        estimatedReward?: number | undefined;
    }, {
        stakedSuiId: import("superstruct").Struct<string, null>;
        stakeRequestEpoch: import("superstruct").Struct<string, null>;
        stakeActiveEpoch: import("superstruct").Struct<string, null>;
        principal: import("superstruct").Struct<number, null>;
        status: import("superstruct").Struct<"Active" | "Pending" | "Unstaked", null>;
        estimatedReward: import("superstruct").Struct<number | undefined, null>;
    }>>;
}>;
export declare const StakeSubsidyFields: import("superstruct").Struct<{
    balance: {
        value: number;
    };
    distribution_counter: number;
    current_distribution_amount: number;
    stake_subsidy_period_length: number;
    stake_subsidy_decrease_rate: number;
}, {
    balance: import("superstruct").Struct<{
        value: number;
    }, {
        value: import("superstruct").Struct<number, null>;
    }>;
    distribution_counter: import("superstruct").Struct<number, null>;
    current_distribution_amount: import("superstruct").Struct<number, null>;
    stake_subsidy_period_length: import("superstruct").Struct<number, null>;
    stake_subsidy_decrease_rate: import("superstruct").Struct<number, null>;
}>;
export declare const StakeSubsidy: import("superstruct").Struct<{
    type: string;
    fields: {
        balance: {
            value: number;
        };
        distribution_counter: number;
        current_distribution_amount: number;
        stake_subsidy_period_length: number;
        stake_subsidy_decrease_rate: number;
    };
}, {
    type: import("superstruct").Struct<string, null>;
    fields: import("superstruct").Struct<{
        balance: {
            value: number;
        };
        distribution_counter: number;
        current_distribution_amount: number;
        stake_subsidy_period_length: number;
        stake_subsidy_decrease_rate: number;
    }, {
        balance: import("superstruct").Struct<{
            value: number;
        }, {
            value: import("superstruct").Struct<number, null>;
        }>;
        distribution_counter: import("superstruct").Struct<number, null>;
        current_distribution_amount: import("superstruct").Struct<number, null>;
        stake_subsidy_period_length: import("superstruct").Struct<number, null>;
        stake_subsidy_decrease_rate: import("superstruct").Struct<number, null>;
    }>;
}>;
export declare const SuiSupplyFields: import("superstruct").Struct<{
    value: number;
}, {
    value: import("superstruct").Struct<number, null>;
}>;
export declare const ContentsFields: import("superstruct").Struct<{
    id: string;
    size: number;
    head: {
        vec: unknown[];
    };
    tail: {
        vec: unknown[];
    };
}, {
    id: import("superstruct").Struct<string, null>;
    size: import("superstruct").Struct<number, null>;
    head: import("superstruct").Struct<{
        vec: unknown[];
    }, {
        vec: import("superstruct").Struct<unknown[], undefined>;
    }>;
    tail: import("superstruct").Struct<{
        vec: unknown[];
    }, {
        vec: import("superstruct").Struct<unknown[], undefined>;
    }>;
}>;
export declare const ContentsFieldsWithdraw: import("superstruct").Struct<{
    id: string;
    size: number;
}, {
    id: import("superstruct").Struct<string, null>;
    size: import("superstruct").Struct<number, null>;
}>;
export declare const Contents: import("superstruct").Struct<{
    type: string;
    fields: {
        id: string;
        size: number;
        head: {
            vec: unknown[];
        };
        tail: {
            vec: unknown[];
        };
    };
}, {
    type: import("superstruct").Struct<string, null>;
    fields: import("superstruct").Struct<{
        id: string;
        size: number;
        head: {
            vec: unknown[];
        };
        tail: {
            vec: unknown[];
        };
    }, {
        id: import("superstruct").Struct<string, null>;
        size: import("superstruct").Struct<number, null>;
        head: import("superstruct").Struct<{
            vec: unknown[];
        }, {
            vec: import("superstruct").Struct<unknown[], undefined>;
        }>;
        tail: import("superstruct").Struct<{
            vec: unknown[];
        }, {
            vec: import("superstruct").Struct<unknown[], undefined>;
        }>;
    }>;
}>;
export declare const DelegationStakingPoolFields: import("superstruct").Struct<{
    id: string;
    exchangeRates: {
        id: string;
        size: number;
    };
    pendingStake: number;
    pendingPoolTokenWithdraw: number;
    pendingTotalSuiWithdraw: number;
    poolTokenBalance: number;
    rewardsPool: {
        value: number;
    };
    activationEpoch: {
        vec: unknown[];
    };
    deactivationEpoch: {
        vec: unknown[];
    };
    suiBalance: number;
}, {
    exchangeRates: import("superstruct").Struct<{
        id: string;
        size: number;
    }, {
        id: import("superstruct").Struct<string, null>;
        size: import("superstruct").Struct<number, null>;
    }>;
    id: import("superstruct").Struct<string, null>;
    pendingStake: import("superstruct").Struct<number, null>;
    pendingPoolTokenWithdraw: import("superstruct").Struct<number, null>;
    pendingTotalSuiWithdraw: import("superstruct").Struct<number, null>;
    poolTokenBalance: import("superstruct").Struct<number, null>;
    rewardsPool: import("superstruct").Struct<{
        value: number;
    }, {
        value: import("superstruct").Struct<number, null>;
    }>;
    activationEpoch: import("superstruct").Struct<{
        vec: unknown[];
    }, {
        vec: import("superstruct").Struct<unknown[], undefined>;
    }>;
    deactivationEpoch: import("superstruct").Struct<{
        vec: unknown[];
    }, {
        vec: import("superstruct").Struct<unknown[], undefined>;
    }>;
    suiBalance: import("superstruct").Struct<number, null>;
}>;
export declare const DelegationStakingPool: import("superstruct").Struct<{
    type: string;
    fields: {
        id: string;
        exchangeRates: {
            id: string;
            size: number;
        };
        pendingStake: number;
        pendingPoolTokenWithdraw: number;
        pendingTotalSuiWithdraw: number;
        poolTokenBalance: number;
        rewardsPool: {
            value: number;
        };
        activationEpoch: {
            vec: unknown[];
        };
        deactivationEpoch: {
            vec: unknown[];
        };
        suiBalance: number;
    };
}, {
    type: import("superstruct").Struct<string, null>;
    fields: import("superstruct").Struct<{
        id: string;
        exchangeRates: {
            id: string;
            size: number;
        };
        pendingStake: number;
        pendingPoolTokenWithdraw: number;
        pendingTotalSuiWithdraw: number;
        poolTokenBalance: number;
        rewardsPool: {
            value: number;
        };
        activationEpoch: {
            vec: unknown[];
        };
        deactivationEpoch: {
            vec: unknown[];
        };
        suiBalance: number;
    }, {
        exchangeRates: import("superstruct").Struct<{
            id: string;
            size: number;
        }, {
            id: import("superstruct").Struct<string, null>;
            size: import("superstruct").Struct<number, null>;
        }>;
        id: import("superstruct").Struct<string, null>;
        pendingStake: import("superstruct").Struct<number, null>;
        pendingPoolTokenWithdraw: import("superstruct").Struct<number, null>;
        pendingTotalSuiWithdraw: import("superstruct").Struct<number, null>;
        poolTokenBalance: import("superstruct").Struct<number, null>;
        rewardsPool: import("superstruct").Struct<{
            value: number;
        }, {
            value: import("superstruct").Struct<number, null>;
        }>;
        activationEpoch: import("superstruct").Struct<{
            vec: unknown[];
        }, {
            vec: import("superstruct").Struct<unknown[], undefined>;
        }>;
        deactivationEpoch: import("superstruct").Struct<{
            vec: unknown[];
        }, {
            vec: import("superstruct").Struct<unknown[], undefined>;
        }>;
        suiBalance: import("superstruct").Struct<number, null>;
    }>;
}>;
export declare const Validators: import("superstruct").Struct<[string, number][], import("superstruct").Struct<[string, number], null>>;
export declare const CommitteeInfo: import("superstruct").Struct<{
    epoch: number;
    validators: [string, number][];
}, {
    epoch: import("superstruct").Struct<number, null>;
    /** Array of (validator public key, stake unit) tuple */
    validators: import("superstruct").Struct<[string, number][], import("superstruct").Struct<[string, number], null>>;
}>;
export declare const SuiValidatorSummary: import("superstruct").Struct<{
    description: string;
    name: string;
    pendingStake: number;
    pendingPoolTokenWithdraw: number;
    pendingTotalSuiWithdraw: number;
    poolTokenBalance: number;
    rewardsPool: number;
    suiAddress: string;
    protocolPubkeyBytes: string;
    networkPubkeyBytes: string;
    workerPubkeyBytes: string;
    proofOfPossessionBytes: string;
    operationCapId: string;
    imageUrl: string;
    projectUrl: string;
    p2pAddress: string;
    netAddress: string;
    primaryAddress: string;
    workerAddress: string;
    nextEpochProtocolPubkeyBytes: string | null;
    nextEpochProofOfPossession: string | null;
    nextEpochNetworkPubkeyBytes: string | null;
    nextEpochWorkerPubkeyBytes: string | null;
    nextEpochNetAddress: string | null;
    nextEpochP2pAddress: string | null;
    nextEpochPrimaryAddress: string | null;
    nextEpochWorkerAddress: string | null;
    votingPower: number;
    gasPrice: number;
    commissionRate: number;
    nextEpochStake: number;
    nextEpochGasPrice: number;
    nextEpochCommissionRate: number;
    stakingPoolId: string;
    stakingPoolActivationEpoch: number | null;
    stakingPoolDeactivationEpoch: number | null;
    stakingPoolSuiBalance: number;
    exchangeRatesId: string;
    exchangeRatesSize: number;
}, {
    suiAddress: import("superstruct").Struct<string, null>;
    protocolPubkeyBytes: import("superstruct").Struct<string, null>;
    networkPubkeyBytes: import("superstruct").Struct<string, null>;
    workerPubkeyBytes: import("superstruct").Struct<string, null>;
    proofOfPossessionBytes: import("superstruct").Struct<string, null>;
    operationCapId: import("superstruct").Struct<string, null>;
    name: import("superstruct").Struct<string, null>;
    description: import("superstruct").Struct<string, null>;
    imageUrl: import("superstruct").Struct<string, null>;
    projectUrl: import("superstruct").Struct<string, null>;
    p2pAddress: import("superstruct").Struct<string, null>;
    netAddress: import("superstruct").Struct<string, null>;
    primaryAddress: import("superstruct").Struct<string, null>;
    workerAddress: import("superstruct").Struct<string, null>;
    nextEpochProtocolPubkeyBytes: import("superstruct").Struct<string | null, null>;
    nextEpochProofOfPossession: import("superstruct").Struct<string | null, null>;
    nextEpochNetworkPubkeyBytes: import("superstruct").Struct<string | null, null>;
    nextEpochWorkerPubkeyBytes: import("superstruct").Struct<string | null, null>;
    nextEpochNetAddress: import("superstruct").Struct<string | null, null>;
    nextEpochP2pAddress: import("superstruct").Struct<string | null, null>;
    nextEpochPrimaryAddress: import("superstruct").Struct<string | null, null>;
    nextEpochWorkerAddress: import("superstruct").Struct<string | null, null>;
    votingPower: import("superstruct").Struct<number, null>;
    gasPrice: import("superstruct").Struct<number, null>;
    commissionRate: import("superstruct").Struct<number, null>;
    nextEpochStake: import("superstruct").Struct<number, null>;
    nextEpochGasPrice: import("superstruct").Struct<number, null>;
    nextEpochCommissionRate: import("superstruct").Struct<number, null>;
    stakingPoolId: import("superstruct").Struct<string, null>;
    stakingPoolActivationEpoch: import("superstruct").Struct<number | null, null>;
    stakingPoolDeactivationEpoch: import("superstruct").Struct<number | null, null>;
    stakingPoolSuiBalance: import("superstruct").Struct<number, null>;
    rewardsPool: import("superstruct").Struct<number, null>;
    poolTokenBalance: import("superstruct").Struct<number, null>;
    pendingStake: import("superstruct").Struct<number, null>;
    pendingPoolTokenWithdraw: import("superstruct").Struct<number, null>;
    pendingTotalSuiWithdraw: import("superstruct").Struct<number, null>;
    exchangeRatesId: import("superstruct").Struct<string, null>;
    exchangeRatesSize: import("superstruct").Struct<number, null>;
}>;
export type SuiValidatorSummary = Infer<typeof SuiValidatorSummary>;
export declare const SuiSystemStateSummary: import("superstruct").Struct<{
    epoch: number;
    protocolVersion: number;
    systemStateVersion: number;
    storageFundTotalObjectStorageRebates: number;
    storageFundNonRefundableBalance: number;
    referenceGasPrice: number;
    safeMode: boolean;
    safeModeStorageRewards: number;
    safeModeComputationRewards: number;
    safeModeStorageRebates: number;
    safeModeNonRefundableStorageFee: number;
    epochStartTimestampMs: number;
    epochDurationMs: number;
    stakeSubsidyStartEpoch: number;
    maxValidatorCount: number;
    minValidatorJoiningStake: number;
    validatorLowStakeThreshold: number;
    validatorVeryLowStakeThreshold: number;
    validatorLowStakeGracePeriod: number;
    stakeSubsidyBalance: number;
    stakeSubsidyDistributionCounter: number;
    stakeSubsidyCurrentDistributionAmount: number;
    stakeSubsidyPeriodLength: number;
    stakeSubsidyDecreaseRate: number;
    totalStake: number;
    activeValidators: {
        description: string;
        name: string;
        pendingStake: number;
        pendingPoolTokenWithdraw: number;
        pendingTotalSuiWithdraw: number;
        poolTokenBalance: number;
        rewardsPool: number;
        suiAddress: string;
        protocolPubkeyBytes: string;
        networkPubkeyBytes: string;
        workerPubkeyBytes: string;
        proofOfPossessionBytes: string;
        operationCapId: string;
        imageUrl: string;
        projectUrl: string;
        p2pAddress: string;
        netAddress: string;
        primaryAddress: string;
        workerAddress: string;
        nextEpochProtocolPubkeyBytes: string | null;
        nextEpochProofOfPossession: string | null;
        nextEpochNetworkPubkeyBytes: string | null;
        nextEpochWorkerPubkeyBytes: string | null;
        nextEpochNetAddress: string | null;
        nextEpochP2pAddress: string | null;
        nextEpochPrimaryAddress: string | null;
        nextEpochWorkerAddress: string | null;
        votingPower: number;
        gasPrice: number;
        commissionRate: number;
        nextEpochStake: number;
        nextEpochGasPrice: number;
        nextEpochCommissionRate: number;
        stakingPoolId: string;
        stakingPoolActivationEpoch: number | null;
        stakingPoolDeactivationEpoch: number | null;
        stakingPoolSuiBalance: number;
        exchangeRatesId: string;
        exchangeRatesSize: number;
    }[];
    pendingActiveValidatorsId: string;
    pendingActiveValidatorsSize: number;
    pendingRemovals: number[];
    stakingPoolMappingsId: string;
    stakingPoolMappingsSize: number;
    inactivePoolsId: string;
    inactivePoolsSize: number;
    validatorCandidatesId: string;
    validatorCandidatesSize: number;
    atRiskValidators: [string, number][];
    validatorReportRecords: [string, string[]][];
}, {
    epoch: import("superstruct").Struct<number, null>;
    protocolVersion: import("superstruct").Struct<number, null>;
    systemStateVersion: import("superstruct").Struct<number, null>;
    storageFundTotalObjectStorageRebates: import("superstruct").Struct<number, null>;
    storageFundNonRefundableBalance: import("superstruct").Struct<number, null>;
    referenceGasPrice: import("superstruct").Struct<number, null>;
    safeMode: import("superstruct").Struct<boolean, null>;
    safeModeStorageRewards: import("superstruct").Struct<number, null>;
    safeModeComputationRewards: import("superstruct").Struct<number, null>;
    safeModeStorageRebates: import("superstruct").Struct<number, null>;
    safeModeNonRefundableStorageFee: import("superstruct").Struct<number, null>;
    epochStartTimestampMs: import("superstruct").Struct<number, null>;
    epochDurationMs: import("superstruct").Struct<number, null>;
    stakeSubsidyStartEpoch: import("superstruct").Struct<number, null>;
    maxValidatorCount: import("superstruct").Struct<number, null>;
    minValidatorJoiningStake: import("superstruct").Struct<number, null>;
    validatorLowStakeThreshold: import("superstruct").Struct<number, null>;
    validatorVeryLowStakeThreshold: import("superstruct").Struct<number, null>;
    validatorLowStakeGracePeriod: import("superstruct").Struct<number, null>;
    stakeSubsidyBalance: import("superstruct").Struct<number, null>;
    stakeSubsidyDistributionCounter: import("superstruct").Struct<number, null>;
    stakeSubsidyCurrentDistributionAmount: import("superstruct").Struct<number, null>;
    stakeSubsidyPeriodLength: import("superstruct").Struct<number, null>;
    stakeSubsidyDecreaseRate: import("superstruct").Struct<number, null>;
    totalStake: import("superstruct").Struct<number, null>;
    activeValidators: import("superstruct").Struct<{
        description: string;
        name: string;
        pendingStake: number;
        pendingPoolTokenWithdraw: number;
        pendingTotalSuiWithdraw: number;
        poolTokenBalance: number;
        rewardsPool: number;
        suiAddress: string;
        protocolPubkeyBytes: string;
        networkPubkeyBytes: string;
        workerPubkeyBytes: string;
        proofOfPossessionBytes: string;
        operationCapId: string;
        imageUrl: string;
        projectUrl: string;
        p2pAddress: string;
        netAddress: string;
        primaryAddress: string;
        workerAddress: string;
        nextEpochProtocolPubkeyBytes: string | null;
        nextEpochProofOfPossession: string | null;
        nextEpochNetworkPubkeyBytes: string | null;
        nextEpochWorkerPubkeyBytes: string | null;
        nextEpochNetAddress: string | null;
        nextEpochP2pAddress: string | null;
        nextEpochPrimaryAddress: string | null;
        nextEpochWorkerAddress: string | null;
        votingPower: number;
        gasPrice: number;
        commissionRate: number;
        nextEpochStake: number;
        nextEpochGasPrice: number;
        nextEpochCommissionRate: number;
        stakingPoolId: string;
        stakingPoolActivationEpoch: number | null;
        stakingPoolDeactivationEpoch: number | null;
        stakingPoolSuiBalance: number;
        exchangeRatesId: string;
        exchangeRatesSize: number;
    }[], import("superstruct").Struct<{
        description: string;
        name: string;
        pendingStake: number;
        pendingPoolTokenWithdraw: number;
        pendingTotalSuiWithdraw: number;
        poolTokenBalance: number;
        rewardsPool: number;
        suiAddress: string;
        protocolPubkeyBytes: string;
        networkPubkeyBytes: string;
        workerPubkeyBytes: string;
        proofOfPossessionBytes: string;
        operationCapId: string;
        imageUrl: string;
        projectUrl: string;
        p2pAddress: string;
        netAddress: string;
        primaryAddress: string;
        workerAddress: string;
        nextEpochProtocolPubkeyBytes: string | null;
        nextEpochProofOfPossession: string | null;
        nextEpochNetworkPubkeyBytes: string | null;
        nextEpochWorkerPubkeyBytes: string | null;
        nextEpochNetAddress: string | null;
        nextEpochP2pAddress: string | null;
        nextEpochPrimaryAddress: string | null;
        nextEpochWorkerAddress: string | null;
        votingPower: number;
        gasPrice: number;
        commissionRate: number;
        nextEpochStake: number;
        nextEpochGasPrice: number;
        nextEpochCommissionRate: number;
        stakingPoolId: string;
        stakingPoolActivationEpoch: number | null;
        stakingPoolDeactivationEpoch: number | null;
        stakingPoolSuiBalance: number;
        exchangeRatesId: string;
        exchangeRatesSize: number;
    }, {
        suiAddress: import("superstruct").Struct<string, null>;
        protocolPubkeyBytes: import("superstruct").Struct<string, null>;
        networkPubkeyBytes: import("superstruct").Struct<string, null>;
        workerPubkeyBytes: import("superstruct").Struct<string, null>;
        proofOfPossessionBytes: import("superstruct").Struct<string, null>;
        operationCapId: import("superstruct").Struct<string, null>;
        name: import("superstruct").Struct<string, null>;
        description: import("superstruct").Struct<string, null>;
        imageUrl: import("superstruct").Struct<string, null>;
        projectUrl: import("superstruct").Struct<string, null>;
        p2pAddress: import("superstruct").Struct<string, null>;
        netAddress: import("superstruct").Struct<string, null>;
        primaryAddress: import("superstruct").Struct<string, null>;
        workerAddress: import("superstruct").Struct<string, null>;
        nextEpochProtocolPubkeyBytes: import("superstruct").Struct<string | null, null>;
        nextEpochProofOfPossession: import("superstruct").Struct<string | null, null>;
        nextEpochNetworkPubkeyBytes: import("superstruct").Struct<string | null, null>;
        nextEpochWorkerPubkeyBytes: import("superstruct").Struct<string | null, null>;
        nextEpochNetAddress: import("superstruct").Struct<string | null, null>;
        nextEpochP2pAddress: import("superstruct").Struct<string | null, null>;
        nextEpochPrimaryAddress: import("superstruct").Struct<string | null, null>;
        nextEpochWorkerAddress: import("superstruct").Struct<string | null, null>;
        votingPower: import("superstruct").Struct<number, null>;
        gasPrice: import("superstruct").Struct<number, null>;
        commissionRate: import("superstruct").Struct<number, null>;
        nextEpochStake: import("superstruct").Struct<number, null>;
        nextEpochGasPrice: import("superstruct").Struct<number, null>;
        nextEpochCommissionRate: import("superstruct").Struct<number, null>;
        stakingPoolId: import("superstruct").Struct<string, null>;
        stakingPoolActivationEpoch: import("superstruct").Struct<number | null, null>;
        stakingPoolDeactivationEpoch: import("superstruct").Struct<number | null, null>;
        stakingPoolSuiBalance: import("superstruct").Struct<number, null>;
        rewardsPool: import("superstruct").Struct<number, null>;
        poolTokenBalance: import("superstruct").Struct<number, null>;
        pendingStake: import("superstruct").Struct<number, null>;
        pendingPoolTokenWithdraw: import("superstruct").Struct<number, null>;
        pendingTotalSuiWithdraw: import("superstruct").Struct<number, null>;
        exchangeRatesId: import("superstruct").Struct<string, null>;
        exchangeRatesSize: import("superstruct").Struct<number, null>;
    }>>;
    pendingActiveValidatorsId: import("superstruct").Struct<string, null>;
    pendingActiveValidatorsSize: import("superstruct").Struct<number, null>;
    pendingRemovals: import("superstruct").Struct<number[], import("superstruct").Struct<number, null>>;
    stakingPoolMappingsId: import("superstruct").Struct<string, null>;
    stakingPoolMappingsSize: import("superstruct").Struct<number, null>;
    inactivePoolsId: import("superstruct").Struct<string, null>;
    inactivePoolsSize: import("superstruct").Struct<number, null>;
    validatorCandidatesId: import("superstruct").Struct<string, null>;
    validatorCandidatesSize: import("superstruct").Struct<number, null>;
    atRiskValidators: import("superstruct").Struct<[string, number][], import("superstruct").Struct<[string, number], null>>;
    validatorReportRecords: import("superstruct").Struct<[string, string[]][], import("superstruct").Struct<[string, string[]], null>>;
}>;
export type SuiSystemStateSummary = Infer<typeof SuiSystemStateSummary>;
