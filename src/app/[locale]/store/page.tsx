import { fetchProducts } from "@/actions/products-actions";
import { INIT_PRODUCTS_COUNT } from "@/lib/config";
import { StoreView } from "@/view/sections/store/view/store-view";

export default async function Page() {
  const products = await fetchProducts({ limit: INIT_PRODUCTS_COUNT });

  return <StoreView products={products} />;
}
