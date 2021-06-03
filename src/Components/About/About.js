import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__card">
        <div className="about__card__img"></div>
        <div className="about__card__content">
          <h1 className="about__heading">About me</h1>

          <div className="about__content">
            <h3>Hi, I'm Prakhar Pandey</h3>
            <p>
              I'm passionate about creating and developing clean, unique,
              elegant products. I specialize in building Websites for small to
              medium size business. I keep my code clean, readable, modular and
              well refactored. I enjoy working with complex user interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
