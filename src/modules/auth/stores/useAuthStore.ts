export const useAuthStore = defineStore(
    'auth',
    () => {
        const token = shallowRef<Nullable<string>>();
        const name = shallowRef<Nullable<string>>();

        const setToken = (value: Nullable<string>) => {
            token.value = value;
        };

        const setName = (value: Nullable<string>) => {
            name.value = value;
        };

        const logout = () => {
            setToken(null);
            setName(null);

            window.location.href = '/';
        };

        return {
            token,
            name,
            setToken,
            setName,
            logout,
        };
    },
    {
        persist: true,
    },
);
