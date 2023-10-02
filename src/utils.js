"use strict";

/** fetchDogData: Return array of dog data from json-server  */
async function fetchDogData() {
  const resp = await fetch("http://localhost:5001/dogs");
  return await resp.json();
}


export { fetchDogData };