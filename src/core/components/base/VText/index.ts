import type { VariantProps } from 'class-variance-authority';

export const textVariants = cva('', {
    variants: {
        variant: {
            h1: 'text-[2rem] xl:text-[3.45rem] leading-tight font-dm-sans',
            h2: 'text-[2rem] xl:text-[2.75rem] leading-tight',
            h3: 'text-2xl xl:text-[2.25rem] leading-tight',
            h4: 'text-xl xl:text-3xl leading-tight',
            h5: 'text-lg xl:text-2xl leading-tight font-plus-jakarta-sans',
            body: 'text-sm xl:text-lg font-plus-jakarta-sans font-light',
            subbody: 'text-xs xl:text-sm leading-relaxed font-plus-jakarta-sans',
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
        variant: 'body',
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
