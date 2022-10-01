import React, { useState } from "react";
import "./SignIn.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "../firebase";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="signin_form">
      <Link to="/">
        <img
          className="signin_logo"
          src="\Images\amazon-865x349.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="signin_container">
        <h2>Sign In</h2>
        <form>
          <h5>Username</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign In</button>
          <p>
            By signing in you agree to Amazon's terms and policy. For more
            information read amazon's policy of return, Cookies policy and ad of
            interest policy.{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
