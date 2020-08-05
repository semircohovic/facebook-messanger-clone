import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'
import './App.css';
import firebase from 'firebase';
import db from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  // console.log(messages);
  // // console.log(input);
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
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
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages, {username: username,  message: input }]);
    setInput('');
  }
  return (
    <div className="App">

      <img className="logo" src="https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/SeXJIAlf_z-.png" />
       <h1>Testiranje Messanger </h1>
       <h2>Welcome {username} </h2>
        <form className="app__form"> 
        <FormControl className="app__formControl">
          <InputLabel >Enter message ... </InputLabel>
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
          
      
        </FormControl>
       </form>
       <FlipMove>
       {
         messages.map(({id, message}) => (
           <Message key={id} username={username} message={message} />
         ))
       }
       </FlipMove>
    </div>
  );
}

export default App;
