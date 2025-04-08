import { useState } from "react";
import { Product } from "./types/Product.ts";
import { CartItem } from "./types/CartItem.ts";
import ProductList from "./components/ProductList.tsx";
import Header from "./components/Header.tsx";
import { useToast } from "./utils/useToast.tsx";
import useFetch from "./utils/useFetch.ts";
import { Loader2, AlertCircle } from "lucide-react"; // optional icon lib

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { showToast } = useToast();

  const { data: products, isLoading, error, refetch } = useFetch<Product[]>("http://localhost:3000/products");

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);

      if (existingItem) {
        showToast(`✅ Item: ${product.name} quantity increased.`);
        return prevCart.map((item) => (item.product.id === product.id ? { ...item, count: item.count + 1 } : item));
      }

      showToast(`✔️ Item: ${product.name} added to cart.`);
      return [...prevCart, { product, count: 1 }];
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    <main className="container mx-auto flex flex-col items-center px-4 py-6 md:px-12 lg:px-24 xl:px-48">
      <Header cartCount={cartCount} />

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

      {!isLoading && !error && products && <ProductList products={products} onAddToCart={handleAddToCart} />}
    </main>
  );
}

export default App;
