import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAw8TPVHYI1SppaoubIWgmFIqzZG-pWF7w",
    authDomain: "mrpg-c78e5.firebaseapp.com",
    projectId: "mrpg-c78e5",
    storageBucket: "mrpg-c78e5.appspot.com",
    messagingSenderId: "788028079134",
    appId: "1:788028079134:web:d3843ebe0f883eb53f420f",
    measurementId: "G-SFGJ6Z1588"
});

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  export{ db, auth}