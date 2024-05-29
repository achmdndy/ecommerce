import { Skeleton } from '@/components/ui/skeleton';

export default function StorePromotion() {
  return (
    <div className="aurora-py-4">
      <div className="aurora-grid aurora-grid-cols-2 aurora-gap-x-2">
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            <Skeleton className="aurora-h-[150px] aurora-w-full !aurora-bg-gray-400 !aurora-rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
