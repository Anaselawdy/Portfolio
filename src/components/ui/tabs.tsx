'use client';

import * as React from 'react';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const Tabs = BaseTabs.Root;

export const tabsListVariants = cva(
  'inline-flex items-center gap-1 rounded-xl bg-zinc-900 border border-zinc-800 p-1 text-zinc-300',
  {
    variants: {
      size: {
        sm: 'h-9 text-xs',
        md: 'h-11 text-xs sm:text-sm',
        lg: 'h-12 text-sm',
      },
      variant: {
        default: 'bg-zinc-900 border-zinc-800',
        line: 'bg-transparent border-0 border-b border-zinc-800 rounded-none p-0 gap-4 sm:gap-6',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export interface TabsListProps
  extends React.ComponentProps<typeof BaseTabs.List>,
    VariantProps<typeof tabsListVariants> {}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, size, variant, ...props }, ref) => (
    <BaseTabs.List
      ref={ref}
      className={cn(tabsListVariants({ size, variant, className }))}
      {...props}
    />
  )
);
TabsList.displayName = 'TabsList';

export const tabsTabVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'rounded-lg data-[selected]:bg-zinc-800 data-[selected]:text-white data-[selected]:shadow-sm text-zinc-400 hover:text-zinc-200',
        line: 'rounded-none border-b-2 border-transparent px-2 py-3 text-zinc-400 data-[selected]:border-emerald-400 data-[selected]:text-white hover:text-zinc-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TabsTabProps
  extends React.ComponentProps<typeof BaseTabs.Tab>,
    VariantProps<typeof tabsTabVariants> {}

export const TabsTab = React.forwardRef<HTMLButtonElement, TabsTabProps>(
  ({ className, variant, ...props }, ref) => (
    <BaseTabs.Tab
      ref={ref}
      className={cn(tabsTabVariants({ variant, className }))}
      {...props}
    />
  )
);
TabsTab.displayName = 'TabsTab';

export const TabsPanel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof BaseTabs.Panel>
>(({ className, ...props }, ref) => (
  <BaseTabs.Panel
    ref={ref}
    className={cn(
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 outline-none',
      className
    )}
    {...props}
  />
));
TabsPanel.displayName = 'TabsPanel';

export const TabsIndicator = BaseTabs.Indicator;
