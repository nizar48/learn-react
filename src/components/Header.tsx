import { ShoppingCart } from "lucide-react";

type HeaderPropsType = {
  cartCount: number;
};

const Header = ({ cartCount }: HeaderPropsType) => {
  return (
    <header className="sticky top-0 z-50 mt-2 w-full rounded-md border border-gray-200 bg-white shadow">
      <nav className="py-2.5 lg:px-6">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <img src="/reactshop-logo.png" alt="ReactShop Logo" className="mr-3 h-10 sm:h-12" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">ReactShop</span>
          </div>

          <a href="/cart" className="relative p-2 text-gray-600 hover:text-blue-600">
            <ShoppingCart size={22} />
            <span className="absolute top-0 right-[-6px] flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              {cartCount}
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
