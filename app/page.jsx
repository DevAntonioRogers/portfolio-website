import About from "./components/About";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Projects />
      <Contact />
      <About />
      <Footer />
    </>
  );
};

export default Home;
