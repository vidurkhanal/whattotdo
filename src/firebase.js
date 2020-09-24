import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig =firebase.initializeApp({
      apiKey: "AIzaSyB0J3gBpomWRQQwbOXicO3PDFU1IBESIB8",
      authDomain: "whattodo-by-vidur.firebaseapp.com",
      databaseURL: "https://whattodo-by-vidur.firebaseio.com",
      projectId: "whattodo-by-vidur",
      storageBucket: "whattodo-by-vidur.appspot.com",
      messagingSenderId: "726452632894",
      appId: "1:726452632894:web:2d7198ad51a62f95cd006f",
      measurementId: "G-D7ZK1T6W35",
    });

export { firebaseConfig as firebase };
