<script lang="ts" setup>
defineOptions({
    name: 'Default',
});

const { t } = useI18n();
const pageStore = usePageStore();
pageStore.setTitle(t('menu.dashboard'));
</script>

<template>
    <section class="h-dvh overflow-auto flex flex-col justify-between">
        <main class="grow">
            <VSidebarProvider>
                <VSidebar />
                <VSidebarInset>
                    <VHeader />
                    <RouterView />
                </VSidebarInset>
            </VSidebarProvider>
        </main>
    </section>
</template>
