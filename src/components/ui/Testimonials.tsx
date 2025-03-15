import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    content: "The dining table we purchased from Kandha Leela Timbers has become the centerpiece of our home. The craftsmanship is exceptional, and the wood grain is simply beautiful. It's clear that this piece will be with our family for generations.",
    author: "Priya Sharma",
    role: "Interior Designer",
    rating: 5,
    image: "/images/testimonials/testimonial-1.jpg"
  },
  {
    id: 2,
    content: "I've furnished my entire living room with pieces from Kandha Leela Timbers. The quality is unmatched, and their customer service is exceptional. They even customized the dimensions of my sofa to fit perfectly in my space.",
    author: "Rajesh Kumar",
    role: "Homeowner",
    rating: 5,
    image: "/images/testimonials/testimonial-2.jpg"
  },
  {
    id: 3,
    content: "As someone who appreciates traditional craftsmanship, I was impressed by the attention to detail in every piece I purchased. The joinery is flawless, and the finish is smooth and rich. Worth every rupee!",
    author: "Ananya Patel",
    role: "Architect",
    rating: 5,
    image: "/images/testimonials/testimonial-3.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <></>
    // <div className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
    //   <div className="container-custom">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
    //         What Our <span className="text-primary-600 dark:text-primary-400">Customers</span> Say
    //       </h2>
    //       <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
    //         Don't just take our word for it. Here's what our customers have to say about their experience with Kandha Leela Timbers.
    //       </p>
    //     </div>

    //     <div className="relative max-w-4xl mx-auto">
    //       <AnimatePresence mode="wait">
    //         <motion.div
    //           key={currentIndex}
    //           initial={{ opacity: 0, x: 100 }}
    //           animate={{ opacity: 1, x: 0 }}
    //           exit={{ opacity: 0, x: -100 }}
    //           transition={{ duration: 0.5 }}
    //           className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-10"
    //         >
    //           <div className="flex flex-col md:flex-row items-center">
    //             <div className="mb-6 md:mb-0 md:mr-8">
    //               <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900">
    //                 <img
    //                   src={testimonials[currentIndex].image || "/images/testimonials/placeholder.jpg"}
    //                   alt={testimonials[currentIndex].author}
    //                   className="w-full h-full object-cover"
    //                 />
    //               </div>
    //             </div>
    //             <div className="flex-1">
    //               <div className="flex mb-4">
    //                 {[...Array(5)].map((_, i) => (
    //                   <StarIcon
    //                     key={i}
    //                     className={`h-5 w-5 ${
    //                       i < testimonials[currentIndex].rating
    //                         ? 'text-yellow-400'
    //                         : 'text-gray-300'
    //                     }`}
    //                   />
    //                 ))}
    //               </div>
    //               <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
    //                 "{testimonials[currentIndex].content}"
    //               </blockquote>
    //               <div>
    //                 <p className="font-bold text-gray-900 dark:text-white">
    //                   {testimonials[currentIndex].author}
    //                 </p>
    //                 <p className="text-gray-600 dark:text-gray-400">
    //                   {testimonials[currentIndex].role}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </motion.div>
    //       </AnimatePresence>

    //       {/* Navigation buttons */}
    //       <div className="flex justify-center mt-8 space-x-4">
    //         <button
    //           onClick={prevTestimonial}
    //           className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
    //           aria-label="Previous testimonial"
    //         >
    //           <ChevronLeftIcon className="h-6 w-6 text-primary-500" />
    //         </button>
    //         <div className="flex space-x-2">
    //           {testimonials.map((_, index) => (
    //             <button
    //               key={index}
    //               onClick={() => setCurrentIndex(index)}
    //               className={`w-3 h-3 rounded-full ${
    //                 currentIndex === index
    //                   ? 'bg-primary-500'
    //                   : 'bg-gray-300 dark:bg-gray-600'
    //               }`}
    //               aria-label={`Go to testimonial ${index + 1}`}
    //             />
    //           ))}
    //         </div>
    //         <button
    //           onClick={nextTestimonial}
    //           className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
    //           aria-label="Next testimonial"
    //         >
    //           <ChevronRightIcon className="h-6 w-6 text-primary-500" />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Testimonials; 