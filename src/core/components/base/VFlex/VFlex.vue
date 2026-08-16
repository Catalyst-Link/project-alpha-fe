<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { computed } from 'vue';

type FlexType = '1' | 'auto' | 'initial' | 'none';
type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';
type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type FlexItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

const props = defineProps<Props>();

const FLEX_TYPE: Record<FlexType, string> = {
    1: 'flex-1',
    auto: 'flex-auto',
    initial: 'flex-initial',
    none: 'flex-none',
};

const FLEX_WRAP: Record<FlexWrap, string> = {
    'wrap': 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse',
    'nowrap': 'flex-nowrap',
};

const FLEX_DIRECTION: Record<FlexDirection, string> = {
    'row': 'flex-row',
    'row-reverse': 'flex-row-reverse',
    'col': 'flex-col',
    'col-reverse': 'flex-col-reverse',
};

const FLEX_JUSTIFY: Record<FlexJustify, string> = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
};

const FLEX_ITEMS: Record<FlexItems, string> = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
};

const GAP: Record<Gap, string> = {
    0: 'gap-0',
    0.5: 'gap-0.5',
    1: 'gap-1',
    1.5: 'gap-1.5',
    2: 'gap-2',
    2.5: 'gap-2.5',
    3: 'gap-3',
    3.5: 'gap-3.5',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    7: 'gap-7',
    8: 'gap-8',
    9: 'gap-9',
    10: 'gap-10',
    11: 'gap-11',
    12: 'gap-12',
    14: 'gap-14',
    16: 'gap-16',
    20: 'gap-20',
    24: 'gap-24',
    28: 'gap-28',
    32: 'gap-32',
    36: 'gap-36',
    40: 'gap-40',
    44: 'gap-44',
    48: 'gap-48',
    52: 'gap-52',
    56: 'gap-56',
    60: 'gap-60',
    64: 'gap-64',
    72: 'gap-72',
    80: 'gap-80',
    96: 'gap-96',
    px: 'gap-px',
};
type Gap = '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | 'px';

const GAP_X: Record<Gap, string> = {
    0: 'gap-x-0',
    0.5: 'gap-x-0.5',
    1: 'gap-x-1',
    1.5: 'gap-x-1.5',
    2: 'gap-x-2',
    2.5: 'gap-x-2.5',
    3: 'gap-x-3',
    3.5: 'gap-x-3.5',
    4: 'gap-x-4',
    5: 'gap-x-5',
    6: 'gap-x-6',
    7: 'gap-x-7',
    8: 'gap-x-8',
    9: 'gap-x-9',
    10: 'gap-x-10',
    11: 'gap-x-11',
    12: 'gap-x-12',
    14: 'gap-x-14',
    16: 'gap-x-16',
    20: 'gap-x-20',
    24: 'gap-x-24',
    28: 'gap-x-28',
    32: 'gap-x-32',
    36: 'gap-x-36',
    40: 'gap-x-40',
    44: 'gap-x-44',
    48: 'gap-x-48',
    52: 'gap-x-52',
    56: 'gap-x-56',
    60: 'gap-x-60',
    64: 'gap-x-64',
    72: 'gap-x-72',
    80: 'gap-x-80',
    96: 'gap-x-96',
    px: 'gap-x-px',
};

const GAP_Y: Record<Gap, string> = {
    0: 'gap-y-0',
    0.5: 'gap-y-0.5',
    1: 'gap-y-1',
    1.5: 'gap-y-1.5',
    2: 'gap-y-2',
    2.5: 'gap-y-2.5',
    3: 'gap-y-3',
    3.5: 'gap-y-3.5',
    4: 'gap-y-4',
    5: 'gap-y-5',
    6: 'gap-y-6',
    7: 'gap-y-7',
    8: 'gap-y-8',
    9: 'gap-y-9',
    10: 'gap-y-10',
    11: 'gap-y-11',
    12: 'gap-y-12',
    14: 'gap-y-14',
    16: 'gap-y-16',
    20: 'gap-y-20',
    24: 'gap-y-24',
    28: 'gap-y-28',
    32: 'gap-y-32',
    36: 'gap-y-36',
    40: 'gap-y-40',
    44: 'gap-y-44',
    48: 'gap-y-48',
    52: 'gap-y-52',
    56: 'gap-y-56',
    60: 'gap-y-60',
    64: 'gap-y-64',
    72: 'gap-y-72',
    80: 'gap-y-80',
    96: 'gap-y-96',
    px: 'gap-y-px',
};

const SPACE_X: Record<Gap, string> = {
    0: 'space-x-0',
    0.5: 'space-x-0.5',
    1: 'space-x-1',
    1.5: 'space-x-1.5',
    2: 'space-x-2',
    2.5: 'space-x-2.5',
    3: 'space-x-3',
    3.5: 'space-x-3.5',
    4: 'space-x-4',
    5: 'space-x-5',
    6: 'space-x-6',
    7: 'space-x-7',
    8: 'space-x-8',
    9: 'space-x-9',
    10: 'space-x-10',
    11: 'space-x-11',
    12: 'space-x-12',
    14: 'space-x-14',
    16: 'space-x-16',
    20: 'space-x-20',
    24: 'space-x-24',
    28: 'space-x-28',
    32: 'space-x-32',
    36: 'space-x-36',
    40: 'space-x-40',
    44: 'space-x-44',
    48: 'space-x-48',
    52: 'space-x-52',
    56: 'space-x-56',
    60: 'space-x-60',
    64: 'space-x-64',
    72: 'space-x-72',
    80: 'space-x-80',
    96: 'space-x-96',
    px: 'space-x-px',
};

const SPACE_Y: Record<Gap, string> = {
    0: 'space-y-0',
    0.5: 'space-y-0.5',
    1: 'space-y-1',
    1.5: 'space-y-1.5',
    2: 'space-y-2',
    2.5: 'space-y-2.5',
    3: 'space-y-3',
    3.5: 'space-y-3.5',
    4: 'space-y-4',
    5: 'space-y-5',
    6: 'space-y-6',
    7: 'space-y-7',
    8: 'space-y-8',
    9: 'space-y-9',
    10: 'space-y-10',
    11: 'space-y-11',
    12: 'space-y-12',
    14: 'space-y-14',
    16: 'space-y-16',
    20: 'space-y-20',
    24: 'space-y-24',
    28: 'space-y-28',
    32: 'space-y-32',
    36: 'space-y-36',
    40: 'space-y-40',
    44: 'space-y-44',
    48: 'space-y-48',
    52: 'space-y-52',
    56: 'space-y-56',
    60: 'space-y-60',
    64: 'space-y-64',
    72: 'space-y-72',
    80: 'space-y-80',
    96: 'space-y-96',
    px: 'space-y-px',
};

type Props = {
    class?: HTMLAttributes['class'];
    type?: FlexType;
    wrap?: FlexWrap;
    direction?: FlexDirection;
    justify?: FlexJustify;
    items?: FlexItems;
    gap?: Gap;
    gapX?: Gap;
    gapY?: Gap;
    spaceX?: Gap;
    spaceY?: Gap;
};

const classes = computed(() =>
    cn(
        'flex',
        props.type && FLEX_TYPE[props.type],
        props.wrap && FLEX_WRAP[props.wrap],
        props.direction && FLEX_DIRECTION[props.direction],
        props.justify && FLEX_JUSTIFY[props.justify],
        props.items && FLEX_ITEMS[props.items],
        props.gap && GAP[props.gap],
        props.gapX && GAP_X[props.gapX],
        props.gapY && GAP_Y[props.gapY],
        props.spaceX && SPACE_X[props.spaceX],
        props.spaceY && SPACE_Y[props.spaceY],
        props.class,
    ),
);
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
