import React from "react";
import { BiDownArrow } from "react-icons/bi";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaMedium,
} from "react-icons/fa";
import ParticleBackground from "../../ParticleBackground";
import "./Header.css";

const Header = () => {
  return (
    <div className="name">
      {/* <dv className="bg_img"></dv> */}
      <h1>Hello, I'm Prakhar</h1>
      <p className="line-1 anim-typewriter">This is my portfolio...</p>
      <div className="social__media">
        <a href="https://www.linkedin.com/in/prakharpandey13/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/prakhar134">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/p_prakhar/">
          <FaInstagramSquare />
        </a>
        <a href="https://medium.com/@prakharpandey.13">
          <FaMedium />
        </a>
      </div>
      <a className="down__icon" href="#about">
        <div className="arrow__icon">
          <BiDownArrow />
        </div>
      </a>
    </div>
  );
};

export default Header;

// onClick={() => moveDown()
