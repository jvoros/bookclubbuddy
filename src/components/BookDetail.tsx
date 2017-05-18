import * as moment from "moment";
import * as React from "react";

import { colors, spacing } from "./Theme";

import IBook from "../types/book";

interface IProps {
  book: IBook;
  editPress(): any;
}

export default class BookDetail extends React.PureComponent<IProps, ""> {
    constructor(props) {
    super(props);
  }

  getDaysLeft() {
    const endDate = moment(this.props.book.clubDate, "MM/DD/YYYY");
    return endDate.diff(moment(), "days");
  }

  getPPD() {
    return Math.ceil(this.props.book.pages / this.getDaysLeft());
  }

  render() {
    return (
        <div>
            <img src={this.props.book.image} />
            <h2>{this.props.book.title}</h2>
            <p>Bookclub {this.props.book.clubDate}</p>
            <p><b>Days until book club:</b> {this.getDaysLeft()}</p>
            <p><b>{this.getPPD()} pages per day to finish in time</b></p>
            <button onClick={this.props.editPress}>Edit</button>
            <style jsx>{`
                h2 {
                color: ${ colors.primary };
                }

                img {
                float: left;
                width: 98px;
                height: 150px;
                margin-right: ${ spacing.margins };
                }

            `}</style>
        </div>
    );
  }
}
