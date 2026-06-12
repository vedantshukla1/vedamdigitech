import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Packages from './components/Packages';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AgentPage from './pages/AgentPage';
import ChatbotPage from './pages/ChatbotPage';
import SocialMediaPage from './pages/SocialMediaPage';
import InvoicePage from './pages/InvoicePage';
import WhatsappPage from './pages/WhatsappPage';
import GenericAgentPage from './pages/GenericAgentPage';
import GenericWebPage from './pages/GenericWebPage';
import GenericSeoPage from './pages/GenericSeoPage';

import RestaurantDemoPage from './pages/RestaurantDemoPage';
import DoctorDemoPage from './pages/DoctorDemoPage';
import RealEstateDemoPage from './pages/RealEstateDemoPage';
import SchoolDemoPage from './pages/SchoolDemoPage';
import EcommerceDemoPage from './pages/EcommerceDemoPage';
import LawyerDemoPage from './pages/LawyerDemoPage';
import EventDemoPage from './pages/EventDemoPage';
import NgoDemoPage from './pages/NgoDemoPage';

import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import { useSEO } from './hooks/useSEO';

function LandingPage() {
  const navigate = useNavigate();
  useSEO({ 
    title: 'Home', 
    description: 'Vedam Digitech is a leading digital agency specializing in custom web applications, AI chatbots, and SEO automation.'
  });
  
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-vedam-blue selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio 
          onNavigateToDynamic={(route) => navigate('/' + route)}
        />
        <Process />
        <WhyChooseUs />
        <TechStack />
        <Testimonials />
        <Packages />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ai-agent" element={<AgentPage onBack={() => navigate('/')} />} />
      <Route path="/ai-chatbot" element={<ChatbotPage onBack={() => navigate('/')} />} />
      <Route path="/ai-social" element={<SocialMediaPage onBack={() => navigate('/')} />} />
      <Route path="/ai-invoice" element={<InvoicePage onBack={() => navigate('/')} />} />
      <Route path="/ai-whatsapp" element={<WhatsappPage onBack={() => navigate('/')} />} />
      <Route path="/ai-hr" element={<GenericAgentPage title="AI HR Recruitment Agent" description="Automatically screen thousands of resumes, rank top candidates based on your specific job requirements, and seamlessly schedule interviews via Calendly." onBack={() => navigate('/')} />} />
      <Route path="/ai-review" element={<GenericAgentPage title="AI Review Responder" description="Connect to Google My Business and Zomato. The AI reads every customer review and instantly drafts a polite, brand-aligned response—handling reputation management automatically." onBack={() => navigate('/')} />} />
      <Route path="/ai-report" element={<GenericAgentPage title="AI Report Generator" description="Consolidate data from Salesforce, Shopify, and Google Analytics. The AI automatically compiles and emails comprehensive business performance reports every Monday morning." onBack={() => navigate('/')} />} />
      
      {/* Web & App Routes */}
      <Route path="/web-restaurant" element={<RestaurantDemoPage onBack={() => navigate('/')} />} />
      <Route path="/web-doctor" element={<DoctorDemoPage onBack={() => navigate('/')} />} />
      <Route path="/web-real-estate" element={<RealEstateDemoPage onBack={() => navigate('/')} />} />
      <Route path="/web-school" element={<SchoolDemoPage onBack={() => navigate('/')} />} />
      <Route path="/web-ecommerce" element={<EcommerceDemoPage onBack={() => navigate('/')} />} />
      <Route path="/web-lawyer" element={<LawyerDemoPage onBack={() => navigate('/')} />} />
      <Route path="/web-event" element={<EventDemoPage onBack={() => navigate('/')} />} />
      <Route path="/web-ngo" element={<NgoDemoPage onBack={() => navigate('/')} />} />

      {/* SaaS Routes (Using GenericWebPage as it represents software well) */}
      <Route path="/saas-dashboard" element={<GenericWebPage title="Local Business Dashboard" description="A centralized SaaS allowing local businesses to manage reviews, track leads, and view analytics all in one place." image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80" onBack={() => navigate('/')} />} />
      <Route path="/saas-content" element={<GenericWebPage title="AI Content Writing SaaS" description="A powerful SaaS platform that generates high-converting blog posts, social media updates, and ad copy in seconds." image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1600&q=80" onBack={() => navigate('/')} />} />
      <Route path="/saas-whatsapp" element={<GenericWebPage title="WhatsApp Marketing SaaS" description="An enterprise SaaS for bulk messaging, automated follow-ups, and building complex WhatsApp bot workflows." image="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=1600&q=80" onBack={() => navigate('/')} />} />
      <Route path="/saas-invoice" element={<GenericWebPage title="Invoice & Accounting SaaS" description="A GST-ready, simple billing tool that helps small businesses track expenses and get paid faster." image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80" onBack={() => navigate('/')} />} />
      <Route path="/saas-booking" element={<GenericWebPage title="Appointment Booking SaaS" description="A highly customizable white-label booking system for salons, clinics, consultants, and service businesses." image="https://images.unsplash.com/photo-1506784951206-b96275815fb5?w=1600&q=80" onBack={() => navigate('/')} />} />
      <Route path="/saas-chatbot" element={<GenericWebPage title="AI Chatbot Builder SaaS" description="A visual no-code builder allowing agencies to create and deploy AI chatbots for their clients in minutes." image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80" onBack={() => navigate('/')} />} />
      <Route path="/saas-hr" element={<GenericWebPage title="Employee HR SaaS" description="A complete HR suite for leave management, automated payroll processing, and attendance tracking." image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80" onBack={() => navigate('/')} />} />
      <Route path="/saas-reputation" element={<GenericWebPage title="Reputation Management SaaS" description="Monitor, request, and respond to reviews across 50+ platforms directly from one intuitive dashboard." image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80" onBack={() => navigate('/')} />} />

      {/* SEO Routes */}
      <Route path="/seo-gmb" element={<GenericSeoPage title="GMB Setup & Optimization" description="Dominate the Google Local Pack. We fully audit and optimize your Google My Business profile for maximum local visibility." onBack={() => navigate('/')} />} />
      <Route path="/seo-local" element={<GenericSeoPage title="Local SEO Monthly" description="A comprehensive monthly strategy guaranteed to push your business into the top 3 on Google Maps for high-intent keywords." onBack={() => navigate('/')} />} />
      <Route path="/seo-multi" element={<GenericSeoPage title="Multi-location Maps SEO" description="An advanced enterprise SEO strategy designed specifically for chains and franchise businesses to dominate everywhere they operate." onBack={() => navigate('/')} />} />
      <Route path="/seo-audit" element={<GenericSeoPage title="Competitor SEO Audit" description="A detailed 50-point technical analysis and competitor gap report to uncover exactly why your competitors are outranking you." onBack={() => navigate('/')} />} />
      <Route path="/seo-ecommerce" element={<GenericSeoPage title="E-commerce SEO Package" description="We optimize thousands of product and category pages to capture transactional search intent and drive pure sales volume." onBack={() => navigate('/')} />} />
      <Route path="/seo-youtube" element={<GenericSeoPage title="YouTube SEO + Video" description="Tap into the world's second-largest search engine. We optimize your channel, titles, descriptions, and tags for exponential growth." onBack={() => navigate('/')} />} />
      <Route path="/seo-review" element={<GenericSeoPage title="Review Generation Campaign" description="A fully managed automated campaign designed to ethically generate 50-100 real, 5-star Google reviews from your past clients." onBack={() => navigate('/')} />} />
      <Route path="/seo-ai" element={<GenericSeoPage title="SEO + AI Content Strategy" description="We deploy advanced AI workflows to scale your content marketing, producing highly optimized monthly blogs that dominate search." onBack={() => navigate('/')} />} />

      {/* Legal Routes */}
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />

    </Routes>
  );
}

export default App;
