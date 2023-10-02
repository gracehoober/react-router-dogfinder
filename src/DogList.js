import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';

/**
 * state
 * props
 * call to an external function for API req
 * rendering navbar and list of dogs
 */
function DogList() {
  const [isLoaded, setIsLoaded] = useState(false);
  let dogData

  // updates state when fetch request is resolved
  function getData() {
    setIsLoaded(true);
  }

  return (
    <>
      <Nav />
      {dogData.map(dog => <DogDetails dog={dog}/>)}
    </>
  );

}

export default DogList;