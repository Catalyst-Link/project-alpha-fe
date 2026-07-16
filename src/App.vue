<script lang="ts" setup>
const pageStore = usePageStore();
</script>

<template>
    <p>
        {{ pageStore.title }}
    </p>
    <RouterView />
</template>
