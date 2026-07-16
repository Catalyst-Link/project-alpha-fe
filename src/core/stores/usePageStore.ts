export const usePageStore = defineStore(
    'page',
    () => {
        const title = shallowRef<string>();
        const isLoadingTitle = shallowRef<boolean>();

        const setTitle = (value: string) => {
            title.value = value;
        };

        const setIsLoadingTitle = (value: boolean) => {
            isLoadingTitle.value = value;
        };

        return {
            title,
            isLoadingTitle,
            setTitle,
            setIsLoadingTitle,
        };
    },
);
