import React from 'react'
import './style.css'
import Header from './Header';

function Electronics() {
  return (
    <div className="electronics-return">

      <Header />

      <div className="electronics-main">
        <div className="electronics-main-text-box">
          <section>
            <span className="electronics-text-pre">
              Featured this week:</span>
            <span className="electronics-text--primary">
              Elite 45H</span>
            <span className="electronics-text--sub">
              Jabra</span>
          </section>
        </div>
        <div className="electronics-main-img-box">
          <img id="electronics-product-main" src="https://i.imgur.com/1J93O3Y.png"/>
        </div>
      </div>

    </div>
  )
}

export default Electronics