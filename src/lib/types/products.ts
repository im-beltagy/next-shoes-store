export interface ProductSum {
  id: string;
  name: string;
  img: string;
  description: string[];
  price: {
    original: string;
    sale: string | null;
    final?: string;
  };
  inStock: number;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface CartProduct
  extends Omit<ProductSum, "rating" | "description" | "price"> {
  pieces: number;
  colors: string[];
  choosenColor: string;
  itemID: string;
  price: string;
}

export interface Product extends ProductSum {
  categories: string[];
  colors: string[];
  relatedProducts: string[];
}

interface SelectFilter {
  name: string;
  label: string;
  type: "select";
  options: string[];
}
interface RangeFilter {
  name: string;
  label: string;
  type: "range";
  range: { min: number; max: number; step: number };
}

export type Filter = SelectFilter | RangeFilter;
