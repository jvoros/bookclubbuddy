import * as React from "react";

// App components
import BookCard from "./components/BookCard";
import Header from "./components/Header";

// TS types
import IBook from "./types/book";

const TestBook: IBook = {
    clubDate: "06/01/2017",
    pages: 352,
    title: "Catch22",
    image: require("./assets/images/catch22.jpg"),
};

const TestBook2: IBook = {
    clubDate: "07/01/2017",
    pages: 560,
    title: "Fellowhsip of the Ring",
    image: require("./assets/images/catch22.jpg"),
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

// localStorage.setItem(guid(), JSON.stringify(TestBook));

export default class App extends React.PureComponent<null, null> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        localStorage.clear();
        localStorage.setItem(guid(), JSON.stringify(TestBook));
        const keys = Object.keys(localStorage);
        console.log(localStorage.getItem(keys[0]));
    }

    render() {
        return (
            <div>
                <Header
                    title="Bookclub Buddy"
                    subtitle="this is awesome"
                />
                <BookCard book={ TestBook }/>
                <BookCard book={ TestBook2 } />
            </div>
        );
    }
}
