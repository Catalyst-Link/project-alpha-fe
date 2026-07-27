export const SIDEBAR_COOKIE_NAME = 'sidebar_state';
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
export const SIDEBAR_WIDTH = '16rem';
export const SIDEBAR_WIDTH_MOBILE = '18rem';
export const SIDEBAR_WIDTH_ICON = '3rem';
export const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

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
    HTTP_ERROR: 'Something went wrong. Please check your connection or contact the administrator.',
} as const;
export const SORT_DIRECTION = {
    ASCENDING: 'asc',
    DESCENDING: 'desc',
} as const;
