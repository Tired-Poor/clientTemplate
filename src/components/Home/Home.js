import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './style.css';

const Home = () => {
  return (
    <div>

      <Navbar />

      <header>
        <h1>
          <span className="home-header-main">Zach and Drew Make Websites</span>
          {/* temporary break */} <br />
          <span className="home-header-sub">Take a look around</span>
        </h1>
      </header>

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
        </article>
      </section>

      <Footer />

    </div>
  )
}

export default Home;