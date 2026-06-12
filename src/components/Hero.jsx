import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      <Navbar />
      
      {/* Parallax & Glows */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-vedam-blue/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-vedam-gold/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 lg:px-16 pt-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block py-1 px-3 rounded-full bg-vedam-blue/10 text-vedam-blue font-bold text-xs tracking-wider uppercase mb-6"
          >
            Digital & AI Technology Company
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight mb-6 text-black">
            We Build. <br/> We Rank. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vedam-blue to-vedam-gold">
              We Automate.
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-lg font-light leading-relaxed">
            Your complete digital growth partner — from high-performance web applications to intelligent AI workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-vedam-blue/20">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-200 text-black rounded-full font-bold text-lg hover:border-black transition-all">
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[500px] lg:h-[700px] flex justify-center items-center"
        >
          {/* Floating AI particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ 
                y: [0, Math.random() * -50, 0], 
                x: [0, Math.random() * 30 - 15, 0] 
              }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-vedam-blue' : 'bg-vedam-gold'} blur-[2px] opacity-60`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`
              }}
            />
          ))}
          
          <img 
            src="/hero.png" 
            alt="AI Tech Professional" 
            className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
