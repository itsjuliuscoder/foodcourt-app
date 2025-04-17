'use client';

import { useState } from 'react';

const productData = {
  'fresh-foods': [
    { name: 'Fresh Catfish', price: 24.99, description: 'Premium smoked catfish, perfect for pepper soup' },
    { name: 'Goat Meat', price: 29.99, description: 'Fresh cut and cleaned goat meat' },
  ],
  'sweeteners-powders': [
    { name: 'Bonga Fish Powder', price: 13.99, description: 'Ground dried bonga fish, perfect for adding rich umami flavor' },
    { name: 'Stockfish Powder', price: 15.99, description: 'Premium ground stockfish for authentic soup taste' },
    { name: 'Prawn Powder', price: 16.99, description: 'Dried ground prawns, adds delicate seafood flavor' },
    { name: 'Crayfish Powder', price: 12.99, description: 'Finely ground crayfish, essential for traditional soups' },
  ],
  'pap-powders': [
    { name: 'Mixed Grain Pap', price: 13.99, description: 'Blend of millet, guinea corn, and maize for a nutritious breakfast' },
    { name: 'Yellow Corn Pap', price: 11.99, description: 'Traditional yellow corn pap, rich in vitamins and minerals' },
    { name: 'White Corn Pap', price: 11.99, description: 'Classic white corn pap, smooth and perfect for breakfast' },
    { name: 'Nutty Pap', price: 14.99, description: 'Enriched with tiger nuts and dates for extra nutrition' },
    { name: 'Fruity Pap', price: 14.99, description: 'Blended with natural fruit extracts for a sweet taste' },
  ],
  'spices-seasonings': [
    { name: 'Pepper Soup Spice', price: 11.99, description: 'Traditional blend for authentic Nigerian pepper soup' },
    { name: 'Suya Spice', price: 9.99, description: 'Perfect blend for Nigerian street-style barbecue' },
    { name: 'Jollof Spice', price: 10.99, description: 'Special seasoning mix for the perfect jollof rice' },
    { name: 'Banga Spice', price: 12.99, description: 'Complete spice mix for traditional Banga soup' },
    { name: 'Nsala Spice', price: 11.99, description: 'Authentic white soup seasoning blend' },
    { name: 'Cameroon Pepper', price: 12.99, description: 'Hot and flavorful pepper powder' },
    { name: 'Banga / Palm Pulp', price: 14.99, description: 'Premium palm fruit extract for delicious Banga soup' },
    { name: 'Egusi Seeds / Powder', price: 16.99, description: 'Ground melon seeds, perfect for Egusi soup' },
    { name: 'Ogbono Seeds / Powder', price: 18.99, description: 'Ground Ogbono seeds for authentic Nigerian soups' },
  ],
  'dehydrated-vegetables': [
    { name: 'Ugu (Pumpkin Leaves)', price: 8.99, description: 'Dried pumpkin leaves, perfect for soups and stews' },
    { name: 'Oha Leaves', price: 9.99, description: 'Traditional Igbo soup leaves, rich in nutrients' },
    { name: 'Ewedu', price: 8.99, description: 'Dried jute leaves, essential for Yoruba cuisine' },
    { name: 'Ukazi Leaves', price: 9.99, description: 'Wild erb leaves for traditional soups' },
    { name: 'Uziza Leaves', price: 8.99, description: 'Aromatic pepper leaves for soups' },
    { name: 'Bitter Leaf', price: 7.99, description: 'Cleaned and dried bitter leaves for soups' },
    { name: 'Atama Leaves', price: 9.99, description: 'Traditional leaves for Efik/Ibibio soups' },
    { name: 'Utazi Leaves', price: 8.99, description: 'Bitter-sweet leaves for soups and pepper soup' },
    { name: 'Scent Leaves', price: 7.99, description: 'Aromatic leaves for traditional Nigerian dishes' },
  ],
  'grains-flours': [
    { name: 'Ijebu Garri', price: 15.99, description: 'Premium cassava flakes, perfect for cereal or eba' },
    { name: 'Poundo Yam Flour', price: 19.99, description: 'Smooth and tasty pounded yam flour' },
    { name: 'Ede Powder', price: 17.99, description: 'Cocoyam flour, perfect for thickening soups' },
    { name: 'Achi Flour', price: 16.99, description: 'Traditional thickener for various Nigerian soups' },
    { name: 'Ofor Flour', price: 16.99, description: 'Natural soup thickener, adds authentic texture' },
  ]
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('fresh-foods');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center">Our Product Categories</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(productData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeTab === tab
                  ? 'bg-[--primary] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.split('-').join(' ')}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {productData[activeTab as keyof typeof productData].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-start group hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-[--primary] transition-colors">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <div className="text-[--primary] font-bold">
                ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="btn-secondary">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection; 