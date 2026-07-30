import CryptoJS from 'crypto-js';

/**
 * @description check specific value is array
 */
export const isArray = <T>(value?: T[]): value is T[] => Array.isArray(value);

/**
 * @description check specific value is array and has an array value
 */
export const isArrayExist = <T>(value?: T[]): value is T[] => isArray(value) && !!value.length;

/**
 * @description check specific value are null or undefined
 */
export const isNil = (value: unknown) => value == null;

/**
 * @description check specific value is null
 */
export const isNull = (value: unknown) => value === null;

/**
 * @description check specific value is undefined
 */
export const isUndefined = (value: unknown) => value === undefined;

/**
 * @description check specific value is number
 */
export const isNumber = (value: unknown): value is number => Number.isFinite(value);

/**
 * @description check specific value is numeric
 */
export const isNumeric = (value?: string) => !isNil(value) ? /^-?\d+$/.test(value) : false;

/**
 * @description check value contains only number
 */
export const containsOnlyNumbers = (value: string) => /^\d+$/.test(value);

/**
 * @description create blob url from file
 */
export const createObjectURL = (file: File | Blob) => window.URL.createObjectURL(file);

/**
 * @description format value as string or string strip
 */
export const valueOrStrip = (value?: string | number | null) => !isNil(value) && value !== '' ? value : '-';

/**
 * @description format value or null
 */
export const valueOrNull = <T>(value?: Nullable<T>) => value || null;

/**
 * @description format value as string or null
 */
export const stringOrNull = (value?: Nullable<string>) => typeof value === 'string' ? value : null;

/**
 * @description format value as number or empty
 */
export const stringOrEmpty = (value?: Nullable<string>) => typeof value === 'string' && value ? value : '';

/**
 * @description format value as number or null
 */
export const numberOrNull = (value?: Nullable<number>) => isNumber(value) ? value : null;

/**
 * @description format value as number or zero
 */
export const numberOrZero = (value?: Nullable<number>) => isNumber(value) ? value : 0;

/**
 * @description encrypts a plain text string using AES-256-CBC encryption.
 */
export function encryptAES(plainText: string): string {
    const key = CryptoJS.enc.Base64.parse(env.VITE_AES_SECRET_KEY);
    const iv = CryptoJS.enc.Utf8.parse('1234567890123456');

    const encrypted = CryptoJS.AES.encrypt(plainText, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    const encryptedBase64 = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    return encodeURIComponent(encryptedBase64);
}
