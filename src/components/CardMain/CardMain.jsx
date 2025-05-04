import React from "react";
import "./cardMain.css";
const CardMain = ({ cardData }) => {
  return (
    <div className='cardMain'>
      {cardData.map((card, index) => (
        <div key={index} className='card'>
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>❤️ {card.hearts}</p>
        </div>
      ))}
    </div>
  );
};

export default CardMain;
