import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Stethoscope, Calendar as CalendarIcon, Clock, CheckCircle, Users, FileText, Settings, Video, ShieldCheck, Server, Monitor, Maximize2, Minimize2, MapPin, Phone, Lock, Info } from 'lucide-react';

const DoctorDemoPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [step, setStep] = useState(0);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isFrontendFullscreen, setIsFrontendFullscreen] = useState(false);

  const doctors = [
    { id: 1, name: "Dr. Sarah Jenkins", spec: "Cardiology", rating: 4.9, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
    { id: 2, name: "Dr. Michael Chen", spec: "Dermatology", rating: 4.8, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
    { id: 3, name: "Dr. Emily Torres", spec: "Pediatrics", rating: 5.0, img: "https://images.unsplash.com/photo-1594824432258-0ceecfb2f87a?w=400&q=80" }
  ];

  return (
    <div className="min-h-screen bg-white relative pb-24 font-sans text-vedam-charcoal">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><Stethoscope className="w-8 h-8 text-vedam-gold" /><h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">Healthcare System</h2></div>
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
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-bold text-vedam-charcoal mb-6">Clinic Management Platform</motion.h1>
        <p className="text-xl text-gray-600">A frictionless patient booking flow paired with a robust administrative dashboard for doctors and staff.</p>
      </section>

      {/* Section 1: Customer Frontend Simulator */}
      <section className="py-16 px-6 lg:px-16 bg-vedam-cream border-y border-gray-200 relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-vedam-gold/20 text-vedam-gold rounded-full font-bold text-sm mb-6"><Monitor className="w-4 h-4"/> Live Website Simulator</div>
          <h2 className="text-4xl font-heading font-bold mb-4">The Patient Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Maximize the window below to experience the 100% real, fully-functional clinic website we build for your brand.</p>
        </div>

        {/* Browser Mockup Wrapper */}
        <motion.div layout className={`mx-auto bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 z-50 ${isFrontendFullscreen ? 'fixed inset-0 w-full h-full rounded-none m-0' : 'max-w-6xl h-[800px] rounded-2xl relative'}`}>
          {/* Browser Chrome Header */}
          <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4 shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
            <div className="bg-white border border-gray-300 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex-1 max-w-md text-center mx-4 flex items-center justify-center gap-2"><Lock className="w-3 h-3 text-green-600"/> https://citycarehealth.com</div>
            <button onClick={() => setIsFrontendFullscreen(!isFrontendFullscreen)} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition-colors">
              {isFrontendFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Actual Simulated Website Content */}
          <div className="flex-1 overflow-auto bg-white text-left font-sans">
            
            {/* Simulated Navbar */}
            <nav className="bg-white py-4 px-8 flex justify-between items-center shadow-sm sticky top-0 z-40">
              <div className="flex items-center gap-2 text-vedam-gold font-bold text-2xl"><Stethoscope className="w-8 h-8"/> CityCare</div>
              <div className="hidden md:flex gap-8 font-bold text-gray-600">
                <a href="#" className="hover:text-vedam-gold">Home</a><a href="#services" className="hover:text-vedam-gold">Services</a><a href="#doctors" className="hover:text-vedam-gold">Doctors</a>
              </div>
              <button onClick={() => document.getElementById('booking-section').scrollIntoView({behavior: 'smooth'})} className="px-6 py-2 bg-vedam-charcoal text-white font-bold rounded-full hover:bg-black shadow-lg">Book Now</button>
            </nav>

            {/* Simulated Hero */}
            <div className="relative bg-vedam-cream py-24 px-8 overflow-hidden">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="flex-1">
                  <h1 className="text-5xl md:text-6xl font-bold text-vedam-charcoal mb-6 leading-tight">Premium Healthcare, <span className="text-vedam-gold">Without the Wait.</span></h1>
                  <p className="text-xl text-gray-600 mb-8">Book appointments instantly, access your medical records securely, and consult with top specialists from the comfort of your home.</p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => document.getElementById('booking-section').scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-vedam-charcoal text-white font-bold rounded-full hover:bg-black shadow-xl text-lg">Schedule Visit</button>
                    <button className="px-8 py-4 bg-white text-vedam-gold font-bold rounded-full hover:bg-vedam-cream shadow-sm border border-vedam-gold/20 text-lg">Our Services</button>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <img alt="Vedam Digitech" src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?w=800&q=80" className="rounded-3xl shadow-2xl relative z-10" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Booking Section */}
            <div id="booking-section" className="py-24 px-8 bg-white scroll-mt-20">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Book Your Appointment</h2>
                <p className="text-gray-600">Select a specialist and choose a time that works for you. It's completely free to book.</p>
              </div>

              <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden flex flex-col">
                <div className="bg-vedam-charcoal p-6 text-white shrink-0 text-center">
                  <h3 className="font-bold text-xl">Patient Portal</h3>
                </div>
                <div className="p-8 bg-vedam-cream min-h-[400px] flex flex-col relative">
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div key="step0" initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:20}} className="space-y-4">
                        <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">Step 1: Select a Specialist</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {doctors.map(doc => (
                            <div key={doc.id} onClick={() => { setSelectedDoc(doc); setStep(1); }} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-vedam-gold hover:shadow-md cursor-pointer transition-all text-center">
                              <img alt="Vedam Digitech" src={doc.img} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover shadow-sm"/>
                              <h5 className="font-bold">{doc.name}</h5>
                              <p className="text-gray-500 text-sm mb-2">{doc.spec}</p>
                              <div className="flex items-center justify-center gap-1 text-yellow-500 text-xs font-bold">★ {doc.rating}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {step === 1 && selectedDoc && (
                      <motion.div key="step1" initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:20}} className="h-full flex flex-col">
                        <button onClick={() => setStep(0)} className="text-sm font-bold text-vedam-gold hover:underline mb-6 flex items-center gap-1 w-fit"><ArrowLeft className="w-4 h-4"/> Back to Specialists</button>
                        <div className="flex items-center gap-4 mb-8 p-4 bg-white rounded-2xl border border-gray-200">
                          <img alt="Vedam Digitech" src={selectedDoc.img} className="w-16 h-16 rounded-full object-cover"/>
                          <div><h4 className="font-bold text-lg">{selectedDoc.name}</h4><p className="text-gray-500">{selectedDoc.spec}</p></div>
                        </div>
                        <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">Step 2: Select a Time</h4>
                        <p className="text-vedam-charcoal font-bold mb-4 flex items-center gap-2"><CalendarIcon className="w-5 h-5 text-vedam-gold"/> Tomorrow</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                          {["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"].map((time, i) => (
                            <button key={i} className="py-3 border border-gray-200 bg-white rounded-xl text-sm font-bold hover:bg-vedam-cream hover:border-vedam-gold hover:text-vedam-gold transition-colors">{time}</button>
                          ))}
                        </div>
                        <button onClick={() => setStep(2)} className="w-full py-4 mt-auto bg-vedam-charcoal text-white font-bold text-lg rounded-xl shadow-lg hover:bg-black transition-colors">Confirm Booking</button>
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div key="step2" initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="text-center py-12 flex flex-col justify-center items-center h-full">
                        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                        <h3 className="font-bold text-3xl mb-2">Booking Confirmed!</h3>
                        <p className="text-gray-600 mb-8 text-lg">We have sent a calendar invite to your email.</p>
                        <button onClick={() => setStep(0)} className="px-8 py-4 bg-white border border-gray-200 font-bold rounded-xl text-gray-700 hover:bg-vedam-cream shadow-sm">Book Another Appointment</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Simulated Footer */}
            <footer className="bg-gray-900 text-white py-12 px-8">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-white font-bold text-2xl mb-4"><Stethoscope className="w-6 h-6"/> CityCare</div>
                  <p className="text-gray-400">Providing world-class healthcare with a modern, digital-first approach.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Contact</h4>
                  <p className="text-gray-400 flex items-center gap-2 mb-2"><MapPin className="w-4 h-4"/> 123 Health Ave, NY</p>
                  <p className="text-gray-400 flex items-center gap-2"><Phone className="w-4 h-4"/> +1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Legal</h4>
                  <p className="text-gray-400 hover:text-white cursor-pointer mb-2">Privacy Policy</p>
                  <p className="text-gray-400 hover:text-white cursor-pointer">Terms of Service</p>
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
          <h2 className="text-4xl font-heading font-bold mb-4">Doctor's Schedule Dashboard</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Manage upcoming appointments, securely access patient records, and initiate telehealth video calls directly from the browser.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row h-auto md:h-[600px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="w-full md:w-64 bg-yellow-900 text-white p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-white">
              <Stethoscope className="w-8 h-8" />
              <h2 className="font-bold text-xl">Citycare Admin</h2>
            </div>
            <nav className="space-y-2 flex-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium"><CalendarIcon className="w-5 h-5"/> Appointments</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-yellow-200 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Users className="w-5 h-5"/> Patients</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-yellow-200 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><FileText className="w-5 h-5"/> Records</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-yellow-200 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Settings className="w-5 h-5"/> Settings</a>
            </nav>
          </div>
          <div className="flex-1 bg-vedam-cream flex flex-col">
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shrink-0"><h3 className="font-bold text-lg">Today's Schedule</h3></div>
            <div className="p-8 overflow-auto">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 max-w-3xl">
                <h4 className="font-bold mb-6 flex items-center gap-2"><Clock className="w-5 h-5 text-vedam-gold"/> Upcoming Consultations</h4>
                <div className="space-y-4">
                  {step === 2 && (
                    <div className="flex items-center gap-4 p-4 border border-yellow-200 rounded-xl bg-vedam-cream/50">
                      <div className="text-center w-16"><p className="font-bold text-vedam-gold">New</p></div>
                      <div className="flex-1"><p className="font-bold">New Booking</p><p className="text-sm text-gray-600">Just scheduled from Website</p></div>
                      <span className="bg-vedam-gold/20 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">Syncing</span>
                    </div>
                  )}
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-vedam-cream">
                    <div className="text-center w-16"><p className="font-bold text-vedam-gold">09:00</p><p className="text-xs text-gray-500">AM</p></div>
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80" alt="John Doe" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1"><p className="font-bold">John Doe</p><p className="text-sm text-gray-600">Routine Checkup</p></div>
                    <button className="p-3 bg-white rounded-xl text-vedam-gold shadow-sm hover:shadow-md transition-shadow"><Video className="w-5 h-5"/></button>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-vedam-cream transition-colors">
                    <div className="text-center w-16"><p className="font-bold">10:30</p><p className="text-xs text-gray-500">AM</p></div>
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Alice Smith" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1"><p className="font-bold">Alice Smith</p><p className="text-sm text-gray-600">Dermatology Consult</p></div>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything a modern healthcare facility needs to operate efficiently and provide world-class patient experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">HIPAA Compliant</h3>
              <p className="text-gray-600 leading-relaxed">All patient data is encrypted at rest and in transit, ensuring full compliance with healthcare privacy regulations.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Video className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Telehealth Integration</h3>
              <p className="text-gray-600 leading-relaxed">Built-in WebRTC video conferencing allows doctors to seamlessly conduct virtual consultations directly from the dashboard.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <CalendarIcon className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Smart Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">Automated appointment booking that prevents double-bookings and intelligently manages doctor availability slots.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Patient Portal</h3>
              <p className="text-gray-600 leading-relaxed">A dedicated self-service portal for patients to view test results, download prescriptions, and manage their health history.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <FileText className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Electronic Medical Records</h3>
              <p className="text-gray-600 leading-relaxed">Digitize all patient records with our comprehensive EMR system. Instantly access notes, lab results, and imaging files.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Automated Reminders</h3>
              <p className="text-gray-600 leading-relaxed">Drastically reduce no-show rates with automated SMS and email reminders sent to patients before their appointments.</p>
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
              { title: "Patient Books Online", desc: "Patient selects a time slot on your website based on your real-time availability." },
              { title: "Automated Reminders", desc: "System sends out WhatsApp and Email reminders 24 hours prior to reduce no-shows." },
              { title: "Doctor Consults", desc: "Doctor reviews the patient file on the dashboard and conducts the appointment." }
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
export default DoctorDemoPage;
