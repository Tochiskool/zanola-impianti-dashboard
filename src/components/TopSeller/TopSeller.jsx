import React from "react";

const TopSeller = ({ topSeller }) => {
  console.log(topSeller);
  return (
    <>
      {Array.isArray(topSeller) ? (
        <ul>
          {topSeller?.map((seller) => (
            <div className='topSeller' key={seller?.title}>
              <div className='topSellerImg'>
                <img src={seller?.image} alt={seller?.title} />
              </div>
              <p className='topSellerName'>
                {seller?.name}
                <span>{seller?.alias}</span>
              </p>
              <a href='#' className='button1 btn'>
                {seller?.title}
              </a>
            </div>
          ))}
        </ul>
      ) : (
        <pre>{JSON.stringify(topSeller, null, 2)}</pre>
      )}
    </>
  );
};

export default TopSeller;
