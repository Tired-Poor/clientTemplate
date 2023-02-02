import React from 'react'
import { Link } from 'react-router-dom'
import './PortraitDropdown.css'

function PortraitDropdown() {
    return (
        <div id='port-dropdown'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <p>Landscapes</p>
                <p>Blog</p>
                <p>Contact</p>
            </nav>


        </div>


    )
}

export default PortraitDropdown