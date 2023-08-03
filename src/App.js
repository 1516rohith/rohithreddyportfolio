import React from "react";
import "./style.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <input type="checkbox" className="dark-mode-check" id="darkmode" />
      <div className="wrapper">
        <Header />

        {/* <!-- Hero --> */}
        <Hero />

        {/* <!-- Banner --> */}
        <Banner />
        {/* <!-- Skills --> */}
        <Skills />
        {/* <!-- Projects --> */}
        <Projects />
        {/* <!-- About Me --> */}
        <About />
        {/* <!-- Contact --> */}
        <Contact />
        {/* <!-- Footer --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
