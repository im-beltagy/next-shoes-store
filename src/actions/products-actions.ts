"use server";

import { products } from "@/__mock/__products";
import { axiosInstance, endpoints } from "@/lib/axios";
import { PRODUCTS_LIMIT } from "@/lib/config";

function convertIntoProductSum(products: any[]) {
  if (typeof products !== "object") return [];

  return products.map((product) => ({
    id: product.id,
    name_ar: product.name_ar,
    name_en: product.name_en,
    img: product.img,
    description_ar: product.description_ar,
    description_en: product.description_en,
    price: product.price,
    rating: product.rating,
    inStock: product.inStock,
  }));
}

export async function fetchNewestProducts() {
  try {
    const res = await {
      data: convertIntoProductSum([products[3], products[29], products[12]]),
    };
    return res?.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}

export async function fetchFeaturedProducts() {
  try {
    const res = await {
      data: convertIntoProductSum([products[11], products[42], products[14]]),
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
    const res = await axiosInstance.get(
      `https://next-shoes-store.vercel.app/api/products`,
      {
        params: {
          offset: offset.toString(),
          limit: limit.toString(),
          name,
          min_price,
          max_price,
          color,
          category,
        },
      },
    );

    return res?.data?.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}
