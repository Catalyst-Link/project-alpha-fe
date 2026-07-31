<script setup lang="ts">
import type { DialogOverlayProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { DialogOverlay } from 'reka-ui';

const props = defineProps<DialogOverlayProps & { class?: HTMLAttributes['class'] }>();
const delegatedProps = reactiveOmit(props, 'class');
</script>

<template>
    <DialogOverlay
        data-slot="sheet-overlay"
        :class="cn('data-[state=open]:animate-[v-sheet-fade-in_200ms_ease-out] data-[state=closed]:animate-[v-sheet-fade-out_200ms_ease-out] fixed inset-0 z-50 bg-black/80', props.class)"
        v-bind="delegatedProps"
    >
        <slot />
    </DialogOverlay>
</template>

<style>
@keyframes v-sheet-fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes v-sheet-fade-out {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
