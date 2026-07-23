<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <IconLucideLoaderCircle
        :class="cn('animate-spin block', props.class)"
        role="status"
        aria-label="loading"
    />
</template>
