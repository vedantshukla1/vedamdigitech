import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Send, Bot, Phone, Info } from 'lucide-react';

const WhatsappPage = ({ onBack }) => {
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Welcome to Vedam Digitech! I am the AI Assistant. Reply with 1 to Book a Call, or ask me any question.' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userMessage = input.toLowerCase();
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "I have noted your request. A team member will follow up shortly on this WhatsApp number!";
      if (userMessage.includes('1') || userMessage.includes('book')) {
        botResponse = "Great! Here is the Calendly link to book your free strategy session: calendly.com/vedam";
      } else if (userMessage.includes('price')) {
        botResponse = "Our WhatsApp AI bots start at $499/mo. It can handle order tracking, bookings, and FAQs instantly.";
      }
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#E5DDD5] relative pb-24 overflow-hidden font-sans">
      <header className="bg-[#075E54] px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-3 text-white"><Phone className="w-6 h-6" /><h2 className="text-xl font-bold">WhatsApp AI Bot</h2></div>
        <button onClick={onBack} className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-colors"><ArrowLeft className="w-4 h-4" /> Back</button>
      </header>

      {/* Demo Notice Banner */}
      <div className="bg-blue-50 border-b border-blue-100 px-6 py-3 text-center z-40 relative">
        <p className="text-blue-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is just a demonstration. Your actual platform will be 100% custom-built according to your specific business needs.</span>
        </p>
      </div>

      <main className="container mx-auto px-6 lg:px-16 pt-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 bg-white/80 p-8 rounded-3xl backdrop-blur-md shadow-sm">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">WhatsApp Business Agent</h1>
          <p className="text-lg text-gray-700">Capture leads and close sales directly on WhatsApp. Try chatting with the demo bot below!</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto bg-[#E5DDD5] rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900 relative">
          <div className="bg-[#075E54] px-4 py-4 flex items-center gap-3 text-white"><div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#075E54]"><Bot className="w-6 h-6"/></div><div><h3 className="font-bold leading-tight">Vedam AI</h3><p className="text-xs opacity-80">Online</p></div></div>
          <div className="flex flex-col h-[450px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm ${msg.role === 'user' ? 'bg-[#DCF8C6] rounded-tr-none text-black' : 'bg-white rounded-tl-none text-black'}`}>{msg.text}</div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-start">
                    <div className="p-3 bg-white rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1"><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div></div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 bg-[#F0F0F0] flex gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Type a message" className="flex-1 px-4 py-3 bg-white rounded-full focus:outline-none" />
              <button onClick={handleSend} disabled={!input.trim()} className="w-12 h-12 bg-[#128C7E] text-white rounded-full flex items-center justify-center shrink-0 disabled:opacity-50"><Send className="w-5 h-5 ml-1" /></button>
            </div>
          </div>
        </motion.div>
        
        <div id="how-it-works" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">1. Connect WhatsApp</h3>
            <p className="text-gray-600">Securely link your official WhatsApp Business API to our secure AI infrastructure.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">2. Train on FAQs</h3>
            <p className="text-gray-600">The bot learns your product catalog, pricing, and business rules instantly.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold font-heading mb-3">3. 24/7 Sales Engine</h3>
            <p className="text-gray-600">It replies to thousands of leads simultaneously, qualifying them and driving conversions.</p>
          </div>
        </div>

        {/* Request Similar Project CTA */}
        <div className="mt-24 text-center relative z-10 pb-12">
          <button 
            onClick={() => { onBack(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="inline-flex items-center justify-center px-10 py-5 bg-[#128C7E] text-white font-bold text-lg rounded-full hover:bg-[#075E54] transition-all shadow-2xl hover:shadow-[#128C7E]/30 hover:-translate-y-1"
          >
            Request Similar Project
          </button>
        </div>
      </main>
    </div>
  );
};
export default WhatsappPage;
