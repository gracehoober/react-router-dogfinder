import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

import { fetchDogData } from './utils';

/** Renders App - Fetches all dog data and renders DogList.
 *
 * State
 * - dogData: array of objects like { name, age, src, facts }
*/

function App() {
  const [dogData, setDogData] = useState(null);

  // updates state when fetch request is resolved
  async function getData() {
    setDogData(await fetchDogData());
  }

  if (!dogData) getData();

  return (
    <div className="App">
      {!dogData ? <h1>Loading...</h1> :
        <BrowserRouter>
          <Nav dogs={dogData} />
          <Routes>
            <Route element={<DogList dogs={dogData} />} path="/dogs" />
            <Route element={<DogDetails dogs={dogData} />} path="/dogs/:name" />
            <Route element={<Navigate to="/dogs" />} path="/*"></Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
