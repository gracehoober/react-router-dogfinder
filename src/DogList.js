import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import "./DogList.css";

/** Renders list of dogs
 *
 * Props
 * -dogs [{name:'Duke', src: 'Duke'... },{name: 'Whiskey' , src: 'whiskey'...}...]
 */

function DogList({ dogs }) {
  return (
    <>
      {dogs.map((dog, idx) => (
        <div key={idx} className="DogList-dog">
          <Link
            to={`/dogs/${dog.src}`}>
            {dog.name}
          </Link>
          <img
            className="DogList-img"
            src={`${dog.src}.jpg`}
            alt={`${dog.src} image`} />
        </div>))}
    </>

  );

}

export default DogList;