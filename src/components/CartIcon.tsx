import { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

const CartIcon = () => {
  const { getCartCount } = useCart();
  const [animate, setAnimate] = useState(false);
  const prevCountRef = useRef<number>(getCartCount());
  const count = getCartCount();

  useEffect(() => {
    if (prevCountRef.current !== count) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      prevCountRef.current = count;
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <Link to="/cart" className="relative p-2 text-gray-600 hover:text-blue-600">
      <ShoppingCart size={22} />
      {count > 0 && (
        <span
          className={`absolute top-0 right-[-6px] flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white transition-transform duration-300 ${
            animate ? "scale-125" : "scale-100"
          }`}
        >
          {count}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
