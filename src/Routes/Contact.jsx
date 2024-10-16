import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [username, setusername] = useState("Name");
  const [email, setemail] = useState("Email");
  const [phone, setphone] = useState("Phone");
  const [prob, setprob] = useState("Write");

  const handleUsername = (e)=> {
    setusername(e.target.value)
  };

  const handleEmail = (e)=>{
    setemail(e.target.value)
  }
  
  
  const handlePhone = (e)=>{
    setpassword(e.target.value)
  }

  const handleProb = (e)=>{
    setpassword(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventefault();
    setusername("Username");
    setphone("Phone");
    setemail("Email");
    setprob("Write");
  }

  return (
    <form className="contact">
      <input
        type="text"
        name="name"
        className="contactData"
        value={username}
        onChange={handleUsername}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="contactData"
        value={email}
        onChange={handleEmail}
      />

      <input type="number" name="phone" id="phone" placeholder="Phone Number" className="contactData" value={phone} onChange={handlePhone}/>

      <input type="text" name="prob" id="prob" placeholder="Write" className="contactData" value={prob} onChange={handleProb}/>
      <button className="contactSubmit">Submit</button>
    </form>
  );
};

export default Contact;
