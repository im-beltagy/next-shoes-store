import {
  fetchFeaturedProducts,
  fetchNewestProducts,
} from "@/actions/products-actions";
import HomeView from "@/view/sections/home/view";

export default async function Page() {
  const newestProducts = await fetchNewestProducts();
  const featuredProducts = await fetchFeaturedProducts();

  return (
    <HomeView
      featuredProducts={featuredProducts || []}
      newestProducts={newestProducts || []}
    />
  );
}
