import React from "react";
import WorkText from "./Worktext/WorkText";
import WorkList from "./WorkList/WorkList";

const arr = [
  {
    id: 1,
    img: "https://picsum.photos/300",
    title: "Designing Dashboards",
    year: "2020",
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

  {
    id: 4,
    img: "https://picsum.photos/300",
    title: "Components",
    year: "2018",
    category: "Components, Design",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const Work = () => {
  return (
    <div>
      <WorkText />
      {arr.map((item) => (
        <WorkList data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Work;
