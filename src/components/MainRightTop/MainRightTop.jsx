import React from "react";

const MainRightTop = () => {
  return (
    <div className='topCard'>
      <div className='topCard_name'>
        <h2>Statistics</h2>
        <a href='#'>View more</a>
      </div>
      <div className='earnings'>
        <p>
          Art Work sold <span>90</span>
        </p>
        <p>
          Art Work Canceled <span>67</span>
        </p>
        <p>
          Art Work Pending<span>167</span>
        </p>
        <p>
          Art Work Delivered <span>200</span>
        </p>
        <p>
          Total Earnings<span>262 Eth</span>
        </p>
      </div>
    </div>
  );
};

export default MainRightTop;
