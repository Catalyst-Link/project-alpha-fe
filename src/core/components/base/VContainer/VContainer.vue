<script lang="ts" setup>
import type { Props } from '.';
import { containerVariant } from '.';

const {
    as = 'section',
    ...props
} = defineProps<Props>();
</script>

<template>
    <component
        :is="as"
        :class="cn(
            containerVariant(),
            props.class,
        )"
    >
        <slot />
    </component>
</template>
