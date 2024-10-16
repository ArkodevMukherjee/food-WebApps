import { Route, Routes } from "react-router-dom";
import {useState} from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Routes/Home/Home";
import "./index.css";
import Contact from "./Routes/Contact";
import LogIn from "./LogIn";

function App() {
  const [logIn, setLogin] = useState(false);  
  const [login, setlogin] = useState(false)

  return (
    <>
      {logIn ?<LogIn setLogin={setLogin} login={login} /> :""}
      <Navbar setLogin={setLogin} setlogin={setlogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
