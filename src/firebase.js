import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBIlFVqRJhKYqp28Fp9_q070kItxXpKh4I",
    authDomain: "cse110-swat.firebaseapp.com",
    databaseURL: "https://cse110-swat.firebaseio.com",
    projectId: "cse110-swat",
    storageBucket: "cse110-swat.appspot.com",
    messagingSenderId: "483044728705"
  };

 firebase.initializeApp(config);
 
 export default firebase;