import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary-600 dark:bg-primary-800 py-16 md:py-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl">
              Browse our collection of premium teak furniture or contact us for custom orders. 
              Our team is ready to help you find the perfect pieces for your home.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/shop" 
              className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-center"
            >
              Shop Now
            </Link>
            <Link 
              to="/contact" 
              className="btn border-2 border-white text-white hover:bg-primary-700 dark:hover:bg-primary-900 px-8 py-3 text-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 