'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    guests: '',
    fullName: '',
    phoneNo: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      guests: '',
      fullName: '',
      phoneNo: '',
      date: '',
      time: ''
    });

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div 
            className="text-[--primary] uppercase font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            GET IN TOUCH
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reservation Table & Enjoy<br />
            Dining Table
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left p-6 bg-white rounded-xl shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-[--secondary] rounded-full flex items-center justify-center shrink-0">
              <span className="text-3xl">📞</span>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">for booking</div>
              <div className="font-semibold text-lg">+1 (850) 344 0 66</div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left p-6 bg-white rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-[--secondary] rounded-full flex items-center justify-center shrink-0">
              <span className="text-3xl">✉️</span>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">for home delivery</div>
              <div className="font-semibold text-lg break-all">chiommyconsumables_@gmail.com</div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left p-6 bg-white rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-[--secondary] rounded-full flex items-center justify-center shrink-0">
              <span className="text-3xl">📍</span>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">location</div>
              <div className="font-semibold text-lg">New Street Town 2512x (U.S)</div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-12 left-0 right-0 bg-green-100 text-green-700 px-4 py-3 rounded-lg text-center"
                >
                  Reservation submitted successfully! We&apos;ll contact you shortly.
                </motion.div>
              )}
            </AnimatePresence>

            <input
              type="number"
              name="guests"
              placeholder="No of Guest"
              className="w-full p-3 rounded-lg border border-gray-200"
              value={formData.guests}
              onChange={handleChange}
              required
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-gray-200"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phoneNo"
                placeholder="Phone No"
                className="w-full p-3 rounded-lg border border-gray-200"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="date"
                name="date"
                className="w-full p-3 rounded-lg border border-gray-200"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="time"
                className="w-full p-3 rounded-lg border border-gray-200"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary relative w-full md:w-auto md:px-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : 'Book Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection; 