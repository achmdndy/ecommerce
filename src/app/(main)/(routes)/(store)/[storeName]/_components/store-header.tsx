import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { FaShareAlt, FaStar, FaStore } from 'react-icons/fa';

export default function StoreHeader() {
  return (
    <div className="aurora-border aurora-rounded-lg aurora-p-4 aurora-flex aurora-items-center aurora-justify-between">
      <div className="aurora-flex aurora-items-center aurora-gap-x-4">
        <Skeleton className="aurora-w-24 aurora-h-24 !aurora-rounded-full !aurora-bg-gray-400" />
        <div className="aurora-flex aurora-flex-col aurora-gap-1">
          <div className="aurora-flex aurora-items-center aurora-gap-x-2">
            <h1 className="aurora-font-bold aurora-text-lg aurora-line-clamp-1 aurora-max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              eveniet.
            </h1>
          </div>
          <div className="aurora-flex aurora-items-center aurora-gap-x-1">
            <span className="aurora-font-bold aurora-text-green-500">
              &#x2022; Online
            </span>
            <span className="aurora-text-xs aurora-text-gray-500">
              &#x2022;
            </span>
            <span className="aurora-text-sm aurora-text-gray-500">
              Jakarta Barat
            </span>
          </div>
          <div className="aurora-flex aurora-items-center aurora-gap-x-2">
            <Button className="!aurora-w-[150px]">Ikuti</Button>
            <Button variant="outline" className="!aurora-w-[150px]">
              Hubungi Penjual
            </Button>
            <Button variant="outline" size="icon">
              <FaStore />
            </Button>
            <Button variant="outline" size="icon">
              <FaShareAlt />
            </Button>
          </div>
        </div>
      </div>
      <div className="aurora-flex aurora-items-center aurora-gap-x-4">
        <div className="aurora-flex aurora-flex-col aurora-items-center aurora-justify-center">
          <div className="aurora-flex aurora-items-center aurora-gap-x-1">
            <FaStar className="aurora-text-lg aurora-text-yellow-400" />
            <span className="aurora-font-bold">4.9</span>
          </div>
          <span className="aurora-text-xs aurora-text-center aurora-text-gray-500">
            Rating & Ulasan
          </span>
        </div>
        <Separator orientation="vertical" className="!aurora-h-[40px]" />
        <div className="aurora-flex aurora-flex-col aurora-items-center aurora-justify-center">
          <div className="aurora-flex aurora-items-center aurora-gap-x-1">
            <span className="aurora-font-bold">&#177; 1 Jam</span>
          </div>
          <span className="aurora-text-xs aurora-text-center aurora-text-gray-500">
            Pesanan diproses
          </span>
        </div>
        <Separator orientation="vertical" className="!aurora-h-[40px]" />
        <div className="aurora-flex aurora-flex-col aurora-items-center aurora-justify-center">
          <div className="aurora-flex aurora-items-center aurora-gap-x-1">
            <span className="aurora-font-bold">10:30 - 14:00</span>
          </div>
          <span className="aurora-text-xs aurora-text-center aurora-text-gray-500">
            Jam operasi toko
          </span>
        </div>
      </div>
    </div>
  );
}
