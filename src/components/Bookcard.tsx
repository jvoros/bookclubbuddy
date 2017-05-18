// Node modules
import * as moment from "moment";
import * as React from "react";

// App components
import BookDetail from "./BookDetail";
import BookEdit from "./BookEdit";
import { colors, spacing } from "./Theme";

// TS types
import IBook from "../types/book";

interface IProps {
  book: IBook;
}

interface IState {
  editing: boolean;
}

export default class BookCard extends React.PureComponent<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEdit = () => {
    this.setState({ editing: true});
  }

  handleSave = () => {
    this.setState({ editing: false});
  }

  render() {
    return (
     <div>
      { !this.state.editing &&
      <BookDetail book={this.props.book} editPress={this.handleEdit} />
      }
      { this.state.editing &&
      <BookEdit book={this.props.book} savePress={this.handleSave} />
      }
      <style jsx>{`
        div {
          margin: ${ spacing.margins };
          padding: ${ spacing.padding };
          border: 1px solid ${ colors.borders };
          overflow: hidden;
        }
      `}</style>
    </div>
    );
  }
}
