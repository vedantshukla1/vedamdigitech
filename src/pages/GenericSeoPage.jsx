import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Search, BarChart3, Target, Info } from 'lucide-react';

const GenericSeoPage = ({ title, description, image, onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-white relative pb-24 overflow-hidden font-sans text-gray-900">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><TrendingUp className="w-8 h-8 text-vedam-blue" /><h2 className="text-xl md:text-2xl font-bold font-heading text-black">{title}</h2></div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Site</button>
      </header>

      {/* Demo Notice Banner */}
      <div className="bg-blue-50 border-b border-blue-100 px-6 py-3 text-center z-40 relative">
        <p className="text-blue-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is just a demonstration. Your actual platform will be 100% custom-built according to your specific business needs.</span>
        </p>
      </div>

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>

      <main className="container mx-auto px-6 lg:px-16 pt-24 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-green-500/10 text-green-600 font-bold text-xs tracking-wider uppercase mb-6">
          <Search className="w-4 h-4" /> SEO & Growth Architecture
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-bold text-black mb-8">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          {description}
        </motion.p>
        
        {/* SEO Dashboard Mockup */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-4xl mx-auto mb-24 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gray-50 border-b border-gray-100 p-6 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Organic Traffic Growth</h3>
              <p className="text-sm text-gray-500">Last 6 Months Performance</p>
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
              <TrendingUp className="w-4 h-4" /> +342% ROI
            </div>
          </div>
          <div className="p-8 bg-white relative h-80 flex items-end justify-between gap-4">
            {/* Fake bar chart */}
            {[40, 65, 85, 120, 180, 260].map((h, i) => (
              <div key={i} className="w-full bg-vedam-blue/10 rounded-t-xl relative group hover:bg-vedam-blue/20 transition-colors" style={{ height: `${h}px` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 font-bold text-sm bg-black text-white px-2 py-1 rounded transition-opacity">{h * 12}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <div id="how-it-works" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6"><Search className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold font-heading mb-3">Deep Keyword Research</h3>
            <p className="text-gray-600">We uncover high-intent, low-competition search terms that your ideal customers are actually typing into Google.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6"><Target className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold font-heading mb-3">Technical Optimization</h3>
            <p className="text-gray-600">We fix site speed, mobile-friendliness, schema markup, and broken links to ensure Google loves your site.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6"><BarChart3 className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold font-heading mb-3">Authority Building</h3>
            <p className="text-gray-600">We secure high-quality backlinks from authoritative sites in your industry to skyrocket your domain authority.</p>
          </div>
        </div>

        {/* Request Similar Project CTA */}
        <div className="mt-24 text-center relative z-10 pb-12">
          <button 
            onClick={() => { onBack(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="inline-flex items-center justify-center px-10 py-5 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-700 transition-all shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1"
          >
            Request Similar Project
          </button>
        </div>
      </main>
    </div>
  );
};
export default GenericSeoPage;
