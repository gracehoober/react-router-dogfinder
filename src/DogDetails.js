import React from "react";
import { useParams } from "react-router-dom";

/** Renders a specific dog's details
 *
 * props:
 * -dogs [{name:'Duke', src: 'Duke'... },{name: 'Whiskey' , src: 'whiskey'...}...]
 */

function DogDetails({ dogs }) {
  const params = useParams();
  const dogName = params.name;
  const correctDog = dogs.filter(dog => dog.src === dogName)[0];

  return (
    <>
      <h2>{correctDog.name}</h2>
      <p>Age: {correctDog.age}</p>
      <img src={`../public/${correctDog.src}.jpg`}></img>
      <ul>{correctDog.facts.map(fact => <li>{fact}</li>)}</ul>
    </>
  );

}

export default DogDetails;