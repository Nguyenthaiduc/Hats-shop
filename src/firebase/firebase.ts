import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAEiPjsmQn54RrY-gzenRh16Zg8IRB8TUA",
    authDomain: "shop-hats-db.firebaseapp.com",
    projectId: "shop-hats-db",
    storageBucket: "shop-hats-db.appspot.com",
    messagingSenderId: "722884031778",
    appId: "1:722884031778:web:f7b053089afe41f168617b",
    measurementId: "G-TRC848P4JV"
  };

  firebase.initializeApp(config)
  export const database = firebase.database();
  export const firestore = firebase.firestore();
  export const auth = firebase.auth()