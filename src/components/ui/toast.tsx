'use client';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'aurora-fixed aurora-top-0 aurora-z-[100] aurora-flex aurora-max-h-screen aurora-w-full aurora-flex-col-reverse aurora-p-4 sm:aurora-bottom-0 sm:aurora-right-0 sm:aurora-top-auto sm:aurora-flex-col md:aurora-max-w-[420px]',
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'aurora-group aurora-pointer-events-auto aurora-relative aurora-flex aurora-w-full aurora-items-center aurora-justify-between aurora-space-x-4 aurora-overflow-hidden aurora-rounded-md aurora-border aurora-p-6 aurora-pr-8 aurora-shadow-lg aurora-transition-all data-[swipe=cancel]:aurora-translate-x-0 data-[swipe=end]:aurora-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:aurora-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:aurora-transition-none data-[state=open]:aurora-animate-in data-[state=closed]:aurora-animate-out data-[swipe=end]:aurora-animate-out data-[state=closed]:aurora-fade-out-80 data-[state=closed]:aurora-slide-out-to-right-full data-[state=open]:aurora-slide-in-from-top-full data-[state=open]:sm:aurora-slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'aurora-border aurora-bg-background aurora-text-foreground',
        destructive:
          'aurora-destructive aurora-group aurora-border-destructive aurora-bg-destructive aurora-text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'aurora-inline-flex aurora-h-8 aurora-shrink-0 aurora-items-center aurora-justify-center aurora-rounded-md aurora-border aurora-bg-transparent aurora-px-3 aurora-text-sm aurora-font-medium aurora-ring-offset-background aurora-transition-colors hover:aurora-bg-secondary focus:aurora-outline-none focus:aurora-ring-2 focus:aurora-ring-ring focus:aurora-ring-offset-2 disabled:aurora-pointer-events-none disabled:aurora-opacity-50 group-[.destructive]:aurora-border-muted/40 group-[.destructive]:hover:aurora-border-destructive/30 group-[.destructive]:hover:aurora-bg-destructive group-[.destructive]:hover:aurora-text-destructive-foreground group-[.destructive]:focus:aurora-ring-destructive',
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'aurora-absolute aurora-right-2 aurora-top-2 aurora-rounded-md aurora-p-1 aurora-text-foreground/50 aurora-opacity-0 aurora-transition-opacity hover:aurora-text-foreground focus:aurora-opacity-100 focus:aurora-outline-none focus:aurora-ring-2 group-hover:aurora-opacity-100 group-[.destructive]:aurora-text-red-300 group-[.destructive]:hover:aurora-text-red-50 group-[.destructive]:focus:aurora-ring-red-400 group-[.destructive]:focus:aurora-ring-offset-red-600',
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="aurora-h-4 aurora-w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('aurora-text-sm aurora-font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('aurora-text-sm aurora-opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
