import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, ArrowLeft, Sparkles, Calendar, TrendingUp, Users, Heart, MessageCircle, Info, RefreshCw, Send, CheckCircle, PenTool, Layout, BarChart2 } from 'lucide-react';
import AgentMarketingSection from '../components/AgentMarketingSection';

const SocialMediaPage = ({ onBack }) => {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('LinkedIn');
  const [status, setStatus] = useState('idle');
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    "Analyzing trending topics in your industry...",
    "Generating engaging copy with AI...",
    "Designing custom graphics via Canva API...",
    "Scheduling for optimal engagement times..."
  ];

  const calendarPosts = [
    { id: 1, date: 'Today, 10:00 AM', platform: 'LinkedIn', content: 'Excited to announce our new AI automation tools! #Tech #AI', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80', status: 'Published', engagement: { likes: 142, comments: 23 } },
    { id: 2, date: 'Tomorrow, 2:30 PM', platform: 'Twitter', content: '5 ways AI is transforming customer support. A thread 🧵', image: null, status: 'Scheduled', engagement: null },
    { id: 3, date: 'Wed, 9:00 AM', platform: 'Instagram', content: 'Behind the scenes at Vedam Digitech! 🚀', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80', status: 'Draft', engagement: null }
  ];

  const handleGenerate = () => {
    if (!topic) return;
    setStatus('generating');
    setCurrentStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setStatus('done');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-vedam-cream relative pb-24 overflow-hidden font-sans text-vedam-charcoal">
      
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Share2 className="w-8 h-8 text-vedam-gold" />
          <h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">Social CRM</h2>
        </div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
           <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
      </header>

      <div className="bg-vedam-cream border-b border-vedam-gold/20 px-6 py-3 text-center z-40 relative">
        <p className="text-vedam-charcoal font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This preview demonstrates how the AI Agent syncs with a unified social CRM calendar.</span>
        </p>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vedam-charcoal/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-12 pt-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-charcoal/10 text-vedam-gold font-bold text-xs tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4" /> CRM Integration
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold text-vedam-charcoal mb-4">
            AI Social Media CRM
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600">
            Automate content creation, schedule across platforms, and track audience sentiment and top engagers—all driven by CRM intelligence.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col xl:flex-row min-h-[600px]">
          
          {/* Left: AI Generator */}
          <div className="w-full xl:w-[450px] border-r border-gray-200 flex flex-col bg-gray-50">
            <div className="p-8 flex-1 flex flex-col justify-center">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm w-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-vedam-charcoal/10 rounded-2xl flex items-center justify-center text-vedam-gold shrink-0">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-vedam-charcoal">Auto-Pilot Mode</h3>
                    <p className="text-gray-500 text-sm mt-1">Let AI generate and schedule.</p>
                  </div>
                </div>

                <div className="space-y-5 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Topic or Keyword</label>
                    <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Benefits of AI" className="w-full px-4 py-3 bg-vedam-cream border border-gray-200 rounded-xl focus:outline-none focus:border-vedam-gold transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Target Platform</label>
                    <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full px-4 py-3 bg-vedam-cream border border-gray-200 rounded-xl focus:outline-none focus:border-vedam-gold transition-all appearance-none">
                      <option>LinkedIn</option>
                      <option>Twitter</option>
                      <option>Instagram</option>
                    </select>
                  </div>
                </div>

                {status === 'idle' && (
                  <button onClick={handleGenerate} className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg ${topic ? 'bg-vedam-charcoal hover:bg-black shadow-vedam-gold/30' : 'bg-gray-300 cursor-not-allowed'}`}>
                    <RefreshCw className="w-5 h-5" /> Generate Campaign
                  </button>
                )}

                {status === 'generating' && (
                  <div className="flex flex-col items-center justify-center py-4">
                    <RefreshCw className="w-8 h-8 text-vedam-gold animate-spin mb-4" />
                    <div className="text-sm font-bold text-vedam-charcoal text-center mb-4">{steps[currentStep]}</div>
                  </div>
                )}

                {status === 'done' && (
                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-bold text-green-800">Campaign Scheduled!</h4>
                    <p className="text-xs text-green-600 mt-1">The AI has added new posts to your CRM calendar.</p>
                    <button onClick={() => {setStatus('idle'); setTopic('');}} className="mt-4 text-xs font-bold text-green-700 hover:underline">Run Another</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: CRM Calendar & Metrics */}
          <div className="flex-1 flex flex-col bg-white">
            
            {/* Top Metrics */}
            <div className="p-6 border-b border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-50/50">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center"><TrendingUp className="w-6 h-6 text-yellow-500"/></div>
                <div>
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Reach</div>
                  <div className="text-2xl font-black text-vedam-charcoal">45.2K</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center"><Heart className="w-6 h-6 text-pink-500"/></div>
                <div>
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">Avg Engagement</div>
                  <div className="text-2xl font-black text-vedam-charcoal">8.4%</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center"><Users className="w-6 h-6 text-purple-500"/></div>
                <div>
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">New CRM Leads</div>
                  <div className="text-2xl font-black text-vedam-charcoal">124</div>
                </div>
              </div>
            </div>

            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
              <h3 className="font-bold text-lg text-vedam-charcoal flex items-center gap-2"><Calendar className="w-5 h-5"/> Content CRM Calendar</h3>
              <div className="flex gap-2">
                 <button className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-600">List View</button>
                 <button className="px-4 py-2 bg-vedam-charcoal text-white rounded-lg text-sm font-bold">Grid View</button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-6 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Dynamically add a new post if status is done */}
                {status === 'done' && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl border border-vedam-gold shadow-lg overflow-hidden flex flex-col relative">
                    <div className="absolute top-3 right-3 px-2 py-1 bg-vedam-gold text-white text-[10px] font-bold uppercase rounded-md shadow-sm">AI Generated</div>
                    <div className="h-32 bg-gray-100 relative">
                      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80" className="w-full h-full object-cover" alt="AI Generated" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-gray-500">{platform}</span>
                        <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-md border border-orange-200">Scheduled: Soon</span>
                      </div>
                      <p className="text-sm font-medium text-gray-800 mb-4 line-clamp-3">Here's why {topic} is taking over the industry. Are you ready to adapt? Let's discuss in the comments below! 👇 #Trending #{topic.replace(/\s+/g, '')}</p>
                      
                      <div className="mt-auto border-t border-gray-100 pt-3 flex gap-2">
                        <button className="flex-1 py-1.5 bg-vedam-charcoal text-white text-xs font-bold rounded-lg hover:bg-black transition-colors">Edit</button>
                        <button className="flex-1 py-1.5 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {calendarPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                    {post.image ? (
                      <div className="h-32 bg-gray-100 relative">
                        <img src={post.image} className="w-full h-full object-cover" alt="Post" />
                      </div>
                    ) : (
                      <div className="h-32 bg-gray-100 flex items-center justify-center p-4">
                        <p className="text-xs text-gray-500 text-center italic line-clamp-4">{post.content}</p>
                      </div>
                    )}
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-gray-500">{post.platform}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-md border ${post.status === 'Published' ? 'bg-green-50 text-green-700 border-green-200' : post.status === 'Scheduled' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>{post.status}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-800 mb-4 line-clamp-2">{post.content}</p>
                      
                      <div className="mt-auto border-t border-gray-100 pt-3 flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-400">{post.date}</span>
                        {post.engagement && (
                          <div className="flex gap-3 text-gray-500 text-xs font-bold">
                            <span className="flex items-center gap-1"><Heart className="w-3 h-3"/> {post.engagement.likes}</span>
                            <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3"/> {post.engagement.comments}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </main>

      <AgentMarketingSection 
        title="Dominate Social Media Effortlessly"
        description="Let AI become your dedicated social media manager. Generate trending posts, design graphics, and schedule a month of content in minutes."
        ctaText="Start Growing Now"
        features={[
          { icon: <PenTool />, title: 'AI Copywriting', desc: 'Generate platform-specific, highly engaging copy optimized for reach and virality.' },
          { icon: <Layout />, title: 'Automated Design', desc: 'Instantly create beautiful, brand-aligned graphics directly within the platform.' },
          { icon: <BarChart2 />, title: 'Smart Scheduling', desc: 'Automatically post at the exact times your audience is most active and likely to engage.' }
        ]}
      />
    </div>
  );
};

export default SocialMediaPage;
