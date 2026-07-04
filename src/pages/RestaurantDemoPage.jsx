import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Utensils, ShoppingCart, CheckCircle, LayoutDashboard, ListOrdered, Settings, TrendingUp, ShieldCheck, Zap, Server, Monitor, Maximize2, Minimize2, MapPin, Clock, MessageCircle, Mail, Lock, Info } from 'lucide-react';

const RestaurantDemoPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [cart, setCart] = useState({});
  const [checkoutStep, setCheckoutStep] = useState(0); 
  const [isFrontendFullscreen, setIsFrontendFullscreen] = useState(false);

  const menu = [
    { id: 1, name: "Truffle Burger", price: 18, desc: "Wagyu beef, truffle mayo, caramelized onions", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
    { id: 2, name: "Spicy Tuna Roll", price: 14, desc: "Fresh tuna, spicy mayo, cucumber, avocado", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80" },
    { id: 3, name: "Margherita Pizza", price: 16, desc: "San Marzano tomatoes, fresh mozzarella, basil", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" }
  ];

  const updateCart = (id, delta) => setCart(prev => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) }));
  const total = menu.reduce((acc, item) => acc + (cart[item.id] || 0) * item.price, 0);

  const handleCheckout = () => {
    setCheckoutStep(1);
    setTimeout(() => setCheckoutStep(2), 2000);
  };

  return (
    <div className="min-h-screen bg-white relative pb-24 font-sans text-vedam-charcoal">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><Utensils className="w-8 h-8 text-orange-500" /><h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">Restaurant System</h2></div>
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
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-bold text-vedam-charcoal mb-6">Complete Food Ordering Ecosystem</motion.h1>
        <p className="text-xl text-gray-600">A seamless customer ordering app perfectly integrated with a powerful restaurant management dashboard.</p>
      </section>

      {/* Section 1: Customer Frontend Simulator */}
      <section className="py-16 px-6 lg:px-16 bg-vedam-cream border-y border-gray-200 relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-bold text-sm mb-6"><Monitor className="w-4 h-4"/> Live Website Simulator</div>
          <h2 className="text-4xl font-heading font-bold mb-4">The Diner Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Maximize the window below to interact with the beautifully designed, lightning-fast ordering website your customers will use.</p>
        </div>

        {/* Browser Mockup Wrapper */}
        <motion.div layout className={`mx-auto bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 z-50 ${isFrontendFullscreen ? 'fixed inset-0 w-full h-full rounded-none m-0' : 'max-w-6xl h-[800px] rounded-2xl relative'}`}>
          {/* Browser Chrome Header */}
          <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4 shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
            <div className="bg-white border border-gray-300 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex-1 max-w-md text-center mx-4 flex items-center justify-center gap-2"><Lock className="w-3 h-3 text-green-600"/> https://bistrohaven.com</div>
            <button onClick={() => setIsFrontendFullscreen(!isFrontendFullscreen)} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition-colors">
              {isFrontendFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Actual Simulated Website Content */}
          <div className="flex-1 overflow-auto bg-stone-50 text-left font-sans">
            
            {/* Simulated Navbar */}
            <nav className="bg-white/80 backdrop-blur-md py-4 px-8 flex justify-between items-center sticky top-0 z-40 border-b border-stone-200">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-2xl font-serif italic">Bistro Haven</div>
              <div className="hidden md:flex gap-8 font-bold text-stone-600">
                <a href="#" className="hover:text-orange-600">Home</a><a href="#menu" className="hover:text-orange-600">Our Menu</a><a href="#" className="hover:text-orange-600">About</a>
              </div>
              <button onClick={() => document.getElementById('menu-section').scrollIntoView({behavior: 'smooth'})} className="px-6 py-2 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 flex items-center gap-2">
                Order Online <ShoppingCart className="w-4 h-4"/>
              </button>
            </nav>

            {/* Simulated Hero */}
            <div className="relative bg-stone-900 py-32 px-8 overflow-hidden text-center text-white">
              <img alt="Vedam Digitech" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Experience Culinary Excellence</h1>
                <p className="text-xl text-stone-300 mb-10">Hand-crafted dishes made from locally sourced ingredients, delivered hot to your door or ready for pickup.</p>
                <button onClick={() => document.getElementById('menu-section').scrollIntoView({behavior: 'smooth'})} className="px-10 py-5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 shadow-xl text-xl transition-transform hover:scale-105">View Menu & Order</button>
              </div>
            </div>

            {/* Simulated Interactive Menu Section */}
            <div id="menu-section" className="py-24 px-8 max-w-5xl mx-auto scroll-mt-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif italic mb-4 text-stone-900">Digital Menu</h2>
                <p className="text-stone-500 font-medium">Add items to your cart to see the live ordering flow.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {menu.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 group hover:shadow-xl transition-all">
                    <div className="h-48 overflow-hidden">
                      <img alt="Vedam Digitech" src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-xl text-stone-900">{item.name}</h4>
                        <span className="font-bold text-orange-600 text-xl">${item.price}</span>
                      </div>
                      <p className="text-stone-500 text-sm mb-6">{item.desc}</p>
                      
                      {cart[item.id] > 0 ? (
                        <div className="flex items-center justify-between bg-stone-100 rounded-xl p-2 border border-stone-200">
                          <button onClick={() => updateCart(item.id, -1)} className="w-10 h-10 rounded-lg bg-white shadow-sm font-bold text-xl text-stone-600 hover:text-orange-600">-</button>
                          <span className="font-bold text-lg">{cart[item.id]}</span>
                          <button onClick={() => updateCart(item.id, 1)} className="w-10 h-10 rounded-lg bg-orange-600 text-white shadow-sm font-bold text-xl">+</button>
                        </div>
                      ) : (
                        <button onClick={() => updateCart(item.id, 1)} className="w-full py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">Add to Order</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulated Checkout Drawer / Modal inline */}
              <AnimatePresence>
                {total > 0 && checkoutStep === 0 && (
                  <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:20}} className="bg-white border border-orange-200 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
                    <h3 className="font-bold text-2xl mb-6">Your Order</h3>
                    <div className="space-y-4 mb-6">
                      {menu.filter(item => cart[item.id]).map(item => (
                        <div key={item.id} className="flex justify-between items-center pb-4 border-b border-stone-100">
                          <div><p className="font-bold">{cart[item.id]}x {item.name}</p></div>
                          <p className="font-bold text-stone-600">${(cart[item.id] * item.price).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <p className="font-bold text-xl">Total</p>
                      <p className="font-bold text-3xl text-orange-600">${total.toFixed(2)}</p>
                    </div>
                    <button onClick={handleCheckout} className="w-full py-4 bg-orange-600 text-white font-bold text-xl rounded-xl hover:bg-orange-700 shadow-lg">Secure Checkout</button>
                  </motion.div>
                )}

                {checkoutStep === 1 && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-white border border-stone-200 rounded-3xl p-16 shadow-2xl max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <p className="font-bold text-2xl text-stone-900">Processing Payment...</p>
                  </motion.div>
                )}

                {checkoutStep === 2 && (
                  <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="bg-white border border-stone-200 rounded-3xl p-16 shadow-2xl max-w-2xl mx-auto text-center">
                    <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                    <h3 className="font-bold text-4xl mb-4">Order #1043 Received!</h3>
                    <p className="text-stone-500 text-xl mb-8">The kitchen has received your order and is preparing it now.</p>
                    <button onClick={() => { setCheckoutStep(0); setCart({}); }} className="px-8 py-4 bg-stone-100 font-bold rounded-xl text-stone-700 hover:bg-stone-200">Start New Order</button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Simulated Footer */}
            <footer className="bg-stone-900 text-stone-400 py-16 px-8">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <div className="text-white font-bold text-2xl font-serif italic mb-6">Bistro Haven</div>
                  <p className="mb-6">Elevating everyday dining into an unforgettable experience.</p>
                  <div className="flex flex-wrap gap-4"><MessageCircle className="w-5 h-5 hover:text-white cursor-pointer"/><Mail className="w-5 h-5 hover:text-white cursor-pointer"/></div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-6">Visit Us</h4>
                  <p className="flex items-center gap-2 mb-3"><MapPin className="w-4 h-4"/> 45 Culinary Blvd, NY</p>
                  <p className="flex items-center gap-2"><Clock className="w-4 h-4"/> Tue-Sun: 4PM - 11PM</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-6">Newsletter</h4>
                  <p className="mb-4">Get updates on seasonal menus.</p>
                  <div className="flex gap-2">
                    <input type="email" placeholder="Email" className="bg-stone-800 px-4 py-2 rounded-lg flex-1 text-white focus:outline-none"/>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold">Join</button>
                  </div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-vedam-gold/20 text-vedam-gold rounded-full font-bold text-sm mb-6"><Server className="w-4 h-4"/> Admin Backend</div>
          <h2 className="text-4xl font-heading font-bold mb-4">Powerful Kitchen Management</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Orders placed on the website instantly appear on the dashboard. Manage your menu, track analytics, and control the entire restaurant from a single screen.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row h-auto md:h-[600px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="w-full md:w-64 bg-gray-900 text-white p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-orange-500">
              <Utensils className="w-8 h-8" />
              <h2 className="font-bold text-xl text-white">BistroOS</h2>
            </div>
            <nav className="space-y-2 flex-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium"><LayoutDashboard className="w-5 h-5"/> Live Orders</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><ListOrdered className="w-5 h-5"/> Menu Items</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><TrendingUp className="w-5 h-5"/> Analytics</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Settings className="w-5 h-5"/> Settings</a>
            </nav>
          </div>
          <div className="flex-1 bg-vedam-cream flex flex-col">
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shrink-0"><h3 className="font-bold text-lg">Live Orders Queue</h3></div>
            <div className="p-6 overflow-auto">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-vedam-cream border-b border-gray-200">
                    <tr><th className="p-4">Order ID</th><th className="p-4">Items</th><th className="p-4">Status</th><th className="p-4">Total</th></tr>
                  </thead>
                  <tbody>
                    {checkoutStep === 2 && (
                      <tr className="border-b border-gray-100 bg-orange-50/50">
                        <td className="p-4 font-bold text-orange-600">#1043 (New)</td><td className="p-4 text-gray-600">Just placed on Website</td>
                        <td className="p-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs font-bold animate-pulse">Action Required</span></td><td className="p-4 font-bold text-orange-600">${total.toFixed(2)}</td>
                      </tr>
                    )}
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold">#1042</td><td className="p-4 text-gray-600">2x Truffle Burger...</td>
                      <td className="p-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs font-bold">Preparing</span></td><td className="p-4 font-bold">$36.00</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold">#1041</td><td className="p-4 text-gray-600">1x Margherita Pizza</td>
                      <td className="p-4"><span className="bg-vedam-gold/20 text-yellow-700 px-2 py-1 rounded-md text-xs font-bold">Ready</span></td><td className="p-4 font-bold">$16.00</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">#1040</td><td className="p-4 text-gray-600">3x Spicy Tuna Roll</td>
                      <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">Delivered</span></td><td className="p-4 font-bold">$42.00</td>
                    </tr>
                  </tbody>
                </table>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A full-stack ecosystem designed to increase your table turnover rate, boost online orders, and streamline kitchen operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Secure Payments</h3>
              <p className="text-gray-600 leading-relaxed">We integrate PCI-compliant payment processors like Stripe and Razorpay to ensure every transaction is encrypted and secure.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Real-time WebSockets</h3>
              <p className="text-gray-600 leading-relaxed">The dashboard uses WebSockets to instantly push new orders to the kitchen without requiring the page to be refreshed.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Utensils className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Digital Menu Management</h3>
              <p className="text-gray-600 leading-relaxed">Instantly update prices, hide sold-out items, and launch seasonal specials directly from the backend dashboard.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <LayoutDashboard className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Kitchen Display System</h3>
              <p className="text-gray-600 leading-relaxed">Route orders automatically to different prep stations (e.g. Grill vs Bar) based on the items in the customer's cart.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <TrendingUp className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Sales Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Identify your best-selling dishes, track peak ordering hours, and monitor daily revenue with advanced charts.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Order Pacing</h3>
              <p className="text-gray-600 leading-relaxed">Automatically pause online orders or increase quoted wait times during unexpected kitchen rushes to maintain quality.</p>
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
              { title: "Browse & Select", desc: "Customer scans a QR code at the table or visits the site to browse the digital menu." },
              { title: "Checkout & Pay", desc: "Customer securely pays using their preferred digital wallet or card." },
              { title: "Instant Notification", desc: "The admin dashboard pings the kitchen with the new order details instantly." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-orange-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
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
export default RestaurantDemoPage;
