"use client";
import { useParams } from 'next/navigation';
import { allServices } from '@/lib/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const data = allServices[slug];

  if (!data) return <div className="min-h-screen flex items-center justify-center text-white">Service Not Found</div>;

  return (
    <main className="min-h-screen bg-[#020202] pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Core Capabilities</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              {data.title.split(' ')[0]} <br/> <span className="text-blue-600">{data.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10">{data.desc}</p>
            <Link href="/contact" className="bg-blue-600 px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition inline-block">Get A Project Quote</Link>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 p-12 rounded-[3.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-bold mb-8 italic uppercase tracking-tight">Key Features</h3>
            <div className="space-y-6">
              {data.features.map((f: string) => (
                <div key={f} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-300 font-bold">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}