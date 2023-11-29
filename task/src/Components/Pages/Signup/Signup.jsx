import React, { useRef, useState, useEffect, Link } from "react";
import "./Signup.css";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { Navigate } from "react-router-dom";
import Login from '../Login/Login'

const Signup = () => {
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const repeatPasswordInputRef = useRef(null);

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

  return (
    <div className="login form">
      <header>Signup</header>
      <form id="signupForm">
        <input
          type="text"
          id="firstName"
          placeholder="Enter your First-Name"
          ref={firstNameInputRef}
          autoComplete="given-name"
        />

        <input
          type="text"
          id="lastName"
          placeholder="Enter your last-Name"
          autoComplete="family-name"
          ref={lastNameInputRef}
        />

        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          autoComplete="email"
          ref={emailInputRef}
        />
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          ref={passwordInputRef}
          autoComplete="new-password"
        />
        <input
          type="password"
          id="repeatPassword"
          placeholder="Enter your Repeat-Password"
          ref={repeatPasswordInputRef}
          autoComplete="new-password"
        />
        {/* <Link href="#">Forgot password?</Link> */}
        <input type="submit" className="button" value="Signup" />
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
