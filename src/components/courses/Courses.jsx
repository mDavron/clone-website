import React from "react";
import "./Courses.css";
import Card from "./card/Card";

const Courses = () => {
  return (
    <div className="courses" id="courses">
      <div className="container">
        <div className="courses-cards">
          <div className="cards_inner">
            <Card/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
