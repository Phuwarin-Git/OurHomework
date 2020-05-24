
// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwMEPnPL32CqfGjC6VRxAb6l_dX1exKjI",
    authDomain: "ourhomework-ad84c.firebaseapp.com",
    databaseURL: "https://ourhomework-ad84c.firebaseio.com",
    projectId: "ourhomework-ad84c",
    storageBucket: "ourhomework-ad84c.appspot.com",
    messagingSenderId: "534332359498",
    appId: "1:534332359498:web:829ac8d3da048a9cc537b3",
    measurementId: "G-KHDBQ2FYD4"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
