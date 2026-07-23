export const ENDPOINT_PATH = '/catalyst-link-up' as const;
export const ENDPOINT_VERSION = {
    V1: 'v1',
    V2: 'v2',
} as const;
export const RESPONSE = {
    OK: 'OK',
    ERROR: 'ERROR',
} as const;
export const MESSAGE = {
    HTTP_ERROR: 'Terjadi kesalahan. Coba periksa koneksi Anda atau hubungi administrator',
} as const;
export const SORT_DIRECTION = {
    ASCENDING: 'asc',
    DESCENDING: 'desc',
} as const;
