<script setup lang="ts">
import type { HTMLAttributes, InputHTMLAttributes, InputTypeHTMLAttribute } from 'vue';

type Props = {
    name: string;
    modelValue?: string | number;
    class?: HTMLAttributes['class'];
    label?: string;
    type?: InputTypeHTMLAttribute;
    placeholder?: InputHTMLAttributes['placeholder'];
};

const {
    type = 'text',
    ...props
} = defineProps<Props>();

const { value, errorMessage } = useField(toRef(props, 'name'), undefined, {
    initialValue: props.modelValue,
    validateOnMount: false,
    syncVModel: true,
});
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
            <input
                :id="name"
                v-model="value"
                :name="name"
                :type="type"
                :placeholder="placeholder"
                data-slot="input"
                :class="cn(
                    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-lg border bg-transparent px-3 py-6 shadow transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-sm',
                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-1',
                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                    props.class,
                )"
            >
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
