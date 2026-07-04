import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const stats = [
    { number: 100, label: "Deliveries", suffix: "+" },
    { number: 50, label: "Clients", suffix: "+" },
    { number: 5, label: "Years", suffix: "+" },
    { number: 10, label: "AI Solutions", suffix: "+" },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-vedam-charcoal mb-2 flex items-center">
                <AnimatedCounter from={0} to={stat.number} />
                <span className="text-vedam-gold">{stat.suffix}</span>
              </h3>
              <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
