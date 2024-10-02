export type Categories =
  | "FORMAL_SHOES"
  | "MENS_SHOES"
  | "SNEAKERS"
  | "WOMENS_SHOES"
  | "LOAFERS"
  | "HEELS"
  | "ATHLETIC_SHOES"
  | "BOOTS"
  | "FLATS"
  | "CASUAL_SHOES"
  | "SANDALS"
  | "WEDGES"
  | "SLIDES"
  | "MULES"
  | "SLIPPERS"
  | "WOMENS_ACCESSORIES"
  | "MENS_ACCESSORIES"
  | "KIDS_ACCESSORIES";

export const all_categories: Categories[] = [
  "FORMAL_SHOES",
  "MENS_SHOES",
  "SNEAKERS",
  "WOMENS_SHOES",
  "LOAFERS",
  "HEELS",
  "ATHLETIC_SHOES",
  "BOOTS",
  "FLATS",
  "CASUAL_SHOES",
  "SANDALS",
  "WEDGES",
  "SLIDES",
  "MULES",
  "SLIPPERS",
  "WOMENS_ACCESSORIES",
  "MENS_ACCESSORIES",
  "KIDS_ACCESSORIES",
];

export type Colors =
  | "BLACK"
  | "BROWN"
  | "BLUE"
  | "WHITE"
  | "GREY"
  | "PINK"
  | "BEIGE"
  | "RED"
  | "SILVER"
  | "TAN"
  | "NAVY"
  | "PURPLE"
  | "TAUPE"
  | "GREEN"
  | "CAMEL"
  | "GOLD";

export const all_colors: Colors[] = [
  "BLACK",
  "BROWN",
  "BLUE",
  "WHITE",
  "GREY",
  "PINK",
  "BEIGE",
  "RED",
  "SILVER",
  "TAN",
  "NAVY",
  "PURPLE",
  "TAUPE",
  "GREEN",
  "CAMEL",
  "GOLD",
];

export interface ProductSum {
  id: string;
  name: string;
  img: string;
  description: string;
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
  categories: Categories[];
  colors: Colors[];
  relatedProducts: string[];
}

export interface RealProduct extends Omit<Product, "name" | "description"> {
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
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
