<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    DialogClose,
    DialogContent,
    DialogPortal,
    useForwardPropsEmits,
} from 'reka-ui';

type SheetContentProps = {
    class?: HTMLAttributes['class'];
    side?: 'top' | 'right' | 'bottom' | 'left';
} & DialogContentProps;

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<SheetContentProps>(), {
    side: 'right',
});
const emits = defineEmits<DialogContentEmits>();
const delegatedProps = reactiveOmit(props, 'class', 'side');
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <DialogPortal>
        <VSheetOverlay />
        <DialogContent
            data-slot="sheet-content"
            :style="{ willChange: 'transform' }"
            :class="cn(
                'bg-background fixed z-50 flex flex-col gap-4 shadow-lg',
                side === 'right'
                    && 'data-[state=open]:animate-[v-sheet-in-right_200ms_ease-out] data-[state=closed]:animate-[v-sheet-out-right_200ms_ease-out] inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
                side === 'left'
                    && 'data-[state=open]:animate-[v-sheet-in-left_200ms_ease-out] data-[state=closed]:animate-[v-sheet-out-left_200ms_ease-out] inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
                side === 'top'
                    && 'data-[state=open]:animate-[v-sheet-in-top_200ms_ease-out] data-[state=closed]:animate-[v-sheet-out-top_200ms_ease-out] inset-x-0 top-0 h-auto border-b',
                side === 'bottom'
                    && 'data-[state=open]:animate-[v-sheet-in-bottom_200ms_ease-out] data-[state=closed]:animate-[v-sheet-out-bottom_200ms_ease-out] inset-x-0 bottom-0 h-auto border-t',
                props.class)"
            v-bind="{ ...$attrs, ...forwarded }"
        >
            <slot />

            <DialogClose
                class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
            >
                <IconLucideX class="size-4" />
                <span class="sr-only">Close</span>
            </DialogClose>
        </DialogContent>
    </DialogPortal>
</template>

<style>
@keyframes v-sheet-in-left {
    from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes v-sheet-out-left {
    from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes v-sheet-in-right {
    from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes v-sheet-out-right {
    from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
}

@keyframes v-sheet-in-top {
    from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes v-sheet-out-top {
    from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
}

@keyframes v-sheet-in-bottom {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@keyframes v-sheet-out-bottom {
    from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
}
</style>
