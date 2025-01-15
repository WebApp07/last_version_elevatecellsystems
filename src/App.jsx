import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FancyTestimonialsSlider from "./components/fancy-testimonials-slider";
import FAQ from "./components/Faq";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <FancyTestimonialsSlider />
      <About />
      <Features />
      <Story />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
