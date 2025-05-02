import React from "react";
import "./mainContainer.css";
const MainContainer = () => {
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
      </div>
      <div className='right'>Right</div>
    </div>
  );
};

export default MainContainer;
