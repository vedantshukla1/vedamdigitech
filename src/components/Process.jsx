import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code, Rocket, Activity } from 'lucide-react';

const Process = () => {
  const steps = [
    { icon: <Lightbulb />, title: "Discovery & Strategy", desc: "Step 1" },
    { icon: <PenTool />, title: "Design & Planning", desc: "Step 2" },
    { icon: <Code />, title: "Development & Build", desc: "Step 3" },
    { icon: <Rocket />, title: "Launch & Optimize", desc: "Step 4" },
    { icon: <Activity />, title: "Automate & Scale", desc: "Step 5" },
  ];

  return (
    <section id="process" className="py-24 bg-vedam-cream relative border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-vedam-charcoal"
          >
            How We Work
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-vedam-gold mb-6 group-hover:border-vedam-gold group-hover:shadow-lg group-hover:shadow-vedam-gold/20 group-hover:scale-110 transition-all duration-300">
                  {React.cloneElement(step.icon, { className: 'w-8 h-8' })}
                </div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{step.desc}</h4>
                <h3 className="text-xl font-bold font-heading text-vedam-charcoal">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
