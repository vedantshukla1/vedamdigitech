import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowLeft, Send, Sparkles, User, Bot, Info, Activity, Clock, CheckCircle, Tag, Search, Zap, ShieldCheck, Globe } from 'lucide-react';
import AgentMarketingSection from '../components/AgentMarketingSection';

const ChatbotPage = ({ onBack }) => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi there! I am the Vedam AI Support Agent. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const [tickets, setTickets] = useState([
    { id: 'TKT-1042', user: 'Alex D.', issue: 'Pricing Inquiry', status: 'Resolved by AI', time: 'Just now' },
    { id: 'TKT-1041', user: 'Emma S.', issue: 'Integration Help', status: 'Escalated to Human', time: '5m ago' },
    { id: 'TKT-1040', user: 'Michael T.', issue: 'Account Access', status: 'Resolved by AI', time: '12m ago' },
    { id: 'TKT-1039', user: 'Sarah W.', issue: 'Billing Error', status: 'Pending Human', time: '18m ago' }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userMessage = input.toLowerCase();
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "I can help with that! Our team at Vedam Digitech specializes in building custom AI solutions. Would you like to speak with a human consultant?";
      let issueTag = 'General Inquiry';
      
      if (userMessage.includes('price') || userMessage.includes('cost')) {
        botResponse = "Our AI chatbot solutions start at $999 for the initial setup, with a monthly maintenance fee based on usage. Should I have sales reach out to you with a detailed quote?";
        issueTag = 'Pricing Inquiry';
      } else if (userMessage.includes('features') || userMessage.includes('do')) {
        botResponse = "I can integrate with your existing knowledge base, handle 80% of L1 support tickets 24/7, capture leads, and seamlessly hand off complex issues to your human team!";
        issueTag = 'Feature Inquiry';
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);

      // Add to CRM tickets
      setTickets(prev => [{ id: `TKT-${1043 + prev.length}`, user: 'Live User', issue: issueTag, status: 'Active Chat', time: 'Just now' }, ...prev.slice(0, 4)]);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="min-h-screen bg-vedam-cream relative pb-24 overflow-hidden font-sans text-vedam-charcoal">
      
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-vedam-gold" />
          <h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">Support CRM</h2>
        </div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
           <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
      </header>

      <div className="bg-vedam-cream border-b border-vedam-gold/20 px-6 py-3 text-center z-40 relative">
        <p className="text-vedam-charcoal font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> Test the chat on the left to see live CRM ticket updates on the right.</span>
        </p>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vedam-charcoal/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-12 pt-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-charcoal/10 text-vedam-gold font-bold text-xs tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4" /> CRM Integration
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold text-vedam-charcoal mb-4">
            AI Customer Support CRM
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600">
            Monitor live bot conversations, track ticket resolution rates, and view seamless escalations to human agents all in one unified dashboard.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left: Chatbot Interface */}
          <div className="w-full lg:w-[400px] border-r border-gray-200 flex flex-col bg-gray-50">
            <div className="bg-vedam-charcoal text-white p-4 flex items-center justify-between shadow-md z-10 relative">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-vedam-charcoal"><Bot className="w-6 h-6" /></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-vedam-charcoal absolute bottom-0 right-0"></div>
                </div>
                <div>
                  <h3 className="font-bold">Vedam Support Bot</h3>
                  <p className="text-xs text-gray-300">Typically replies instantly</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
                    {msg.role === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-vedam-charcoal flex items-center justify-center text-white shrink-0 mt-1"><Bot className="w-4 h-4" /></div>
                    )}
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-vedam-gold text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex justify-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-vedam-charcoal flex items-center justify-center text-white shrink-0"><Bot className="w-4 h-4" /></div>
                    <div className="p-3 rounded-2xl bg-white border border-gray-200 rounded-tl-none shadow-sm flex items-center gap-1">
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-200">
              <div className="relative flex items-center">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a message..." className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-vedam-gold/50 text-sm" />
                <button onClick={handleSend} disabled={!input.trim()} className="absolute right-1 w-9 h-9 bg-vedam-gold hover:bg-yellow-600 text-white rounded-full flex items-center justify-center transition-colors disabled:bg-gray-300">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: CRM Backend */}
          <div className="flex-1 flex flex-col bg-white">
            
            <div className="p-6 border-b border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-50/50">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2"><Activity className="w-4 h-4"/> AI Resolution Rate</div>
                <div className="text-3xl font-black text-vedam-charcoal">82.4%</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2"><Clock className="w-4 h-4"/> Avg Response Time</div>
                <div className="text-3xl font-black text-vedam-charcoal">&lt; 1s</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2"><CheckCircle className="w-4 h-4"/> Tickets Today</div>
                <div className="text-3xl font-black text-vedam-charcoal">145</div>
              </div>
            </div>

            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
              <h3 className="font-bold text-lg text-vedam-charcoal">Live Ticket Feed</h3>
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search tickets..." className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none w-64" />
              </div>
            </div>

            <div className="flex-1 overflow-auto p-6 bg-white">
              <div className="space-y-3">
                <AnimatePresence>
                  {tickets.map((tkt, idx) => (
                    <motion.div key={tkt.id} initial={idx === 0 ? { opacity: 0, x: -20 } : false} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl transition-colors group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-vedam-charcoal text-sm">{tkt.user.charAt(0)}</div>
                        <div>
                          <div className="font-bold text-vedam-charcoal text-sm flex items-center gap-2">{tkt.user} <span className="text-xs text-gray-400 font-normal">{tkt.id}</span></div>
                          <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Tag className="w-3 h-3"/> {tkt.issue}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${tkt.status.includes('Resolved') ? 'bg-green-50 text-green-700 border-green-200' : tkt.status.includes('Active') ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-orange-50 text-orange-700 border-orange-200'}`}>
                          {tkt.status}
                        </span>
                        <div className="text-xs text-gray-400 w-16 text-right">{tkt.time}</div>
                        <button className="text-vedam-gold font-bold text-sm transition-opacity">Review</button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </motion.div>

      </main>

      <AgentMarketingSection 
        title="Automate Customer Support 24/7"
        description="Deliver instant, accurate resolutions to customer inquiries across your website and apps while reducing your support volume by up to 80%."
        ctaText="Build Your Chatbot"
        features={[
          { icon: <Zap />, title: 'Instant Resolutions', desc: 'Resolve common L1 issues in seconds without human intervention or wait times.' },
          { icon: <Globe />, title: 'Knowledge Base Integration', desc: 'Syncs perfectly with Zendesk, Intercom, and your internal docs to give accurate answers.' },
          { icon: <ShieldCheck />, title: 'Enterprise Security', desc: 'SOC2 compliant infrastructure ensuring your customer data is always safe and private.' }
        ]}
      />
    </div>
  );
};

export default ChatbotPage;
