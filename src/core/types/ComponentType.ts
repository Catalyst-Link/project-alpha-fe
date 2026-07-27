import type { ClassValue } from 'clsx';
import type { ComputedRef, Ref } from 'vue';
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

export type Tab<T extends string> = {
    key: T;
    name: string;
    icon?: VNode;
};

export type ProviderSidebarContextState = 'expanded' | 'collapsed';
export type ProviderSidebarContext = {
    state: ComputedRef<ProviderSidebarContextState>;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
};
