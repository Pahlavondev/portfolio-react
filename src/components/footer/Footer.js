import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-bg">
          <div className="footer-bg-one"></div>
          <div className="footer-bg-two"></div>
        </div>
      </div>

      <div className="footer-wrapper">
        <ul className="footer-list">
          <li className="footer-item">
            <Link
              className="footer-link"
              onClick={() =>
                window.open("https://ru-ru.facebook.com/", "_blank")
              }
            >
              <i className="bx bxl-facebook-square"></i>
            </Link>
          </li>

          <li className="footer-item">
            <Link
              className="footer-link"
              onClick={() =>
                window.open("https://www.instagram.com/", "_blank")
              }
            >
              <i className="bx bxl-instagram"></i>
            </Link>
          </li>

          <li className="footer-item">
            <Link
              className="footer-link"
              onClick={() => window.open("https://twitter.com/", "_blank")}
            >
              <i className="bx bxl-twitter"></i>
            </Link>
          </li>

          <li className="footer-item">
            <Link
              className="footer-link"
              onClick={() => window.open("https://www.linkedin.com/", "_blank")}
            >
              <i className="bx bxl-linkedin-square"></i>
            </Link>
          </li>
        </ul>
        <div className="footer-text">
          Copyright &copy; 2020 All rights reserved{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
