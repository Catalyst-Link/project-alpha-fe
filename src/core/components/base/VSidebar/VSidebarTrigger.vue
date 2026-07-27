<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();

const { toggleSidebar } = useSidebar();
</script>

<template>
    <VButton
        data-sidebar="trigger"
        data-slot="sidebar-trigger"
        variant="ghost"
        size="icon"
        :class="cn('h-7 w-7', props.class)"
        @click="toggleSidebar"
    >
        <IconLucidePanelLeft />
        <span class="sr-only">Toggle Sidebar</span>
    </VButton>
</template>
