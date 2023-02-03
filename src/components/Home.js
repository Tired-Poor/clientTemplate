import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      Home PAGE
      <Link to="side-one">Drew's Sidebar page</Link>
      <Link to='zach1'>Zach's Portraits</Link>
      <Link to="natours">Natours</Link>

      <Footer />
    </div>
  )
}

export default Home;