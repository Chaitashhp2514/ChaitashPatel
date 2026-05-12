import "@/App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleField from "./components/ParticleField";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="App relative" data-testid="app-root">
      <Cursor />
      <ParticleField />
      <Nav />
      <main>
        <Hero />
        <div className="section-line max-w-7xl mx-auto" />
        <Skills />
        <div className="section-line max-w-7xl mx-auto" />
        <Projects />
        <div className="section-line max-w-7xl mx-auto" />
        <Contact />
      </main>
    </div>
  );
}

export default App;
