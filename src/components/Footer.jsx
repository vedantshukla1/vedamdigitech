import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img src="/logo.png" alt="Vedam Digitech" className="h-16 md:h-20 w-auto object-contain" />
            </a>
            <p className="text-gray-500 max-w-sm mb-6">
              A full-service Digital & AI Technology Company building scalable solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/918948948992" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/vedamdigitech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-vedam-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-vedam-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-vedam-gold transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-500 hover:text-vedam-gold transition-colors">Projects</a></li>
              <li><a href="#process" className="text-gray-500 hover:text-vedam-gold transition-colors">Process</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-vedam-charcoal mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-vedam-gold transition-colors">AI Automation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-vedam-gold transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-500 hover:text-vedam-gold transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-gray-500 hover:text-vedam-gold transition-colors">SEO & Marketing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Vedam Digitech. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-vedam-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-vedam-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
