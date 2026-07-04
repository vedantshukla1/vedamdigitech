import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowLeft, PhoneCall, PhoneIncoming, Search, CheckCircle, XCircle, Clock, Volume2, Info, Sparkles, Filter, Mic, Headset, Globe } from 'lucide-react';
import AgentMarketingSection from '../components/AgentMarketingSection';

const CallingAgentPage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('logs');
  const [selectedCall, setSelectedCall] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calls = [
    { id: 'C-9021', name: 'John Peterson', company: 'Acme Corp', type: 'outbound', duration: '04:12', status: 'Interested', sentiment: 'Positive', date: 'Just now', tags: ['Follow Up', 'B2B'] },
    { id: 'C-9020', name: 'Sarah Miller', company: 'TechFlow', type: 'inbound', duration: '02:45', status: 'Resolved', sentiment: 'Neutral', date: '10 mins ago', tags: ['Support'] },
    { id: 'C-9019', name: 'David Chen', company: 'Global Real Estate', type: 'outbound', duration: '08:30', status: 'Meeting Booked', sentiment: 'Positive', date: '1 hr ago', tags: ['High Value'] },
    { id: 'C-9018', name: 'Unknown Caller', company: '-', type: 'inbound', duration: '00:15', status: 'Dropped', sentiment: 'Negative', date: '2 hrs ago', tags: ['Spam'] }
  ];

  return (
    <div className="min-h-screen bg-vedam-cream relative pb-24 overflow-hidden font-sans text-vedam-charcoal">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Phone className="w-8 h-8 text-vedam-gold" />
          <h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">AI Calling CRM</h2>
        </div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
           <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
      </header>

      <div className="bg-vedam-cream border-b border-vedam-gold/20 px-6 py-3 text-center z-40 relative">
        <p className="text-vedam-charcoal font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is a CRM Dashboard preview showing live data synchronization.</span>
        </p>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vedam-charcoal/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-12 pt-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-charcoal/10 text-vedam-gold font-bold text-xs tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4" /> CRM Integration
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold text-vedam-charcoal mb-4">
            Voice Agent CRM
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600">
            Monitor thousands of concurrent AI calls. View real-time transcripts, analyze sentiment, and track automatic pipeline updates directly from this unified dashboard.
          </motion.p>
        </div>

        {/* CRM Dashboard Mockup */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Live Campaigns</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-sm font-bold text-vedam-charcoal text-sm flex justify-between items-center">
                  B2B Outreach <span className="w-2 h-2 rounded-full bg-green-50 animate-pulse"></span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-600 font-bold text-sm transition-colors">
                  Inbound Support
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-600 font-bold text-sm transition-colors">
                  Event RSVP
                </button>
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="bg-white p-4 rounded-2xl border border-gray-200">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Today's Stats</div>
                <div className="text-2xl font-black text-vedam-charcoal">1,492</div>
                <div className="text-sm font-medium text-green-500 flex items-center gap-1 mt-1"><ArrowLeft className="w-3 h-3 rotate-45"/> +12% from yesterday</div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="flex-1 flex flex-col">
            
            {/* Top Bar */}
            <div className="p-6 border-b border-gray-200 flex flex-wrap justify-between items-center gap-4 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search transcripts or leads..." className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-vedam-gold w-64" />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-100 flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filter
                </button>
                <button className="px-4 py-2 bg-vedam-charcoal text-white rounded-lg text-sm font-bold hover:bg-black transition-colors">
                  Export Data
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-x-auto bg-white p-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider">
                    <th className="pb-4 font-bold pl-2">Contact</th>
                    <th className="pb-4 font-bold">Type</th>
                    <th className="pb-4 font-bold">Duration</th>
                    <th className="pb-4 font-bold">Sentiment</th>
                    <th className="pb-4 font-bold">CRM Status</th>
                    <th className="pb-4 font-bold text-right pr-2">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {calls.map((c) => (
                    <tr key={c.id} className="hover:bg-gray-50 transition-colors group cursor-pointer" onClick={() => setSelectedCall(c)}>
                      <td className="py-4 pl-2">
                        <div className="font-bold text-vedam-charcoal text-sm">{c.name}</div>
                        <div className="text-xs text-gray-500">{c.company}</div>
                      </td>
                      <td className="py-4">
                        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md w-fit ${c.type === 'inbound' ? 'bg-yellow-50 text-yellow-600' : 'bg-purple-50 text-purple-600'}`}>
                          {c.type === 'inbound' ? <PhoneIncoming className="w-3 h-3" /> : <PhoneCall className="w-3 h-3" />}
                          {c.type}
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600"><Clock className="w-3 h-3 text-gray-400"/> {c.duration}</div>
                      </td>
                      <td className="py-4">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full border ${c.sentiment === 'Positive' ? 'bg-green-50 border-green-200 text-green-700' : c.sentiment === 'Negative' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                          {c.sentiment}
                        </span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm font-bold text-vedam-charcoal">{c.status}</span>
                      </td>
                      <td className="py-4 text-right pr-2">
                        <button className="text-vedam-gold font-bold text-sm hover:underline transition-opacity">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </motion.div>

        {/* Transcipt Modal */}
        <AnimatePresence>
          {selectedCall && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-vedam-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedCall(null)}>
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]" onClick={e => e.stopPropagation()}>
                <div className="bg-vedam-cream p-6 border-b border-gray-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-1">Call Details - {selectedCall.id}</h3>
                    <div className="font-black text-vedam-charcoal text-xl">{selectedCall.name}</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-full">{selectedCall.status}</span>
                  </div>
                </div>
                
                <div className="p-6 overflow-y-auto flex-1">
                  
                  {/* Audio Player Mock */}
                  <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-4 mb-8">
                    <button className="w-10 h-10 rounded-full bg-vedam-charcoal text-white flex items-center justify-center shadow-md">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-vedam-gold w-1/3"></div>
                    </div>
                    <div className="text-xs font-bold text-gray-500">01:15 / {selectedCall.duration}</div>
                  </div>

                  <h4 className="font-bold text-vedam-charcoal mb-4">Auto-Generated Transcript</h4>
                  <div className="space-y-4 text-sm font-medium">
                    <div className="flex flex-wrap gap-4">
                      <div className="w-8 h-8 rounded-full bg-vedam-charcoal/10 text-vedam-gold flex items-center justify-center font-bold text-xs shrink-0">AI</div>
                      <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none border border-gray-100 text-gray-700">Hi John, this is Sarah calling from Vedam Digitech. I noticed you downloaded our guide on AI automation. Do you have 2 minutes to chat about how it can help Acme Corp?</div>
                    </div>
                    <div className="flex flex-wrap gap-4 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-xs shrink-0">JP</div>
                      <div className="bg-vedam-cream p-3 rounded-2xl rounded-tr-none border border-vedam-gold/20 text-vedam-charcoal">Yeah, I have a minute. We're actually looking into automating our support tickets.</div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="w-8 h-8 rounded-full bg-vedam-charcoal/10 text-vedam-gold flex items-center justify-center font-bold text-xs shrink-0">AI</div>
                      <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none border border-gray-100 text-gray-700">Perfect! Our AI Chatbots can handle up to 80% of L1 support tickets instantly. Would you be open to a quick 10-minute demo on Tuesday to see it in action?</div>
                    </div>
                     <div className="flex flex-wrap gap-4 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-xs shrink-0">JP</div>
                      <div className="bg-vedam-cream p-3 rounded-2xl rounded-tr-none border border-vedam-gold/20 text-vedam-charcoal">Tuesday at 2 PM works for me.</div>
                    </div>
                  </div>

                </div>

                <div className="p-6 border-t border-gray-100 bg-white flex justify-end gap-3">
                  <button onClick={() => setSelectedCall(null)} className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold rounded-xl transition-colors">
                    Close
                  </button>
                  <button onClick={() => setSelectedCall(null)} className="px-6 py-2 bg-vedam-charcoal hover:bg-black text-white text-sm font-bold rounded-xl transition-colors shadow-lg">
                    Update CRM Record
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <AgentMarketingSection 
        title="Scale Your Voice Operations"
        description="Deploy human-like AI voice agents to handle thousands of concurrent calls for inbound support, outbound sales, and lead qualification."
        ctaText="Contact Us"
        features={[
          { icon: <Mic />, title: 'Conversational AI', desc: 'Ultra-low latency responses with natural pauses, intonation, and interruption handling.' },
          { icon: <Globe />, title: 'Multilingual Support', desc: 'Speak to your customers in over 30 languages with native accents and localization.' },
          { icon: <Headset />, title: 'Seamless Handover', desc: 'Automatically transfer complex calls to human agents along with full context and transcripts.' }
        ]}
      />
    </div>
  );
};

export default CallingAgentPage;
