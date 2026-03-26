import Navigation from './components/Navigation';
import Hero from './components/Hero';
import GridBackground from './components/GridBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      <GridBackground />
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
