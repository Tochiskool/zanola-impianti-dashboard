import React from "react";
import CardMain from "../CardMain/CardMain.jsx";
import "./mainContainer.css";
import MainRightTop from "../MainRightTop/MainRightTop.jsx";
import MainRIghtBottom from "../MainRightBottom/MainRIghtBottom.jsx";
const MainContainer = () => {
  const cardData = [
    {
      image: "/images/card1.jpg",
      title: "Digital Dreams",
      hearts: 65,
    },
    {
      image: "/images/card2.jpg",
      title: "Urban Waves",
      hearts: 75,
    },
    {
      image: "/images/card3.jpg",
      title: "Fantasy Land",
      hearts: 50,
    },
    {
      image: "/images/card4.jpg",
      title: "Retro Vision",
      hearts: 95,
    },
    {
      image: "/images/card5.jpg",
      title: "Ocean Escape",
      hearts: 80,
    },
    {
      image: "/images/card6.jpg",
      title: "Sky Light",
      hearts: 60,
    },
  ];

  return (
    <div className='mainContainer'>
      <div className='left'>
        <div className='banner'>
          <div className='textContainer'>
            <h1>Next Meeting</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Christian Ndifor</p>
            <div className='bid'>
              <a href='#' className='button1'>
                Bid Now
              </a>
              <p>
                Ending In <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>
        <div className='cards'>
          <div className='filters'>
            <div className='popular'>
              <h2>Feed</h2>
              <a href='#' className='button2'>
                Popular
              </a>
            </div>
            <div className='filter_buttons'>
              <a href='' className='button1'>
                All
              </a>
              <a href='#' className='button2'>
                Illustrazione
              </a>
              <a href='#' className='button2'>
                Arte
              </a>
              <a href='#' className='button2'>
                Giocchi
              </a>
            </div>
          </div>
          <main>
            <CardMain cardData={cardData} />
          </main>
        </div>
      </div>
      <div className='right'>
        <MainRightTop />
        <MainRIghtBottom />
      </div>
    </div>
  );
};

export default MainContainer;
