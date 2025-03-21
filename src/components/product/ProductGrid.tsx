import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';

type ProductGridProps = {
  products: Product[];
  title?: string;
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid; 