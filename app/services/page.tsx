"use client";
import { Mic, Languages, Database, Cpu, Search, Video } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    { title: "Transcription", icon: <Mic />, slug: "transcription" },
    { title: "RLHF Pipelines", icon: <Cpu />, slug: "rlhf" },
    { title: "AI Dubbing", icon: <Video />, slug: "dubbing" },
    { title: "Data Collection", icon: <Database />, slug: "collection" },
    { title: "Quality Assurance", icon: <Search />, slug: "qa" },
    { title: "Annotation", icon: <Search />, slug: "annotation" },
  ];

  return (
    <main className="min-h-screen bg-[#020202] pt-40 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl font-black uppercase italic mb-16 tracking-tighter">
          Our <span className="text-blue-600">Capabilities.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link href={`/services/${s.slug}`} key={s.title}>
              <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] hover:bg-blue-600/5 transition-all group">
                <div className="text-blue-500 mb-8">{s.icon}</div>
                <h3 className="text-4xl font-bold uppercase italic tracking-tighter mb-4">{s.title}</h3>
                <p className="text-gray-500">World-class {s.title} for generative AI models.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}