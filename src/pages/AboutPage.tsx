import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-primary-600 dark:text-primary-400">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Crafting premium teak furniture with traditional craftsmanship and modern design since 2000.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Our History */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Our History
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Kandha Leela Timbers was founded in 2000 by master craftsman Karuppasamy in the Ettayapuram, Tamil Nadu. What began as a small workshop with just three artisans has grown into one of best furniture manufacturers.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For over 2 decades, we have remained committed to our founding principles: exceptional craftsmanship, sustainable sourcing, and timeless design. Each piece of furniture that leaves our workshop carries with it the legacy of traditional woodworking techniques passed down through generations.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, under the leadership of the second generation of the Kandha family, we continue to innovate while honoring our heritage, creating furniture that stands the test of time both in quality and design.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary-500/20 rounded-lg blur-xl"></div>
              <img 
                src="/images/about/workshop.jpg" 
                alt="Our workshop" 
                className="relative rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the beauty of handcrafted furniture. Each piece is meticulously created by our skilled artisans, many of whom have been with us for decades.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We source our teak from responsibly managed forests and are committed to minimizing waste. For every tree used, we ensure another is planted.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Heritage</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We honor traditional woodworking techniques while embracing modern design principles, creating furniture that bridges the gap between past and present.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      {/* <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The passionate people behind our beautiful furniture
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="/images/team/team-1.jpg" 
                  alt="Vikram Kandha" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Vikram Kandha</h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">CEO & Master Craftsman</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Second-generation woodworker carrying forward his father's legacy with a vision for the future.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="/images/team/team-2.jpg" 
                  alt="Priya Nair" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Priya Nair</h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">Head Designer</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Award-winning furniture designer with a passion for blending traditional elements with contemporary aesthetics.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="/images/team/team-3.jpg" 
                  alt="Rajan Iyer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Rajan Iyer</h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">Production Manager</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                With over 25 years of experience, Rajan ensures every piece meets our exacting quality standards.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="/images/team/team-4.jpg" 
                  alt="Ananya Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ananya Sharma</h3>
              <p className="text-primary-600 dark:text-primary-400 mb-2">Customer Experience</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Dedicated to ensuring every customer finds the perfect piece and has an exceptional experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}
      
      {/* CTA */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Visit Our Showroom
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Experience the beauty and quality of our furniture in person. Our showroom in Ettayapuram is open Monday through Saturday, 10am to 7pm.
            </p>
            <Link 
              to="/contact" 
              className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-center inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 