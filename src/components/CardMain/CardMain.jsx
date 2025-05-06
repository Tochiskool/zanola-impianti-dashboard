import React from "react";
import { FaHeart } from "react-icons/fa";
import "./cardMain.css";
const CardMain = ({ cardData }) => {
  return (
    <div className='cardMain'>
      {cardData.map((card, index) => (
        <div key={index} className='card'>
          <img src={card.image} alt={card.title} />
          <div className='card_main_name'>
            <div className='firstLine'>
              <h2>{card.title}</h2>
              <div className='card_icon'>
                <i>
                  {" "}
                  <FaHeart />
                </i>
                <span> {card.hearts}</span>
              </div>
            </div>
            <div className='stats'>
              <p>
                Current Bid <span>1.2 ETH</span>
              </p>
              <span className='divider'>|</span>
              <p>
                Ending In <span> 1d:12h ETH</span>
              </p>
            </div>
            <div className='card_button'>
              <a href='' className='button1'>
                Place a bid
              </a>
              <a href='' className='button2'>
                Place a bid
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMain;
