<script lang="ts" setup>
defineOptions({
    name: 'Default',
});

const pageStore = usePageStore();
</script>

<template>
    <section class="h-dvh overflow-auto flex flex-col justify-between">
        <main class="grow">
            <h1>{{ pageStore.title }}</h1>
            <RouterView />
        </main>
    </section>
</template>
