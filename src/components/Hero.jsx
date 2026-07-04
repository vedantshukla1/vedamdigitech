import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Clock, Rocket } from 'lucide-react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 pb-0 overflow-hidden bg-white">
      <Navbar />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center lg:items-start pt-12 pb-24 gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start w-full lg:w-[55%]"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-gray-200 text-gray-600 font-semibold text-xs tracking-wider uppercase mb-8 shadow-sm"
          >
            <span>✦</span> WEB DEVELOPMENT & AI AUTOMATION AGENCY
          </motion.div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-6 text-black tracking-tight uppercase">
            We Build.<br/>
            We Automate.<br/>
            You Grow.
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
            We build high-performance websites, AI automations, and intelligent solutions that save time, reduce costs and help your business scale faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
            <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-semibold text-sm hover:bg-gray-900 transition-all shadow-md">
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-black rounded-xl font-semibold text-sm hover:border-black transition-all shadow-sm">
              View Our Work
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform group-hover:text-black" />
            </a>
          </div>

          {/* Integrated Stats */}
          <div className="grid grid-cols-4 gap-6 w-full max-w-xl">
            {[
              { icon: <Briefcase className="w-6 h-6 mb-2 text-black" strokeWidth={1.5} />, num: "100+", text: "Projects Completed" },
              { icon: <Users className="w-6 h-6 mb-2 text-black" strokeWidth={1.5} />, num: "50+", text: "Happy Clients" },
              { icon: <Clock className="w-6 h-6 mb-2 text-black" strokeWidth={1.5} />, num: "5+", text: "Years of Experience" },
              { icon: <Rocket className="w-6 h-6 mb-2 text-black" strokeWidth={1.5} />, num: "10+", text: "AI Automations Built" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col border-l border-gray-200 pl-4 first:border-l-0 first:pl-0">
                {stat.icon}
                <h4 className="text-xl font-bold text-black mb-1">{stat.num}</h4>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 leading-tight">{stat.text}</p>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Right Content - Interactive Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full lg:w-[50%] h-[500px] lg:h-[600px] flex justify-center items-center lg:-mt-8 perspective-1000 z-20"
        >
          {/* Subtle background waves/glow */}
          <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/5 rounded-full blur-[100px] -z-10"></div>
          
          {/* The Interactive Mockup Container */}
          <motion.div 
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full max-w-xl xl:max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col relative group cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Fake Browser/App Header */}
            <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 bg-white px-3 py-1 text-xs text-gray-400 rounded-md border border-gray-100 flex-1 text-center font-mono">vedam-ai-engine.app</div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-6 flex flex-col gap-6 relative">
              {/* Header inside dash */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">AI Voice Calling Agent</h3>
                  <p className="text-xs text-gray-400">Live call in progress</p>
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                />
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Calls Handled</p>
                  <p className="text-2xl font-black text-black">12,450</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Hours Saved</p>
                  <p className="text-2xl font-black text-black">340+ hrs</p>
                </motion.div>
              </div>

              {/* Animated Chart Area */}
              <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-4 relative overflow-hidden flex flex-col justify-end group-hover:border-black/20 transition-colors">
                 {/* Fake Grid lines */}
                 <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                 
                 {/* SVG Animated Line Chart */}
                 <svg viewBox="0 0 100 40" className="w-full h-24 overflow-visible relative z-10">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="black" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="black" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0 30 Q 15 10, 30 25 T 60 15 T 100 5 L 100 40 L 0 40 Z"
                      fill="url(#gradient)"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.path
                      d="M0 30 Q 15 10, 30 25 T 60 15 T 100 5"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.circle 
                      cx="100" cy="5" r="3" fill="black"
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: "spring" }}
                    />
                 </svg>
              </div>
            </div>

            {/* Floating Interactive Element (Simulating a workflow node) */}
            <motion.div 
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              className="absolute -right-6 -bottom-6 bg-white border border-gray-200 shadow-xl rounded-xl p-4 flex items-center gap-3 cursor-grab active:cursor-grabbing z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-black">Agent Active</p>
                <p className="text-xs text-green-500 font-semibold">Handling 50+ calls/min</p>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>

      {/* Tech Stack Banner */}
      <div className="w-full border-y border-gray-100 bg-white/50 backdrop-blur-md py-6 mt-auto">
        <div className="container mx-auto px-6 lg:px-16 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="font-bold text-xl tracking-tighter">NEXT.js</span>
          <span className="font-bold text-xl flex items-center gap-1">⚛ React</span>
          <span className="font-bold text-xl text-green-600">node<span className="font-light">js</span></span>
          <span className="font-bold text-xl text-yellow-500">Python</span>
          <span className="font-bold text-xl tracking-tight">OpenAI</span>
          <span className="font-bold text-xl text-pink-500">n8n</span>
          <span className="font-bold text-xl text-green-500">MongoDB.</span>
          <span className="font-bold text-xl text-orange-500">aws</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
