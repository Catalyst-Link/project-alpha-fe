<script lang="ts" setup>
import type { CalendarRootEmits, CalendarRootProps, DateValue } from 'reka-ui';
import type { HTMLAttributes, Ref } from 'vue';
import { getLocalTimeZone, today } from '@internationalized/date';
import { CalendarRoot, useDateFormatter, useForwardPropsEmits } from 'reka-ui';
import { createYear, createYearRange, toDate } from 'reka-ui/date';

export type LayoutTypes = 'month-and-year' | 'month-only' | 'year-only' | undefined;

const props = withDefaults(defineProps<CalendarRootProps & { class?: HTMLAttributes['class']; layout?: LayoutTypes; yearRange?: DateValue[] }>(), {
    modelValue: undefined,
    layout: undefined,
});
const emits = defineEmits<CalendarRootEmits>();

const delegatedProps = reactiveOmit(props, 'class', 'layout', 'placeholder');

const placeholder = useVModel(props, 'placeholder', emits, {
    passive: true,
    defaultValue: props.defaultPlaceholder ?? today(getLocalTimeZone()),
}) as Ref<DateValue>;

const formatter = useDateFormatter(props.locale ?? 'en');

const formatMonthShort = (value: string | number) =>
    formatter.custom(toDate(today(getLocalTimeZone()).set({ month: Number(value) })), { month: 'short' });

const yearRange = computed(() => {
    return props.yearRange ?? createYearRange({
        start: props?.minValue ?? (toRaw(props.placeholder) ?? props.defaultPlaceholder ?? today(getLocalTimeZone()))
            .cycle('year', -100),

        end: props?.maxValue ?? (toRaw(props.placeholder) ?? props.defaultPlaceholder ?? today(getLocalTimeZone()))
            .cycle('year', 10),
    });
});

const [DefineMonthTemplate, ReuseMonthTemplate] = createReusableTemplate<{ date: DateValue }>();
const [DefineYearTemplate, ReuseYearTemplate] = createReusableTemplate<{ date: DateValue }>();

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <DefineMonthTemplate v-slot="{ date }">
        <VSelect
            :model-value="date.month"
            name="calendar-month"
            class="w-20 text-xs cursor-pointer"
            searchable
            search-placeholder="Search month..."
            :display-value="formatMonthShort"
            @update:model-value="(value: string | number) => placeholder = placeholder.set({ month: Number(value) })"
        >
            <VSelectItem
                v-for="(month) in createYear({ dateObj: date })"
                :key="month.toString()"
                :value="month.month"
            >
                {{ formatter.custom(toDate(month), { month: 'short' }) }}
            </VSelectItem>
        </VSelect>
    </DefineMonthTemplate>

    <DefineYearTemplate v-slot="{ date }">
        <VSelect
            :model-value="date.year"
            name="calendar-year"
            class="w-20 text-xs cursor-pointer"
            searchable
            search-placeholder="Search year..."
            @update:model-value="(value: string | number) => placeholder = placeholder.set({ year: Number(value) })"
        >
            <VSelectItem
                v-for="(year) in yearRange"
                :key="year.toString()"
                :value="year.year"
            >
                {{ formatter.custom(toDate(year), { year: 'numeric' }) }}
            </VSelectItem>
        </VSelect>
    </DefineYearTemplate>

    <CalendarRoot
        v-slot="{ grid, weekDays, date }"
        v-bind="forwarded"
        v-model:placeholder="placeholder"
        data-slot="calendar"
        :class="cn('p-3', props.class)"
    >
        <VCalendarHeader class="flex items-center justify-between px-0 pt-0">
            <VCalendarPrevButton>
                <slot name="calendar-prev-icon" />
            </VCalendarPrevButton>
            <div class="flex flex-1 items-center justify-center gap-1">
                <slot
                    name="calendar-heading"
                    :date="date"
                    :month="ReuseMonthTemplate"
                    :year="ReuseYearTemplate"
                >
                    <template v-if="layout === 'month-and-year'">
                        <div class="flex items-center justify-center gap-1">
                            <ReuseMonthTemplate :date="date" />
                            <ReuseYearTemplate :date="date" />
                        </div>
                    </template>
                    <template v-else-if="layout === 'month-only'">
                        <div class="flex items-center justify-center gap-1">
                            <ReuseMonthTemplate :date="date" />
                            {{ formatter.custom(toDate(date), { year: 'numeric' }) }}
                        </div>
                    </template>
                    <template v-else-if="layout === 'year-only'">
                        <div class="flex items-center justify-center gap-1">
                            {{ formatter.custom(toDate(date), { month: 'short' }) }}
                            <ReuseYearTemplate :date="date" />
                        </div>
                    </template>
                    <template v-else>
                        <VCalendarHeading />
                    </template>
                </slot>
            </div>
            <VCalendarNextButton>
                <slot name="calendar-next-icon" />
            </VCalendarNextButton>
        </VCalendarHeader>

        <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
            <VCalendarGrid
                v-for="month in grid"
                :key="month.value.toString()"
            >
                <VCalendarGridHead>
                    <VCalendarGridRow>
                        <VCalendarHeadCell
                            v-for="day in weekDays"
                            :key="day"
                        >
                            {{ day }}
                        </VCalendarHeadCell>
                    </VCalendarGridRow>
                </VCalendarGridHead>
                <VCalendarGridBody>
                    <VCalendarGridRow
                        v-for="(weekDates, index) in month.rows"
                        :key="`weekDate-${index}`"
                        class="mt-2 w-full"
                    >
                        <VCalendarCell
                            v-for="weekDate in weekDates"
                            :key="weekDate.toString()"
                            :date="weekDate"
                        >
                            <VCalendarCellTrigger
                                :day="weekDate"
                                :month="month.value"
                            />
                        </VCalendarCell>
                    </VCalendarGridRow>
                </VCalendarGridBody>
            </VCalendarGrid>
        </div>
    </CalendarRoot>
</template>
