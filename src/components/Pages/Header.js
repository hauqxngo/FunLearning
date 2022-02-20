import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ login }) => {
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
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="intro-center">
                  <h1>Let's learn something new!</h1>
                  <p>
                    Help your little ones learn the basic things and get ready
                    for preschool.
                  </p>
                  <a href="#features" role="button" className="btn btn-success">
                    GET STARTED
                  </a>
                  <form onSubmit={handleSubmit}>
                    <button className="btn btn-outline-success mt-2">
                      DEMO USER
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
