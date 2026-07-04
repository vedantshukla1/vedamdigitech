import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, BarChart, ShieldCheck, Mail, Calendar, PhoneCall, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const CrmPage = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: <Users className="w-6 h-6 text-vedam-gold" />, title: 'Contact Management', desc: 'Organize all your leads and customers in one centralized, easily accessible database.' },
    { icon: <BarChart className="w-6 h-6 text-vedam-gold" />, title: 'Sales Pipeline', desc: 'Track deals from prospect to close with visual drag-and-drop kanban boards.' },
    { icon: <Mail className="w-6 h-6 text-vedam-gold" />, title: 'Email Automation', desc: 'Send personalized drip campaigns and trigger follow-ups automatically.' },
    { icon: <Calendar className="w-6 h-6 text-vedam-gold" />, title: 'Task Scheduling', desc: 'Never miss a follow-up with automated reminders and calendar syncing.' },
    { icon: <PhoneCall className="w-6 h-6 text-vedam-gold" />, title: 'Integrated Calling', desc: 'Make and log calls directly from the CRM with 1-click dialing.' },
    { icon: <ShieldCheck className="w-6 h-6 text-vedam-gold" />, title: 'Role-based Access', desc: 'Secure your data with granular permissions for different team members.' },
  ];

  return (
    <div className="min-h-screen bg-vedam-cream relative overflow-hidden font-sans text-vedam-charcoal pb-24">
      {/* Header */}
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-vedam-gold/10 p-2 rounded-lg">
            <Users className="w-6 h-6 text-vedam-gold" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">Ultimate CRM</h2>
        </div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
      </header>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-vedam-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-vedam-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="container mx-auto px-6 lg:px-12 pt-16 relative z-10">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-gold/10 text-vedam-gold font-bold text-xs tracking-wider uppercase mb-6">
              <Zap className="w-4 h-4" /> Supercharge Your Sales
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-vedam-charcoal mb-6 leading-tight">
              Manage Relationships. <span className="text-transparent bg-clip-text bg-gradient-to-r from-vedam-gold to-yellow-600">Close More Deals.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Our all-in-one CRM solution empowers your team to track leads, automate follow-ups, and build lasting customer relationships without the busywork.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-4 bg-vedam-charcoal hover:bg-black text-white font-bold rounded-xl shadow-xl shadow-black/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white border border-gray-200 hover:border-vedam-gold text-vedam-charcoal font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm">
                Book a Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500"/> No credit card required</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500"/> 14-day free trial</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500"/> Cancel anytime</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex-1 w-full relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80" alt="CRM Dashboard" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-vedam-charcoal mb-4">Everything you need to grow</h2>
            <p className="text-gray-600 text-lg">Packed with powerful features to streamline your entire sales process from first contact to loyal customer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-vedam-gold/30 transition-all hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-vedam-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-vedam-gold/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-vedam-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-vedam-charcoal to-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-vedam-gold/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-vedam-gold/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black font-heading mb-6">Ready to scale your business?</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10">Join thousands of companies using our CRM to close more deals and build better customer relationships.</p>
            <button className="px-10 py-5 bg-vedam-gold hover:bg-yellow-600 text-white font-black rounded-xl text-lg shadow-lg shadow-vedam-gold/30 transition-all hover:scale-105">
              Get Started Now — It's Free
            </button>
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default CrmPage;
