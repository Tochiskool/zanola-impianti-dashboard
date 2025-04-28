import React, { useState } from "react";

import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./menu.css";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { icon: FaDelicious },
    { icon: FaShoppingCart },
    { icon: FaWallet },
    { icon: FaChartLine },
    { icon: FaRegClock },
    { icon: FaCog },
  ];
  const lastMenu = [{ icon: FaCog }, { icon: FaSignOutAlt }];
  return (
    <menu>
      <img src='/images/zanola.png' alt='Main logo' />
      <ul id='mainMenu'>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <a href='#'>
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
      <ul className='lastMenu'>
        {lastMenu.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index + 100 ? "active" : ""}
            onClick={() => setActiveIndex(index + 100)}
          >
            <a href='#'>
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default Menu;
