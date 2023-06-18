"use client";

import "./Nav.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openMenu]);
  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav id="home">
      <div className="nav-container">
        <h1>AR</h1>
        <ul className={openMenu ? "nav-menu active" : "nav-menu"}>
          <a href="/">
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

        <div className="nav-right">
          <a href="#contact">
            <motion.button whileHover={{ scale: 1.2 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
              Contact Me
            </motion.button>
          </a>

          <div onClick={menuHandler} className={openMenu ? "hamburger active" : "hamburger"}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
