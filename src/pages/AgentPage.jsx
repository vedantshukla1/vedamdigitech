import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, CheckCircle, Loader2, Play, Building2, Mail, Send, Sparkles, ArrowLeft, Info } from 'lucide-react';

const AgentPage = ({ onBack }) => {
  const [target, setTarget] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('idle'); // idle, generating, done
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLead, setSelectedLead] = useState(null);

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    "Scraping LinkedIn & Google for target companies...",
    "Analyzing company websites to understand their business...",
    "Finding decision-maker contact information...",
    "Drafting personalized outreach emails using GPT-4..."
  ];

  const mockLeads = [
    { id: 1, company: "Apex Digital Solutions", contact: "Sarah Jenkins (CEO)", email: "sarah@apexdigital.com", industry: "Marketing", draftedEmail: "Hi Sarah,\n\nI loved your recent campaign for Apex Digital. Given your focus on scaling marketing operations, I thought you might be interested in how our AI agents can automate your client onboarding process, saving your team 15+ hours a week.\n\nWorth a quick chat?\n\nBest,\nVedam Team" },
    { id: 2, company: "Nexus Real Estate", contact: "David Chen (Founder)", email: "david.c@nexusrealestate.com", industry: "Real Estate", draftedEmail: "Hi David,\n\nI noticed Nexus Real Estate is expanding into the luxury market. Our AI Lead Generation agents have helped similar brokerages double their qualified viewing appointments by automatically reaching out to high-net-worth individuals.\n\nCan I send over a quick case study?\n\nBest,\nVedam Team" },
    { id: 3, company: "Zenith Tech Partners", contact: "Priya Sharma (CTO)", email: "psharma@zenithtech.in", industry: "IT Services", draftedEmail: "Hi Priya,\n\nSaw that Zenith Tech Partners recently launched a new SaaS tool. Congrats! Our team at Vedam Digitech builds AI customer support bots that can seamlessly integrate with your new platform to handle 80% of L1 support tickets instantly.\n\nLet me know if you'd be open to exploring this.\n\nBest,\nVedam Team" }
  ];

  const handleGenerate = () => {
    if (!target || !location) return;
    setStatus('generating');
    setCurrentStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setStatus('done');
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative pb-24 overflow-hidden font-sans text-gray-900">
      
      {/* Header */}
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Bot className="w-8 h-8 text-vedam-blue" />
          <h2 className="text-xl md:text-2xl font-bold font-heading text-black">LeadGen Agent</h2>
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

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-vedam-blue/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 -translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-16 pt-16 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-blue/10 text-vedam-blue font-bold text-xs tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-4 h-4" /> Live Demo
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-black mb-6"
          >
            AI Agent Dashboard
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Enter any industry and location below to experience how our custom AI workflows can automate your entire sales research and outreach process.
          </motion.p>
        </div>

        {/* Browser Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 relative"
        >
          {/* Browser Header */}
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="mx-auto bg-white px-20 md:px-32 py-1 rounded-md text-xs font-bold text-gray-400 flex items-center gap-2 shadow-sm">
              <Bot className="w-3 h-3" /> app.vedamdigitech.onrender.com/agent
            </div>
          </div>

          {/* Browser Content */}
          <div className="p-6 md:p-12 min-h-[500px] bg-gray-50/50 relative">
            
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.div key="idle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-w-3xl mx-auto">
                  <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-vedam-blue/10 rounded-2xl flex items-center justify-center text-vedam-blue shrink-0">
                        <Bot className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-black font-heading">Configure Campaign</h3>
                        <p className="text-gray-500">Define your target audience and let the AI hunt.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Target Industry / Niche</label>
                        <input 
                          type="text" 
                          value={target}
                          onChange={(e) => setTarget(e.target.value)}
                          placeholder="e.g. Real Estate Agencies" 
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-vedam-blue/50 focus:border-vedam-blue outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                        <input 
                          type="text" 
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. New York, Remote" 
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-vedam-blue/50 focus:border-vedam-blue outline-none transition-all"
                        />
                      </div>
                    </div>

                    <button 
                      onClick={handleGenerate}
                      className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg ${target && location ? 'bg-vedam-blue hover:bg-blue-700 shadow-vedam-blue/30' : 'bg-gray-300 cursor-not-allowed'}`}
                    >
                      <Play className="w-5 h-5" /> Start Automated Agent
                    </button>
                  </div>
                </motion.div>
              )}

              {status === 'generating' && (
                <motion.div key="generating" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-10">
                  <div className="relative mb-12">
                    <div className="absolute inset-0 bg-vedam-blue/20 blur-2xl rounded-full animate-pulse"></div>
                    <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-50 shadow-xl flex items-center justify-center relative z-10">
                      <Loader2 className="w-10 h-10 text-vedam-blue animate-spin" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black font-heading mb-8 text-center">Agent is working...</h3>
                  
                  <div className="w-full max-w-lg space-y-4">
                    {steps.map((stepStr, idx) => (
                      <div key={idx} className={`flex items-center gap-4 p-4 rounded-xl transition-all ${idx === currentStep ? 'bg-white shadow-md border border-gray-100 scale-105' : idx < currentStep ? 'opacity-50' : 'opacity-30'}`}>
                        {idx < currentStep ? (
                          <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                        ) : idx === currentStep ? (
                          <Loader2 className="w-6 h-6 text-vedam-blue animate-spin shrink-0" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300 shrink-0"></div>
                        )}
                        <span className={`font-medium ${idx === currentStep ? 'text-vedam-blue' : 'text-gray-700'}`}>{stepStr}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {status === 'done' && (
                <motion.div key="done" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-green-100 border-l-4 border-l-green-500">
                    <div>
                      <h3 className="text-xl font-bold text-black flex items-center gap-2"><CheckCircle className="text-green-500" /> Research Complete!</h3>
                      <p className="text-gray-500 mt-1">Found qualified leads for "{target}" in "{location}". Drafted personalized emails.</p>
                    </div>
                    <button onClick={() => {setStatus('idle'); setTarget(''); setLocation('');}} className="px-6 py-2 bg-gray-100 hover:bg-gray-200 font-bold text-sm rounded-lg transition-colors whitespace-nowrap">
                      New Search
                    </button>
                  </div>

                  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-bold text-xs text-gray-500 uppercase tracking-wider">
                      <div className="col-span-4">Company & Contact</div>
                      <div className="col-span-3">Industry</div>
                      <div className="col-span-5 text-right">AI Action</div>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                      {mockLeads.map((lead) => (
                        <div key={lead.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-gray-50/50 transition-colors">
                          <div className="col-span-1 md:col-span-4">
                            <div className="font-bold text-black md:text-lg flex items-center gap-2"><Building2 className="w-4 h-4 text-gray-400"/> {lead.company}</div>
                            <div className="text-gray-500 text-sm mt-1">{lead.contact}</div>
                          </div>
                          <div className="col-span-1 md:col-span-3">
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">{lead.industry}</span>
                          </div>
                          <div className="col-span-1 md:col-span-5 flex flex-wrap md:justify-end gap-3 mt-4 md:mt-0">
                            <button 
                              onClick={() => setSelectedLead(lead)}
                              className="px-4 py-2 bg-vedam-blue/10 text-vedam-blue hover:bg-vedam-blue hover:text-white font-bold rounded-lg transition-colors text-sm flex items-center gap-2"
                            >
                              <Mail className="w-4 h-4" /> View Draft
                            </button>
                            <button className="px-4 py-2 bg-black text-white hover:bg-gray-800 font-bold rounded-lg transition-colors text-sm flex items-center gap-2">
                              <Send className="w-4 h-4" /> Send Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Inline Email Draft Modal */}
        <AnimatePresence>
          {selectedLead && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedLead(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-1">AI Generated Draft</h3>
                    <div className="font-medium text-black text-sm">To: {selectedLead.email}</div>
                  </div>
                  <div className="hidden sm:flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full border border-green-200 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Highly Personalized
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="w-full p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 whitespace-pre-wrap leading-relaxed font-medium text-sm">
                    {selectedLead.draftedEmail}
                  </div>
                  <div className="mt-6 flex justify-end gap-3">
                    <button onClick={() => setSelectedLead(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold rounded-xl transition-colors">
                      Close
                    </button>
                    <button onClick={() => setSelectedLead(null)} className="px-6 py-2 bg-vedam-blue hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-vedam-blue/30">
                      <Send className="w-4 h-4" /> Approve & Send
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* How It Works Steps */}
        <div id="how-it-works" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-vedam-blue/10 text-vedam-blue rounded-2xl flex items-center justify-center font-bold text-2xl font-heading mb-6">1</div>
            <h3 className="text-xl font-bold text-black font-heading mb-3">Define Audience</h3>
            <p className="text-gray-600 leading-relaxed">Simply input your target industry and location. The AI instantly understands your ideal customer profile and parameters.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-vedam-blue/10 text-vedam-blue rounded-2xl flex items-center justify-center font-bold text-2xl font-heading mb-6">2</div>
            <h3 className="text-xl font-bold text-black font-heading mb-3">AI Deep Search</h3>
            <p className="text-gray-600 leading-relaxed">The agent autonomously crawls the web, identifying companies, extracting decision-makers, and verifying their contact details.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-vedam-blue/10 text-vedam-blue rounded-2xl flex items-center justify-center font-bold text-2xl font-heading mb-6">3</div>
            <h3 className="text-xl font-bold text-black font-heading mb-3">Hyper-Personalize</h3>
            <p className="text-gray-600 leading-relaxed">Using advanced LLMs, it analyzes each company's website to draft a highly personalized, high-converting outreach email.</p>
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

export default AgentPage;
