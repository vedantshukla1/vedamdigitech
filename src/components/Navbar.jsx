import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' : 'bg-white py-6 border-b border-transparent'}`}
    >
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Vedam Digitech" className="h-14 md:h-16 w-auto object-contain" />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {links.map(link => (
            <a key={link.name} href={link.href} className={`text-sm font-semibold hover:text-black transition-colors ${link.name === 'Home' ? 'text-black border-b-2 border-black pb-1' : 'text-gray-500'}`}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a href="#contact" className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-900 transition-all shadow-md flex items-center gap-2">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-vedam-cream border-t border-gray-200 px-6 py-4 shadow-xl absolute w-full top-full left-0"
          >
            <div className="flex flex-col space-y-4">
              {links.map(link => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 bg-black text-white text-center text-sm font-semibold rounded-full mt-4 shadow-md flex items-center justify-center gap-2">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
