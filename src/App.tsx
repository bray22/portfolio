import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WorkSection from "./components/WorkSection";
import ExpertiseSection from "./components/ExpertiseSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import MorphingRetroBackground from "./components/MorphingRetroBackgrounds";

function App() {
  return (
    <div className="bg-white">
       <Header />
      <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
        <MorphingRetroBackground />

        <div className="relative mx-auto max-w-7xl px-6 pb-6 pt-16 lg:px-8">
          <Hero />
        </div>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
  <a
    href="#work"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 shadow-[0_0_20px_rgba(255,255,255,0.25)] text-white/70 backdrop-blur transition hover:text-white"
  >
    ↓
  </a>
  
</div>
      </section>

      <main className="relative bg-white text-slate-950">
        <WorkSection />
        <ExperienceSection />
        <ExpertiseSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
       
    </div>
  );
}

export default App;