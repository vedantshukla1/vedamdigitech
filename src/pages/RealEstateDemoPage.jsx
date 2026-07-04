import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Home, Search, MapPin, Filter, BedDouble, Bath, Grid, Map, Users, Heart, Monitor, Server, Building, Camera, Maximize2, Minimize2, Lock, Phone, Mail, Info } from 'lucide-react';

const RealEstateDemoPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isFrontendFullscreen, setIsFrontendFullscreen] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setShowResults(true); document.getElementById('search-results')?.scrollIntoView({behavior: 'smooth'}); }, 1500);
  };

  const properties = [ 
    { id: 1, price: "$1,250,000", title: "Luxury Penthouse", beds: 3, baths: 2, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
    { id: 2, price: "$850,000", title: "Modern Loft", beds: 2, baths: 2, img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80" },
    { id: 3, price: "$2,100,000", title: "Suburban Villa", beds: 5, baths: 4, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" }
  ];

  return (
    <div className="min-h-screen bg-white relative pb-24 font-sans text-vedam-charcoal">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><Home className="w-8 h-8 text-vedam-gold" /><h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">Real Estate Platform</h2></div>
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
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-bold text-vedam-charcoal mb-6">Property Listing Portal</motion.h1>
        <p className="text-xl text-gray-600">A high-speed property search engine paired with a comprehensive dashboard for real estate agents.</p>
      </section>

      {/* Section 1: Customer Frontend Simulator */}
      <section className="py-16 px-6 lg:px-16 bg-vedam-cream border-y border-gray-200 relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-vedam-gold/20 text-vedam-gold rounded-full font-bold text-sm mb-6"><Monitor className="w-4 h-4"/> Live Website Simulator</div>
          <h2 className="text-4xl font-heading font-bold mb-4">The Buyer Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Maximize the window below to interact with the lightning-fast, premium property discovery portal your clients will use.</p>
        </div>

        {/* Browser Mockup Wrapper */}
        <motion.div layout className={`mx-auto bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 z-50 ${isFrontendFullscreen ? 'fixed inset-0 w-full h-full rounded-none m-0' : 'max-w-6xl h-[800px] rounded-2xl relative'}`}>
          {/* Browser Chrome Header */}
          <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4 shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
            <div className="bg-white border border-gray-300 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex-1 max-w-md text-center mx-4 flex items-center justify-center gap-2"><Lock className="w-3 h-3 text-green-600"/> https://estatepro.com</div>
            <button onClick={() => setIsFrontendFullscreen(!isFrontendFullscreen)} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition-colors">
              {isFrontendFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Actual Simulated Website Content */}
          <div className="flex-1 overflow-auto bg-white text-left font-sans">
            
            {/* Simulated Navbar */}
            <nav className="bg-white py-5 px-8 flex justify-between items-center shadow-sm sticky top-0 z-40">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-2xl font-heading"><Home className="w-8 h-8 text-vedam-gold"/> EstatePro</div>
              <div className="hidden md:flex gap-8 font-bold text-gray-600">
                <a href="#" className="text-vedam-gold">Buy</a><a href="#" className="hover:text-vedam-gold">Rent</a><a href="#" className="hover:text-vedam-gold">Sell</a><a href="#" className="hover:text-vedam-gold">Agents</a>
              </div>
              <div className="flex items-center gap-4">
                <button className="hidden sm:block font-bold text-gray-600 hover:text-vedam-charcoal">Log In</button>
                <button className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">Sign Up</button>
              </div>
            </nav>

            {/* Simulated Hero with Interactive Search */}
            <div className="relative h-[600px] bg-slate-900 flex items-center justify-center px-8">
              <img alt="Vedam Digitech" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="relative z-10 w-full max-w-4xl text-center">
                <h1 className="text-white font-bold text-5xl md:text-7xl font-heading mb-6 drop-shadow-lg">Find a place you'll love.</h1>
                <p className="text-xl text-slate-200 mb-10 drop-shadow">Search over 10,000+ premium listings across the country.</p>
                
                <div className="bg-white p-3 rounded-2xl flex flex-col sm:flex-row items-center shadow-2xl gap-2 w-full mx-auto max-w-3xl">
                  <div className="flex-1 flex items-center px-4 w-full sm:border-r border-gray-200 py-2 sm:py-0">
                    <MapPin className="w-6 h-6 text-vedam-gold mr-3 shrink-0" />
                    <input type="text" placeholder="Enter City, Neighborhood, or Zip" className="w-full py-3 focus:outline-none text-lg font-medium text-vedam-charcoal placeholder:text-gray-400" />
                  </div>
                  <button onClick={handleSearch} className="w-full sm:w-auto px-10 py-4 bg-vedam-charcoal text-white font-bold text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors shrink-0">
                    {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><Search className="w-5 h-5" /> Search</>}
                  </button>
                </div>
              </div>
            </div>

            {/* Simulated Search Results */}
            <div id="search-results" className="py-24 px-8 bg-vedam-cream min-h-[500px]">
              <div className="max-w-6xl mx-auto">
                {showResults && !loading && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col">
                    <div className="flex justify-between items-end mb-8">
                      <div>
                        <h2 className="text-3xl font-heading font-bold mb-2">Properties in New York</h2>
                        <p className="text-gray-600">Showing 3 premium listings matching your criteria.</p>
                      </div>
                      <button className="flex items-center gap-2 font-bold text-gray-700 bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors"><Filter className="w-5 h-5"/> Filters</button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                      {properties.map((prop, i) => (
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: i*0.1}} key={prop.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group cursor-pointer hover:shadow-xl transition-all">
                          <div className="h-64 overflow-hidden relative">
                            <img alt="Vedam Digitech" src={prop.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-colors"><Heart className="w-5 h-5"/></button>
                          </div>
                          <div className="p-6">
                            <p className="font-bold text-3xl text-slate-900 mb-2">{prop.price}</p>
                            <p className="font-bold text-gray-600 mb-4">{prop.title}</p>
                            <div className="flex gap-6 text-sm text-gray-500 font-medium pt-4 border-t border-gray-100">
                              <span className="flex items-center gap-2"><BedDouble className="w-5 h-5 text-vedam-gold"/> {prop.beds} Beds</span>
                              <span className="flex items-center gap-2"><Bath className="w-5 h-5 text-vedam-gold"/> {prop.baths} Baths</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {!showResults && !loading && (
                  <div className="h-full flex flex-col items-center justify-center py-20 text-gray-400">
                    <Search className="w-20 h-20 mb-6 opacity-30" />
                    <p className="font-medium text-2xl text-gray-500">Search for a location to view live listings</p>
                  </div>
                )}
              </div>
            </div>

            {/* Simulated Footer */}
            <footer className="bg-slate-900 text-slate-400 py-16 px-8">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 text-white font-bold text-2xl font-heading mb-4"><Home className="w-6 h-6"/> EstatePro</div>
                  <p className="text-slate-400 max-w-sm mb-6">The modern way to buy and sell real estate. Powered by industry-leading technology.</p>
                  <div className="flex flex-wrap gap-4"><Phone className="w-5 h-5 hover:text-white cursor-pointer"/><Mail className="w-5 h-5 hover:text-white cursor-pointer"/></div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Properties</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white">Homes for Sale</a></li>
                    <li><a href="#" className="hover:text-white">Homes for Rent</a></li>
                    <li><a href="#" className="hover:text-white">Commercial</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Careers</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                  </ul>
                </div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full font-bold text-sm mb-6"><Server className="w-4 h-4"/> Admin Backend</div>
          <h2 className="text-4xl font-heading font-bold mb-4">Agent Command Center</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A secure backend where agents can easily upload 3D virtual tours, manage listings, and view lead analytics.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row h-auto md:h-[600px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-white">
              <Home className="w-8 h-8" />
              <h2 className="font-bold text-xl">EstatePro</h2>
            </div>
            <nav className="space-y-2 flex-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium"><Grid className="w-5 h-5"/> My Listings</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Map className="w-5 h-5"/> Lead Map</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Users className="w-5 h-5"/> Inquiries</a>
            </nav>
          </div>
          <div className="flex-1 bg-vedam-cream flex flex-col">
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shrink-0"><h3 className="font-bold text-lg">Active Listings</h3></div>
            <div className="p-8 overflow-auto">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {properties.map(prop => (
                  <div key={prop.id} className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 shadow-sm">
                    <img alt="Vedam Digitech" src={prop.img} className="w-24 h-24 rounded-lg object-cover shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-bold text-lg line-clamp-1">{prop.title}</p>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Active</span>
                      </div>
                      <p className="font-bold text-slate-600 mb-2">{prop.price}</p>
                      <div className="flex gap-2 text-sm text-slate-500">
                        <span className="bg-slate-100 px-2 py-1 rounded">12 Leads</span>
                        <span className="bg-slate-100 px-2 py-1 rounded">2 Tours</span>
                      </div>
                    </div>
                  </div>
                ))}
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Equip your brokerage with an enterprise-grade platform built to capture more leads and close deals faster.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Camera className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">3D Virtual Tours</h3>
              <p className="text-gray-600 leading-relaxed">Integrate Matterport or customized 3D web viewers allowing buyers to walk through properties directly from their browser.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Building className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Map Integrations</h3>
              <p className="text-gray-600 leading-relaxed">Advanced Google Maps API integration allows users to search by drawing areas or filtering by proximity to schools.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Filter className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Smart Filtering</h3>
              <p className="text-gray-600 leading-relaxed">Lightning-fast search filters for price, beds, baths, amenities, and property type to help buyers find exactly what they want.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Map className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Neighborhood Insights</h3>
              <p className="text-gray-600 leading-relaxed">Automatically pull demographic data, crime rates, and local school scores into every listing page to boost buyer confidence.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Agent CRM</h3>
              <p className="text-gray-600 leading-relaxed">Built-in Customer Relationship Management system to track leads, schedule showings, and automate follow-up emails.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Phone className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Lead Routing</h3>
              <p className="text-gray-600 leading-relaxed">Intelligently route new inquiries to the most available or specialized agent on your team via instant SMS alerts.</p>
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
              { title: "Agent Uploads Listing", desc: "Using the backend dashboard, agents upload photos, details, and 3D tours in minutes." },
              { title: "Buyer Discovers Property", desc: "The lightning-fast frontend allows buyers to discover the listing through map or text search." },
              { title: "Lead Generation", desc: "Buyer inquiries are routed instantly to the agent's CRM and email for immediate follow-up." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
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
export default RealEstateDemoPage;
