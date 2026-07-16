import type { ClassValue } from 'clsx';
import type { RouteLocationRaw } from 'vue-router';

export type Breadcrumb = {
    name: string;
    to?: RouteLocationRaw;
};

export type TableColumn<T extends object> = {
    key: keyof T | '#';
    name: string;
    columnClass?: ClassValue;
    cellClass?: string | ((row: T) => ClassValue);
    sortKey?: string;
    render?: (row: T, index: number) => Node;
};
