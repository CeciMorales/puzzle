import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  searchBooks
} from '@tmo/books/data-access';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '@tmo/shared/models';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books$: Observable<ReadingListBook[]> ;

  searchForm: FormGroup;
  term = '';

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    
  ) {
    this.books$ = this.store.select(getAllBooks)
  }

  get searchTerm(): string {
    return this.searchForm.value.term
  }

  ngOnInit(): void {
    
    this.searchForm = this.fb.group({
        term: [this.term]
      });
  
      this.searchForm.controls['term']
        .valueChanges
        .pipe(
          debounceTime(500),
          distinctUntilChanged()
        )
        .subscribe((value) => this.searchBooks())
    
  }

  searchExample() {
    this.searchForm.controls.term.setValue('javascript');
    this.searchBooks();
  }

  searchBooks() {

    if (this.term) {
      this.store.dispatch(searchBooks({ term: this.searchTerm }));
    } else {
      this.store.dispatch(clearSearch());
    }
  }

}
