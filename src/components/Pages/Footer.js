import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <a
          href="https://www.instagram.com/hauqxngo"
          target="_blank"
          rel="noreferrer"
        >
          <i className="social-icon fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hauqxngo"
          target="_blank"
          rel="noreferrer"
        >
          <i className="social-icon fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/hauqxngo" target="_blank" rel="noreferrer">
          <i className="social-icon fa-brands fa-github"></i>
        </a>

        <p>
          © Copyright 2022{" "}
          <a href="https://hauqxngo.com" target="_blank" rel="noreferrer">
            Hau Ngo
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
