'use client';

import { Button } from '@/components/ui/button';
import { notFound, useSearchParams } from 'next/navigation';
import { FaFilter } from 'react-icons/fa';
import BrandFilter from './_components/brand-filter';
import CategoryFilter from './_components/category-filter';
import LocationFilter from './_components/location-filter';
import PriceLimitFilter from './_components/price-limit-filter';
import RatingFilter from './_components/rating-filter';
import RelateStores from './_components/related-stores';
import SearchResult from './_components/search-result';

export default function Search() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');

  if (!keyword) return notFound();

  return (
    <div className="aurora-grid aurora-grid-cols-[20%_80%] aurora-gap-x-4">
      <div>
        <div className="aurora-flex aurora-items-center aurora-gap-x-2 aurora-border-b aurora-pb-2">
          <FaFilter className="" />{' '}
          <span className="aurora-text-lg aurora-font-bold ">Filter</span>
        </div>

        <LocationFilter />
        {/* <SalesTypeFilter /> */}
        {/* <PaymentMethodFilter /> */}
        {/* <ShippingOptionFilter /> */}
        {/* <PromoProgramFilter /> */}
        <PriceLimitFilter />
        <RatingFilter />
        <BrandFilter />
        <CategoryFilter />

        <div className="aurora-border-t aurora-pt-2 aurora-mt-2">
          <Button size="sm" className="!aurora-w-full">
            Hapus Semua
          </Button>
        </div>
      </div>
      <div>
        <RelateStores />
        <SearchResult />
      </div>
    </div>
  );
}
