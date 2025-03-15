import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Product } from '../../types/product';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, images, rating, reviews, isNew, discount } = product;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        {discount && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Product image */}
      <Link to={`/product/${id}`} className="block relative h-64 overflow-hidden">
        <img
          src={images[0] || '/images/placeholder.jpg'}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Product details */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1 truncate hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ₹{(price - (price * discount) / 100).toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">
                  ₹{price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ₹{price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Quick add to cart button */}
          <button
            className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 