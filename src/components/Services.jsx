import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cloud, Search, MapPin, Bot, Cpu } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    { icon: <Monitor />, title: "Web Development", description: "Custom fast websites built to convert" },
    { icon: <Smartphone />, title: "App Development", description: "iOS & Android apps users love" },
    { icon: <Cloud />, title: "SaaS Development", description: "Scalable software products for growth" },
    { icon: <Search />, title: "SEO", description: "Rank higher, get found, grow organically" },
    { icon: <MapPin />, title: "Google Maps SEO", description: "Dominate local search results" },
    { icon: <Bot />, title: "AI Automation", description: "Automate tasks, save time and money" },
    { icon: <Cpu />, title: "AI Workflows & Agents", description: "Intelligent agents working 24/7" }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-black"
          >
            Our Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-transparent hover:border-vedam-blue hover:shadow-vedam-blue/10"
            >
              <div className="w-16 h-16 rounded-xl bg-vedam-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-vedam-blue">
                {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-black">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
