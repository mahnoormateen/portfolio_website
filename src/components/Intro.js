"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Connections from "./connections";




export default function Intro() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 lg:pt-30">
      {/* Stack on small screens and restore the original two-column hero at large sizes. */}
      <div className="max-w-7xl mx-auto w-full grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Hello, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Mahnoor Mateen
          </h2>

          <div className="mt-4 text-base sm:text-lg md:text-xl font-bold">
            <span className="text-gray-300">Currently exploring </span>

            {/* Avoid a fixed width here so the animated role text can wrap on mobile. */}
            <span className="inline-block max-w-full border-b-2 border-dashed border-cyan-500 pb-1 align-bottom">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Flutter Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block max-w-full whitespace-normal bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent"
              />
            </span>
          </div>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-white leading-relaxed max-w-xl">
            Backend Developer, Flutter Developer and AI Enthusiast building
            responsive web and mobile applications with modern technologies.
          </p>

          <button className="mt-8 sm:mt-10 mb-8 sm:mb-10 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-medium transition-all duration-300 text-sm sm:text-base">
            Explore My Work
          </button>

          <Connections />

          {/* Stats */}

          {/* Use two columns on mobile so the stat cards stay readable without shrinking too far. */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 max-w-2xl">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-4 sm:p-6 text-center shadow-sm transition-all duration-500 transform-gpu hover:-translate-y-3 hover:scale-105 hover:-rotate-3 hover:shadow-[0_25px_50px_rgba(59,130,246,0.35)]">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">
                3+
              </h3>
              <p className="text-sm sm:text-base text-white mt-2">Projects</p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-4 sm:p-6 text-center shadow-sm transition-all duration-500 transform-gpu hover:-translate-y-3 hover:scale-105 hover:-rotate-3 hover:shadow-[0_25px_50px_rgba(59,130,246,0.35)]">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">
                10+
              </h3>
              <p className="text-sm sm:text-base text-white mt-2">
                Technologies
              </p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-4 sm:p-6 text-center shadow-sm transition-all duration-500 transform-gpu hover:-translate-y-3 hover:scale-105 hover:-rotate-3 hover:shadow-[0_25px_50px_rgba(59,130,246,0.35)] col-span-2 sm:col-span-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">
                100%
              </h3>
              <p className="text-sm sm:text-base text-white mt-2">Dedication</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end order-first lg:order-0">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-6 sm:-inset-8 lg:-inset-10 bg-cyan-500/20 blur-[80px] rounded-full opacity-60 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Neon Border Wrapper */}
            <div className="relative p-0.5 rounded-[30px] bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500">
              {/* Image */}
              <Image
                src="/assets/myimage.png"
                alt="Mahnoor Mateen"
                width={420}
                height={500}
                className="relative w-70 sm:w-85 md:w-95 lg:w-105 h-85 sm:h-105 md:h-115 lg:h-125 object-cover rounded-[28px] bg-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-700 group-hover:scale-[1.03] group-hover:-translate-y-3"
              />
            </div>

            {/* Extra Border Glow */}
            <div className="absolute inset-0 rounded-[30px] border border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(59,130,246,0.3)] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
