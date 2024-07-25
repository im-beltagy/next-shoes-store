import { Product } from "@/lib/types/products";
import Hero from "../../home/hero";
import { StoreProducts } from "../store-products";

export function StoreView({ products }: { products: Product[] }) {
  return (
    <section>
      <Hero />
      <StoreProducts products={products} />
    </section>
  );
}
