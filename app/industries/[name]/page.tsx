"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { Shield, Zap, CheckCircle2, ArrowRight, Database, Cpu, Activity, Car } from 'lucide-react';
import Link from 'next/link';

// 1. Data Object: Isme aap har industry ki details bhar sakte ho
const industryData: any = {
  "automotive": {
    title: "Automotive",
    icon: <Car size={40} />,
    desc: "Precision datasets for ADAS, autonomous driving, and in-cabin voice assistants.",
    points: ["Lidar Annotation", "Road Sign Recognition", "Driver Monitoring Data"],
    color: "blue"
  },
  "healthcare": {
    title: "Healthcare",
    icon: <Activity size={40} />,
    desc: "Secure, HIPAA-compliant data processing for medical imaging and diagnostics.",
    points: ["X-Ray Labeling", "Medical Transcription", "Biometric Data Analysis"],
    color: "pink"
  },
  "banking": {
    title: "Banking & Finance",
    icon: <Shield size={40} />,
    desc: "AI-driven fraud detection and document processing datasets for global fintech.",
    points: ["KYC Verification Data", "Transaction Pattern Analysis", "Handwritten Document OCR"],
    color: "purple"
  }
};

export default function IndustryPage() {
  const params = useParams();
  const name = params.name as string;
  
  // Data nikaalo, agar URL galat hai toh "Automotive" default dikhao
  const data = industryData[name] || industryData["automotive"];

  return (
    <main className="min-h-screen bg-[#020202] text-white pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION FOR INDUSTRY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="flex items-center gap-4 text-blue-500 mb-6 uppercase font-black tracking-[0.3em] text-xs">
              <span className="w-10 h-1 bg-blue-600"></span> Industry Solutions
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              {data.title} <br/> <span className="text-blue-600">AI Intelligence.</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
              {data.desc} Scaling your {data.title} models requires ground-truth data that meets the highest safety standards.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">Request {data.title} Dataset</button>
            </div>
          </div>
          
          {/* VISUAL BOX (AIXBlock Style) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-all"></div>
            <div className="relative bg-[#0a0a0a] border border-white/10 p-12 rounded-[3rem] overflow-hidden">
               <div className="text-blue-500 mb-8">{data.icon}</div>
               <h3 className="text-2xl font-bold mb-6 italic uppercase tracking-tighter">Capabilities</h3>
               <div className="space-y-4">
                  {data.points.map((p: string) => (
                    <div key={p} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl">
                       <CheckCircle2 className="text-blue-500" size={18} />
                       <span className="text-sm font-bold text-gray-300">{p}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* TRUST BADGES (Macgence Power) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <TrustCard title="99.9% Accuracy" desc="Each data point passes through our multi-stage human-in-the-loop QA pipeline." />
           <TrustCard title="Global Compliance" desc="GDPR, HIPAA, and SOC2 compliant data handling for total security." />
           <TrustCard title="150+ Dialects" desc="Native-level localization tailored specifically for the {data.title} sector." />
        </section>

      </div>
    </main>
  );
}

function TrustCard({ title, desc }: any) {
  return (
    <div className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-blue-500/50 transition-all">
       <Zap className="text-blue-500 mb-6" size={24} />
       <h4 className="text-xl font-bold mb-3 uppercase italic tracking-tight">{title}</h4>
       <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}