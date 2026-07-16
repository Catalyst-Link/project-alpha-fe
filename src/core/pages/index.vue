<script lang="ts" setup>
const { t } = useI18n();
const pageStore = usePageStore();
pageStore.setTitle(t('message.start-creating-data'));
pageStore.setIsLoadingTitle(false);
</script>

<template>
    <div />
</template>
