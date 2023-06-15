"use client";
import Image from "next/image";
import me from "../../public/dev.jpeg";
import "./Hero.css";
import useTypingEffect from "../hooks/useTypingEffect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// icons
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

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
            <button>Contact Me</button>
            <button>Projects</button>
          </div>
          <div
            className="hero-socials"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <span>
              <AiFillGithub size={30} />
            </span>
            <span>
              <AiFillTwitterCircle size={30} />
            </span>
            <span>
              <AiFillLinkedin size={30} />
            </span>
            <span>
              <FaDev size={30} />
            </span>
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
