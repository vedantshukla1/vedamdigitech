import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 border border-vedam-gold rounded-full pointer-events-none z-50 hidden lg:flex items-center justify-center mix-blend-difference"
      animate={{
        x: mousePosition.x - 20, // center offset (half of 40px)
        y: mousePosition.y - 20,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.1
      }}
    >
      <div className="w-1.5 h-1.5 bg-vedam-gold rounded-full"></div>
    </motion.div>
  );
};

export default CursorGlow;
