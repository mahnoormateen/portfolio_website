
import { Globe, Code2, LayoutGrid } from "lucide-react";

export default function Projects() {
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
      id="projects"
      className="relative min-h-screen overflow-hidden px-6  "
    >
      {/* Top Line */}
      {/* <div className="absolute top-0 left-0 w-full h-px bg-white/10" /> */}

      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs tracking-[0.2em] text-gray-300 uppercase">
            Projects
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white font-bold leading-tight max-w-4xl mx-auto text-3xl md:text-5xl">
          A frontend engineer who&nbsp;
          <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            thinks
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            like a platform architect
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
          Based in Bangalore, India. I started as a UI/UX designer and grew into
          a frontend architect who today builds AI-native product experiences
          and the platforms that make them possible at scale.
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mt-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-[28px] p-[1px] overflow-hidden"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${card.glow} opacity-80`}
              />

              {/* Card Body */}
              <div className="relative h-full rounded-[28px] bg-[#090f1d]/95 backdrop-blur-xl p-8 overflow-hidden">
                {/* Glow */}
                <div
                  className={`absolute -top-20 right-0 w-60 h-60 bg-gradient-to-r ${card.glow} blur-[120px] opacity-20`}
                />

                {/* Badge */}
                {card.badge && (
                  <div className="absolute right-5 top-5">
                    <span className="text-[10px] font-semibold tracking-widest px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white">
                      {card.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 mb-8">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl font-bold mb-5 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-8 text-[15px]">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full bg-white/[0.04] border border-white/10 text-gray-300"
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