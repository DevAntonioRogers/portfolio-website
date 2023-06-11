import "./Footer.css";

import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <ul className="footer-menu">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
        </ul>

        <div className="footer-socials">
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
    </div>
  );
};

export default Footer;
