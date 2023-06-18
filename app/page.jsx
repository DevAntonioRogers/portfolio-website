import About from "./components/About";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TopButton from "./components/TopButton";

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Projects />
      <Contact />
      <About />
      <Footer />
      <TopButton />
    </>
  );
};

export default Home;
