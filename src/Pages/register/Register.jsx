import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("http://localhost:8800/api/auth/register/", {
        email,
        username,
        password,
      });
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.NK-GvoyIYe0s6JU10KdkrAHaER&pid=Api&P=0&w=302&h=174"
            alt="logo"
            className="logo"
          />
          <Link to="/login">
            <button className="loginButton">Sign IN</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1> Unlimited moveies, TV shows, and more.</h1>
        <h2>Whatch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input tupe="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
