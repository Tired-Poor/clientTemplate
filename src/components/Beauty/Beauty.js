import React from 'react'

import Header from './Header';
import './style.css';
import './animations.css';

// cloning https://garoaskincare.com

function Beauty() {
  return (
    <div className="beauty-return">

      <Header />

      <div className="beauty-landing">

        {/* <img /> */}

        <section className="beauty-text-main">

          <span className="beauty-love">
            Love </span>
          <span className="beauty-your">
            your </span>
          <span className="beauty-beauty">
            beauty</span>

          <br />

          <span className="beauty-on">
            on </span>
          <span className="beauty-every">
            every </span>
          <span className="beauty-occasion">
            occasion</span>

          <br />

          <a href="#" className="beauty-button beauty-button-animated">Shop Now</a>

        </section>
        
      </div>

    </div>
  )
}

export default Beauty