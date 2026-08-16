export type AuthService = {
    login: (data: LoginRequestDTO) => Promise<GenericResponse<LoginResponseDTO>>;
    register: (data: RegisterRequestDTO) => Promise<void>;
};
