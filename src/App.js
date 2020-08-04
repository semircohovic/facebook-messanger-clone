import React, { useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
       <h1>Test!!</h1>

       <input />
       <button> Send message </button>
    </div>
  );
}

export default App;
