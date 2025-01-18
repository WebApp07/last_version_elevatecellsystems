import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";
import TestimonialsSection from "./components/fancy-testimonials-slider";
import AnimatedCanvas from "./components/AnimatedCanvas";
import ContactSection from "./components/GetInTouch";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <TestimonialsSection />
      <About />
      <AnimatedCanvas />
      <Features />
      <Story />
      <FAQ />
      <Contact />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
