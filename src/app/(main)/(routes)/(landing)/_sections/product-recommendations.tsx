import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

export default function ProductRecommendations() {
  return (
    <div className="aurora-py-4">
      <div className="aurora-flex aurora-items-center aurora-justify-between aurora-border-b aurora-py-2">
        <h1 className="aurora-font-bold aurora-text-lg aurora-text-gray-500 aurora-uppercase">
          Rekomendasi
        </h1>
      </div>

      <div className="aurora-mt-4">
        <div className="aurora-grid aurora-grid-cols-6 aurora-gap-2">
          {[...Array(30)].map((_, index) => (
            <Link
              href={'/'}
              key={index}
              className="aurora-border aurora-rounded-lg aurora-overflow-hidden hover:aurora-border-transparent hover:aurora-shadow-lg aurora-transition-all aurora-ease-in-out aurora-duration-300"
            >
              <Skeleton className="aurora-w-full aurora-h-[200px] !aurora-rounded-none !aurora-bg-gray-400" />
              <div className="aurora-h-[100px] aurora-p-2 aurora-flex aurora-flex-col aurora-justify-between">
                <h1 className="aurora-text-sm aurora-line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                </h1>

                <div className="aurora-flex aurora-items-center aurora-justify-between">
                  <span>
                    <span className="aurora-text-xs">Rp</span>18.000
                  </span>
                  <span className="aurora-text-xs aurora-text-gray-500 aurora-font-medium">
                    40 Terjual
                  </span>
                </div>
              </div>
            </Link>
          ))}

          <div className="aurora-col-span-5 aurora-flex aurora-items-center aurora-justify-center aurora-mt-4">
            <Button variant={'outline'}>Lihat Lebih Banyak</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
