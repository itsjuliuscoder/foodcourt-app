'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="py-4 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="block">
            <Image 
              src="/images/logo-foodcentere.png"
              alt="Chiommy Consumables Logo"
              width={200}
              height={53}
              className="h-14 w-auto"
              priority
            />
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Products', 'Recipes', 'About'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Link 
                href={item === 'Home' ? '/' : 
                  `#`
                  //`/${item.toLowerCase()}`
                } 
                className="hover:text-[--primary] transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.select 
            className="text-sm border rounded-full px-3 py-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <option value="us">🇺🇸 USA</option>
            <option value="uk">🇬🇧 UK</option>
            <option value="ca">🇨🇦 Canada</option>
          </motion.select>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
          <motion.button 
            className="md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 