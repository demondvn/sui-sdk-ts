import { Infer } from 'superstruct';
import { ObjectId, SuiAddress, TransactionDigest, SuiJsonValue } from './common';
export declare const EventId: import("superstruct").Struct<{
    txDigest: string;
    eventSeq: number;
}, {
    txDigest: import("superstruct").Struct<string, null>;
    eventSeq: import("superstruct").Struct<number, null>;
}>;
export declare const SuiEvent: import("superstruct").Struct<{
    id: {
        txDigest: string;
        eventSeq: number;
    };
    packageId: string;
    transactionModule: string;
    sender: string;
    type: string;
    parsedJson?: Record<string, any> | undefined;
    bcs?: string | undefined;
    timestampMs?: number | undefined;
}, {
    id: import("superstruct").Struct<{
        txDigest: string;
        eventSeq: number;
    }, {
        txDigest: import("superstruct").Struct<string, null>;
        eventSeq: import("superstruct").Struct<number, null>;
    }>;
    packageId: import("superstruct").Struct<string, null>;
    transactionModule: import("superstruct").Struct<string, null>;
    sender: import("superstruct").Struct<string, null>;
    type: import("superstruct").Struct<string, null>;
    parsedJson: import("superstruct").Struct<Record<string, any> | undefined, null>;
    bcs: import("superstruct").Struct<string | undefined, null>;
    timestampMs: import("superstruct").Struct<number | undefined, null>;
}>;
export type SuiEvent = Infer<typeof SuiEvent>;
export type MoveEventField = {
    path: string;
    value: SuiJsonValue;
};
/**
 * Sequential event ID, ie (transaction seq number, event seq number).
 * 1) Serves as a unique event ID for each fullnode
 * 2) Also serves to sequence events for the purposes of pagination and querying.
 *    A higher id is an event seen later by that fullnode.
 * This ID is the "cursor" for event querying.
 */
export type EventId = Infer<typeof EventId>;
export type SuiEventFilter = {
    Package: ObjectId;
} | {
    MoveModule: {
        package: ObjectId;
        module: string;
    };
} | {
    MoveEventType: string;
} | {
    MoveEventField: MoveEventField;
} | {
    Transaction: TransactionDigest;
} | {
    TimeRange: {
        start_time: number;
        end_time: number;
    };
} | {
    Sender: SuiAddress;
} | {
    All: SuiEventFilter[];
} | {
    Any: SuiEventFilter[];
} | {
    And: [SuiEventFilter, SuiEventFilter];
} | {
    Or: [SuiEventFilter, SuiEventFilter];
};
export declare const PaginatedEvents: import("superstruct").Struct<{
    data: {
        id: {
            txDigest: string;
            eventSeq: number;
        };
        packageId: string;
        transactionModule: string;
        sender: string;
        type: string;
        parsedJson?: Record<string, any> | undefined;
        bcs?: string | undefined;
        timestampMs?: number | undefined;
    }[];
    nextCursor: {
        txDigest: string;
        eventSeq: number;
    } | null;
    hasNextPage: boolean;
}, {
    data: import("superstruct").Struct<{
        id: {
            txDigest: string;
            eventSeq: number;
        };
        packageId: string;
        transactionModule: string;
        sender: string;
        type: string;
        parsedJson?: Record<string, any> | undefined;
        bcs?: string | undefined;
        timestampMs?: number | undefined;
    }[], import("superstruct").Struct<{
        id: {
            txDigest: string;
            eventSeq: number;
        };
        packageId: string;
        transactionModule: string;
        sender: string;
        type: string;
        parsedJson?: Record<string, any> | undefined;
        bcs?: string | undefined;
        timestampMs?: number | undefined;
    }, {
        id: import("superstruct").Struct<{
            txDigest: string;
            eventSeq: number;
        }, {
            txDigest: import("superstruct").Struct<string, null>;
            eventSeq: import("superstruct").Struct<number, null>;
        }>;
        packageId: import("superstruct").Struct<string, null>;
        transactionModule: import("superstruct").Struct<string, null>;
        sender: import("superstruct").Struct<string, null>;
        type: import("superstruct").Struct<string, null>;
        parsedJson: import("superstruct").Struct<Record<string, any> | undefined, null>;
        bcs: import("superstruct").Struct<string | undefined, null>;
        timestampMs: import("superstruct").Struct<number | undefined, null>;
    }>>;
    nextCursor: import("superstruct").Struct<{
        txDigest: string;
        eventSeq: number;
    } | null, {
        txDigest: import("superstruct").Struct<string, null>;
        eventSeq: import("superstruct").Struct<number, null>;
    }>;
    hasNextPage: import("superstruct").Struct<boolean, null>;
}>;
export type PaginatedEvents = Infer<typeof PaginatedEvents>;
export declare const SubscriptionId: import("superstruct").Struct<number, null>;
export type SubscriptionId = Infer<typeof SubscriptionId>;
export declare const SubscriptionEvent: import("superstruct").Struct<{
    subscription: number;
    result: {
        id: {
            txDigest: string;
            eventSeq: number;
        };
        packageId: string;
        transactionModule: string;
        sender: string;
        type: string;
        parsedJson?: Record<string, any> | undefined;
        bcs?: string | undefined;
        timestampMs?: number | undefined;
    };
}, {
    subscription: import("superstruct").Struct<number, null>;
    result: import("superstruct").Struct<{
        id: {
            txDigest: string;
            eventSeq: number;
        };
        packageId: string;
        transactionModule: string;
        sender: string;
        type: string;
        parsedJson?: Record<string, any> | undefined;
        bcs?: string | undefined;
        timestampMs?: number | undefined;
    }, {
        id: import("superstruct").Struct<{
            txDigest: string;
            eventSeq: number;
        }, {
            txDigest: import("superstruct").Struct<string, null>;
            eventSeq: import("superstruct").Struct<number, null>;
        }>;
        packageId: import("superstruct").Struct<string, null>;
        transactionModule: import("superstruct").Struct<string, null>;
        sender: import("superstruct").Struct<string, null>;
        type: import("superstruct").Struct<string, null>;
        parsedJson: import("superstruct").Struct<Record<string, any> | undefined, null>;
        bcs: import("superstruct").Struct<string | undefined, null>;
        timestampMs: import("superstruct").Struct<number | undefined, null>;
    }>;
}>;
export type SubscriptionEvent = Infer<typeof SubscriptionEvent>;
export declare function getEventSender(event: SuiEvent): SuiAddress;
export declare function getEventPackage(event: SuiEvent): ObjectId;
