import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit3, ArrowLeft, Sparkles, FileText, CheckCircle, BarChart2, Globe, Tag, Info, Play, RefreshCw, Eye, Search, Zap, TrendingUp, Bot } from 'lucide-react';
import AgentMarketingSection from '../components/AgentMarketingSection';

const ContentAgentPage = ({ onBack }) => {
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentAssets = [
    { id: 1, title: '10 Ways AI is Transforming Modern CRMs', type: 'Blog Post', seo: 94, status: 'Published', date: 'Today', author: 'AI Agent' },
    { id: 2, title: 'Maximize Sales with Automated Lead Generation', type: 'Email Campaign', seo: 88, status: 'Scheduled', date: 'Tomorrow', author: 'AI Agent' },
    { id: 3, title: 'Case Study: Real Estate Automation', type: 'Whitepaper', seo: 91, status: 'Draft', date: 'Yesterday', author: 'AI Agent' },
    { id: 4, title: 'The Future of Customer Support Bots', type: 'Blog Post', seo: 96, status: 'Published', date: 'Oct 12', author: 'AI Agent' }
  ];

  const handleGenerate = () => {
    if (!topic) return;
    setStatus('generating');

    setTimeout(() => {
      setStatus('done');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-vedam-cream relative pb-24 overflow-hidden font-sans text-vedam-charcoal">
      
      <header className="bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Edit3 className="w-8 h-8 text-vedam-gold" />
          <h2 className="text-xl md:text-2xl font-bold font-heading text-vedam-charcoal">Content CRM</h2>
        </div>
        <button onClick={onBack} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors">
           <ArrowLeft className="w-4 h-4" /> Back to Site
        </button>
      </header>

      <div className="bg-vedam-cream border-b border-vedam-gold/20 px-6 py-3 text-center z-40 relative">
        <p className="text-vedam-charcoal font-bold text-sm sm:text-base flex items-center justify-center gap-2">
          <Info className="w-5 h-5 shrink-0" /> 
          <span><strong>Note:</strong> This dashboard showcases how AI-generated content syncs with your CRM for tracking and SEO.</span>
        </p>
      </div>

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-vedam-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 -translate-x-1/4"></div>

      <main className="container mx-auto px-6 lg:px-12 pt-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-vedam-gold/10 text-vedam-gold font-bold text-xs tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4" /> AI Content Factory
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold text-vedam-charcoal mb-4">
            Content Marketing CRM
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600">
            Automatically generate high-converting blogs, emails, and ad copy. Manage your entire digital asset library and monitor SEO performance in one unified view.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left: AI Generator */}
          <div className="w-full lg:w-[400px] border-r border-gray-200 flex flex-col bg-gray-50">
            <div className="p-8">
              <h3 className="font-bold text-vedam-charcoal text-lg mb-6 flex items-center gap-2"><Sparkles className="w-5 h-5 text-vedam-gold"/> Generate New Asset</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Topic / Keyword</label>
                  <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Benefits of CRM Automation" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-vedam-gold transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Content Type</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-vedam-gold transition-all shadow-sm appearance-none">
                    <option>SEO Blog Post</option>
                    <option>Email Newsletter</option>
                    <option>LinkedIn Article</option>
                    <option>Website Landing Page</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tone</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-vedam-gold transition-all shadow-sm appearance-none">
                    <option>Professional & Authoritative</option>
                    <option>Friendly & Conversational</option>
                    <option>Urgent & Sales-driven</option>
                  </select>
                </div>

                <button onClick={handleGenerate} disabled={!topic || status === 'generating'} className={`w-full mt-4 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg ${topic && status !== 'generating' ? 'bg-vedam-charcoal hover:bg-black shadow-vedam-gold/30' : 'bg-gray-300 cursor-not-allowed'}`}>
                  {status === 'generating' ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />} 
                  {status === 'generating' ? 'Writing Content...' : 'Generate Content'}
                </button>

                <AnimatePresence>
                  {status === 'done' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200 text-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-bold text-green-800">Content generated successfully!</p>
                      <p className="text-xs text-green-600 mt-1">Added to your CRM library.</p>
                      <button onClick={() => {setStatus('idle'); setTopic('');}} className="mt-3 text-xs font-bold text-green-700 hover:underline">Write Another</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right: CRM Content Library */}
          <div className="flex-1 flex flex-col bg-white">
            
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-bold text-lg text-vedam-charcoal flex items-center gap-2"><FileText className="w-5 h-5"/> Asset Library</h3>
              <div className="flex flex-wrap gap-4">
                 <div className="text-center px-4 border-r border-gray-200">
                   <div className="text-2xl font-black text-vedam-charcoal">142</div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Assets</div>
                 </div>
                 <div className="text-center px-4">
                   <div className="text-2xl font-black text-green-500">92</div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Avg SEO Score</div>
                 </div>
              </div>
            </div>

            <div className="flex-1 overflow-x-auto p-6 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider">
                    <th className="pb-4 font-bold pl-2">Title</th>
                    <th className="pb-4 font-bold">Type</th>
                    <th className="pb-4 font-bold">SEO Score</th>
                    <th className="pb-4 font-bold">Status</th>
                    <th className="pb-4 font-bold text-right pr-2">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  
                  {status === 'done' && (
                    <motion.tr initial={{ opacity: 0, backgroundColor: '#f0fdf4' }} animate={{ opacity: 1, backgroundColor: '#ffffff' }} transition={{ duration: 1 }} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                      <td className="py-4 pl-2">
                        <div className="font-bold text-vedam-charcoal text-sm flex items-center gap-2">{topic} <span className="px-2 py-0.5 bg-vedam-gold text-white text-[10px] rounded uppercase">New</span></div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center gap-1"><Bot className="w-3 h-3"/> AI Agent • Just now</div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-1 text-xs font-bold text-gray-600"><Tag className="w-3 h-3 text-gray-400"/> SEO Blog Post</div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-[95%]"></div></div>
                          <span className="text-xs font-bold text-green-600">95</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-xs font-bold px-3 py-1 rounded-full border bg-yellow-50 text-yellow-700 border-yellow-200">Draft</span>
                      </td>
                      <td className="py-4 text-right pr-2">
                        <button className="text-vedam-gold font-bold text-sm transition-opacity flex items-center gap-1 justify-end w-full"><Eye className="w-4 h-4"/> Review</button>
                      </td>
                    </motion.tr>
                  )}

                  {contentAssets.map((asset) => (
                    <tr key={asset.id} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                      <td className="py-4 pl-2">
                        <div className="font-bold text-vedam-charcoal text-sm">{asset.title}</div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center gap-1"><Bot className="w-3 h-3"/> {asset.author} • {asset.date}</div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-1 text-xs font-bold text-gray-600"><Tag className="w-3 h-3 text-gray-400"/> {asset.type}</div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full ${asset.seo >= 90 ? 'bg-green-500' : 'bg-yellow-500'}`} style={{ width: `${asset.seo}%` }}></div>
                          </div>
                          <span className={`text-xs font-bold ${asset.seo >= 90 ? 'text-green-600' : 'text-yellow-600'}`}>{asset.seo}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${asset.status === 'Published' ? 'bg-green-50 text-green-700 border-green-200' : asset.status === 'Scheduled' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                          {asset.status}
                        </span>
                      </td>
                      <td className="py-4 text-right pr-2">
                        <button className="text-vedam-gold font-bold text-sm transition-opacity flex items-center gap-1 justify-end w-full"><Eye className="w-4 h-4"/> Review</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </motion.div>

      </main>

      <AgentMarketingSection 
        title="Scale Your Content Production"
        description="Generate high-ranking SEO blogs, compelling ad copy, and engaging newsletters at scale. Our AI analyzes your brand voice to ensure perfect alignment."
        ctaText="Start Writing Automatically"
        features={[
          { icon: <Search />, title: 'SEO Optimized', desc: 'Content is automatically generated with proper headers, keywords, and meta descriptions to rank on Google.' },
          { icon: <Zap />, title: '10x Faster Production', desc: 'Create a month\'s worth of high-quality content in under an hour, freeing up your marketing team.' },
          { icon: <TrendingUp />, title: 'Brand Voice Sync', desc: 'Train the AI on your past content to perfectly mimic your brand\'s unique tone, style, and terminology.' }
        ]}
      />
    </div>
  );
};

export default ContentAgentPage;
