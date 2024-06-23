import { products } from "@/__mock/__products";

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
