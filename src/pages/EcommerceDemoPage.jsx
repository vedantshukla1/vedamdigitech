import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Sparkles, Star, Monitor, Server, Tag, Users, Percent, Package, Zap, BarChart, Maximize2, Minimize2, Lock, Search, Heart, Menu, Info } from 'lucide-react';

const EcommerceDemoPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80");
  const [added, setAdded] = useState(false);
  const [isFrontendFullscreen, setIsFrontendFullscreen] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    "https://images.unsplash.com/photo-1552346154-21d32810baa3?w=800&q=80"
  ];

  return (
    <div className="min-h-screen bg-white relative pb-24 font-sans text-gray-900">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><ShoppingBag className="w-8 h-8 text-vedam-blue" /><h2 className="text-xl md:text-2xl font-bold font-heading text-black">E-commerce Platform</h2></div>
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
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-bold text-black mb-6">Headless Storefront</motion.h1>
        <p className="text-xl text-gray-600">A lightning-fast, highly optimized storefront for customers, managed through a comprehensive merchant backend.</p>
      </section>

      {/* Section 1: Customer Frontend Simulator */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50 border-y border-gray-200 relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full font-bold text-sm mb-6"><Monitor className="w-4 h-4"/> Live Website Simulator</div>
          <h2 className="text-4xl font-heading font-bold mb-4">High-Converting Storefront</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Maximize the window below to interact with an ultra-premium product page designed to obliterate bounce rates and boost sales.</p>
        </div>

        {/* Browser Mockup Wrapper */}
        <motion.div layout className={`mx-auto bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 z-50 ${isFrontendFullscreen ? 'fixed inset-0 w-full h-full rounded-none m-0' : 'max-w-6xl h-[800px] rounded-2xl relative'}`}>
          {/* Browser Chrome Header */}
          <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4 shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
            <div className="bg-white border border-gray-300 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex-1 max-w-md text-center mx-4 flex items-center justify-center gap-2"><Lock className="w-3 h-3 text-green-600"/> https://hyperkicks.store</div>
            <button onClick={() => setIsFrontendFullscreen(!isFrontendFullscreen)} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition-colors">
              {isFrontendFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Actual Simulated Website Content */}
          <div className="flex-1 overflow-auto bg-white text-left font-sans">
            
            {/* Promo Banner */}
            <div className="bg-black text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
              Free Express Shipping on Orders Over $100
            </div>

            {/* Simulated Navbar */}
            <nav className="bg-white py-6 px-8 flex justify-between items-center border-b border-gray-100 sticky top-0 z-40">
              <div className="flex items-center gap-4">
                <Menu className="w-6 h-6 text-black md:hidden"/>
                <div className="text-black font-black text-2xl tracking-tighter uppercase">HYPERKICKS</div>
              </div>
              <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest uppercase">
                <a href="#" className="hover:text-gray-500 transition-colors border-b-2 border-black pb-1">Men</a>
                <a href="#" className="hover:text-gray-500 transition-colors">Women</a>
                <a href="#" className="hover:text-gray-500 transition-colors">Collections</a>
                <a href="#" className="hover:text-gray-500 transition-colors text-red-600">Sale</a>
              </div>
              <div className="flex items-center gap-6">
                <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"/>
                <Heart className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"/>
                <div className="relative cursor-pointer hover:opacity-70 transition-opacity">
                  <ShoppingBag className="w-5 h-5"/>
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
                </div>
              </div>
            </nav>

            {/* Simulated Product Page */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 py-8 px-4 sm:px-8">
              
              {/* Image Gallery */}
              <div className="flex flex-col gap-4">
                <AnimatePresence mode="wait">
                  <motion.div key={selectedImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="bg-gray-100 rounded-3xl overflow-hidden relative">
                    <img alt="Vedam Digitech" src={selectedImage} className="w-full h-[500px] object-cover mix-blend-multiply" />
                    <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"><Heart className="w-5 h-5 text-gray-400"/></button>
                  </motion.div>
                </AnimatePresence>
                <div className="grid grid-cols-3 gap-4">
                  {images.map((img, i) => (
                    <button key={i} onClick={() => setSelectedImage(img)} className={`rounded-xl overflow-hidden bg-gray-100 h-32 transition-all ${selectedImage === img ? 'ring-2 ring-black ring-offset-2' : 'opacity-60 hover:opacity-100'}`}>
                      <img alt="Vedam Digitech" src={img} className="w-full h-full object-cover mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Details */}
              <div className="py-8 lg:py-4 flex flex-col">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Running • Performance</span>
                    <div className="flex items-center gap-1 text-sm font-bold">
                      <Star className="w-4 h-4 fill-black text-black"/> 4.9 <span className="text-gray-400 underline cursor-pointer ml-1">(124 Reviews)</span>
                    </div>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">Nike Air Max Pro</h1>
                  <p className="text-2xl font-bold text-gray-900">$145.00</p>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">Engineered for extreme comfort and durability. The ultimate performance shoe designed specifically for urban runners who refuse to compromise on style or speed.</p>
                
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-sm uppercase tracking-widest">Select Size</span>
                    <span className="text-gray-500 text-sm underline cursor-pointer hover:text-black">Size Guide</span>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                    {["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"].map((size) => (
                      <button key={size} className={`py-3 border border-gray-300 rounded-lg font-bold hover:border-black hover:bg-black hover:text-white transition-colors ${size === "10" ? "border-black bg-black text-white" : ""}`}>{size}</button>
                    ))}
                  </div>
                </div>
                
                <button onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2000); }} className={`w-full py-5 font-black uppercase tracking-widest rounded-full text-lg transition-all shadow-xl ${added ? 'bg-green-500 text-white shadow-green-500/30' : 'bg-black text-white hover:bg-gray-800 shadow-black/20'}`}>
                  {added ? "Added to Cart ✓" : "Add to Cart"}
                </button>

                {/* AI Recommendation Widget */}
                <div className="mt-12 bg-indigo-50 border border-indigo-100 p-6 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1"><Sparkles className="w-3 h-3"/> AI Suggestion</div>
                  <p className="font-bold text-indigo-900 mb-4 uppercase tracking-widest text-sm">Frequently bought together</p>
                  <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-indigo-100 shadow-sm">
                    <img alt="Vedam Digitech" src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=200&q=80" className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
                    <div className="flex-1">
                      <p className="font-bold text-sm">Pro Running Socks (3-Pack)</p>
                      <p className="text-gray-500 font-bold text-sm">$24.00</p>
                    </div>
                    <button className="px-4 py-2 bg-black text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-gray-800 transition-colors">Add</button>
                  </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 space-y-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
                  <div className="flex justify-between cursor-pointer hover:text-black"><span>Free Delivery & Returns</span> <span>+</span></div>
                  <div className="flex justify-between cursor-pointer hover:text-black"><span>Product Details</span> <span>+</span></div>
                </div>
              </div>
            </div>

            {/* Simulated Footer */}
            <footer className="bg-black text-white py-20 px-8 mt-24">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                  <div className="font-black text-4xl tracking-tighter uppercase mb-6">HYPERKICKS</div>
                  <p className="text-gray-400 max-w-sm">Join our newsletter to get 10% off your first order and exclusive access to new drops.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
                  <ul className="space-y-4 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  </ul>
                </div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full font-bold text-sm mb-6"><Server className="w-4 h-4"/> Admin Backend</div>
          <h2 className="text-4xl font-heading font-bold mb-4">Merchant Command Center</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Manage inventory, fulfill orders, process refunds, and track sales analytics from a powerful, centralized dashboard.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row h-auto md:h-[600px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="w-full md:w-64 bg-black text-white p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-white">
              <ShoppingBag className="w-8 h-8" />
              <h2 className="font-bold text-xl">StoreAdmin</h2>
            </div>
            <nav className="space-y-2 flex-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium"><Tag className="w-5 h-5"/> Products</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Package className="w-5 h-5"/> Orders</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Users className="w-5 h-5"/> Customers</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Percent className="w-5 h-5"/> Discounts</a>
            </nav>
          </div>
          <div className="flex-1 bg-gray-50 flex flex-col">
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shrink-0"><h3 className="font-bold text-lg">Inventory Management</h3></div>
            <div className="p-8 overflow-auto">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr><th className="p-4">Product</th><th className="p-4">SKU</th><th className="p-4">Stock</th><th className="p-4">Price</th></tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 flex items-center gap-3"><img alt="Vedam Digitech" src={images[0]} className="w-10 h-10 rounded object-cover"/><span className="font-bold">Nike Air Max Pro</span></td>
                      <td className="p-4 text-gray-500">NK-AMP-01</td>
                      <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">42 in stock</span></td>
                      <td className="p-4 font-bold">$145.00</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 flex items-center gap-3"><img alt="Vedam Digitech" src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=200&q=80" className="w-10 h-10 rounded object-cover"/><span className="font-bold">Pro Running Socks</span></td>
                      <td className="p-4 text-gray-500">PR-SOX-3P</td>
                      <td className="p-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold">Low (5 left)</span></td>
                      <td className="p-4 font-bold">$24.00</td>
                    </tr>
                  </tbody>
                </table>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">An all-in-one headless commerce solution designed to maximize conversions, automate fulfillment, and scale seamlessly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-vedam-blue mb-4" />
              <h3 className="font-bold text-xl mb-3">Headless Architecture</h3>
              <p className="text-gray-600 leading-relaxed">We decouple the frontend from Shopify or WooCommerce, resulting in sub-second page load speeds that obliterate bounce rates.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <BarChart className="w-10 h-10 text-vedam-blue mb-4" />
              <h3 className="font-bold text-xl mb-3">AI Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">The storefront analyzes user behavior in real-time to suggest relevant cross-sells, historically boosting Average Order Value by 25%.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <ShoppingBag className="w-10 h-10 text-vedam-blue mb-4" />
              <h3 className="font-bold text-xl mb-3">Frictionless Checkout</h3>
              <p className="text-gray-600 leading-relaxed">One-page, optimized checkout flow integrated natively with Apple Pay, Google Pay, and Shop Pay for instant purchases.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Percent className="w-10 h-10 text-vedam-blue mb-4" />
              <h3 className="font-bold text-xl mb-3">Dynamic Discounts</h3>
              <p className="text-gray-600 leading-relaxed">Create complex promotional rules like BOGO, volume discounts, or flash sales automatically synced with your marketing campaigns.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Package className="w-10 h-10 text-vedam-blue mb-4" />
              <h3 className="font-bold text-xl mb-3">Automated Fulfillment</h3>
              <p className="text-gray-600 leading-relaxed">Direct integration with 3PL providers or your own warehouse to automatically print shipping labels and send tracking updates.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Search className="w-10 h-10 text-vedam-blue mb-4" />
              <h3 className="font-bold text-xl mb-3">Elastic Search</h3>
              <p className="text-gray-600 leading-relaxed">Lightning-fast, typo-tolerant search functionality allowing customers to find exactly what they are looking for instantly.</p>
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
              { title: "Merchant Adds Product", desc: "Using the backend, the merchant adds products, variants, and stock levels." },
              { title: "Frontend Sync", desc: "The headless frontend instantly updates via API, displaying the products securely." },
              { title: "Customer Checkout", desc: "Customers check out via a frictionless, one-page flow integrated with Apple Pay/Google Pay." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-black text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
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
export default EcommerceDemoPage;
