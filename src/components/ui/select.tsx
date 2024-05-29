'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'aurora-flex aurora-h-10 aurora-w-full aurora-items-center aurora-justify-between aurora-rounded-md aurora-border aurora-border-input aurora-bg-background aurora-px-3 aurora-py-2 aurora-text-sm aurora-ring-offset-background placeholder:aurora-text-muted-foreground focus:aurora-outline-none focus:aurora-ring-2 focus:aurora-ring-ring focus:aurora-ring-offset-2 disabled:aurora-cursor-not-allowed disabled:aurora-opacity-50 [&>span]:aurora-line-clamp-1',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="aurora-h-4 aurora-w-4 aurora-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'aurora-flex aurora-cursor-default aurora-items-center aurora-justify-center aurora-py-1',
      className,
    )}
    {...props}
  >
    <ChevronUp className="aurora-h-4 aurora-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'aurora-flex aurora-cursor-default aurora-items-center aurora-justify-center aurora-py-1',
      className,
    )}
    {...props}
  >
    <ChevronDown className="aurora-h-4 aurora-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'aurora-relative aurora-z-50 aurora-max-h-96 aurora-min-w-[8rem] aurora-overflow-hidden aurora-rounded-md aurora-border aurora-bg-popover aurora-text-popover-foreground aurora-shadow-md data-[state=open]:aurora-animate-in data-[state=closed]:aurora-animate-out data-[state=closed]:aurora-fade-out-0 data-[state=open]:aurora-fade-in-0 data-[state=closed]:aurora-zoom-out-95 data-[state=open]:aurora-zoom-in-95 data-[side=bottom]:aurora-slide-in-from-top-2 data-[side=left]:aurora-slide-in-from-right-2 data-[side=right]:aurora-slide-in-from-left-2 data-[side=top]:aurora-slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:aurora-translate-y-1 data-[side=left]:aurora--translate-x-1 data-[side=right]:aurora-translate-x-1 data-[side=top]:aurora--translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'aurora-p-1',
          position === 'popper' &&
            'aurora-h-[var(--radix-select-trigger-height)] aurora-w-full aurora-min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'aurora-py-1.5 aurora-pl-8 aurora-pr-2 aurora-text-sm aurora-font-semibold',
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'aurora-relative aurora-flex aurora-w-full aurora-cursor-default aurora-select-none aurora-items-center aurora-rounded-sm aurora-py-1.5 aurora-pl-8 aurora-pr-2 aurora-text-sm aurora-outline-none focus:aurora-bg-accent focus:aurora-text-accent-foreground data-[disabled]:aurora-pointer-events-none data-[disabled]:aurora-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="aurora-absolute aurora-left-2 aurora-flex aurora-h-3.5 aurora-w-3.5 aurora-items-center aurora-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="aurora-h-4 aurora-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(
      'aurora--mx-1 aurora-my-1 aurora-h-px aurora-bg-muted',
      className,
    )}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
