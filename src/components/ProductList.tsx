import { Product } from "../types/Product.ts";
import ProductCard from "./ProductCard.tsx";

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div
      className="mx-auto grid max-w-screen-xl grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-3"
      data-testid="product-list-container"
    >
      {products && products.length > 0 ? (
        products.map((product: Product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <div className="col-span-full py-10 text-center">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
