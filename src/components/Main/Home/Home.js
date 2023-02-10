import React from "react";
import "./Home.css";
import Person from "../../../assets/image.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="home">
          <div className="home-left">
            <h1 className="home-title">
              Hello. My name is <span className="home-span">Pahlavon</span>
              <br /> I am <span className="home-span">Frontend Developer</span>
            </h1>
            <p className="home-text">
              To work in an open and fun environment that promotes creativity,
              teamwork and individual growth. To solve current and relevant, as
              well as future problems in the technology sectors. To learn from
              peers and be able to give back teaching.
            </p>
            <Link className="home-link" to="/">
              Download Resume
            </Link>
          </div>

          <div className="home-right">
            <img className="home-image" src={Person} alt="Person" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
