import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  searchBooks,
  confirmedAddToReadingList
} from '@tmo/books/data-access';
import { FormBuilder } from '@angular/forms';
import { Book } from '@tmo/shared/models';
import { Observable, Subject } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { UiService } from '../ui.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit, OnDestroy {
  books$: Observable<ReadingListBook[]>;
  destroyed$ = new Subject<boolean>();

  searchForm = this.fb.group({
    term: ''
  });

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    public updates$: Actions,
    private uiService: UiService
    
  ) {
    this.books$ = this.store.select(getAllBooks)

    updates$.pipe(
      ofType(confirmedAddToReadingList),
      // take until this.destroyed$ === false
      takeUntil(this.destroyed$)
    )
    .subscribe((item) => {
      this.uiService.openActionMessage(item.book, "added")

    });
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

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
