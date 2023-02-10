import React from "react";
import Works from "../works/Works";
import Home from "./Home/Home";
import Posts from "./posts/Posts";
import Text from "./text/Text";

const arr = [
  {
    id: 1,
    img: "https://picsum.photos/300",
    title: "Designing Dashboards",
    year: "2022",
    category: "Dashboard",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },

  {
    id: 2,
    img: "https://picsum.photos/300",
    title: "Vibrant Portraits of 2020",
    year: "2018",
    category: "Illustration",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },

  {
    id: 3,
    img: "https://picsum.photos/300",
    title: "36 Days of Malayalam type",
    year: "2018",
    category: "Typography",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const Main = () => {
  return (
    <div>
      <Home />
      <Posts />
      <Text />
      {arr.map((item) => (
        <Works data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Main;
