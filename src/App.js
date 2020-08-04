import React, { useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'staovo']);

  console.log(messages);
  // console.log(input);
  const sendMessage = (event) => {
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="App">
       <h1>Test!!</h1>

       <input value={input} onChange={event => setInput(event.target.value)}/>
       
       <button onClick={sendMessage}> Send message </button>
    </div>
  );
}

export default App;
