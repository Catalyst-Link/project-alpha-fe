<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

type OverlayColor = 'white' | 'black' | 'transparent';
type Props = {
    class?: HTMLAttributes['class'];
    color?: OverlayColor;
};
const {
    color = 'white',
    ...props
} = defineProps<Props>();

const colorClass = computed(() => {
    const map: Record<OverlayColor, string> = {
        white: 'bg-gray-100/80',
        black: 'bg-black/50',
        transparent: 'bg-transparent',
    };
    return map[color] ?? map.white;
});
</script>

<template>
    <div
        data-slot="overlay"
        :class="cn('absolute inset-0', colorClass, props.class)"
    />
</template>
