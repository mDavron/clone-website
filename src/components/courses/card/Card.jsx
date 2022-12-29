import React from "react";
import { data } from "../../../assets/mocdata/data";
import arrowRight from "../../../assets/svg/arrow-right.svg";
import "./Card.css";

const Card = () => {
  {
    console.log({ data });
  }
  return (
    <>
      {data.map((item) => {
        // console.log(item)
        const {
          cardlogo,
          clockIcon,
          userIcon,
          title,
          text,
          duration,
          durationTime,
          team,
          fromTo,
          id,
        } = item;
        return (
          <div className="card-item" key={id}>
            <div className="card-overlay"></div>
            <div className="card-logo">
              <div className="circle">
                <img src={cardlogo} alt="logo" />
              </div>
            </div>
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
            <ul className="lists">
              <li>
                <img src={clockIcon} alt="clock" />
                <span>
                  {duration} <b>{durationTime}</b>
                </span>
              </li>
              <li className="userImg">
                <img src={userIcon} alt="user" />
                <span>{team}</span>
              </li>
              <li>
                <img src={clockIcon} alt="clock" />
                <span>{fromTo}</span>
              </li>
            </ul>
            <div className="click-btn">
              <div className="center">
                <h4>Kursga yozilish</h4>
                <img src={arrowRight} alt="rightArrow" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
