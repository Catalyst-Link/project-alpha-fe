<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { EmptyMediaVariants } from '.';

const props = defineProps<{
    class?: HTMLAttributes['class'];
    icon?: string;
    iconVariant?: EmptyMediaVariants['variant'];
    title?: string;
    description?: string;
    actionLabel?: string;
    actionHref?: string;
}>();
</script>

<template>
    <div
        data-slot="empty"
        :class="cn(
            'flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12',
            props.class,
        )"
    >
        <slot />
    </div>
</template>
