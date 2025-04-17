'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DealSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Products
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured Product 1 */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full md:w-1/2 aspect-square">
              <Image
                src="/images/Jollof-rice-17-720x480.webp"
                alt="Ultimate Jollof Rice"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-[--primary] text-white px-4 py-2 rounded-full text-sm font-bold">
                BEST SELLER
              </div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-4">Ultimate Jollof Rice Kit</h3>
                <p className="text-gray-600 mb-6">
                  Create the perfect party jollof with our premium kit. Includes special long-grain rice, 
                  tomato paste, scotch bonnets, and our secret seasoning mix.
                </p>
                
                <div className="flex gap-8 mb-8">
                  <div>
                    <div className="text-sm text-gray-600">Regular Price</div>
                    <div className="text-2xl font-bold line-through text-gray-400">$49.99</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Special Price</div>
                    <div className="text-2xl font-bold text-[--primary]">$39.99</div>
                  </div>
                </div>
                
                <motion.button 
                  className="btn-primary w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Featured Product 2 */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full md:w-1/2 aspect-square">
              <Image
                src="/images/Jollof-Rice-55-683x1024.webp"
                alt="Party Size Jollof Rice"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-[--secondary] text-black px-4 py-2 rounded-full text-sm font-bold">
                PARTY SIZE
              </div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-4">Party Pack Jollof Kit</h3>
                <p className="text-gray-600 mb-6">
                  Everything you need for large gatherings. Premium ingredients to make the perfect Nigerian 
                  party jollof that serves 20-25 people.
                </p>
                
                <div className="flex gap-8 mb-8">
                  <div>
                    <div className="text-sm text-gray-600">Regular Price</div>
                    <div className="text-2xl font-bold line-through text-gray-400">$89.99</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Party Price</div>
                    <div className="text-2xl font-bold text-[--primary]">$69.99</div>
                  </div>
                </div>
                
                <motion.button 
                  className="btn-primary w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DealSection; 