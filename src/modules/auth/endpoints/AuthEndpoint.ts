export class AuthEndpoint {
    static {
        Endpoint.setEndpoint({
            base: '/catalyst-link-up',
            version: 'v1',
            module: 'auth',
        });
    }

    public static readonly LOGIN = Endpoint.getPath('login');
}
