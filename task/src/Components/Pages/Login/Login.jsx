import React, {useRef, Link} from "react";
// import { Link } from "react-router-dom";
import "./Login.css";

const Login = (e) => {
  // e.preventDefault()
const emailInputRef = useRef(null);
const passwordInputRef = useRef(null);

  return (
    
    <div className="Login">


      <header>Login</header>
      <form id="signupForm">
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          autoComplete="email"
          ref={emailInputRef}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          ref={passwordInputRef}
          autoComplete="new-password"
        />

        {/* <Link href="#">Forgot password?</Link> */}
        <input type="submit" className="button" />
      </form>

      <div className="signup">
        <span className="signup">
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