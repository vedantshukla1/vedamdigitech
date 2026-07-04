import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, CheckCircle, Loader2, Play, Building2, Mail, Send, Sparkles, ArrowLeft, Info, Search, Filter, Briefcase, ChevronRight, Target, Database, Zap } from 'lucide-react';
import AgentMarketingSection from '../components/AgentMarketingSection';

const AgentPage = ({ onBack }) => {
  const [target, setTarget] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('idle'); // idle, generating, done
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLead, setSelectedLead] = useState(null);

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
    { id: 1, company: "Apex Digital Solutions", contact: "Sarah Jenkins", role: "CEO", email: "sarah@apexdigital.com", industry: "Marketing", stage: "Hot Lead", draftedEmail: "Hi Sarah,\n\nI loved your recent campaign for Apex Digital. Given your focus on scaling marketing operations, I thought you might be interested in how our AI agents can automate your client onboarding process, saving your team 15+ hours a week.\n\nWorth a quick chat?\n\nBest,\nVedam Team" },
    { id: 2, company: "Nexus Real Estate", contact: "David Chen", role: "Founder", email: "david.c@nexusrealestate.com", industry: "Real Estate", stage: "Email Drafted", draftedEmail: "Hi David,\n\nI noticed Nexus Real Estate is expanding into the luxury market. Our AI Lead Generation agents have helped similar brokerages double their qualified viewing appointments by automatically reaching out to high-net-worth individuals.\n\nCan I send over a quick case study?\n\nBest,\nVedam Team" },
    { id: 3, company: "Zenith Tech Partners", contact: "Priya Sharma", role: "CTO", email: "psharma@zenithtech.in", industry: "IT Services", stage: "Email Drafted", draftedEmail: "Hi Priya,\n\nSaw that Zenith Tech Partners recently launched a new platform. Congrats! Our team at Vedam Digitech builds AI customer support bots that can seamlessly integrate with your new platform to handle 80% of L1 support tickets instantly.\n\nLet me know if you'd be open to exploring this.\n\nBest,\nVedam Team" },
    { id: 4, company: "Stellar Logistics", contact: "Mike Torres", role: "VP Operations", email: "mtorres@stellar.com", industry: "Logistics", stage: "Contact Found", draftedEmail: "Drafting in progress..." }
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
    <div className="min-h-screen bg-vedam-cream relative pb-24 overflow-hidden font-sans text-vedam-charcoal">
      
      {/* Header */}
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Bot className="w-8 h-8 text-vedam-gold" />
          <h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">LeadGen CRM</h2>
        </div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
           <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
      </header>

      {/* Demo Notice Banner */}
      <div className="bg-vedam-cream border-b border-vedam-gold/20 px-6 py-3 text-center z-40 relative">
        <p className="text-vedam-charcoal font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is a CRM Dashboard preview showing live AI lead generation integration.</span>
        </p>
      </div>

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-vedam-charcoal/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 -translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-12 pt-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-charcoal/10 text-vedam-gold font-bold text-xs tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4" /> CRM Integration
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold text-vedam-charcoal mb-4">
            Lead Generation CRM
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600">
            Enter any industry and location to experience how our AI scrapes contacts and automatically updates pipeline stages in a unified CRM view.
          </motion.p>
        </div>

        {/* CRM Dashboard Mockup */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[650px]">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Lead Pipelines</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-sm font-bold text-vedam-charcoal text-sm flex justify-between items-center">
                  All Leads <span className="px-2 py-0.5 bg-vedam-cream text-vedam-charcoal rounded-md text-xs">1,204</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-600 font-bold text-sm transition-colors flex justify-between items-center">
                  Cold <span className="px-2 py-0.5 bg-gray-200 text-gray-500 rounded-md text-xs">840</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-600 font-bold text-sm transition-colors flex justify-between items-center">
                  Email Drafted <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-md text-xs">315</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-600 font-bold text-sm transition-colors flex justify-between items-center">
                  Hot Leads <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-md text-xs">49</span>
                </button>
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="bg-white p-4 rounded-2xl border border-gray-200">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Conversion Rate</div>
                <div className="text-2xl font-black text-vedam-charcoal">4.2%</div>
                <div className="text-sm font-medium text-green-500 flex items-center gap-1 mt-1">Average is 1.5%</div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="flex-1 flex flex-col bg-gray-50">
            
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col items-center justify-center p-8">
                  <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-lg w-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-vedam-charcoal/10 rounded-2xl flex items-center justify-center text-vedam-gold shrink-0">
                        <Bot className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-vedam-charcoal">Run AI Prospecting</h3>
                        <p className="text-gray-500 text-sm mt-1">Define target audience to generate leads.</p>
                      </div>
                    </div>

                    <div className="space-y-5 mb-8">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Target Industry / Niche</label>
                        <input type="text" value={target} onChange={(e) => setTarget(e.target.value)} placeholder="e.g. Real Estate Agencies" className="w-full px-4 py-3 bg-vedam-cream border border-gray-200 rounded-xl focus:outline-none focus:border-vedam-gold transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. New York, Remote" className="w-full px-4 py-3 bg-vedam-cream border border-gray-200 rounded-xl focus:outline-none focus:border-vedam-gold transition-all" />
                      </div>
                    </div>

                    <button onClick={handleGenerate} className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg ${target && location ? 'bg-vedam-charcoal hover:bg-black shadow-vedam-gold/30' : 'bg-gray-300 cursor-not-allowed'}`}>
                      <Play className="w-5 h-5" /> Start AI Mining
                    </button>
                  </div>
                </motion.div>
              )}

              {status === 'generating' && (
                <motion.div key="generating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col items-center justify-center py-10">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-vedam-charcoal/20 blur-2xl rounded-full animate-pulse"></div>
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-gray-50 shadow-xl flex items-center justify-center relative z-10">
                      <Loader2 className="w-8 h-8 text-vedam-gold animate-spin" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-vedam-charcoal mb-6 text-center">AI Agent is prospecting...</h3>
                  
                  <div className="w-full max-w-md space-y-3">
                    {steps.map((stepStr, idx) => (
                      <div key={idx} className={`flex items-center gap-3 p-3 rounded-xl transition-all ${idx === currentStep ? 'bg-white shadow-sm border border-gray-200' : idx < currentStep ? 'opacity-50' : 'opacity-30'}`}>
                        {idx < currentStep ? <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> : idx === currentStep ? <Loader2 className="w-5 h-5 text-vedam-gold animate-spin shrink-0" /> : <div className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0"></div>}
                        <span className={`text-sm font-bold ${idx === currentStep ? 'text-vedam-gold' : 'text-gray-600'}`}>{stepStr}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {status === 'done' && (
                <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col">
                  {/* Top Bar for Results */}
                  <div className="p-6 border-b border-gray-200 flex flex-wrap justify-between items-center gap-4 bg-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"><CheckCircle className="w-5 h-5 text-green-600"/></div>
                      <div>
                        <h3 className="font-bold text-vedam-charcoal text-sm">Mining Complete</h3>
                        <p className="text-xs text-gray-500">Found {mockLeads.length} leads for "{target}" in "{location}"</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => {setStatus('idle'); setTarget(''); setLocation('');}} className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-200 transition-colors">
                        New Search
                      </button>
                      <button className="px-4 py-2 bg-vedam-charcoal text-white rounded-lg text-sm font-bold hover:bg-black transition-colors">
                        Automate Outreach
                      </button>
                    </div>
                  </div>

                  {/* CRM Table View */}
                  <div className="flex-1 overflow-x-auto bg-white p-6">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider">
                          <th className="pb-4 font-bold pl-2">Company / Contact</th>
                          <th className="pb-4 font-bold">Industry</th>
                          <th className="pb-4 font-bold">Pipeline Stage</th>
                          <th className="pb-4 font-bold">Generated Email</th>
                          <th className="pb-4 font-bold text-right pr-2">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {mockLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-gray-50 transition-colors group">
                            <td className="py-4 pl-2">
                              <div className="font-bold text-vedam-charcoal flex items-center gap-2"><Building2 className="w-4 h-4 text-gray-400"/> {lead.company}</div>
                              <div className="text-xs text-gray-500 mt-1">{lead.contact} - {lead.role}</div>
                            </td>
                            <td className="py-4">
                              <div className="flex items-center gap-2 text-xs font-bold text-gray-600"><Briefcase className="w-3 h-3 text-gray-400"/> {lead.industry}</div>
                            </td>
                            <td className="py-4">
                              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${lead.stage === 'Hot Lead' ? 'bg-red-50 border-red-200 text-red-700' : lead.stage === 'Email Drafted' ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                                {lead.stage}
                              </span>
                            </td>
                            <td className="py-4">
                              <div className="text-xs text-gray-500 max-w-[200px] truncate">{lead.draftedEmail}</div>
                            </td>
                            <td className="py-4 text-right pr-2">
                              <button onClick={() => setSelectedLead(lead)} className="px-3 py-1.5 bg-vedam-charcoal/10 text-vedam-gold hover:bg-vedam-gold hover:text-white rounded-lg text-xs font-bold transition-colors">
                                Review Draft
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

        {/* Email Draft Modal */}
        <AnimatePresence>
          {selectedLead && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-vedam-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedLead(null)}>
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
                <div className="bg-vedam-cream p-6 border-b border-gray-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-1">AI Generated Draft</h3>
                    <div className="font-medium text-vedam-charcoal text-sm">To: {selectedLead.email}</div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full border border-green-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Highly Personalized
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="w-full p-4 md:p-6 bg-vedam-cream border border-gray-200 rounded-xl text-gray-700 whitespace-pre-wrap leading-relaxed font-medium text-sm">
                    {selectedLead.draftedEmail}
                  </div>
                  <div className="mt-6 flex justify-end gap-3">
                    <button onClick={() => setSelectedLead(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold rounded-xl transition-colors">Close</button>
                    <button onClick={() => setSelectedLead(null)} className="px-6 py-2 bg-vedam-charcoal hover:bg-black text-white text-sm font-bold rounded-xl transition-colors flex items-center gap-2 shadow-lg">
                      <Send className="w-4 h-4" /> Send Email
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <AgentMarketingSection 
        title="Supercharge Your Lead Generation"
        description="Stop wasting time scraping and guessing. Our AI LeadGen Agent finds the right decision-makers and drafts highly personalized outreach at scale."
        ctaText="Start Finding Leads"
        features={[
          { icon: <Target />, title: 'Hyper-Targeted Mining', desc: 'Scan millions of profiles across LinkedIn and Google to find exact ICP matches.' },
          { icon: <Database />, title: 'Real-time Enrichment', desc: 'Automatically enrich leads with verified emails, phone numbers, and recent company news.' },
          { icon: <Zap />, title: 'GPT-4 Drafted Outreach', desc: 'Generate hyper-personalized emails that reference recent events to skyrocket reply rates.' }
        ]}
      />
    </div>
  );
};

export default AgentPage;
