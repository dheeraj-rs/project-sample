import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Build Faster.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ship Smarter.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          A powerful infrastructure platform for developers building modern applications.
        </p>

        <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 inline-flex items-center space-x-2 hover:scale-105">
          <span>Start Building for Free</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-16 flex items-center justify-center space-x-8 text-sm text-slate-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>No credit card required</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span>Deploy in seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
