import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, Maximize2, Minimize2, Lock, Menu, Info } from 'lucide-react';

const MinimalistDemoPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [isFrontendFullscreen, setIsFrontendFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative pb-24 font-sans text-gray-900">
      <header className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Monitor className="w-8 h-8 text-black" />
          <h2 className="text-xl md:text-2xl font-bold font-heading">Minimalist Web Design</h2>
        </div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
      </header>

      {/* Demo Notice Banner */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 text-center z-40 relative">
        <p className="text-gray-600 font-medium text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is a frontend demonstration of our minimalist design capabilities.</span>
        </p>
      </div>

      <section className="pt-20 pb-12 px-6 lg:px-16 text-center max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-light tracking-tight text-black mb-6">Pure Simplicity</motion.h1>
        <p className="text-xl text-gray-500 font-light">A pristine, distraction-free digital experience that elevates your brand identity.</p>
      </section>

      <section className="py-16 px-6 lg:px-16 bg-white relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium text-sm mb-6">
            <Monitor className="w-4 h-4"/> Live Website Simulator
          </div>
        </div>

        {/* Browser Mockup Wrapper */}
        <motion.div layout className={`mx-auto bg-white border border-gray-200 shadow-xl overflow-hidden flex flex-col transition-all duration-500 z-50 ${isFrontendFullscreen ? 'fixed inset-0 w-full h-full rounded-none m-0' : 'max-w-6xl h-[800px] rounded-2xl relative'}`}>
          {/* Browser Chrome Header */}
          <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
            <div className="bg-white border border-gray-200 rounded-md px-4 py-1 text-xs text-gray-400 font-medium flex-1 max-w-md text-center mx-4 flex items-center justify-center gap-2">
              <Lock className="w-3 h-3 text-gray-400"/> https://minimal.studio
            </div>
            <button onClick={() => setIsFrontendFullscreen(!isFrontendFullscreen)} className="p-1.5 hover:bg-gray-200 rounded text-gray-400 transition-colors">
              {isFrontendFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Actual Simulated Website Content (Minimalist) */}
          <div className="flex-1 overflow-auto bg-white text-left font-sans text-gray-900">
            
            {/* Simulated Navbar */}
            <nav className="py-10 px-12 flex justify-between items-center bg-white sticky top-0 z-40">
              <div className="font-serif text-2xl tracking-widest font-light">STUDIO.</div>
              <div className="hidden md:flex gap-12 text-xs uppercase tracking-widest text-gray-400">
                <a href="#" className="hover:text-black transition-colors">Work</a>
                <a href="#" className="hover:text-black transition-colors">Studio</a>
                <a href="#" className="hover:text-black transition-colors">Journal</a>
                <a href="#" className="hover:text-black transition-colors">Contact</a>
              </div>
              <Menu className="w-6 h-6 text-black md:hidden"/>
            </nav>

            {/* Simulated Content */}
            <div className="max-w-5xl mx-auto px-12 py-32 flex flex-col items-center text-center">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-6xl md:text-8xl font-light tracking-tighter leading-none mb-10">
                Less is <br/><span className="italic text-gray-400">More.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed font-light mb-16">
                We craft digital experiences that strip away the unnecessary, leaving only what truly matters.
              </motion.p>
              
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.6, duration: 1 }}
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1200&q=80" 
                className="w-full h-[600px] object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                alt="Minimal Architecture"
              />
            </div>

            <footer className="py-20 px-12 border-t border-gray-100 flex justify-between items-center text-xs uppercase tracking-widest text-gray-400">
              <div>© 2026 Studio</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-black">Instagram</a>
                <a href="#" className="hover:text-black">Twitter</a>
              </div>
            </footer>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MinimalistDemoPage;
