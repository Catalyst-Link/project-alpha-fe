@Injectable()
export class AuthServiceImpl implements AuthService {
    constructor(@Inject('HttpService') private httpService: HttpService) { }

    login(data: LoginRequestDTO): Promise<GenericResponse<LoginResponseDTO>> {
        return this.httpService.post<GenericResponse<LoginResponseDTO>, LoginRequestDTO>({
            url: Endpoint.extractPath(AuthEndpoint.LOGIN),
            data,
            config: {
                _authorization: false,
            },
        });
    }

    register(data: RegisterRequestDTO): Promise<void> {
        return this.httpService.post<void, RegisterRequestDTO>({
            url: Endpoint.extractPath(AuthEndpoint.REGISTER),
            data,
            config: {
                _authorization: false,
            },
        });
    }
}
