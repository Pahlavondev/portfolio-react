import React from "react";
import "./Posts.css";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="posts">
      <div className="container">
        <div className="posts-wrapper">
          <div className="posts-content">
            <span className="posts-span">Recent posts</span>
            <Link className="posts-link" to="/">
              View all
            </Link>
          </div>

          <div className="posts-card">
            <div className="posts-card-right">
              <h2 className="posts-title">
                Making a design system from scratch
              </h2>
              <p className="posts-data">12 Feb 2020 | Design, Pattern</p>
              <p className="posts-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="posts-card-left">
              <h2 className="posts-title">
                Creating pixel perfect icons in Figma
              </h2>
              <p className="posts-data">12 Feb 2020 | Figma, Icon Design</p>
              <p className="posts-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
