import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Product } from "../types/Product.ts";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="group my-10 flex w-full max-w-md flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-lg">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </a>
      <div className="mt-4 px-5 pb-5">
        <div className="flex flex-wrap items-center justify-between py-4">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
          </a>

          <p>
            <span className="text-xl font-bold text-slate-900">${product.price}</span>
          </p>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          <p>
            {isExpanded ? product.description : truncateText(product.description, 100)}
            {product.description.length > 100 && (
              <button onClick={toggleDescription} className="ml-1 text-blue-600 hover:text-blue-800 focus:outline-none">
                {isExpanded ? " Read less" : " Read more..."}
              </button>
            )}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          <ShoppingCart className="mr-2 h-6 w-6" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
