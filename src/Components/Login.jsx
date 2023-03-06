import { useState, React } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import "./Login.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const baseUrl = "https://sheltered-retreat-76244.herokuapp.com/api/user";
  const userInfo = { email, password };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/login`, userInfo);
      console.log('response',response)
      const token = response?.data;
      console.log(token)
      localStorage.setItem("token", token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-form-heading">Login</h2>
      <form className="auth-form">
        <div className="auth-form-group">
          <label className="auth-form-label" htmlFor="email">
            Email
          </label>
          <input
            className="auth-form-input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            // id="email"
            value={email}
          />
          
        </div>
        
        <div className="auth-form-group">
          <label className="auth-form-label" htmlFor="password">
            Password
          </label>
          <input
            className="auth-form-input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            // id="password"
            value={password}
          />
        </div>

        <Button onClick={handleLogin} className="authformbtn">
          Login
        </Button>
      </form>
      <div className="authformtoggle">
        <span>Don't have an account?</span>
        <button
          className="authformtogglebtn"
          onClick={() => props.toggleForm("register")}
        >
          Register here.
        </button>
      </div>
    </div>
  );
};
