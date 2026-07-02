"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-28">

      {/* Background */}

      <div className="absolute inset-0 grid-bg" />

      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        <motion.div

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

          className="text-center"

        >

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">

            <Sparkles size={18} />

            Trusted AI Data Infrastructure

          </div>

          <h1 className="mt-10 text-6xl md:text-8xl font-black leading-none tracking-tight">

            Build Better

            <br />

            <span className="gradient-text">

              AI With Humans.

            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-white/60 leading-9">

            Enterprise AI data collection, RLHF, multilingual annotation,
            transcription, translation, image labeling and evaluation services
            trusted by companies building the next generation of AI.

          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">

            <button className="group rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-5 text-lg font-semibold shadow-[0_0_50px_rgba(37,99,235,.45)] transition hover:scale-105">

              Start Project

              <ArrowRight
                size={18}
                className="inline ml-2 group-hover:translate-x-2 transition"
              />

            </button>

            <button className="rounded-full border border-white/10 bg-white/5 px-8 py-5 text-lg hover:border-blue-500 hover:bg-blue-500/10 transition">

              Become Contributor

            </button>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">

            {[
              ["200+", "Freelancers"],
              ["100+", "Clients"],
              ["150+", "Languages"],
              ["15+", "Years Experience"],
            ].map(([num, text]) => (

              <div
                key={text}
                className="glass-card rounded-3xl p-8"
              >

                <h2 className="text-5xl font-black text-blue-500">

                  {num}

                </h2>

                <p className="text-white/60 mt-3">

                  {text}

                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}