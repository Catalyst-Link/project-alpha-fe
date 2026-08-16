<script lang="ts" setup>
import type { CalendarNextProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { CalendarNext, useForwardProps } from 'reka-ui';
import { buttonVariants } from '../VButton';

const props = defineProps<CalendarNextProps & { class?: HTMLAttributes['class'] }>();
const delegatedProps = reactiveOmit(props, 'class');
const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <CalendarNext
        data-slot="calendar-next-button"
        :class="cn(
            buttonVariants({ variant: 'outline' }),
            'size-7 bg-transparent py-6 opacity-50 hover:opacity-100',
            props.class,
        )"
        v-bind="forwardedProps"
    >
        <slot>
            <IconLucideChevronRight class="size-4" />
        </slot>
    </CalendarNext>
</template>
