import { ProductFIlters } from "@/actions/products-actions";
import Hero from "@/view/sections/home/hero";
import StoreFilters from "@/view/sections/store/store-filters";
import { StoreProducts } from "@/view/sections/store/store-products";

type SearchParams = Record<
  "search" | "min_price" | "max_price" | "color" | "category",
  string | undefined
>;

export default async function Page({
  searchParams: { search, min_price, max_price, color, category },
}: {
  searchParams: SearchParams;
}) {
  const filters: ProductFIlters = {
    name: search || "",
    min_price: min_price || "",
    max_price: max_price || "",
    color: color || "",
    category: category || "",
  };

  return (
    <section>
      <Hero />
      <StoreFilters />
      <StoreProducts filters={filters} />
    </section>
  );
}
