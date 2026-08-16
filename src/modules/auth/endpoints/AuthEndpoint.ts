export class AuthEndpoint {
    static {
        Endpoint.setEndpoint({
            module: 'auth',
        });
    }

    public static readonly LOGIN = Endpoint.getPath('login');
    public static readonly REGISTER = Endpoint.getPath('register');
}
