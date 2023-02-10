import React from "react";
import BlogText from "./BlogText/BlogText";
import UIInteractions from "./uiInteractions/UIInteractions";

const arr = [
  {
    id: 1,
    title: "UI Interactions of the week",
    data: "12 Feb 2019",
    link: "Express, Handlebars",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },

  {
    id: 2,
    title: "UI Interactions of the month",
    data: "12 Feb 2020",
    link: "Express, Handlebars",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },

  {
    id: 3,
    title: "UI Interactions of the year",
    data: "12 Feb 2021",
    link: "Express, Handlebars",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },

  {
    id: 4,
    title: "UI Interactions of the week",
    data: "12 Feb 2022",
    link: "Express, Handlebars",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const Blog = () => {
  return (
    <div>
      <BlogText />
      {arr.map((item) => (
        <UIInteractions data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Blog;
