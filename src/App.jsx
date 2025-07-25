import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Solutions from "./pages/Solutions.jsx";
import WhyRid from "./pages/WhyRid.jsx";

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
