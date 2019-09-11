import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav className="main-nav">
      <ul>
        <li><Link to='/cats'>Cats</Link></li>
        <li><Link to='/nature'>Nature</Link></li>
        <li><Link to='/computers'>Computers</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;