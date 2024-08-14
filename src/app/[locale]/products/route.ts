import { products } from "@/__mock/__products";
import { Categories, Colors } from "@/lib/types/products";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const { offset, limit, name, min_price, max_price, color, category } = {
    offset: Number(searchParams.get("offset")),
    limit: Number(searchParams.get("limit")),
    name: searchParams.get("name"),
    min_price: searchParams.get("min_price"),
    max_price: searchParams.get("max_price"),
    color: searchParams.get("color"),
    category: searchParams.get("category"),
  };

  const filteredProducts = products.filter(
    (p) =>
      (!name ||
        p.name_ar.toLowerCase().includes(name.toLowerCase()) ||
        p.name_en.toLowerCase().includes(name.toLowerCase())) &&
      (!min_price || Number(p.price.final) >= Number(min_price)) &&
      (!max_price || Number(p.price.final) <= Number(max_price)) &&
      (!color || p.colors.includes(color as Colors)) &&
      (!category || p.categories.includes(category as Categories)),
  );

  return Response.json({
    data: {
      data: filteredProducts.slice(offset, offset + limit),
      total: filteredProducts.length,
    },
  });
}
