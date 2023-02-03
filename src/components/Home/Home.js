import { Link } from 'react-router-dom';
import Footer from './Footer';
import './style.css';

const Home = () => {
  return (
    <div>
      <header>
        <h1>
          <span className="home-header-main">Zach and Drew Makes Websites</span>
          <span className="home-header-sub">Take a look around</span>
        </h1>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>

      <section>
        <title>
          Templates
        </title>
        <article>
          <Link to="side-one">Drew's Sidebar page</Link>
          <Link to='zach1'>Zach's Portraits</Link>
          <Link to="natours">Natours</Link>
          <Link to='contact'>Contact</Link>
        </article>
      </section>

      <Footer />

    </div>
  )
}

export default Home;