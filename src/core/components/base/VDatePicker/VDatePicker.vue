<script setup lang="ts">
import type { DateValue } from '@internationalized/date';
import type { HTMLAttributes } from 'vue';
import type { LayoutTypes } from '../VCalendar/VCalendar.vue';
import { getLocalTimeZone, parseDate, today } from '@internationalized/date';
import { useDateFormatter } from 'reka-ui';
import { toDate } from 'reka-ui/date';

type Props = {
    name: string;
    modelValue?: string;
    class?: HTMLAttributes['class'];
    label?: string;
    placeholder?: string;
    locale?: string;
    layout?: LayoutTypes;
};

const props = withDefaults(defineProps<Props>(), {
    layout: 'month-and-year',
});

const formatter = useDateFormatter(props.locale ?? 'en');

const { value, errorMessage } = useField(toRef(props, 'name'), undefined, {
    initialValue: props.modelValue,
    validateOnMount: false,
    syncVModel: true,
});

const calendarValue = computed<DateValue | undefined>(() => {
    const v = value.value;
    if (v == null)
        return undefined;
    if (typeof v === 'string') {
        return /^\d{4}-\d{2}-\d{2}$/.test(v) ? parseDate(v) : undefined;
    }
    return v as DateValue;
});

const hasValue = computed(() => calendarValue.value != null);
const displayText = computed(() =>
    calendarValue.value
        ? formatter.custom(toDate(calendarValue.value), { dateStyle: 'long' })
        : (props.placeholder ?? 'Pick a date'),
);

const open = ref(false);
const defaultPlaceholder = today(getLocalTimeZone());

const onCalendarChange = (next: DateValue | DateValue[] | undefined) => {
    if (next == null || Array.isArray(next)) {
        value.value = '';
    }
    else {
        value.value = next.toString();
    }
    open.value = false;
};

const triggerClass = computed(() => cn(
    'border-input dark:bg-input/30 inline-flex h-9 w-full min-w-0 items-center justify-start gap-2 rounded-lg border bg-transparent px-3 py-6 text-[16px] shadow outline-none sm:text-sm',
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
            <VPopover v-model:open="open">
                <VPopoverTrigger as-child>
                    <button
                        :id="name"
                        type="button"
                        :aria-invalid="!!errorMessage"
                        data-slot="date-picker-trigger"
                        :class="triggerClass"
                    >
                        <IconLucideCalendar class="h-4 w-4 shrink-0 opacity-50" />
                        <span :class="cn('truncate', !hasValue && 'text-muted-foreground')">
                            {{ displayText }}
                        </span>
                    </button>
                </VPopoverTrigger>
                <VPopoverContent
                    class="w-auto p-0"
                    align="start"
                >
                    <VCalendar
                        :model-value="calendarValue"
                        :default-placeholder="defaultPlaceholder"
                        :initial-focus="true"
                        :locale="locale"
                        :layout="layout"
                        @update:model-value="onCalendarChange"
                    />
                </VPopoverContent>
            </VPopover>
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
