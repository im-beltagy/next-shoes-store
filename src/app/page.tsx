import {
  fetchFeaturedProducts,
  fetchNewestProducts,
} from "@/actions/products-actions";
import HomeView from "@/sections/home/view";

export default async function Home() {
  const newestProducts = await fetchNewestProducts();
  const featuredProducts = await fetchFeaturedProducts();

  return (
    <HomeView
      featuredProducts={featuredProducts || []}
      newestProducts={newestProducts || []}
    />
  );
}
