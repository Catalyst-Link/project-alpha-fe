<script setup lang="ts">
import type { SelectItemProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    ComboboxItem,
    ComboboxItemIndicator,
    injectComboboxRootContext,
    SelectItem,
    SelectItemIndicator,
    SelectItemText,
    useForwardProps,
} from 'reka-ui';

const props = defineProps<SelectItemProps & { class?: HTMLAttributes['class'] }>();
const delegatedProps = reactiveOmit(props, 'class');
const forwardedProps = useForwardProps(delegatedProps);
const isCombobox = computed(() => !!injectComboboxRootContext(null));

const itemClasses = cn(
    `focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2`,
    props.class,
);
</script>

<template>
    <ComboboxItem
        v-if="isCombobox"
        data-slot="select-item"
        v-bind="forwardedProps"
        :class="itemClasses"
    >
        <span class="absolute right-2 flex size-3.5 items-center justify-center">
            <ComboboxItemIndicator>
                <slot name="indicator-icon">
                    <IconLucideCheck class="size-4" />
                </slot>
            </ComboboxItemIndicator>
        </span>
        <slot />
    </ComboboxItem>
    <SelectItem
        v-else
        data-slot="select-item"
        v-bind="forwardedProps"
        :class="itemClasses"
    >
        <span class="absolute right-2 flex size-3.5 items-center justify-center">
            <SelectItemIndicator>
                <slot name="indicator-icon">
                    <IconLucideCheck class="size-4" />
                </slot>
            </SelectItemIndicator>
        </span>

        <SelectItemText>
            <slot />
        </SelectItemText>
    </SelectItem>
</template>
