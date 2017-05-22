import { computed, observable } from "mobx";
import * as moment from "moment";

import { IBook } from "../types/interfaces";

export default class Book {
    @observable id: string;
    @observable title: string;
    @observable pages?: number;
    @observable currentPage?: number;
    @observable clubDate?: string;
    @observable image?: string;

    constructor(bookObject: IBook) {
        this.id = bookObject.id ? bookObject.id : "_book_" + Date.now();
        this.title = bookObject.title;
        this.pages = bookObject.pages;
        this.currentPage = bookObject.currentPage ? bookObject.currentPage : 0;
        this.clubDate = bookObject.clubDate;
        this.image = bookObject.image;
    }

    @computed get ppd(): number {
        if (this.pages && this.clubDate) {
            const daysLeft: number = moment(this.clubDate, "M/D/YYYY").diff(moment(), "days");
            return Math.ceil((this.pages - this.currentPage) / daysLeft);
        }
        return null;
    }

    updateBook(bookObject: IBook) {
        const keys = Object.keys(bookObject);
        keys.map((key) => {
            this[key] = bookObject[key];
        });
    }
}
