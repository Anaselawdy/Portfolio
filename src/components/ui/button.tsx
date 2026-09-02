'use client';

import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-white text-zinc-950 hover:bg-zinc-100 font-bold',
        secondary: 'bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-zinc-800',
        outline: 'border border-zinc-800 bg-transparent text-zinc-100 hover:bg-zinc-900',
        ghost: 'text-zinc-300 hover:text-white hover:bg-zinc-800/80',
        link: 'text-emerald-400 underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-8 px-3 rounded-lg text-xs gap-1.5',
        md: 'h-10 px-4 rounded-xl text-xs sm:text-sm gap-2',
        lg: 'h-12 px-6 rounded-xl text-sm sm:text-base gap-2.5',
        icon: 'size-9 rounded-xl p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<typeof BaseButton>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
