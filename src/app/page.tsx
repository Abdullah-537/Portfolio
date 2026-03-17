import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="relative h-[500vh] w-full">
        {/* The persistent Sticky Background */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas />
        </div>
        
        {/* Parallax Overlay sections positioned over the 500vh scroll height */}
        <Overlay />
      </div>

      {/* Projects Grid beneath the scroller */}
      <Projects />
    </main>
  );
}
