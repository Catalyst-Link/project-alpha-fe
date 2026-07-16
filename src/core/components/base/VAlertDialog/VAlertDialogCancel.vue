<script setup lang="ts">
import type { AlertDialogCancelProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { AlertDialogCancel } from 'reka-ui';
import { buttonVariants } from '../VButton';

const props = defineProps<AlertDialogCancelProps & { class?: HTMLAttributes['class'] }>();
const delegatedProps = reactiveOmit(props, 'class');
</script>

<template>
    <AlertDialogCancel
        v-bind="delegatedProps"
        :class="cn(
            buttonVariants({ variant: 'outline' }),
            'mt-2 sm:mt-0',
            props.class,
        )"
    >
        <slot />
    </AlertDialogCancel>
</template>
