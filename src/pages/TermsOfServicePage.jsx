import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfServicePage = () => {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-blue max-w-none space-y-6">
          <p>Last updated: June 2026</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h3>
          <p>By accessing and using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">2. Use of Services</h3>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Facebook Data Deletion Instructions</h3>
          <p>Vedam Digitech provides Facebook Login options and integrates with Facebook Developer APIs. According to the Facebook Platform Rules, we must provide clear User Data Deletion Instructions and a verified Data Deletion Callback URL.</p>
          <p>If you wish to delete your data associated with our Facebook App, please follow these steps:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to your Facebook Account's <strong>Settings & Privacy</strong>.</li>
            <li>Click <strong>Settings</strong>.</li>
            <li>Select <strong>Apps and Websites</strong> from the left-hand menu.</li>
            <li>Search for our App ("Vedam Digitech").</li>
            <li>Click <strong>Remove</strong>.</li>
            <li>You have successfully removed your app activities. To request complete deletion of all data we hold regarding your Facebook account on our servers, click the "Send Request" button on the removal confirmation, or email us directly at <strong>vedamdigitechoffical@gmail.com</strong> with your Facebook user ID.</li>
          </ol>
          
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mt-8">
            <h4 className="font-bold text-blue-900 mb-2">Developer Data Deletion Callback URL</h4>
            <p className="text-sm text-blue-800 mb-2">For Facebook Developers and automated compliance systems, our verified Data Deletion Callback URL is:</p>
            <code className="block bg-white border border-blue-100 p-3 rounded text-sm text-gray-800 break-all shadow-sm">
              https://vedamdigitech.onrender.com/api/webhooks/facebook/data-deletion
            </code>
            <p className="text-sm text-blue-800 mt-3">We process signed requests strictly according to Facebook's automated data deletion requirements, responding with a secure status URL and alphanumeric confirmation code.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
