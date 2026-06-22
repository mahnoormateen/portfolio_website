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
          ? "bg-black/70 backdrop-blur-xl border-b border-cyan-500/10 py-6"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <h1 className="text-white font-bold tracking-wide text-lg md:text-xl">
          <span className="flex items-center gap-1">
            <SiMcdonalds />
          </span>
        </h1>

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
        <div className="flex items-center gap-5">
          <ResumeButton
            size={scrolled ? 22 : 26}
            className="text-yellow-300 cursor-pointer transition-all"
          />
        </div>
      </nav>
    </header>
  );
}
