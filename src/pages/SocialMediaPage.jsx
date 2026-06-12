import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Calendar, Image as ImageIcon, Send, Loader2, CheckCircle, Info } from 'lucide-react';

const SocialMediaPage = ({ onBack }) => {
  const [status, setStatus] = useState('idle');
  
  useEffect(() => window.scrollTo(0, 0), []);

  const handleGenerate = () => {
    setStatus('generating');
    setTimeout(() => setStatus('done'), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative pb-24 overflow-hidden font-sans text-gray-900">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-vedam-blue" />
          <h2 className="text-xl md:text-2xl font-bold font-heading text-black">Social Media AI</h2>
        </div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
           <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
      </header>

      {/* Demo Notice Banner */}
      <div className="bg-blue-50 border-b border-blue-100 px-6 py-3 text-center z-40 relative">
        <p className="text-blue-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is just a demonstration. Your actual platform will be 100% custom-built according to your specific business needs.</span>
        </p>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vedam-blue/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-16 pt-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-black mb-6">
            AI Social Media Manager
          </motion.h1>
          <p className="text-lg text-gray-600">Autonomously research trending topics, design graphics, and write highly engaging captions across all your platforms.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-amber-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
          </div>
          <div className="p-8 md:p-12 min-h-[400px] bg-gray-50/50">
            {status === 'idle' && (
              <div className="text-center space-y-6 max-w-md mx-auto py-12">
                <div className="w-20 h-20 bg-vedam-blue/10 text-vedam-blue rounded-full flex items-center justify-center mx-auto mb-4"><ImageIcon className="w-10 h-10" /></div>
                <h3 className="text-2xl font-bold font-heading">Schedule Next Week's Content</h3>
                <p className="text-gray-500">The AI will analyze your brand voice and industry trends to create 3 high-converting posts.</p>
                <button onClick={handleGenerate} className="w-full py-4 bg-vedam-blue text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700">
                  <Sparkles className="w-5 h-5" /> Generate Content
                </button>
              </div>
            )}
            {status === 'generating' && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Loader2 className="w-12 h-12 text-vedam-blue animate-spin mb-6" />
                <h3 className="text-xl font-bold mb-2">Analyzing Trends & Designing Graphics...</h3>
                <p className="text-gray-500">Writing optimized captions with hashtags...</p>
              </div>
            )}
            {status === 'done' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-l-4 border-l-green-500 shadow-sm">
                  <div className="flex items-center gap-3"><CheckCircle className="text-green-500 w-6 h-6" /><h3 className="text-lg font-bold">3 Posts Ready for Approval</h3></div>
                  <button onClick={() => setStatus('idle')} className="text-sm font-bold bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">Reset</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1,2,3].map(i => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                      <div className="h-40 bg-gray-200 relative"><img alt="Vedam Digitech" src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80`} className="w-full h-full object-cover" /></div>
                      <div className="p-4">
                        <p className="text-sm text-gray-700 line-clamp-3 mb-4">🚀 Looking to scale your business? Our AI tools help automate workflows seamlessly. #AI #BusinessGrowth #Tech</p>
                        <button className="w-full py-2 bg-vedam-blue text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Approve & Schedule</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
        <div id="how-it-works" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">1. Brand Voice Setup</h3>
            <p className="text-gray-600">We train the AI on your past posts so it sounds exactly like you.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">2. Auto-Generation</h3>
            <p className="text-gray-600">It creates text, images, and hashtags in minutes for the whole month.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">3. Approval & Auto-Post</h3>
            <p className="text-gray-600">You just click "Approve" and it automatically publishes to Instagram, LinkedIn, etc.</p>
          </div>
        </div>

        {/* Request Similar Project CTA */}
        <div className="mt-24 text-center relative z-10">
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
export default SocialMediaPage;
