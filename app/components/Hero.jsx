"use client";
import Image from "next/image";
import me from "../../public/dev.jpeg";
import "./Hero.css";
import useTypingEffect from "../hooks/useTypingEffect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// icons
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const phrases = ["Developer.", "Youtuber."];
  const text = useTypingEffect(phrases);
  return (
    <div className="hero" ref={ref}>
      <div className="hero-container">
        <div className="hero-heading">
          <h1>
            Hello, I'm Antonio <br /> a <span>{text}</span>
          </h1>
          <div
            className="hero-buttons"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <motion.a whileHover={{ scale: 1.1 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}} href="#contact">
              <button>Contact Me</button>
            </motion.a>
            <motion.a href="#projects" whileHover={{ scale: 1.1 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
              <button>Projects</button>
            </motion.a>
          </div>
          <div
            className="hero-socials"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <a href="https://github.com/DevAntonioRogers" target="_blank">
              <AiFillGithub size={30} />
            </a>
            <a href="https://twitter.com/AntTheDev" target="_blank">
              <AiFillTwitterCircle size={30} />
            </a>
            <a href="https://www.linkedin.com/in/antonio-rogers-1640ab260/" target="_blank">
              <AiFillLinkedin size={30} />
            </a>

            <a href="https://www.youtube.com/channel/UCIK_w9r2GzL13YlZcdYtOig" target="_blank">
              <AiFillYoutube size={30} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="hero-image"
        >
          <Image src={me} height={0} width={0} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
