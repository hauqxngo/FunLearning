import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";

const CallAction = ({ login }) => {
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
    <section className="colored-section">
      <div className="container-fluid">
        <h3 className="big-heading">Always Free. Learn More Today.</h3>
        <form onSubmit={handleSubmit}>
          <button className="cta-button btn btn-outline-light">
            <i className="fas fa-chalkboard-user"></i> TRY IT OUT
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallAction;
