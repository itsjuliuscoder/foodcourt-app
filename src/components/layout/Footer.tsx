'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Restaurant Info */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Link href="/" className="block">
                <Image 
                  src="/images/logo-chi.png"
                  alt="Chiommy Consumables Logo"
                  width={350}
                  height={120}
                  className="h-20 md:h-24 w-auto brightness-0 invert"
                />
              </Link>
            </motion.div>
            <motion.p 
              className="text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tuesday - Saturday: 12:00pm - 23:00pm<br />
              Closed on Sunday
            </motion.p>
          </div>

          {/* About Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[--primary]">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[--primary]">Special Dishes</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[--primary]">Reservation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[--primary]">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* Menu Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[--primary]">African Dishes</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[--primary]">Local Delicacies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[--primary]">Special Menu</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[--primary]">Snacks</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[--primary]">Ingredients</a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Get recent news and updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500"
              />
              <button type="submit" className="btn-primary w-full">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-gray-800 mt-8 text-center md:flex md:justify-between text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div>© 2024 Chiommy Consumables | All Rights Reserved</div>
          <div className="mt-4 md:mt-0 flex gap-6 justify-center items-center">
            <motion.a 
              href="#" 
              className="hover:text-[--primary] text-gray-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebookF size={20} />
            </motion.a>
            <motion.a 
              href="https://instagram.com/chiommyconsumables_?igshid=MzNlNGNkZWQ4Mg==" 
              className="hover:text-[--primary] text-gray-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 