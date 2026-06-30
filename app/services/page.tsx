"use client";
import React from 'react';
import { 
  Mic, Languages, Database, Cpu, Search, Edit3, 
  Video, Box, Layers, FileText, CheckSquare, 
  Repeat, Scan, Headphones, MessageSquare 
} from 'lucide-react';
import Link from 'next/link';

const allServices = [
  { title: "Transcription", icon: <Mic />, desc: "General, Medical, and Legal Audio-to-Text.", slug: "transcription" },
  { title: "Translation", icon: <Languages />, desc: "Native-level document and software localization.", slug: "translation" },
  { title: "Back-2-Back Translation", icon: <Repeat />, desc: "Double-blind translation for extreme accuracy.", slug: "back-translation" },
  { title: "Data Collection", icon: <Database />, desc: "Global sourcing of Image, Video, and Speech data.", slug: "collection" },
  { title: "Data Labelling", icon: <Layers />, desc: "High-precision 2D/3D bounding boxes and polygons.", slug: "labelling" },
  { title: "Annotation", icon: <Box />, desc: "Semantic segmentation and key-point marking.", slug: "annotation" },
  { title: "LiDAR & 3D Point Cloud", icon: <Scan />, desc: "Sensor fusion data for Autonomous vehicles.", slug: "lidar" },
  { title: "RLHF", icon: <Cpu />, desc: "Expert human feedback for LLM training.", slug: "rlhf" },
  { title: "AI Dubbing", icon: <Headphones />, desc: "Multilingual voice-overs with lip-sync technology.", slug: "dubbing" },
  { title: "Copywriting", icon: <Edit3 />, desc: "Persuasive marketing and ad copy creation.", slug: "copywriting" },
  { title: "Content Writing", icon: <FileText />, desc: "SEO-optimized blogs, articles, and whitepapers.", slug: "content-writing" },
  { title: "Proofreading", icon: <CheckSquare />, desc: "Grammar, syntax, and style verification.", slug: "proofreading" },
  { title: "Audio Translation", icon: <MessageSquare />, desc: "Speech-to-Speech translation pipelines.", slug: "audio-translation" },
  { title: "QA & Validation", icon: <Search />, desc: "Rigorous testing of datasets and AI models.", slug: "qa" },
];

export default function ServicesBeast() {
  return (
    <main className="min-h-screen bg-[#020202] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-20">
          Our <span className="text-blue-600 font-outline text-transparent" style={{ WebkitTextStroke: '2px #2563eb' }}>Core</span> <br/> Arsenal.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((s) => (
            <Link href={`/services/${s.slug}`} key={s.slug}>
              <div className="p-10 bg-[#080808] border border-white/5 rounded-[3rem] hover:border-blue-600 transition-all group relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10"></div>
                <div className="text-blue-500 mb-8 w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition">{s.icon}</div>
                <h3 className="text-3xl font-bold uppercase italic mb-4">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}