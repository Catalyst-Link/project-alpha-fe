<script setup lang="ts" generic="Type extends 'cols' | 'rows'">
import type { HTMLAttributes } from 'vue';
import { computed } from 'vue';

type GridCols = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'none';
type GridRows = '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'none';
type Grid = Type extends 'rows' ? GridRows : GridCols;
type Bp = 'base' | 'sm' | 'md' | 'lg' | 'xl';

const { type = 'cols', ...props } = defineProps<Props>();

const COLS: Record<Bp, Record<GridCols, string>> = {
    base: {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
        10: 'grid-cols-10',
        11: 'grid-cols-11',
        12: 'grid-cols-12',
        none: 'grid-cols-none',
    },
    sm: {
        1: 'sm:grid-cols-1',
        2: 'sm:grid-cols-2',
        3: 'sm:grid-cols-3',
        4: 'sm:grid-cols-4',
        5: 'sm:grid-cols-5',
        6: 'sm:grid-cols-6',
        7: 'sm:grid-cols-7',
        8: 'sm:grid-cols-8',
        9: 'sm:grid-cols-9',
        10: 'sm:grid-cols-10',
        11: 'sm:grid-cols-11',
        12: 'sm:grid-cols-12',
        none: 'sm:grid-cols-none',
    },
    md: {
        1: 'md:grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-4',
        5: 'md:grid-cols-5',
        6: 'md:grid-cols-6',
        7: 'md:grid-cols-7',
        8: 'md:grid-cols-8',
        9: 'md:grid-cols-9',
        10: 'md:grid-cols-10',
        11: 'md:grid-cols-11',
        12: 'md:grid-cols-12',
        none: 'md:grid-cols-none',
    },
    lg: {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
        5: 'lg:grid-cols-5',
        6: 'lg:grid-cols-6',
        7: 'lg:grid-cols-7',
        8: 'lg:grid-cols-8',
        9: 'lg:grid-cols-9',
        10: 'lg:grid-cols-10',
        11: 'lg:grid-cols-11',
        12: 'lg:grid-cols-12',
        none: 'lg:grid-cols-none',
    },
    xl: {
        1: 'xl:grid-cols-1',
        2: 'xl:grid-cols-2',
        3: 'xl:grid-cols-3',
        4: 'xl:grid-cols-4',
        5: 'xl:grid-cols-5',
        6: 'xl:grid-cols-6',
        7: 'xl:grid-cols-7',
        8: 'xl:grid-cols-8',
        9: 'xl:grid-cols-9',
        10: 'xl:grid-cols-10',
        11: 'xl:grid-cols-11',
        12: 'xl:grid-cols-12',
        none: 'xl:grid-cols-none',
    },
};

const ROWS: Record<Bp, Record<GridRows, string>> = {
    base: {
        1: 'grid-rows-1',
        2: 'grid-rows-2',
        3: 'grid-rows-3',
        4: 'grid-rows-4',
        5: 'grid-rows-5',
        6: 'grid-rows-6',
        7: 'grid-rows-7',
        none: 'grid-rows-none',
    },
    sm: {
        1: 'sm:grid-rows-1',
        2: 'sm:grid-rows-2',
        3: 'sm:grid-rows-3',
        4: 'sm:grid-rows-4',
        5: 'sm:grid-rows-5',
        6: 'sm:grid-rows-6',
        7: 'sm:grid-rows-7',
        none: 'sm:grid-rows-none',
    },
    md: {
        1: 'md:grid-rows-1',
        2: 'md:grid-rows-2',
        3: 'md:grid-rows-3',
        4: 'md:grid-rows-4',
        5: 'md:grid-rows-5',
        6: 'md:grid-rows-6',
        7: 'md:grid-rows-7',
        none: 'md:grid-rows-none',
    },
    lg: {
        1: 'lg:grid-rows-1',
        2: 'lg:grid-rows-2',
        3: 'lg:grid-rows-3',
        4: 'lg:grid-rows-4',
        5: 'lg:grid-rows-5',
        6: 'lg:grid-rows-6',
        7: 'lg:grid-rows-7',
        none: 'lg:grid-rows-none',
    },
    xl: {
        1: 'xl:grid-rows-1',
        2: 'xl:grid-rows-2',
        3: 'xl:grid-rows-3',
        4: 'xl:grid-rows-4',
        5: 'xl:grid-rows-5',
        6: 'xl:grid-rows-6',
        7: 'xl:grid-rows-7',
        none: 'xl:grid-rows-none',
    },
};

type Gap = '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | 'px';

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

type Props = {
    class?: HTMLAttributes['class'];
    grid?: Grid;
    sm?: Grid;
    md?: Grid;
    lg?: Grid;
    xl?: Grid;
    type?: Type;
    gap?: Gap;
    gapX?: Gap;
    gapY?: Gap;
};

const pick = (bp: Bp, value?: Grid) =>
    value ? (type === 'cols' ? COLS[bp][value as GridCols] : ROWS[bp][value as GridRows]) : '';

const classes = computed(() =>
    cn(
        'grid',
        type === 'rows' && 'grid-flow-col',
        pick('base', props.grid),
        pick('sm', props.sm),
        pick('md', props.md),
        pick('lg', props.lg),
        pick('xl', props.xl),
        props.gap && GAP[props.gap],
        props.gapX && GAP_X[props.gapX],
        props.gapY && GAP_Y[props.gapY],
        props.class,
    ),
);
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
