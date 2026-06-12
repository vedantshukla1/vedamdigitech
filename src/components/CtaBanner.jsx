import React from 'react';
import { motion } from 'framer-motion';

const CtaBanner = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-vedam-blue/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-vedam-gold/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-8"
        >
          Ready to Transform <br className="hidden md:block" />
          Your Business?
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#contact" className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-xl">
            Start a Project
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-bold text-lg rounded-full hover:border-white transition-colors">
            Book Free Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
