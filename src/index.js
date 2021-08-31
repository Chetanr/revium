import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Carousal from "./Components/Carousal";
import Body from "./Components/Body";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Carousal />
    <Body />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
