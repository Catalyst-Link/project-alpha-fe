export const env = object({
    VITE_APP_DEV_MODE: string().oneOf(['development', 'staging', 'production']).required(),
    VITE_APP_DEV_PORT: string().required(),
    VITE_BASE_API_URL: string().required(),
}).validateSync(import.meta.env, {
    stripUnknown: true,
});
