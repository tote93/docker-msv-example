import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "./axios";
function App() {
  const [user, setuser] = useState(null);
  const handleClick = () => {
    axios.get("/").then((resp) => setuser(resp.data.user));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>
        <button onClick={() => handleClick()}>Get User</button>
        {user && <h1 style={{ color: "#fff" }}>USER: {user}</h1>}
      </header>
    </div>
  );
}

export default App;
