import { useState } from 'react';
import { Link } from 'react-router-dom';

import SideOneDropdown from './SideOneDropdown.js';
import './sideone.css';
import './sideone-mobile.css';

// Inspiration https://jenhuangphoto.com/

const SideOne = () => {
  const [navClicked, setNavClicked] = useState(false);
  const [sideoneDropdownClass, setSideoneDropdownClass] = useState("sideonedropdown-container hidden")

  const [isClicked, setIsClicked] = useState(false);
  const [weddingsClass, setWeddingsClass] = useState("category weddings hidden");
  const [engagementsClass, setEngagementsClass] = useState("category engagements hidden");
  const [graduationsClass, setGraduationsClass] = useState("category graduations hidden");
  const [naturesClass, setNaturesClass] = useState("category natures hidden");
  const [creativesClass, setCreativesClass] = useState("category creatives hidden");
  const [journalsClass, setJournalsClass] = useState("category journals hidden")

  const controlDropdown = () => {
    if (!navClicked) {
      setSideoneDropdownClass("sideonedropdown-container visible")
    } else {
      setSideoneDropdownClass("sideonedropdown-container hidden")
    }
    setNavClicked(!navClicked)
  }

  const controlWedding = () => {
    if (!isClicked) {
      setWeddingsClass("category weddings visible")
      setEngagementsClass("category engagements hidden")
      setGraduationsClass("category graduations hidden")
      setNaturesClass("category natures hidden")
      setCreativesClass("category creatives hidden")
      setJournalsClass("category journals hidden")
    }
    else {
      setWeddingsClass("category weddings hidden")
    }
    setIsClicked(isClicked)
  }

  const controlEngagements = () => {
    if (!isClicked) {
      setEngagementsClass("category engagements visible")
      setWeddingsClass("category weddings hidden")
      setGraduationsClass("category graduations hidden")
      setNaturesClass("category natures hidden")
      setCreativesClass("category creatives hidden")
      setJournalsClass("category journals hidden")
    }
    else {
      setEngagementsClass("category engagements hidden")
    }
    setIsClicked(isClicked)
  }

  const controlGraduations = () => {
    if (!isClicked) {
      setGraduationsClass("category graduations visible")
      setWeddingsClass("category weddings hidden")
      setEngagementsClass("category engagements hidden")
      setNaturesClass("category natures hidden")
      setCreativesClass("category creatives hidden")
      setJournalsClass("category journals hidden")
    }
    else {
      setGraduationsClass("category graduations hidden")
    }
    setIsClicked(isClicked)
  }

  const controlNatures = () => {
    if (!isClicked) {
      setNaturesClass("category natures visible")
      setWeddingsClass("category weddings hidden")
      setEngagementsClass("category engagements hidden")
      setGraduationsClass("category graduations hidden")
      setCreativesClass("category creatives hidden")
      setJournalsClass("category journals hidden")
    }
    else {
      setNaturesClass("category natures hidden")
      setWeddingsClass("category weddings hidden")
      setEngagementsClass("category engagements hidden")
      setGraduationsClass("category graduations hidden")
      setCreativesClass("category creatives hidden")
      setJournalsClass("category journals hidden")
    }
    setIsClicked(isClicked)
  }

  const controlCreatives = () => {
    if (!isClicked) {
      setCreativesClass("category creatives visible")
      setWeddingsClass("category weddings hidden")
      setEngagementsClass("category engagements hidden")
      setGraduationsClass("category graduations hidden")
      setNaturesClass("category natures hidden")
      setJournalsClass("category journals hidden")
      
    }
    else {
      setCreativesClass("category creatives hidden")
    }
    setIsClicked(isClicked)
  }

  const controlJournals = () => {
    if (!isClicked) {
      setJournalsClass("category journals visible")
      setWeddingsClass("category weddings hidden")
      setEngagementsClass("category engagements hidden")
      setGraduationsClass("category graduations hidden")
      setNaturesClass("category natures hidden")
      setCreativesClass("category creatives hidden")
    }
    else {
      setJournalsClass("category journals hidden")
    }
    setIsClicked(isClicked)
  }


  return (
    <div className="side-one-return">
      
      {/* Mobile Header & Burger Menu START */}
      <div className="sideone-mobile-head">

        <div>
          <img className="sideone-inv-icon" src="https://i.imgur.com/NXQKmlR.png" />
        </div>

          <Link to="/"><img className="sideone-mobile-header-icon" alt="signature" src="https://i.imgur.com/oum2igR.png" /></Link>

        <div className="sideone-hamburger-container">
          <div className="sideone-hamburger">
            <img onClick={controlDropdown} src="https://i.imgur.com/NXQKmlR.png" />
          </div>
          
          <div className={sideoneDropdownClass}>
            <SideOneDropdown />
          </div>
          
        </div>
        
      </div>

      {/* Mobile Header & Burger Menu END */}

      <div className="sideone-sidebar-main-flexbox">
        {/* ^ flexbox contains nav-Left and main-Right */}
        <nav className="sideone-sidebar-nav">
          <header className="sideone-nav-header">
            <Link to="/"><img alt="signature" src="https://i.imgur.com/oum2igR.png" width="100%" /></Link>
          </header>

          {/* <Link to="side-one">Drew's Sidebar page</Link> */}
          <section className="sideone-link-cats">
            <span onClick = { controlWedding } className="sideone-link-cats__cat">WEDDINGS + </span>
            <ul className={weddingsClass}>
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel, 2002</li>
              <li className="category__item">Denise & Dwight, 2000</li>
            </ul><br /><br />

            <span onClick = {controlEngagements } className="sideone-link-cats__cat">ENGAGEMENTS + </span><br />
            <ul className={engagementsClass}>
              <li className="category__item">Liz and Criss</li>
              <li className="category__item">Emily and John</li>
              <li className="category__item">Bill and Ted</li>
              <li className="category__item">Christina and Everett</li>
            </ul><br />

            <span onClick={controlGraduations} className="sideone-link-cats__cat">GRADUATION + </span><br />
            <ul className={graduationsClass}>
              <li className="category__item">Jiliian, Texas A&M</li>
              <li className="category__item">Christopher UT Austin</li>
              <li className="category__item">Tyler SHSU</li>
              <li className="category__item">Robyn Texas State</li>
            </ul><br />

            <span onClick={controlNatures} className="sideone-link-cats__cat">NATURE + </span><br />
            <ul className={naturesClass}>
              <li className="category__item">Houston Zoo</li>
              <li className="category__item">Dallas Zoo</li>
              <li className="category__item">African Safari</li>
              <li className="category__item">Rio Grande Valley</li>
            </ul><br />

            <span onClick={controlCreatives} className="sideone-link-cats__cat">CREATIVE + </span><br />
            <ul className={creativesClass}>
              <li className="category__item">Nightlife</li>
              <li className="category__item">Stars</li>
              <li className="category__item">Artistic</li>
              <li className="category__item">Landscapes</li>
            </ul><br />

            <span onClick={controlJournals} className="sideone-link-cats__cat">JOURNAL + </span><br />
            <ul className={journalsClass}>
              <li className="category__item">Apr, 2023</li>
              <li className="category__item">Nov, 2022</li>
              <li className="category__item">Feb, 2022</li>
              <li className="category__item">Dec, 2021</li>
              <li className="category__item">Aug, 2021</li>
              <li className="category__item">Jan, 2021</li>
              <li className="category__item">Sept, 2020</li>
              <li className="category__item">Mar, 2020</li>
            </ul><br />

            <span className="sideone-link-cats__cat">CONTACT </span><br />
          </section>
        </nav>


        <main>

          <div className="sideone-photo-flexbox">
            <img src="https://i.imgur.com/FmK8Ao1.png" width="48%"/> 
            &nbsp;
            <img src="https://i.imgur.com/FUuqduq.png" width="48%"/>
          </div>

          <p className="sideone-main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

          <img src="https://i.imgur.com/nquJiLA.png" width="96%"/>

          <p className="sideone-main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="sideone-photo-flexbox">
            <img src="https://i.imgur.com/gJCf2cG.png" width="23.8%"/>
            &nbsp;
            <img src="https://i.imgur.com/vaDr3Pg.png" width="23.8%"/>
            &nbsp;
            <img src="https://i.imgur.com/ne1cYIP.png" width="23.8%"/>
            &nbsp;
            <img src="https://i.imgur.com/2t9l8vY.png" width="23.8%"/>
          </div>

          <p className="sideone-main-text">My luminous imagery is understated, yet evocative, resulting from clear and polished creative direction and an exceptional eye for beauty. My fresh and simple composition, and use of natural light has evolved from a deep love and respect for the art and craft of shooting film. My clients describe my work as “painterly,” “nuanced,” “refined” and I am honored to be a leading choice amongst internationally acclaimed planners and designers.</p>

          <div className="sideone-photo-flexbox">
            <img src="https://i.imgur.com/mvsbyXC.png" width="48%"/> 
            &nbsp;
            <img src="https://i.imgur.com/KzlirfJ.png" width="48%"/>
          </div>

          <p className="sideone-main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <img src="https://i.imgur.com/ytsRYFe.png" width="96%"/>

        </main>
      </div>

    </div>
  )
}

export default SideOne;