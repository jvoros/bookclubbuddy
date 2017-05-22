import * as React from "react";

// App components
import Book from "../store/Book";
import BookStore from "../store/BookStore";
import Modal from "./Modal";
import { colors, spacing } from "./Theme";

interface IProps {
    store: BookStore;
    book: Book;
    close(): void;
}

export default class BookEdit extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }

    deleteBook = () => {
        this.props.store.deleteBook(this.props.book.id);
        this.props.close();
    }

    render() {
        return (
           <Modal title="Delete">
                <p>Are you sure you want to delete {this.props.book.title}?</p>
                <button onClick={this.deleteBook}>DELETE</button>
                <button onClick={this.props.close}>CLOSE</button>
                <style jsx>{`

                `}</style>
            </Modal>
        );
    }
}
