import type { UseMutationOptions } from '@tanstack/vue-query';

export function useMutationLogin(
    options?: UseMutationOptions<
        GenericResponse<LoginResponseDTO>,
        ErrorResponse,
        LoginRequestDTO,
        unknown
    >,
) {
    const authService = useService<AuthService>('AuthService');
    return useMutation({
        mutationFn: (data: LoginRequestDTO) => authService.login(data),
        ...options,
    });
}
