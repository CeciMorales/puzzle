import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, ReadingListItem } from '@tmo/shared/models';
import {
  addToReadingList, getReadingList, getTotalUnread,
} from '@tmo/books/data-access';
import { UiService } from '../ui.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'tmo-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Input() finished: any;
  readingList$: Observable<ReadingListItem[]>  
  readingListLength$ : Observable<number>;

  constructor(
    private readonly store: Store,
    private uiService: UiService
  ) {
    this.readingList$ = this.store.select(getReadingList);
    this.readingListLength$ = this.store.select(getTotalUnread);
  

  }

  ngOnInit(): void {
  }

  addBookToReadingList(book: Book) {
    this.store.dispatch(addToReadingList({ book }));
  }

  findFinishedState(id: string) {
    return this.readingList$.subscribe(items => 
      items.find(item => item.bookId === id).title
    )
  }

  getReadingListLength() {
    console.log('reading list length')
    this.readingListLength$.subscribe((item) => {
      console.log(item);

    })
  }


}
