import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, FileText, Download, Award, Calendar, MessageSquare, BarChart, Monitor, Server, CreditCard, Smartphone, Maximize2, Minimize2, Lock, BookOpen, Bell, Info, CheckCircle } from 'lucide-react';

const SchoolDemoPage = ({ onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [isFrontendFullscreen, setIsFrontendFullscreen] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => { setDownloading(false); setDownloaded(true); setTimeout(() => setDownloaded(false), 3000); }, 1500);
  };

  return (
    <div className="min-h-screen bg-white relative pb-24 font-sans text-vedam-charcoal">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><GraduationCap className="w-8 h-8 text-vedam-gold" /><h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">EduPortal Platform</h2></div>
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
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-bold text-vedam-charcoal mb-6">Student Management Portal</motion.h1>
        <p className="text-xl text-gray-600">A unified frontend for parents and students, powered by a comprehensive administrative backend for schools.</p>
      </section>

      {/* Section 1: Customer Frontend Simulator */}
      <section className="py-16 px-6 lg:px-16 bg-vedam-cream border-y border-gray-200 relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-vedam-gold/20 text-vedam-gold rounded-full font-bold text-sm mb-6"><Monitor className="w-4 h-4"/> Live Website Simulator</div>
          <h2 className="text-4xl font-heading font-bold mb-4">The Student & Parent Portal</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Maximize the window below to interact with the secure, fully-featured portal where parents and students track progress.</p>
        </div>

        {/* Browser Mockup Wrapper */}
        <motion.div layout className={`mx-auto bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 z-50 ${isFrontendFullscreen ? 'fixed inset-0 w-full h-full rounded-none m-0' : 'max-w-6xl h-[800px] rounded-2xl relative'}`}>
          {/* Browser Chrome Header */}
          <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4 shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
            <div className="bg-white border border-gray-300 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex-1 max-w-md text-center mx-4 flex items-center justify-center gap-2"><Lock className="w-3 h-3 text-green-600"/> https://portal.heritageacademy.edu</div>
            <button onClick={() => setIsFrontendFullscreen(!isFrontendFullscreen)} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition-colors">
              {isFrontendFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Actual Simulated Website Content */}
          <div className="flex-1 overflow-auto bg-slate-50 text-left font-sans">
            
            {/* Simulated Navbar (Logged In State) */}
            <nav className="bg-indigo-900 text-white py-4 px-8 flex justify-between items-center shadow-md sticky top-0 z-40">
              <div className="flex items-center gap-3 font-bold text-xl"><GraduationCap className="w-8 h-8 text-indigo-300"/> Heritage Academy</div>
              <div className="hidden md:flex gap-8 font-medium text-indigo-200">
                <a href="#" className="text-white border-b-2 border-white pb-1">Dashboard</a>
                <a href="#" className="hover:text-white transition-colors">Academics</a>
                <a href="#" className="hover:text-white transition-colors">Fees</a>
                <a href="#" className="hover:text-white transition-colors">Calendar</a>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative"><Bell className="w-6 h-6 text-indigo-200 hover:text-white"/><span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span></button>
                <div className="flex items-center gap-2 bg-indigo-800 rounded-full py-1 px-1 pr-4 cursor-pointer hover:bg-indigo-700 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-indigo-200 text-indigo-900 flex items-center justify-center font-bold text-sm">AS</div>
                  <span className="text-sm font-medium">Alex Smith</span>
                </div>
              </div>
            </nav>

            {/* Simulated Portal Content */}
            <div className="max-w-6xl mx-auto py-8 px-4 sm:px-8">
              
              <div className="mb-8 flex justify-between items-end">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, Alex.</h1>
                  <p className="text-slate-500">Grade 10-B • Academic Year 2024-2025</p>
                </div>
                <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg shadow-sm hover:bg-slate-50 font-bold text-sm">
                  <FileText className="w-4 h-4"/> View Full Transcript
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div><p className="text-slate-500 text-sm font-bold mb-1">Attendance</p><p className="text-3xl font-black text-green-600">92%</p></div>
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600"><Calendar className="w-6 h-6"/></div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div><p className="text-slate-500 text-sm font-bold mb-1">Fee Status</p><p className="text-3xl font-black text-vedam-gold">Paid</p></div>
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-vedam-gold"><CreditCard className="w-6 h-6"/></div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div><p className="text-slate-500 text-sm font-bold mb-1">Class Rank</p><p className="text-3xl font-black text-orange-500">4th</p></div>
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500"><Award className="w-6 h-6"/></div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div><p className="text-slate-500 text-sm font-bold mb-1">Next Exam</p><p className="text-xl font-black text-slate-900 mt-2">Oct 14th</p></div>
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><BookOpen className="w-6 h-6"/></div>
                </div>
              </div>
              
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <div className="lg:col-span-2 flex flex-col gap-8">
                  {/* Results Section */}
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                      <h4 className="font-bold text-xl text-slate-900">Term 1 Results</h4>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Published</span>
                    </div>
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 font-bold border-b border-slate-200">
                        <tr><th className="px-6 py-4 text-slate-600">Subject</th><th className="px-6 py-4 text-slate-600">Grade</th><th className="px-6 py-4 text-slate-600">Teacher Remarks</th></tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100"><td className="px-6 py-5 font-medium text-slate-900">Mathematics</td><td className="px-6 py-5 font-black text-green-600 text-lg">A+</td><td className="px-6 py-5 text-slate-600">Excellent progress, actively participates.</td></tr>
                        <tr className="border-b border-slate-100"><td className="px-6 py-5 font-medium text-slate-900">Physics</td><td className="px-6 py-5 font-black text-green-600 text-lg">A</td><td className="px-6 py-5 text-slate-600">Good grasp of concepts.</td></tr>
                        <tr><td className="px-6 py-5 font-medium text-slate-900">Literature</td><td className="px-6 py-5 font-black text-yellow-600 text-lg">B+</td><td className="px-6 py-5 text-slate-600">Needs more reading practice.</td></tr>
                      </tbody>
                    </table>
                    <div className="p-6 border-t border-slate-100 mt-auto bg-slate-50">
                      <button onClick={handleDownload} disabled={downloading || downloaded} className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 font-bold rounded-xl text-white transition-all shadow-md ${downloaded ? 'bg-green-500' : 'bg-vedam-charcoal hover:bg-indigo-700'}`}>
                        {downloading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : downloaded ? <><CheckCircle className="w-5 h-5"/> Downloaded to device</> : <><Download className="w-5 h-5"/> Download Full Report Card (PDF)</>}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="flex flex-col gap-6">
                  {/* Notice Board */}
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                    <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2"><Bell className="w-5 h-5 text-vedam-gold"/> Notice Board</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
                        <span className="text-xs font-bold text-vedam-gold uppercase tracking-widest mb-1 block">Important</span>
                        <p className="font-bold text-sm text-indigo-900 mb-1">Parent-Teacher Meeting</p>
                        <p className="text-xs text-indigo-700">Scheduled for Friday, Oct 20th. Please book your slots via the calendar module.</p>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 block">General</span>
                        <p className="font-bold text-sm text-slate-900 mb-1">Science Fair Registration</p>
                        <p className="text-xs text-slate-600">Last date to submit projects is Monday.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
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
          <h2 className="text-4xl font-heading font-bold mb-4">School Administration System</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Teachers and admins can manage entire classes, input grades, send broadcast messages, and generate analytics reports.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row h-auto md:h-[600px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-white">
              <GraduationCap className="w-8 h-8" />
              <h2 className="font-bold text-xl">EduAdmin</h2>
            </div>
            <nav className="space-y-2 flex-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium"><BarChart className="w-5 h-5"/> Class Analytics</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><FileText className="w-5 h-5"/> Gradebook</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><Calendar className="w-5 h-5"/> Scheduling</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><MessageSquare className="w-5 h-5"/> Communications</a>
            </nav>
          </div>
          <div className="flex-1 bg-vedam-cream flex flex-col">
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shrink-0"><h3 className="font-bold text-lg">Class Performance: Grade 10</h3></div>
            <div className="p-8 overflow-auto flex flex-col gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg mb-6 flex items-center gap-2"><BarChart className="w-5 h-5 text-vedam-gold"/> Subject Averages</h4>
                <div className="flex flex-col gap-5">
                  {[{sub: 'Mathematics', pct: 85}, {sub: 'Physics', pct: 78}, {sub: 'Literature', pct: 82}, {sub: 'History', pct: 90}].map(item => (
                    <div key={item.sub}>
                      <div className="flex justify-between text-sm mb-2"><span className="font-bold text-gray-700">{item.sub}</span><span className="font-bold">{item.pct}%</span></div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-500 rounded-full" style={{width: `${item.pct}%`}}></div></div>
                    </div>
                  ))}
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A modern educational platform bridging the gap between administrators, teachers, and parents.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <CreditCard className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Automated Fee Collection</h3>
              <p className="text-gray-600 leading-relaxed">Integrated payment gateways with automated invoice generation and SMS reminders for upcoming tuition dues.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Smartphone className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Mobile App Ready</h3>
              <p className="text-gray-600 leading-relaxed">The entire architecture is designed to seamlessly compile into native iOS and Android apps for on-the-go access.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Award className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Digital Gradebook</h3>
              <p className="text-gray-600 leading-relaxed">Teachers can input assignment scores and calculate weighted final grades automatically without using external spreadsheets.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <FileText className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Automated Report Cards</h3>
              <p className="text-gray-600 leading-relaxed">Generate beautiful PDF report cards instantly at the end of each term, automatically pulling data directly from the gradebook.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <BarChart className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Performance Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Principals can identify struggling students and track overall class performance across different subjects in real-time.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Bell className="w-10 h-10 text-vedam-gold mb-4" />
              <h3 className="font-bold text-xl mb-3">Instant Notifications</h3>
              <p className="text-gray-600 leading-relaxed">Push notifications alert parents the moment a teacher logs a new grade, absence, or disciplinary report.</p>
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
              { title: "Teacher Inputs Data", desc: "Teachers log into the backend to quickly update attendance, post exam scores, and write remarks." },
              { title: "System Processing", desc: "The platform calculates averages, generates PDFs, and updates the central database instantly." },
              { title: "Parent Notification", desc: "Parents receive an automated push notification or email to view the new data on their portal." }
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
export default SchoolDemoPage;
