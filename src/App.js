import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useActionData } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

import { fetchDogData } from './utils';

/** Renders Doglist */

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogData, setDogData] = useState();

  // updates state when fetch request is resolved
  async function getData() {
    setDogData(await fetchDogData());
    setIsLoaded(true);
  }

  if (!isLoaded) getData();

  return (
    <div className="App">
      {!isLoaded ? <h1>Loading...</h1> :
        <BrowserRouter>
          <Nav names={dogData.map(dog => dog.src)} />
          <Routes>
            <Route element={<DogList dogs={dogData} />} path="/" />
            <Route element={<DogDetails dogs={dogData} />} path="/dogs/:name" />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}
//
export default App;
