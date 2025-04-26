'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your Favorite <br />
              <motion.span 
                className="text-[--primary]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                African Dishes
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Experience the rich tastes of African cuisine, delivered right to your doorstep. 
              Fresh, authentic ingredients for your favorite dishes.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/2348068845219', '_blank')}
              >
                Order Now
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Menu
              </motion.button>
            </motion.div>
            <motion.div 
              className="mt-8 flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { icon: '🚚', text: 'Fast Delivery' },
                { icon: '✨', text: 'Best Quality' },
                { icon: '🌍', text: 'Wide Selection' }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1 + (index * 0.1) }}
                >
                  <span className="text-[--primary]">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {[
                  { src: '/images/food-centre-img-1.png', alt: 'Delicious African Dish 1' },
                  { src: '/images/food-centre-img-2.png', alt: 'Delicious African Dish 2' }
                ].map((img, index) => (
                  <motion.div 
                    key={img.alt}
                    className="rounded-2xl overflow-hidden aspect-square relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
                  >
                    <Image 
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden aspect-square relative">
                  <Image 
                    src="/images/food-centre-img-3.png"
                    alt="Delicious African Dish 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-[--secondary] text-black rounded-full p-4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="font-bold">15% OFF</p>
              <p className="text-sm">First Order</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 