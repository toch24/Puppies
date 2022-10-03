import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [puppy, setPuppy] = useState("")

  const newPuppy = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => setPuppy(data.message))
  }

  return (
    <div className="App">
          <div className="image"><img src={puppy} alt = ""></img></div>
        
        <div className="button"><button onClick={newPuppy}> Give me puppy! </button></div>
        <br/>
        <div>I love you :)</div>
    </div>
  );
}

export default App;
