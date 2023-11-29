import React, { useRef } from "react";
import Swal from "sweetalert2";
import "./Signup.css";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  // const firstNameInputRef = useRef(null);
  // const lastNameInputRef = useRef(null);
  // const emailInputRef = useRef(null);
  // const passwordInputRef = useRef(null);
  // const repeatPasswordInputRef = useRef(null);
  // const buttonInputRef = useRef(null);

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

  let register_btn = document.addEventListener("submit", function (e) {
    console.log("register_btn: ", register_btn);
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
        Swal.fire({
          position: "top-end",
          icon: "Success",
          title: "Signup Successfull",
          showConfirmButton: false,
          timer: 15000,
        });
        console.log("User: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Swal.fire({
          position: "top-end",
          icon: "Error",
          title: "InValid Email",
          showConfirmButton: false,
          timer: 15000,
        });
        console.log("Error: ", error);
      });

    // console.log("FirstName: ", firstName);
    // console.log("lastName: ", lastName);
    // console.log("email: ", email);
    // console.log("password: ", password);
    // console.log("repeatPassword: ", repeatPassword);
  });

  return (
    <div className="container">
      <header>Signup</header>
      <form id="signupForm">
        <input
          type="text"
          id="firstName"
          placeholder="Enter your First-Name"
          // ref={firstNameInputRef}
          autoComplete="given-name"
        />

        <input
          type="text"
          id="lastName"
          placeholder="Enter your last-Name"
          autoComplete="family-name"
          // ref={lastNameInputRef}
        />

        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          autoComplete="email"
          // ref={emailInputRef}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          // ref={passwordInputRef}
          autoComplete="new-password"
        />
        <input
          type="password"
          id="repeatPassword"
          placeholder="Enter your Repeat-Password"
          // ref={repeatPasswordInputRef}
          autoComplete="new-password"
        />
        {/* <Link href="#">Forgot password?</Link> */}
        <button
          type="submit"
          id="register_btn"
          className="button"
        >
          SIGNUP
        </button>
      </form>

      <div className="signup">
        <span className="signup">
          Don't have an account?
          <label htmlFor="check">
            <a href="login">Login</a>
          </label>
        </span>
      </div>
    </div>
  );
};
export default Signup;
