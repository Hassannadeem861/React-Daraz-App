import React, { useRef, Link } from "react";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import "./Login.css";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

  let login_btn = document.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("login_btn: ", login_btn);
    // Your code here
    let email = document.querySelector("#email");
    let password = document.querySelector("#Password");

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Swal.fire({
          title: "Login Successfull!",
          // text: "Do you want to continue",
          icon: "Successfull",
          confirmButtonText: "Done",
        });
        console.log("Login Successfull: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: "Error!",
          // text: "This email already exists",
          icon: "Error",
          confirmButtonText: "Cool",
        });
        console.log("Error: ", error);
      });

    // console.log("Email: ", email);
    // console.log("Password: ", password);
  });

  return (
    <div className="">
      <header>Login</header>
      <form className="login_form">
        <label htmlFor="">Login:</label>
        <input
          type="email"
          id="email"
          className="email"
          autoComplete="email"
          required
        ></input>
        <br />
        <input
          type="password"
          id="Password"
          className="Password"
          required
        ></input>
        <br />
        <button type="submit" id="login_btn" className="login_btn">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
