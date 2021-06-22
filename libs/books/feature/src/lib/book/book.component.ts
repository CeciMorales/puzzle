import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, ReadingListItem } from '@tmo/shared/models';
import {
  addToReadingList,
} from '@tmo/books/data-access';

@Component({
  selector: 'tmo-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
  }

  addBookToReadingList(book: Book) {
    this.store.dispatch(addToReadingList({ book }));
  }

}
