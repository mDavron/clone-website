import React from "react";
import "./Results.css";
import ResultsSlider from "./slider/ResultsSlider";
import prevIcon from "../../assets/svg/prev.svg";

const Results = () => {
  return (
    <div className="results">
      <div className="results-inner">
        <div className="results_box">
          <div className="results-row">
            <div className="results_text">
              <h3 className="sub-title">
                So’z <br /> isboti bilan
              </h3>
              <h1 className="title">Bizning natijalar</h1>
              <img
                className="prev_icon"
                src={prevIcon}
                alt="prevIcon"
                data-role="none"
              />
            </div>
            <div className="results_carousel">
              <span className="shadow-left"></span>
              <ResultsSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
