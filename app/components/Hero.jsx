"use client";
import Image from "next/image";
import me from "../../public/dev.jpeg";
import "./Hero.css";
import useTypingEffect from "../hooks/useTypingEffect";

// icons
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

const Hero = () => {
  const phrases = ["Developer.", "Youtuber."];
  const text = useTypingEffect(phrases);
  return (
    <div class="hero">
      <div class="hero-container">
        <div class="hero-heading">
          <h1>
            Hello, I'm Antonio <br /> a <span>{text}</span>
          </h1>
          <div class="hero-buttons">
            <button>Contact Me</button>
            <button>Projects</button>
          </div>
          <div class="hero-socials">
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

        <div class="hero-image">
          <Image src={me} height={0} width={0} />
        </div>
      </div>
    </div>
  );
};

export default Hero;