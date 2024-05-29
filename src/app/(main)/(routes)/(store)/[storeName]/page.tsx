import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StoreFooter from './_components/store-footer';
import StoreHeader from './_components/store-header';
import StoreHomepage from './_components/store-homepage';
import StoreProduct from './_components/store-product';
import StoreReview from './_components/store-review';

export default function StoreName() {
  return (
    <>
      <StoreHeader />

      <Tabs defaultValue="homepage" className="aurora-mt-4 !aurora-w-full">
        <TabsList className="!aurora-w-full">
          <TabsTrigger value="homepage">Beranda</TabsTrigger>
          <TabsTrigger value="product">Produk</TabsTrigger>
          <TabsTrigger value="review">Ulasan</TabsTrigger>
        </TabsList>
        <TabsContent value="homepage">
          <StoreHomepage />
        </TabsContent>
        <TabsContent value="product">
          <StoreProduct />
        </TabsContent>
        <TabsContent value="review">
          <StoreReview />
        </TabsContent>
      </Tabs>

      <StoreFooter />
    </>
  );
}
