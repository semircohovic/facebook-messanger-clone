import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCgqZ8cqdKDT8K7-apKUZNdDBUQ_gKBUyI",
    authDomain: "facebook-messanger-clone-8b065.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-8b065.firebaseio.com",
    projectId: "facebook-messanger-clone-8b065",
    storageBucket: "facebook-messanger-clone-8b065.appspot.com",
    messagingSenderId: "653577843560",
    appId: "1:653577843560:web:2da424a05205c2a6ba5cdd",
    measurementId: "G-XVB4QNKTJG"
});

const db = firebaseApp.firestore();

export default db;