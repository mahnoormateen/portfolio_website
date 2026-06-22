import About from "@/components/about";
import AnimatedBackground from "@/components/AnimatedBackground";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Header from "@/components/header";
import Intro from "@/components/Intro";
import Line from "@/components/line";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <Header />
      {/* link correction krni h */}
      <Intro />

      <Line />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
