import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

export default function CategoryList() {
  return (
    <div className="aurora-py-4">
      <div className="aurora-flex aurora-items-center aurora-justify-between aurora-border-b aurora-py-2">
        <h1 className="aurora-font-bold aurora-text-lg aurora-text-gray-500 aurora-uppercase">
          Kategori
        </h1>
      </div>

      <div className="aurora-mt-4">
        <div className="aurora-grid aurora-grid-cols-10 aurora-gap-1">
          {[...Array(20)].map((_, index) => (
            <Link
              href={'/'}
              key={index}
              className="aurora-pt-6 aurora-pb-2 aurora-border aurora-rounded-lg aurora-flex aurora-items-center aurora-justify-center aurora-flex-col aurora-gap-4 hover:aurora-border-transparent hover:aurora-shadow-lg aurora-transition-all aurora-duration-300 aurora-ease-in-out"
            >
              <Skeleton className="aurora-w-14 aurora-h-14 !aurora-rounded-full !aurora-bg-gray-400" />

              <div>
                <Skeleton className="aurora-h-3 aurora-w-[70px] !aurora-bg-gray-400" />
                <Skeleton className="aurora-h-3 aurora-w-[70px] !aurora-bg-gray-400 aurora-mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
