"use client";
import { Globe, Code2, LayoutGrid } from "lucide-react";

export default function AboutMe() {
  const cards = [
    {
      icon: <Globe size={22} />,
      title: "AI & Agentic Systems",
      badge: "PRIMARY FOCUS",
      description:
        "Building agent skills, subagents, MCP servers and multi-agent orchestrations on AWS Bedrock, OpenAI & Anthropic — with streaming generative UI woven into production frontends.",
      tags: [
        "Agent Skills",
        "Subagents",
        "MCP Servers",
        "Bedrock",
        "LangGraph",
        "RAG",
      ],
      glow: "from-violet-500 to-blue-500",
    },
    {
      icon: <Code2 size={22} />,
      title: "Frontend Architecture",
      description:
        "Scaling Angular & React platforms — micro-frontends, module federation, performance budgets and frontend governance for multi-team enterprises.",
      tags: ["Angular 2 → 21", "React", "Nx Monorepo", "Module Federation"],
      glow: "from-cyan-500 to-emerald-500",
    },
    {
      icon: <LayoutGrid size={22} />,
      title: "Design Systems & Platform",
      description:
        "Design-systems strategy and frontend platform engineering — tokens, primitives, framework-agnostic components, tooling and DX that compounds product velocity.",
      tags: ["Design Tokens", "Storybook", "Web Components", "Figma → Code"],
      glow: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-16 lg:py-20"
    >
      {/* Top Line */}
      {/* <div className="absolute top-0 left-0 w-full h-px bg-white/10" /> */}

      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs tracking-[0.2em] text-gray-300 uppercase">
            About Me
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white font-bold leading-tight max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">
          A frontend engineer who&nbsp;
          <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            thinks
          </span>
          <br />
          <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            like a platform architect
          </span>
        </h2>
      </div>
      {/* Stack on tablet/mobile and restore the split layout on desktop. */}
      <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-10">
        {/* Left Content Box */}
        <div className="border border-white/20 rounded-[32px] p-6 sm:p-8 md:p-10 bg-transparent">
          <div className="space-y-6 sm:space-y-8 text-white text-sm sm:text-base lg:text-[18px] leading-7 sm:leading-8 lg:leading-[2.2]">
            <p>
              I am{" "}
              <span className="font-semibold text-white">Mahnoor Mateen</span>,
              a Software Engineering student with a strong interest in frontend
              development, UI/UX design, and modern web technologies. I enjoy
              transforming ideas into clean, responsive, and user-friendly
              digital experiences.
            </p>

            <p>
              My journey began with Figma, where I learned the fundamentals of
              user interface design, visual hierarchy, and creating intuitive
              user experiences. This passion for design naturally led me to
              frontend development, allowing me to bring my ideas to life
              through code.
            </p>

            <p>
              Over time, I expanded my skills into both mobile and full-stack
              development. I built{" "}
              <span className="font-semibold text-white">RentWheels</span>, a
              vehicle rental application using Flutter and Supabase, focusing on
              real-time data management and seamless user interactions. I also
              developed an{" "}
              <span className="font-semibold text-white">
                E-Commerce Application
              </span>{" "}
              using React, Tailwind CSS, and NestJS, where I worked on building
              a responsive frontend and integrating it with a scalable backend
              architecture. Through these projects and the development of this{" "}
              <span className="font-semibold text-white">
                Portfolio Website
              </span>
              , I continue to strengthen my expertise in frontend, mobile, and
              full-stack development while constantly exploring new
              technologies.
            </p>
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {[
            ["BS", "SOFTWARE ENGINEERING"],
            ["Web", "Developer"],
            ["4+", "PROJECTS"],
            ["UI", "DESIGN FOCUS"],
          ].map(([title, subtitle]) => (
            <div
              key={title}
              className="border border-white/20 rounded-[32px] min-h-[160px] sm:min-h-[190px] flex flex-col items-center justify-center text-center p-4 sm:p-5"
            >
              <h3 className="font-serif italic text-white text-4xl sm:text-5xl md:text-6xl">
                {title}
              </h3>

              <p className="mt-2 text-[11px] sm:text-[13px] uppercase tracking-[2px] text-gray-400">
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Glow */}
      {/* <div className="absolute bottom-0 left-0 w-full h-96 bg-linear-to-t from-blue-900/20 to-transparent pointer-events-none" /> */}
    </section>
  );
}