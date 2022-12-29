import React from "react";
import "./Home.css";
import arrowRight from "../../assets/svg/arrow-right.svg";
import banner from "../../assets/images/banner.svg";
import { data } from "./homeData";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-inner">
          <div className="home-inner_row">
            <div className="left_text">
              <h1>
                Moliya Studiyasi — <br />
                <p>Buxgalteriya ta'lim muassasasi</p>
              </h1>
              <p className="left_text-info">
                Malakali ustozlardan dars oling. Imtihonlarni muvaffaqiyatli
                topshiring-u, <span>ish o'rniga ega bo'ling!</span>
              </p>
              <button className="left_text-btn">
                Kursga yozilish <img src={arrowRight} alt="arrow" />
              </button>
            </div>
            <div className="right_imgBox">
              <img src={banner} alt="" />
            </div>
          </div>
          <div className="home-inner_descr">
            {data.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="icon-box">
                    {" "}
                    <img src={item.url} />
                  </div>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
