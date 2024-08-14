"use client";

import { fetchProducts, ProductFIlters } from "@/actions/products-actions";
import { INIT_PRODUCTS_COUNT, PRODUCTS_LIMIT } from "@/lib/config";
import { Product } from "@/lib/types/products";
import { ProductCard } from "@/view/components/product-card";
import SectionHeadding from "@/view/components/section-headding";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

export function StoreProducts({
  filters,
}: Readonly<{
  filters: ProductFIlters;
}>) {
  const t = useTranslations("Pages.Store");

  const [products, setProducts] = useState<Product[]>([]);
  const [available, setAvailable] = useState(false);

  // Fetch Init Products on The section mountStart
  const mountRef = useRef<boolean>(false);
  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      return;
    }

    (async () => {
      const { data, total } = await fetchProducts({
        limit: INIT_PRODUCTS_COUNT,
        filters,
      });
      setProducts(data);
      if (total === data.length) setAvailable(false);
    })();
  }, [filters]);

  // Fetch more Products on click
  const handleClick = useCallback(() => {
    if (available) {
      (async () => {
        const { data: newProducts, total } = await fetchProducts({
          limit: PRODUCTS_LIMIT,
          offset: products.length,
          filters,
        });

        setProducts((prev) => {
          const allProducts = [...prev, ...newProducts];
          if (total === allProducts.length) setAvailable(false);
          return allProducts;
        });
      })();
    }
  }, [available, filters, products.length]);

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
