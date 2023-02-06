import React from 'react'
import LandingNav from './LandingNav'
import './Landing.css'

function LandingHome() {
    return (
        <div id='landingBody'>
            <LandingNav />
            <div className='landing-home-content'>
                <div className='landing-home-content-text'>
                    <h2 className='content-text-heading'>Discover GoonJuice</h2>
                    <p className='content-text-blurb'>Since 2023, GoonJuice brings you a unique flavor of the Mediterranean through its authentic taste of oranges with real fruit pulp and its natural orange zest.</p>
                </div>
                <img src='https://i.ibb.co/hHznJ9F/My-project-1.png'></img>
            </div>

            <div className='landing-home-socials'>
                <h2 className='landing-socials-heading'>DopeJuice Social</h2>
            </div>

        </div>
    )
}

export default LandingHome