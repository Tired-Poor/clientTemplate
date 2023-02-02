import React from 'react'
import './PortraitNav.css'
import { Link } from 'react-router-dom';

// Create Hamburger functionality for smaller viewports.
// Add media queries for medium sized viewports to fix responsiveness of the grid.

function PortraitNav() {
    return (
        <header id='portNav'>
            <nav>

                <ul>
                    <li>Home</li>
                    <li>About</li>


                </ul>
                <h1>Portraits</h1>

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