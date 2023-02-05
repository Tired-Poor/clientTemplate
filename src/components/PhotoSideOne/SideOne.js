import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../Footer';
import './sideone.css';

// Inspiration https://jenhuangphoto.com/#

const SideOne = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [weddingsClass, setWeddingsClass] = useState("weddings hidden")


  const controlNavbar = () => {
    if (!isClicked) {
      setWeddingsClass("weddings visible")
    }
    else {
      setWeddingsClass("weddings hidden")
    }
  }


  return (
    <div className="side-one-return">
      <div className="sideone-sidebar-main-flexbox">
        {/* ^ flexbox contains nav-Left and main-Right */}
        <nav className="sideone-sidebar-nav">
          <header>
            <h2>Photography</h2>
          </header>
          <Link to="/">&#x2190; Return Home</Link>
          {/* <Link to="side-one">Drew's Sidebar page</Link> */}
          <section className="sideone-link-cats">
            <span onClick={isClicked} className="sideone-link-cats__cat">WEDDINGS + </span>
            <ul className="category weddings hidden">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">ENGAGEMENTS + </span><br />
            <ul className="category engagements hidden">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">GRADUATION + </span><br />
            <ul className="category graduation hidden">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">NATURE + </span><br />
            <ul className="category nature hidden">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">CREATIVE + </span><br />
            <ul className="category hidden">
              <li className="category__creative">Bill & Frank, 2023</li>
              <li className="category__creative">Harry & Megan, 2018</li>
              <li className="category__creative">Jim & Pam, 2014</li>
              <li className="category__creative">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">JOURNAL + </span><br />
            <ul className="category journal hidden">
              <li className="category__item">Bill & Frank, 2023</li>
              <li className="category__item">Harry & Megan, 2018</li>
              <li className="category__item">Jim & Pam, 2014</li>
              <li className="category__item">Ross & Rachel 2002</li>
            </ul><br />

            <span className="sideone-link-cats__cat">CONTACT </span><br />
          </section>
        </nav>
        <main>
          <div className="sideone-photo-flexbox">
            <img src="https://i.imgur.com/AdGSqnr.png" height="620px"/> 
            &nbsp;
            <img src="https://i.imgur.com/AdGSqnr.png" height="620px"/>
          </div>
          <p>I approach photography with a romantic, impressionist sensibility. Over the past decade, I have had the pleasure of documenting some of the most iconic and exclusive celebrations for discerning patrons in over twenty countries and six continents. I have been named one of the top film photographers in the world and featured in numerous prestigious publications such as Harpers Bazaar, Elle, Town & Country and Martha Stewart Weddings. </p>
          <img src="https://i.imgur.com/NmJEXNJ.png" height="504px"/>
          <p>
          My luminous imagery is understated, yet evocative, resulting from clear and polished creative direction and an exceptional eye for beauty. My fresh and simple composition, and use of natural light has evolved from a deep love and respect for the art and craft of shooting film. My clients describe my work as “painterly,” “nuanced,” “refined” and I am honored to be a leading choice amongst internationally acclaimed planners and designers.
          </p>
          <img src="https://i.imgur.com/AdGSqnr.png" height="308px"/>
          &nbsp;
          <img src="https://i.imgur.com/AdGSqnr.png" height="308px"/>
          &nbsp;
          <img src="https://i.imgur.com/AdGSqnr.png" height="308px"/>
          &nbsp;
          <img src="https://i.imgur.com/AdGSqnr.png" height="308px"/>
          <p>My luminous imagery is understated, yet evocative, resulting from clear and polished creative direction and an exceptional eye for beauty. My fresh and simple composition, and use of natural light has evolved from a deep love and respect for the art and craft of shooting film. My clients describe my work as “painterly,” “nuanced,” “refined” and I am honored to be a leading choice amongst internationally acclaimed planners and designers.</p>
          <div className="photo-flexbox">
            <img src="https://i.imgur.com/AdGSqnr.png" height="620px"/> 
            &nbsp;
            <img src="https://i.imgur.com/AdGSqnr.png" height="620px"/>
          </div>
          <img src="https://i.imgur.com/NmJEXNJ.png" height="504px"/>

        </main>
      </div>

    </div>
  )
}

export default SideOne;