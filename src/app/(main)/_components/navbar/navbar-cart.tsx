import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export function NavbarCart() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="!aurora-rounded-full">
          <IoCartOutline className="aurora-text-3xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="aurora-w-[300px] !aurora-rounded-lg !aurora-p-0">
        <div className="aurora-p-2 aurora-border-b">
          <h1 className="aurora-text-sm aurora-font-bold aurora-text-gray-500">
            Baru Ditambahkan
          </h1>
        </div>
        <div className="aurora-p-1 aurora-max-h-[400px] aurora-overflow-y-auto">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="aurora-border aurora-rounded-lg aurora-mt-1 first-of-type:aurora-mt-0 aurora-p-2 aurora-flex aurora-items-start aurora-gap-x-2"
            >
              <Skeleton className="aurora-min-w-12 aurora-h-12 !aurora-rounded-lg !aurora-bg-gray-400" />

              <div>
                <Link href={'/'} className="aurora-line-clamp-1 aurora-text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla, nisi?
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="aurora-border-t aurora-p-2">Button</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
