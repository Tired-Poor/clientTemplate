import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  return(
    <div>
      Home PAGE
      <Link to="side-one">Drew's Sidebar page</Link>

      <Footer />
    </div>
  )
}

export default Home;