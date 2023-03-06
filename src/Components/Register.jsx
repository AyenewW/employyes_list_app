import { useState, React } from "react";
import { Button } from "@mui/material";
import axios from "axios";
 import "./Register.css";

export const Register = (props) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = "https://sheltered-retreat-76244.herokuapp.com/api/user";

  const userInfo = { username, email, password };
  const handleSignup = async () => {
    try {
      const response = await axios.post(`${baseUrl}/signup`, userInfo);
      console.log("user info", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="authformcontainer">
      <h2 className="authformheading">Sign Up</h2>
      <form className="authform">
        <div className="authformgroup">
          <label htmlFor="name" className="authformlabel">
            User Name
          </label>
          <input
            className="authforminput"
            type="text"
            placeholder="Enter Your User Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="authformgroup">
          <label htmlFor="email" className="authformlabel">
            Email
          </label>
          <input
            className="authforminput"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="authformgroup">
          <label htmlFor="password" className="authformlabel">
            Password
          </label>
          <input
            className="authforminput"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          onClick={handleSignup}
           
          className="authformbtn"
        >
          Sign Up
        </Button>
      </form>
      <div className="authformtoggle">
        Already have an account?
        <button
          className="authformtogglebtn"
          onClick={() => props.toggleForm("login")}
        >
          Log In
        </button>
      </div>
    </div>
  );
};
