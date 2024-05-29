'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'aurora-peer aurora-h-4 aurora-w-4 aurora-shrink-0 aurora-rounded-sm aurora-border aurora-border-primary aurora-ring-offset-background focus-visible:aurora-outline-none focus-visible:aurora-ring-2 focus-visible:aurora-ring-ring focus-visible:aurora-ring-offset-2 disabled:aurora-cursor-not-allowed disabled:aurora-opacity-50 data-[state=checked]:aurora-bg-primary data-[state=checked]:aurora-text-primary-foreground',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        'aurora-flex aurora-items-center aurora-justify-center aurora-text-current',
      )}
    >
      <Check className="aurora-h-4 aurora-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
