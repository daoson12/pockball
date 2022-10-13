import React from 'react';
import { Link, NavLink, withRouter  } from 'react-router-dom';

const Navbar=(props)=> {

  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000);
  return (
    <div>
<nav>
  <div className="nav-wrapper red darken-3">
  <div className='container'>
  <a  className="brand-logo">Pock Time's</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/">Home</Link></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      
    </ul>
  </div>

  </div>
</nav>

        
    </div>
  );
}

export default withRouter(Navbar);
