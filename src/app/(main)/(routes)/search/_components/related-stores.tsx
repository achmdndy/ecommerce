import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { FaChevronRight, FaStar } from 'react-icons/fa';

export default function RelateStores() {
  return (
    <div>
      <div className="aurora-flex aurora-items-center aurora-justify-between">
        <h1 className="aurora-text-lg aurora-text-gray-500 aurora-font-bold aurora-uppercase aurora-line-clamp-1">
          Toko Yang Berkaitan Dengan &quot;
          <span className="aurora-text-gray-900">Keyword</span>
          &quot;
        </h1>

        <Link href={'/'}>
          <Button variant="link" className="aurora-h-auto aurora-gap-x-1">
            Toko Lainnya <FaChevronRight />
          </Button>
        </Link>
      </div>
      <div className="aurora-border aurora-rounded-lg aurora-p-2 aurora-grid aurora-grid-cols-[30%_70%]">
        <Link
          href={'/'}
          className="aurora-border-r aurora-flex aurora-items-center aurora-justify-center aurora-flex-col aurora-py-4 aurora-px-6"
        >
          <Skeleton className="aurora-w-14 aurora-h-14 !aurora-bg-gray-400 !aurora-rounded-full" />
          <h1 className="aurora-text-sm aurora-font-semibold aurora-line-clamp-2 aurora-text-center aurora-mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            perferendis neque ipsa.
          </h1>
          <div className="aurora-flex aurora-items-center aurora-gap-x-2 aurora-mt-2">
            <div className="aurora-flex aurora-items-center aurora-gap-x-1 aurora-text-xs">
              <FaStar />
              <span className="aurora-font-medium">4.9</span>
            </div>
            <Separator orientation="vertical" />
            <span className="aurora-text-xs aurora-text-gray-500 aurora-font-medium">
              100 Pengikut
            </span>
          </div>
          <Button variant="outline" size="sm" className="aurora-mt-2">
            Kunjungi Toko
          </Button>
        </Link>
        <div className="aurora-grid aurora-grid-cols-4 aurora-px-2 aurora-gap-x-2">
          {[...Array(4)].map((_, index) => (
            <Link
              href={'/'}
              key={index}
              className="aurora-border aurora-rounded-lg aurora-overflow-hidden hover:aurora-border-transparent hover:aurora-shadow-lg aurora-transition-all aurora-ease-in-out aurora-duration-300"
            >
              <Skeleton className="aurora-w-full aurora-h-[140px] !aurora-rounded-none !aurora-bg-gray-400" />
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
        </div>
      </div>
    </div>
  );
}
