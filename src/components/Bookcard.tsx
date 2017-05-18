import * as React from "react";

import IBook from "../types/book";

interface IProps {
  book: IBook;
}
interface State {}

export default class BookCard extends React.PureComponent<IProps, State> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
     <p>{this.props.book.title}</p>
    );
  }
}
