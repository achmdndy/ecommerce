import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'aurora-animate-pulse aurora-rounded-md aurora-bg-muted',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
