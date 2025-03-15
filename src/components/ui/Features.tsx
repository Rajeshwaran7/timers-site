import React from 'react';
import { motion } from 'framer-motion';
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  CubeIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Premium Quality',
    description: 'Handcrafted from the finest teak wood, ensuring durability and timeless beauty.',
    icon: SparklesIcon,
  },
  {
    name: 'Free Shipping',
    description: 'Enjoy free shipping on all orders within India.',
    icon: TruckIcon,
  },
  {
    name: '10-Year Warranty',
    description: 'We stand behind our craftsmanship with an industry-leading warranty.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Custom Orders',
    description: 'Need something special? We offer custom furniture tailored to your specifications.',
    icon: CubeIcon,
  },
];

const Features: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-primary-600 dark:text-primary-400">Kandha Leela</span> Timbers?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine traditional craftsmanship with modern design to create furniture that lasts for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary-100 dark:bg-primary-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 