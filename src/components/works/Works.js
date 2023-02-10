import React from "react";
import "./Works.css";

const Works = ({ data }) => {
  return (
    <div className="container">
      <ul className="works-list">
        <li className="works-item">
          <div className="works-left">
            <img className="works-image" src={data.img} alt="Design" />
          </div>
          <div className="works-right">
            <h2 className="works-subtitle">{data.title}</h2>
            <div className="works-content">
              <span className="works-data">{data.year}</span>
              <span className="works-dashboard">{data.category}</span>
            </div>
            <p className="works-text">{data.text}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Works;
