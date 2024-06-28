import SectionHeadding from "@/components/section-headding";
import ProductCard from "@/components/product-card";
import { ProductSum } from "@/types/products";
import { useTranslations } from "next-intl";

interface Props {
  products: ProductSum[];
}

export default function FeaturedProducts({ products }: Props) {
  const t = useTranslations("Pages.Home.FeaturedShoes");

  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-section-sm md:py-section-md">
      <SectionHeadding
        headding={t("headding")}
        subheadding={t("subheadding")}
      />

      {/* Content */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
