import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import NProgress from 'nprogress';
import snakecaseKeys from 'snakecase-keys';

@Singleton()
export class HttpServiceImpl implements HttpService {
    private _instance: AxiosInstance;

    constructor() {
        this._instance = axios.create({
            withCredentials: true,
        });

        this._setInterceptor();
    }

    get<TResponse, TData = undefined>({
        url,
        config,
    }: {
        url: string;
        config?: ExtendedAxiosRequestConfig<TData>;
    }): Promise<TResponse> {
        return this._instance.get(url, config);
    }

    post<TResponse, TData>({
        url,
        data,
        config,
    }: {
        url: string;
        data?: TData;
        config?: ExtendedAxiosRequestConfig<TData>;
    }): Promise<TResponse> {
        return this._instance.post(url, data, config);
    }

    put<TResponse, TData>({
        url,
        data,
        config,
    }: {
        url: string;
        data?: TData;
        config?: ExtendedAxiosRequestConfig<TData>;
    }): Promise<TResponse> {
        return this._instance.put(url, data, config);
    }

    delete<TResponse, TData = undefined>({
        url,
        config,
    }: {
        url: string;
        config?: ExtendedAxiosRequestConfig<TData>;
    }): Promise<TResponse> {
        return this._instance.delete(url, config);
    }

    setParams(params: ExtendedAxiosRequestConfig['params']): ExtendedAxiosRequestConfig['params'] {
        return {
            ...params,
        };
    }

    setPaginationParams(params: ExtendedAxiosRequestConfig['params']): ExtendedAxiosRequestConfig['params'] {
        return {
            ...params,
            page: params.page - 1,
        };
    }

    removePaginationParams(params: ExtendedAxiosRequestConfig['params']): ExtendedAxiosRequestConfig['params'] {
        return {
            ...params,
            page: undefined,
            limit: undefined,
            sortBy: undefined,
            direction: undefined,
        };
    }

    private _withAuthorization(config: ExtendedInternalAxiosRequestConfig): ExtendedInternalAxiosRequestConfig['_authorization'] {
        return config._authorization ?? 'snake';
    }

    private _withNotification(config: ExtendedInternalAxiosRequestConfig): boolean {
        return config._notification ?? true;
    }

    private _withErrorHandler(config: ExtendedInternalAxiosRequestConfig): boolean {
        return config._handler ?? true;
    }

    private _setInterceptor(): void {
        this._instance.interceptors.request.use((request: ExtendedInternalAxiosRequestConfig) =>
            this._setRequestHandler(request, this),
        );
        this._instance.interceptors.response.use(
            (response: AxiosResponse) => this._setResponseSuccessHandler(response, this),
            (error: AxiosError) => this._setResponseErrorHandler(error, this),
        );
    }

    private _setRequestHandler(
        request: ExtendedInternalAxiosRequestConfig,
        context: this,
    ): ExtendedInternalAxiosRequestConfig {
        NProgress.start();
        if (context._withAuthorization(request) && useAuthStore().token) {
            request.params = {
                ...request.params,
                access_token: context._withAuthorization(request) === 'snake' ? useAuthStore().token : undefined,
                accessToken: context._withAuthorization(request) === 'camel' ? useAuthStore().token : undefined,
            };
        }

        if (request.data && typeof request.data === 'object' && !(request.data instanceof FormData)) {
            const plainData = JSON.parse(JSON.stringify(request.data));
            request.data = snakecaseKeys(plainData, { deep: true });
        }

        if (request.params && typeof request.params === 'object') {
            const plainParams = JSON.parse(JSON.stringify(request.params));
            request.params = snakecaseKeys(plainParams, { deep: true });
        }

        return request;
    }

    private _setResponseSuccessHandler(response: AxiosResponse, context: this) {
        NProgress.done();

        const config = response.config as ExtendedInternalAxiosRequestConfig;

        if (response.data && typeof response.data === 'object') {
            response.data = camelcaseKeys(response.data, { deep: true });
        }

        const { message, result = MESSAGE.HTTP_ERROR } = response.data;

        if (context._withErrorHandler(config) && message === RESPONSE.ERROR) {
            if (context._withNotification(config)) {
                toast.error(result);
            }
            throw new HttpResponseError({ message: result });
        }

        return config?._asAxiosResponse ? response : response.data;
    }

    private _setResponseErrorHandler(error: AxiosError<any>, context: this): Promise<AxiosError> {
        NProgress.done();

        const config = error.config as ExtendedInternalAxiosRequestConfig;

        if (error.response?.status === 401) {
            if (window.location.pathname !== '/login') {
                toast.error(
                    'Session Timeout',
                    {
                        description: 'Your session has expired for security reasons. Please log back in to access the application.',
                    },
                );
                useAuthStore().logout();
            }
        }

        else {
            if (context._withNotification(config)) {
                const { message } = error.response!.data;
                toast.error(
                    'Something Went Wrong',
                    {
                        description: message ?? 'Please check your internet connection or reach out to support.',
                    },
                );
            }
        }
        return Promise.reject(error.response);
    }
}
