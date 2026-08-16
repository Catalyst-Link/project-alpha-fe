<script setup lang="ts">
import type { Props } from '.';
import { Primitive } from 'reka-ui';
import { buttonVariants } from '.';

const {
    as = 'button',
    type = 'button',
    variant,
    size,
    animate,
    isLoading,
    disabled,
    ...props
} = defineProps<Props>();

const buttonClass = computed(() => cn(
    buttonVariants({
        variant,
        size,
        animate,
        disabled,
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
        :type="type"
    >
        <VSpinner v-if="isLoading" />
        <span>
            <slot />
        </span>
        <span>
            <slot name="icon" />
        </span>
    </Primitive>
</template>
