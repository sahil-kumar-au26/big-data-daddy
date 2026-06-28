export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl">
        <h2 className="text-4xl font-black uppercase italic mb-2 tracking-tighter">Contributor <span className="text-blue-600">Signup</span></h2>
        <p className="text-gray-500 mb-10 text-sm">Create an account to browse available tasks.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-blue-600 transition" />
          <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-blue-600 transition" />
          <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-blue-600 transition" />
          <button className="w-full bg-blue-600 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition shadow-xl shadow-blue-600/20">Start Earning</button>
        </form>
      </div>
    </div>
  );
}