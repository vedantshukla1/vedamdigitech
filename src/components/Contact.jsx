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
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">Let's build something great together.</h2>
            <p className="text-gray-600 text-lg mb-12">Whether you need a cutting-edge web app, scalable SaaS, or intelligent AI automation, our team is ready to deliver.</p>
            
            <div className="space-y-8 mb-12 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-vedam-blue shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-1">Office</h4>
                  <p className="text-gray-600">Lucknow, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-vedam-blue shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-1">Email Us</h4>
                  <p className="text-gray-600">vedamdigitechoffical@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-vedam-blue shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 89489 48992<br/>+91 86011 89921</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/918948948992" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/vedamdigitech" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-[#E1306C] hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">Name</label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vedam-blue/50 focus:border-vedam-blue transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">Email</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vedam-blue/50 focus:border-vedam-blue transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">Service Needed</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vedam-blue/50 focus:border-vedam-blue transition-all appearance-none">
                  <option>Web Development</option>
                  <option>AI Automation & Agents</option>
                  <option>SaaS Development</option>
                  <option>SEO Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vedam-blue/50 focus:border-vedam-blue transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-vedam-blue text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-vedam-blue/20 flex justify-center items-center gap-2">
                Send to WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
