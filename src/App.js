import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  // console.log(messages);
  // // console.log(input);
  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
    });
  }, []) 
// ovaj useEffect nam konektuhe firebase bazu odje dje uzimamo messages polje iz firebase baze i onda koristimo funciju onSnapshot koja radi kao live stalno provjerava 
// da li su neke izmjene umijente u bazi i da ih odma izlista a onda stavimo sve kolekcije tj vrijednosti u variablu snapshot
  useEffect(() => {
  //  const name = prompt('Please enter your name');
  setUsername(prompt('Please enter your name'));
  }, [])
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp
    });
    setMessages([...messages, {username: username,  message: input }]);
    setInput('');
  }
  return (
    <div className="App">
       <h1>Test!!</h1>
       <h2>Welcome {username} </h2>
        <form> 
        <FormControl>
          <InputLabel >Enter message ... </InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={sendMessage}> Send message </Button>
      
        </FormControl>
       </form>
       {
         messages.map(message => (
           <Message username={username} message={message} />
         ))
       }
    </div>
  );
}

export default App;
