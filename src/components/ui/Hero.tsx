import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/Premium_Teak_Furniture_Landscape.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="wood-pattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
            <rect width="20" height="20" fill="none" />
            <path d="M0,0 L20,0 L20,2 L0,2 Z" fill="currentColor" className="text-primary-500" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wood-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center py-16 md:py-24">
          {/* Text content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-primary-600 dark:text-primary-400">Premium Teak</span> Furniture
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Crafted with Passion</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover our collection of handcrafted teak furniture, where traditional craftsmanship meets modern design. Built to last generations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/shop" className="btn btn-primary text-center px-8 py-3">
                Shop Collection
              </Link>
              <Link to="/about" className="btn bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-center px-8 py-3">
                Our Story
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-500/20 rounded-lg blur-xl"></div>
              <img 
                src={heroImage} 
                alt="Premium teak furniture" 
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
                <div className="flex flex-col items-center">
                  <span className="text-primary-600 dark:text-primary-400 font-serif font-bold text-xl md:text-2xl">15+ Years</span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">of Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 