import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaMedium,
  FaCopyright,
} from "react-icons/fa";

const ContactUs = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xwkaoyoy",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div className="contactUs">
      <div className="contactUs__heading">
        <h1>Get in touch</h1>
      </div>
      <div className="contactUs__card">
        <div className="contact__form">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              required
              onChange={handleOnChange}
              value={inputs.name}
            />
            <input
              type="email"
              id="email"
              placeholder="Email Id"
              required
              onChange={handleOnChange}
              value={inputs.email}
            />
            <textarea
              type="text"
              id="message"
              placeholder="Your Message"
              required
              onChange={handleOnChange}
              value={inputs.message}
            />
            <div className="form__btn">
              <button type="submit">
                {!status.submitting
                  ? !status.submitted
                    ? "Send"
                    : "Sent"
                  : "Sending..."}
              </button>
            </div>
          </form>
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
