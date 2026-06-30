"use client";
import React from 'react';
import Link from 'next/link';
import { Car, Activity, Landmark, ShoppingCart, Shield, Globe } from 'lucide-react';

export default function IndustriesIndex() {
  const industries = [
    { name: "Automotive", slug: "automotive", icon: <Car /> },
    { name: "Healthcare", slug: "healthcare", icon: <Activity /> },
    { name: "Banking", slug: "banking", icon: <Landmark /> },
    { name: "Retail", slug: "retail", icon: <ShoppingCart /> },
  ];

  return (
    <main className="min-h-screen bg-[#020202] text-white pt-40 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-16">
          Global <span className="text-blue-600">Industries.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <Link href={`/industries/${ind.slug}`} key={ind.slug}>
              <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] hover:border-blue-600 transition-all group">
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition">{ind.icon}</div>
                <h3 className="text-2xl font-bold uppercase italic">{ind.name}</h3>
                <p className="text-gray-500 mt-4 text-sm font-medium">Custom AI data pipelines for the {ind.name} sector.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}