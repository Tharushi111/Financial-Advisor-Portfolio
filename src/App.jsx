import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
