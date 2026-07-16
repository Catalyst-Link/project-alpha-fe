<script setup lang="ts">
import type { Props } from '.';
import { Primitive } from 'reka-ui';
import { buttonVariants } from '.';

const {
    as = 'button',
    variant,
    size,
    animate,
    isLoading,
    ...props
} = defineProps<Props>();

const buttonClass = computed(() => cn(
    buttonVariants({
        variant,
        size,
        animate,
    }),
    props.class,
));
</script>

<template>
    <Primitive
        data-slot="button"
        :as="as"
        :as-child="asChild"
        :class="buttonClass"
    >
        <VSpinner v-if="isLoading" />
        <slot />
    </Primitive>
</template>
