import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Nav({ names }) {
  console.log("names in NAV", names);
  return(
    <>
      <nav>
        {names.map(name => <NavLink to={`/dogs/${name}`}>{name}</NavLink>)}
      </nav>
    </>
  )
}

export default Nav;