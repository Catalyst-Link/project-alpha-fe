<script lang="ts" setup>
import type { CalendarPrevProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { CalendarPrev, useForwardProps } from 'reka-ui';
import { buttonVariants } from '../VButton';

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes['class'] }>();
const delegatedProps = reactiveOmit(props, 'class');
const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <CalendarPrev
        data-slot="calendar-prev-button"
        :class="cn(
            buttonVariants({ variant: 'outline' }),
            'size-7 bg-transparent py-6 opacity-50 hover:opacity-100',
            props.class,
        )"
        v-bind="forwardedProps"
    >
        <slot>
            <IconLucideChevronLeft class="size-4" />
        </slot>
    </CalendarPrev>
</template>
