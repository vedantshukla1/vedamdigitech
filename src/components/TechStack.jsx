import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techs = [
    "React", "Next.js", "Node.js", "Flutter", "Python", "OpenAI",
    "LangChain", "WordPress", "Firebase", "AWS", "MongoDB",
    "Figma", "n8n", "Make.com", "Supabase", "Tailwind CSS"
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-16 mb-10 text-center">
        <h2 className="text-3xl font-heading font-bold text-black">Our Tech Stack</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <span key={index} className="mx-8 text-2xl font-bold text-gray-300 hover:text-vedam-blue transition-colors cursor-pointer">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
