<script lang="ts" setup>
definePage({
    name: 'index',
});

const { t } = useI18n();
const pageStore = usePageStore();
pageStore.setTitle(t('message.start-creating-data'));
pageStore.setIsLoadingTitle(false);
</script>

<template>
    <VContainer class="min-h-dvh flex items-center justify-center">
        <VEmpty>
            <VEmptyHeader>
                <VEmptyMedia variant="icon">
                    <IconLucideFolderCode />
                </VEmptyMedia>
                <VEmptyTitle>No Pages Yet</VEmptyTitle>
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
    </VContainer>
</template>
