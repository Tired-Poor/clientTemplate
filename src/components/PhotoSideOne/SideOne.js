import { Link } from 'react-router-dom';
import Footer from '../Footer';
import './style.css';

// Inspiration https://jenhuangphoto.com/#

const SideOne = () => {
  return (
    <div className="side-one-return">
      <div className="sidebar-main-flexbox">
        {/* ^ flexbox contains nav-Left and main-Right */}
        <nav className="sidebar-nav">
          <header>
            <h1>Photography</h1>
          </header>
          <Link to="/">&#x2190; Return Home</Link>
          {/* <Link to="side-one">Drew's Sidebar page</Link> */}
          <section className="link-cats">
            <span className="link-cat">WEDDINGS + </span><br />
            <span className="link-cat">ENGAGEMENTS + </span><br />
            <span className="link-cat">GRADUATION + </span><br />
            <span className="link-cat">NATURE + </span><br />
            <span className="link-cat">CREATIVE + </span><br />
            <span className="link-cat">JOURNAL + </span><br />
            <span className="link-cat">CONTACT </span><br />
          </section>
        </nav>
        <main>
          <div className="photo-flexbox">
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