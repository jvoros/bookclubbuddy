import * as React from "react";

import { colors, spacing } from "./Theme";

import IBook from "../types/book";

interface IProps {
  book: IBook;
}

export default class BookCard extends React.PureComponent<IProps, ""> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
     <div className="card">
       <img src={this.props.book.image} />
       <h2>{this.props.book.title}</h2>

       <style jsx>{`
            .card {
              margin: ${ spacing.margins };
              padding: ${ spacing.padding };
              border: 1px solid ${ colors.borders };
              overflow: hidden;
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
