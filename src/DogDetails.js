import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./DogDetails.css"


/** Renders a specific dog's details
 *
 * props:
 * -dogs [{name:'Duke', src: 'Duke'... },{name: 'Whiskey' , src: 'whiskey'...}...]
 */

function DogDetails({ dogs }) {
  const params = useParams();
  const dogName = params.name;
  const dog = dogs.filter(dog => dog.src === dogName)[0];

  console.log("dog in dogdetail", dog)
  return (
    <>
    {dog === undefined ? <Navigate to="/dogs" /> :
    <div className="DogDetails">
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <img src={`/${dog.src}.jpg`} alt={`${dog.src} image`}/>
      <ul>{dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}</ul>
    </div>
    }
    </>
  );

}

export default DogDetails;