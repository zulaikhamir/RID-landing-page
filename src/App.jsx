import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import SignupModal from "./components/SignupModal";

import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true); // open by default

  return (
    <div>
      <Header />
      <Preloader />

      {/* Signup modal appears automatically and closes with the "×" inside it */}
      {isModalOpen && <SignupModal onClose={() => setIsModalOpen(false)} />}

      <Aboutus />
      <Contact />
      <Home />
      <NotFound />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;
