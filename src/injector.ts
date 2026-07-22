import { container, Lifecycle } from 'tsyringe';

container
    .register(
        'HttpService',
        {
            useClass: HttpServiceImpl,
        },
        {
            lifecycle: Lifecycle.Singleton,
        },
    )
    .register('AuthService', { useClass: AuthServiceImpl });
