import React, { useState } from "react";
import "./Projects.css";
import vovoca_img from "../../images/vovoca.svg";
import photo_gallery_img from "../../images/photo-gallery.svg";
import clean_or_messy_img from "../../images/clean-or-messy.svg";
import e_commerce_img from "../../images/e-commerce1.svg";
import e_commerce_img2 from "../../images/e-commerce2.svg";
import npm_img from "../../images/npm2.svg";
import toastifier from "toastifier";
import "toastifier/dist/toastifier.min.css";
import { FaLink, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [toastType, settoastType] = useState("success");
  const [toastAnimation, settoastAnimation] = useState("flip");
  return (
    <div className="projects">
      <div className="projects__heading">
        <h1>Recent Projects</h1>
      </div>
      <div className="projects__cards">
        <div className="projects__row1">
          <div className="project__card">
            <img src={vovoca_img} alt="project_image" />
            <div className="project__content">
              <span>April 2021</span>
              <span>Web Application</span>
              <div className="project__content__heading">
                <h1>Vovoca</h1>
                <a href="https://vovoca.vercel.app/">
                  <FaLink />
                </a>
                <a href="https://github.com/prakhar134/vovoca">
                  <FaGithub />
                </a>
              </div>

              <p>
                This is a Music Player and streaming app for royalty-free music,
                we call it VOVOCA, download, share and stream.
              </p>
              <ul>
                <li>Upload your own track.</li>
                <li>Download any track you like.</li>
                <li>Filter your search from the variety of genres.</li>
              </ul>
            </div>
          </div>

          <div className="project__card">
            <img src={npm_img} alt="project_image" />
            <div className="project__content">
              <span>April 2021</span>
              <span>NPM Package</span>
              <div className="project__content__heading">
                <h1>Toastifier</h1>
                <a href="https://www.npmjs.com/package/toastifier">
                  <FaLink />
                </a>
                <a href="https://github.com/prakhar134/Toastifier">
                  <FaGithub />
                </a>
              </div>

              <p>
                Npm package, named Toastifier, a cross platform alert, and popup
                made only with javascript.
              </p>

              <ul>
                <li>Compatible with any Javascript framework or library</li>
                <li>Highly customizable</li>
              </ul>
              <div className="toastifier__btn">
                <button
                  onClick={() =>
                    toastifier("Toast check.", {
                      type: toastType,
                      animation: toastAnimation,
                    })
                  }
                >
                  Test
                </button>
                <select
                  onChange={(e) =>
                    settoastType(e.target.value.toLocaleLowerCase())
                  }
                >
                  <option>Success</option>
                  <option>Error</option>
                  <option>Warn</option>
                  <option>Info</option>
                </select>
                <select
                  onChange={(e) =>
                    settoastAnimation(e.target.value.toLocaleLowerCase())
                  }
                >
                  <option>Flip</option>
                  <option>Bounce</option>
                  <option>Fade</option>
                  <option>Zoom</option>
                </select>
              </div>
            </div>
          </div>
          <div className="project__card">
            <img src={photo_gallery_img} alt="project_image" />
            <div className="project__content">
              <span>May 2021</span>
              <span>Web Application</span>
              <div className="project__content__heading">
                <h1>Photo Gallery</h1>

                <a href="https://github.com/prakhar134/photo-gallery-app">
                  <FaGithub />
                </a>
              </div>

              <p>A full stack project based on MERN stack.</p>
              <ul>
                <li>
                  Login features like Google OAuth integrated. For registering
                  user, JWT (JSON Web Token) is used.
                </li>
                <li>Build Rest APIs using node and express.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="work__experience__card">
        <div className="internship__projects__heading">
          <h1>Work Experience</h1>
        </div>
        <div className="projects__row2">
          <div className="project__card">
            <img src={e_commerce_img} alt="project_image" />
            <div className="project__content">
              <span>May 2021</span>
              <span>Web Application</span>
              <span>Internship Project</span>
              <div className="project__content__heading">
                <h1>Clever Canine</h1>
                <a href="https://clevercanine.in/">
                  <FaLink />
                </a>
              </div>

              <p>
                Clever Canine is an online store with all the delicious foods
                for your lovely pet.
              </p>
              <ul>
                <li>Features Enhancement.</li>
                <li>Added Social Media plugin.</li>
                <li>Paypal mode of payment integrated.</li>
              </ul>
            </div>
          </div>
          <div className="project__card">
            <img src={e_commerce_img2} alt="project_image" />
            <div className="project__content">
              <span>Feb 2021</span>
              <span>Web Application</span>
              <span>Internship Project</span>
              <div className="project__content__heading">
                <h1>USayPet</h1>
                <a href="https://usaypet.com/">
                  <FaLink />
                </a>
              </div>
              <p>
                USayPet is an online store to buy cool and trending accessories
                for your pets.
              </p>
              <ul>
                <li>
                  Developed an E-commerce website for the client using Reactjs
                  Library.
                </li>
                <li>Learnt and implemented Redux for state management.</li>
                <li>
                  Worked on the enhancement of features including, online
                  payment modes, promocode integration, redux setup etc.
                </li>
                <li>
                  Improved SEO of the React Application by creating sitemap
                  file.
                </li>
              </ul>
            </div>
          </div>
          <div className="project__card">
            <img src={clean_or_messy_img} alt="project_image" />
            <div className="project__content">
              <span>September 2020</span>
              <span>Web Application</span>
              <span>Internship Project</span>
              <div className="project__content__heading">
                <h1>Clean or Messy</h1>
                <a href="https://github.com/prakhar134/clean-or-messy">
                  <FaGithub />
                </a>
              </div>
              <p>
                Clean or Messy Classifier is an open-source project which
                classifies a given surrounding as clean or messy based on a
                confidence meter.
              </p>
              <ul>
                <li>
                  The work during the internship varied from frontend and
                  backend web development roles.
                </li>
                <li>
                  Developed a POST API using flask with ML model integrated.
                </li>
                <li>
                  Converted keras model to tfjs model to get rid of the API
                  calls and load the model in frontend itself.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
