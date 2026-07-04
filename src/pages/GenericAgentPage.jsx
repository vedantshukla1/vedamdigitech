import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Cpu, Info } from 'lucide-react';

const GenericAgentPage = ({ title, description, onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-vedam-cream relative pb-24 overflow-hidden font-sans text-vedam-charcoal">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><Cpu className="w-8 h-8 text-vedam-gold" /><h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">{title}</h2></div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Site</button>
      </header>

      {/* Demo Notice Banner */}
      <div className="bg-vedam-cream border-b border-vedam-gold/20 px-6 py-3 text-center z-40 relative">
        <p className="text-vedam-charcoal font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is just a demonstration. Your actual platform will be 100% custom-built according to your specific business needs.</span>
        </p>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vedam-charcoal/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-16 pt-24 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-charcoal/10 text-vedam-gold font-bold text-xs tracking-wider uppercase mb-6">
          <Sparkles className="w-4 h-4" /> Enterprise AI Automation
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-heading font-bold text-vedam-charcoal mb-8">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          {description}
        </motion.p>
        
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl mx-auto border border-gray-100">
          <div className="w-24 h-24 bg-vedam-cream rounded-full flex items-center justify-center mx-auto mb-6"><Cpu className="w-12 h-12 text-vedam-gold animate-pulse" /></div>
          <h3 className="text-2xl font-bold mb-4">Custom Integrations Available</h3>
          <p className="text-gray-500 mb-8">This solution is highly customized for each enterprise client. We train the LLM on your specific corporate data policies to ensure 100% compliance and accuracy.</p>
          <a href="#contact" onClick={onBack} className="inline-block px-8 py-4 bg-vedam-charcoal text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transition-colors">Request a Live Demo</a>
        </motion.div>

        <div id="how-it-works" className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">1. Assessment</h3>
            <p className="text-gray-600">We analyze your current manual workflows to identify the highest ROI automation opportunities.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">2. AI Architecture</h3>
            <p className="text-gray-600">Our engineers build a custom LangChain agent connected securely to your backend APIs and databases.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">3. Deployment</h3>
            <p className="text-gray-600">We deploy the agent in a sandbox for testing, then scale it across your organization.</p>
          </div>
        </div>

        {/* Request Similar Project CTA */}
        <div className="mt-24 text-center relative z-10 pb-12">
          <button 
            onClick={() => { onBack(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="inline-flex items-center justify-center px-10 py-5 bg-vedam-charcoal text-white font-bold text-lg rounded-full hover:bg-black transition-all shadow-2xl hover:shadow-vedam-gold/30 hover:-translate-y-1"
          >
            Request Similar Project
          </button>
        </div>
      </main>
    </div>
  );
};
export default GenericAgentPage;
