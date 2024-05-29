import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default function BestSellingProducts() {
  return (
    <div className="aurora-py-4">
      <div className="aurora-flex aurora-items-center aurora-justify-between aurora-border-b aurora-py-2">
        <h1 className="aurora-font-bold aurora-text-lg aurora-text-gray-500 aurora-uppercase">
          Produk Terlaris
        </h1>

        <Link href="/">
          <Button variant={'ghost'} className="aurora-gap-x-1 !aurora-h-auto">
            Lihat Semua <FaChevronRight />
          </Button>
        </Link>
      </div>

      <div className="aurora-mt-4">
        <div className="aurora-grid aurora-grid-cols-5 aurora-gap-x-2">
          {[...Array(5)].map((_, index) => (
            <Link
              href={'/'}
              key={index}
              className="aurora-border aurora-rounded-lg aurora-overflow-hidden hover:aurora-border-transparent hover:aurora-shadow-lg aurora-transition-all aurora-ease-in-out aurora-duration-300 aurora-p-2"
            >
              <Skeleton className="aurora-w-full aurora-h-[150px] !aurora-rounded-lg !aurora-bg-gray-400" />

              <h1 className="aurora-font-semibold aurora-mt-2 aurora-text-gray-500">
                Nama Produk
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
