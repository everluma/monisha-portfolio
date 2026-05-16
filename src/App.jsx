import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;