import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useActionData } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

import { fetchDogData } from './utils';

/** Renders Doglist
 *
 * State:
 * -dogData
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
            <Route path="/dogs" ></Route>
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
