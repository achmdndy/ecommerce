import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import {
  FaBox,
  FaChevronRight,
  FaComment,
  FaStar,
  FaUsers,
} from 'react-icons/fa';

export default function TopStore() {
  return (
    <div className="aurora-py-4">
      <div className="aurora-flex aurora-items-center aurora-justify-between aurora-border-b aurora-py-2">
        <h1 className="aurora-font-bold aurora-text-lg aurora-text-gray-500 aurora-uppercase">
          Toko Teratas
        </h1>

        <Link href="/">
          <Button variant={'ghost'} className="aurora-gap-x-1 !aurora-h-auto">
            Lihat Semua <FaChevronRight />
          </Button>
        </Link>
      </div>

      <div className="aurora-mt-4 aurora-grid aurora-grid-cols-[25%_75%] aurora-gap-x-2">
        <div>
          <Skeleton className="aurora-w-full aurora-h-full !aurora-rounded-lg !aurora-bg-gray-400" />
        </div>
        <div className="aurora-grid aurora-grid-cols-3 aurora-gap-2">
          {[...Array(6)].map((_, index) => (
            <Link
              href={'/'}
              key={index}
              className="aurora-border aurora-rounded-lg aurora-overflow-hidden aurora-h-[200px] hover:aurora-border-transparent hover:aurora-shadow-lg aurora-transition-all aurora-ease-in-out aurora-duration-300"
            >
              <div className="aurora-relative">
                <div className="aurora-relative aurora-w-full aurora-h-[100px] !aurora-rounded-none aurora-bg-gray-200" />
                <Skeleton className="aurora-absolute aurora-left-0 aurora-right-0 aurora-mx-auto aurora-top-[10px] aurora-w-20 aurora-h-20 !aurora-rounded-full !aurora-bg-gray-400" />
                <div className="aurora-px-4 aurora-py-2">
                  <h1 className="aurora-font-semibold">Nama Toko</h1>

                  <div className="aurora-mt-3 aurora-grid aurora-grid-cols-[auto_auto] aurora-gap-2">
                    <div className="aurora-flex aurora-items-center aurora-gap-x-1">
                      <FaBox className="aurora-text-xs" />
                      <span className="aurora-text-xs">Produk: 10K+</span>
                    </div>
                    <div className="aurora-flex aurora-items-center aurora-gap-x-1">
                      <FaComment className="aurora-text-xs" />
                      <span className="aurora-text-xs">
                        Performa Chat: 100%
                      </span>
                    </div>
                    <div className="aurora-flex aurora-items-center aurora-gap-x-1">
                      <FaUsers className="aurora-text-xs" />
                      <span className="aurora-text-xs">Pengikut: 5JT</span>
                    </div>
                    <div className="aurora-flex aurora-items-center aurora-gap-x-1">
                      <FaStar className="aurora-text-xs" />
                      <span className="aurora-text-xs">Penilaian: 4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
