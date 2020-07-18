import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCKho7xFJEz8o3u0O0B2lok2MCOMGilxfA",
  authDomain: "schoolattendanceapp.firebaseapp.com",
  databaseURL: "https://schoolattendanceapp.firebaseio.com",
  projectId: "schoolattendanceapp",
  storageBucket: "schoolattendanceapp.appspot.com",
  messagingSenderId: "793318119397",
  appId: "1:793318119397:web:308cd07898252808c7810c",
  measurementId: "G-YNH2LJLFJX"
};

if(!firebase.apps.length){
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();





