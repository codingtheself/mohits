import React from "react";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] w-full max-w-full flex items-center justify-center bg-slate-950 text-slate-50 overflow-hidden px-6">
      {/* Glow Effect / Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Increased max-width to allow larger text to stretch comfortably */}
      <div className="relative max-w-4xl mx-auto text-center z-10 py-20">
        {/* App Branding - Scaled up from 6xl/8xl to 7xl/9xl */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
          mohits
        </h1>

        {/* Full Form Subtitle - Scaled up from xs/sm to sm/base */}
        <p className="text-sm md:text-base tracking-[0.35em] uppercase text-blue-500 font-bold mb-10">
          Motivational Hits
        </p>

        {/* App Description - Scaled up from lg/xl to xl/2xl */}
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-14">
          A dedicated video platform built exclusively for high-energy
          motivational content. Discover hand-picked clips to fuel your
          ambition, or instantly embed your favorite inspirational videos from
          social media to help inspire the community.
        </p>

        {/* Call to Action Buttons - Bumped up font size and tracking */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-10 py-4.5 rounded-xl shadow-xl shadow-blue-600/20 transition flex items-center justify-center gap-3 group">
            Start Watching
            <Play
              size={20}
              className="fill-white transition-transform group-hover:scale-110"
            />
          </button>

          <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-lg px-10 py-4.5 rounded-xl transition flex items-center justify-center gap-3 group">
            Share a Video
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
