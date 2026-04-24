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

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8">
         
          <Hero />
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