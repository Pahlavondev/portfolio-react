import React from "react";
import "./UIInteractions.css";

const UIInteractions = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      <div className="interactions">
        <h2 className="interactions-title">{data.title}</h2>
        <div className="interactions-wrapper">
          <span className="interactions-data">{data.data}</span>
          <span className="interactions-link">{data.link}</span>
        </div>
        <p className="interactions-text">{data.text}</p>
      </div>
    </div>
  );
};

export default UIInteractions;
