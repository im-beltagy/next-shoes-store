import { ProductSum } from "@/lib/types/products";
import Hero from "../../home/hero";
import { StoreProducts } from "../store-products";

export function StoreView({ products }: { products: ProductSum[] }) {
  return (
    <section>
      <Hero />
      <StoreProducts products={products} />
    </section>
  );
}
