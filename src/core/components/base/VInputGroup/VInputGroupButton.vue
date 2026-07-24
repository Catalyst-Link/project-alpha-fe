<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { InputGroupButtonVariants } from '.';
import type { ButtonVariants } from '../VButton';
import { inputGroupButtonVariants } from '.';

type InputGroupButtonProps = {
    variant?: ButtonVariants['variant'];
    size?: InputGroupButtonVariants['size'];
    class?: HTMLAttributes['class'];
};

const props = withDefaults(defineProps<InputGroupButtonProps>(), {
    size: 'xs',
    variant: 'ghost',
});
</script>

<template>
    <VButton
        :data-size="props.size"
        :variant="props.variant"
        :class="cn(inputGroupButtonVariants({ size: props.size }), props.class)"
    >
        <slot />
    </VButton>
</template>
