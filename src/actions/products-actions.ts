"use server";

import { products } from "@/__mock/__products";
import { refactorProduct } from "@/app/api/util";
import { axiosInstance, endpoints } from "@/lib/axios";
import { PRODUCTS_LIMIT } from "@/lib/config";
import { cookies } from "next/headers";

function convertIntoProductSum(products: any[]) {
  if (typeof products !== "object") return [];

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    img: product.img,
    description: product.description,
    price: product.price,
    rating: product.rating,
    inStock: product.inStock,
  }));
}

export async function fetchNewestProducts() {
  try {
    const lang = cookies().get("NEXT_LOCALE")?.value === "ar" ? "ar" : "en";

    const res = await {
      data: convertIntoProductSum(
        [products[3], products[29], products[12]].map((p) =>
          refactorProduct(p, lang),
        ),
      ),
    };
    return res?.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}

export async function fetchFeaturedProducts() {
  try {
    const lang = cookies().get("NEXT_LOCALE")?.value === "ar" ? "ar" : "en";
    const res = await {
      data: convertIntoProductSum(
        [products[11], products[42], products[14]].map((p) =>
          refactorProduct(p, lang),
        ),
      ),
    };
    return res?.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}

export interface ProductFIlters {
  name: string;
  min_price: string;
  max_price: string;
  color: string;
  category: string;
}
export async function fetchProducts({
  offset = 0,
  limit = PRODUCTS_LIMIT,
  filters,
}: {
  offset?: number;
  limit?: number;
  filters: ProductFIlters;
}) {
  const { name, min_price, max_price, color, category } = filters;

  try {
    const res = await axiosInstance.get(endpoints.products.getAll, {
      params: {
        offset: offset.toString(),
        limit: limit.toString(),
        name,
        min_price,
        max_price,
        color,
        category,
      },
    });

    return res?.data?.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}
