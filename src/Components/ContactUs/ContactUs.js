import React from "react";
import "./ContactUs.css";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaMedium,
  FaCopyright,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactUs__heading">
        <h1>Get in touch</h1>
      </div>
      <div className="contactUs__card">
        <div className="contact__form">
          <form>
            <input type="text" id="fname" placeholder="Full Name" required />
            <input type="text" id="fname" placeholder="Email Id" required />
            <textarea
              type="text"
              id="msg"
              placeholder="Your Message"
              required
            />
          </form>
          <div className="form__btn">
            <button>Submit</button>
          </div>
        </div>

        <div className="footer">
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
          <div className="copyright">
            <FaCopyright />
            <p>All Rights Reserved 2021, Prakhar Pandey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
