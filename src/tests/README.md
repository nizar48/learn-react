# React Shop Test Suite

This directory contains unit tests for the React Shop application's components.

## Running Tests

To run all tests:

```bash
npm test
```

To run a specific test file:

```bash
npm test -- ProductCard.test.tsx
```

## Test Coverage

The test suite covers the following components:

### `App.test.tsx`

Tests for the main App component:

- Verifies that Header and ProductList components are rendered
- Checks that products are passed to the ProductList component
- Confirms that the main container has the correct Tailwind CSS classes

### `ProductCard.test.tsx`

Tests for the ProductCard component:

- Verifies that product information (name, price, description, image) is rendered correctly
- Tests that the "Add to Cart" button calls the provided onAddToCart function with the correct product
- Checks that the ShoppingCart icon is rendered in the button

### `ProductList.test.tsx`

Tests for the ProductList component:

- Confirms that all products are rendered correctly
- Verifies that an empty state message is displayed when no products are available
- Tests that products are rendered in a grid layout

## Writing Additional Tests

When adding new features, be sure to add appropriate tests. Some guidelines:

1. Keep tests focused on a single functionality
2. Use descriptive test names that explain what's being tested
3. Use the testing-library queries that most closely resemble how users interact with your app
4. Remember to test edge cases (empty states, error states, etc.)

## Test Utilities

The `setup.ts` file configures the test environment with necessary utilities:

- Cleanup after each test
- DOM testing utilities from @testing-library/react
- Custom matchers from @testing-library/jest-dom
