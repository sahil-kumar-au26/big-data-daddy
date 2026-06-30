"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Car, Activity, Landmark, ShoppingCart, Shield, Plane, 
  Globe, Zap, Cpu, Leaf, Music, Scale 
} from 'lucide-react';

const industries = [
  { name: "Automotive", slug: "automotive", icon: <Car />, desc: "LiDAR, ADAS & Sensor Fusion." },
  { name: "Healthcare", slug: "healthcare", icon: <Activity />, desc: "Medical Imaging & Prescription OCR." },
  { name: "Banking & Finance", slug: "banking", icon: <Landmark />, desc: "Fraud Detection & KYC Data." },
  { name: "Retail & E-commerce", slug: "retail", icon: <ShoppingCart />, desc: "Personalization & Search Relevance." },
  { name: "Legal", slug: "legal", icon: <Scale />, desc: "Document Analysis & Transcription." },
  { name: "Defense", slug: "defense", icon: <Shield />, desc: "Satellite Imagery & Logistics AI." },
  { name: "AgriTech", slug: "agritech", icon: <Leaf />, desc: "Crop Monitoring & Yield Prediction." },
  { name: "Logistics", slug: "logistics", icon: <Plane />, desc: "Route Optimization & Inventory AI." },
  { name: "Entertainment", slug: "entertainment", icon: <Music />, desc: "Dubbing, Subtitles & Metadata." },
  { name: "Government", slug: "government", icon: <Globe />, desc: "Public Records Digitization." },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#020202] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic mb-16 tracking-tighter">
          Global <span className="text-blue-600">Industries.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link href={`/industries/${ind.slug}`} key={ind.slug}>
              <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] hover:border-blue-600 transition-all group">
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition">{ind.icon}</div>
                <h3 className="text-2xl font-bold uppercase italic">{ind.name}</h3>
                <p className="text-gray-500 mt-4 text-sm font-medium">{ind.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}