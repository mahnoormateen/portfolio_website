"use client";
import { Globe, Code2, LayoutGrid } from "lucide-react";

export default function Projects() {
  const cards = [
    {
      icon: <Globe size={22} />,
      title: "Mobile App Development",
      badge: "FEATURED PROJECT",
      description:
        "Built RentWheels, a cross-platform vehicle rental application with Flutter and Dart, leveraging Supabase for secure authentication, cloud database integration, and seamless user experiences.",
      tags: [
        "Flutter",
        "Dart",
        "Supabase",
        "REST APIs",
        "Mobile Development",
        "UI/UX",
      ],
      glow: "from-violet-500 to-blue-500",
    },
    {
      icon: <Code2 size={22} />,
      title: "Full Stack Development",
      description:
        "Developing responsive and high-performance web applications using React, Next.js, and Tailwind CSS, with NestJS and PostgreSQL powering secure backend services, APIs, and data-driven solutions.",
      tags: ["React", "Next.js", "Tailwind CSS", "NestJS", "PostgreSQL"],
      glow: "from-cyan-500 to-emerald-500",
    },
    {
      icon: <LayoutGrid size={22} />,
      title: "Solitaire Game Development",
      description:
        "Built a Solitaire card game in C++ using strong Object-Oriented Programming and Data Structures & Algorithms concepts. Implemented game logic, card management, inheritance, polymorphism, and efficient data handling to create a structured and maintainable application.",
      tags: ["C++", "OOP", "DSA", "Inheritance", "Polymorphism"],
      glow: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 min-h-screen overflow-hidden px-4 sm:px-6  pb-20 sm:pb-24 lg:pb-30"
    >
      {/* Top Line */}
      {/* <div className="absolute top-0 left-0 w-full h-px bg-white/10" /> */}

      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="px-5 py-2 rounded-full border border-white/10 bg-white/3 text-xs tracking-[0.2em] text-gray-300 uppercase">
            Projects
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white font-bold leading-tight max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl">
          Things I have &nbsp;
          <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            architected
          </span>
        </h2>

        {/* Cards */}
        <div className="grid gap-6 mt-12 sm:mt-16 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-[28px] p-px overflow-hidden"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 bg-linear-to-r ${card.glow} opacity-80`}
              />

              {/* Card Body */}
              <div className="relative h-full rounded-[28px] bg-[#090f1d]/95 backdrop-blur-xl p-6 sm:p-8 overflow-hidden">
                {/* Glow */}
                <div
                  className={`absolute -top-20 right-0 w-60 h-60 bg-linear-to-r ${card.glow} blur-[120px] opacity-20`}
                />

                {/* Badge */}
                {card.badge && (
                  <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                    <span className="text-[10px] font-semibold tracking-widest px-3 py-1 rounded-full bg-linear-to-r from-violet-500 to-blue-500 text-white">
                      {card.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 mb-6 sm:mb-8">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-7 sm:leading-8 text-sm sm:text-[15px]">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full bg-white/[0.04] border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Glow */}
      {/* <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" /> */}
    </section>
  );
}