import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, HeartHandshake, ShieldCheck, Users, Target, Activity, FileText, Monitor, Server, Repeat, Send, Maximize2, Minimize2, Lock, Droplets, Sun, BookOpen, Info } from 'lucide-react';

const NgoDemoPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [amount, setAmount] = useState(50);
  const [donated, setDonated] = useState(false);
  const [raised, setRaised] = useState(42500);
  const [isFrontendFullscreen, setIsFrontendFullscreen] = useState(false);
  const goal = 50000;

  const handleDonate = () => {
    setDonated(true);
    setRaised(prev => prev + amount);
    setTimeout(() => setDonated(false), 4000);
  };

  const progress = Math.min(100, (raised / goal) * 100);

  return (
    <div className="min-h-screen bg-white relative pb-24 font-sans text-gray-900">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><Heart className="w-8 h-8 text-rose-500" /><h2 className="text-xl md:text-2xl font-bold font-heading text-black">NGO Platform</h2></div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Site</button>
      </header>

      {/* Demo Notice Banner */}
      <div className="bg-blue-50 border-b border-blue-100 px-6 py-3 text-center z-40 relative">
        <p className="text-blue-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This is just a demonstration. Your actual platform will be 100% custom-built according to your specific business needs.</span>
        </p>
      </div>

      {/* Hero */}
      <section className="pt-20 pb-12 px-6 lg:px-16 text-center max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-bold text-black mb-6">Digital Fundraising Suite</motion.h1>
        <p className="text-xl text-gray-600">A highly optimized donation flow for supporters, backed by a CRM dashboard for non-profit organizations.</p>
      </section>

      {/* Section 1: Customer Frontend Simulator */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50 border-y border-gray-200 relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-600 rounded-full font-bold text-sm mb-6"><Monitor className="w-4 h-4"/> Live Website Simulator</div>
          <h2 className="text-4xl font-heading font-bold mb-4">Emotional Fundraising Pages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Maximize the window below to interact with a gorgeous, high-converting donation landing page designed to build trust.</p>
        </div>

        {/* Browser Mockup Wrapper */}
        <motion.div layout className={`mx-auto bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 z-50 ${isFrontendFullscreen ? 'fixed inset-0 w-full h-full rounded-none m-0' : 'max-w-6xl h-[800px] rounded-2xl relative'}`}>
          {/* Browser Chrome Header */}
          <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4 shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
            <div className="bg-white border border-gray-300 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex-1 max-w-md text-center mx-4 flex items-center justify-center gap-2"><Lock className="w-3 h-3 text-green-600"/> https://hopefoundation.org</div>
            <button onClick={() => setIsFrontendFullscreen(!isFrontendFullscreen)} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition-colors">
              {isFrontendFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Actual Simulated Website Content */}
          <div className="flex-1 overflow-auto bg-stone-50 text-left font-sans">
            
            {/* Simulated Navbar */}
            <nav className="bg-white py-4 px-8 flex justify-between items-center shadow-sm sticky top-0 z-40">
              <div className="flex items-center gap-3 font-bold text-xl text-rose-700 font-serif"><HeartHandshake className="w-8 h-8"/> Hope Foundation</div>
              <div className="hidden md:flex gap-8 font-bold text-gray-600 uppercase tracking-widest text-sm">
                <a href="#" className="hover:text-rose-600 transition-colors">Our Mission</a>
                <a href="#" className="hover:text-rose-600 transition-colors">Projects</a>
                <a href="#" className="hover:text-rose-600 transition-colors">Impact</a>
              </div>
              <button onClick={() => document.getElementById('donate-section').scrollIntoView({behavior: 'smooth'})} className="px-6 py-2 bg-rose-600 text-white font-bold rounded-full hover:bg-rose-700 uppercase tracking-widest text-sm shadow-md transition-transform hover:scale-105">Donate</button>
            </nav>

            {/* Simulated Hero */}
            <div className="relative h-[500px] flex items-center justify-center">
              <img alt="Vedam Digitech" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-center text-white px-8 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">Bring clean water to those who need it most.</h1>
                <p className="text-xl md:text-2xl opacity-90 font-medium">Every drop counts. Your contribution can change a village forever.</p>
              </div>
            </div>

            {/* Information Grid */}
            <div className="bg-white py-12 px-8 border-b border-gray-200">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center p-6"><Droplets className="w-12 h-12 text-rose-500 mb-4"/><h4 className="font-bold text-xl mb-2">Clean Water</h4><p className="text-gray-500">Building sustainable wells in remote communities.</p></div>
                <div className="flex flex-col items-center p-6"><Sun className="w-12 h-12 text-amber-500 mb-4"/><h4 className="font-bold text-xl mb-2">Solar Energy</h4><p className="text-gray-500">Providing renewable light sources for schools.</p></div>
                <div className="flex flex-col items-center p-6"><BookOpen className="w-12 h-12 text-blue-500 mb-4"/><h4 className="font-bold text-xl mb-2">Education</h4><p className="text-gray-500">Supplying books and materials to local teachers.</p></div>
              </div>
            </div>

            {/* Interactive Donation Section */}
            <div id="donate-section" className="py-24 px-8 bg-stone-50 scroll-mt-20">
              <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row">
                
                <div className="w-full md:w-1/2 p-8 md:p-12 bg-rose-600 text-white flex flex-col justify-center">
                  <h3 className="font-bold text-4xl font-serif mb-6">Clean Water Initiative</h3>
                  <p className="text-rose-100 mb-10 text-lg">We are currently raising funds to build 5 new solar-powered wells in rural Kenya. Join us in making a difference.</p>
                  
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="flex justify-between font-bold text-sm mb-3">
                      <span className="text-white text-xl">${raised.toLocaleString()} raised</span>
                      <span className="text-rose-200">Goal: ${goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-3 bg-rose-800 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-white rounded-full" initial={{ width: "80%" }} animate={{ width: `${progress}%` }} transition={{ duration: 1 }} />
                    </div>
                    <p className="text-sm text-rose-200 mt-4 font-bold flex items-center gap-2"><Users className="w-4 h-4"/> 1,204 supporters have donated so far</p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {!donated ? (
                      <motion.div key="form" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, x:50}} className="flex flex-col h-full justify-center">
                        <h4 className="font-bold text-2xl mb-6 text-gray-900">Make a Donation</h4>
                        <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-xl w-fit">
                          <button className="px-6 py-2 bg-white shadow font-bold rounded-lg text-sm text-gray-900">One Time</button>
                          <button className="px-6 py-2 font-bold rounded-lg text-sm text-gray-500 hover:text-gray-900">Monthly</button>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {[25, 50, 100].map(val => (
                            <button key={val} onClick={() => setAmount(val)} className={`py-4 font-bold rounded-xl border-2 transition-colors text-xl ${amount === val ? 'border-rose-500 bg-rose-50 text-rose-600' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>${val}</button>
                          ))}
                        </div>
                        <div className="relative mb-8">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400 text-xl">$</span>
                          <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full py-4 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl font-bold text-xl focus:outline-none focus:border-rose-500 transition-colors" />
                        </div>

                        <button onClick={handleDonate} className="w-full py-5 font-bold rounded-xl bg-rose-600 hover:bg-rose-700 text-white shadow-xl shadow-rose-600/20 text-xl transition-transform hover:scale-[1.02]">
                          Donate ${amount}
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1"><Lock className="w-3 h-3"/> Secure Payment via Stripe</p>
                      </motion.div>
                    ) : (
                      <motion.div key="success" initial={{opacity:0, x:-50}} animate={{opacity:1, x:0}} className="flex flex-col items-center justify-center text-center h-full">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500"><Heart className="w-12 h-12 fill-green-500"/></div>
                        <h4 className="font-bold text-3xl mb-4 font-serif text-gray-900">Thank you so much!</h4>
                        <p className="text-gray-600 mb-8 text-lg">Your donation of ${amount} has been securely processed. A tax receipt has been emailed to you.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>

            {/* Simulated Footer */}
            <footer className="bg-stone-900 text-stone-400 py-16 px-8 text-center border-t border-stone-800">
              <div className="flex items-center justify-center gap-2 font-bold text-2xl tracking-widest text-white mb-6 font-serif"><HeartHandshake className="w-6 h-6"/> Hope Foundation</div>
              <p className="mb-8 max-w-md mx-auto">Registered 501(c)(3) Non-Profit Organization. All donations are tax-deductible.</p>
              <div className="flex justify-center gap-6 text-sm tracking-widest uppercase font-bold text-stone-500">
                <span className="hover:text-white cursor-pointer">Tax Info</span>
                <span className="hover:text-white cursor-pointer">Privacy</span>
                <span className="hover:text-white cursor-pointer">Contact</span>
              </div>
            </footer>
          </div>
        </motion.div>
        
        {/* Helper overlay when fullscreen to prevent getting trapped */}
        {isFrontendFullscreen && (
          <div className="fixed bottom-6 right-6 z-[110]">
            <button onClick={() => setIsFrontendFullscreen(false)} className="px-6 py-3 bg-black text-white font-bold rounded-full shadow-2xl flex items-center gap-2 hover:bg-gray-800 transition-transform hover:scale-105">
              <Minimize2 className="w-5 h-5"/> Exit Fullscreen Website
            </button>
          </div>
        )}
      </section>

      {/* Section 2: Admin Dashboard */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-600 rounded-full font-bold text-sm mb-6"><Server className="w-4 h-4"/> NGO Backend</div>
          <h2 className="text-4xl font-heading font-bold mb-4">Campaign Management CRM</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Monitor active campaigns, track recurring donors, and automatically issue tax receipts from a single unified dashboard.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row h-auto md:h-[600px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="w-full md:w-64 bg-rose-900 text-white p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-white">
              <Heart className="w-8 h-8 text-rose-400" />
              <h2 className="font-bold text-xl">CharityHub</h2>
            </div>
            <nav className="space-y-2 flex-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium"><Target className="w-5 h-5"/> Campaigns</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-rose-200 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Users className="w-5 h-5"/> Donors</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-rose-200 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Activity className="w-5 h-5"/> Analytics</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-rose-200 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><FileText className="w-5 h-5"/> Tax Receipts</a>
            </nav>
          </div>
          <div className="flex-1 bg-gray-50 flex flex-col">
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shrink-0"><h3 className="font-bold text-lg">Campaign Analytics</h3></div>
            <div className="p-8 overflow-auto flex flex-col lg:flex-row gap-6">
              
              <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h4 className="font-bold text-lg mb-6">Recent Donors</h4>
                <div className="space-y-4">
                  {donated && (
                    <div className="flex justify-between items-center p-4 bg-green-50 border border-green-100 rounded-xl">
                      <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-sm">G</div><p className="font-bold">Guest Supporter</p></div>
                      <p className="font-bold text-green-600">+${amount}</p>
                    </div>
                  )}
                  <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-100 rounded-xl">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-sm">A</div><p className="font-bold">Anonymous</p></div>
                    <p className="font-bold text-green-600">+$100</p>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-100 rounded-xl">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">M</div><p className="font-bold">Mark S.</p></div>
                    <p className="font-bold text-green-600">+$25</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-80 shrink-0">
                <div className="bg-gradient-to-br from-rose-500 to-rose-600 border border-rose-600 rounded-xl p-6 shadow-md text-white mb-6">
                  <p className="font-bold mb-1 opacity-90 text-sm">Monthly Target Status</p>
                  <p className="text-4xl font-bold mb-2">85%</p>
                  <p className="text-sm opacity-80">You are on track to hit your $100k monthly goal.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Complete Description */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Comprehensive Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A modern fundraising engine built to convert one-time visitors into lifelong advocates for your cause.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Repeat className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Recurring Donations</h3>
              <p className="text-gray-600 leading-relaxed">Built-in subscription management allows donors to set up automatic monthly contributions to sustain your NGO.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Send className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Tax Receipt Automation</h3>
              <p className="text-gray-600 leading-relaxed">The system instantly generates and emails legally compliant tax deduction receipts the moment a donation clears.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Target className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Goal Tracking</h3>
              <p className="text-gray-600 leading-relaxed">Dynamic progress bars update in real-time, leveraging psychology to encourage donors to help you cross the finish line.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <HeartHandshake className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Peer-to-Peer Fundraising</h3>
              <p className="text-gray-600 leading-relaxed">Empower your biggest supporters to create their own personal fundraising pages linked to your main campaign.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Donor CRM</h3>
              <p className="text-gray-600 leading-relaxed">Keep track of donor history, communication logs, and engagement levels to better target your future campaigns.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Fraud Protection</h3>
              <p className="text-gray-600 leading-relaxed">Advanced machine learning flags suspicious transactions and blocks automated card-testing bots from hitting your forms.</p>
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
              { title: "Create Campaign", desc: "Your NGO uses the backend CRM to launch a new fundraising campaign and set a goal." },
              { title: "Supporters Donate", desc: "Supporters visit the frontend link, feel emotionally connected, and securely donate via Stripe." },
              { title: "Automated Fulfillment", desc: "The platform logs the donor in the CRM and automatically emails them a PDF tax receipt." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-rose-600 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
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
        <button onClick={() => { onBack(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="inline-flex items-center justify-center px-10 py-5 bg-vedam-blue text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-all shadow-2xl hover:-translate-y-1">
          Request Similar Project
        </button>
      </div>
    </div>
  );
};
export default NgoDemoPage;
