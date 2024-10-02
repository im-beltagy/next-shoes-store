import { products } from "@/__mock/__products";
import { RealProduct } from "@/lib/types/products";
import { NextRequest } from "next/server";
import { refactorProduct } from "../../util";

function returnMiddleIndex(length: number) {
  return Math.floor(length / 2);
}

const findItem = (id: string, items: RealProduct[]) => {
  if (items.length === 0) return null;
  const middleIndex = returnMiddleIndex(items.length);

  if (id === items[middleIndex].id) {
    return items[middleIndex];
  } else if (id > items[middleIndex].id) {
    return findItem(id, items.slice(middleIndex + 1));
  } else {
    return findItem(id, items.slice(0, middleIndex));
  }
};

export async function GET(
  request: NextRequest,
  { params: { product_id } }: { params: { product_id: string } },
) {
  const product = findItem(product_id, products);
  const lang = request.headers.get("Accept-Language") === "ar" ? "ar" : "en";

  if (product) {
    return new Response(
      JSON.stringify({
        status: 200,
        product: refactorProduct(product, lang),
      }),
      { status: 200 },
    );
  } else {
    return new Response(
      JSON.stringify({ message: "Product not found", status: 400 }),
      { status: 400 },
    );
  }
}
