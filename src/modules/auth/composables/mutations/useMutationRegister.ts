import type { UseMutationOptions } from '@tanstack/vue-query';

export function useMutationRegister(
    options?: UseMutationOptions<
        void,
        ErrorResponse,
        RegisterRequestDTO,
        unknown
    >,
) {
    const { t } = useI18n();
    const router = useRouter();
    const service = useService<AuthService>('AuthService');
    return useMutation({
        mutationFn: (data: RegisterRequestDTO) => service.register(data),
        onSuccess: () => {
            router.push({ name: 'auth-login' });
            toast.success(t('common.registration-success'), {
                description: t('message.registration-success'),
            });
        },
        onError: () => {
            toast.error(t('common.registration-error'), {
                description: t('message.registration-error'),
            });
        },
        ...options,
    });
}
