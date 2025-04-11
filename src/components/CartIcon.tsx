import { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
// import { useCart } from "../context/cartContext";
import { useAppSelector } from "../store/hooks.ts";
import { selectCartItemCount } from "../store/cartSlice.ts";

const CartIcon = () => {
  // const { getCartCount } = useCart();
  const [animate, setAnimate] = useState(false);
  // const prevCountRef = useRef<number>(getCartCount());
  const cartCount = useAppSelector(selectCartItemCount);
  const prevCountRef = useRef<number>(cartCount);

  // const count = getCartCount();
  useEffect(() => {
    if (prevCountRef.current !== cartCount) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      prevCountRef.current = cartCount;
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <Link to="/cart" className="relative p-2 text-gray-600 hover:text-blue-600">
      <ShoppingCart size={22} />
      {cartCount > 0 && (
        <span
          className={`absolute top-0 right-[-6px] flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white transition-transform duration-300 ${
            animate ? "scale-125" : "scale-100"
          }`}
        >
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
