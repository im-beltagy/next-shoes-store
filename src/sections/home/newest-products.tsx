"use client";

import SectionHeadding from "@/components/section-headding";
import ProductCard from "@/components/product-card";
import { ProductSum } from "@/types/products";
import { useTranslations } from "next-intl";

interface Props {
  products: ProductSum[];
}

export default function NewestProducts({ products }: Props) {
  const t = useTranslations("Pages.Home.NewestShoes");

  return (
    <section className="bg-second">
      <div className="container mx-auto max-w-screen-lg px-4 py-section-sm md:py-section-md">
        <SectionHeadding
          headding={t("headding")}
          subheadding={t("subheadding")}
          darkBG
        />

        {/* Content */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.map((item) => {
            return <ProductCard {...item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
