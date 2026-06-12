import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-bold font-heading text-black">Vedam Digitech</h2>
        </div>
        <button onClick={() => navigate('/')} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-blue max-w-none space-y-6">
          <p>Last updated: June 2026</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">2. How We Use Information</h3>
          <p>We may use the information we collect about you to provide, maintain, and improve our services. This includes personalizing your experience, providing customer service, and analyzing usage trends.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">3. Sharing of Information</h3>
          <p>We do not share your personal information with third parties without your consent, except as described in this Privacy Policy or as required by law.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Security</h3>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at vedamdigitechoffical@gmail.com.</p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
