import { Product } from "./Product.ts";

export type CartItem = {
  product: Product;
  count: number;
};
