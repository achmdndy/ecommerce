import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function SearchResult() {
  return (
    <div className="aurora-mt-4">
      <div className="aurora-flex aurora-items-center aurora-gap-x-2">
        <FaSearch className="aurora-text-gray-500" />
        <h1 className="aurora-text-lg aurora-text-gray-500">
          Hasil pencarian untuk &apos;
          <span className="aurora-text-gray-900">Keyword</span>&apos;
        </h1>
      </div>
      <div className="aurora-mt-2">
        <div className="aurora-border aurora-rounded-lg aurora-p-4 aurora-flex aurora-items-center aurora-justify-between">
          <div className="aurora-flex aurora-items-center aurora-gap-x-2">
            <span className="aurora-text-sm aurora-font-semibold aurora-text-gray-500">
              Urutkan:
            </span>
            <Button variant={'outline'}>Terkait</Button>
            <Button variant={'outline'}>Terbaru</Button>
            <Button variant={'outline'}>Terlaris</Button>
            <Select>
              <SelectTrigger className="!aurora-w-[250px]">
                <SelectValue placeholder="Harga" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hightPrice">
                  Harga: Terendah ke Tertinggi
                </SelectItem>
                <SelectItem value="lowPrice">
                  Harga: Tertinggi ke Terendah
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="aurora-grid aurora-grid-cols-5 aurora-gap-2 aurora-mt-2">
          {[...Array(50)].map((_, index) => (
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

          <div className="aurora-col-span-5 aurora-mt-4 aurora-flex aurora-items-center aurora-justify-center aurora-w-full">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" isDisable />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
