"use client";

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-15 min-h-screen overflow-hidden py-8 sm:py-10 px-4 sm:px-6 md:px-12"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-125 sm:h-125 blur-[180px]" />

        {/* Right Glow */}
        <div className="absolute top-0 right-0 w-80 h-72 sm:w-150 sm:h-125 blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="px-5 py-2 rounded-full border border-white/10 bg-white/3 text-xs tracking-[0.2em] text-gray-300 uppercase">
            Education
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 lg:mb-20">
          Foundations
        </h2>

        {/* Cards */}
        <div
          className="grid gap-6 lg:grid-cols-2"
          style={{ perspective: "1200px" }}
        >
          {/* Left Card */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#060814]/70 p-6 sm:p-7 min-h-[160px] sm:min-h-45 transition-all duration-500 ease-out hover:shadow-[0_25px_60px_rgba(0,255,255,0.15)] hover:border-cyan-400/30 hover:transform-[rotateX(8deg)_rotateY(-8deg)_translateY(-12px)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 " />

            <div className="relative z-10">
              <p className="text-cyan-400 text-xs sm:text-[15px] tracking-[2px] mb-4 sm:mb-5">
                2023 — 2027
              </p>

              <h3 className="text-white text-2xl sm:text-[30px] md:text-[34px] font-bold leading-tight mb-3">
                Bachelor of Software Engineering
              </h3>

              <p className="text-gray-400 text-sm sm:text-[16px]">
                Superior University,Lahore
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#060814]/70 p-6 sm:p-7 min-h-[160px] sm:min-h-45 transition-all duration-500 ease-out hover:shadow-[0_25px_60px_rgba(0,255,255,0.15)] hover:border-cyan-400/30 hover:transform-[rotateX(8deg)_rotateY(-8deg)_translateY(-12px)]            "
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Shine Effect */}
            <div className="absolute inset-0  bg-linear-to-r from-transparent via-white/5  to-transparent  -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="relative z-10">
              <p className="text-cyan-400 text-xs sm:text-[15px] tracking-[2px] uppercase mb-4 sm:mb-5">
                Always
              </p>

              <h3 className="text-white text-2xl sm:text-[30px] md:text-[34px] font-bold leading-tight mb-3">
                Continuous Learning
              </h3>

              <p className="text-gray-400 text-sm sm:text-[16px] leading-relaxed">
                Tracking the AI / agentic frontier — papers, MCP server
                building, weekend agent demos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
