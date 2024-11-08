import React,{Link} from 'react-router-dom';
import './Navbar.css';
import Expertise from '../Expertise/Expertise.js';

function Navbarhome() {
  return (

    <header className="header">

      <nav className="navbar">

        <div className="logo">Humaan</div>

        <lu className="nav-links"> 
        
          <li className='nav-links1'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-links1'>
            <Link to="/About">About</Link>
          </li>
          <li className='nav-links1'>
            <Link to="/Contact">Contact</Link>
          </li>
          <li className='nav-links1'>
            <Link to="/Signup">Signup</Link>
          </li>
          <li className='nav-links1'>
            <Link to="/login">Login</Link>
          </li>

        </lu>

        <div className="logo1">Humaan</div>  
      </nav>

    </header>

  );
}

export default Navbarhome;