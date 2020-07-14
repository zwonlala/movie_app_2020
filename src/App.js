import React from 'react';

function Food({ fav }) {
  return (
    <h3>I like {fav}</h3>
  );
}
function App() {
  return (
    <div >
      <h1>Hello</h1> 
      <Food fav="kimchi" />
      <Food fav="라면" />
      <Food fav="삼겹살" />
      <Food fav="까르보나라" />

    </div>
  );
}

export default App;
