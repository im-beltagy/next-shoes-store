"use client";

import { defaultLocale } from "@/config-locale";
import { ProductSum } from "@/lib/types/products";
import { Locales } from "@/lib/types/settings";
import { fCurrency } from "@/lib/utils/format-number";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const starIcon = (
  <svg
    className="w-full"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
      fill="currentColor"
    />
  </svg>
);

const ProductCard = (productSum: ProductSum) => {
  const locale = useLocale();
  const localeCode = (locale || defaultLocale) as Locales;

  return (
    <Link
      href={`/shop/${productSum.id}`}
      className="group/card block overflow-hidden rounded-md bg-white p-4 shadow"
    >
      {/* Img Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          className="w-full transition-transform duration-300 group-hover/card:scale-110"
          src={productSum.img}
          alt={`${productSum[`name_${localeCode}`]} preview image`}
          width={512}
          height={512}
        />
        <div className="absolute bottom-0 right-0 rounded-ss-md bg-white px-4 py-2">
          {/* Price */}
          {productSum.price.sale ? (
            <>
              <del className="text-primary-dark inline-block text-sm font-light">
                {fCurrency(productSum.price.original)}
              </del>{" "}
              <span className="inline-block font-semibold text-green-600">
                {fCurrency(productSum.price.sale)}
              </span>
            </>
          ) : (
            <span className="text-primary-dark inline-block font-semibold">
              {fCurrency(productSum.price.original)}
            </span>
          )}

          {/* Top Edge */}
          <div
            className="absolute bottom-full right-0 h-1.5 w-1.5 rounded-ee-full"
            style={{
              boxShadow: ".5rem .5rem 0 .5rem white",
            }}
          ></div>
          {/* Bottom Edge */}
          <div
            className="absolute bottom-0 right-full h-1.5 w-1.5 rounded-ee-full"
            style={{
              boxShadow: ".5rem .5rem 0 .5rem white",
            }}
          ></div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-1 border-divider my-4" />

      {/* Text */}
      <h4 className="text-primary-dark pb-2 text-xl font-semibold lg:text-2xl">
        {productSum[`name_${localeCode}`]}
      </h4>

      {/* Rating */}
      <div className="mb-2 flex gap-2">
        {Array(5)
          .fill(null)
          .map((item, index) => (
            <div
              className={`w-5 text-orange-500 ${index >= productSum.rating ? "opacity-60" : ""}`}
              key={index}
            >
              {starIcon}
            </div>
          ))}
      </div>

      {/* Sum */}
      {productSum[`description_${localeCode}`]?.split("\n").map((item, i) => (
        <p className="pb-3 font-light tracking-wide" key={i}>
          {item}
        </p>
      ))}
    </Link>
  );
};

export default ProductCard;
