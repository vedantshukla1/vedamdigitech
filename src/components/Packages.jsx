import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Rocket, Building2 } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Starter Digital Pack",
      price: "Custom",
      features: ["Custom Website", "Basic SEO setup", "Google My Business", "Contact Forms", "1 Month Support"],
      isPopular: false
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "AI Business Pack",
      price: "Custom",
      features: ["Advanced Web App", "AI Chatbot Integration", "Local SEO Monthly", "Automated Workflows", "3 Months Support"],
      isPopular: true
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Full Growth Pack",
      price: "Custom",
      features: ["Custom Software / Mobile App Build", "Custom AI Agents (24/7)", "Enterprise SEO Strategy", "Full Automation Setup", "Priority 24/7 Support"],
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-vedam-charcoal mb-4"
          >
            Our Packages
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative bg-white rounded-3xl p-8 border ${pkg.isPopular ? 'border-vedam-gold shadow-2xl shadow-vedam-gold/10 scale-105 z-10 py-12' : 'border-gray-100 shadow-lg'}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-vedam-charcoal text-white px-4 py-1 rounded-full text-sm font-bold shadow-md tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${pkg.isPopular ? 'bg-vedam-charcoal text-white' : 'bg-vedam-cream text-vedam-gold'}`}>
                {pkg.icon}
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-vedam-charcoal mb-2">{pkg.title}</h3>
              
              <ul className="space-y-4 mb-8 mt-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${pkg.isPopular ? 'text-vedam-gold' : 'text-gray-400'}`} />
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  const phone = "918948948992";
                  const text = `Hi Vedam Digitech! I am interested in the *${pkg.title}*. Can we discuss the details?`;
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
                }}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${pkg.isPopular ? 'bg-vedam-charcoal text-white hover:bg-black shadow-md hover:shadow-xl' : 'bg-vedam-cream text-vedam-charcoal hover:bg-gray-200'}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
