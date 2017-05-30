import * as React from "react";

import Book from "../store/Book";
import BookStore from "../store/BookStore";
import BookDelete from "./BookDelete";
import BookEdit from "./BookEdit";
import Button from "./Button";

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
                    <ul className="meta">
                        <li>
                            <i className="fa fa-calendar-o" aria-hidden="true"></i> {this.props.book.clubDate}
                        </li>
                        <li>
                            <i className="fa fa-book" aria-hidden="true"></i> Pages read:&nbsp;
                            <b>{this.props.book.currentPage}</b>
                        </li>
                    </ul>
                    <div className="ppd">
                        <b>{this.props.book.ppd}</b> pages per day
                    </div>
                    <div>
                        <Button options={["small"]} onClick={this.toggleModal}>
                            <i className="fa fa-pencil" aria-hidden="true"></i> Edit
                        </Button>
                        <Button options={["small"]} onClick={this.toggleDeleteModal}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </Button>
                    </div>
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
                        min-height: 230px;
                        background-color: white;
                        border: 1px solid ${ colors.borders };
                        // box-shadow: 0px 1px 12px 1px rgba(0,0,0,0.22);
                        border-radius: 2px;
                    }

                    img {
                        max-width: 150px;
                        margin: 0 ${ spacing.margins } 0 0;
                    }

                    .details {
                        display: flex;
                        flex-flow: column nowrap;
                        flex-grow: 1;
                    }

                    h1 {
                        width: 100%;
                        font-weight: lighter;
                        font-size: 36px;
                        margin: 0 0 ${ spacing.margins } 0;

                    }

                    .meta {
                        margin: 0;
                        display: inline;
                        padding: 0;
                    }

                    .ppd {
                        flex-grow: 1;
                        font-size: 30px;
                        font-weight: lighter;
                        color: ${ colors.primary };
                        padding-top: 30px;
                        text-align: center;
                    }

                    li {
                        display: inline;
                        padding: 0 20px 0 0;
                    }
                `}</style>
            </div>
        );
    }
}
