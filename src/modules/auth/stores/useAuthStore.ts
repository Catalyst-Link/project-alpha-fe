export const useAuthStore = defineStore(
    'auth',
    () => {
        const token = shallowRef<Nullable<string>>();
        const name = shallowRef<Nullable<string>>();
        const isAuthenticated = computed(() => !!token.value);

        const setToken = (value: Nullable<string>) => {
            token.value = value;
        };

        const setName = (value: Nullable<string>) => {
            name.value = value;
        };

        const logout = () => {
            setToken(null);
            setName(null);

            window.location.href = '/login';
        };

        return {
            token,
            name,
            isAuthenticated,
            setToken,
            setName,
            logout,
        };
    },
    {
        persist: true,
    },
);
