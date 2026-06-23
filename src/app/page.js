import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/Intro";
import Line from "@/components/line";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <Header />
      <Intro />

      <Line />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
