import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmoqJjEG71K0vC6gsDpy6EpGUjcNTypjA",
    authDomain: "ari-portfolio.firebaseapp.com",
    projectId: "ari-portfolio",
    storageBucket: "ari-portfolio.appspot.com",
    messagingSenderId: "932254173941",
    appId: "1:932254173941:web:b1d88af80158e5cae993bc",
    measurementId: "G-L87P8Y235G"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;