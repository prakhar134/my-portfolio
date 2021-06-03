import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { DiDjango, DiMysql } from "react-icons/di";
import "./Skills.css";
import flask_img from "../../images/flask.svg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__heading">
        <h1>Tools and Technologies</h1>
      </div>
      <div className="skills__row1">
        <div className="skill__icon">
          <FaPython />
          <p>Python</p>
        </div>

        <div className="skill__icon">
          <FaHtml5 />
          <p>HTML</p>
        </div>
        <div className="skill__icon">
          <FaCss3 />
          <p>CSS</p>
        </div>
        <div className="skill__icon">
          <FaJs />
          <p>Javascript</p>
        </div>
        <div className="skill__icon">
          <DiDjango />
          <p>Django</p>
        </div>

        <div className="skill__icon">
          <FaGitAlt />
          <p>Git</p>
        </div>
      </div>

      <div className="skills__row2">
        <div className="skill__icon">
          <FaJava />
          <p>Java</p>
        </div>
        <div className="skill__icon">
          <FaReact />
          <p>React</p>
        </div>
        <div className="skill__icon">
          <FaNodeJs />
          <p>Nodejs</p>
        </div>
        <div className="skill__icon">
          <DiMysql />
          <p>MySql</p>
        </div>
        <div className="skill__icon">
          <img src={flask_img} alt="flask_img" />
          <p>Flask</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
