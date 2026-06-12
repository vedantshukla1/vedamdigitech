import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: "Rahul S.", company: "TechFlow SaaS", text: "Vedam Digitech completely transformed our user acquisition. Their AI lead gen system booked 40 meetings in the first month.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
    { name: "Priya M.", company: "Elevate Real Estate", text: "The new website is beautiful and the local SEO got us ranking #1 on Maps within 3 months. Outstanding ROI.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
    { name: "Vikram K.", company: "Global EduTech", text: "They built a highly scalable LMS for us. The automated workflows saved our team 20 hours a week.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
    { name: "Sneha R.", company: "Boutique Retail", text: "The e-commerce store with AI recommendations doubled our average order value. Absolutely brilliant work.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" },
    { name: "Anand P.", company: "Legal Advisory Firm", text: "Very professional team. They delivered our client portal on time and the security features are top-notch.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-black"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button onClick={prev} className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-black hover:bg-vedam-blue hover:text-white transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button onClick={next} className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-black hover:bg-vedam-blue hover:text-white transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-gray-100 rotate-180" />
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={current}
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-6 text-vedam-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                
                <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-8">
                  "{testimonials[current].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img src={testimonials[current].image} alt={testimonials[current].name} className="w-16 h-16 rounded-full object-cover border-2 border-vedam-blue/20" />
                  <div>
                    <h4 className="text-lg font-bold text-black font-heading">{testimonials[current].name}</h4>
                    <p className="text-gray-500 font-medium">{testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
