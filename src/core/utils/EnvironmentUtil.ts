export const env = object({
    VITE_APP_DEV_MODE: string()
        .oneOf(['development', 'staging', 'production'])
        .required(),

    VITE_APP_DEV_PORT: string()
        .transform((value) => {
            const parsed = Number(value);
            return Number.isNaN(parsed)
                ? undefined
                : parsed;
        })
        .required(),
}).validateSync(import.meta.env, {
    stripUnknown: true,
});
