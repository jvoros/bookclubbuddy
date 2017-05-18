import * as moment from "moment";
import * as React from "react";

import { colors, spacing } from "./Theme";

import IBook from "../types/book";

interface IProps {
  book: IBook;
  savePress(): any;
}

interface IState {
    title: string;
    clubDate?: string;
    pages?: number;
    image?: string;
}

export default class BookDetail extends React.PureComponent<IProps, IState> {
    constructor(props) {
    super(props);
    this.state = { ...this.props.book };
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  }

  handleSave = () => {
      const a = 1;
  }

  render() {
    return (
        <div>
            { this.state.title }<br />
            { this.state.clubDate }
            <img src={this.props.book.image} />
            <form>
                <label>
                    Title:
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                </label>
                <label>
                    Book Club Date:
                    <input type="text" name="clubDate" value={this.state.clubDate} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Save" onClick={this.props.savePress} />
            </form>
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
