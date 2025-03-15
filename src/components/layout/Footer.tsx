import React from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import logoImage from '../../assets/images/kandhaleela-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              
              <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400">Kandhaleela Timber</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Crafting premium teak furniture with traditional craftsmanship and modern design since 2000.
            </p>
            <div className="flex space-x-4">
              <a href="https://m.facebook.com/p/Kandhaleela-timbers-100075829694698/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fkandha_leela_timbers%2F&psig=AOvVaw3g4GnS3hH21-f1ySqXiUwM&ust=1742125919534000&source=images&cd=vfe&opi=89978449&ved=0CAYQrpoMahcKEwjwrdeYjIyMAxUAAAAAHQAAAAAQBA" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
         
              <a href="https://www.youtube.com/@kandhaleelatimbers8639" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Shop</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/chairs" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Chairs</Link>
              </li>
              <li>
                <Link to="/category/tables" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Tables</Link>
              </li>
              <li>
                <Link to="/category/sofas" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Sofas</Link>
              </li>
              <li>
                <Link to="/category/cots" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Cots</Link>
              </li>
              <li>
                <Link to="/category/custom" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Custom Furniture</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-primary-500 dark:text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                Kandha Leela Timbers<br />
                South Street Thoothukudi main road Ettayapuram, Tamil Nadu 628902
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  +91 9443562646
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2 flex-shrink-0" />
                <a href="mailto:ramseetha4249@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                ramseetha4249@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Kandhaleela Timber. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy" className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary-500 dark:hover:text-primary-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary-500 dark:hover:text-primary-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary-500 dark:hover:text-primary-400">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 