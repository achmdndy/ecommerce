import BestSellingProducts from './_sections/best-selling-products';
import CategoryList from './_sections/category-list';
import CreateStore from './_sections/create-store';
import ProductRecommendations from './_sections/product-recommendations';
import PromotionBanner from './_sections/promotion-banner';
import StorePromotion from './_sections/store-promotion';
import TopStore from './_sections/top-store';

export default function Home() {
  return (
    <>
      <PromotionBanner />
      <CategoryList />
      <StorePromotion />
      <TopStore />
      <BestSellingProducts />
      <ProductRecommendations />
      <CreateStore />
    </>
  );
}
