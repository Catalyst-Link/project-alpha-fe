import { container, Lifecycle } from '@/core/di/tsyringe';

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
