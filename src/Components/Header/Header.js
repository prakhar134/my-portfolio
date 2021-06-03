import React from "react";
import { BiDownArrow } from "react-icons/bi";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaMedium,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const moveDown = () => {
    window.scrollBy({
      top: 775,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="name">
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
      <div className="down__icon" onClick={() => moveDown()}>
        <BiDownArrow />
      </div>
    </div>
  );
};

export default Header;
