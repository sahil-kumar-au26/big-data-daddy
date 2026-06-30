"use client";
import { motion } from 'framer-motion';
import { Cpu, Globe, Mic, Database, Languages, ArrowRight, ShieldCheck, Zap, BarChart3, Radio } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* SECTION 1: CINEMATIC HERO (AIXBlock + Dip.audio Vibe) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_50%_10%,_rgba(37,99,235,0.15)_0%,_transparent_50%)]" />
        <div className="absolute -left-20 top-40 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Next-Gen Human-In-The-Loop Infrastructure
          </div>
          
          <h1 className="text-6xl md:text-[130px] font-black tracking-tighter leading-[0.8] uppercase italic mb-12">
            The <span className="text-blue-600">Engine</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Behind Global AI.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-2xl mb-12 font-medium">
            BigDataDaddy provides high-fidelity RLHF, Audio Data, and Multilingual 
            content processing at a scale no other provider can match.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl shadow-blue-600/20">Enterprise Request</Link>
            <Link href="/register" className="bg-white/5 border border-white/10 px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white/10 transition backdrop-blur-md">Become a Contributor</Link>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: THE "BIG 5" SERVICES (Combined Features) */}
      <section className="py-32 px-10 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
        <FeatureCard icon={<Radio />} title="Audio & Speech" desc="Dip.audio style high-fidelity dubbing and acoustic datasets." />
        <FeatureCard icon={<Cpu />} title="RLHF" desc="Kled.ai level alignment for LLMs with expert human feedback." />
        <FeatureCard icon={<Globe />} title="Translation" desc="150+ Languages with native-level cultural precision." />
        <FeatureCard icon={<Database />} title="Data Sourcing" desc="Macgence scale image, video, and text collection." />
        <FeatureCard icon={<Zap />} title="Processing" desc="Raw data cleaning, sorting, and QA validation." />
      </section>

      {/* SECTION 3: INDUSTRY SOLUTIONS (Macgence Power) */}
      <section className="bg-white/[0.02] py-32 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20 italic">Industry <span className="text-blue-600">Solutions</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Automotive', 'Healthcare', 'E-commerce', 'Banking', 'Defense', 'Legal', 'Retail', 'Education'].map((ind) => (
              <div key={ind} className="p-8 border border-white/5 rounded-3xl hover:bg-blue-600 hover:border-blue-600 transition-all group cursor-pointer">
                <h4 className="text-xl font-bold group-hover:text-white">{ind}</h4>
                <p className="text-gray-500 text-xs mt-2 group-hover:text-blue-100 uppercase font-black">View Datasets</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTRIBUTOR MARKETPLACE (Luel.ai Strategy) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-900 to-black rounded-[4rem] p-12 md:p-24 border border-blue-500/20 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-tight">Join the Global <br/> <span className="text-blue-500">Truth Network.</span></h2>
            <p className="text-gray-400 text-xl">We have 1M+ active contributors earning through data labeling, dubbing, and transcription. Start your journey today.</p>
          </div>
          <button className="bg-white text-black px-12 py-6 rounded-full font-black uppercase text-sm tracking-widest hover:bg-blue-600 hover:text-white transition-all">Launch Contributor Portal</button>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 hover:border-blue-600/40 transition-all group">
      <div className="text-blue-500 mb-8 w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition">{icon}</div>
      <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tighter">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}