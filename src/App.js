import React from 'react';

function Food({ fav }) {
  return (
    <h1>I Like {fav} </h1>
  );
}

function App() {
  return (
    <div className="App">
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="sam" />
      <Food fav="jugumi" />
      <h1>hello!!!</h1>
    </div>
  );
}

export default App;
