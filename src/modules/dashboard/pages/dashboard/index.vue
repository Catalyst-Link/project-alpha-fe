<script lang="ts" setup>
definePage({
    name: 'dashboard',
    meta: {
        requiresAuth: true,
    },
});

const { t } = useI18n();
const pageStore = usePageStore();
pageStore.setTitle(t('message.start-creating-data'));
pageStore.setIsLoadingTitle(false);

const secret = env.VITE_AES_SECRET_KEY;
</script>

<template>
    <VEmpty>
        <VEmptyHeader>
            <VEmptyMedia variant="icon">
                <IconLucideFolderCode />
            </VEmptyMedia>
            <VEmptyTitle>No Pages Yet {{ secret }}</VEmptyTitle>
            <VEmptyDescription>
                You haven't created any pages yet. Get started by creating your first pages.
            </VEmptyDescription>
        </VEmptyHeader>
        <VEmptyContent class="flex-row justify-center">
            <VButton>Create Pages</VButton>
            <VButton variant="secondary">
                Import Pages
            </VButton>
        </VEmptyContent>
    </VEmpty>
</template>
