import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';

export const useSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState<string>(searchParams.get('keyword')!);
  const debounceSearchTerm = useDebounce(search, 2000);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search?keyword=${search}`);
  };

  useEffect(() => {
    console.log(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return { search, setSearch, handleSubmit };
};
