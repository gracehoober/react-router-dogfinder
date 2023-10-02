import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';


/** Renders list of dogs
 *
 * Props
 * -dogs [{name:'Duke', src: 'Duke'... },{name: 'Whiskey' , src: 'whiskey'...}...]
 */
function DogList({ dogs }) {
  console.log("dogs inside doglist", dogs)
  return (
    <ul>
    {dogs.map(dog => <div><Link to={`/dogs/${dog.src}`}>{dog.name}</Link></div>)}
    </ul>
  );

}

export default DogList;