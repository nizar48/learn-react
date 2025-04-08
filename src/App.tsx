import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Header from "./components/Header.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import CartPage from "./pages/CartPage.tsx";

function App() {
  const location = useLocation();

  return (
    <main className="container mx-auto flex flex-col items-center px-4 py-6 md:px-12 lg:px-24 xl:px-48">
      <Header />
      <div className="w-full flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <Routes location={location}>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
