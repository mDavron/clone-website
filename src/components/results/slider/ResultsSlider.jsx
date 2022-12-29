import React from "react";
import Slider from "react-slick";
import ResultCard from "./ResultCard";
import { resultsData } from "../../../assets/mocdata/data";
import "./Slider.css";

const ResultsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    pauseOnHover: true,
    // swipeToSlide: true,
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
  return (
    <>
      <Slider {...settings}>
        {resultsData.map((result) => (
          <ResultCard result={result} key={result.id} />
        ))}
      </Slider>
    </>
  );
};

export default ResultsSlider;
