import { Product } from "@/lib/types/products";
import Hero from "../../home/hero";
import { StoreProducts } from "../store-products";
import StoreFilters from "../store-filters";

export function StoreView({ products }: { products: Product[] }) {
  return (
    <section>
      <Hero />
      <StoreFilters />
      <StoreProducts products={products} />
    </section>
  );
}
