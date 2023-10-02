import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import "./Nav.css";

/** Renders navigation bar
 *
 * props:
 * -dogs [{name:'Duke', src: 'Duke'... },{name: 'Whiskey' , src: 'whiskey'...}...]
 */
function Nav({ dogs }) {
  return (
    <>
      <nav className='Nav'>
        {dogs.map(dog => (
          <NavLink
            key={`${dog.src}`}
            className="Nav-link"
            to={`/dogs/${dog.src}`}>
            {dog.name}
          </NavLink>))}
      </nav>
    </>
  );
}

export default Nav;