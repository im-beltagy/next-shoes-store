import { ProductSum } from "@/types/products";
import FeaturedProducts from "../featured-products";
import Features from "../features";
import GetInTouch from "../get-in-touch";
import Hero from "../hero";
import NewestProducts from "../newest-products";
import Testimonials from "../testimonials";

interface Props {
  featuredProducts: ProductSum[];
  newestProducts: ProductSum[];
}

export default function HomeView({ featuredProducts, newestProducts }: Props) {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturedProducts products={featuredProducts} />
      <NewestProducts products={newestProducts} />
      <Testimonials />
      <GetInTouch />
    </div>
  );
}
