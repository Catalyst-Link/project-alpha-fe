import { HttpServiceImpl } from '@core/services/impl/HttpServiceImpl';
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
    );
