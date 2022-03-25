import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDyZHOhA-axgQYoEwMjvalR78NV1aIrUbc",
    authDomain: "chat-facf0.firebaseapp.com",
    projectId: "chat-facf0",
    storageBucket: "chat-facf0.appspot.com",
    messagingSenderId: "784914485699",
    appId: "1:784914485699:web:79b47b4a7e994ea720ed76",
    measurementId: "G-M6RJBLFS30"
  });

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  export{ db, auth}