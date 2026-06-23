"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiMcdonalds } from "react-icons/si";
import ResumeButton from "./resume";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-cyan-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex flex-col gap-3 px-4 sm:px-6 lg:px-15 md:flex-row md:items-center md:justify-between md:gap-0">
        {/* Logo */}
        <div className="flex w-full items-center justify-between md:w-auto">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-blue-500/60 flex items-center justify-center bg-[#0a0c18] shrink-0">
            <span className="text-blue-400 font-semibold text-base sm:text-lg">M</span>
          </div>

          {/* Mobile navigation keeps the section links accessible without changing the desktop header. */}
          <ul className="flex md:hidden items-center gap-3 overflow-x-auto whitespace-nowrap text-[11px] text-gray-300 font-medium no-scrollbar">
            <li>
              <Link href="#home" className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 hover:text-cyan-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 hover:text-cyan-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 hover:text-cyan-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#education" className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 hover:text-cyan-400 transition">
                Education
              </Link>
            </li>
            <li>
              <Link href="#contact" className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 hover:text-cyan-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li>
            <Link href="#home" className="hover:text-cyan-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="#about" className="hover:text-cyan-400 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </Link>
          </li>

          <li>
            <Link href="#education" className="hover:text-cyan-400 transition">
              Education
            </Link>
          </li>

          <li>
            <Link href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Resume Button */}
        <div className="flex w-full items-center justify-end gap-3 sm:gap-5 md:w-auto">
          <ResumeButton
            size={scrolled ? 22 : 26}
            className="text-white cursor-pointer transition-all text-sm sm:text-base"
          />
        </div>
      </nav>
    </header>
  );
}
