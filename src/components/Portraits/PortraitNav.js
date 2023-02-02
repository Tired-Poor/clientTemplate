import React from 'react'
import './PortraitNav.css'
import Gallery from './Gallery';
import { Link } from 'react-router-dom';

// Create Hamburger functionality for smaller viewports.
// Add media queries for medium sized viewports to fix responsiveness of the grid.

function PortraitNav({ toggleMenu, setToggleMenu }) {

    return (
        <header id='portNav'>
            <nav>

                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>


                </ul>
                <h1>Portraits</h1>
                {!toggleMenu ?
                    <img onClick={() => setToggleMenu(prevState => !prevState)} id='hamburger-portrait' src='https://cdn-icons-png.flaticon.com/128/7915/7915462.png'></img> : <img onClick={() => setToggleMenu(prevState => !prevState)} id='close-portrait' src='https://cdn-icons-png.flaticon.com/512/5369/5369422.png'></img>}
                <ul>
                    <li>Landscapes</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>

        </header>
    )
}

export default PortraitNav