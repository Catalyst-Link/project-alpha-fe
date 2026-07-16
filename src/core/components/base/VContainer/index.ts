import type { HTMLAttributes } from 'vue';

export type Props = {
    as?: 'div' | 'section';
    class?: HTMLAttributes['class'];
};

export const containerVariant = cva(
    'max-w-7xl mx-auto px-8 lg:px-12 py-7',
);
