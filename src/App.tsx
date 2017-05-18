import * as React from "react";

// App components
import Bookcard from "./components/Bookcard";
import Header from "./components/Header";

// TS types
import IBook from "./types/book";

const TestBook: IBook = {
    clubDate: new Date("01/01/2018"),
    pages: 352,
    title: "Catch22",
    image: require("./assets/images/catch22.jpg"),
};

export default () => (
    <div>
        <Header
            title="Bookclub Buddy"
            subtitle="this is awesome"
        />
        <Bookcard
            book={ TestBook }
        />
    </div>
);
