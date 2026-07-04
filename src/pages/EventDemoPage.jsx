import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Ticket, Calendar, MapPin, QrCode, Users, Megaphone, BarChart3, Settings, Monitor, Server, Globe, Bell, Maximize2, Minimize2, Lock, Music, Star, Info } from 'lucide-react';

const EventDemoPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [qty, setQty] = useState(1);
  const [step, setStep] = useState(0);
  const [isFrontendFullscreen, setIsFrontendFullscreen] = useState(false);

  const handleRSVP = () => {
    setStep(1);
    setTimeout(() => setStep(2), 1500);
  };

  return (
    <div className="min-h-screen bg-white relative pb-24 font-sans text-vedam-charcoal">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><Ticket className="w-8 h-8 text-vedam-gold" /><h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">Event Platform</h2></div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Site</button>
      </header>

      {/* Demo Notice Banner */}
      <div className="bg-vedam-cream border-b border-vedam-gold/20 px-6 py-3 text-center z-40 relative">
        <p className="text-vedam-charcoal font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is just a demonstration. Your actual platform will be 100% custom-built according to your specific business needs.</span>
        </p>
      </div>

      {/* Hero */}
      <section className="pt-20 pb-12 px-6 lg:px-16 text-center max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-bold text-vedam-charcoal mb-6">Ticketing & RSVP System</motion.h1>
        <p className="text-xl text-gray-600">A smooth ticket purchasing flow for attendees, managed by a real-time analytics dashboard for organizers.</p>
      </section>

      {/* Section 1: Customer Frontend Simulator */}
      <section className="py-16 px-6 lg:px-16 bg-vedam-cream border-y border-gray-200 relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-vedam-gold/20 text-vedam-gold rounded-full font-bold text-sm mb-6"><Monitor className="w-4 h-4"/> Live Website Simulator</div>
          <h2 className="text-4xl font-heading font-bold mb-4">High-Converting Event Landing Page</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Maximize the window below to interact with a gorgeous, conversion-optimized event landing page equipped with instant checkout.</p>
        </div>

        {/* Browser Mockup Wrapper */}
        <motion.div layout className={`mx-auto bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 z-50 ${isFrontendFullscreen ? 'fixed inset-0 w-full h-full rounded-none m-0' : 'max-w-6xl h-[800px] rounded-2xl relative'}`}>
          {/* Browser Chrome Header */}
          <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4 shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
            <div className="bg-white border border-gray-300 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex-1 max-w-md text-center mx-4 flex items-center justify-center gap-2"><Lock className="w-3 h-3 text-green-600"/> https://globaltechsummit.io</div>
            <button onClick={() => setIsFrontendFullscreen(!isFrontendFullscreen)} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition-colors">
              {isFrontendFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Actual Simulated Website Content */}
          <div className="flex-1 overflow-auto bg-vedam-charcoal text-left font-sans">
            
            {/* Simulated Navbar */}
            <nav className="absolute top-0 w-full px-8 py-6 flex justify-between items-center z-40 text-white mix-blend-difference">
              <div className="font-bold text-2xl tracking-widest uppercase">GTS 2024</div>
              <button onClick={() => document.getElementById('tickets').scrollIntoView({behavior: 'smooth'})} className="px-6 py-2 bg-white text-vedam-charcoal font-bold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform">Get Tickets</button>
            </nav>

            {/* Simulated Hero */}
            <div className="relative min-h-[600px] flex items-center justify-center px-8 overflow-hidden">
              <img alt="Vedam Digitech" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="relative z-10 text-center text-white mt-20">
                <p className="text-indigo-400 font-bold tracking-widest uppercase mb-4">The Premier Technology Conference</p>
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">Global Tech<br/>Summit 24.</h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-lg font-medium tracking-widest uppercase">
                  <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-indigo-500"/> Oct 24-26, 2024</span>
                  <span className="hidden sm:block text-indigo-500">•</span>
                  <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-indigo-500"/> Moscone Center, SF</span>
                </div>
                <button onClick={() => document.getElementById('tickets').scrollIntoView({behavior: 'smooth'})} className="px-10 py-5 bg-vedam-charcoal text-white font-bold uppercase tracking-widest text-lg rounded-full hover:bg-indigo-500 transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)]">Secure Your Spot</button>
              </div>
            </div>

            {/* Interactive Checkout Section */}
            <div id="tickets" className="py-24 px-8 bg-vedam-charcoal scroll-mt-10">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center uppercase tracking-widest">Select Tickets</h2>
                
                <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-vedam-charcoal text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl">Selling Fast</div>
                  
                  {step === 0 && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                      <div className="mb-8">
                        <h3 className="font-bold text-2xl mb-2">General Admission</h3>
                        <p className="text-gray-500 mb-6">Full 3-day access to all keynotes, breakout sessions, and the expo hall.</p>
                        <div className="flex justify-between items-center p-4 border border-gray-200 rounded-xl bg-vedam-cream">
                          <p className="font-bold text-2xl text-vedam-gold">$299.00</p>
                          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-2 py-1 shadow-sm">
                            <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 font-bold text-2xl text-gray-500 hover:text-vedam-charcoal">-</button>
                            <span className="font-bold w-6 text-center text-lg">{qty}</span>
                            <button onClick={() => setQty(qty + 1)} className="w-10 h-10 font-bold text-2xl text-gray-500 hover:text-vedam-charcoal">+</button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-6">
                        <div className="flex justify-between items-center mb-6">
                          <p className="font-bold text-gray-500 uppercase tracking-widest">Total Due</p>
                          <p className="font-black text-3xl text-vedam-charcoal">${(299 * qty).toFixed(2)}</p>
                        </div>
                        <button onClick={handleRSVP} className="w-full py-5 bg-vedam-charcoal text-white font-bold tracking-widest uppercase rounded-xl hover:bg-black shadow-xl transition-transform hover:scale-[1.02]">
                          Checkout securely
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <div className="flex flex-col items-center justify-center py-16">
                      <div className="w-16 h-16 border-4 border-vedam-gold border-t-transparent rounded-full animate-spin mb-6"></div>
                      <p className="font-bold text-xl uppercase tracking-widest text-gray-500">Processing Payment</p>
                    </div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="flex flex-col items-center justify-center text-center py-8">
                      <div className="bg-indigo-50 p-6 rounded-3xl mb-6 inline-block"><QrCode className="w-40 h-40 text-vedam-gold" /></div>
                      <h4 className="font-black text-3xl uppercase tracking-widest text-vedam-charcoal mb-2">You're confirmed!</h4>
                      <p className="text-gray-500 mb-8 max-w-sm">Your interactive QR ticket has been emailed to you. Please have this ready at the entrance.</p>
                      <button onClick={() => setStep(0)} className="px-8 py-3 bg-gray-100 text-gray-700 font-bold tracking-widest uppercase rounded-xl hover:bg-gray-200">Buy another ticket</button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Simulated Footer */}
            <footer className="bg-gray-900 text-gray-500 py-16 px-8 text-center border-t border-gray-800">
              <div className="font-bold text-2xl tracking-widest uppercase text-white mb-6">GTS 2024</div>
              <p className="mb-8 max-w-md mx-auto">Join 10,000+ tech leaders shaping the future of the internet.</p>
              <div className="flex justify-center gap-6 text-sm tracking-widest uppercase font-bold text-gray-600">
                <span className="hover:text-white cursor-pointer">Terms</span>
                <span className="hover:text-white cursor-pointer">Privacy</span>
                <span className="hover:text-white cursor-pointer">Contact</span>
              </div>
            </footer>
          </div>
        </motion.div>
        
        {/* Helper overlay when fullscreen to prevent getting trapped */}
        {isFrontendFullscreen && (
          <div className="fixed bottom-6 right-6 z-[110]">
            <button onClick={() => setIsFrontendFullscreen(false)} className="px-6 py-3 bg-vedam-charcoal text-white font-bold rounded-full shadow-2xl flex items-center gap-2 hover:bg-gray-800 transition-transform hover:scale-105">
              <Minimize2 className="w-5 h-5"/> Exit Fullscreen Website
            </button>
          </div>
        )}
      </section>

      {/* Section 2: Admin Dashboard */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-vedam-gold/20 text-vedam-gold rounded-full font-bold text-sm mb-6"><Server className="w-4 h-4"/> Organizer Backend</div>
          <h2 className="text-4xl font-heading font-bold mb-4">Live Event Analytics</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Track ticket sales in real-time, view demographic breakdowns, and manage your attendee list from a powerful dashboard.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row h-auto md:h-[600px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="w-full md:w-64 bg-indigo-900 text-white p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-white">
              <Ticket className="w-8 h-8 text-indigo-400" />
              <h2 className="font-bold text-xl">EventAdmin</h2>
            </div>
            <nav className="space-y-2 flex-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium"><BarChart3 className="w-5 h-5"/> Overview</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Users className="w-5 h-5"/> Attendees</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Megaphone className="w-5 h-5"/> Marketing</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-indigo-200 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Settings className="w-5 h-5"/> Settings</a>
            </nav>
          </div>
          <div className="flex-1 bg-vedam-cream flex flex-col">
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shrink-0"><h3 className="font-bold text-lg">Dashboard Overview</h3></div>
            <div className="p-8 overflow-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"><p className="text-gray-500 text-sm font-medium mb-1">Total Revenue</p><p className="text-3xl font-bold text-vedam-gold">$142,500</p></div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"><p className="text-gray-500 text-sm font-medium mb-1">Tickets Sold</p><p className="text-3xl font-bold text-vedam-charcoal">475</p></div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"><p className="text-gray-500 text-sm font-medium mb-1">Page Views</p><p className="text-3xl font-bold text-vedam-charcoal">12.4k</p></div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h4 className="font-bold text-lg mb-6">Recent Sales</h4>
                <div className="space-y-4">
                  {step === 2 && (
                    <div className="flex justify-between items-center p-4 border border-indigo-200 bg-indigo-50/50 rounded-xl">
                      <div><p className="font-bold">General Admission x{qty}</p><p className="text-sm text-gray-600">Just now</p></div>
                      <p className="font-bold text-green-600">+${(299 * qty).toFixed(2)}</p>
                    </div>
                  )}
                  <div className="flex justify-between items-center p-4 border border-gray-100 bg-vedam-cream rounded-xl">
                    <div><p className="font-bold">VIP Pass x1</p><p className="text-sm text-gray-600">10 mins ago</p></div>
                    <p className="font-bold text-green-600">+$899.00</p>
                  </div>
                  <div className="flex justify-between items-center p-4 border border-gray-100 bg-vedam-cream rounded-xl">
                    <div><p className="font-bold">General Admission x2</p><p className="text-sm text-gray-600">1 hour ago</p></div>
                    <p className="font-bold text-green-600">+$598.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Complete Description */}
      <section className="py-20 px-6 lg:px-16 bg-vedam-cream border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Comprehensive Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A robust, end-to-end event management platform built to scale from local workshops to massive global tech summits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Globe className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Custom Domains</h3>
              <p className="text-gray-600 leading-relaxed">Host your event page on your own custom domain (e.g., tickets.yourbrand.com) for a fully white-labeled experience.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Bell className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Dynamic Pricing</h3>
              <p className="text-gray-600 leading-relaxed">Automatically trigger price increases based on dates (Early Bird) or inventory levels remaining.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <QrCode className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">QR Code Check-in</h3>
              <p className="text-gray-600 leading-relaxed">Attendees receive unique QR tickets that staff can instantly scan at the door using our companion mobile app.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Ticket className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Seating Maps</h3>
              <p className="text-gray-600 leading-relaxed">Interactive venue maps allow attendees to select specific seats, tables, or VIP sections during the checkout process.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <BarChart3 className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Live Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Monitor ticket sales, page views, and conversion rates in real-time. See exactly where your traffic is coming from.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Megaphone className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Built-in Marketing</h3>
              <p className="text-gray-600 leading-relaxed">Send broadcast emails to past attendees, create affiliate tracking links, and integrate seamlessly with Facebook Pixel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How it works */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">How It Works</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {[
              { title: "Organizer Setup", desc: "You create the event, set ticket tiers, and publish the landing page from the dashboard." },
              { title: "Attendee Checkout", desc: "Attendees visit the page and purchase tickets using Stripe or PayPal." },
              { title: "QR Check-in", desc: "Attendees receive an automated email with a QR code, which your staff scans at the door using our mobile app." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-vedam-charcoal text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-vedam-cream p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center relative z-10 pb-12 pt-12 border-t border-gray-100">
        <button onClick={() => { onBack(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="inline-flex items-center justify-center px-10 py-5 bg-vedam-charcoal text-white font-bold text-lg rounded-full hover:bg-black transition-all shadow-2xl hover:-translate-y-1">
          Request Similar Project
        </button>
      </div>
    </div>
  );
};
export default EventDemoPage;
