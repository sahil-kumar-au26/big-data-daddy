"use client";
import React from 'react';
import { LayoutDashboard, Wallet, ListChecks, Bell, Settings, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  const tasks = [
    { id: 1, title: "English to Hindi Audio Transcription", reward: "$12.50", status: "Available" },
    { id: 2, title: "Image Annotation - Autonomous Vehicles", reward: "$0.05 / img", status: "Ongoing" },
    { id: 3, title: "Spanish Video Dubbing (2 mins)", reward: "$45.00", status: "Available" },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 p-6 hidden md:block">
        <div className="mb-10 font-black text-xl tracking-tighter">BD<span className="text-blue-500">D</span> DASHBOARD</div>
        <nav className="space-y-2">
          <NavItem icon={<LayoutDashboard size={18}/>} label="Overview" active />
          <NavItem icon={<ListChecks size={18}/>} label="Marketplace" />
          <NavItem icon={<Wallet size={18}/>} label="Payouts" />
          <NavItem icon={<Bell size={18}/>} label="Notifications" />
          <NavItem icon={<Settings size={18}/>} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 pt-32">
        <div className="max-w-5xl mx-auto">
          <header className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl font-black italic uppercase tracking-tight">Welcome Back, <span className="text-blue-500">Sahil</span></h1>
              <p className="text-gray-500 mt-2">You have 12 new tasks matching your profile.</p>
            </div>
            <div className="bg-blue-600 p-6 rounded-[2rem] text-right shadow-xl shadow-blue-600/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-100">Wallet Balance</p>
              <h2 className="text-3xl font-black">$482.50</h2>
            </div>
          </header>

          {/* Task Grid */}
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-6">Available Tasks</h3>
          <div className="grid gap-4">
            {tasks.map((task) => (
              <div key={task.id} className="bg-white/5 border border-white/5 p-6 rounded-3xl flex justify-between items-center group hover:border-blue-500 transition-all">
                <div>
                  <h4 className="text-lg font-bold group-hover:text-blue-400 transition">{task.title}</h4>
                  <p className="text-xs text-gray-500 uppercase font-bold mt-1">Reward: {task.reward}</p>
                </div>
                <button className="bg-white text-black px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-blue-600 hover:text-white transition">
                  Start Task <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: any) {
  return (
    <div className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:bg-white/5 hover:text-white'}`}>
      {icon} <span className="text-sm font-bold">{label}</span>
    </div>
  );
}