import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon, ShoppingCartIcon, HeartIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { CartContext } from '../context/CartContext';
import { products } from '../data/products';
import ProductGrid from '../components/product/ProductGrid';
import { Product } from '../types/product';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useContext(CartContext);
  
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>('');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.images[0]);
      
      // Find related products (same category, excluding current product)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.images[0],
      });
    }
  };
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <p className="text-gray-600 dark:text-gray-300 text-lg">Product not found.</p>
        <Link to="/shop" className="btn btn-primary mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/shop" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Shop
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Images */}
            <div>
              <motion.div 
                className="relative aspect-square rounded-lg overflow-hidden mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={activeImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}
              </motion.div>
              
              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(image)}
                    className={`aspect-square rounded-md overflow-hidden border-2 ${
                      activeImage === image
                        ? 'border-primary-500'
                        : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    i < Math.floor(product.rating) ? (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <StarOutlineIcon key={i} className="h-5 w-5 text-yellow-400" />
                    )
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                  ({product.reviews} reviews)
                </span>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                {product.discount ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ₹{(product.price - (product.price * product.discount) / 100).toFixed(2)}
                    </span>
                    <span className="ml-2 text-lg text-gray-500 dark:text-gray-400 line-through">
                      ₹{product.price.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ₹{product.price.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {product.description}
              </p>
              
              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Material & Dimensions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Material:</h3>
                  <p className="text-gray-600 dark:text-gray-300">{product.material}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Dimensions:</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    W: {product.dimensions.width}cm x 
                    H: {product.dimensions.height}cm x 
                    D: {product.dimensions.depth}cm
                  </p>
                </div>
              </div>
              
              {/* Availability */}
              <div className="mb-6">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.inStock
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              {/* Add to cart */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    disabled={!product.inStock}
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-gray-800 dark:text-gray-200 min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    disabled={!product.inStock}
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 btn ${
                    product.inStock
                      ? 'btn-primary'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed'
                  } flex items-center justify-center`}
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                
                <button className="p-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <HeartIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8">
              You May Also Like
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage; 