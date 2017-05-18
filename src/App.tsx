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
};

export default () => (
    <div>
        <Header
            title="Bookclub Buddyxxxxxx"
            subtitle="this is awesome"
        />
        <Bookcard
            book={ TestBook }
        />
    </div>
);



