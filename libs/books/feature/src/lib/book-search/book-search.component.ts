import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  getReadingList,
  getTotalUnread,
  ReadingListBook,
  searchBooks
} from '@tmo/books/data-access';
import { FormBuilder } from '@angular/forms';
import { Book, ReadingListItem } from '@tmo/shared/models';
import { Observable, Subscriber } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { FinishedStatePipe } from '../finished-state.pipe';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books$: Observable<ReadingListBook[]>;
  readingList$: Observable<ReadingListItem[]>

  searchForm = this.fb.group({
    term: ''
  });

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    
  ) {
    this.books$ = this.store.select(getAllBooks)
    this.readingList$ = this.store.select(getReadingList)
  }

  get searchTerm(): string {
    return this.searchForm.value.term;
  }

  ngOnInit(): void {
    
  }

  searchExample() {
    this.searchForm.controls.term.setValue('javascript');
    this.searchBooks();
  }

  searchBooks() {
    if (this.searchForm.value.term) {
      this.store.dispatch(searchBooks({ term: this.searchTerm }));
    } else {
      this.store.dispatch(clearSearch());
    }
  }

  showinfo() {
    this.books$.subscribe((item) => {
      console.log(item)
    })
  }

  getReadingListInfo() {
    console.log('reading list normal')
    this.readingList$.subscribe((item) => {
      console.log(item);

    })
  }

  findFinishedState(id: string) {
    let fin;
    this.readingList$.subscribe(items => 
      fin = items
    )
    return fin
    
  }

  setFinishedState(id: string) {
    let finishedState;
    console.log('hola', this.findFinishedState(id));
    //console.log(id, finishedState)
    //         (item.bookId === id && item.finished) ? true :  false

    // ! https://es.stackoverflow.com/questions/374922/observable-me-devuelve-un-subscriber-y-no-el-objeto
  }

  
} 


/*console.log('item', item.bookId, item.finished, id)
        if (item.bookId === id && item.finished) {
          console.log(true)
          return true
        } else {
          console.log('false')
          //return false
          return false
        }*/

          /*
    this.readingList$.pipe((items) => {
      return 
    })*/

    /**
     * return this.readingList$.pipe(
      map(series => series.find(series => series.bookId === id))
    );
     */
    