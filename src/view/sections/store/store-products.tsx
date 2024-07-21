"use client";

import { fetchProducts } from "@/actions/products-actions";
import { PRODUCTS_LIMIT } from "@/lib/config";
import { Product } from "@/lib/types/products";
import { ProductCard } from "@/view/components/product-card";
import SectionHeadding from "@/view/components/section-headding";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

export function StoreProducts({
  products: initProducts,
}: Readonly<{
  products: Product[];
}>) {
  const t = useTranslations("Pages.Store");

  const [products, setProducts] = useState(initProducts);
  const [available, setAvailable] = useState(true);

  const handleClick = useCallback(() => {
    if (available) {
      (async () => {
        const newProducts = await fetchProducts({
          limit: PRODUCTS_LIMIT,
          offset: products.length,
        });

        if (newProducts.length === 0) {
          setAvailable(false);
        } else {
          setProducts((prev) => [...prev, ...newProducts]);
        }
      })();
    }
  }, [available, products.length]);

  return (
    <section className="bg-second py-section-sm md:py-section-md">
      <div className="main-container">
        <SectionHeadding
          headding={t("headding")}
          subheadding={t("subheadding")}
          darkBG
        />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>
      {available ? <LoadMoreButton onClick={() => handleClick()} /> : null}
    </section>
  );
}

function LoadMoreButton({ onClick }: Readonly<{ onClick: () => void }>) {
  const t = useTranslations("Global");

  return (
    <div className="mt-10 flex items-center gap-4 px-4">
      <hr className="flex-grow" />
      <button onClick={onClick} className="btn btn-outlined">
        {t("load-more")}
      </button>
      <hr className="flex-grow" />
    </div>
  );
}
