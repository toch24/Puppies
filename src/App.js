import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [image, setImage] = useState("")

  const newPuppy = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => setImage(data.message))
  }

  const newKitten = () => {
    fetch("https://api.thecatapi.com/v1/images/search?")
    .then((response) => response.json())
    .then((data) => setImage(data[0].url))
  }

  return (
    <div className="App">
      { image !== "" &&
          <div className="image"><img src={image} alt = "" ></img></div>
      }   
        <div className="button"><button onClick={newPuppy}> Give me puppy! </button></div>
        <br/>
        <div className="button"><button onClick={newKitten}> Give me kitten! </button></div>
        <br/>
        <div>I love you :)</div>
    </div>
  );
}

export default App;
