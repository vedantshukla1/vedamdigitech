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
      className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0 hidden lg:block mix-blend-multiply opacity-30"
      style={{
        background: 'radial-gradient(circle, rgba(0, 102, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
      }}
      animate={{
        x: mousePosition.x - 192, // half width
        y: mousePosition.y - 192, // half height
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    />
  );
};

export default CursorGlow;
