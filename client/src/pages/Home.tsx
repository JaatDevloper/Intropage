import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Quote />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
