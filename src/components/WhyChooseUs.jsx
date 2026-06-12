import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Layers, Target, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <BrainCircuit />, title: "AI-First Approach" },
    { icon: <Layers />, title: "End-to-End Solutions" },
    { icon: <Target />, title: "Proven Results" },
    { icon: <HeadphonesIcon />, title: "Dedicated Support" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-black"
          >
            Why Choose Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-vedam-blue hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-vedam-blue mb-6">
                {React.cloneElement(feature.icon, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-xl font-bold font-heading text-black">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
