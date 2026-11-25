import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50', {
  variants: {
    variant: { default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90', outline: 'border border-input bg-transparent hover:bg-muted', ghost: 'hover:bg-muted', secondary: 'bg-foreground text-background hover:bg-foreground/90', link: 'text-primary underline-offset-4 hover:underline' },
    size: { default: 'h-11 px-5 py-2.5', sm: 'h-9 rounded-md px-3 text-xs', lg: 'h-13 rounded-md px-7 text-base', icon: 'h-10 w-10' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
));
Button.displayName = 'Button';
export { buttonVariants };
