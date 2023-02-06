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

      <section>
        <label>
          Templates
        </label>
        <article>
          <Link to="side-one">Drew's Sidebar page</Link>
          <br />
          <Link to='zach1'>Zach's Portraits</Link>
          <br />
          <Link to="natours">Natours</Link>
          <br />
          <Link to='contact'>Contact</Link>
          <br />
          <Link to='landing'>Product Landing Page</Link>
        </article>
      </section>

      <Footer />

    </div>
  )
}

export default Home;