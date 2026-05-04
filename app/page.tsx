import NavHeader from "./_components/NavHeader";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";
import ContactProvider from "./_context/ContactProvider";

export default function Home() {
  return (
    <div className="relative">
      <ContactProvider>
        <NavHeader />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </ContactProvider>
    </div>
  );
}
