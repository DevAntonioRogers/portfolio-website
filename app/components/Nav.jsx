"use client";

import "./Nav.css";
import { useState } from "react";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav id="home">
      <div className="nav-container">
        <h1>
          Antonio<span>.com</span>
        </h1>
        <ul className={openMenu ? "nav-menu active" : "nav-menu"}>
          <li className="active">Home</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>About</li>
        </ul>

        <div className="nav-right">
          <button>Hire Me</button>

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
