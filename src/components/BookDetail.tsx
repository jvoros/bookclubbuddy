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
                <div><img src={this.props.book.image} /></div>
                <div className="details">
                    <h1>{this.props.book.title}</h1>
                    <p><b>{this.props.book.clubDate}</b></p>
                    <p><b>Current page</b>: {this.props.book.currentPage}</p>
                    <p><b>{this.props.book.ppd}</b> pages per day</p>
                    <button onClick={this.toggleModal}>Edit</button>
                    <button onClick={this.toggleDeleteModal}>Delete</button>
                </div>
                <div className="ppd">
                    <h1>{this.props.book.ppd}</h1>
                    <div>pages per day</div>
                </div>
                { this.state.modal &&
                    <BookEdit
                        title="Edit"
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
                <style jsx>{`
                    .wrap {
                        display: flex;
                        margin: ${ spacing.margins } 0;
                        padding: ${ spacing.padding };
                        background-color: white;
                        border: 1px solid ${ colors.borders };
                        box-shadow: 0px 1px 12px 1px rgba(0,0,0,0.22);
                        border-radius: 2px;
                    }

                    img {
                        max-width: 150px;
                        margin-right: ${ spacing.margins };
                    }

                    .details {
                        flex-grow: 1;
                    }

                    .ppd {
                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: center;
                        width: 150px;
                        background: ${ colors.primary };
                        color: ${ colors.primary_text };
                        text-align: center;
                    }

                    .ppd h1 {
                        font-family: "Shadows Into Light Two", serif;
                        font-size: 80px;
                        font-weight: normal;
                        margin: ${ spacing.margins };
                    }
                `}</style>
            </div>
        );
    }
}
