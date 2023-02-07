// Reference: https://reactbootcamp.com/
// http://orangina.eu/products and https://absurd.design/
//  https://www.maserati.com/global/en/models/mc20 is neat too
import React from 'react'
import './LandingNav.css'
import { Link } from 'react-router-dom'


function LandingNav() {
    return (

        <header className='landing-header'>
            <div className='landing-logo'>
                <div className='landing-logo-text'>
                    <h1 className='landing-logo-h1'>GoonJuice</h1>
                    <p className='landing-logo-p'>Pulp Only</p>
                </div>
                {/* <img className='landing-logo-img' src='https://i.ibb.co/hHznJ9F/My-project-1.png'></img> */}

            </div>
            <nav className='landing-nav'>
                <Link to=''><img className='landing-nav-img' src='https://img.icons8.com/color/2x/fridge.png'></img>Home</Link>
                <Link to=''><img className='landing-nav-img' src='https://img.icons8.com/external-nawicon-flat-nawicon/2x/external-orange-beach-nawicon-flat-nawicon.png'></img>Heritage</Link>
                <Link to=''><img className='landing-nav-img' src='https://img.icons8.com/color/2x/orange-juice.png'></img>Products</Link>
            </nav>
        </header>

    )
}

export default LandingNav