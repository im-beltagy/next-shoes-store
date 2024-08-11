"use client";

import { defaultLocale, localesSettings } from "@/config-locale";
import { Colors, Product, ProductSum } from "@/lib/types/products";
import { Locales } from "@/lib/types/settings";
import { fCurrency } from "@/lib/utils/format-number";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "../rating";
import { useMemo } from "react";
import { COLORS } from "@/lib/config";

export function ProductSumCard({
  children,
  ...productSum
}: { children?: React.ReactNode } & ProductSum) {
  const t = useTranslations("Global");
  const locale = useLocale();
  const localeCode = (locale || defaultLocale) as Locales;
  const dir = localesSettings[localeCode].dir || "ltr";

  const isQuantitiySmall = productSum.inStock < 10;

  const renderPrice = useMemo(
    () => (
      <div className="bg-card absolute bottom-0 end-0 rounded-ss-md px-4 py-2">
        {/* Price Text */}
        {productSum.price.sale ? (
          <>
            <del
              className="text-primary-dark inline-block text-sm font-light"
              suppressHydrationWarning
            >
              {fCurrency(productSum.price.original)}
            </del>{" "}
            <span
              className="inline-block font-semibold text-green-600 dark:text-green-400"
              suppressHydrationWarning
            >
              {fCurrency(productSum.price.sale)}
            </span>
          </>
        ) : (
          <span
            className="text-primary-dark inline-block font-semibold"
            suppressHydrationWarning
          >
            {fCurrency(productSum.price.original)}
          </span>
        )}

        {/* Top Rounded Edge */}
        <div
          className="absolute bottom-full end-0 h-1.5 w-1.5 rounded-ee-full text-white dark:text-zinc-400"
          style={{
            boxShadow: `${dir === "rtl" ? "-0" : "0"}.5rem .5rem 0 .5rem currentColor`,
          }}
        ></div>
        {/* Bottom Rounded Edge */}
        <div
          className="absolute bottom-0 end-full h-1.5 w-1.5 rounded-ee-full text-white dark:text-zinc-400"
          style={{
            boxShadow: `${dir === "rtl" ? "-0" : "0"}.5rem .5rem 0 .5rem currentColor`,
          }}
        ></div>
      </div>
    ),
    [dir, productSum.price.original, productSum.price.sale],
  );

  const renderBadge = useMemo(
    () => (
      <span
        className={`absolute end-1 top-1 block rounded-lg ${isQuantitiySmall ? "bg-rose-500" : "bg-green-500"} px-3 py-1 text-sm font-bold text-white`}
        style={{ letterSpacing: 1 }}
      >
        {isQuantitiySmall ? (
          <>
            <span>{t("Only")} </span>
            <span>{productSum.inStock}</span>
          </>
        ) : (
          <>
            <span>{productSum.inStock} </span>
            <span>{t("Available")}</span>
          </>
        )}
      </span>
    ),
    [isQuantitiySmall, productSum.inStock, t],
  );

  return (
    <Link
      href={`/shop/${productSum.id}`}
      className="group/card bg-card block overflow-hidden rounded-md p-4 shadow"
    >
      {/* Img Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          className="w-full transition-transform duration-300 group-hover/card:scale-110"
          src={productSum.img}
          alt={`${productSum.name_en} preview image`}
          width={512}
          height={512}
        />
        {renderPrice}
        {renderBadge}
      </div>

      {/* Divider */}
      <hr className="border-1 my-4 border-divider-dark dark:border-divider-light" />

      {/* Text */}
      <h4 className="text-primary-dark pb-2 text-xl font-semibold lg:text-2xl">
        {productSum[`name_${localeCode}`]}
      </h4>

      {/* Rating */}
      <div className="mb-2 flex gap-2">
        <Rating stars={productSum.rating} className="w-full" />
      </div>

      {children}

      {/* Sum */}
      {productSum[`description_${localeCode}`]?.split("\n").map((item, i) => (
        <p className="pb-3 font-light tracking-wide" key={i}>
          {item}
        </p>
      ))}
    </Link>
  );
}

export function ProductCard(product: Product) {
  const t = useTranslations("Product.Categories");
  return (
    <ProductSumCard {...product}>
      <p className="mb-2 text-sm">
        {product.categories.map((item) => t(item)).join(", ")}
      </p>
      <div className="mb-2 flex">
        {product.colors.map((item) => (
          <ColorDot key={item} color={item} />
        ))}
      </div>
    </ProductSumCard>
  );
}

export function ColorDot({ color }: { color: Colors }) {
  return (
    <div
      className="-ms-1 mr-1 h-4 w-4 rounded-full border-2 border-slate-400 dark:border-zinc-300"
      style={{ backgroundColor: COLORS[color] }}
    />
  );
}
