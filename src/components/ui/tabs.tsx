'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'aurora-inline-flex aurora-h-10 aurora-items-center aurora-justify-center aurora-rounded-md aurora-bg-muted aurora-p-1 aurora-text-muted-foreground',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'aurora-inline-flex aurora-items-center aurora-justify-center aurora-whitespace-nowrap aurora-rounded-sm aurora-px-3 aurora-py-1.5 aurora-text-sm aurora-font-medium aurora-ring-offset-background aurora-transition-all focus-visible:aurora-outline-none focus-visible:aurora-ring-2 focus-visible:aurora-ring-ring focus-visible:aurora-ring-offset-2 disabled:aurora-pointer-events-none disabled:aurora-opacity-50 data-[state=active]:aurora-bg-background data-[state=active]:aurora-text-foreground data-[state=active]:aurora-shadow-sm',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'aurora-mt-2 aurora-ring-offset-background focus-visible:aurora-outline-none focus-visible:aurora-ring-2 focus-visible:aurora-ring-ring focus-visible:aurora-ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
