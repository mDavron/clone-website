import React from "react";
import "./ResultCard.css";

const ResultCard = ({ result }) => {
  return (
    <div className="carousel_card" key={result.id}>
      <img className="card_img" src={result.url} alt="person.jpg" />
      <div className="card-user_info">
        <h3>{result.fullName}</h3>
        <h4>{result.workplace}</h4>
        <h4>{result.prof}</h4>
      </div>

      <div className="user_status">
        <img src={result.statusIcon} alt="icon" />
        <span>{result.status}</span>
      </div>
    </div>
  );
};

export default ResultCard;
