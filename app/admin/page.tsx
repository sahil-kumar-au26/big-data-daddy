"use client";
import { useState } from 'react';
import { LayoutDashboard, Briefcase, Database, Users, Settings, Plus, Send } from 'lucide-react';

export default function MasterAdmin() {
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div className="min-h-screen bg-[#020202] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 bg-black p-8 hidden lg:block">
        <div className="text-2xl font-black tracking-tighter mb-12 text-blue-600 italic">BDD CONTROL</div>
        <nav className="space-y-2">
          <AdminNavBtn active={activeTab === 'jobs'} onClick={() => setActiveTab('jobs')} icon={<Briefcase size={18}/>} label="Manage Jobs" />
          <AdminNavBtn active={activeTab === 'data'} onClick={() => setActiveTab('data')} icon={<Database size={18}/>} label="Data Catalog" />
          <AdminNavBtn active={activeTab === 'apps'} onClick={() => setActiveTab('apps')} icon={<Users size={18}/>} label="Applications" />
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10 pt-32 overflow-y-auto">
        
        {activeTab === 'jobs' && (
          <div className="max-w-4xl">
            <div className="flex justify-between items-center mb-10">
               <h1 className="text-4xl font-black uppercase italic italic">Post a <span className="text-blue-600">Job</span></h1>
               <div className="text-xs font-bold bg-blue-600 px-4 py-2 rounded-full uppercase">Live on Careers Page</div>
            </div>
            <div className="grid grid-cols-2 gap-6 bg-[#0a0a0a] p-10 rounded-[3rem] border border-white/5">
               <input className="col-span-2 bg-white/5 border border-white/10 p-5 rounded-2xl outline-none" placeholder="Job Title (e.g., Native German Transcriber)" />
               <select className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none text-gray-400">
                  <option>Transcription</option>
                  <option>Lidar Annotation</option>
                  <option>Proofreading</option>
               </select>
               <input className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none" placeholder="Salary / Reward (e.g., $25/hr)" />
               <textarea className="col-span-2 bg-white/5 border border-white/10 p-5 rounded-2xl outline-none h-40" placeholder="Job Description, Requirements, and Qualifications..." />
               <button className="col-span-2 bg-blue-600 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] transition shadow-lg shadow-blue-600/20">Push to Production</button>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black uppercase italic mb-10">Update <span className="text-pink-500">Data Catalog</span></h1>
            <div className="bg-[#0a0a0a] p-10 rounded-[3rem] border border-white/5 space-y-6">
               <input className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none" placeholder="Dataset Name (e.g., 50k Hours Hindi Speech)" />
               <div className="grid grid-cols-2 gap-4">
                  <input className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none" placeholder="Industry" />
                  <input className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none" placeholder="Size (GB/TB)" />
               </div>
               <button className="w-full bg-pink-600 py-5 rounded-2xl font-black uppercase tracking-widest">Update Marketplace</button>
            </div>
          </div>
        )}

        {activeTab === 'apps' && (
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black uppercase italic mb-10">Review <span className="text-green-500">Applications</span></h1>
            <div className="space-y-4">
               {[1,2,3].map(i => (
                 <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-3xl flex justify-between items-center">
                    <div>
                       <h4 className="font-bold text-xl text-white">Sahil Kumar</h4>
                       <p className="text-blue-500 text-xs font-bold uppercase tracking-widest">Applied for: LiDAR Annotator</p>
                    </div>
                    <button className="bg-white text-black px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest">View Resume</button>
                 </div>
               ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

function AdminNavBtn({ icon, label, active, onClick }: any) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-4 p-4 rounded-2xl transition font-bold ${active ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-gray-500 hover:bg-white/5'}`}>
      {icon} <span>{label}</span>
    </button>
  );
}