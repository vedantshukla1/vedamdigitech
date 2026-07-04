import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Bot, Mail, Users, CheckCircle, Loader2, Play, Building2, Send, Info } from 'lucide-react';

const LeadGenAgent = ({ onBack }) => {
  const [target, setTarget] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('idle'); // idle, generating, done
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLead, setSelectedLead] = useState(null);

  const steps = [
    "Scraping LinkedIn & Google for target companies...",
    "Analyzing company websites to understand their business...",
    "Finding decision-maker contact information...",
    "Drafting personalized outreach emails using GPT-4..."
  ];

  const mockLeads = [
    { id: 1, company: "Apex Digital Solutions", contact: "Sarah Jenkins (CEO)", email: "sarah@apexdigital.com", industry: "Marketing", draftedEmail: "Hi Sarah,\n\nI loved your recent campaign for Apex Digital. Given your focus on scaling marketing operations, I thought you might be interested in how our AI agents can automate your client onboarding process, saving your team 15+ hours a week.\n\nWorth a quick chat?\n\nBest,\nVedam Team" },
    { id: 2, company: "Nexus Real Estate", contact: "David Chen (Founder)", email: "david.c@nexusrealestate.com", industry: "Real Estate", draftedEmail: "Hi David,\n\nI noticed Nexus Real Estate is expanding into the luxury market. Our AI Lead Generation agents have helped similar brokerages double their qualified viewing appointments by automatically reaching out to high-net-worth individuals.\n\nCan I send over a quick case study?\n\nBest,\nVedam Team" },
    { id: 3, company: "Zenith Tech Partners", contact: "Priya Sharma (CTO)", email: "psharma@zenithtech.in", industry: "IT Services", draftedEmail: "Hi Priya,\n\nSaw that Zenith Tech Partners recently launched a new platform. Congrats! Our team at Vedam Digitech builds AI customer support bots that can seamlessly integrate with your new platform to handle 80% of L1 support tickets instantly.\n\nLet me know if you'd be open to exploring this.\n\nBest,\nVedam Team" }
  ];

  const handleGenerate = () => {
    if (!target || !location) return;
    setStatus('generating');
    setCurrentStep(0);

    // Mock progress through steps
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
    <div className="min-h-screen bg-vedam-cream font-sans text-vedam-charcoal">
      {/* Sidebar & Top Navigation Mockup */}
      <div className="flex h-screen overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={onBack}>
            <ArrowLeft className="w-5 h-5 text-gray-500" />
            <h1 className="text-xl font-heading font-bold text-vedam-charcoal tracking-tight">AI Lead Agent</h1>
          </div>
          <div className="flex-1 p-4 space-y-2">
            <div className="flex items-center gap-3 px-4 py-3 bg-vedam-charcoal/10 text-vedam-gold rounded-xl font-medium cursor-pointer">
              <Search className="w-5 h-5" />
              Find Leads
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-vedam-cream rounded-xl font-medium cursor-pointer transition-colors">
              <Users className="w-5 h-5" />
              Saved Contacts
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-vedam-cream rounded-xl font-medium cursor-pointer transition-colors">
              <Mail className="w-5 h-5" />
              Campaigns
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-vedam-cream rounded-xl font-medium cursor-pointer transition-colors">
              <Bot className="w-5 h-5" />
              Agent Settings
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-vedam-cream/50 relative">
          
          {/* Header */}
          <header className="bg-white px-8 py-6 border-b border-gray-200 flex items-center justify-between sticky top-0 z-10 shadow-sm">
            <h2 className="text-2xl font-bold font-heading text-vedam-charcoal">New Search</h2>
            <button onClick={onBack} className="md:hidden px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Site
            </button>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-sm font-medium text-gray-500">Credits: <span className="text-vedam-charcoal font-bold">1,240</span></div>
              <div className="w-10 h-10 bg-gradient-to-tr from-vedam-gold to-vedam-gold rounded-full flex items-center justify-center text-white font-bold shadow-md">
                VD
              </div>
            </div>
          </header>

          {/* Demo Notice Banner */}
          <div className="bg-vedam-cream border-b border-vedam-gold/20 px-6 py-3 text-center z-40 relative">
            <p className="text-vedam-charcoal font-bold text-sm sm:text-base flex items-center justify-center gap-2">
              <Info className="w-5 h-5 shrink-0" /> 
              <span><strong>Note:</strong> This is just a demonstration. Your actual platform will be 100% custom-built according to your specific business needs.</span>
            </p>
          </div>

          <main className="p-8 max-w-5xl mx-auto">
            
            {status === 'idle' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-vedam-charcoal/10 rounded-2xl flex items-center justify-center text-vedam-gold">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-vedam-charcoal font-heading">Configure Lead Agent</h3>
                      <p className="text-sm text-gray-500">Tell the AI who you want to target and let it do the research.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Target Industry / Niche</label>
                      <input 
                        type="text" 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="e.g. Real Estate Agencies, Tech Startups" 
                        className="w-full px-4 py-3 bg-vedam-cream border border-gray-200 rounded-xl focus:ring-2 focus:ring-vedam-gold/50 focus:border-vedam-gold outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                      <input 
                        type="text" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. New York, London, Remote" 
                        className="w-full px-4 py-3 bg-vedam-cream border border-gray-200 rounded-xl focus:ring-2 focus:ring-vedam-gold/50 focus:border-vedam-gold outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleGenerate}
                    className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg ${target && location ? 'bg-vedam-charcoal hover:bg-black shadow-vedam-gold/30' : 'bg-gray-300 cursor-not-allowed'}`}
                  >
                    <Play className="w-5 h-5" /> Start AI Agent
                  </button>
                </div>
              </motion.div>
            )}

            {status === 'generating' && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20">
                <div className="relative mb-12">
                  <div className="absolute inset-0 bg-vedam-charcoal/20 blur-2xl rounded-full animate-pulse"></div>
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-gray-50 shadow-2xl flex items-center justify-center relative z-10">
                    <Loader2 className="w-12 h-12 text-vedam-gold animate-spin" />
                  </div>
                  {/* Floating particles */}
                  <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-4 -right-4 w-8 h-8 bg-vedam-gold rounded-full shadow-lg" />
                  <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full shadow-lg" />
                </div>
                
                <h3 className="text-2xl font-bold text-vedam-charcoal font-heading mb-8">Agent is working...</h3>
                
                <div className="w-full max-w-lg space-y-4">
                  {steps.map((stepStr, idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-4 rounded-xl transition-all ${idx === currentStep ? 'bg-white shadow-md border border-gray-100 scale-105' : idx < currentStep ? 'opacity-50' : 'opacity-30'}`}>
                      {idx < currentStep ? (
                        <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                      ) : idx === currentStep ? (
                        <Loader2 className="w-6 h-6 text-vedam-gold animate-spin shrink-0" />
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 shrink-0"></div>
                      )}
                      <span className={`font-medium ${idx === currentStep ? 'text-vedam-gold' : 'text-gray-700'}`}>{stepStr}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {status === 'done' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-green-100 border-l-4 border-l-green-500">
                  <div>
                    <h3 className="text-xl font-bold text-vedam-charcoal flex items-center gap-2"><CheckCircle className="text-green-500" /> Research Complete!</h3>
                    <p className="text-gray-500 mt-1">Found highly qualified leads for "{target}" in "{location}". Drafted personalized emails for all.</p>
                  </div>
                  <button onClick={() => {setStatus('idle'); setTarget(''); setLocation('');}} className="px-6 py-2 bg-gray-100 hover:bg-gray-200 font-bold rounded-lg transition-colors">
                    New Search
                  </button>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 p-6 bg-vedam-cream border-b border-gray-200 font-bold text-sm text-gray-500 uppercase tracking-wider">
                    <div className="col-span-4">Company & Contact</div>
                    <div className="col-span-3">Industry</div>
                    <div className="col-span-5 text-right">AI Action</div>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {mockLeads.map((lead) => (
                      <div key={lead.id} className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-vedam-cream/50 transition-colors">
                        <div className="col-span-4">
                          <div className="font-bold text-vedam-charcoal text-lg flex items-center gap-2"><Building2 className="w-4 h-4 text-gray-400"/> {lead.company}</div>
                          <div className="text-gray-500 text-sm mt-1">{lead.contact}</div>
                        </div>
                        <div className="col-span-3">
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">{lead.industry}</span>
                        </div>
                        <div className="col-span-5 flex justify-end gap-3">
                          <button 
                            onClick={() => setSelectedLead(lead)}
                            className="px-4 py-2 bg-vedam-charcoal/10 text-vedam-gold hover:bg-vedam-charcoal hover:text-white font-bold rounded-lg transition-colors text-sm flex items-center gap-2"
                          >
                            <Mail className="w-4 h-4" /> View Draft
                          </button>
                          <button className="px-4 py-2 bg-vedam-charcoal text-white hover:bg-gray-800 font-bold rounded-lg transition-colors text-sm flex items-center gap-2">
                            <Send className="w-4 h-4" /> Send Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          </main>
        </div>

        {/* Email Draft Modal */}
        <AnimatePresence>
          {selectedLead && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-vedam-charcoal/50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedLead(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="bg-vedam-cream p-6 border-b border-gray-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-1">AI Generated Draft</h3>
                    <div className="font-medium text-vedam-charcoal">To: {selectedLead.email}</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Highly Personalized
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="w-full p-6 bg-vedam-cream border border-gray-200 rounded-xl text-gray-700 whitespace-pre-wrap leading-relaxed font-medium">
                    {selectedLead.draftedEmail}
                  </div>
                  <div className="mt-8 flex justify-end gap-4">
                    <button onClick={() => setSelectedLead(null)} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors">
                      Cancel
                    </button>
                    <button onClick={() => setSelectedLead(null)} className="px-8 py-3 bg-vedam-charcoal hover:bg-black text-white font-bold rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-vedam-gold/30">
                      <Send className="w-5 h-5" /> Send Email
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LeadGenAgent;
