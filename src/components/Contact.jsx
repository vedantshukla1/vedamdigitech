import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "918948948992";
    const text = `*New Inquiry via Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Service Needed:* ${formData.service}\n*Message:* ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-vedam-cream">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">Let's build something great together.</h2>
            <p className="text-gray-600 text-lg mb-12">Whether you need a cutting-edge web app, custom software, or intelligent AI automation, our team is ready to deliver.</p>
            
            <div className="space-y-8 mb-12 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center text-black shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-black mb-1">Office</h4>
                  <p className="text-gray-500 text-sm">Lucknow, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center text-black shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-black mb-1">Email Us</h4>
                  <p className="text-gray-500 text-sm">vedamdigitechoffical@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center text-black shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-black mb-1">Call Us</h4>
                  <p className="text-gray-500 text-sm">+91 89489 48992<br/>+91 86011 89921</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/918948948992" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/vedamdigitech" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-vedam-cream p-8 md:p-12 border border-vedam-gold/20 rounded-3xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs font-serif italic tracking-wider capitalize text-gray-500 mb-2">Name</label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-vedam-gold transition-colors rounded-xl placeholder-gray-400 text-vedam-charcoal" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-serif italic tracking-wider capitalize text-gray-500 mb-2">Email</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-vedam-gold transition-colors rounded-xl placeholder-gray-400 text-vedam-charcoal" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-serif italic tracking-wider capitalize text-gray-500 mb-2">Service Needed</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-vedam-gold transition-colors rounded-xl text-vedam-charcoal appearance-none">
                  <option>Web Development</option>
                  <option>AI Automation & Agents</option>
                  <option>Custom Software</option>
                  <option>SEO Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-serif italic tracking-wider capitalize text-gray-500 mb-2">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-vedam-gold transition-colors rounded-xl placeholder-gray-400 text-vedam-charcoal resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-vedam-charcoal text-white font-serif text-lg rounded-xl hover:bg-black transition-colors flex justify-center items-center gap-2 mt-4 shadow-sm">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
