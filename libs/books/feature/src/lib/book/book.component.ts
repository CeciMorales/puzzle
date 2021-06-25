import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, ReadingListItem } from '@tmo/shared/models';
import {
  addToReadingList,
  removeFromReadingList
} from '@tmo/books/data-access';
import { UiService } from '../ui.service';


@Component({
  selector: 'tmo-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private readonly store: Store,  
    private uiService: UiService
    
    
  ) { }

  ngOnInit(): void {
  }

  addBookToReadingList(book: Book) {
    this.store.dispatch(addToReadingList({ book }));
    //this.uiService.toggle();
    this.uiService.openActionMessage(book.title, "added");
    
  }

  removeFromReadingList(book: Book) {
    const bookId = book.id;
    const item = {...book, bookId}
    this.store.dispatch(removeFromReadingList({ item }));
    //this.uiService.toggle();
    this.uiService.openActionMessage(item.title, "removed");
  }

  

}
