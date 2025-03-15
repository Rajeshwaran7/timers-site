import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/outline';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-serif font-bold text-primary-500 dark:text-primary-400">404</h1>
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mt-4 mb-6">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary inline-flex items-center">
              <HomeIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 