'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'aurora-fixed aurora-inset-0 aurora-z-50 aurora-bg-black/80 aurora- data-[state=open]:aurora-animate-in data-[state=closed]:aurora-animate-out data-[state=closed]:aurora-fade-out-0 data-[state=open]:aurora-fade-in-0',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'aurora-fixed aurora-left-[50%] aurora-top-[50%] aurora-z-50 aurora-grid aurora-w-full aurora-max-w-lg aurora-translate-x-[-50%] aurora-translate-y-[-50%] aurora-gap-4 aurora-border aurora-bg-background aurora-p-6 aurora-shadow-lg aurora-duration-200 data-[state=open]:aurora-animate-in data-[state=closed]:aurora-animate-out data-[state=closed]:aurora-fade-out-0 data-[state=open]:aurora-fade-in-0 data-[state=closed]:aurora-zoom-out-95 data-[state=open]:aurora-zoom-in-95 data-[state=closed]:aurora-slide-out-to-left-1/2 data-[state=closed]:aurora-slide-out-to-top-[48%] data-[state=open]:aurora-slide-in-from-left-1/2 data-[state=open]:aurora-slide-in-from-top-[48%] sm:aurora-rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="aurora-absolute aurora-right-4 aurora-top-4 aurora-rounded-sm aurora-opacity-70 aurora-ring-offset-background aurora-transition-opacity hover:aurora-opacity-100 focus:aurora-outline-none focus:aurora-ring-2 focus:aurora-ring-ring focus:aurora-ring-offset-2 disabled:aurora-pointer-events-none data-[state=open]:aurora-bg-accent data-[state=open]:aurora-text-muted-foreground">
        <X className="aurora-h-4 aurora-w-4" />
        <span className="aurora-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'aurora-flex aurora-flex-col aurora-space-y-1.5 aurora-text-center sm:aurora-text-left',
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'aurora-flex aurora-flex-col-reverse sm:aurora-flex-row sm:aurora-justify-end sm:aurora-space-x-2',
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'aurora-text-lg aurora-font-semibold aurora-leading-none aurora-tracking-tight',
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('aurora-text-sm aurora-text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
