// React
import * as React from "react";
import * as ReactDOM from "react-dom";

// Static components
import "normalize.css";
// import "./assets/images/favicon.ico";
import "./index.html";

// App components
import App from "./App";
import BookStore from "./store/BookStore";

const bstore = new BookStore();

// Render it
ReactDOM.render(
  <App store={bstore} />,
  document.getElementById("root"),
);
