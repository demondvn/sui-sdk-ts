import { SignatureScheme } from './signature';
/**
 * Value to be converted into public key.
 */
export type PublicKeyInitData = string | Uint8Array | Iterable<number>;
export declare function bytesEqual(a: Uint8Array, b: Uint8Array): boolean;
/**
 * A public key
 */
export interface PublicKey {
    /**
     * Checks if two public keys are equal
     */
    equals(publicKey: PublicKey): boolean;
    /**
     * Return the base-64 representation of the public key
     */
    toBase64(): string;
    /**
     * Return the byte array representation of the public key
     */
    toBytes(): Uint8Array;
    /**
     * Return the base-64 representation of the public key
     */
    toString(): string;
    /**
     * Return the Sui address associated with this public key
     */
    toSuiAddress(): string;
}
export declare function publicKeyFromSerialized(schema: SignatureScheme, pubKey: string): PublicKey;
