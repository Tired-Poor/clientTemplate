import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ContactNav.css'

function ContactNav() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav id='contactNav'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3e8FvXO07ks_WqvbFy5OjAjNpGPf4Tu9vA&usqp=CAU'></img>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li>Landscapes</li>
                <li>Blog</li>

            </ul>


        </nav>
    )
}

export default ContactNav