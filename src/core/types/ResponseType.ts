export type ResponseStatus = ObjectValues<typeof RESPONSE>;
export type GenericResponse<T> = {
    code: number;
    message: ResponseStatus;
    data: T;
};
export type GenericPagination<T> = {
    elements: string;
    message: string;
    pages: string;
    result: T;
};
