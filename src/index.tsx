// React
import * as React from "react";
import * as ReactDOM from "react-dom";

// Static components
import "normalize.css";
import "./assets/images/favicon.ico";
import "./index.html";

// App components
import App from "./App";
import Book from "./store/Book";
import BookStore from "./store/BookStore";

// Dummy Data
const TestBook = new Book({
    clubDate: "06/01/2017",
    pages: 352,
    title: "Catch22",
    image: require("./assets/images/catch22.jpg"),
});

const TestBook2 = new Book({
    clubDate: "07/01/2017",
    pages: 560,
    title: "Fellowhsip of the Ring",
    image: require("./assets/images/catch22.jpg"),
});

// for development only, putting dummy starter data in
// localStorage.clear();
// localStorage.setItem(TestBook.id, JSON.stringify(TestBook));
// localStorage.setItem(TestBook2.id, JSON.stringify(TestBook2));

const bstore = new BookStore();

// Render it
ReactDOM.render(
  <App store={bstore} />,
  document.getElementById("root"),
);
