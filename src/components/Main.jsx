import React from 'react';

import myImage from "../pics/image.png"

export default function Main() {
  return (
    <section className="card">
      <div className="Main-container">
        <div className="image">
          <img src={myImage} alt="Not displaying" />
        </div>
        <div className="info">
          <h2>Improve your front-end skills by building projects</h2>
        </div>
        <div className="more">
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to another level
          </p>
        </div>
      </div>
    </section>
  ); 
}
