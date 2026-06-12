import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Smartphone, Globe, Code2, Info } from 'lucide-react';

const GenericWebPage = ({ title, description, image, onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-gray-50 relative pb-24 overflow-hidden font-sans text-gray-900">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><Globe className="w-8 h-8 text-vedam-blue" /><h2 className="text-xl md:text-2xl font-bold font-heading text-black">{title}</h2></div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Site</button>
      </header>

      {/* Demo Notice Banner */}
      <div className="bg-blue-50 border-b border-blue-100 px-6 py-3 text-center z-40 relative">
        <p className="text-blue-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is just a demonstration. Your actual platform will be 100% custom-built according to your specific business needs.</span>
        </p>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vedam-blue/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-16 pt-24 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-blue/10 text-vedam-blue font-bold text-xs tracking-wider uppercase mb-6">
          <Code2 className="w-4 h-4" /> Premium Web Architecture
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-bold text-black mb-8">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          {description}
        </motion.p>
        
        {/* Laptop Mockup */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-5xl mx-auto mb-24">
          <div className="bg-gray-900 p-3 md:p-4 rounded-t-[2rem] md:rounded-t-[3rem] shadow-2xl relative mx-auto" style={{ maxWidth: '85%' }}>
            {/* Camera dot */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
            {/* Screen */}
            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden aspect-video relative group">
              <img src={image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80"} alt={title} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-2xl hover:scale-105 transition-transform">Interactive Preview Coming Soon</button>
              </div>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="h-4 md:h-6 bg-gray-300 rounded-b-3xl mx-auto relative shadow-xl w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-2 md:h-3 bg-gray-400 rounded-b-xl"></div>
          </div>
        </motion.div>

        {/* Features */}
        <div id="how-it-works" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-vedam-blue/10 text-vedam-blue rounded-xl flex items-center justify-center mb-6"><Smartphone className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold font-heading mb-3">Mobile-First Design</h3>
            <p className="text-gray-600">Engineered to look and perform flawlessly on every screen size, guaranteeing maximum conversion rates on mobile devices.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-vedam-blue/10 text-vedam-blue rounded-xl flex items-center justify-center mb-6"><Monitor className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold font-heading mb-3">Ultra-Fast Load Times</h3>
            <p className="text-gray-600">Built with next-gen frameworks ensuring your platform loads in under 2 seconds, boosting SEO and user retention.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-vedam-blue/10 text-vedam-blue rounded-xl flex items-center justify-center mb-6"><Globe className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold font-heading mb-3">Secure & Scalable</h3>
            <p className="text-gray-600">Enterprise-grade security and a backend architecture capable of handling millions of users without breaking a sweat.</p>
          </div>
        </div>

        {/* Request Similar Project CTA */}
        <div className="mt-24 text-center relative z-10 pb-12">
          <button 
            onClick={() => { onBack(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="inline-flex items-center justify-center px-10 py-5 bg-vedam-blue text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-all shadow-2xl hover:shadow-vedam-blue/30 hover:-translate-y-1"
          >
            Request Similar Project
          </button>
        </div>
      </main>
    </div>
  );
};
export default GenericWebPage;
