import React from "react";
import Slider from "react-slick";
import teacher from "../../assets/images/teacher.jpg";
import "./Team.css";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="team-slider_wrapper">
      <div className="container">
        <div className="team-slider_inner">
          <Slider {...settings}>
            <div className="team_card">
              <img src={teacher} alt="img" />
              <h5>lorem ipsum dolor sit</h5>
              <p>O`qituvchi</p>
            </div>
            <div className="team_card">
              <img src={teacher} alt="img" />
              <h5>lorem ipsum dolor sit</h5>
              <p>O`qituvchi</p>
            </div>
            <div className="team_card">
              <img src={teacher} alt="img" />
              <h5>lorem ipsum dolor sit</h5>
              <p>O`qituvchi</p>
            </div>
            <div className="team_card">
              <img src={teacher} alt="img" />
              <h5>lorem ipsum dolor sit</h5>
              <p>O`qituvchi</p>
            </div>
            <div className="team_card">
              <img src={teacher} alt="img" />
              <h5>lorem ipsum dolor sit</h5>
              <p>O`qituvchi</p>
            </div>
            <div className="team_card">
              <img src={teacher} alt="img" />
              <h5>lorem ipsum dolor sit</h5>
              <p>O`qituvchi</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
