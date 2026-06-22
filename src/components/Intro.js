"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Connections from "./connections";




export default function Intro() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-30">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight ">
            Hello, I am
          </h1>

          {/* <h2 className="text-5xl md:text-7xl font-bold text-violet-500 mt-2">
            Mahnoor Mateen
          </h2> */}

          <h2 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Mahnoor Mateen
          </h2>

          <div className="mt-4 text-xl md:text-xl font-bold">
            <span className="text-gray-300">Currently exploring </span>

            <span className="w-50 inline-block border-b-2 border-dashed border-cyan-500 pb-1">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
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
                className="bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent"
              />
            </span>
          </div>

          <p className="mt-8 text-lg text-white leading-relaxed max-w-xl">
            Frontend Developer, Flutter Developer and AI Enthusiast building
            responsive web and mobile applications with modern technologies.
          </p>

          <button className="mt-10 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-medium transition-all duration-300">
            Explore My Work
          </button>

          <Connections />

          {/* Stats */}

          <div className="grid grid-cols-3 gap-4 mt-14 max-w-2xl">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 text-center shadow-sm transition-all duration-500 transform-gpu hover:-translate-y-3 hover:scale-105 hover:-rotate-3 hover:shadow-[0_25px_50px_rgba(59,130,246,0.35)]">
              <h3 className="text-4xl font-bold text-blue-500">3+</h3>
              <p className="text-white mt-2">Projects</p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 text-center shadow-sm transition-all duration-500 transform-gpu hover:-translate-y-3 hover:scale-105 hover:-rotate-3 hover:shadow-[0_25px_50px_rgba(59,130,246,0.35)]">
              <h3 className="text-4xl font-bold text-blue-500">10+</h3>
              <p className="text-white mt-2">Technologies</p>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 text-center shadow-sm transition-all duration-500 transform-gpu hover:-translate-y-3 hover:scale-105 hover:-rotate-3 hover:shadow-[0_25px_50px_rgba(59,130,246,0.35)]">
              <h3 className="text-4xl font-bold text-blue-500">100%</h3>
              <p className="text-white mt-2">Dedication</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-cyan-500/20 blur-[80px] rounded-full opacity-60 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Neon Border Wrapper */}
            <div className="relative p-[2px] rounded-[30px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              {/* Image */}
              <Image
                src="/assets/myimage.png"
                alt="Mahnoor Mateen"
                width={420}
                height={500}
                className="
          relative
          w-[420px]
          h-[500px]
          object-cover
          rounded-[28px]
          bg-slate-950
          shadow-[0_0_25px_rgba(34,211,238,0.35)]
          transition-all
          duration-700
          group-hover:scale-[1.03]
          group-hover:-translate-y-3
        "
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
