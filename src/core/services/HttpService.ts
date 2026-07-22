export type HttpService = {
    get: <TResponse, TData = undefined>({
        url,
        config,
    }: {
        url: string;
        config?: ExtendedAxiosRequestConfig<TData>;
    }) => Promise<TResponse>;
    post: <TResponse, TData>({
        url,
        data,
        config,
    }: {
        url: string;
        data?: TData;
        config?: ExtendedAxiosRequestConfig<TData>;
    }) => Promise<TResponse>;
    put: <TResponse, TData>({
        url,
        data,
        config,
    }: {
        url: string;
        data?: TData;
        config?: ExtendedAxiosRequestConfig<TData>;
    }) => Promise<TResponse>;
    delete: <TResponse, TData = undefined>({
        url,
        config,
    }: {
        url: string;
        config?: ExtendedAxiosRequestConfig<TData>;
    }) => Promise<TResponse>;

    setParams: (params: ExtendedAxiosRequestConfig['params']) => ExtendedAxiosRequestConfig['params'];
    setPaginationParams: (params: ExtendedAxiosRequestConfig['params']) => ExtendedAxiosRequestConfig['params'];
    removePaginationParams: (params: ExtendedAxiosRequestConfig['params']) => ExtendedAxiosRequestConfig['params'];
};
