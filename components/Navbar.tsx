"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      <div className="absolute inset-0 backdrop-blur-xl bg-black/30 border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-black tracking-wider"
        >
          BIGDATADADDY
        </Link>

        <nav className="hidden lg:flex items-center gap-8">

          <Link
            href="/solutions"
            className="hover:text-blue-400 transition"
          >
            Solutions
          </Link>

          <Link
            href="/industries"
            className="hover:text-blue-400 transition"
          >
            Industries
          </Link>

          <Link
            href="/contributors"
            className="hover:text-blue-400 transition"
          >
            Contributors
          </Link>

          <Link
            href="/careers"
            className="hover:text-blue-400 transition"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </Link>

        </nav>

        <div className="hidden lg:flex items-center gap-4">

          <button
            className="
            px-5
            py-2
            rounded-xl
            border
            border-white/10
            bg-white/5
            hover:bg-white/10
            "
          >
            Login
          </button>

          <button
            className="
            px-5
            py-2
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            "
          >
            Start Project
          </button>

        </div>

        <button className="lg:hidden">
          <Menu size={28} />
        </button>

      </div>

    </header>
  );
}