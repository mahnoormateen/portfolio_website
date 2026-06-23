"use client";

export default function ResumeButton({ className = "" }) {
  return (
    <a
      href="/MahnoorMateen-Resume.pdf"
      download
      className={`flex items-center gap-2 sm:gap-3 bg-transparent text-gray-200 font-small transition-all duration-300 whitespace-nowrap ${className}`}
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
