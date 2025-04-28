import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
const TopContainer = () => {
  useEffect(() => {
    const menuTarget = document.querySelector("#menuChevron");
    const menuContainer = document.querySelector("#menuContainer");
    menuTarget.addEventListener("mouseenter", () => {
      menuTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });
    menuContainer.addEventListener("mouseleave", () => {
      menuTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
  }, []);
  return (
    <div className='topContainer'>
      <div className='inputBox'>
        <input type='text' placeholder='Search item, collections' />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <div className='profileContainer'>
        <i className='profileIcon'>
          <FaBell />
        </i>
        <div className='profileImage'>
          <img src='/images/women.jpg' alt='Woman in sun shades' />
        </div>
        <p className='profileName'>Zanola</p>
        <i className='menuChevron' id='menuChevron'>
          <FaChevronDown />
        </i>
        <div className='menuContainer' id='menuContainer'>
          <ul>
            <li>Inventory</li>
            <li>Orders</li>
            <li>hours covered</li>
            <li>Supervisor</li>
            <li>Complains</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
