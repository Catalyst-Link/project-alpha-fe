<script setup lang="ts">
import type { FactoryOpts, MaskedDynamic } from 'imask';
import type { HTMLAttributes, InputHTMLAttributes, InputTypeHTMLAttribute } from 'vue';
import { IMaskComponent } from 'vue-imask';

type MaskConfig = FactoryOpts | string;

type Props = {
    name: string;
    modelValue?: string | number;
    class?: HTMLAttributes['class'];
    label?: string;
    type?: InputTypeHTMLAttribute | 'phone';
    placeholder?: InputHTMLAttributes['placeholder'];
    mask?: MaskConfig;
};

const {
    type = 'text',
    ...props
} = defineProps<Props>();

const phoneMask: FactoryOpts = {
    mask: [
        '+62 000-0000-0000',
        '+62 0000-0000-0000',
    ],
    dispatch: (appended: string, masked: MaskedDynamic) => {
        const digitCount = masked.unmaskedValue.length + appended.replace(/\D/g, '').length;
        return masked.compiledMasks[digitCount >= 12 ? 1 : 0];
    },
};

const isPhone = computed(() => type === 'phone');
const inputType = computed<InputTypeHTMLAttribute>(() => (isPhone.value ? 'tel' : (type as InputTypeHTMLAttribute)));
const effectiveMask = computed(() => (isPhone.value ? (props.mask ?? phoneMask) : props.mask));
const isMasked = computed(() => Boolean(effectiveMask.value));

const imaskProps = computed(() => {
    const m = effectiveMask.value;
    return m == null ? {} : (typeof m === 'string' ? { mask: m } : m);
});

const { value, errorMessage } = useField(toRef(props, 'name'), undefined, {
    initialValue: props.modelValue,
    validateOnMount: false,
    syncVModel: true,
});

const maskedValue = computed(() => (value.value == null ? '' : String(value.value)));

const onMaskedValueChange = (next: string) => {
    value.value = next;
};

const inputClass = computed(() => cn(
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-lg border bg-transparent px-3 py-6 shadow transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-[16px] sm:text-sm',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-1',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:ring-1 aria-invalid:border-destructive',
    props.class,
));
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
            <IMaskComponent
                v-if="isMasked"
                v-bind="imaskProps"
                :id="name"
                :model-value="maskedValue"
                :name="name"
                :type="inputType"
                :placeholder="placeholder"
                :aria-invalid="!!errorMessage"
                data-slot="input"
                :class="inputClass"
                @update:model-value="onMaskedValueChange"
            />
            <input
                v-else
                :id="name"
                v-model="value"
                :name="name"
                :type="inputType"
                :placeholder="placeholder"
                :aria-invalid="!!errorMessage"
                data-slot="input"
                :class="inputClass"
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
