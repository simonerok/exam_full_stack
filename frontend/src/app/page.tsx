import NavBar from "../app/components/NavBar";
import SplashImage from "../app/components/SplashImage";
import Projects from "../app/components/Projects";
import Bio from "../app/components/Bio";
import Contact from "../app/components/Contact";

export default function Home() {
  return (
    <div className="bg-bg_lighter min-h-screen">
      <NavBar />
      <SplashImage />
      <Bio />
      <Projects />
      <Contact />
    </div>
  );
}
