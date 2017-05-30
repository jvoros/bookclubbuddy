import * as React from "react";

// App components
import Book from "../store/Book";
import BookStore from "../store/BookStore";
import Button from "./Button";
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
           <Modal title="Delete" close={this.props.close}>
                <p>Are you sure you want to delete</p>
                <h1>{this.props.book.title}?</h1>
                <Button options={["small", "alert"]} onClick={this.deleteBook}>
                    <i className="fa fa-trash" aria-hidden="true"></i> DELETE
                </Button>
                <Button options={["small"]} onClick={this.props.close}>
                    <i className="fa fa-times" aria-hidden="true"></i> CLOSE
                </Button>
            </Modal>
        );
    }
}
