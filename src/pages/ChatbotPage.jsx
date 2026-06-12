import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowLeft, Send, Sparkles, User, Bot, UploadCloud, ShieldCheck, Zap, Info } from 'lucide-react';

const ChatbotPage = ({ onBack }) => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi there! I am the Vedam AI Support Agent. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

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
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userMessage = input.toLowerCase();
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let botResponse = "I can help with that! Our team at Vedam Digitech specializes in building custom AI solutions. Would you like to speak with a human consultant?";
      
      if (userMessage.includes('price') || userMessage.includes('cost')) {
        botResponse = "Our AI chatbot solutions start at $999 for the initial setup, with a monthly maintenance fee based on usage. Should I have sales reach out to you with a detailed quote?";
      } else if (userMessage.includes('features') || userMessage.includes('do')) {
        botResponse = "I can integrate with your existing knowledge base, handle 80% of L1 support tickets 24/7, capture leads, and seamlessly hand off complex issues to your human team!";
      } else if (userMessage.includes('hello') || userMessage.includes('hi')) {
        botResponse = "Hello! What can I assist you with today? I can answer questions about our pricing, features, or book a consultation for you.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative pb-24 overflow-hidden font-sans text-gray-900">
      
      {/* Header */}
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-vedam-blue" />
          <h2 className="text-xl md:text-2xl font-bold font-heading text-black">Support Bot</h2>
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vedam-blue/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-16 pt-16 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-blue/10 text-vedam-blue font-bold text-xs tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-4 h-4" /> Interactive Demo
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-black mb-6"
          >
            AI Customer Support Chatbot
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Test our intelligent support agent. Ask it about pricing, features, or what it can do for your business. It learns from your documents and replies instantly 24/7.
          </motion.p>
        </div>

        {/* Browser Mockup containing the Chat Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 relative"
        >
          {/* Browser Header */}
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="mx-auto bg-white px-20 md:px-32 py-1 rounded-md text-xs font-bold text-gray-400 flex items-center gap-2 shadow-sm">
              <ShieldCheck className="w-3 h-3 text-green-500" /> vedamdigitech.onrender.com/support
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex flex-col h-[550px] bg-gray-50/50">
            
            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-4`}
                  >
                    {msg.role === 'bot' && (
                      <div className="w-10 h-10 rounded-full bg-vedam-blue flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
                        <Bot className="w-5 h-5" />
                      </div>
                    )}
                    
                    <div className={`max-w-[75%] p-4 rounded-2xl text-sm md:text-base leading-relaxed font-medium ${msg.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none shadow-sm'}`}>
                      {msg.text}
                    </div>

                    {msg.role === 'user' && (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 shrink-0 mt-1">
                        <User className="w-5 h-5" />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex justify-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-vedam-blue flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-gray-200 rounded-tl-none shadow-sm flex items-center gap-2">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-2 h-2 bg-gray-400 rounded-full"></motion.div>
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-2 h-2 bg-gray-400 rounded-full"></motion.div>
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-2 h-2 bg-gray-400 rounded-full"></motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Area */}
            <div className="p-4 md:p-6 bg-white border-t border-gray-200">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message here..."
                  className="w-full pl-6 pr-16 py-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-vedam-blue/50 focus:border-vedam-blue transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 w-10 h-10 bg-vedam-blue hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors disabled:bg-gray-300 shadow-md"
                >
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* How It Works Steps */}
        <div id="how-it-works" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-vedam-blue/10 text-vedam-blue rounded-2xl flex items-center justify-center font-bold text-2xl font-heading mb-6">
              <UploadCloud className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-black font-heading mb-3">1. Train on Your Data</h3>
            <p className="text-gray-600 leading-relaxed">Upload your PDFs, FAQs, or link your website. The AI reads and instantly memorizes your entire business knowledge base.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-vedam-blue/10 text-vedam-blue rounded-2xl flex items-center justify-center font-bold text-2xl font-heading mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-black font-heading mb-3">2. Deploy Instantly</h3>
            <p className="text-gray-600 leading-relaxed">Copy and paste a single line of code to embed the chatbot widget on your website or connect it directly to WhatsApp.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-vedam-blue/10 text-vedam-blue rounded-2xl flex items-center justify-center font-bold text-2xl font-heading mb-6">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-black font-heading mb-3">3. Resolve 24/7</h3>
            <p className="text-gray-600 leading-relaxed">The AI handles 80% of routine customer queries around the clock, escalating only complex issues to your human support team.</p>
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

export default ChatbotPage;
