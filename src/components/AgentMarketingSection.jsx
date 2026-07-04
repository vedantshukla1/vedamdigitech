import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const AgentMarketingSection = ({ title, description, features, ctaText = "Contact Us", onCtaClick }) => {
  return (
    <div className="bg-white py-24 relative overflow-hidden font-sans border-t border-gray-100">
      
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vedam-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vedam-gold/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-gold/10 text-vedam-gold font-bold text-xs tracking-wider uppercase mb-6"
          >
            <Star className="w-4 h-4" /> Unmatched Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-black text-vedam-charcoal mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 hover:border-vedam-gold/30 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-vedam-gold group-hover:text-white transition-colors text-vedam-gold">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-vedam-charcoal mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-vedam-charcoal to-black rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
        >
          {/* Internal gradient elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-vedam-gold/20 rounded-full blur-[60px]"></div>
          
          <div className="relative z-10 flex-1">
            <h3 className="text-2xl md:text-4xl font-black font-heading text-white mb-4">Ready to automate your workflow?</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-xl">Join thousands of businesses saving hours of manual work every week with our intelligent AI agents.</p>
            <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-400">
               <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500"/> No code required</span>
               <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500"/> 24/7 Availability</span>
            </div>
          </div>

          <div className="relative z-10 shrink-0">
            <a href="/#contact" className="px-8 py-4 bg-vedam-gold hover:bg-yellow-600 text-white font-black rounded-xl text-lg shadow-lg shadow-vedam-gold/30 transition-all hover:-translate-y-1 flex items-center gap-2 group">
              {ctaText} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AgentMarketingSection;
