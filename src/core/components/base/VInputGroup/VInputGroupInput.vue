<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
    name: string;
}>();
</script>

<template>
    <VInput
        :name="name"
        data-slot="input-group-control"
        :class="cn(
            'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
            props.class,
        )"
    />
</template>
