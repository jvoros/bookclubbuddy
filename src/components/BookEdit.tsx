import * as React from "react";

// App components
import Book from "../store/Book";
import BookStore from "../store/BookStore";
import Modal from "./Modal";
import { colors, spacing } from "./Theme";

import { IBook } from "../types/interfaces";

interface IProps {
    title: string;
    store: BookStore;
    book: Book;
    close(): void;
}

interface IState {
    changedbook: IBook;
}

export default class BookEdit extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            changedbook: {
                title: this.props.book.title,
                pages: this.props.book.pages,
                currentPage: this.props.book.currentPage,
                clubDate: this.props.book.clubDate,
                image: this.props.book.image,
             },
        };
    }

    saveBook = () => {
        this.props.book.updateBook(this.state.changedbook);
        this.props.store.saveBook(this.props.book);
        this.props.close();
    }

    handleChange = (e) => {
        this.setState({ changedbook: { ...this.state.changedbook, [e.target.name]: e.target.value }});
    }

    render() {
        return (
           <Modal title={this.props.title}>
                <form>
                    <label>title: </label>
                    <input type="text" name="title"
                    value={this.state.changedbook.title} onChange={this.handleChange} />

                    <label>pages: </label>
                    <input type="number" size={5} name="pages"
                    value={this.state.changedbook.pages}  onChange={this.handleChange} />

                    <label>Current Page: </label>
                    <input type="number" size={5} name="currentPage"
                    value={this.state.changedbook.currentPage}  onChange={this.handleChange} />

                    <label>book club date: </label>
                    <input type="text" size={10} name="clubDate"
                    value={this.state.changedbook.clubDate} onChange={this.handleChange} />

                    <label>image: </label>
                    <input type="text" name="image"
                    value={this.state.changedbook.image} onChange={this.handleChange} />
                </form>
                <button onClick={this.saveBook}>SAVE</button>
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
