import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cloud, Search, MapPin, Bot, Cpu } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    { icon: <Monitor />, title: "Web Development", description: "Custom fast websites built to convert" },
    { icon: <Cloud />, title: "Custom Software", description: "Scalable software solutions for growth" },
    { icon: <Bot />, title: "AI Automation", description: "Automate tasks, save time and money" },
    { icon: <Cpu />, title: "AI Workflows & Agents", description: "Intelligent agents working 24/7" }
  ];

  return (
    <section id="services" className="py-24 bg-white relative border-t border-vedam-cream">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-black"
          >
            Our Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-vedam-cream p-10 rounded-2xl border border-vedam-gold/20 hover:border-vedam-gold transition-colors duration-500 group flex flex-col items-start shadow-sm hover:shadow-lg"
            >
              <div className="mb-6 text-vedam-charcoal group-hover:text-vedam-gold transition-colors duration-500">
                {React.cloneElement(service.icon, { className: 'w-8 h-8 stroke-[1.2]' })}
              </div>
              <h3 className="text-xl font-heading mb-3 text-vedam-charcoal">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
