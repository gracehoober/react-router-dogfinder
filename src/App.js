import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DogList from './DogList';

/** Renders Doglist */

function App() {
  //function API
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DogList />} path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//
export default App;
