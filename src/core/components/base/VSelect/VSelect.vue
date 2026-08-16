<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { SelectRoot } from 'reka-ui';

type Props = {
    name: string;
    modelValue?: string | number;
    class?: HTMLAttributes['class'];
    label?: string;
    placeholder?: string;
};

const props = defineProps<Props>();

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
            <SelectRoot
                :model-value="value"
                @update:model-value="onValueChange"
            >
                <VSelectTrigger
                    :id="name"
                    :class="cn(
                        'border-input dark:bg-input/30 w-full rounded-lg border bg-transparent px-3 py-6 text-[16px] shadow sm:text-sm',
                        props.class,
                    )"
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
