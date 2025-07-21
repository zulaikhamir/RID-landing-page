import "./styles/main.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Preloader from "./components/preloader";
import SignupModal from "./components/signupmodal";

import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Preloader />
      <SignupModal />
      <Aboutus />
      <Contact />
      <Home />
      <NotFound />
      <Solutions />
    </div>
  );
}

export default App;
