import * as React from "react";

import Book from "../store/Book";
import BookStore from "../store/BookStore";
import BookDelete from "./BookDelete";
import BookEdit from "./BookEdit";

import { colors, spacing } from "./Theme";

interface IProps {
    book: Book;
    store: BookStore;
}

export default class BookDetail extends React.Component<IProps, { modal?: boolean; deleteModal?: boolean; }> {

    constructor(props) {
        super(props);
        this.state = { modal: false };
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    toggleDeleteModal = () => {
        this.setState({ deleteModal: !this.state.deleteModal });
    }

    render() {
        return (
            <div className="wrap">
                <img src={this.props.book.image} />
                <div className="details">
                    <h1>{this.props.book.title}</h1>
                    <p><b>{this.props.book.clubDate}</b></p>
                    <p><b>{this.props.book.ppd}</b> pages per day</p>
                    <button onClick={this.toggleModal}>Edit</button>
                    <button onClick={this.toggleDeleteModal}>Delete</button>
                    { this.state.modal &&
                    <BookEdit
                        store={this.props.store}
                        book={this.props.book}
                        close={this.toggleModal}
                    />
                    }
                    { this.state.deleteModal &&
                    <BookDelete
                        store={this.props.store}
                        book={this.props.book}
                        close={this.toggleDeleteModal}
                    />
                    }
                </div>
                <style jsx>{`
                    .wrap {
                        display: flex;
                        border-bottom: 1px solid black;
                    }

                    img {
                        float: left;
                    }
                `}</style>
            </div>
        );
    }
}
