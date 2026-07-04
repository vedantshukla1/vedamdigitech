import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "What exactly is an AI Agent and how can it help my business?",
      answer: "An AI Agent is an autonomous software program that uses Artificial Intelligence to perform specific tasks, just like a human employee. It can help your business by automating repetitive tasks, providing 24/7 customer support, generating leads, and scaling operations without increasing headcount."
    },
    {
      question: "Do you build custom websites or use templates?",
      answer: "We specialize in custom web applications and bespoke designs. Whether you need a highly optimized headless eCommerce store, a custom CRM, or a blazing-fast marketing site, everything we build is tailored to your brand's unique needs and performance goals."
    },
    {
      question: "How long does a typical project take to launch?",
      answer: "Timelines vary depending on the scope. A custom web design project typically takes 2-4 weeks, while complex AI Agent deployments or custom CRM builds might take 4-8 weeks. We always provide a clear roadmap and timeline during our initial consultation."
    },
    {
      question: "Will you provide support and maintenance after launch?",
      answer: "Yes! We offer ongoing maintenance and support packages to ensure your digital products and AI agents continue to run smoothly, stay secure, and evolve as your business grows."
    },
    {
      question: "I already have a website. Can you integrate AI into it?",
      answer: "Absolutely. We can seamlessly integrate AI chatbots, automated scheduling agents, and CRM syncing into your existing infrastructure without needing to rebuild your entire website."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-vedam-charcoal mb-6">
                Frequently <br/> Asked <br/> Questions
              </h2>
              <div className="w-20 h-1 bg-vedam-gold mb-8"></div>
              <p className="text-gray-600 text-lg">
                Have questions about our AI solutions or web development services? Find the answers below.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50"
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-bold text-vedam-charcoal">{faq.question}</span>
                    <span className="ml-4 shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-vedam-gold">
                      {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100/50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;
