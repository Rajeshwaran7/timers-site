import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import CategoryFilter from '../components/product/CategoryFilter';
import { products } from '../data/products';
import { Product, ProductCategory } from '../types/product';
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  
  const location = useLocation();
  
  useEffect(() => {
    // Check if we're on a category page
    const pathParts = location.pathname.split('/');
    if (pathParts.includes('category') && pathParts.length > 2) {
      const category = pathParts[pathParts.length - 1] as ProductCategory;
      if (['chairs', 'tables', 'sofas', 'cots'].includes(category)) {
        setActiveCategory(category);
      }
    } else {
      setActiveCategory('all');
    }
  }, [location]);
  
  useEffect(() => {
    // Filter products based on active filters
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by stock
    if (inStockOnly) {
      result = result.filter(product => product.inStock);
    }
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // featured
        result.sort((a, b) => (a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1));
    }
    
    setFilteredProducts(result);
  }, [activeCategory, priceRange, inStockOnly, sortBy]);
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };
  
  const resetFilters = () => {
    setPriceRange([0, 50000]);
    setInStockOnly(false);
    setSortBy('featured');
  };
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-8">
          {activeCategory === 'all' ? 'All Products' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-center w-full py-2 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Filters & Sorting
            </button>
          </div>
          
          {/* Sidebar filters - desktop always visible, mobile conditional */}
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Reset All
                </button>
                {/* Mobile close button */}
                <button
                  className="lg:hidden text-gray-500 dark:text-gray-400"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <CategoryFilter activeCategory={activeCategory} />
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">₹{priceRange[0]}</span>
                    <span className="text-gray-600 dark:text-gray-300">₹{priceRange[1]}</span>
                  </div>
                  <div className="flex space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="100"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Availability</h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={() => setInStockOnly(!inStockOnly)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-600 dark:text-gray-300">In Stock Only</span>
                </label>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-700 dark:text-gray-200"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage; 