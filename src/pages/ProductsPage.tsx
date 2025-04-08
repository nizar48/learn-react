import { Product } from "../types/Product.ts";
import ProductList from "../components/ProductList.tsx";
import useFetch from "../utils/useFetch.ts";
import { AlertCircle, Loader2 } from "lucide-react";

const ProductsPage = () => {
  const { data: products, isLoading, error, refetch } = useFetch<Product[]>("http://localhost:3000/products");

  return (
    <>
      {isLoading && (
        <div className="mt-6 flex animate-pulse items-center gap-2 text-lg text-gray-600">
          <Loader2 className="animate-spin" />
          <span>Loading products...</span>
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-lg bg-red-100 p-4 text-center text-red-700 shadow-sm">
          <div className="flex flex-col items-center gap-2">
            <AlertCircle className="h-6 w-6" />
            <p className="font-semibold">Error: {error}</p>
            <button
              onClick={refetch}
              className="mt-2 rounded bg-red-600 px-4 py-1.5 text-white transition hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {!isLoading && !error && products && <ProductList products={products} />}
    </>
  );
};

export default ProductsPage;
