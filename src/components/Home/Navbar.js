import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-return">
        <nav>
          <Link to="/">Home</Link>  
          &nbsp;&nbsp;
          <Link to="/contact-us">Contact Us</Link>
      </nav>
    </div>
  )
};

export default Navbar;