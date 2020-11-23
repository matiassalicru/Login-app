import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAD8U5sMu4wpHd7ya6GSr5ExtsgBFXcNMY",
  authDomain: "login-4e942.firebaseapp.com",
  databaseURL: "https://login-4e942.firebaseio.com",
  projectId: "login-4e942",
  storageBucket: "login-4e942.appspot.com",
  messagingSenderId: "335067176604",
  appId: "1:335067176604:web:37326ef5f1779eaf0a1759",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}