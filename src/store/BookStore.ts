import { autorun, computed, observable } from "mobx";
import Book from "./Book";

class BookStore {
    @observable books: Book[] = [];

    constructor() {
        this.repoll();
    }

    repoll() {
        const booklist = [];
        const keys = Object.keys(localStorage).filter((key) => key.includes("_book_"));
        keys.map((x) => {
            const book = new Book(JSON.parse(localStorage.getItem(x)));
            booklist.push(book);
        });
        this.books = booklist;
    }

    saveBook(b: Book): void {
        localStorage.setItem(b.id, JSON.stringify(b));
        this.repoll();
    }

    deleteBook(id: string): void {
        localStorage.removeItem(id);
        this.repoll();
    }
}

export default BookStore;
