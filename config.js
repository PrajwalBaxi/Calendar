import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAfBzDz_zAEzls4Dg-7DFvkWaanOjMVCWY",
  authDomain: "booksanta-75508.firebaseapp.com",
  databaseURL: "https://booksanta-75508.firebaseio.com",
  projectId: "booksanta-75508",
  storageBucket: "booksanta-75508.appspot.com",
  messagingSenderId: "648296599849",
  appId: "1:648296599849:web:1c9dfa079059b5d2c1e738"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
