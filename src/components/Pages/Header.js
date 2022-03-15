import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../UserContext";
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

  // authentication stuff
  const { currentUser } = useContext(UserContext);

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

                  {!currentUser && (
                    <a href="/signup" role="button" className="btn btn-success">
                      <i className="fas fa-child"></i> GET STARTED
                    </a>
                  )}

                  <form onSubmit={handleSubmit}>
                    <button className="btn btn-outline-light mt-3">
                      <i className="fas fa-chalkboard-user"></i> TRY IT OUT
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
