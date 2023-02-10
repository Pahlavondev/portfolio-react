import { React } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const nameClass = (name) => {
    let element = document.getElementsByClassName(name);
    let elements = document.getElementsByClassName("header-link");

    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }

    element[0].classList.add("active");
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="header-wrapper">
            <Link className="header-logo" to="/">
              Pahlavon<span className="header-span">Dev</span>
            </Link>

            <ul className="header-list">
              <li className="header-item">
                <Link
                  onClick={() => nameClass("work")}
                  className="header-link work"
                  to="/work"
                >
                  Works
                </Link>
              </li>

              <li className="header-item">
                <Link
                  onClick={() => nameClass("blog")}
                  className="header-link blog"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>

              <li className="header-item">
                <Link
                  onClick={() => nameClass("contact")}
                  className="header-link contact"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
