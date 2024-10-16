import "./LogIn.css";
import { useState } from "react";

const LogIn = ({ setLogin, login }) => {
  const [username, setusername] = useState("Username");
  const [email, setemail] = useState("Email");
  const [password, setpassword] = useState("Password");

  const handleUsername = (e)=> {
    setusername(e.target.value)
  };

  const handleEmail = (e)=>{
    setemail(e.target.value)
  }
  
  
  const handlePassword = (e)=>{
    setpassword(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventefault()
    setusername("Username")
    setemail("Email")
    setpassword("Password")
  }

  return (
    <div className="login">
      <form className="log" onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center", margin: "10px" }}>
          {login ? "Log In" : "Sign Up"}
        </h1>
        {login ? (
          ""
        ) : (
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsername}
          />
        )}
        <input type="text" name="email" id="email" value={email} onChange={handleEmail} />
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <div className="buttons">
          <button id="submit" className="contactSubmit">
            Submit
          </button>
          <button
            id="submit"
            className="contactSubmit"
            onClick={() => {
              setLogin(false);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
