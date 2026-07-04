import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: 100, label: "Projects Delivered", suffix: "+" },
    { number: 50, label: "Happy Clients", suffix: "+" },
    { number: 5, label: "Years Experience", suffix: "+" },
    { number: 10, label: "AI Solutions Built", suffix: "+" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-vedam-charcoal">
              Ancient Wisdom, <br/> Modern Solutions.
            </h2>
            <div className="w-20 h-1 bg-vedam-charcoal mb-8"></div>
            
            <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
              "Vedam" means Knowledge. We bring that ancient wisdom to modern digital solutions. As a full-service Digital & AI Technology Company based in Lucknow, India, we blend deep technical expertise with cutting-edge AI.
            </p>
            <p className="text-lg text-gray-500 font-light">
              Our mission is to help forward-thinking businesses build scalable software, rank higher organically, and automate their operations for exponential growth.
            </p>
          </motion.div>

          {/* Right Stats & Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-2xl bg-vedam-cream border border-gray-100 hover:border-vedam-gold/30 hover:shadow-xl transition-all group">
                <h3 className="text-5xl font-heading font-extrabold text-vedam-charcoal mb-2 group-hover:text-vedam-gold transition-colors">
                  {inView ? <span>{stat.number}</span> : "0"}
                  {stat.suffix}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
