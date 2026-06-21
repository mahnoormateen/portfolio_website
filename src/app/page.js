// import About from "@/components/about";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/header";
import Intro from "@/components/Intro";
import Line from "@/components/line";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />

      <Header />
      <Intro />
      <Line />
    </div>
  );
}
