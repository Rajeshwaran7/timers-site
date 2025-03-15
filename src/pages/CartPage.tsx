import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { TrashIcon, ShoppingBagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBagIcon className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <h1 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/shop" className="btn btn-primary inline-flex items-center">
              Continue Shopping
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">
          Your Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
                    {items.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                              <h3>
                                <Link to={`/product/${item.id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="ml-4">₹{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              ₹{item.price.toFixed(2)} each
                            </p>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 text-gray-800 dark:text-gray-200 min-w-[40px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                +
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4">
                <button
                  onClick={clearCart}
                  className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="flow-root">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="text-gray-600 dark:text-gray-300">Subtotal</p>
                    <p className="text-gray-900 dark:text-white font-medium">₹{totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600 dark:text-gray-300">Shipping</p>
                    <p className="text-gray-900 dark:text-white font-medium">Free</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600 dark:text-gray-300">Tax</p>
                    <p className="text-gray-900 dark:text-white font-medium">₹{(totalPrice * 0.18).toFixed(2)}</p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between">
                    <p className="text-lg font-medium text-gray-900 dark:text-white">Total</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      ₹{(totalPrice + totalPrice * 0.18).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  Proceed to Checkout
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="mt-4">
                <Link
                  to="/shop"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm flex items-center justify-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 