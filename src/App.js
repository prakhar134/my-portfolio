import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Blogs from "./Components/Blogs/Blogs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Particles from "react-particles-js";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <div className="App">
      <div className="particles">
        <ParticleBackground />
      </div>
      <Header />

      <About />

      <Skills />

      <Projects />

      <Blogs />
      <ContactUs />
    </div>
  );
}

export default App;
