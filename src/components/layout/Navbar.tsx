import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { ShoppingCartIcon, MagnifyingGlassIcon, SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from '../../context/CartContext';
import logoImage from '../../assets/images/kandhaleela-logo.svg';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { totalItems } = useContext(CartContext);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="container-custom">
            <div className="relative flex items-center justify-between h-20">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="flex items-center">
                    
                    <span className="text-primary-600 dark:text-primary-400 text-xl font-serif font-bold">Kandhaleela Timber</span>
                  </Link>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right side icons */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
                {/* Search */}
                <button
                  type="button"
                  className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Dark mode toggle */}
                <button
                  type="button"
                  className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none"
                  onClick={toggleDarkMode}
                >
                  <span className="sr-only">Toggle dark mode</span>
                  {darkMode ? (
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>

                {/* Cart */}
                <Link
                  to="/cart"
                  className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none relative"
                >
                  <span className="sr-only">View cart</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <Transition
            show={searchOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="container-custom py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full p-2 pl-10 pr-4 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 absolute left-3 top-3" />
                <button
                  className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400"
                  onClick={() => setSearchOpen(false)}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </Transition>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-500 dark:hover:text-primary-400"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar; 