import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

const Features = ({ features }) => {
  return (
    <div id="features">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {features.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
              <Link
                className="text-decoration-none"
                to={`/categories/${d.title.toLowerCase()}`}
              >
                <i className={d.icon}></i>
                <h3 className="text-secondary">{d.title}</h3>
              </Link>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
