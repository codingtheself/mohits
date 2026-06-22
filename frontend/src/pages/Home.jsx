import NavBar from "../components/NavBar"; // Adjust the path based on your folders
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-full bg-slate-950 text-slate-100 overflow-hidden relative">
      {/* Ambient Lighting Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top center glow that feeds from the navbar down into the hero */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-600/10 to-transparent blur-[160px] rounded-full" />

        {/* A soft accent glow lower down the page for depth */}
        <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[130px] rounded-full" />
      </div>

      {/* App Content */}
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
