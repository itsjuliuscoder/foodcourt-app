'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const newsItems = [
  {
    id: 1,
    title: 'The Art of African Cuisine',
    date: 'March 15, 2024',
    image: '/images/news/art-of-african-cusine.png',
    description: 'Discover the rich flavors and traditions of authentic African cooking.',
    author: 'Chef Chioma',
    authorImage: 'https://randomuser.me/api/portraits/men/59.jpg'
  },
  {
    id: 2,
    title: 'Cooking with African Spices',
    date: 'March 12, 2024',
    image: '/images/news/cooking-with-african-cuise.png',
    description: 'Learn how to use traditional African spices to elevate your dishes.',
    author: 'Chef Kemi',
    authorImage: 'https://randomuser.me/api/portraits/women/92.jpg'
  },
  {
    id: 3,
    title: 'Modern African Fusion',
    date: 'March 10, 2024',
    image: '/images/news/modern-african-fusion.png',
    description: 'Exploring contemporary twists on classic African recipes.',
    author: 'Chef Tunde',
    authorImage: 'https://randomuser.me/api/portraits/women/32.jpg'
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recent News & Articles
          <motion.div 
            className="w-24 h-1 bg-[--secondary] mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {newsItems.map((item, index) => (
            <motion.article 
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-2 hover:text-[--primary] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={item.authorImage}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">{item.author}</div>
                    <div className="text-sm text-gray-500">Food Expert</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 