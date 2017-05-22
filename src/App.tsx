import { observer } from "mobx-react";
import * as React from "react";

// App components
import BookDetail from "./components/BookDetail";
import BookEdit from "./components/BookEdit";
import Header from "./components/Header";
import Book from "./store/Book";
import BookStore from "./store/BookStore";

interface IState {
    modal?: boolean;
    modalBook?: Book;
}

@observer
export default class App extends React.Component<{store: BookStore}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    }

    handleAdd = () => {
        const newBook = new Book({ title: "New Book" });
        this.setState({ modal: true, modalBook: newBook });
    }

    handleModalClose = () => {
        this.setState({ modal: false });
    }

    render() {
        const { books } = this.props.store;
        const bookList = books.map((x) => (
            <BookDetail key={x.id} book={x} store={this.props.store} />
        ));
        return (
            <div>
                <Header
                    title="Bookclub Buddy"
                    subtitle="this is awesome"
                />
                {bookList}
                { this.state.modal &&
                <BookEdit
                    store={this.props.store}
                    book={this.state.modalBook}
                    close={this.handleModalClose}
                />
                }
                <button onClick={this.handleAdd}>+ Add Book</button>
            </div>
        );
    }
}
