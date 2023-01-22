import React from "react";
import Navigation from "../components/Navigation";
import SocialNetWork from "../components/SocialNetWork";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navigation />
        <SocialNetWork />
        <div className="home-main">
          <div className="main-content">
            <img src="./assets/img/logo.png" alt="charle cantin logo" />
            <h1>Photographe</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
