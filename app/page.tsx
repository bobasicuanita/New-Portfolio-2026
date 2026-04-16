import About from "./_components/About";
import Hero from "./_components/Hero";
import NavHeader from "./_components/NavHeader";

export default function Home() {
  return (
    <div className="relative">
      <NavHeader />
      <Hero />
      <About />
    </div>
  );
}
