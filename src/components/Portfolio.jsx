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
    { id: 1, name: "AI Lead Generation Agent", category: "AI", desc: "Auto-finds & contacts leads on LinkedIn/email", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
    { id: 2, name: "AI Customer Support Chatbot", category: "AI", desc: "24/7 bot for websites and WhatsApp", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
    { id: 3, name: "AI Social Media Manager", category: "AI", desc: "Auto-creates & posts daily content", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" },
    { id: 4, name: "AI Invoice & Billing", category: "AI", desc: "Auto-generates and sends invoices", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
    { id: 5, name: "AI WhatsApp Business Bot", category: "AI", desc: "Auto-replies, booking, order tracking", image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80" },
    { id: 6, name: "AI HR Recruitment Agent", category: "AI", desc: "Screens resumes & schedules interviews", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
    { id: 7, name: "AI Review Responder", category: "AI", desc: "Auto-responds to Google/Zomato reviews", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" },
    { id: 8, name: "AI Report Generator", category: "AI", desc: "Auto-creates weekly business reports", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
    
    // Web & App
    { id: 9, name: "Restaurant Web + Ordering", category: "Web & App", desc: "Full ordering system with payment gateway", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" },
    { id: 10, name: "Doctor Booking App", category: "Web & App", desc: "Appointment + patient management system", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
    { id: 11, name: "Real Estate Property Listing", category: "Web & App", desc: "Advanced search, filters, virtual tours", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" },
    { id: 12, name: "School/Coaching Web + App", category: "Web & App", desc: "Admissions, fees, results management", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" },
    { id: 13, name: "E-commerce Store + AI", category: "Web & App", desc: "Smart product recommendations engine", image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80" },
    { id: 14, name: "Lawyer Portfolio + Portal", category: "Web & App", desc: "Document sharing and case tracking", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80" },
    { id: 15, name: "Event Management Web", category: "Web & App", desc: "Ticketing, RSVP, guest management", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80" },
    { id: 16, name: "NGO Trust Website", category: "Web & App", desc: "Online donations, volunteer registration", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" },

    // SaaS
    { id: 17, name: "Local Business Dashboard", category: "SaaS", desc: "Reviews, leads, analytics in one place", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
    { id: 18, name: "AI Content Writing SaaS", category: "SaaS", desc: "Blog, social, ad copy generator", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80" },
    { id: 19, name: "WhatsApp Marketing SaaS", category: "SaaS", desc: "Bulk messaging + automation platform", image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=800&q=80" },
    { id: 20, name: "Invoice & Accounting SaaS", category: "SaaS", desc: "GST-ready simple billing tool", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
    { id: 21, name: "Appointment Booking SaaS", category: "SaaS", desc: "White-label for any business type", image: "https://images.unsplash.com/photo-1506784951206-b96275815fb5?w=800&q=80" },
    { id: 22, name: "AI Chatbot Builder SaaS", category: "SaaS", desc: "No-code bot builder for websites", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
    { id: 23, name: "Employee HR SaaS", category: "SaaS", desc: "Leave, payroll, attendance tracking", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" },
    { id: 24, name: "Reputation Management SaaS", category: "SaaS", desc: "Monitor all reviews in one dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },

    // SEO
    { id: 25, name: "GMB Setup & Optimization", category: "SEO", desc: "Complete GMB audit and optimization", image: "https://images.unsplash.com/photo-1527334919515-b8dee906a34b?w=800&q=80" },
    { id: 26, name: "Local SEO Monthly", category: "SEO", desc: "Rank in top 3 on Google Maps", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80" },
    { id: 27, name: "Multi-location Maps SEO", category: "SEO", desc: "For chains and franchise businesses", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" },
    { id: 28, name: "Competitor SEO Audit", category: "SEO", desc: "Detailed competitor gap analysis", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
    { id: 29, name: "E-commerce SEO Package", category: "SEO", desc: "Product & category page ranking", image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80" },
    { id: 30, name: "YouTube SEO + Video", category: "SEO", desc: "Channel growth and video ranking", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80" },
    { id: 31, name: "Review Generation Campaign", category: "SEO", desc: "Get 50-100 real Google reviews", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" },
    { id: 32, name: "SEO + AI Content Strategy", category: "SEO", desc: "Monthly blogs + ranking strategy", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80" },
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
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
            {['All', 'AI', 'Web & App', 'SaaS', 'SEO'].map(tab => (
              <button 
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${filter === tab ? 'bg-vedam-blue text-white shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-gray-200'}`}
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
                className="group relative rounded-2xl overflow-hidden bg-gray-50 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-vedam-blue/10 border border-gray-100 transition-all flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors z-10" />
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold bg-white/90 backdrop-blur-sm text-vedam-blue rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 leading-snug">{project.name}</h3>
                    <p className="text-sm text-gray-600 mb-6">{project.desc}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto border-t border-gray-200 pt-4 group-hover:border-vedam-blue/30 transition-colors">
                    <span className="text-sm font-bold text-vedam-blue">View Details</span>
                    <div className="w-8 h-8 rounded-full bg-vedam-blue/10 flex items-center justify-center text-vedam-blue group-hover:bg-vedam-blue group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
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
                className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 md:h-96 w-full shrink-0">
                  <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-black transition-all shadow-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-6 left-6 flex gap-3">
                    <span className="px-4 py-1.5 text-sm font-bold bg-vedam-blue text-white rounded-full shadow-lg tracking-wide uppercase">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-lg font-bold text-black mb-4">Project Overview</h4>
                      <p className="text-gray-600 leading-relaxed">
                        This custom solution was engineered to streamline operations and drive significant growth. Leveraging modern frameworks and advanced technology, we built a highly scalable architecture tailored specifically to the client's unique business requirements.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black mb-4">Key Features</h4>
                      <ul className="space-y-3 text-gray-600 font-medium">
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-vedam-blue rounded-full shadow-sm shadow-vedam-blue/50"></div> Custom UI/UX Design</li>
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-vedam-blue rounded-full shadow-sm shadow-vedam-blue/50"></div> Scalable Architecture</li>
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-vedam-blue rounded-full shadow-sm shadow-vedam-blue/50"></div> Seamless API Integrations</li>
                        <li className="flex items-center gap-3"><div className="w-2 h-2 bg-vedam-blue rounded-full shadow-sm shadow-vedam-blue/50"></div> Advanced Analytics & Tracking</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8 mt-auto">
                    {selectedProject.category === 'AI' ? (
                      <>
                        <button 
                          onClick={() => {
                            const routes = {
                              1: 'ai-agent', 2: 'ai-chatbot', 3: 'ai-social', 4: 'ai-invoice',
                              5: 'ai-whatsapp', 6: 'ai-hr', 7: 'ai-review', 8: 'ai-report'
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
                        <button 
                          onClick={() => {
                            const routes = {
                              1: 'ai-agent', 2: 'ai-chatbot', 3: 'ai-social', 4: 'ai-invoice',
                              5: 'ai-whatsapp', 6: 'ai-hr', 7: 'ai-review', 8: 'ai-report'
                            };
                            const route = routes[selectedProject.id];
                            if (route) {
                              setSelectedProject(null);
                              onNavigateToDynamic(route);
                              setTimeout(() => {
                                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                              }, 100);
                            }
                          }}
                          className="px-8 py-4 bg-white border-2 border-gray-100 text-black font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2"
                        >
                          How to work
                        </button>
                      </>
                    ) : selectedProject.category === 'Web & App' ? (
                      <>
                        <button 
                          onClick={() => {
                            const routes = {
                              9: 'web-restaurant', 10: 'web-doctor', 11: 'web-real-estate', 12: 'web-school',
                              13: 'web-ecommerce', 14: 'web-lawyer', 15: 'web-event', 16: 'web-ngo'
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
                    ) : selectedProject.category === 'SaaS' ? (
                      <>
                        <button 
                          onClick={() => {
                            const routes = {
                              17: 'saas-dashboard', 18: 'saas-content', 19: 'saas-whatsapp', 20: 'saas-invoice',
                              21: 'saas-booking', 22: 'saas-chatbot', 23: 'saas-hr', 24: 'saas-reputation'
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
                    ) : selectedProject.category === 'SEO' ? (
                      <>
                        <button 
                          onClick={() => {
                            const routes = {
                              25: 'seo-gmb', 26: 'seo-local', 27: 'seo-multi', 28: 'seo-audit',
                              29: 'seo-ecommerce', 30: 'seo-youtube', 31: 'seo-review', 32: 'seo-ai'
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
                      <button className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                        Visit Live Project <ArrowUpRight className="w-5 h-5" />
                      </button>
                    )}
                    <a href="#contact" onClick={() => setSelectedProject(null)} className="px-8 py-4 bg-vedam-blue/10 text-vedam-blue font-bold rounded-xl hover:bg-vedam-blue hover:text-white transition-colors text-center flex items-center justify-center">
                      Request Similar Project
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
