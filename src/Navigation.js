import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

  const clear = (e) => {
    if (e.target.nodeName === 'A') {
      const allLI = e.target.parentNode.parentNode.children;
      for (let i = 0; i < allLI.length; i++) {
        allLI[i].firstElementChild.className = '';
      }
    }
  }

  const makeActive = (e) => {
    clear(e);
    if (e.target.nodeName === 'A') {
      e.target.className = 'active';
    }
  }

  return (

    <nav className="main-nav">
      <ul onClick={ (e) => {makeActive(e)} }>
        <li><Link to='/space'>Space</Link></li>
        <li><Link to='/nature'>Nature</Link></li>
        <li><Link to='/buildings'>Buildings</Link></li>
        <li><Link to='/cookies'>Cookies</Link></li>
        <li><Link to='/cats'>Cats</Link></li>
        <li><Link to='/jogging'>Jogging</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;