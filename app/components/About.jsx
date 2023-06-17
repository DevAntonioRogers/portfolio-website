"use client";
import "./About.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="about" className="about">
      <h1 ref={ref}>About Me</h1>
      <div className="about-container">
        <div
          className="about-text"
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p>
            Welcome to my portfolio! I'm Antonio Rogers, a passionate and dedicated full stack developer. My love for
            coding and creating innovative projects has been a driving force in my career. With a solid foundation in
            both front-end and back-end technologies, I strive to bring ideas to life through clean and efficient code.I
            believe in constantly expanding my knowledge and staying up-to-date with the latest industry trends to
            deliver high-quality solutions.
          </p>
        </div>
        <div
          className="skills"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2>Skills</h2>
          <div>
            <h3>Javascript</h3>
            <h3>React</h3>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>MongoDB</h3>
            <h3>Express</h3>
            <h3>NodeJS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
