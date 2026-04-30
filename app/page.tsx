import About from "./_components/About";
import Experience from "./_components/Experience";
import Hero from "./_components/Hero";
import NavHeader from "./_components/NavHeader";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="relative">
      <NavHeader />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
