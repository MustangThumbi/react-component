import React from 'react';
import myCard from "../pics-card/image-equilibrium.jpg";
import clock from "../pics-card/icon-clock.svg";
import top from "../pics-card/icon-ethereum.svg";
import avatar from "../pics-card/image-avatar.png";

export default function Card() {
  return (
    <div className="card-main">
      <div className="card-container">
        <div className="card-image">
          <img src={myCard} alt="" />
        </div>
        <div className="card-info">
          <h2>Equilibrium #3429</h2>
          <p>Our equilibrium collection promotes balance and calm</p>
        </div>
        <div className="card-more">
          <div className="card-left">
            <div className="top">
                <img id='top' src={top} alt="" />
            </div>
            <p>0.041ETH</p>
          </div>
          <div className="card-right">
            <div className="clock">
              <img id='clock' src={clock} alt="" />
            </div>
            <p>3 days left</p>
          </div>
        </div>
        <div className="footer">
          <div className="icon">
            <img id='avatar' src={avatar} alt="" />
          </div>
          <div className="footer-info">
            <p> <span>Creation of </span> Jules Wyvern</p>
          </div>
        </div>
      </div>
    </div>
  );
}
