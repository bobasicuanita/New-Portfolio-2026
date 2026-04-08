import Hero from "./_components/Hero";
import NavHeader from "./_components/NavHeader";

export default function Home() {
  return (
    <div className="relative">
      <NavHeader hideMenu={false} />
      <Hero />
    </div>
  );
}
