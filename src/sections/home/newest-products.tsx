"use client";

import SectionHeadding from "@/components/sectionHeadding";
import ProductCard from "@/components/productCard";
import { ProductSum } from "@/types/products";

interface Props {
  products: ProductSum[];
}

export default function NewestProducts({ products }: Props) {
  return (
    <section className="bg-accent-main">
      <div className="py-section-sm md:py-section-md container mx-auto max-w-screen-lg px-4">
        <SectionHeadding
          headding="Newest Shoes"
          subheadding="Checkout The Latest Shoes"
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
