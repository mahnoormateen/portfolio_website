"use client";

export default function ResumeButton({ className = "" }) {
  return (
    <a
      href="/MahnoorMateen-Resume.pdf"
      download
      className={`flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 backdrop-blur-xl text-gray-200 font-medium transition-all duration-300 whitespace-nowrap hover:bg-white/15 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${className}`}
    >
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
        />
      </svg>
      <span className="text-sm sm:text-base">Resume</span>
    </a>
  );
}
