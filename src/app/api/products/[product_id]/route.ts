import { products } from "@/__mock/__products";
import { Product } from "@/lib/types/products";
import { NextRequest } from "next/server";

function returnMiddleIndex(length: number) {
  return Math.floor(length / 2);
}

const findItem = (id: string, items: Product[]) => {
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

  if (product) {
    return new Response(
      JSON.stringify({
        status: 200,
        product,
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
