export class AuthEndpoint {
    static {
        Endpoint.setEndpoint({
            module: 'auth',
        });
    }

    public static readonly LOGIN = Endpoint.getPath('login');
}
