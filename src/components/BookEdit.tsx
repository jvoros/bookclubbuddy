import * as React from "react";

// App components
import Book from "../store/Book";
import BookStore from "../store/BookStore";
import Button from "./Button";
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
           <Modal title={this.props.title} close={this.props.close}>
                <form>
                    <label>title: </label>
                    <input type="text" name="title" id="title"
                    value={this.state.changedbook.title} onChange={this.handleChange} />

                    <label>pages: </label>
                    <input type="number" name="pages"
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
                <Button options={["small"]}>
                    <i className="fa fa-search" aria-hidden="true"></i> Search Goodreads for cover...
                </Button>
                <br />
                <img src={this.state.changedbook.image} />
                <br />
                <Button options={["small"]} onClick={this.saveBook}>
                    <i className="fa fa-check" aria-hidden="true"></i> SAVE
                </Button>
                <Button options={["small"]} onClick={this.props.close}>
                    <i className="fa fa-times" aria-hidden="true"></i> CLOSE
                </Button>
                <style jsx>{`
                label {
                    color: ${ colors.primary_dark };
                }

                input {
                    display: block;
                    margin: ${ spacing.margins } 0;
                    border: 0;
                    border-bottom: 1px solid ${ colors.primary_dark };
                    font-size: 20px;
                }

                #title {
                    width: 90%;
                }

                img {
                    max-width: 150px;
                    margin: ${ spacing.margins };
                }
            `}</style>
        </Modal>
        );
    }
}
