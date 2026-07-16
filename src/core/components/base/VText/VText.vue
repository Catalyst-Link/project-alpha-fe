<script lang="ts" setup>
import type { Props } from '.';
import { textVariants } from '.';

const {
    as = 'p',
    variant,
    color,
    align,
    transform,
    ...props
} = defineProps<Props>();
</script>

<template>
    <component
        :is="as"
        :class="cn(
            textVariants({
                variant,
                color,
                align,
                transform,
            }),
            props.class,
        )"
    >
        <slot />
    </component>
</template>
