import React from "react";
import "./container.css";
import TopContainer from "../TopContainer/TopContainer";
import MainContainer from "../MainContainer/MainContainer";

const Container = () => {
  return (
    <div className='container'>
      <TopContainer />
      <MainContainer />
    </div>
  );
};

export default Container;
