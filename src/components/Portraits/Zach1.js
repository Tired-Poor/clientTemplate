// Inspiration URL: (https://deaniechen.com/people) 
// Just a portrait's page.
// Want to add light/dark mode.

import React, { useState } from 'react'
import PortraitNav from './PortraitNav'
import Gallery from './Gallery'
import PortraitDropdown from './PortraitDropdown'
import './Zach1.css'

function Zach1() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div id='portraitsContainer'>
            <PortraitNav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            {!toggleMenu ? <Gallery /> : <PortraitDropdown />}



        </div>
    )
}

export default Zach1