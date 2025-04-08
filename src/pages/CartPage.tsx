import { useCart } from "../context/cartContext.tsx";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeItem } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.count, 0).toFixed(2);
  };

  return (
    <div className="mx-auto mt-10 w-6xl rounded-lg border border-gray-200 bg-white p-6 shadow">
      <h2 className="mb-6 border-b pb-4 text-3xl font-bold text-gray-800">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-4">
          <img className="h-72" src="/empty-cart.png" alt="empty cart" />
          <p className="text-xl text-gray-500">Your cart is empty.</p>
          <Link
            to="/"
            className="mt-10 flex w-fit items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {cart.map((item) => (
                  <tr key={item.product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded-md">
                          <img src={item.product.imageUrl} alt={item.product.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.product.name}</div>
                          <div className="text-sm text-gray-500">{item.product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <span className="px-2">{item.count}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      ${item.product.price?.toFixed(2) || "0.00"}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      ${(item.product.price * item.count).toFixed(2) || "0.00"}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <button
                        onClick={() => removeItem(item.product)}
                        className="flex w-fit items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700">Subtotal:</span>
              <span className="text-xl font-bold text-gray-900">${calculateTotal()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
