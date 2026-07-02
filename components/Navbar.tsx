"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-2xl bg-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-20">

        <Link
          href="/"
          className="text-3xl font-black tracking-tight"
        >
          <span className="text-white">BIG</span>
          <span className="text-blue-500">DATA</span>
          <span className="text-white">DADDY</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-white/70">

          <a
            href="#solutions"
            className="hover:text-blue-400 transition"
          >
            Solutions
          </a>

          <a
            href="#industries"
            className="hover:text-blue-400 transition"
          >
            Industries
          </a>

          <a
            href="#services"
            className="hover:text-blue-400 transition"
          >
            Services
          </a>

          <a
            href="#contributors"
            className="hover:text-blue-400 transition"
          >
            Contributors
          </a>

          <a
            href="#careers"
            className="hover:text-blue-400 transition"
          >
            Careers
          </a>

        </nav>

        <div className="hidden lg:flex gap-4">

          <button
            className="px-6 py-3 rounded-full border border-white/10 hover:border-blue-500 transition"
          >
            Login
          </button>

          <button
            className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(37,99,235,.5)]"
          >
            Start Project
          </button>

        </div>

        <button className="lg:hidden">
          <Menu size={30} />
        </button>

      </div>
    </header>
  );
}