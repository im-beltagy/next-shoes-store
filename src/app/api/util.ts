import { Product, RealProduct } from "@/lib/types/products";

export function getDateAfterSec(sec: number): Date {
  return new Date(new Date().getTime() + sec * 1000);
}

export const refactorProduct = (
  { name_ar, name_en, description_ar, description_en, ...product }: RealProduct,
  lang: "ar" | "en",
): Product => {
  return {
    ...product,
    name: lang === "ar" ? name_ar : name_en,
    description: lang === "ar" ? description_ar : description_en,
  };
};
