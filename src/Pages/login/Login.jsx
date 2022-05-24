import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.NK-GvoyIYe0s6JU10KdkrAHaER&pid=Api&P=0&w=302&h=174"
            alt="logo"
            className="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1> Sign In</h1>
          <input
            type="email"
            placeholder="email or phoneNumber"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now</b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
