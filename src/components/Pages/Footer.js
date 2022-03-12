import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Footer.css";

const Footer = ({ login }) => {
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    await login({
      username: "testuser",
      password: "password",
    });
    history.push("/categories");
  }

  return (
    <div id="footer">
      <section className="colored-section" id="cta">
        <div className="container-fluid">
          <h3 className="big-heading">Always Free. Learn More Today .</h3>
          <Link to="/signup">
            <button className="cta-button btn btn-lg btn-dark" type="button">
              <i className="fas fa-chalkboard-user"></i> Get Started
            </button>
          </Link>

          {/* <form onSubmit={handleSubmit}>
            <button className="cta-button btn btn-outline-light btn-lg">
              <i className="fas fa-child"></i> TRY IT OUT
            </button>
          </form> */}
          <button
            onSubmit={handleSubmit}
            className="cta-button btn btn-outline-light btn-lg"
          >
            <i className="fas fa-child"></i> Try It Out
          </button>
        </div>
      </section>

      <footer>
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
          <a
            href="https://github.com/hauqxngo"
            target="_blank"
            rel="noreferrer"
          >
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
    </div>
  );
};

export default Footer;
