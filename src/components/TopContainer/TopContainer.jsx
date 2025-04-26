import React from "react";
import { FaSearch } from "react-icons/fa";
const TopContainer = () => {
  return (
    <div className='topContainer'>
      <div className='inputBox'>
        <input type='text' placeholder='search Item, Collections' />
        <i>{FaSearch}</i>
      </div>
    </div>
  );
};

export default TopContainer;
