import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { UserAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/login");
    } catch (e) {
      setError(e.message);
      alert(e);
    }
  };

  return (
    <div className="signup_form">
      <Link to="/">
        <img
          className="signup_logo"
          src="\Images\amazon-865x349.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="signup_container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
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
          <button>Create Your amazon account</button>
          <p>
            This is a one-way account creating process. Do remember your
            credentials
          </p>
          <p>
            Already have an account
            <Link to="/login"> Sign In here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
