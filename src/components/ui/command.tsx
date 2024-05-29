'use client';

import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import * as React from 'react';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'aurora-flex aurora-h-full aurora-w-full aurora-flex-col aurora-overflow-hidden aurora-rounded-md aurora-bg-popover aurora-text-popover-foreground',
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="aurora-overflow-hidden !aurora-p-0 aurora-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:aurora-px-2 [&_[cmdk-group-heading]]:aurora-font-medium [&_[cmdk-group-heading]]:aurora-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:aurora-pt-0 [&_[cmdk-group]]:aurora-px-2 [&_[cmdk-input-wrapper]_svg]:aurora-h-5 [&_[cmdk-input-wrapper]_svg]:aurora-w-5 [&_[cmdk-input]]:aurora-h-12 [&_[cmdk-item]]:aurora-px-2 [&_[cmdk-item]]:aurora-py-3 [&_[cmdk-item]_svg]:aurora-h-5 [&_[cmdk-item]_svg]:aurora-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="aurora-flex aurora-items-center aurora-border-b aurora-px-3"
    cmdk-input-wrapper=""
  >
    <Search className="aurora-mr-2 aurora-h-4 aurora-w-4 aurora-shrink-0 aurora-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'aurora-flex aurora-h-11 aurora-w-full aurora-rounded-md aurora-bg-transparent aurora-py-3 aurora-text-sm aurora-outline-none placeholder:aurora-text-muted-foreground disabled:aurora-cursor-not-allowed disabled:aurora-opacity-50',
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      'aurora-max-h-[300px] aurora-overflow-y-auto aurora-overflow-x-hidden',
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="aurora-py-6 aurora-text-center aurora-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'aurora-overflow-hidden aurora-p-1 aurora-text-foreground [&_[cmdk-group-heading]]:aurora-px-2 [&_[cmdk-group-heading]]:aurora-py-1.5 [&_[cmdk-group-heading]]:aurora-text-xs [&_[cmdk-group-heading]]:aurora-font-medium [&_[cmdk-group-heading]]:aurora-text-muted-foreground',
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('aurora--mx-1 aurora-h-px aurora-bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'aurora-relative aurora-flex aurora-cursor-default aurora-select-none aurora-items-center aurora-rounded-sm aurora-px-2 aurora-py-1.5 aurora-text-sm aurora-outline-none aria-selected:aurora-bg-accent aria-selected:aurora-text-accent-foreground data-[disabled]:aurora-pointer-events-none data-[disabled]:aurora-opacity-50',
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'aurora-ml-auto aurora-text-xs aurora-tracking-widest aurora-text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
