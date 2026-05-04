import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

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

      {/* Content beneath the scroller */}
      <Projects />
      <Experience />
      <Courses />
      <Footer />
    </main>
  );
}
