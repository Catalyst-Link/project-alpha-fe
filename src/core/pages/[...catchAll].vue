<script lang="ts" setup>
definePage({
    name: 'catchAll',
    meta: {
        layout: 'Blank',
    },
});

useHead({
    title: 'Page Not Found',
});

const { t } = useI18n();
</script>

<template>
    <section class="bg-white h-screen flex flex-col justify-center items-center">
        <div class="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
                    {{ t('message.404') }}
                </h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                    {{ t('message.something-missing') }}
                </p>
                <p class="mb-4 text-lg font-light text-gray-500">
                    {{ t('message.cant-find-page') }}
                </p>
            </div>
        </div>
    </section>
</template>
