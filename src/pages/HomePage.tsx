import React from 'react';
import Hero from '../components/ui/Hero';
import Features from '../components/ui/Features';
import ProductGrid from '../components/product/ProductGrid';
import Testimonials from '../components/ui/Testimonials';
import CallToAction from '../components/ui/CallToAction';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.isFeatured);

  return (
    <div>
      <Hero />
      <Features />
      
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-primary-600 dark:text-primary-400">Featured</span> Collection
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our most popular teak furniture pieces, handcrafted with precision and care.
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage; 