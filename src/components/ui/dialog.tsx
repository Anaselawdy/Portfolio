'use client';

import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Dialog = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;
export const DialogPortal = BaseDialog.Portal;
export const DialogClose = BaseDialog.Close;

export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseDialog.Backdrop
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-all duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0',
      className
    )}
    {...props}
  />
));
DialogBackdrop.displayName = 'DialogBackdrop';

export interface DialogPopupProps
  extends React.ComponentProps<typeof BaseDialog.Popup> {
  showCloseButton?: boolean;
}

export const DialogPopup = React.forwardRef<HTMLDivElement, DialogPopupProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => (
    <DialogPortal>
      <DialogBackdrop />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 pointer-events-none">
        <BaseDialog.Popup
          ref={ref}
          className={cn(
            'pointer-events-auto relative w-full max-w-5xl h-full sm:h-[92vh] bg-[#0c0d14] border border-zinc-800 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100 transition-all duration-200 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
            className
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogClose
              className="absolute right-4 top-4 rounded-xl p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="size-4" />
            </DialogClose>
          )}
        </BaseDialog.Popup>
      </div>
    </DialogPortal>
  )
);
DialogPopup.displayName = 'DialogPopup';

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'p-4 sm:p-6 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between shrink-0',
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'p-4 sm:p-6 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-4 shrink-0',
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
  <BaseDialog.Title
    ref={ref}
    className={cn('text-lg sm:text-2xl font-bold tracking-tight text-white', className)}
    {...props}
  />
));
DialogTitle.displayName = 'DialogTitle';

export const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof BaseDialog.Description>
>(({ className, ...props }, ref) => (
  <BaseDialog.Description
    ref={ref}
    className={cn('text-sm sm:text-base text-zinc-300 leading-relaxed', className)}
    {...props}
  />
));
DialogDescription.displayName = 'DialogDescription';

export const DialogPanel = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex-1 overflow-y-auto p-6 sm:p-8 space-y-8', className)}
    {...props}
  />
);
DialogPanel.displayName = 'DialogPanel';
