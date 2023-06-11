import Image from "next/image";
import "./Projects.css";
import project1 from "../../public/project-1.png";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f5efb" offset="0%" />
          <stop stopColor="#fc466b" offset="100%" />
        </linearGradient>
      </svg>

      <h1>Projects</h1>
      <div className="projects-container">
        <div className="projects-image">
          <Image src={project1} width={0} height={0} />
          <a href="https://tailwind-responsive-navbar-mu.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div className="projects-image">
          <Image src={project1} width={0} height={0} />
          <a href="https://tailwind-responsive-navbar-mu.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div className="projects-image">
          <Image src={project1} width={0} height={0} />
          <a href="https://tailwind-responsive-navbar-mu.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div className="projects-image">
          <Image src={project1} width={0} height={0} />
          <a href="https://tailwind-responsive-navbar-mu.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div className="projects-image">
          <Image src={project1} width={0} height={0} />
          <a href="https://tailwind-responsive-navbar-mu.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
          </a>
        </div>
        <div className="projects-image">
          <Image src={project1} width={0} height={0} />
          <a href="https://tailwind-responsive-navbar-mu.vercel.app/" target="_blank">
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
