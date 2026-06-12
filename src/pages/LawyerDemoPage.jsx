import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Lock, Upload, FileCheck, ShieldCheck, Briefcase, FileText, CreditCard, FolderOpen, Monitor, Server, Bell, Maximize2, Minimize2, Phone, Mail, Info } from 'lucide-react';

const LawyerDemoPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [isFrontendFullscreen, setIsFrontendFullscreen] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => { setUploading(false); setUploaded(true); }, 2000);
  };

  return (
    <div className="min-h-screen bg-white relative pb-24 font-sans text-gray-900">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3"><Scale className="w-8 h-8 text-vedam-blue" /><h2 className="text-xl md:text-2xl font-bold font-heading text-black">Legal Platform</h2></div>
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
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-bold text-black mb-6">Secure Legal Portal</motion.h1>
        <p className="text-xl text-gray-600">An encrypted client-facing document vault combined with a powerful case management backend for attorneys.</p>
      </section>

      {/* Section 1: Customer Frontend Simulator */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50 border-y border-gray-200 relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full font-bold text-sm mb-6"><Monitor className="w-4 h-4"/> Live Website Simulator</div>
          <h2 className="text-4xl font-heading font-bold mb-4">The Client Vault Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Maximize the window below to interact with the ultra-secure client portal where documents are uploaded with bank-level encryption.</p>
        </div>

        {/* Browser Mockup Wrapper */}
        <motion.div layout className={`mx-auto bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col transition-all duration-500 z-50 ${isFrontendFullscreen ? 'fixed inset-0 w-full h-full rounded-none m-0' : 'max-w-6xl h-[800px] rounded-2xl relative'}`}>
          {/* Browser Chrome Header */}
          <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4 shrink-0">
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
            <div className="bg-white border border-gray-300 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex-1 max-w-md text-center mx-4 flex items-center justify-center gap-2"><Lock className="w-3 h-3 text-green-600"/> https://vault.smithandassociates.law</div>
            <button onClick={() => setIsFrontendFullscreen(!isFrontendFullscreen)} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition-colors">
              {isFrontendFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Actual Simulated Website Content */}
          <div className="flex-1 overflow-auto bg-slate-50 text-left font-serif">
            
            {/* Simulated Navbar (Logged In) */}
            <nav className="bg-slate-900 text-white py-5 px-8 flex justify-between items-center sticky top-0 z-40 border-b border-slate-800">
              <div className="flex items-center gap-3 font-bold text-2xl tracking-widest uppercase"><Scale className="w-6 h-6 text-amber-500"/> S&A Law</div>
              <div className="hidden md:flex gap-8 font-medium text-slate-300 text-sm tracking-widest uppercase">
                <a href="#" className="text-amber-500 border-b border-amber-500 pb-1">Client Vault</a>
                <a href="#" className="hover:text-white transition-colors">Invoices</a>
                <a href="#" className="hover:text-white transition-colors">Messages</a>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-5 py-2 border border-slate-700 rounded text-sm uppercase tracking-widest font-bold hover:bg-slate-800 transition-colors">Log Out</button>
              </div>
            </nav>

            {/* Simulated Vault Portal */}
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-8">
              
              <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Welcome, Jane Doe.</h1>
                <p className="text-slate-600 font-sans text-lg">Your connection is end-to-end encrypted. All files uploaded here are strictly confidential.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-12">
                <div className="bg-slate-900 p-8 text-white relative overflow-hidden shrink-0">
                  <ShieldCheck className="absolute -right-4 -bottom-4 w-48 h-48 opacity-10 text-amber-500" />
                  <div className="flex items-center gap-2 mb-2 text-amber-500 text-sm font-bold tracking-widest uppercase font-sans"><Lock className="w-4 h-4"/> Active Case File</div>
                  <h3 className="font-bold text-3xl">Estate Planning & Trust Formation</h3>
                  <p className="text-slate-300 mt-2 font-sans">Case #8492-B • Attorney: Robert Smith</p>
                </div>
                
                <div className="p-8 lg:p-12 font-sans">
                  <h4 className="font-bold text-xl mb-6 text-slate-900">Your Document Vault</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="p-5 border border-slate-200 rounded-lg bg-slate-50 flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-white border border-slate-200 text-amber-600 flex items-center justify-center shrink-0 shadow-sm"><FileCheck className="w-6 h-6"/></div>
                      <div><p className="font-bold text-slate-900">Initial_Notes.pdf</p><p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-bold">Uploaded by Attorney</p></div>
                    </div>
                    <div className="p-5 border border-slate-200 rounded-lg bg-slate-50 flex items-start gap-4 opacity-70">
                      <div className="w-12 h-12 rounded bg-white border border-slate-200 text-slate-400 flex items-center justify-center shrink-0 shadow-sm"><FileCheck className="w-6 h-6"/></div>
                      <div><p className="font-bold text-slate-900">ID_Card.jpg</p><p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-bold">Uploaded by You</p></div>
                    </div>
                  </div>

                  <div className={`border-2 border-dashed rounded-xl p-16 text-center transition-all ${uploaded ? 'border-green-500 bg-green-50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100'}`}>
                    {uploaded ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                        <p className="font-bold text-2xl text-green-800 font-serif">Files securely encrypted and uploaded.</p>
                        <p className="text-slate-600 mt-2 font-sans">Attorney Robert Smith has been notified.</p>
                      </div>
                    ) : uploading ? (
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-slate-300 border-t-amber-500 rounded-full animate-spin mb-4"></div>
                        <p className="font-bold text-slate-700 text-lg">Encrypting with AES-256 and uploading...</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="w-16 h-16 text-slate-400 mb-6" />
                        <p className="font-bold text-slate-900 text-2xl mb-3 font-serif">Upload Action Required</p>
                        <p className="text-slate-600 mb-8 max-w-md font-sans leading-relaxed">Please upload your 2023 financial records. Files are encrypted locally on your device before transmission.</p>
                        <button onClick={handleUpload} className="px-10 py-4 bg-slate-900 text-white font-bold tracking-widest uppercase text-sm rounded shadow-xl hover:bg-amber-600 transition-colors font-sans">Select Files to Upload</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* Simulated Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 px-8 font-sans border-t border-slate-800">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-white font-bold text-xl tracking-widest uppercase font-serif"><Scale className="w-5 h-5 text-amber-500"/> Smith & Associates</div>
                <div className="flex flex-wrap gap-8 text-sm font-bold tracking-widest uppercase">
                  <span className="flex items-center gap-2"><Phone className="w-4 h-4"/> (555) 123-LAW1</span>
                  <span className="flex items-center gap-2"><Mail className="w-4 h-4"/> secure@smith.law</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full font-bold text-sm mb-6"><Server className="w-4 h-4"/> Attorney Backend</div>
          <h2 className="text-4xl font-heading font-bold mb-4">Case Management System</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Attorneys can track case pipelines, receive alerts when clients upload files, and send automated invoices.</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row h-auto md:h-[600px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-white">
              <Scale className="w-8 h-8" />
              <h2 className="font-bold text-xl">LawConnect</h2>
            </div>
            <nav className="space-y-2 flex-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium"><Briefcase className="w-5 h-5"/> Active Cases</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><FolderOpen className="w-5 h-5"/> Vault Access</a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"><CreditCard className="w-5 h-5"/> Billing</a>
            </nav>
          </div>
          <div className="flex-1 bg-gray-50 flex flex-col">
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shrink-0"><h3 className="font-bold text-lg">Case Pipeline Overview</h3></div>
            <div className="p-8 overflow-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-lg">Case #8492-B</h4>
                  <p className="text-gray-500">Estate Planning - Client: J. Doe</p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">In Progress</span>
              </div>

              <h4 className="font-bold text-lg mb-4 text-gray-700">Recent Activity</h4>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Upload className="w-5 h-5"/></div>
                  <div className="flex-1"><p className="font-bold">Client uploaded files</p><p className="text-sm text-gray-500">Financial_Records_2023.pdf</p></div>
                  <p className="text-sm text-gray-400 font-medium">Just now</p>
                </div>
                <div className="p-4 border-b border-gray-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><CheckCircle className="w-5 h-5"/></div>
                  <div className="flex-1"><p className="font-bold">Retainer Invoice Paid</p><p className="text-sm text-gray-500">Invoice #INV-204</p></div>
                  <p className="text-sm text-gray-400 font-medium">Yesterday</p>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A hyper-secure, modern legal operating system designed to protect client confidentiality while boosting firm efficiency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Lock className="w-10 h-10 text-slate-800 mb-4" />
              <h3 className="font-bold text-xl mb-3">Bank-Level Security</h3>
              <p className="text-gray-600 leading-relaxed">AES-256 encryption ensures all uploaded documents are completely safe and compliant with legal confidentiality standards.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Bell className="w-10 h-10 text-slate-800 mb-4" />
              <h3 className="font-bold text-xl mb-3">Automated Alerts</h3>
              <p className="text-gray-600 leading-relaxed">Attorneys receive instant notifications when clients sign documents or upload files, eliminating the need for status update emails.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <FolderOpen className="w-10 h-10 text-slate-800 mb-4" />
              <h3 className="font-bold text-xl mb-3">Client Vault</h3>
              <p className="text-gray-600 leading-relaxed">A dedicated, branded portal where clients can securely access their case files, review evidence, and communicate with counsel.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <CreditCard className="w-10 h-10 text-slate-800 mb-4" />
              <h3 className="font-bold text-xl mb-3">Retainer Billing</h3>
              <p className="text-gray-600 leading-relaxed">Integrated trust accounting and retainer management that automatically prompts clients to replenish funds when balances run low.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <FileCheck className="w-10 h-10 text-slate-800 mb-4" />
              <h3 className="font-bold text-xl mb-3">e-Signatures</h3>
              <p className="text-gray-600 leading-relaxed">Legally binding electronic signatures built directly into the workflow for fast execution of contracts and affidavits.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-slate-800 mb-4" />
              <h3 className="font-bold text-xl mb-3">Audit Logs</h3>
              <p className="text-gray-600 leading-relaxed">Every action, view, and download is permanently logged with IP tracking to ensure verifiable chains of custody for all evidence.</p>
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
              { title: "Attorney Requests File", desc: "Using the backend, the attorney creates a secure document request." },
              { title: "Client Uploads", desc: "The client logs into the branded frontend portal to securely upload the document." },
              { title: "System Secures & Alerts", desc: "The system encrypts the file, stores it in the vault, and alerts the attorney." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
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
export default LawyerDemoPage;
