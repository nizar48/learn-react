import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import CartPage from "./pages/CartPage.tsx";

function App() {
  return (
    <main className="container mx-auto flex flex-col items-center px-4 py-6 md:px-12 lg:px-24 xl:px-48">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
}

export default App;
