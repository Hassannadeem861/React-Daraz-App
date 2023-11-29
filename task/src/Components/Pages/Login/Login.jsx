import React, { useRef, Link } from "react";
// import { Link } from "react-router-dom";
import swal from 'sweetalert';
// import "./Login.css";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Login = (e) => {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCGPYlicL3qNESuZE93Famet2zvtIJZ0xg",
    authDomain: "react-hello-world-project.firebaseapp.com",
    projectId: "react-hello-world-project",
    storageBucket: "react-hello-world-project.appspot.com",
    messagingSenderId: "213795639212",
    appId: "1:213795639212:web:ea3c3e077fa4efc6edb409",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth();


  let register_btn = document.addEventListener('submit', function (e) {
    console.log(`register_btn ${register_btn}`)
    e.preventDefault();
    // Your code here
    let firstName = document.querySelector("#firstName")
    let lastName = document.querySelector("#lastName")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let repeatPassword = document.querySelector("#repeatPassword")

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        console.log("User: ", user)
        swal("Good job!", "Signup Successfull");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Error: ", error);
      });

    console.log("FirstName: ", firstName)
    console.log(`LastName ${lastName}`)
    console.log(`Email ${email}`)
    console.log(`Password ${password}`)
    console.log(`RepeatPassword ${repeatPassword}`)

  });



  // e.preventDefault()
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  return (



    <div className="container">

      <header>Login</header>


      <form id="loginForm">
        <input type="text" id="email" placeholder="Enter your email" />
        <input type="password" id="password" placeholder="Enter your password" className="password" />
        <a href="#">Forgot password?</a>
        <input type="submit" className="button" value="Login" />
      </form>


      <div classNameName="signup">
        <span classNameName="signup">
          Don't have an account?
          <label htmlFor="check">
            <a href="Signup">Signup</a>
          </label>
        </span>
      </div>



    </div>




  );
};

export default Login;