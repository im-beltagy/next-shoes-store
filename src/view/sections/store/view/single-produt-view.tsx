import { Product } from "@/lib/types/products";

export default function SingleProductView({ product }: { product: Product }) {
  return <div>{product.description_ar}</div>;
}
