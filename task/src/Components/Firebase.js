// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGPYlicL3qNESuZE93Famet2zvtIJZ0xg",
    authDomain: "react-hello-world-project.firebaseapp.com",
    projectId: "react-hello-world-project",
    storageBucket: "react-hello-world-project.appspot.com",
    messagingSenderId: "213795639212",
    appId: "1:213795639212:web:ea3c3e077fa4efc6edb409",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();


export default firestore;
