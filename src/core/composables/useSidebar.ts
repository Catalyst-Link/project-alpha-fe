import { createContext } from 'reka-ui';

export const [
    useSidebar,
    provideSidebarContext,
] = createContext<ProviderSidebarContext>('VSidebar');
