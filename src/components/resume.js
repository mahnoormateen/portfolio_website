export default function ResumeButton() {
  return (
    <a
      href="/MahnoorMateen-Resume.pdf"
      download
      className="flex items-center gap-3 bg-transparent text-gray-200 font-small transition-all duration-300"
    >
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
        />
      </svg>
      Resume
    </a>
  );
}
