import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowLeft, Send, Sparkles, User, Bot, Info, Phone, Video, Search, MoreVertical, CheckCircle, BarChart3, Users, Zap, LayoutList, MessageSquareText } from 'lucide-react';
import AgentMarketingSection from '../components/AgentMarketingSection';

const WhatsappPage = ({ onBack }) => {
  const [activeChat, setActiveChat] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chats = [
    { id: 1, name: 'Elena Rodriguez', phone: '+1 (555) 019-2834', status: 'Active Bot', lastMsg: 'I would like to book a consultation for next week.', time: '10:42 AM', unread: 0, tag: 'Booking' },
    { id: 2, name: 'Michael Chang', phone: '+1 (555) 023-4411', status: 'Human Handover', lastMsg: 'I have a question about my recent invoice #8891.', time: '09:15 AM', unread: 2, tag: 'Support' },
    { id: 3, name: 'Cart Recovery (Automated)', phone: '+44 7700 900077', status: 'Automated', lastMsg: 'Hi! You left something in your cart. Here is 10% off...', time: 'Yesterday', unread: 0, tag: 'Sales' },
    { id: 4, name: 'Sarah Williams', phone: '+1 (555) 091-2299', status: 'Resolved', lastMsg: 'Thank you, the bot was very helpful!', time: 'Yesterday', unread: 0, tag: 'Feedback' },
  ];

  const messages = [
    { role: 'user', text: 'Hi, I would like to book a consultation for next week.', time: '10:41 AM' },
    { role: 'bot', text: 'Hello Elena! I can certainly help you with that. We have availability on Tuesday at 2 PM or Thursday at 10 AM. Which works best for you?', time: '10:41 AM' },
    { role: 'user', text: 'Tuesday at 2 PM would be perfect.', time: '10:42 AM' },
    { role: 'bot', text: 'Great! I have tentatively booked Tuesday at 2 PM. Could you please confirm your email address so I can send the calendar invite?', time: '10:42 AM' }
  ];

  return (
    <div className="min-h-screen bg-vedam-cream relative pb-24 overflow-hidden font-sans text-vedam-charcoal">
      
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <MessageCircle className="w-8 h-8 text-green-500" />
          <h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">WhatsApp CRM</h2>
        </div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
           <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
      </header>

      <div className="bg-vedam-cream border-b border-vedam-gold/20 px-6 py-3 text-center z-40 relative">
        <p className="text-vedam-charcoal font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> Experience the power of WhatsApp integrated directly into an enterprise CRM.</span>
        </p>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-12 pt-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-green-500/10 text-green-600 font-bold text-xs tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4" /> WhatsApp Business API
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold text-vedam-charcoal mb-4">
            WhatsApp Business CRM
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600">
            Manage bulk broadcasts, monitor automated bots, and handle human escalations in a unified WhatsApp inbox tailored for high-volume sales and support.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col xl:flex-row min-h-[650px]">
          
          {/* Left: Chats List */}
          <div className="w-full xl:w-[350px] border-r border-gray-200 flex flex-col bg-white">
            
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Bot className="w-5 h-5"/></div>
                <h3 className="font-bold text-vedam-charcoal">AI Agent Inbox</h3>
              </div>
              <div className="flex gap-2 text-gray-500">
                <BarChart3 className="w-5 h-5 cursor-pointer hover:text-vedam-gold" />
                <MoreVertical className="w-5 h-5 cursor-pointer hover:text-vedam-gold" />
              </div>
            </div>

            <div className="p-3 border-b border-gray-100 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search or start new chat" className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {chats.map(chat => (
                <div key={chat.id} onClick={() => setActiveChat(chat.id)} className={`p-4 border-b border-gray-50 flex gap-3 cursor-pointer transition-colors ${activeChat === chat.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0 font-bold text-lg relative">
                    {chat.name.charAt(0)}
                    {chat.status === 'Active Bot' && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>}
                    {chat.status === 'Human Handover' && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-white"></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-vedam-charcoal text-sm truncate">{chat.name}</h4>
                      <span className={`text-xs ${chat.unread > 0 ? 'text-green-500 font-bold' : 'text-gray-400'}`}>{chat.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500 truncate pr-2">{chat.lastMsg}</p>
                      {chat.unread > 0 && <span className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0">{chat.unread}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Active Chat & CRM Panel */}
          <div className="flex-1 flex flex-col bg-[#e5ddd5] relative">
            
            {/* WhatsApp Background Pattern */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

            <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">E</div>
                <div>
                  <h3 className="font-bold text-vedam-charcoal">Elena Rodriguez</h3>
                  <p className="text-xs text-green-600 font-medium flex items-center gap-1"><Bot className="w-3 h-3"/> AI Agent is managing this chat</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-500">
                <Phone className="w-5 h-5 cursor-pointer hover:text-vedam-gold" />
                <Video className="w-5 h-5 cursor-pointer hover:text-vedam-gold" />
                <Search className="w-5 h-5 cursor-pointer hover:text-vedam-gold" />
                <button className="px-3 py-1 bg-vedam-charcoal text-white text-xs font-bold rounded-lg ml-2 hover:bg-black transition-colors">Takeover Chat</button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 z-10 flex flex-col">
              <div className="mx-auto bg-[#e1f3fb] text-[#4a5e66] text-xs font-bold px-3 py-1 rounded-lg mb-4 shadow-sm">Today</div>
              
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[75%] p-3 rounded-xl shadow-sm text-sm relative ${msg.role === 'user' ? 'bg-white rounded-tl-none' : 'bg-[#dcf8c6] rounded-tr-none'}`}>
                    <div className="text-gray-800 leading-relaxed mb-3">{msg.text}</div>
                    <div className="flex items-center justify-end gap-1">
                      <span className="text-[10px] text-gray-400">{msg.time}</span>
                      {msg.role === 'bot' && <span className="text-green-500 text-[10px]">✓✓</span>}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-start">
                 <div className="max-w-[75%] p-3 rounded-xl shadow-sm text-sm bg-white rounded-tl-none flex gap-2 items-center">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
                 </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 z-10 flex items-center gap-3">
              <input type="text" placeholder="Type a message to manually intervene..." className="flex-1 py-3 px-4 rounded-full border-none focus:ring-1 focus:ring-green-500 text-sm shadow-sm" />
              <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors shadow-md">
                <Send className="w-5 h-5 ml-1" />
              </button>
            </div>

          </div>

          {/* Far Right: Customer CRM Data */}
          <div className="hidden lg:flex w-[280px] bg-white border-l border-gray-200 flex-col">
            <div className="p-6 border-b border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-3xl font-bold mb-3">E</div>
              <h3 className="font-bold text-vedam-charcoal text-lg">Elena Rodriguez</h3>
              <p className="text-sm text-gray-500">+1 (555) 019-2834</p>
            </div>
            
            <div className="p-6 flex-1 overflow-y-auto">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">CRM Details</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-gray-500 block mb-1">Status</span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 font-bold text-xs rounded-md border border-green-200 flex w-fit items-center gap-1"><Bot className="w-3 h-3"/> Active Automation</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Tags</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-yellow-50 text-yellow-600 font-bold text-xs rounded-md">New Lead</span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 font-bold text-xs rounded-md">Booking</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Opt-in Source</span>
                  <span className="font-bold text-vedam-charcoal">Facebook Ad Campaign</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Recent Activity</span>
                  <ul className="text-xs text-gray-600 space-y-2 mt-2">
                    <li className="flex gap-2 items-start"><CheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0"/> Started conversation (10:41 AM)</li>
                    <li className="flex gap-2 items-start"><CheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0"/> Requested booking (10:42 AM)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </main>

      <AgentMarketingSection 
        title="The Ultimate WhatsApp Sales Engine"
        description="Connect with customers where they already are. Send bulk broadcasts, automate cart recovery, and close deals directly on WhatsApp."
        ctaText="Connect WhatsApp API"
        features={[
          { icon: <Zap />, title: 'Automated Flows', desc: 'Build complex drag-and-drop conversational flows for lead qualification and support.' },
          { icon: <LayoutList />, title: 'Bulk Broadcasting', desc: 'Send targeted promotional campaigns to thousands of opted-in users with 98% open rates.' },
          { icon: <MessageSquareText />, title: 'Shared Team Inbox', desc: 'Collaborate with your sales and support teams in a single, unified WhatsApp dashboard.' }
        ]}
      />
    </div>
  );
};

export default WhatsappPage;
