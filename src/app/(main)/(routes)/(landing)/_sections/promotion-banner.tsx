'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function PromotionBanner() {
  return (
    <div className="aurora-grid aurora-grid-cols-[65%_35%] aurora-grid-rows-2 aurora-gap-1">
      <div className="aurora-row-span-2">
        <Skeleton className="aurora-w-full aurora-h-[200px] !aurora-bg-gray-400 !aurora-rounded-lg" />
      </div>

      <div>
        <Skeleton className="aurora-w-full aurora-h-full !aurora-bg-gray-400 !aurora-rounded-lg" />
      </div>
      <div>
        <Skeleton className="aurora-w-full aurora-h-full !aurora-bg-gray-400 !aurora-rounded-lg" />
      </div>
    </div>
  );
}
