import React from "react";
import "./Course.scss";
interface props {
  image: string;
  title: string;
  lectures: number;
  quizzes: number;
  duration: string;
}
export const Course: React.FC<props> = (props) => {
  return (
    <div className="course-main">
      <img src={props.image} />
      <div className="content">
        <h1>{props.title}</h1>
        <p>Lectures {props.lectures}</p>
        <p>Quizzes {props.quizzes}</p>
        <p>Duration {props.duration} Hours</p>
      </div>
    </div>
  );
};
