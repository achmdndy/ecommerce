'use client';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from '@/components/ui/command';
import { useSearch } from '@/hooks/use-search';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export function NavbarSearch() {
  const { search, setSearch, handleSubmit } = useSearch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(isOpen => !isOpen);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'aurora-flex aurora-items-center aurora-justify-between aurora-w-full aurora-rounded-md aurora-bg-background aurora-font-normal aurora-text-muted-foreground aurora-shadow-none',
        )}
        onClick={() => setOpen(true)}
      >
        <span className="aurora-hidden lg:aurora-inline-flex aurora-gap-x-2 aurora-items-center">
          <FaSearch />
          {search ? search : 'Cari produk, merek dan toko'}
        </span>
        <span className="aurora-inline-flex lg:aurora-hidden">Cari...</span>
        <kbd className="aurora-pointer-events-none aurora-hidden aurora-select-none aurora-items-center aurora-gap-1 aurora-rounded aurora-border aurora-bg-muted aurora-px-1.5 aurora-font-mono aurora-text-[10px] aurora-font-medium aurora-opacity-100 sm:aurora-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSubmit(e);
              setOpen(false);
            }
          }}
          onChangeCapture={e => setSearch(e.currentTarget.value)}
          placeholder="Cari produk, merek dan toko"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </CommandDialog>
    </>
  );
}
