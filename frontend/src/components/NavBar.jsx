import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-5 px-8 md:px-12 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 text-slate-200">
      {/* Left: Branding (Icon removed) */}
      <Link to="/" className="group">
        <span className="text-2xl font-black tracking-wider text-white group-hover:text-blue-400 transition duration-200">
          mohits
        </span>
      </Link>

      {/* Right: Navigation Links & CTA Buttons */}
      <div className="flex items-center gap-3 sm:gap-4 text-sm font-bold">
        {/* Styled Home Link (Pill style to match modern web apps) */}
        <Link
          to="/"
          className="bg-slate-900/60 hover:bg-slate-900 text-slate-200 hover:text-white border border-slate-800/80 px-4 py-2 rounded-lg transition duration-200"
        >
          Home
        </Link>

        {/* Explore Hits Button */}
        <Link
          to="/explore"
          className="hidden sm:inline-flex bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-2 rounded-lg transition duration-200"
        >
          Explore Hits
        </Link>

        {/* Upload Button */}
        <Link
          to="/upload"
          className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-200 shadow-lg shadow-blue-600/10"
        >
          <PlusCircle size={16} />
          Upload
        </Link>
      </div>
    </nav>
  );
}
