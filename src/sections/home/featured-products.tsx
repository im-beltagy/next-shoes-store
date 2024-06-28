import SectionHeadding from "@/components/sectionHeadding";
import ProductCard from "@/components/productCard";
import { ProductSum } from "@/types/products";

interface Props {
  products: ProductSum[];
}

export default function FeaturedProducts({ products }: Props) {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-section-sm md:py-section-md">
      <SectionHeadding
        headding="Featured Shoes"
        subheadding="Checkout The Featured Shoes"
      />

      {/* Content */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
