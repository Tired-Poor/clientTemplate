import React from 'react'
import LandingNav from './LandingNav'
import HomeSocialLayout from './HomeSocialLayout'
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
                <div className='content-image-container'>
                    <img src='https://i.ibb.co/hHznJ9F/My-project-1.png'></img>
                </div>
            </div>
            <HomeSocialLayout />

        </div>
    )
}

export default LandingHome