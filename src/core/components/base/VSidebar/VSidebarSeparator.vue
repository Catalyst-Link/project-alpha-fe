<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <VSeparator
        data-slot="sidebar-separator"
        data-sidebar="separator"
        :class="cn('bg-sidebar-border mx-2 w-auto', props.class)"
    >
        <slot />
    </VSeparator>
</template>
