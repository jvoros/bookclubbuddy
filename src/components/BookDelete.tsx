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
        this.state = {
            changedbook: {
                title: this.props.book.title,
                pages: this.props.book.pages,
                clubDate: this.props.book.clubDate,
                image: this.props.book.image,
             },
        };
    }

    deleteBook = () => {
        this.props.store.deleteBook(this.props.book.id);
        this.props.close();
    }

    render() {
        return (
           <Modal title="Add/Edit">
                <h1>Delete</h1>
                <p>Are you sure you want to delete {this.props.book.title}?</p>
                <button onClick={this.deleteBook}>DELETE</button>
                <button onClick={this.props.close}>CLOSE</button>
                <style jsx>{`
                input {
                    display: block;
                }
            `}</style>
        </Modal>
        );
    }
}
