import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, X } from 'lucide-react';

const Portfolio = ({ onNavigateToDynamic }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // AI
    { id: 1, name: "AI Calling Agent", category: "AI", desc: "Human-like AI caller with integrated CRM tracking.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", tech: ["Twilio", "ElevenLabs", "CRM Integration"], results: ["10k Calls/Day", "Converted 15% Leads"] },
    { id: 2, name: "AI Lead Generation Agent", category: "AI", desc: "Auto-finds & contacts leads, logging directly to CRM.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", tech: ["Python", "OpenAI", "CRM Integration"], results: ["+300% Leads Generated", "Saved 120 hrs/mo"] },
    { id: 3, name: "AI Customer Support Chatbot", category: "AI", desc: "24/7 bot syncs tickets & context with your CRM.", image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&q=80", tech: ["React", "Node.js", "CRM Integration"], results: ["85% Queries Automated", "24/7 Instant Support"] },
    { id: 4, name: "AI Social Media Manager", category: "AI", desc: "Auto-creates posts & tracks engagement in CRM.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", tech: ["Python", "Canva API", "CRM Integration"], results: ["40hrs Saved/mo", "2x Engagement"] },
    { id: 5, name: "AI WhatsApp Business Bot", category: "AI", desc: "Auto-replies & bookings synced live with CRM.", image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80", tech: ["WhatsApp API", "Python", "CRM Integration"], results: ["+40% Sales", "0 Missed Messages"] },
    { id: 6, name: "AI Content Generator", category: "AI", desc: "Generates blog, social, & ad copy driven by CRM data.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80", tech: ["Next.js", "OpenAI", "CRM Integration"], results: ["Instant Content", "Highly Scalable"] },
    
    // Web & App
    { id: 9, name: "Restaurant Web + Ordering", category: "Web & App", desc: "Full ordering system with payment gateway", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", tech: ["Next.js", "Tailwind", "Stripe"], results: ["+25% Online Orders", "Zero Commission Fees"] },
    { id: 10, name: "Doctor Booking App", category: "Web & App", desc: "Appointment + patient management system", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80", tech: ["React Native", "Node.js", "PostgreSQL"], results: ["1000+ Bookings/mo", "Seamless Patient DB"] },
    { id: 11, name: "Real Estate Property Listing", category: "Web & App", desc: "Advanced search, filters, virtual tours", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", tech: ["Next.js", "Prisma", "AWS S3"], results: ["3x Traffic Increase", "Faster Load Times"] },
    { id: 12, name: "School/Coaching Web + App", category: "Web & App", desc: "Admissions, fees, results management", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80", tech: ["React", "Express", "MongoDB"], results: ["Paperless Admin", "Parent Dashboard"] },
    { id: 13, name: "E-commerce Store + AI", category: "Web & App", desc: "Smart product recommendations engine", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", tech: ["Shopify Plus", "React", "Python"], results: ["+18% AOV", "Custom UI/UX"] },


  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-vedam-cream relative border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-black"
          >
            Our Work Speaks
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {['All', 'AI', 'Web & App'].map(tab => (
              <button 
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1 text-sm font-serif italic transition-all border-b-2 ${filter === tab ? 'border-vedam-gold text-vedam-charcoal' : 'border-transparent text-gray-500 hover:text-vedam-charcoal'}`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden bg-white cursor-pointer border border-transparent hover:border-vedam-gold/50 transition-all flex flex-col h-full shadow-sm hover:shadow-lg duration-500"
              >
                <div className="h-56 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500 z-10 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 p-4">
                    <div className="flex flex-wrap justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.tech?.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 border border-white/40 text-white text-xs font-bold rounded-full shadow-lg">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold bg-white text-black shadow-lg uppercase tracking-wider rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 leading-snug">{project.name}</h3>
                    <p className="text-sm text-gray-600 mb-6">{project.desc}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-4 group-hover:text-vedam-gold text-gray-400 transition-colors duration-500 border-t border-gray-100">
                    <span className="text-xs font-serif italic tracking-wider capitalize">View Details</span>
                    <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl overflow-hidden flex flex-col border border-gray-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 md:h-96 w-full shrink-0">
                  <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover grayscale opacity-80" />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-gray-100 transition-all shadow-sm"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-6 left-6 flex gap-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-white text-black border border-gray-200 tracking-wider uppercase">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
                    {selectedProject.name}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {selectedProject.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-bold text-black mb-4">Project Overview</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        This custom solution was engineered to streamline operations and drive significant growth. Leveraging modern frameworks and advanced technology, we built a highly scalable architecture tailored specifically to the client's unique business requirements.
                      </p>
                      
                      <h4 className="text-lg font-bold text-black mb-4">Key Features</h4>
                      <ul className="space-y-3 text-gray-600 font-medium grid grid-cols-1 sm:grid-cols-2">
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-black rounded-full shadow-sm"></div> Custom UI/UX Design</li>
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-black rounded-full shadow-sm"></div> Scalable Architecture</li>
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-black rounded-full shadow-sm"></div> Seamless API Integrations</li>
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-black rounded-full shadow-sm"></div> Advanced Analytics</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center">
                      <h4 className="text-lg font-bold text-black mb-6 border-b border-gray-200 pb-2">Verified Results</h4>
                      <div className="space-y-6 flex-grow">
                        {selectedProject.results?.map((res, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-3xl font-black text-green-600 mb-1">{res.split(' ')[0]}</span>
                            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{res.substring(res.indexOf(' ') + 1)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8 mt-auto">
                    {selectedProject.category === 'AI' ? (
                      <>
                        <button 
                          onClick={() => {
                            const routes = {
                              1: 'ai-calling', 2: 'ai-agent', 3: 'ai-chatbot', 4: 'ai-social',
                              5: 'ai-whatsapp', 6: 'ai-content'
                            };
                            const route = routes[selectedProject.id];
                            if (route) {
                              setSelectedProject(null);
                              onNavigateToDynamic(route);
                            }
                          }}
                          className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                          Visit Live Project <ArrowUpRight className="w-5 h-5" />
                        </button>
                      </>
                    ) : selectedProject.category === 'Web & App' ? (
                      <>
                        <button 
                          onClick={() => {
                            const routes = {
                              9: 'web-restaurant', 10: 'web-doctor', 11: 'web-real-estate', 12: 'web-school',
                              13: 'web-ecommerce'
                            };
                            const route = routes[selectedProject.id];
                            if (route) {
                              setSelectedProject(null);
                              onNavigateToDynamic(route);
                            }
                          }}
                          className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                          Visit Live Project <ArrowUpRight className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <button className="px-6 py-3 bg-black text-white text-sm font-semibold uppercase tracking-wider rounded-2xl hover:bg-gray-900 transition-colors shadow-sm flex items-center justify-center gap-2">
                        Visit Live Project <ArrowUpRight className="w-4 h-4" />
                      </button>
                    )}
                    <a href="#contact" onClick={() => setSelectedProject(null)} className="px-6 py-3 bg-transparent border border-gray-200 text-gray-500 text-sm font-semibold uppercase tracking-wider rounded-2xl hover:border-black hover:text-black transition-colors text-center flex items-center justify-center">
                      Build Your Own
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
