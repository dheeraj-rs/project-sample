export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <div
          className="absolute w-[200%] h-[200%] -left-1/2 top-1/2 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(to right, rgba(147, 51, 234, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 160px 160px, 160px 160px',
            transform: 'rotateX(60deg) translateZ(-200px)',
            animation: 'gridFloat 8s ease-in-out infinite'
          }}
        />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" style={{ animation: 'pulseGlow 4s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" style={{ animation: 'pulseGlow 6s ease-in-out infinite 1s' }} />

      <div className="absolute top-20 left-20 opacity-30" style={{ animation: 'codeFloat 6s ease-in-out infinite' }}>
        <div className="bg-slate-800/40 backdrop-blur-sm border border-cyan-500/30 rounded p-3 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
          <div>{'const deploy = async () => {'}</div>
          <div className="ml-4">{'await build();'}</div>
          <div>{'}'}</div>
        </div>
      </div>

      <div className="absolute top-40 right-32 opacity-25" style={{ animation: 'codeFloat 7s ease-in-out infinite 1s' }}>
        <div className="bg-slate-800/40 backdrop-blur-sm border border-purple-500/30 rounded p-3 text-xs font-mono text-purple-300 shadow-lg shadow-purple-500/10">
          <div>{'npm install @stack/sdk'}</div>
          <div className="text-emerald-400">{'✓ Success'}</div>
        </div>
      </div>

      <div className="absolute bottom-32 left-1/3 opacity-20" style={{ animation: 'terminalFloat 9s ease-in-out infinite 2s' }}>
        <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/10" style={{ width: '280px' }}>
          <div className="bg-slate-800/60 px-3 py-2 flex items-center space-x-2 border-b border-slate-700/50">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="p-3 font-mono text-xs text-cyan-300/80 space-y-1">
            <div>{'> stackforge init'}</div>
            <div className="text-emerald-400/80">{'Project initialized'}</div>
            <div className="text-slate-500">{'> _'}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-48 right-20 opacity-25" style={{ animation: 'codeFloat 8s ease-in-out infinite 1.5s' }}>
        <div className="bg-slate-800/40 backdrop-blur-sm border border-blue-500/30 rounded p-3 text-xs font-mono text-blue-300 shadow-lg shadow-blue-500/10">
          <div>{'function build() {'}</div>
          <div className="ml-4 text-emerald-400">{'return true;'}</div>
          <div>{'}'}</div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
