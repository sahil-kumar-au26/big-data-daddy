export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-purple-500/20 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <span className="inline-flex px-5 py-2 rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-xl text-blue-400">
          Human Intelligence For Artificial Intelligence
        </span>

        <h1 className="mt-10 text-6xl md:text-8xl font-black leading-tight">
          Build Better AI
          <br />
          With Global Talent
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-xl text-zinc-400">
          Data Collection, RLHF, Annotation, Translation,
          Transcription and AI Evaluation services across
          150+ languages.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
            Start Project
          </button>

          <button className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl">
            Join Workforce
          </button>

        </div>

      </div>

    </section>
  );
}