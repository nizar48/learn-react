import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { Product } from "../types/Product";

// Mock the Header and ProductList components to simplify testing
vi.mock("../components/Header", () => ({
  default: () => <div data-testid="mock-header">Header Component</div>,
}));

vi.mock("../components/ProductList", () => ({
  // Only destructure the products prop that we need
  default: ({
    products,
  }: {
    products: Product[];
    onAddToCart: (product: Product) => void;
  }) => (
    <div data-testid="mock-product-list">
      ProductList Component with {products.length} products
    </div>
  ),
}));

describe("App Component", () => {
  it("renders Header and ProductList components", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if Header is rendered
    expect(screen.getByTestId("mock-header")).toBeInTheDocument();

    // Check if ProductList is rendered
    expect(screen.getByTestId("mock-product-list")).toBeInTheDocument();
  });

  it("passes products to ProductList component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Verify ProductList received products
    // This is a simple check - we're just confirming products array is not empty
    const productList = screen.getByTestId("mock-product-list");
    expect(productList.textContent).not.toContain("0 products");
  });

  it("renders the main container with correct Tailwind classes", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if main container has proper styling classes
    const mainContainer = screen.getByRole("main");
    expect(mainContainer).toHaveClass("container");
    expect(mainContainer).toHaveClass("mx-auto");
  });
});
