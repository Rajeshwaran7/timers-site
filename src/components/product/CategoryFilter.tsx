import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductCategory } from '../../types/product';

type CategoryFilterProps = {
  activeCategory?: ProductCategory | 'all';
};

const categories: { id: ProductCategory | 'all'; name: string }[] = [
  { id: 'all', name: 'All Products' },
  { id: 'chairs', name: 'Chairs' },
  { id: 'tables', name: 'Tables' },
  { id: 'sofas', name: 'Sofas' },
  { id: 'cots', name: 'Cots' },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory = 'all' }) => {
  const location = useLocation();
  const basePath = location.pathname.includes('/category') 
    ? '/category' 
    : '/shop';

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.id === 'all' ? '/shop' : `${basePath}/${category.id}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900'
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 