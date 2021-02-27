import React from "react";
import "./App.less";
import { Routes } from "./routes";
import { TwitterIcon } from 'react-share';

function App() {
  return (
    <div className="App">
    <div className="Banner">
    <div className="Banner-description">
    Pycaswap is unaudited software. Use at your own risk.
    </div>
    </div>
    <Routes />
    <div className="social-buttons">

    <a
      href={"https://twitter.com/pyca_cc"}
      target="_blank"
      rel="noopener noreferrer"
    >
    <TwitterIcon size={50} round />
    </a>

    </div>
    </div>
  );
}

export default App;
