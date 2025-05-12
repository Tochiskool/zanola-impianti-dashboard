import React from "react";
import { FaHeart } from "react-icons/fa";
const CardMain = ({ cardData }) => {
  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className='card_main'>
          <img src={card.image} alt={card.title} />
          <div className='card_main_name'>
            <h2>{card.title}</h2>
            <div className='card_icon'>
              <i>
                {" "}
                <FaHeart />
                <span> {card.hearts}</span>
              </i>
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
            <a href='' className='button1 btn'>
              Place a bid
            </a>
            <a href='' className='button2 btn'>
              History
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardMain;
