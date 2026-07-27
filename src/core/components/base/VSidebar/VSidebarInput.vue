<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <VInput
        name="sidebar-input"
        data-slot="sidebar-input"
        data-sidebar="input"
        :class="cn(
            'bg-background h-8 w-full shadow-none',
            props.class,
        )"
    >
        <slot />
    </VInput>
</template>
