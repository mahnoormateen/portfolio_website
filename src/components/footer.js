"use client";

import Connections from "./connections";

export default function Footer() {
  return (
    <footer className="w-full mt-15 border-t border-white/5 bg-[#04050d]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15 py-5">
        {/* Stack footer items on mobile while keeping the desktop row intact. */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <div className="w-10 h-10 rounded-xl border border-blue-500/60 flex items-center justify-center bg-[#0a0c18] shrink-0">
            <span className="text-blue-400 font-semibold text-lg">M</span>
          </div>

          {/* Social Icons */}
          <div className="flex-1 flex justify-center min-w-0">
            <Connections />
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right shrink-0">
            © 2026 Mahnoor Mateen. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
