import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AgentPage from './pages/AgentPage';
import ChatbotPage from './pages/ChatbotPage';
import SocialMediaPage from './pages/SocialMediaPage';
import CallingAgentPage from './pages/CallingAgentPage';
import WhatsappPage from './pages/WhatsappPage';
import ContentAgentPage from './pages/ContentAgentPage';
import GenericAgentPage from './pages/GenericAgentPage';
import GenericWebPage from './pages/GenericWebPage';
import GenericSeoPage from './pages/GenericSeoPage';
import CrmPage from './pages/CrmPage';

import RestaurantDemoPage from './pages/RestaurantDemoPage';
import DoctorDemoPage from './pages/DoctorDemoPage';
import RealEstateDemoPage from './pages/RealEstateDemoPage';
import SchoolDemoPage from './pages/SchoolDemoPage';
import EcommerceDemoPage from './pages/EcommerceDemoPage';
import LawyerDemoPage from './pages/LawyerDemoPage';
import EventDemoPage from './pages/EventDemoPage';
import NgoDemoPage from './pages/NgoDemoPage';
import MinimalistDemoPage from './pages/MinimalistDemoPage';

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
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-vedam-gold selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />

        <Services />
        <Portfolio 
          onNavigateToDynamic={(route) => navigate('/' + route)}
        />
        <Process />
        <WhyChooseUs />
        <TechStack />
        <Testimonials />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import FloatingSocials from './components/FloatingSocials';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ai-calling" element={<CallingAgentPage onBack={() => navigate('/')} />} />
        <Route path="/ai-agent" element={<AgentPage onBack={() => navigate('/')} />} />
        <Route path="/ai-chatbot" element={<ChatbotPage onBack={() => navigate('/')} />} />
        <Route path="/ai-social" element={<SocialMediaPage onBack={() => navigate('/')} />} />
        <Route path="/ai-whatsapp" element={<WhatsappPage onBack={() => navigate('/')} />} />
        <Route path="/ai-content" element={<ContentAgentPage onBack={() => navigate('/')} />} />
        <Route path="/crm" element={<CrmPage onBack={() => navigate('/')} />} />
        
        {/* Web & App Routes */}
        <Route path="/web-restaurant" element={<RestaurantDemoPage onBack={() => navigate('/')} />} />
        <Route path="/web-doctor" element={<DoctorDemoPage onBack={() => navigate('/')} />} />
        <Route path="/web-real-estate" element={<RealEstateDemoPage onBack={() => navigate('/')} />} />
        <Route path="/web-school" element={<SchoolDemoPage onBack={() => navigate('/')} />} />
        <Route path="/web-ecommerce" element={<EcommerceDemoPage onBack={() => navigate('/')} />} />
        <Route path="/web-lawyer" element={<LawyerDemoPage onBack={() => navigate('/')} />} />
        <Route path="/web-event" element={<EventDemoPage onBack={() => navigate('/')} />} />
        <Route path="/web-ngo" element={<NgoDemoPage onBack={() => navigate('/')} />} />
        <Route path="/web-minimalist" element={<MinimalistDemoPage onBack={() => navigate('/')} />} />

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
      <FloatingSocials />
    </>
  );
}

export default App;
