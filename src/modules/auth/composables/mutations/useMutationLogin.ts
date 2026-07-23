import type { UseMutationOptions } from '@tanstack/vue-query';

export function useMutationLogin(
    options?: UseMutationOptions<
        GenericResponse<LoginResponseDTO>,
        ErrorResponse,
        LoginRequestDTO,
        unknown
    >,
) {
    const { t } = useI18n();
    const router = useRouter();
    const store = useAuthStore();
    const authService = useService<AuthService>('AuthService');
    return useMutation({
        mutationFn: (data: LoginRequestDTO) => authService.login(data),
        onSuccess: (data) => {
            const { accessToken } = data.data;
            store.setToken(accessToken);
            router.push({ name: 'index' });

            toast.success(t('common.authentication-success'), {
                description: t('message.welcome-user'),
            });
        },
        onError: () => {
            toast.error(t('common.authentication-error'), {
                description: t('message.welcome-user-error'),
            });
        },
        ...options,
    });
}
