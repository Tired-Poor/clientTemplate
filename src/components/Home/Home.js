import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './style.css';

const Home = () => {
  return (
    <div className="home-return">

      <Navbar />

      <header>
        <h1>
          <span className="home-header-main">Zach and Drew Make Websites</span>
          {/* temporary break */} <br />
          <span className="home-header-sub">Take a look around</span>
        </h1>
      </header>

      <section className="home-introduction">
        <p>Are you looking to expand your business or grow your hobby online? We do custom work for each client, so let us know what you're looking for. Don't know exactly what you need yet? No problem: we have created a few templates to browse through and find inspiration.   </p>
      </section>
      <br /><br />

      <section>
        <label>
          <b>Templates</b>
        </label>
        <article>
          <a href="https://wedding-sassy.netlify.app">Wedding</a>
          <br />
          <a href="https://come-at-us.netlify.app">Basic LinkTree</a>
          <br />

          <Link to="side-one">Drew's Sidebar page</Link>
          <br />
          <Link to='zach1'>Zach's Portraits</Link>
          <br />
          <a href="https://natours-by-drewford.netlify.app">Nature tours</a>
          <br />
          <a href="https://trillo-by-drewford.netlify.app/">Travel Site</a>
          <br />
          <Link to='contact'>Contact</Link>
          <br />
          <Link to='landing'>Product Landing Page</Link>
          <br />
          <Link to="electronics">Electronics ECommerce</Link>
          <br />
          <Link to="beauty">Beauty</Link>
          <br />
          <br /><br />
          <b>Buttons, Menus, and More</b>
          <br />
          <a href="https://buttons-by-drewford.netlify.app">Button Effects</a>
          <br />
          <a href="https://menus-by-drewford.netlify.app">Menu Effects</a>
          <br />
          <a href="https://clip-paths-by-drewford.netlify.app">Clip Paths</a>
          <br />
          <a href="https://drawings-by-drewford.netlify.app">CSS Drawings</a>

        </article>
      </section>

      <br /><br />

      <Footer />

    </div>
  )
}

export default Home;