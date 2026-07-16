import type { VariantProps } from 'class-variance-authority';

export const textVariants = cva('', {
    variants: {
        variant: {
            h1: 'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
            h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
            h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
            h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
            p: 'leading-7 not-first:mt-6',
            blockqoute: 'mt-6 border-l-2 pl-6 italic',
            td: 'border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right',
            li: 'ul',
            code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
            modal: 'text-xl text-muted-foreground',
            large: 'text-lg font-semibold',
            small: 'text-sm font-medium leading-none',
            muted: 'text-sm text-muted-foreground',
        },
        color: {
            'default': 'text-foreground',
            'muted': 'text-muted-foreground',
            'accent': 'text-accent-foreground',
            'destructive': 'text-destructive',
            'primary': 'text-primary',
            'primary-foreground': 'text-primary-foreground',
            'secondary': 'text-secondary',
            'secondary-foreground': 'text-secondary-foreground',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
            justify: 'text-justify',
        },
        transform: {
            none: '',
            uppercase: 'uppercase',
            lowercase: 'lowercase',
            capitalize: 'capitalize',
        },
    },
    defaultVariants: {
        variant: 'p',
        color: 'default',
        align: 'left',
        transform: 'none',
    },
});

export type TextVariants = VariantProps<typeof textVariants>;
export type Props = {
    as?: keyof HTMLElementTagNameMap;
    class?: string;
    variant?: TextVariants['variant'];
    color?: TextVariants['color'];
    align?: TextVariants['align'];
    transform?: TextVariants['transform'];
};
