import React from "react";
import TopSeller from "../TopSeller/TopSeller";
import topSeller from "../../topSellerObject";

const MainRIghtBottom = () => {
  return (
    <div className='bottomRightCard'>
      <div className='bottomName'>
        <h2>Top Seller</h2>
        <a href=''>Main</a>
      </div>
      <>
        <TopSeller topSeller={topSeller} />
      </>
    </div>
  );
};

export default MainRIghtBottom;
