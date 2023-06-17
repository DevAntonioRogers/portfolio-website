"use client";

import Image from "next/image";
import "./Projects.css";
import project1 from "../../public/project-1.png";
import project2 from "../../public/project-2.png";
import project3 from "../../public/project-3.png";
import project4 from "../../public/project-4.png";
import project5 from "../../public/project-5.png";
import project6 from "../../public/project-6.png";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="projects" className="projects">
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f5efb" offset="0%" />
          <stop stopColor="#fc466b" offset="100%" />
        </linearGradient>
      </svg>

      <h1 ref={ref}>Projects</h1>
      <div className="projects-container">
        <div
          className="projects-image"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image src={project1} width={0} height={0} />
          <a href="https://tailwind-responsive-navbar-mu.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div
          className="projects-image"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image src={project2} width={0} height={0} />
          <a href="https://wagster.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div
          className="projects-image"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image src={project3} width={0} height={0} />
          <a href="https://imagine.antoniorogers.com/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div
          className="projects-image"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image src={project4} width={0} height={0} />
          <a href="https://tictactoe.antoniorogers.com/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div className="projects-image">
          <Image src={project5} width={0} height={0} />
          <a href="https://theweatherapp-theta.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div
          className="projects-image"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image src={project6} width={0} height={0} />
          <a href="https://tripper.antoniorogers.com/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
