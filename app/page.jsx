import About from "./components/About";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
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
    </>
  );
};

export default Home;
