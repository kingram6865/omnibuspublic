import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      {/* <div className="admin-login">
        <Link to="/">Admin</Link>  
      </div> */}
      <div className="navbar">
        <div className="navbar-links">
          <Link to="ntt">NTT</Link>
          {/* <Link to="wordsphrases">Words and Phrases</Link> */}
          <Link to="law">Law</Link>
          <Link to="youtube">Personal Youtube Archive</Link>
          <Link to="math">Mathematics</Link>
          <Link to="rpg">RPG Tools</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;