import { Link } from "react-router-dom";
import CartIcon from "./CartIcon.tsx";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mt-2 w-6xl rounded-md border border-gray-200 bg-white shadow">
      <nav className="py-2.5 lg:px-6">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <Link className="flex items-center" to="/">
            <img src="/reactshop-logo.png" alt="ReactShop Logo" className="mr-3 h-10 sm:h-12" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">React Shop</span>
          </Link>
          <CartIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
