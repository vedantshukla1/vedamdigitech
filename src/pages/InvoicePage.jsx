import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, FileText, Send, Loader2, CheckCircle, DollarSign, Info } from 'lucide-react';

const InvoicePage = ({ onBack }) => {
  const [status, setStatus] = useState('idle');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleGenerate = () => {
    setStatus('generating');
    setTimeout(() => setStatus('done'), 2500);
  };

  return (
    <div className="min-h-screen bg-vedam-cream relative pb-24 overflow-hidden font-sans text-vedam-charcoal">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><FileText className="w-8 h-8 text-vedam-gold" /><h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">AI Billing</h2></div>
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

      <main className="container mx-auto px-6 lg:px-16 pt-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-vedam-charcoal mb-6">AI Invoice & Billing</motion.h1>
          <p className="text-lg text-gray-600">The AI automatically calculates billable hours, drafts invoices, and sends them to clients on the 1st of every month.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-amber-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
          </div>
          <div className="p-8 md:p-12 min-h-[400px] bg-vedam-cream/50">
            {status === 'idle' && (
              <div className="text-center space-y-6 max-w-md mx-auto py-12">
                <div className="w-20 h-20 bg-vedam-charcoal/10 text-vedam-gold rounded-full flex items-center justify-center mx-auto mb-4"><DollarSign className="w-10 h-10" /></div>
                <h3 className="text-2xl font-bold font-heading">End of Month Run</h3>
                <p className="text-gray-500">Extracts data from your timesheets & CRM to generate 45 client invoices.</p>
                <button onClick={handleGenerate} className="w-full py-4 bg-vedam-charcoal text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-gray-800">
                  <Sparkles className="w-5 h-5" /> Auto-Generate Invoices
                </button>
              </div>
            )}
            {status === 'generating' && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Loader2 className="w-12 h-12 text-vedam-charcoal animate-spin mb-6" />
                <h3 className="text-xl font-bold mb-2">Compiling Timesheets & Drafting PDFs...</h3>
                <p className="text-gray-500">Calculating taxes and formatting documents...</p>
              </div>
            )}
            {status === 'done' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-white p-6 rounded-2xl border-l-4 border-l-green-500 shadow-sm">
                  <div className="flex items-center gap-3"><CheckCircle className="text-green-500 w-6 h-6" /><h3 className="text-lg font-bold">45 Invoices Generated</h3></div>
                  <button onClick={() => setStatus('idle')} className="text-sm font-bold bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">Reset</button>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-2">
                  {[ {name: "Acme Corp", amt: "$4,500"}, {name: "TechFlow", amt: "$2,100"}, {name: "Elevate Real Estate", amt: "$8,000"} ].map((inv, i) => (
                    <div key={i} className="flex justify-between items-center p-4 hover:bg-vedam-cream border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-4"><FileText className="text-vedam-gold" /><div><p className="font-bold">{inv.name}</p><p className="text-xs text-gray-500">Due in 30 days</p></div></div>
                      <div className="flex items-center gap-6"><span className="font-bold text-lg">{inv.amt}</span><button className="text-sm bg-vedam-charcoal/10 text-vedam-gold font-bold px-4 py-2 rounded-lg flex items-center gap-2"><Send className="w-4 h-4" /> Send Email</button></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
        
        <div id="how-it-works" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">1. Data Integration</h3>
            <p className="text-gray-600">The AI connects to your CRM, Slack, or timesheets to understand what was delivered.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">2. Smart PDF Creation</h3>
            <p className="text-gray-600">It drafts beautiful PDF invoices with line items, tax calculations, and your branding.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">3. Auto-Follow Ups</h3>
            <p className="text-gray-600">If a client doesn't pay in 15 days, the AI automatically drafts and sends a polite reminder.</p>
          </div>
        </div>

        {/* Request Similar Project CTA */}
        <div className="mt-24 text-center relative z-10">
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
export default InvoicePage;
