<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import {
    ComboboxAnchor,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxPortal,
    ComboboxRoot,
    ComboboxViewport,
    SelectRoot,
} from 'reka-ui';

type Props = {
    name: string;
    modelValue?: string | number;
    class?: HTMLAttributes['class'];
    label?: string;
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    displayValue?: (value: string | number) => string;
};

const props = withDefaults(defineProps<Props>(), {
    searchable: false,
    searchPlaceholder: 'Search...',
});

const { value, errorMessage } = useField(toRef(props, 'name'), undefined, {
    initialValue: props.modelValue,
    validateOnMount: false,
    syncVModel: true,
});

const onValueChange = (next: AcceptableValue) => {
    if (typeof next === 'string' || typeof next === 'number') {
        value.value = next;
    }
};

const hasValue = computed(() => value.value !== undefined && value.value !== null && value.value !== '');
const displayText = computed(() => {
    if (!hasValue.value)
        return props.placeholder ?? '';
    return props.displayValue?.(value.value as string | number) ?? String(value.value);
});

const triggerClass = cn(
    'border-input dark:bg-input/30 w-full rounded-lg border bg-transparent px-3 py-6 text-[16px] shadow sm:text-sm',
    props.class,
);
const contentClass = cn(
    'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-combobox-content-available-height) min-w-32 overflow-x-hidden overflow-y-auto rounded-md border shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
);
const searchInputClass = cn('flex h-9 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground');
const viewportClass = cn('p-1');
const emptyClass = cn('py-6 text-center text-sm');
</script>

<template>
    <div class="space-y-3">
        <VLabel
            v-if="label"
            :for="name"
            class="font-semibold"
        >
            {{ label }}
        </VLabel>
        <div class="space-y-1">
            <ComboboxRoot
                v-if="searchable"
                :model-value="value"
                @update:model-value="onValueChange"
            >
                <ComboboxAnchor as-child>
                    <VSelectTrigger
                        :id="name"
                        :class="triggerClass"
                        :aria-invalid="!!errorMessage"
                    >
                        <span :class="cn('truncate', !hasValue && 'text-muted-foreground')">
                            {{ displayText }}
                        </span>
                    </VSelectTrigger>
                </ComboboxAnchor>
                <ComboboxPortal>
                    <ComboboxContent
                        data-slot="select-content"
                        position="popper"
                        :class="contentClass"
                    >
                        <div class="flex items-center gap-2 border-b px-3">
                            <IconLucideSearch class="size-4 shrink-0 opacity-50" />
                            <ComboboxInput
                                :display-value="() => ''"
                                auto-focus
                                :placeholder="searchPlaceholder"
                                :class="searchInputClass"
                            />
                        </div>
                        <ComboboxEmpty :class="emptyClass">
                            No results found.
                        </ComboboxEmpty>
                        <ComboboxViewport :class="viewportClass">
                            <slot />
                        </ComboboxViewport>
                    </ComboboxContent>
                </ComboboxPortal>
            </ComboboxRoot>
            <SelectRoot
                v-else
                :model-value="value"
                @update:model-value="onValueChange"
            >
                <VSelectTrigger
                    :id="name"
                    :class="triggerClass"
                    :aria-invalid="!!errorMessage"
                >
                    <VSelectValue :placeholder="placeholder" />
                </VSelectTrigger>
                <VSelectContent>
                    <slot />
                </VSelectContent>
            </SelectRoot>
            <span
                v-if="errorMessage"
                class="text-destructive text-xs font-medium mt-1.5 flex items-center gap-1 transition-all"
            >
                <IconLucideAlertCircle class="h-3.5 w-3.5 shrink-0" />
                <span class="first-letter:capitalize">{{ errorMessage }}</span>
            </span>
        </div>
    </div>
</template>
