import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC-FqyblXIa_bRTdYLtuQyDi3ErS7_2kik",
    authDomain: "myreactweb.firebaseapp.com",
    projectId: "myreactweb",
    storageBucket: "myreactweb.appspot.com",
    messagingSenderId: "863185856506",
    appId: "1:863185856506:web:0d04555986efa35c3de643",
    measurementId: "G-1V1HSGG8WZ"
};

// Initialize Firebase
const db=firebase.initializeApp(firebaseConfig);
// const db=firebase.firestore();

export default db;