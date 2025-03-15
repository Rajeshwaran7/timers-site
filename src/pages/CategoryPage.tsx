import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import CategoryFilter from '../components/product/CategoryFilter';
import { products } from '../data/products';
import { Product, ProductCategory } from '../types/product';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');

  useEffect(() => {
    if (category && ['chairs', 'tables', 'sofas', 'cots'].includes(category)) {
      setActiveCategory(category as ProductCategory);
      setFilteredProducts(products.filter(product => product.category === category));
    } else {
      setActiveCategory('all');
      setFilteredProducts(products);
    }
  }, [category]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-8">
          {activeCategory === 'all' 
            ? 'All Products' 
            : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}
        </h1>
        
        <div className="mb-8">
          <CategoryFilter activeCategory={activeCategory} />
        </div>
        
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage; 