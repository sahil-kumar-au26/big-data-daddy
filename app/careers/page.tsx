const jobs = [
  { title: "Audio Transcriber", category: "Language", pay: "$20/hr", type: "Remote" },
  { title: "RLHF Trainer", category: "AI Training", pay: "$35/hr", type: "Freelance" },
  { title: "Native Video Dubber", category: "Multimedia", pay: "Project Based", type: "Global" },
];

export default function Careers() {
  return (
    <div className="min-h-screen pt-40 px-10 bg-[#020202]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-7xl font-black uppercase italic mb-4">Join the <span className="text-blue-600">Crowd</span></h1>
        <p className="text-gray-400 text-xl mb-20 leading-relaxed max-w-2xl">Work with the world’s leading AI companies. Flexible hours, global impact, and weekly payouts.</p>
        
        <div className="grid gap-4">
          {jobs.map((job, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/5 flex justify-between items-center hover:border-blue-600 transition">
              <div>
                <h3 className="text-2xl font-bold mb-1 tracking-tight">{job.title}</h3>
                <p className="text-blue-500 font-bold text-[10px] uppercase tracking-widest">{job.category} • {job.type}</p>
              </div>
              <div className="flex items-center gap-10">
                <span className="text-gray-500 font-bold text-sm uppercase">{job.pay}</span>
                <button className="bg-white text-black px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 hover:text-white transition">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}