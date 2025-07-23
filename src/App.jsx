import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import WhyRid from "./pages/WhyRid";

function App() {
  return (
    <div>
      <Header />
      <Preloader />

      {/* Sections with IDs for smooth scroll */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <Aboutus />
      </section>
      <section id="whyrid">
        <WhyRid />
      </section>
      <section id="solutions">
        <Solutions />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
