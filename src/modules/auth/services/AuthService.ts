export type AuthService = {
    login: (data: LoginRequestDTO) => Promise<GenericResponse<LoginResponseDTO>>;
};
