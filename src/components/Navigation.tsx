import { Code2 } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 className="w-7 h-7 text-cyan-400" />
          <span className="text-xl font-bold text-white tracking-tight">StackForge</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#docs" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
            Docs
          </a>
          <a href="#sdk" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
            SDK
          </a>
          <a href="#community" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
            Community
          </a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
            Pricing
          </a>
        </div>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
          Start Building
        </button>
      </div>
    </nav>
  );
}
